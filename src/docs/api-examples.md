---
comment: false
---

# DocBase

DocBase 专注于自动构建专业 AI 知识库，特色是<mark>将本地文件实时嵌入到知识库引擎中</mark>。

```mermaid
graph TD
    用户 -- 增加、删除、修改 --> 本地文件
    本地文件 -- 自动感知变动 <--> DocBase
    subgraph DocBase
        DocBase核心 -- 自动推送并保持同步 --> 知识库引擎
    end
    AI-Agent -- 检索 --> 知识库引擎
    用户 -- 交互 <--> AI-Agent
```

<mark>无论是增加、删除还是修改操作</mark>，DocBase 都会<mark>自动更新</mark>知识库引擎中的内容，不需要专为 RAG 手动维护一个知识库。

此外，<mark>DocBase 兼容 Dify 外部知识库协议</mark>，你可以轻松将 DocBase 作为 Dify 外部知识库使用，而不必将本地数据上传云端。

<br>
<NCard title="🗃️ ❤️ Dify" link="https://dify.ai/">
https://dify.ai/
</NCard>

## 使用场景

### Nas 部署 <Badge type="tip" text="recommend" />

使用 docker-compose 部署 DocBase 后，通过 WebDav 将知识库映射到本地，编辑本地文件后，知识引擎中的数据便会自动更新，从而便捷搜索

<!-- TODO 插入视频 -->

### 接入 Dify 打造你的第二大脑 <Badge type="tip" text="recommend" />

1. 点击创建 dify 外部知识库

<div style="display: flex; justify-content: center;">
  <img src="/dify/wbzsk.png" alt="description" width="500" height="300"/>
</div>

2. 输入 DocBase 地址及密钥：

<div style="display: flex; justify-content: center;">
  <img src="/dify/image.png" alt="description" width="500" height="300"/>
</div>

3. 创建外部知识库

<div style="display: flex; flex-direction: column; align-items: center; gap: 20px;">
  <img src="/dify/createkb.png" alt="description" width="500" height="300"/>
  <img src="/dify/createkb2.png" alt="description" width="500" height="300"/>
</div>

目前版本 知识库 ID 随便输入即可

Score 建议设置 0.8 以上

4. 愉快的使用吧

<div style="display: flex; flex-direction: column; align-items: center; gap: 20px;">
  <img src="/dify/use.png" alt="description" width="800" height="300"/>
</div>

---

::: tip 温馨提示
如果文档中发现错误，或提交文档修改，或丰富本站文档，可点击页面底部的编辑按钮
:::
