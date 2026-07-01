#!/bin/bash
# 打包项目脚本（不含 node_modules）
# 创建时间：2026-07-01

PROJECT_NAME="conference-website"
OUTPUT_FILE="${PROJECT_NAME}-$(date +%Y%m%d-%H%M%S).zip"

echo "📦 正在打包项目..."
echo "📋 排除: node_modules, .next, .git"

# 排除大文件夹，只打包源代码
zip -r "$OUTPUT_FILE" . \
  -x "node_modules/*" \
  -x ".next/*" \
  -x ".git/*" \
  -x "*.log"

echo "✅ 打包完成: $OUTPUT_FILE"
echo "📊 文件大小: $(du -h "$OUTPUT_FILE" | cut -f1)"
