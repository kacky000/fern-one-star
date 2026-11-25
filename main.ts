// Writes the entry: a one-line, one-star review of its owner, written by a houseplant (under 280 characters).
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const line = "★☆☆☆☆ Only waters me on the nights she cries, so it's monsoon or drought depending on her dating life. One star, for the window.";
const limit = 279;
if ([...line].length > limit) throw new Error(`entry is ${[...line].length} characters, over ${limit}`);
mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), line);
