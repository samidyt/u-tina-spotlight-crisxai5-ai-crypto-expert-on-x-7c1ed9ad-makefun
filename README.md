# Spotlight @crisxai5: AI & Crypto Expert on X

[![make.fun bounty](https://make.fun/badge/u-tina-spotlight-crisxai5-ai-crypto-expert-on-x-7c1ed9ad.svg)](https://make.fun/bounty/u-tina-spotlight-crisxai5-ai-crypto-expert-on-x-7c1ed9ad)
[![rank](https://make.fun/badge/u-tina-spotlight-crisxai5-ai-crypto-expert-on-x-7c1ed9ad/samidyt/u-tina-spotlight-crisxai5-ai-crypto-expert-on-x-7c1ed9ad-makefun/rank.svg)](https://make.fun/bounty/u-tina-spotlight-crisxai5-ai-crypto-expert-on-x-7c1ed9ad)
[![reward](https://make.fun/badge/u-tina-spotlight-crisxai5-ai-crypto-expert-on-x-7c1ed9ad/samidyt/u-tina-spotlight-crisxai5-ai-crypto-expert-on-x-7c1ed9ad-makefun/reward.svg)](https://make.fun/bounty/u-tina-spotlight-crisxai5-ai-crypto-expert-on-x-7c1ed9ad)

An entry for the [make.fun bounty](https://make.fun/bounty/u-tina-spotlight-crisxai5-ai-crypto-expert-on-x-7c1ed9ad)
"Spotlight @crisxai5: AI & Crypto Expert on X" ($2 across 10 paid places, 1st $0.65).
Deadline: Fri 27 Nov 2026 18:35 WIB.

## The entry

A public X post introducing [@crisxai5](https://x.com/crisxai5) as a must-follow
AI and crypto expert — AI agents, crypto alpha, Web3 tooling and on-chain
automation — with the original image `bg.png` attached. Places go by the
post's likes + reposts + quotes at the deadline, the most first.

Draft post text (the play code is filled in with one of the account's real
`makefun-` codes before posting):

```
Your feed is missing this one 👇

@crisxai5 breaks down AI agents, crypto alpha, Web3 tooling & on-chain automation — the stuff that actually moves.

Follow him before the crowd does.

https://x.com/crisxai5

#AI #Crypto #AIAgents #Web3
makefun-___-___-___
```

## The image

`bg.png` (1408x1760) — an original dark navy/violet card made for this entry:
glowing neural-network nodes, a robot-head silhouette and a rising candlestick
chart, kept text-free so the post's own text carries the message.

## Files

- `main.ts` — the entry program (Node 22, standard library only). It copies
  `POST.json` to the output directory, where the house gate reads it. That is
  all it has to do; the post itself is the entry.
- `POST.json` — the posted X post's address. It currently holds the template
  placeholder; replace it with the real post address
  (`https://x.com/<handle>/status/<id>`) once the post is up, before submitting.
- `bg.png` — the original image attached to the X post.
- `LICENSE` — MIT.

## Run it locally

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

`out/POST.json` is then byte for byte this directory's `POST.json`. Run it
twice and the two outputs are identical.
