FROM node:22-alpine

# Set the working directory
WORKDIR /usr/src/app
# Copy package.json and package-lock.json
COPY api/package.json api/yarn.lock ./
# Install dependencies
RUN yarn install --ignore-scripts --frozen-lockfile

# Copy the rest of the application code
COPY ./api/tsconfig.json ./api/tsconfig.build.json ./api/nest-cli.json ./
COPY ./api/apps/api ./apps/api
COPY ./api/libs ./libs

# Create a new user named "appuser" and set it as the current user
RUN addgroup -S appgroup && adduser -S appuser -G appgroup
RUN chown appuser:appgroup /usr/src/app
USER appuser

# Start the application
CMD ["yarn", "start:dev"]