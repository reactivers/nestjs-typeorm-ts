# Installation

```
npx @reactivers/nestjs-typeorm-ts your-app-name
```

# Getting Started

## Create Database

- Before you run `start:dev` script, you need to create database.
- Make sure the port "5442" is available on your end for `PostgreSQL`!
- Run the following command:

```
docker-compose up -d --build postgres
```

## Run Development

- Before running the dev server:
  - Make sure the port "3000" is available on your end!
  - Edit `.env.` files before you start
  - Edit `container_name` fields in `docker-compose.yml` file
  - Edit `init.sql` database names
    > Note!
  - Make sure database names are matched in `init.sql` and `.env` files!

`
yarn start:dev
`

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
