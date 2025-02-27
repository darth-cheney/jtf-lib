# stable version of node 
FROM node:14

# shift the working directory to /var/app/
WORKDIR /var/app

#copy package.json (dependencies)
COPY package.json package.json
COPY package-lock.json package-lock.json

#set environment variables
ENV PORT=3003 

#expose 
EXPOSE 3003

# install node modules
RUN npm install

# add app  
COPY . .

# make app up and running
CMD [ "npm", "start" ]