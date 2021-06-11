FROM node:14
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
# COPY data.csv .
COPY webservice.js .
EXPOSE 3000
CMD [ "node", "webservice.js" ]
