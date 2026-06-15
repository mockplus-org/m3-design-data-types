/**
 * @file 定义组件实例、符号实例和重复实例的覆盖值、属性赋值和选择规则。
 */
import { M3SubNode } from ".";
import { M3NodeId, M3VariableDataValue } from "../common";
import { M3FrameTrait } from "./frame";
/**
 * 组件实例的覆盖路径与覆盖节点数据。
 */
export type M3InstanceOverrideValue = {
    /**
     * overridePath: 实例覆盖项在组件内部的节点路径。
     */
    overridePath?: M3NodeId[];
    /**
     * overrides: 覆盖后的节点数据列表。
     */
    overrides: M3SubNode[];
};
/**
 * 实例对组件属性定义的赋值。
 */
export interface M3ComponentPropertyAssignment {
    /**
     * definitionId: 组件属性定义 ID。
     */
    definitionId?: M3NodeId;
    /**
     * referenceId: 组件属性引用 ID。
     */
    referenceId?: M3NodeId;
    /**
     * value: 该字段保存当前类型的主要值，具体含义由所在类型和 dataType 决定。
     */
    value?: M3VariableDataValue;
}
/**
 * 组件实例共享字段。
 */
export type M3InstanceTrait = {
    /**
     * symbolId: 实例引用的组件或符号 ID。
     */
    symbolId?: M3NodeId;
    /**
     * overrideValues: 组件实例覆盖值列表。
     */
    overrideValues?: M3InstanceOverrideValue[];
    /**
     * componentPropAssignments: 组件实例上的组件属性赋值列表。
     */
    componentPropAssignments?: M3ComponentPropertyAssignment[];
    /**
     * uniformScaleFactor: 实例统一缩放比例。
     */
    uniformScaleFactor?: number;
};
/**
 * 组件实例节点。
 */
export type M3InstanceNode = M3FrameTrait<"INSTANCE"> & M3InstanceTrait;
/**
 * 符号实例节点。
 */
export type M3SymbolInstanceNode = M3FrameTrait<"SYMBOL_INSTANCE"> & M3InstanceTrait & {
    /**
     * publicComponents: 对外暴露的子组件 ID 列表。
     */
    publicComponents?: M3NodeId[];
};
/**
 * 重复实例或列表中显示的状态/属性配置项。
 */
export interface M3ListPropConfigItem {
    /**
     * id: 唯一 ID，用于在文档树、资源表、交互目标和样式引用之间建立稳定关联。
     */
    id?: M3NodeId;
    /**
     * name: 用户在设计工具中看到的名称，通常用于图层树、资源面板和代码命名。
     */
    name?: string;
    /**
     * type: 类型标识，用于区分节点、动作、样式或数据结构的具体语义。
     */
    type?: "STATE" | "PROP";
    /**
     * isShow: M3ListPropConfigItem 中的业务字段，保留 M3 原始设计数据的对应语义，供渲染还原、代码生成或数据分析使用。
     */
    isShow?: boolean;
    /**
     * isUnified: M3ListPropConfigItem 中的业务字段，保留 M3 原始设计数据的对应语义，供渲染还原、代码生成或数据分析使用。
     */
    isUnified?: boolean;
}
/**
 * 重复实例节点。
 */
export type M3RepeatInstanceNode = M3FrameTrait<"REPEAT_INSTANCE"> & M3InstanceTrait & {
    /**
     * listPropConfig: 列表或重复实例显示的属性配置。
     */
    listPropConfig?: M3ListPropConfigItem[];
    /**
     * selectedItems: 当前选中的项目 ID 列表。
     */
    selectedItems?: M3NodeId[];
    /**
     * selectionRule: 选择规则。
     */
    selectionRule?: "NORMAL" | "SINGLE" | "CONTINUOUS";
};
