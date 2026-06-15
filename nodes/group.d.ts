/**
 * @file 定义普通分组和形状组合节点。
 */
import { M3SubNode } from ".";
import { M3NodeTrait } from "./base";
/**
 * 拥有子节点的分组能力。
 */
export type M3GroupTrait = {
    /**
     * children: 子节点列表，顺序就是图层树和渲染还原时的顺序。
     */
    children?: M3SubNode[];
};
/**
 * 普通分组节点。
 */
export type M3GroupNode = M3NodeTrait<"GROUP"> & M3GroupTrait;
/**
 * 形状组合节点。
 */
export type M3ShapeGroupNode = M3NodeTrait<"SHAPE_GROUP"> & M3GroupTrait & {
    /**
     * booleanOperation: 形状组合或布尔运算模式。
     */
    booleanOperation?: "NONE" | "UNION" | "DIFFERENCE" | "INTERSECT" | "XOR";
};
