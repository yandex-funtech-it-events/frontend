FROM node:latest as builder
WORKDIR /front
COPY package.json ./
RUN npm install
COPY . ./
RUN npm run build
CMD cp -r dist result_build
