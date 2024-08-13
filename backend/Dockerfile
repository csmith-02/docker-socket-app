FROM node:alpine

RUN mkdir -p /app/src

WORKDIR /app/src

COPY package*.json /app/src/

RUN npm i

COPY . /app/src/

EXPOSE 3002

CMD [ "node", "index.js" ]