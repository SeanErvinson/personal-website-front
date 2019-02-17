FROM node:alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 2127
CMD ["npm", "run", "serve", "--", "--port", "2127"]