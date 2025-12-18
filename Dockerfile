FROM node:23.11.1-alpine

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install ci --omit=dev

COPY . .

EXPOSE 3000

CMD ["node", "server.js"]
