FROM node:22-alpine

WORKDIR /app

COPY server/package*.json ./server/

RUN cd server && npm install

COPY server ./server

WORKDIR /app/server

CMD ["npm", "run", "dev"]