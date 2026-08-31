import os
import re
import glob
from collections import defaultdict

all_files = glob.glob("src/**/*.tsx", recursive=True) + glob.glob("src/**/*.ts", recursive=True)

image_uses = defaultdict(list)

for filepath in all_files:
    with open(filepath, "r", encoding="utf-8") as f:
        lines = f.readlines()
    for line_num, line in enumerate(lines, 1):
        matches = re.findall(r"['\"`](/[a-zA-Z0-9_\-/\. ]+\.(?:jpg|jpeg|png|webp|JPG))['\"`]", line)
        for m in matches:
            if not m.startswith("/hero-") and not m.startswith("/favicon") and not m.startswith("/reels/"):
                image_uses[m].append((filepath, line_num))

print(f"Total distinct image paths found: {len(image_uses)}\n")

for img, occurrences in sorted(image_uses.items(), key=lambda x: -len(x[1])):
    if len(occurrences) > 1:
        print(f"=== DUPLICATE ({len(occurrences)} occurrences): {img} ===")
        for file, line in occurrences:
            print(f"  - {file}:{line}")
        print()
