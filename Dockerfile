# Use the official Node.js image as the base image
FROM node:16

# Set the working directory in the container
WORKDIR /

# Copy package.json and package-lock.json (if exists)
COPY package*.json ./

# Install dependencies
RUN npm install -D

# Copy the rest of the application code
COPY . .

# Expose the port your application listens on (if applicable)
EXPOSE 3000

# Define the command to start your application
CMD ["npm", "start"]
