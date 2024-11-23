# Base Node.js image (adjust if needed)
FROM node:18-alpine AS base

# Install all node_modules (including dev dependencies)
FROM base AS deps

WORKDIR /app

COPY package*.json ./
RUN npm install --production=false

# Setup production node_modules
FROM base AS production-deps

ENV NODE_ENV=production

WORKDIR /app

COPY --from=deps /app/node_modules /app/node_modules
ADD package*.json ./
RUN npm ci --production

# Build the app
FROM base AS build

WORKDIR /app

COPY --from=deps /app/node_modules /app/node_modules

ADD . .
RUN npm run build  # Adjust if your build script name is different

# Finally, build the production image with minimal footprint
FROM base

ENV NODE_ENV=production

WORKDIR /app

COPY --from=production-deps /app/node_modules /app/node_modules
COPY --from=build /app/build /app/build
COPY --from=build /app/public /app/public
ADD . .

EXPOSE 3000

CMD ["npm", "run", "start"]  # Adjust if your start script name is different
