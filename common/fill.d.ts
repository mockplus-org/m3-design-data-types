/**
 * @file 定义 M3 图层填充数据，包括纯色、渐变和图片填充。
 */
import type { M3Color, M3Point } from "./base";
import type { M3ImageFillFilter } from "./image-fill-filter";
import type { M3BlendMode } from "../enums";
/**
 * 渐变色标，描述某个位置上的颜色。
 */
export interface M3GradientStop {
    /**
     * color: 颜色值，用于填充、描边、文本、阴影、遮罩或控件状态。
     */
    color: M3Color;
    /**
     * position: 位置值；在不同上下文中表示渐变色标位置、布局位置或插入位置。
     */
    position: number;
}
/**
 * 渐变定义，包含色标和渐变方向控制点。
 */
export interface M3Gradient {
    /**
     * stops: 渐变色标列表，按 position 描述渐变中的颜色变化。
     */
    stops: M3GradientStop[];
    /**
     * startPoint: 渐变起点。
     */
    startPoint: M3Point;
    /**
     * endPoint: 渐变终点。
     */
    endPoint: M3Point;
    /**
     * elipseLength: 径向渐变椭圆长度参数，用于还原原始渐变形状。
     */
    elipseLength: number;
}
/**
 * 所有填充类型共享的基础字段。
 */
export interface M3FillBase {
    /**
     * type: 类型标识，用于区分节点、动作、样式或数据结构的具体语义。
     */
    type: "SOLID" | "LINEAR_GRADIENT" | "RADIAL_GRADIENT" | "ANGULAR_GRADIENT" | "IMAGE";
    /**
     * visible: 是否可见；渲染或代码生成时不可见对象通常应跳过或隐藏。
     */
    visible: boolean;
    /**
     * blendMode: 混合模式，决定该对象与背景或下层内容的颜色混合方式。
     */
    blendMode: M3BlendMode;
}
/**
 * 纯色填充。
 */
export interface M3SolidFill extends M3FillBase {
    /**
     * type: 类型标识，用于区分节点、动作、样式或数据结构的具体语义。
     */
    type: "SOLID";
    /**
     * color: 颜色值，用于填充、描边、文本、阴影、遮罩或控件状态。
     */
    color: M3Color;
}
/**
 * 线性、径向或角度渐变填充。
 */
export interface M3GradientFill extends M3FillBase {
    /**
     * type: 类型标识，用于区分节点、动作、样式或数据结构的具体语义。
     */
    type: "LINEAR_GRADIENT" | "RADIAL_GRADIENT" | "ANGULAR_GRADIENT";
    /**
     * gradient: 渐变参数，包含色标和方向。
     */
    gradient: M3Gradient;
    /**
     * opacity: 透明度，通常取 0 到 1，用于控制渲染不透明程度。
     */
    opacity: number;
}
/**
 * 图片填充，包含缩放方式、尺寸、变换和滤镜。
 */
export interface M3ImageFill extends M3FillBase {
    /**
     * type: 类型标识，用于区分节点、动作、样式或数据结构的具体语义。
     */
    type: "IMAGE";
    /**
     * opacity: 透明度，通常取 0 到 1，用于控制渲染不透明程度。
     */
    opacity: number;
    /**
     * image: 图片资源标识或数据引用。
     */
    image: string;
    /**
     * imageThumbnail: 图片缩略图资源，用于预览或低成本占位展示。
     */
    imageThumbnail: string;
    /**
     * imageScaleMode: 图片在容器内的缩放和裁剪方式。
     */
    imageScaleMode: "TILE" | "FILL" | "STRETCH" | "FIT" | "CROP";
    /**
     * rotation: 旋转角度。
     */
    rotation: number;
    /**
     * originalWidth: 图片原始宽度。
     */
    originalWidth: number;
    /**
     * originalHeight: 图片原始高度。
     */
    originalHeight: number;
    /**
     * scale: 缩放比例。
     */
    scale: number;
    /**
     * animationFrame: 动图或动画图片当前帧索引。
     */
    animationFrame: number;
    /**
     * imageTransform: 图片填充内部变换矩阵，用于还原裁剪和缩放状态。
     */
    imageTransform: number[];
    /**
     * mime: 图片资源类型，用于区分普通图片、SVG、GIF 或未知格式。
     */
    mime: "UNKNOWN" | "IMAGE" | "SVG" | "GIF";
    /**
     * filters: 图片滤镜参数集合。
     */
    filters: M3ImageFillFilter;
}
/**
 * 任意一种 M3 填充类型的联合类型。
 */
export type M3Fill = M3SolidFill | M3GradientFill | M3ImageFill;
