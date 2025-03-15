FROM node:20-alpine AS build

ENV NODE_ENV=production
WORKDIR /app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install --legacy-peer-deps --production --force && mv node_modules ../
COPY . .
EXPOSE 8090
RUN chown -R node /app
USER node
CMD ["npm", "start"]
