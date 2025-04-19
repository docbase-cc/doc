# 部署

### 安装包启动

下载最新安装包：https://github.com/docbase-cc/docbase/releases

解压后运行 `docbase` 启动服务。

<!-- 
## cli 启动

1. 确保已安装`Bun`

[如何安装？](https://www.bunjs.cn/docs/installation#%E5%AE%89%E8%A3%85)

2. 启动服务

```bash
bun x docbase
```

## 使用 Docker

```
docker run -d -p 3000:3000 -v ./data:/root/.docbase gonorth/docbase:latest
```

## 使用 Docker Compose

1. 下载 Docker Compose 文件：

```bash
curl -L -o docker-compose.yaml https://unpkg.com/docbase/dist/docker-compose.yaml
```

2. 启动服务

```bash
docker-compose up -d
```

密钥默认为：mykey

生产环境请修改`docker-compose.yaml`中以下环境变量

- MEILI_MASTER_KEY: DocBase 的应用密钥 -->
