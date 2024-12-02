import 'jsr:@std/dotenv/load';
import express from 'express';
import { ExpressConfiguration } from './resources/configuration/express.configuration.ts';
import { prisma } from './resources/prisma/client.ts';
import { RegisterRoutes } from './controllers/routes.ts';

const app = express();
const { host, port } = ExpressConfiguration;

export async function bootstrapServer() {
    // Body parser
    app.use(express.json({ limit: '8mb' }));
    app.use(express.urlencoded({ extended: true }));

    RegisterRoutes(app);

    app.listen(
        ExpressConfiguration.port,
        () => console.log(`Server running in  mode on ${host}:${port}`),
    );

    const sampleCount = await prisma().user.count();
    console.log('sample count:', sampleCount);
}
