#Stage 1
FROM node:20-alpine as builder
WORKDIR /app
COPY package*.json .
RUN npm install
COPY . .
RUN npm build

#Stage 2
FROM nginx:latest
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=builder /app/build .
ENTRYPOINT ["nginx", "-g", "daemon off;"]