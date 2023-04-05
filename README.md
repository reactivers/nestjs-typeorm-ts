# Installation

```
npx @reactivers/nestjs-typeorm-ts your-app-name
```

# Getting Started

- Make sure the ports "5442" and "4011" are available on your end!
  - Postgres -> `5442`
  - Backend -> `4011`
- Edit `.env` files before you start
- Edit `container_name` fields in `docker-compose.yml` file
- Edit `init.sql` database names
  > Note!
- Make sure database names are matched in `init.sql` and `.env` files!

# Running Tests

```
yarn test
yarn test:e2e
```

# Running Dev

```
yarn start:dev
```

# Docker

## BUILD

```
docker-compose up -d --build
```

## Address

The app will be running at

```
http://localhost:4011
```

# Clean

```
docker-compose down --remove-orphans --rmi "local" --volumes
```
