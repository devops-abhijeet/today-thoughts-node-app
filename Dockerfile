FROM node:18-alpine

WORKDIR /app

# Copy only package files first
COPY package*.json ./

# Install only production dependencies
RUN npm ci --omit=dev

# Copy source code hi
COPY . .

EXPOSE 3000

CMD ["node", "server.js"]
