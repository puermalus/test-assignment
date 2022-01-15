FROM node:alpine
WORKDIR /usr/local/src
COPY ./package.json ./
RUN npm install
COPY ./ ./
CMD ["npm", "start"]