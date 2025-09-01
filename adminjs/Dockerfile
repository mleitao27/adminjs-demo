FROM node:latest

WORKDIR /usr/src/app/adminjs

COPY . ./

RUN npm install

EXPOSE 5001

CMD ["npm", "run", "dev"]