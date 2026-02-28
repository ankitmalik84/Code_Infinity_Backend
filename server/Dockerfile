# Use official Node.js image as the base (Alpine is a lightweight version)
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json first
# This allows Docker to cache the npm install step if your dependencies haven't changed
COPY package*.json ./

# Install only production dependencies (faster and keeps image smaller)
RUN npm ci --omit=dev

# Copy the rest of your application code
COPY . .

# Expose the port your Express app uses
EXPOSE 4000

# Start the application
CMD ["npm", "start"]
