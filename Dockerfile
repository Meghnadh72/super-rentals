FROM node:14.18.1
RUN mkdir emberdataapp
WORKDIR /emberdataapp
RUN npm install -g ember-cli@3.24 --verbose
RUN npm install
CMD ["npm", "start"]
