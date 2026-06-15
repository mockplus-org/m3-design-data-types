/**
 * @file 定义 M3 组件主节点、状态帧、组件属性定义和状态属性结构。
 */
import type { M3NodeId, M3VariableDataType, M3VariableDataValue, M3VariableDataValueType } from "../common";
import { M3BaseTrait } from "./base";
import { M3FrameTrait } from "./frame";
/**
 * 组件属性定义，描述组件暴露给实例覆盖的属性。
 */
export type M3ComponentPropertyDefinition = M3BaseTrait<"COMPONENT_PROPERTY"> & {
    /**
     * propertyType: 组件属性的数据类型。
     */
    propertyType: M3VariableDataType;
    /**
     * propertyDefinitions: 组件属性在不同模式下的默认值定义。
     */
    propertyDefinitions: M3VariableDataValue[];
    /**
     * recommendedValues: 组件属性推荐值列表。
     */
    recommendedValues?: {
        /**
         * name: 用户在设计工具中看到的名称，通常用于图层树、资源面板和代码命名。
         */
        name: string;
        /**
         * value: 该字段保存当前类型的主要值，具体含义由所在类型和 dataType 决定。
         */
        value: M3VariableDataValueType;
    }[];
    /**
     * parentPropertyId: 父级组件属性定义 ID。
     */
    parentPropertyId?: M3NodeId;
};
/**
 * 组件状态属性当前选择值。
 */
export interface M3StatusProperty {
    /**
     * propertyId: 组件状态属性 ID。
     */
    propertyId?: M3NodeId;
    /**
     * valueId: 组件状态值 ID。
     */
    valueId?: M3NodeId;
}
/**
 * 组件状态属性的一个可选值。
 */
export interface M3StatusPropertyItem {
    /**
     * propID: 组件状态属性 ID。
     */
    propID?: M3NodeId;
    /**
     * valueId: 组件状态值 ID。
     */
    valueId?: M3NodeId;
}
/**
 * 组件状态属性的排序和预设语义。
 */
export interface M3StatusPropertyOrder {
    /**
     * id: 唯一 ID，用于在文档树、资源表、交互目标和样式引用之间建立稳定关联。
     */
    id?: M3NodeId;
    /**
     * name: 用户在设计工具中看到的名称，通常用于图层树、资源面板和代码命名。
     */
    name?: string;
    /**
     * presetType: 状态属性预设类型。
     */
    presetType?: "NO_PRESET" | "SELECTED" | "HOVER" | "DISABLED" | "PLACEHOLDER";
    /**
     * values: 可选值列表。
     */
    values?: M3StatusPropertyItem[];
}
/**
 * 组件主节点的资源与原型扩展信息。
 */
export interface M3MasterTrait {
    /**
     * fileKey: 资源或外部文件的标识。
     */
    fileKey: string;
    /**
     * resourceKey: 资源 key，通常是图层中引用该资源时使用的稳定 key。
     */
    resourceKey: string;
    /**
     * resourceDescription: 资源描述。
     */
    resourceDescription?: string;
    /**
     * componentPropertyDefinitions: 组件暴露的属性定义表。
     */
    componentPropertyDefinitions?: {
        /**
         * M3MasterTrait 的索引签名，表示该对象可以用动态 key 访问同类值。
         */
        [key: M3NodeId]: M3ComponentPropertyDefinition;
    };
    /**
     * statusProperties: 组件主节点上的状态属性列表。
     */
    statusProperties: M3StatusProperty[];
    /**
     * publicComponents: 对外暴露的子组件 ID 列表。
     */
    publicComponents: M3NodeId[];
    /**
     * protoSwitchInstance: 原型切换实例相关 ID 列表。
     */
    protoSwitchInstance: M3NodeId[];
    /**
     * protoCustomProperty: 原型自定义属性相关 ID 列表。
     */
    protoCustomProperty: M3NodeId[];
}
/**
 * 组件状态帧的资源与状态切换信息。
 */
export interface M3StateFrameTrait {
    /**
     * fileKey: 资源或外部文件的标识。
     */
    fileKey: string;
    /**
     * resourceKey: 资源 key，通常是图层中引用该资源时使用的稳定 key。
     */
    resourceKey: string;
    /**
     * resourceDescription: 资源描述。
     */
    resourceDescription?: string;
    /**
     * componentPropertyDefinitions: 组件暴露的属性定义表。
     */
    componentPropertyDefinitions?: {
        /**
         * M3StateFrameTrait 的索引签名，表示该对象可以用动态 key 访问同类值。
         */
        [key: M3NodeId]: M3ComponentPropertyDefinition;
    };
    /**
     * statusPropertyOrders: 状态属性排序和预设信息。
     */
    statusPropertyOrders: M3StatusPropertyOrder[];
    /**
     * protoSwitchInstance: 原型切换实例相关 ID 列表。
     */
    protoSwitchInstance: M3NodeId[];
    /**
     * protoCustomProperty: 原型自定义属性相关 ID 列表。
     */
    protoCustomProperty: M3NodeId[];
    /**
     * protoSwitchState: 原型切换状态相关 ID 列表。
     */
    protoSwitchState: M3NodeId[];
}
/**
 * 组件主节点。
 */
export type M3MasterNode = M3FrameTrait<"MASTER"> & M3MasterTrait;
/**
 * 组件状态帧节点。
 */
export type M3StateFrameNode = M3FrameTrait<"STATE_FRAME"> & M3StateFrameTrait;
