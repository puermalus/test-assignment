FROM node:14-alpine
WORKDIR /usr/local/src
COPY ./package.json ./
RUN npm install
RUN npx browserslist@latest --update-db
COPY ./ ./
CMD ["npm", "start"]
