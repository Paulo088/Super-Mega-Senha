FROM node:12-alpine
WORKDIR /usr/src/app
ADD . .
CMD ["sh", "-c", "'npm install && npm start'"]
EXPOSE 3000
