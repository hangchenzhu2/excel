# 🔧 Netlify部署故障排除指南

## 问题：Page not found (404错误)

### 🔍 问题诊断

当访问 `/chart-maker` 路径时出现404错误，这是典型的SPA路由问题。

### ✅ 解决方案

#### 方案1：检查文件上传完整性

确保以下文件都已正确上传到Netlify：

1. **检查dist目录内容**
   ```
   dist/
   ├── index.html
   ├── _redirects          ← 重要！
   ├── assets/
   ├── robots.txt
   ├── sitemap.xml
   └── favicon.svg
   ```

2. **重新部署步骤**
   ```bash
   # 重新构建
   npm run build
   
   # 检查_redirects文件
   cat dist/_redirects
   # 应该显示: /*    /index.html   200
   ```

#### 方案2：手动创建_redirects文件

如果_redirects文件丢失，在Netlify控制台中手动添加：

1. 登录Netlify控制台
2. 进入你的站点设置
3. 点击 "Redirects and rewrites"
4. 添加规则：
   - **From**: `/*`
   - **To**: `/index.html`
   - **Status**: `200`

#### 方案3：使用HashRouter (临时方案)

如果重定向仍然不工作，可以临时使用HashRouter：

```typescript
// src/App.tsx
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

// 其他代码保持不变，只需将BrowserRouter改为HashRouter
```

这样URL会变成 `https://your-site.netlify.app/#/chart-maker`

### 🚀 重新部署流程

#### 完整重新部署步骤：

1. **清理并重新构建**
   ```bash
   cd "excel maker"
   rm -rf dist
   npm run build
   ```

2. **验证构建输出**
   ```bash
   ls dist
   # 确保看到 _redirects 文件
   cat dist/_redirects
   # 应该显示: /*    /index.html   200
   ```

3. **重新上传到Netlify**
   - 删除旧的部署
   - 将新的 `dist` 文件夹拖拽到 Netlify Drop
   - 或者通过Git推送触发重新构建

### 🔍 验证部署

部署完成后，测试以下URL：

- ✅ `https://your-site.netlify.app/` (首页)
- ✅ `https://your-site.netlify.app/chart-maker` (图表制作页)
- ✅ 直接在浏览器地址栏输入上述URL

### 📋 检查清单

- [ ] `dist/_redirects` 文件存在且内容正确
- [ ] `netlify.toml` 文件在项目根目录
- [ ] 所有文件都已上传到Netlify
- [ ] 在Netlify控制台中没有构建错误
- [ ] 清除浏览器缓存后测试

### 🆘 如果问题仍然存在

1. **检查Netlify构建日志**
   - 在Netlify控制台查看 "Deploys" 页面
   - 检查是否有构建错误或警告

2. **检查网络面板**
   - 打开浏览器开发者工具
   - 查看Network面板是否有404请求
   - 检查是否正确加载了index.html

3. **联系支持**
   - 如果以上方案都不工作，可能是Netlify的特定问题
   - 提供具体的网站URL和错误信息

### 🔧 高级解决方案

如果标准重定向不工作，可以在 `netlify.toml` 中使用更具体的规则：

```toml
[[redirects]]
  from = "/chart-maker"
  to = "/index.html"
  status = 200

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

---
*最后更新: 2025年6月17日* 