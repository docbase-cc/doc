---
comment: false
---

# 🗃️ DocBase

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

### 作为知识搜索引擎

[部署后](./start.md)，通过 WebDav 将知识库映射到本地，编辑本地文件云端知识自动更新，而后便捷搜索

<div style="display: flex; flex-direction: column; align-items: center; gap: 20px;">
  <img src="/ui/search.png" alt="description" width="800" height="300"/>
</div>

### 作为 Dify 外部知识库使用 <Badge type="tip" text="recommend" />

具体流程：[🗃️ Dify](./dify.md)

<div style="display: flex; flex-direction: column; align-items: center; gap: 20px;">
  <img src="/dify/use.png" alt="description" width="800" height="300"/>
</div>

---

::: tip 温馨提示
如果文档中发现错误，或提交文档修改，或丰富本站文档，可点击页面底部的编辑按钮
:::
