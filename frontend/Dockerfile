FROM node:latest

RUN mkdir -p /app/frontend

WORKDIR /app/frontend

COPY package*.json .

RUN npm i

COPY . .

EXPOSE 4173

CMD [ "npm", "run", "dev" ]