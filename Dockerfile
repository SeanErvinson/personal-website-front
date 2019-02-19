FROM node:alpine

# RUN npm install http-server -g

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build
RUN rm -rf ./build
RUN rm -rf ./test
RUN rm -rf ./src

EXPOSE 2127
CMD ["npm", "run", "serve", "--", "--port", "2127"]