# Use the official Node.js 14 image as a base
FROM node:14 AS builder

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to leverage Docker cache layers
COPY package.json .
COPY package-lock.json .

# Install dependencies
RUN npm install
 
# Copy all local files into the container
COPY . .

EXPOSE 3000

# Build the app
RUN npm run dev