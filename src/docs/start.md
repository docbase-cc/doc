# 部署

1. 下载 Docker Compose 文件：

```bash
curl -L -o docker-compose.yaml https://unpkg.com/docbase/docker-compose.yaml
```

2. 修改`docker-compose.yaml`中以下环境变量

- MEILI_MASTER_KEY 设置 DocBase 应用密钥
- EMBEDDING_APIKEY 嵌入模型服务（默认为硅基流动）密钥

3. 启动服务

```bash
docker-compose up -d
```

即可访问 `http://localhost:3000` 

<div style="display: flex; flex-direction: column; align-items: center; gap: 20px;">
  <img src="/ui/token.png" alt="description" width="800" height="300"/>
</div>

输入你的 `MEILI_MASTER_KEY` 密钥，点击右下角设置按钮，切换到搜索页面进行搜索

<div style="display: flex; flex-direction: column; align-items: center; gap: 20px;">
  <img src="/ui/image.png" alt="description" width="800" height="300"/>
</div>
