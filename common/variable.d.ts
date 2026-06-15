/**
 * @file 定义 M3 变量和组件属性值的数据类型，用于组件属性、变量绑定和状态切换。
 */
import { M3Color, M3NodeId } from "./base";
/**
 * M3 变量值的数据类型集合。
 */
export type M3VariableDataType = "FLOAT" | "BOOL" | "STRING" | "COLOR" | "ALIAS" | "INSTANCE_SWAP" | "COMPONENT_KEY" | "SLOT";
/**
 * M3 变量值的实际 TypeScript 值类型。
 */
export type M3VariableDataValueType = number | boolean | string | M3Color | M3NodeId;
/**
 * 一个变量值及其数据类型信息。
 */
export interface M3VariableData {
    /**
     * value: 该字段保存当前类型的主要值，具体含义由所在类型和 dataType 决定。
     */
    value?: M3VariableDataValueType;
    /**
     * dataType: 变量数据类型。
     */
    dataType?: M3VariableDataType;
    /**
     * resolvedDataType: 变量解析后的最终数据类型。
     */
    resolvedDataType?: M3VariableDataType;
}
/**
 * 某个变量模式下的具体变量值。
 */
export interface M3VariableDataValue {
    /**
     * modeId: 变量模式 ID。
     */
    modeId: M3NodeId;
    /**
     * data: 该字段保存当前结构的主要数据对象。
     */
    data: M3VariableData;
}
