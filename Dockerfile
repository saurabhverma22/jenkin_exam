FROM node:17.9-slim

COPY . .

EXPOSE 4001

CMD ["node","server.js"]