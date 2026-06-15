/**
 * @file 定义 M3 设计数据中最基础的几何、颜色、变换、单位和节点 ID 类型，是所有节点与资源类型的底层依赖。
 */
/**
 * M3 节点、资源或样式的标准字符串 ID，通常由原始 `{sessionID}:{clientID}` 拼接而成。
 */
export type M3NodeId = string;
/**
 * 二维坐标点，描述画布或节点局部坐标系中的位置。
 */
export interface M3Point {
    /**
     * x: 节点左上角在父坐标系中的 X 坐标。
     */
    x: number;
    /**
     * y: 节点左上角在父坐标系中的 Y 坐标。
     */
    y: number;
}
/**
 * 二维尺寸，描述宽度和高度。
 */
export interface M3Size {
    /**
     * width: 节点、设备、轨道或资源的宽度。
     */
    width: number;
    /**
     * height: 节点、设备、轨道或资源的高度。
     */
    height: number;
}
/**
 * 矩形边界，使用四条边描述区域范围。
 */
export interface M3Rect {
    /**
     * left: 矩形左边界坐标。
     */
    left: number;
    /**
     * top: 矩形上边界坐标。
     */
    top: number;
    /**
     * right: 矩形右边界坐标。
     */
    right: number;
    /**
     * bottom: 矩形下边界坐标。
     */
    bottom: number;
}
/**
 * RGBA 颜色值，通道通常用于渲染填充、描边、阴影和背景。
 */
export interface M3Color {
    /**
     * r: 红色通道值。
     */
    r: number;
    /**
     * g: 绿色通道值。
     */
    g: number;
    /**
     * b: 蓝色通道值。
     */
    b: number;
    /**
     * a: 透明度通道值。
     */
    a: number;
}
/**
 * M3 与 Figma 一致的二维仿射变换矩阵，对应 Figma `relativeTransform` 的 2x3 矩阵语义。
 *
 * 数组按 `[a, b, c, d, tx, ty]` 存储，可理解为下面的矩阵：
 *
 * ```text
 * | a  c  tx |
 * | b  d  ty |
 * | 0  0   1 |
 * ```
 *
 * 其中 `tx`、`ty` 表示节点在父坐标系中的平移；`a`、`b`、`c`、`d` 共同描述旋转、缩放和倾斜。
 * 消费方还原节点位置时，应按该矩阵把节点局部坐标转换到父坐标系。
 */
export type M3Transform = [number, number, number, number, number, number];
/**
 * 带单位的数值，用于行高等可在像素、百分比和自动值之间切换的配置。
 */
export interface M3UnitValue {
    /**
     * value: 该字段保存当前类型的主要值，具体含义由所在类型和 dataType 决定。
     */
    value: number;
    /**
     * unit: 数值单位，告诉消费方 value 应如何解释。
     */
    unit: "AUTO"
    /**
     * PERCENT: 百分比值，value 表示相对父级、容器或当前属性基准值的百分比。
     */
     | "PERCENT"
    /**
     * PIXELS: 像素值，value 表示设计稿坐标系中的固定 px 数值。
     */
     | "PIXELS"
    /**
     * RAW: 原始数值，value 保持 M3 原始数据语义，不额外套用单位换算。
     */
     | "RAW";
}
