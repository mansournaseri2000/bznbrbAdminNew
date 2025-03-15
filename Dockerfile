FROM node:20-alpine AS build 

WORKDIR /usr/src/app 

COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"] 

RUN npm install --silent 

COPY . . 

RUN npm run build 

FROM node:20-alpine

ENV NODE_ENV=production 

WORKDIR /usr/src/app 

COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"] 

RUN npm install --production --silent 

COPY --from=build /usr/src/app/.next ./.next 

COPY --from=build /usr/src/app/public ./public 

COPY --from=build /usr/src/app/next.config.js ./next.config.js 

EXPOSE 8090 

RUN chown -R node /usr/src/app 

USER node 

CMD ["npm", "start"]
