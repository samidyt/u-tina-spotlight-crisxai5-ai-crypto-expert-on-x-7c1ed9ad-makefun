// Entry program for the make.fun bounty "Spotlight @crisxai5: AI & Crypto Expert on X"
// (Node 22, standard library only). It copies POST.json from the repository
// root to the output directory, where the house gate reads it. That is all the
// program has to do: the entry itself is the X post, whose address POST.json
// names. Nothing this program writes about the post is scored.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR
// stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const SOURCE = join(BOT_DIR, 'POST.json');
const TARGET = join(OUTPUT_DIR, 'POST.json');

try {
  mkdirSync(OUTPUT_DIR, { recursive: true });
} catch (err) {
  console.error(`Output directory ${OUTPUT_DIR} could not be created: ${(err as Error).message}`);
  process.exit(1);
}

let raw: Buffer;
try {
  raw = readFileSync(SOURCE);
} catch (err) {
  console.error(`POST.json could not be read from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}

// The file must be a JSON object naming a post address in a `url` string.
// A template placeholder still parses, so this check passes until the real
// post address is filled in; the house gate refuses the placeholder itself.
let parsed: unknown;
try {
  parsed = JSON.parse(raw.toString('utf8'));
} catch (err) {
  console.error(`POST.json is not valid JSON: ${(err as Error).message}`);
  process.exit(1);
}
if (
  typeof parsed !== 'object' ||
  parsed === null ||
  !('url' in parsed) ||
  typeof (parsed as { url: unknown }).url !== 'string' ||
  ((parsed as { url: string }).url.length === 0) ||
  !(parsed as { url: string }).url.startsWith('https://')
) {
  console.error('POST.json must be a JSON object with a non-empty https:// `url` string.');
  process.exit(1);
}

// The address must point at X (x.com or twitter.com, with or without a
// www./mobile. prefix). The template placeholder uses x.com, so it passes
// this check too; the house gate refuses the placeholder itself.
const ALLOWED_HOSTS = new Set([
  'x.com',
  'www.x.com',
  'mobile.x.com',
  'twitter.com',
  'www.twitter.com',
  'mobile.twitter.com',
]);
let host: string;
try {
  host = new URL((parsed as { url: string }).url).hostname;
} catch {
  console.error('POST.json `url` is not a parseable URL.');
  process.exit(1);
}
if (!ALLOWED_HOSTS.has(host)) {
  console.error(`POST.json \`url\` must point at x.com or twitter.com, got host: ${host}`);
  process.exit(1);
}

try {
  writeFileSync(TARGET, raw);
} catch (err) {
  console.error(`POST.json could not be written to ${OUTPUT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}

// Confirm the copy is byte-identical to the source, so the two runs the
// grader performs always write the same bytes.
const written = readFileSync(TARGET);
if (!written.equals(raw)) {
  console.error('POST.json copy mismatch: output bytes differ from the source.');
  process.exit(1);
}
