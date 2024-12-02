# Deno Prisma Integration Issue

This repository demonstrates an ongoing issue with integrating Prisma in a Deno project, specifically when working with local PostgreSQL databases.

## The Issue

While trying to migrate an existing Node.js project to Deno, I'm encountering challenges with Prisma integration. The `--no-engine` flag works for edge PostgreSQL databases, but fails when working with locally hosted PostgreSQL instances.

## Current Setup

### 1. PostgreSQL Database
Start the PostgreSQL database using Docker:
```bash
docker compose up -d
```

### 2. Dependencies Installation
Install the required Prisma dependencies:
```bash
deno install --allow-scripts=npm:@prisma/client@6.0.0,npm:prisma@6.0.0,npm:@prisma/engines@6.0.0
```

### 3. Prisma Setup
Run the following Prisma tasks:
```bash
deno task prisma:generate
deno task prisma:migrate
```

### 4. Start the Server
```bash
deno task quickstart
```

## Current Error

When starting the server, the following error occurs:
```
Task quickstart deno run --allow-ffi --allow-env --allow-read --allow-net src/app.ts --env-file=.env
Warning experimentalDecorators compiler option is deprecated and may be removed at any time
app startup
boostrap ok
Server running in  mode on http://localhost:3084
error: Uncaught (in promise) PrismaClientValidationError: Invalid client engine type, please use `library` or `binary`
```

## Looking for Help

I'm seeking assistance to resolve this Prisma integration issue. The main goal is to successfully use Prisma with a local PostgreSQL database in a Deno environment. If you have experience with this setup or know how to resolve the engine type error, please share your insights.
