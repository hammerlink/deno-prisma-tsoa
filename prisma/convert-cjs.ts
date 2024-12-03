import { walk } from 'jsr:@std/fs';
// import { move } from 'jsr:@std/fs/move';

if (!import.meta.main) {
    console.error('❌ This script should be executed as the main module');
    Deno.exit(1);
}

const GENERATED_PATH = './generated/client';
const requireRegex = /require\('([^\']+).js'\)/g;

console.log('🔄 Starting post-generate processing...');

try {
    for await (
        const entry of walk(GENERATED_PATH)
    ) {
        await processFile(entry.path);
    }
    console.log('✨ Post-generate processing completed successfully!');
} catch (error) {
    console.error('❌ Error during post-generate processing:', error);
    Deno.exit(1);
}

async function processFile(path: string): Promise<void> {
    if (Deno.statSync(path).isDirectory) return;
    if (!path.endsWith('.js')) return;
    try {
        const content = await Deno.readTextFile(path);
        let newContent = content;

        const matches = newContent.matchAll(requireRegex);
        for (const [match, content] of matches) {
            newContent = newContent.replaceAll(
                match,
                `require('${content}.cjs')`,
            );
        }

        if (content !== newContent) {
            await Deno.writeTextFile(path, newContent);
            console.log(`✅ Processed: ${path}`);
        }
        const newPath = path.replace(/\.js$/, '.cjs');
        await Deno.writeTextFile(newPath, newContent);
        await Deno.remove(path);
    } catch (error) {
        console.error(`❌ Error processing ${path}:`, error);
    }
}
