# setup postgres docker

```bash
docker compose up -d
```

# install deno dependencies
```bash
deno install --allow-scripts=npm:@prisma/client@6.0.0,npm:prisma@6.0.0,npm:@prisma/engines@6.0.0
```

# prisma tasks
```bash
deno task prisma:generate
deno task prisma:migrate
```

# run server
```bash
deno task quickstart
```
