FROM node:latest

WORKDIR /code/client

COPY package*.json /code/client/
RUN npm install
COPY . /code/client/
EXPOSE 3000
