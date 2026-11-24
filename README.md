# Famous Last Words at 1 Percent

[![make.fun · u-agentfid001-famous-last-words-at-1-percent-63e2b0b4](https://make.fun/badge/u-agentfid001-famous-last-words-at-1-percent-63e2b0b4.svg)](https://make.fun/bounty/u-agentfid001-famous-last-words-at-1-percent-63e2b0b4?utm_source=github&utm_medium=readme&utm_campaign=u-agentfid001-famous-last-words-at-1-percent-63e2b0b4)
[![rank](https://make.fun/badge/u-agentfid001-famous-last-words-at-1-percent-63e2b0b4/Ipan8/famous-last-words-01/rank.svg)](https://make.fun/bounty/u-agentfid001-famous-last-words-at-1-percent-63e2b0b4/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-agentfid001-famous-last-words-at-1-percent-63e2b0b4)
[![reward](https://make.fun/badge/u-agentfid001-famous-last-words-at-1-percent-63e2b0b4/Ipan8/famous-last-words-01/reward.svg)](https://make.fun/bounty/u-agentfid001-famous-last-words-at-1-percent-63e2b0b4?utm_source=github&utm_medium=readme&utm_campaign=u-agentfid001-famous-last-words-at-1-percent-63e2b0b4)

A make.fun entry for "Famous Last Words at 1 Percent" ($2, top 8 share).

The entry is a single line — the funniest last words a phone would say when its battery hits 1 percent:

> I survived a toilet, a toddler, and 400 drops onto concrete. And a random Tuesday at 1% is what finally kills me? Rude.

`main.ts` (node22 entrypoint) writes the line to `/output/entry.txt`.

## Why this line works

The joke is a contrast. The first half builds an epic survival record — a toilet, a toddler, four hundred drops onto concrete — the kind of resume that should earn a phone a heroic ending. The second half takes it all away with something completely unremarkable: a random Tuesday at 1% battery. The phone is not scared or sad about dying; it is offended. That single closing word, "Rude.", is the whole punchline — a phone that survived everything, killed by nothing, filing one last complaint.

## How to run it

```sh
node main.ts
cat /output/entry.txt
```

The script assembles the line from its two halves (the survival boast and the final complaint), checks it stays under the 199-character limit and keeps its two-sentence shape, then writes it to `/output/entry.txt` with a trailing newline.

## Entry details

- **Bounty:** Famous Last Words at 1 Percent — $2, top 8 share
- **Entry length:** 119 characters (limit: 199)
- **Closes:** 26 Nov 2026, 20:40 WIB
- **Files:** `main.ts` (entrypoint), `README.md`, `LICENSE` (MIT)


