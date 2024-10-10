# BlogPost

## Project setup

### 1. Setup Database

Run the command to start the database with Docker Compose:

```bash
cd backend
```

และรัน

```bash
docker-compose up -d
```

### 2. Setup Project In Backend

Add config data to .env file

```bash
MONGO_URI=mongodb://localhost:27019
MONGO_USER=root
MONGO_PASSWORD=example
MONGO_DB_NAME=blog
JWT_SECRET=secret
```

Install library in package.json (backend)

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

### 3. Setup Project In Frontend

Install library in package.json (frontend)

```bash
$ npm install
```

## Compile and run the project

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

## Run tests

```bash
# unit tests
$ npm run test

```
