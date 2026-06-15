# M3 Design Data Types

定义 M3 设计数据的标准 TypeScript 类型。它是上层转换工具、API 服务、MCP Server 和 Agent Skill 共享的数据契约。

## 核心结构

入口导出位于 `index.d.ts`：

```ts
export * from "./common";
export * from "./enums";
export * from "./nodes";
export * from "./resources";
export * from "./file";
```

最顶层设计文件类型是 `M3DesignFile`：

```ts
interface M3DesignFile {
  name: string;
  document: M3DocumentNode;
  components: Record<M3NodeId, M3ComponentResource>;
  styles: M3StyleResources;
}
```

## 类型模块

- `common/`：基础类型，如 ID、点、尺寸、颜色、填充、文本、变量、交互和效果。
- `enums/`：节点类型、混合模式、设备类型等枚举字符串类型。
- `nodes/`：文档、画布、Frame、Group、形状、文本、媒体、组件、实例、表格、列表、菜单、表单等节点类型。
- `resources/`：组件资源和样式资源。
- `file.d.ts`：标准设计文件根结构。
