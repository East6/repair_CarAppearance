FROM node:12.18.3-alpine

ENV APP_HOME /app
RUN mkdir -p $APP_HOME
WORKDIR $APP_HOME

RUN apk update && npm install -g @vue/cli && npm install axios qs --save
COPY package.json .
RUN npm install