#!/bin/bash

echo "🛠️  Setting up the Idea Builder MVP..."

# Step 1: Install frontend dependencies
if [ -f package.json ]; then
  echo "📦 Installing Node.js dependencies..."
  npm install
else
  echo "⚠️  No package.json found in this directory. Are you in the root project folder?"
  exit 1
fi

# Step 2: Setup environment variables
if [ -f .env ]; then
  echo "✅ .env file already exists."
else
  if [ -f .env.example ]; then
    echo "📄 Creating .env from .env.example..."
    cp .env.example .env
  else
    echo "⚠️  .env.example not found. Skipping environment file setup."
  fi
fi

echo ""
echo "✅ Setup complete!"
echo "👉 You can now run the dev server:"
echo ""
echo "   npm run dev"
echo ""