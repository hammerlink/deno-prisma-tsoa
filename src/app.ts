import { bootstrapServer } from './server.ts';

console.log(`app startup`);

try {
    bootstrapServer();
    console.log('boostrap ok');
} catch (err) {
    console.error(err);
    Deno.exit(1);
}
