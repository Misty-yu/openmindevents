# 如何替换 “Our Previous Events” 图片

网站只使用仓库中的本地图片，不需要媒体后台或环境变量。

## 图片位置

将图片放入：

`public/images/past-events/`

当前页面使用以下文件名：

- `openmind-past-event-01.png`
- `openmind-past-event-02.png`
- `openmind-past-event-03.png`
- `openmind-past-event-04.png`
- `openmind-past-event-05.png`
- `openmind-past-event-06.png`
- `openmind-past-event-07.png`
- `openmind-past-event-08.png`

## 替换方法

1. 将新图片调整为横向比例，推荐 16:10。
2. 使用上面的文件名覆盖对应图片。
3. 保持扩展名为 `.png`；如果需要使用其他格式或增加图片数量，同时修改 `components/home/past-events.tsx` 中的 `eventImages` 数组。
4. 运行 `npm run build` 确认网站能够正常构建。

建议单张图片控制在 2 MB 以内，以减少页面加载时间。
