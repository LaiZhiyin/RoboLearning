# 部署说明

## 构建

在仓库根目录安装依赖并生成静态站点：

```bash
npm ci
npm run build
npm run check
```

构建产物位于 `dist/`。站点由静态 HTML、CSS、JavaScript 和资源文件组成，可部署到支持静态文件托管的 Web 服务器。

## 发布注意事项

- 将 `dist/` 中的文件发布到站点配置的文档根目录。
- 确保服务器将 HTTPS 证书和私钥保存在仓库之外，并由服务器侧的证书管理流程续期。
- 使用 SSH 密钥或托管平台的秘密管理功能进行部署认证；不要将密码、私钥、令牌或服务器配置提交到 Git。
- 更新文章数据后重新运行构建与检查，再发布新生成的 `dist/`。

当前线上站点：<https://robolearning.carcagem.online/>。
