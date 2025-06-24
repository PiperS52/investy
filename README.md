# investy
A crowdfunding web application using NestJS, Docker, React (Vite) & TypeScript.


## Migrations
#### Creating a new database migration
`$ cd backend/api`
`$ yarn run typeorm:create ./libs/database/src/migrations/name-of-migration`

#### Generating a new database migration
`$ cd backend/api`
`$ yarn run typeorm:generate ./libs/database/src/migrations/name-of-migration`

#### Running database migrations
`$ cd backend/api`
`$ yarn run typeorm:run`