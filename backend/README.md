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
