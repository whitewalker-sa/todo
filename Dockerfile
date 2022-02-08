# syntax=docker/dockerfile:1

FROM node:12.19.0-alpine3.9 AS development

WORKDIR /usr/src/app

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install --only=development

COPY . .

RUN npm run build

FROM node:12.19.0-alpine3.9 AS production

ENV NODE_ENV=production

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --only=production

COPY --from=production /usr/src/app/dist ./dist

CMD [ "node", "dist/main" ]

