# Excel Chart Maker 📊

一个功能强大的在线Excel图表制作工具，支持将Excel数据转换为9种不同类型的专业图表。

## 🌟 功能特点

### 📤 数据输入
- 支持Excel文件上传 (.xlsx, .xls)
- 支持CSV文件上传
- 智能数据类型识别
- 自动列名检测

### 📊 图表类型 (9种)
**基础图表:**
- 📊 柱状图 - 比较类别数据
- 📈 折线图 - 显示趋势变化  
- 📉 面积图 - 强调数据量变化

**圆形图表:**
- 🥧 饼图 - 显示比例关系
- 🍩 环形图 - 现代化饼图
- 🎯 极地面积图 - 径向柱状图

**高级图表:**
- 🕸️ 雷达图 - 多维数据对比
- ⚪ 散点图 - 显示相关性
- 🫧 气泡图 - 三维数据可视化

### 🎨 自定义功能
- 4种专业调色板 (活力、柔和、专业、自然)
- 自定义图表标题
- 可调整图例位置
- 动画效果控制
- 响应式设计

### 💾 导出选项
- PNG格式下载 (高质量图片)
- SVG格式下载 (矢量图形)
- CSV数据导出
- 分享链接生成

## 🛠 技术栈

- **前端框架**: React 18 + TypeScript
- **构建工具**: Vite
- **图表库**: Chart.js + react-chartjs-2
- **样式**: TailwindCSS
- **文件处理**: XLSX.js
- **路由**: React Router DOM

## 🚀 开发环境设置

1. **克隆项目**
```bash
git clone [repository-url]
cd excel-maker
```

2. **安装依赖**
```bash
npm install
```

3. **启动开发服务器**
```bash
npm run dev
```
服务器将在 http://localhost:3000 启动

4. **构建生产版本**
```bash
npm run build
```

## 📦 部署到Netlify

### 方法一：拖拽部署
1. 运行 `npm run build` 构建项目
2. 将 `dist` 文件夹拖拽到 [Netlify Drop](https://app.netlify.com/drop)

### 方法二：Git集成部署
1. 将代码推送到GitHub/GitLab
2. 在Netlify中连接仓库
3. 设置构建配置：
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
   - **Node version**: `18`

### 环境变量 (可选)
无需额外环境变量，项目开箱即用。

## 🌐 浏览器支持

- ✅ Chrome (最新版)
- ✅ Firefox (最新版) 
- ✅ Safari (最新版)
- ✅ Edge (最新版)
- ✅ 移动端浏览器

## 📱 SEO优化

- 完整的meta标签配置
- 结构化数据标记
- 语义化HTML结构
- 移动端优化
- 快速加载时间

## 🔧 项目结构

```
excel-maker/
├── src/
│   ├── components/     # 可复用组件
│   ├── pages/         # 页面组件
│   ├── App.tsx        # 主应用组件
│   └── main.tsx       # 应用入口
├── public/            # 静态资源
├── dist/              # 构建输出
├── netlify.toml       # Netlify配置
└── package.json       # 项目配置
```

## 📄 许可证

MIT License - 可自由使用和修改
