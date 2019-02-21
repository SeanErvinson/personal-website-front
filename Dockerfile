FROM node as builder

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build
RUN rm -rf ./build
RUN rm -rf ./test
RUN rm -rf ./src
RUN rm -rf ./public

FROM nginx:alpine

COPY default.conf /etc/nginx/conf.d/

RUN ls -lah
COPY --from=builder /usr/src/app /usr/src/app
RUN ls -lah /usr/src/app

EXPOSE 80
