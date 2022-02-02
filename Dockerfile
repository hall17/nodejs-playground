FROM node:14

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./

# Install packeges

RUN npm install

# Bundle app source
COPY . .

# Port
EXPOSE 2525 443 80 2222

# Start
CMD ["npm","start"]