FROM node:21.6.2

# Install dependencies specific to your application

# Copy your application code
WORKDIR /app

COPY package.json ./
COPY yarn.lock ./
COPY . .

# Install additional dependencies
RUN yarn install

# Start your application
CMD [ "yarn start" ]
