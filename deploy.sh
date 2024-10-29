#!/bin/bash

# Stop any running instance
pm2 stop ubah-landing 2>/dev/null || true
pm2 delete ubah-landing 2>/dev/null || true

# Install dependencies
npm install

# Build the project
npm run build

# Start with PM2
pm2 start npm --name "studio-landing" -- start

# Save PM2 config
pm2 save

echo "Deployment completed!"
