/**
 * @file 定义可复用组件资源的元信息。
 */
import type { M3NodeId } from "../common";
/**
 * 可复用组件资源的元信息。
 */
export interface M3ComponentResource {
    /**
     * id: 唯一 ID，用于在文档树、资源表、交互目标和样式引用之间建立稳定关联。
     */
    id: M3NodeId;
    /**
     * name: 用户在设计工具中看到的名称，通常用于图层树、资源面板和代码命名。
     */
    name?: string;
    /**
     * key: 资源引用 key，消费方用它匹配组件或样式资源。
     */
    key: M3NodeId;
    /**
     * description: 描述文本。
     */
    description: string;
}
/**
 * 组件资源集合。
 */
export type M3ComponentResources = {
    /**
     * components: 组件资源表，key 为组件 ID。
     */
    components?: Record<M3NodeId, M3ComponentResource>;
};
