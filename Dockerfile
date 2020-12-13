FROM node

COPY . .

EXPOSE 4001

CMD ["node","server.js"]