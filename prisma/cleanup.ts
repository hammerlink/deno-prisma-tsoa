import { emptyDir } from 'jsr:@std/fs';

const OUTPUT_DIR = './generated/client';

try {
    await emptyDir(OUTPUT_DIR);
    console.log(`✨ Cleaned output directory: ${OUTPUT_DIR}`);
} catch (error) {
    console.error(`❌ Error cleaning directory: ${error}`);
    Deno.exit(1);
}
