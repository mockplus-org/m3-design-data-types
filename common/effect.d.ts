/**
 * @file 定义 M3 图层的阴影、模糊等效果数据结构，用于还原视觉特效。
 */
import type { M3Color, M3Point } from "./base";
import type { M3BlendMode } from "../enums";
/**
 * 单个视觉效果，表示阴影、前景模糊或背景模糊。
 */
export interface M3Effect {
    /**
     * type: 类型标识，用于区分节点、动作、样式或数据结构的具体语义。
     */
    type?: "FOREGROUND_BLUR" | "BACKGROUND_BLUR" | "INNER_SHADOW" | "OUTER_SHADOW";
    /**
     * visible: 是否可见；渲染或代码生成时不可见对象通常应跳过或隐藏。
     */
    visible?: boolean;
    /**
     * blurRadius: 模糊半径，决定阴影或模糊效果的扩散范围。
     */
    blurRadius?: number;
    /**
     * spread: 阴影扩展距离，决定阴影在边缘外扩的程度。
     */
    spread?: number;
    /**
     * offset: 相对目标位置的偏移量，通常用于滚动、弹窗或阴影。
     */
    offset?: M3Point;
    /**
     * blendMode: 混合模式，决定该对象与背景或下层内容的颜色混合方式。
     */
    blendMode?: M3BlendMode;
    /**
     * color: 颜色值，用于填充、描边、文本、阴影、遮罩或控件状态。
     */
    color?: M3Color;
}
