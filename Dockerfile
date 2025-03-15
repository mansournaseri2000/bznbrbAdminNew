FROM node:20-alpine AS build

WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm install --force

COPY . . 
RUN npm run build

FROM node:20-alpine

ENV NODE_ENV=production 

WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm install --force 

COPY --from=build /app/.next ./.next
COPY --from=build /app/public ./public
COPY --from=build /app/next.config.js ./next.config.js

EXPOSE 8090

RUN chown -R node:node .

USER node

CMD ["npm", "start"]



# FROM node:20-alpine AS build 

# WORKDIR /home/ubuntu/bznbrbAdminNew

# COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"] 

# RUN npm install --force

# COPY . . 

# RUN npm run build 

# FROM node:20-alpine

# ENV NODE_ENV=production 

# WORKDIR /home/ubuntu/bznbrbAdminNew

# COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"] 

# RUN npm install --production --silent 

# COPY --from=build /usr/src/app/.next ./.next 

# COPY --from=build /usr/src/app/public ./public 

# COPY --from=build /usr/src/app/next.config.js ./next.config.js 

# EXPOSE 8090 

# RUN chown -R node /home/ubuntu/bznbrbAdminNew

# USER node 

# CMD ["npm", "start"]
