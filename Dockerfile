# Stage 1: Build the Vite React application
FROM node:20-alpine AS build

WORKDIR /app

# Pass VITE_API_BASE as build argument from environment/.env
ARG VITE_API_BASE
ENV VITE_API_BASE=$VITE_API_BASE

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies using npm ci for deterministic builds
RUN npm ci

# Copy the rest of the application code
COPY . .

# Build the application (outputs to /app/dist)
RUN npm run build

# Stage 2: Serve the application using Nginx
FROM nginx:alpine

# Copy custom Nginx configuration to support SPA routing
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy the built files from the previous stage
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
