#!/bin/bash

# Script to download demo images for testing
# This downloads high-quality placeholder images from Unsplash

echo "Setting up demo images for OpenMind Events..."

IMAGE_DIR="public/images"

# Create directory if it doesn't exist
mkdir -p "$IMAGE_DIR"

# Array of image URLs (high-quality conference/event photos from Unsplash)
declare -a IMAGES=(
    "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=500&fit=crop&q=85&auto=format"
    "https://images.unsplash.com/photo-1552664730-40d0a88a3e38?w=800&h=500&fit=crop&q=85&auto=format"
    "https://images.unsplash.com/photo-1552664730-40d0a88a3e39?w=800&h=500&fit=crop&q=85&auto=format"
    "https://images.unsplash.com/photo-1552664730-40d0a88a3e40?w=800&h=500&fit=crop&q=85&auto=format"
    "https://images.unsplash.com/photo-1552664730-40d0a88a3e41?w=800&h=500&fit=crop&q=85&auto=format"
)

# Download images
for i in "${!IMAGES[@]}"; do
    num=$((i + 1))
    filename="$IMAGE_DIR/event$num.jpg"

    echo "Downloading event$num.jpg..."
    curl -s -L "${IMAGES[$i]}" -o "$filename"

    if [ -f "$filename" ]; then
        size=$(du -h "$filename" | cut -f1)
        echo "✓ Downloaded event$num.jpg ($size)"
    else
        echo "✗ Failed to download event$num.jpg"
    fi
done

echo ""
echo "Demo images setup complete!"
echo "Images are now available in: $IMAGE_DIR"
echo ""
echo "Run 'npm run dev' to see the images on the homepage."
