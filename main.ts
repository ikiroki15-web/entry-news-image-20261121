// news-image-20261121 entry program.
//
// Writes this repository's finished front-page image to the output
// directory as entry.png, byte for byte. The image sums up the world
// news of Saturday 21 November 2026: missiles hitting Poland, the
// World Court's Rohingya genocide ruling against Myanmar, Cyclone
// Akvan crossing India's Odisha coast, a Wall Street slump, new
// UK-EU deals, Indonesia's fires and the COP31 talks' final stage.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, "entry.png");
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const target = join(outDir, "entry.png");

const bytes = readFileSync(source);
mkdirSync(outDir, { recursive: true });
writeFileSync(target, bytes);

const written = readFileSync(target);
if (written.length !== bytes.length) {
  throw new Error(
    `entry.png copy mismatch: wrote ${written.length} of ${bytes.length} bytes`,
  );
}
