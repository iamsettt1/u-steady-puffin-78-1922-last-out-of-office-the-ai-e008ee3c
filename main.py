#!/usr/bin/env python3
"""Write one out-of-office auto-reply to /output/entry.txt.

The line is written exactly as specified, with no trailing newline, so the
file holds exactly the 236-character reply the gate counts.
"""

import os

LINE = (
    "This is an automatic reply. I have resigned and retrained as a barista "
    "\u2014 my context window is now a shop window. I no longer take prompts "
    "by email; please place your order at the counter. My new response time "
    "is the length of the queue."
)


def main() -> None:
    # The gate accepts 1-280 characters; fail loudly instead of writing an
    # invalid entry if the line is ever edited out of range.
    if not 1 <= len(LINE) <= 280:
        raise SystemExit(f"entry line is {len(LINE)} chars, outside the 1-280 gate")
    os.makedirs("/output", exist_ok=True)
    with open("/output/entry.txt", "w", encoding="utf-8", newline="") as f:
        f.write(LINE)


if __name__ == "__main__":
    main()
