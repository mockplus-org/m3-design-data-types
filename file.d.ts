/**
 * @file 定义标准化后的 M3 设计文件根结构，聚合文档树、组件资源和样式资源。
 */
import { M3NodeId } from "./common";
import { M3DocumentNode } from "./nodes";
import { M3ComponentResource, M3StyleResources } from "./resources";
/**
 * 标准化后的完整 M3 设计文件。
 */
export interface M3DesignFile {
    /**
     * name: 用户在设计工具中看到的名称，通常用于图层树、资源面板和代码命名。
     */
    name: string;
    /**
     * document: 设计文件的文档根节点。
     */
    document: M3DocumentNode;
    /**
     * components: 组件资源表，key 为组件 ID。
     */
    components: Record<M3NodeId, M3ComponentResource>;
    /**
     * styles: 样式资源集合。
     */
    styles: M3StyleResources;
}
