FROM node:20-alpine

ENV NODE_ENV=production

WORKDIR /home/ubuntu/bznbrbAdminNew

COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]

RUN npm install --legacy-peer-deps --production --silent && mv node_modules ../

COPY . .

EXPOSE 8090

RUN chown -R node /app

USER node


CMD ["npm", "start"]
