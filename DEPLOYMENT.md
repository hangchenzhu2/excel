# 📦 Netlify部署指南

## ✅ 部署前检查清单

### 文件准备状态
- [x] `netlify.toml` - Netlify配置文件已创建
- [x] `package.json` - 构建脚本已配置
- [x] `dist/` - 构建输出目录已生成
- [x] `README.md` - 项目文档已更新
- [x] 所有依赖已安装 (包括terser)

### 构建测试
- [x] `npm run build` 执行成功
- [x] 无TypeScript错误
- [x] 生成的文件包括：
  - `dist/index.html`
  - `dist/assets/` (CSS和JS文件)
  - `dist/robots.txt`
  - `dist/sitemap.xml`

## 🚀 部署方法

### 方法一：拖拽部署 (推荐新手)

1. **准备文件**
   ```bash
   # 确保在项目根目录
   cd "excel maker"
   
   # 构建项目
   npm run build
   ```

2. **上传到Netlify**
   - 打开 [Netlify Drop](https://app.netlify.com/drop)
   - 将整个 `dist` 文件夹拖拽到页面中
   - 等待上传完成
   - 获得临时域名 (如: https://random-name-123.netlify.app)

### 方法二：Git集成部署 (推荐)

1. **创建Git仓库** (如果还没有)
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Excel Chart Maker"
   ```

2. **推送到GitHub**
   - 在GitHub创建新仓库
   - 推送代码到仓库

3. **连接Netlify**
   - 登录 [Netlify](https://app.netlify.com)
   - 点击 "New site from Git"
   - 选择GitHub仓库
   - 配置构建设置：
     - **Build command**: `npm run build`
     - **Publish directory**: `dist`
     - **Node version**: `18` (在环境变量中设置)

## ⚙️ Netlify配置说明

### netlify.toml配置解释
```toml
[build]
  publish = "dist"          # 发布目录
  command = "npm run build" # 构建命令

[build.environment]
  NODE_VERSION = "18"       # Node.js版本

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200              # SPA路由支持

[[headers]]
  for = "/assets/*"
  [headers.values]
    Cache-Control = "max-age=31536000"  # 静态资源缓存1年
```

## 🔧 部署后配置

### 自定义域名 (可选)
1. 在Netlify控制台中点击 "Domain settings"
2. 添加自定义域名
3. 配置DNS设置

### HTTPS
- Netlify自动提供免费SSL证书
- 无需额外配置

### 环境变量
- 当前项目无需环境变量
- 如需添加，在Netlify控制台的 "Environment variables" 中设置

## 📊 性能优化建议

### 已实现的优化
- [x] 代码分割 (Vite自动处理)
- [x] 资源压缩 (terser)
- [x] 静态资源缓存
- [x] 响应式图片
- [x] SEO优化

### 可选优化 (未来改进)
- [ ] 图片懒加载
- [ ] Service Worker缓存
- [ ] CDN加速
- [ ] 代码分割优化

## 🐛 常见问题解决

### 构建失败
```bash
# 清理依赖重新安装
rm -rf node_modules package-lock.json
npm install
npm run build
```

### 路由404错误
- 确保 `netlify.toml` 中的重定向规则正确
- 检查 `[[redirects]]` 配置

### 图表不显示
- 检查Chart.js依赖是否正确安装
- 确认所有组件导入路径正确

## 📈 部署后测试

### 功能测试清单
- [ ] 首页加载正常
- [ ] 文件上传功能
- [ ] 图表生成功能
- [ ] 9种图表类型都能正常显示
- [ ] PNG/SVG下载功能
- [ ] CSV导出功能
- [ ] 分享链接功能
- [ ] 移动端响应式

### 性能测试
- [ ] Google PageSpeed Insights
- [ ] GTmetrix测试
- [ ] 移动端性能测试

## 🎉 部署完成

部署成功后，你将获得：
- 免费的HTTPS域名
- 自动CDN加速
- 无限带宽
- 自动部署 (Git集成)

**示例域名格式**: `https://your-site-name.netlify.app`

---
*最后更新: 2025年6月17日* 