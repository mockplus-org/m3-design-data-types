/**
 * @file 定义矩形、椭圆、多边形、星形、线段、矢量路径等形状节点。
 */
import { M3TextStyle } from "../common";
import { M3ArrowMarker, M3NodeType } from "../enums";
import { M3NodeTrait } from "./base";
/**
 * 基于路径数据绘制的形状节点共享字段。
 */
export type M3PathTrait<TType extends M3NodeType> = M3NodeTrait<TType> & M3TextStyle & {
    /**
     * path: SVG 路径字符串，用于渲染矢量形状。
     */
    path?: string;
    /**
     * windingRule: 路径填充规则。
     */
    windingRule?: "EVEN_ODD" | "NON_ZERO";
};
/**
 * 矩形节点。
 */
export type M3RectangleNode = M3PathTrait<"RECTANGLE">;
/**
 * 椭圆节点。
 */
export type M3EllipseNode = M3PathTrait<"ELLIPSE"> & {
    /**
     * ovalStartAngle: 椭圆弧起始角度。
     */
    ovalStartAngle?: number;
    /**
     * ovalEndAngle: 椭圆弧结束角度。
     */
    ovalEndAngle?: number;
    /**
     * ovalInnerRadius: 环形椭圆的内半径比例。
     */
    ovalInnerRadius?: number;
};
/**
 * 三角形节点。
 */
export type M3TriangleNode = M3PathTrait<"TRIANGLE">;
/**
 * 多边形节点。
 */
export type M3PolygonNode = M3PathTrait<"POLYGON"> & {
    /**
     * numberOfPoints: 多边形或星形的顶点数量。
     */
    numberOfPoints?: number;
};
/**
 * 星形节点。
 */
export type M3StarNode = M3PathTrait<"STAR"> & {
    /**
     * numberOfPoints: 多边形或星形的顶点数量。
     */
    numberOfPoints?: number;
    /**
     * starInnerScale: 星形内半径比例。
     */
    starInnerScale?: number;
};
/**
 * 线段节点。
 */
export type M3LineNode = M3PathTrait<"LINE"> & {
    /**
     * beginArrowMarker: 线段起点箭头或标记。
     */
    beginArrowMarker?: M3ArrowMarker;
    /**
     * endArrowMarker: 线段终点箭头或标记。
     */
    endArrowMarker?: M3ArrowMarker;
    /**
     * strokeLineType: 描边线型。
     */
    strokeLineType?: "SOLID" | "DASH" | "CUSTOM";
    /**
     * strokeArrowScale: 箭头标记缩放比例。
     */
    strokeArrowScale?: number;
};
/**
 * 矢量路径节点。
 */
export type M3PathNode = M3PathTrait<"VECTOR">;
