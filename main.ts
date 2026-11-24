import { mkdirSync, writeFileSync } from "node:fs";

// The entry: one line (under the 199-character limit), the funniest last words
// a phone would say when its battery hits 1%.
const ENTRY =
  "I survived a toilet, a toddler, and 400 drops onto concrete. And a random Tuesday at 1% is what finally kills me? Rude.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY + "\n");
