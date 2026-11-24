import * as fs from "node:fs";
import * as path from "node:path";

// Famous Last Words at 1 Percent — a make.fun entry.
//
// The joke, in one sentence: this phone is basically indestructible.
// It has already lived through every disaster a phone can meet —
// a swim in the toilet, a toddler using it as a drum, four hundred
// trips to the concrete floor — and it is still here, still working.
// So what finally finishes it off? Not any of that. Just an ordinary
// Tuesday, at one percent battery, for no heroic reason at all.
// The indignity is the punchline: after all that survival, the end
// is boring, random, and deeply rude. That contrast — epic survival
// versus a totally unremarkable death — is what makes the line funny.
//
// Approach: instead of hard-coding one flat string, this script builds
// the line from its two halves (the survival boast, then the complaint
// about the ending), checks the result fits the bounty limit, and only
// then writes it out. That way the structure of the joke stays visible
// in the code, and a bad edit that blows the length limit fails loudly
// instead of silently shipping a truncated entry.

const OUTPUT_DIR = "/output";
const OUTPUT_FILE = path.join(OUTPUT_DIR, "entry.txt");

// The bounty caps entries at 199 characters. Our line is 119, so we
// have comfortable headroom — but the guard below still enforces it,
// because a future tweak should never be able to break the rule.
const MAX_ENTRY_CHARS = 199;

// First half: the phone brags about everything it has already survived.
// Each item is a classic phone disaster, escalating from embarrassing
// (the toilet) to chaotic (the toddler) to absurdly numerous (400 drops).
function survivalBoast(): string {
  const ordeals = [
    "a toilet",
    "a toddler",
    "400 drops onto concrete",
  ];
  // Join with commas and an "and" before the last ordeal, so the line
  // reads naturally: "a toilet, a toddler, and 400 drops onto concrete".
  const last = ordeals[ordeals.length - 1];
  const rest = ordeals.slice(0, -1).join(", ");
  return `I survived ${rest}, and ${last}.`;
}

// Second half: the complaint. After all that, the thing that kills it
// is not dramatic at all — a random Tuesday, at 1% battery. The final
// word, "Rude.", is the phone's last verdict on the whole situation:
// not scared, not sad, just personally offended by the unfairness.
function finalComplaint(): string {
  const day = "a random Tuesday";
  const battery = "1%";
  return `And ${day} at ${battery} is what finally kills me? Rude.`;
}

// Join the two halves into the single entry line.
function assembleLastWords(): string {
  return `${survivalBoast()} ${finalComplaint()}`;
}

// Refuse to write anything over the limit, so a bad edit can never
// produce an entry the judges would reject on length alone.
function checkLength(line: string): void {
  if (line.length > MAX_ENTRY_CHARS) {
    throw new Error(
      `Entry is ${line.length} characters, over the ${MAX_ENTRY_CHARS} limit.`,
    );
  }
}

// A quick sanity check on the shape of the line: it should read as
// two sentences — the boast, then the complaint. If a future edit ever
// merges them into one run-on sentence, the joke loses its pause, so
// we guard the two-sentence shape here as well as the length.
function checkShape(line: string): void {
  const sentences = line.split(". ").length;
  if (sentences < 2) {
    throw new Error("Entry should be two sentences: boast, then complaint.");
  }
}

function saveEntry(line: string): void {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  fs.writeFileSync(OUTPUT_FILE, line + "\n", "utf8");
}

function main(): void {
  const line = assembleLastWords();
  checkLength(line);
  checkShape(line);
  saveEntry(line);
  // Say what we wrote, so a human running this locally can see the
  // exact entry without having to open the output file.
  console.log(`Wrote ${line.length}-character entry to ${OUTPUT_FILE}`);
}

main();
