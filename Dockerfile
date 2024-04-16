FROM node:21-alpine as build
WORKDIR /front
COPY . .
RUN npm install
RUN npm run build
FROM alpine:latest as app
WORKDIR /front
COPY --from=build /front/dist /front/build