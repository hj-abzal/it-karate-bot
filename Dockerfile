FROM node

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . .


EXPOSE 7542

CMD ['node', 'dist/index.js']