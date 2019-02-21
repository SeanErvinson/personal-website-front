FROM node:alpine

RUN npm install -g http-server

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build
RUN rm -rf ./build
RUN rm -rf ./test
RUN rm -rf ./src

EXPOSE 2127
CMD ["http-server", "-p", "2127", "-g", "--cors"]