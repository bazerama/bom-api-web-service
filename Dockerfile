# pull official base image
FROM node:12.22-alpine

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY yarn.lock ./
RUN yarn --silent install
RUN yarn --silent global add react-scripts@3.4.1
RUN yarn --silent global add serve
RUN yarn --silent global add pm2

# add app
COPY . ./

# build production optimised app
RUN yarn build

# allow listening on 4001
EXPOSE 4001

# start app
CMD ["yarn", "start:prod"]
