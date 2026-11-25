// Last Out of Office: The AI That Went Barista
// Writes one out-of-office auto-reply (<= 280 characters) to /output/entry.txt.
// Node 22, stdlib only. The line is fixed and deterministic: the joke is the
// entry, so the program's only job is to deliver it byte-exact, every run.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const LINE =
  "Thank you for your email. I have hallucinated a better career and left this inbox to become a barista. Your message is queued behind fourteen oat flat whites, and I no longer do instant replies \u2014 I do foam.";

const OUT = "/output/entry.txt";
const MAX_CHARS = 280;

// The gate refuses anything over 280 characters, so never ship a long line.
if (LINE.length > MAX_CHARS) {
  throw new Error(`Entry is ${LINE.length} characters, over the ${MAX_CHARS} limit`);
}

mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(OUT, LINE, "utf8");
console.log(`Wrote ${LINE.length} characters to ${OUT}`);
