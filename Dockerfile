FROM node:alpine3.13

ENV LANG=C.UTF-8 TZ=Asia/Tokyo

WORKDIR /itete-no-suke/front

RUN apk update && \
   apk add --no-cache git curl && \
   curl -o- -L https://yarnpkg.com/install.sh | sh

ENV PATH $HOME/.yarn/bin:$HOME/.config/yarn/global/node_modules/.bin:$PATH

COPY ../package.json ./
COPY ../yarn.lock ./

RUN yarn install

COPY ./ .

ENV HOST 0.0.0.0
EXPOSE 3000
