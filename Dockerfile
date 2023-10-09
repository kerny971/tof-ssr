FROM node:latest

WORKDIR /app

COPY . .
RUN npm install
RUN npx ng build
RUN npx ng run universal:server

EXPOSE 4000

CMD ["node", "dist/universal/server/main.js"]