/**
 * @file 定义填充、文本、效果和圆角样式资源。
 */
import type { M3NodeId, M3Effect, M3Fill, M3FontVariationAxis, M3FontStyle, M3UnitValue } from "../common";
/**
 * 样式资源类型集合。
 */
export type M3StyleType = "FILL_STYLE" | "TEXT_STYLE" | "EFFECT_STYLE" | "CORNER_STYLE";
/**
 * 所有样式资源共享的基础元信息。
 */
export type M3ResourceBase<TType extends M3StyleType> = {
    /**
     * id: 唯一 ID，用于在文档树、资源表、交互目标和样式引用之间建立稳定关联。
     */
    id: M3NodeId;
    /**
     * type: 类型标识，用于区分节点、动作、样式或数据结构的具体语义。
     */
    type: TType;
    /**
     * name: 用户在设计工具中看到的名称，通常用于图层树、资源面板和代码命名。
     */
    name?: string;
    /**
     * fileKey: 资源或外部文件的标识。
     */
    fileKey: string;
    /**
     * resourceKey: 资源 key，通常是图层中引用该资源时使用的稳定 key。
     */
    resourceKey: M3NodeId;
    /**
     * resourceDescription: 资源描述。
     */
    resourceDescription?: string;
};
/**
 * 填充样式资源。
 */
export type M3FillStyleResource = M3ResourceBase<"FILL_STYLE"> & {
    /**
     * fills: 节点或样式的填充列表。
     */
    fills: M3Fill[];
};
/**
 * 文本样式资源。
 */
export type M3TextStyleResource = M3ResourceBase<"TEXT_STYLE"> & {
    /**
     * fontSize: 字号。
     */
    fontSize?: number;
    /**
     * fontName: 字体名称。
     */
    fontName?: string;
    /**
     * fontVariation: 可变字体轴配置列表。
     */
    fontVariation?: M3FontVariationAxis[];
    /**
     * fontStyle: 字体粗细、宽度和倾斜样式。
     */
    fontStyle?: M3FontStyle;
    /**
     * textCase: 文本大小写转换方式。
     */
    textCase?: "ORIGINAL" | "UPPER" | "LOWER" | "TITLE";
    /**
     * textDecoration: 文本装饰线，如下划线或删除线。
     */
    textDecoration?: "NONE" | "UNDERLINE" | "STRIKETHROUGH";
    /**
     * lineHeight: 行高。
     */
    lineHeight?: M3UnitValue;
    /**
     * letterSpacing: 字符间距。
     */
    letterSpacing?: number;
    /**
     * paragraphSpacing: 段落间距。
     */
    paragraphSpacing?: number;
    /**
     * paragraphIndent: 段落首行或整体缩进。
     */
    paragraphIndent?: number;
    /**
     * textAlignHorizontal: 文本水平对齐方式。
     */
    textAlignHorizontal?: "LEFT" | "RIGHT" | "CENTER" | "JUSTIFIED";
    /**
     * textAlignVertical: 文本垂直对齐方式。
     */
    textAlignVertical?: "TOP" | "CENTER" | "BOTTOM";
    /**
     * textAutoResize: 文本框自动尺寸策略。
     */
    textAutoResize?: "NONE" | "WIDTH_AND_HEIGHT" | "HEIGHT" | "TRUNCATE";
    /**
     * textTruncate: 文本溢出截断方式。
     */
    textTruncate?: "DISABLED" | "ENDING";
    /**
     * textMaxLine: 文本最多显示行数。
     */
    textMaxLine?: number;
    /**
     * hangingPunctuation: 是否启用悬挂标点。
     */
    hangingPunctuation?: boolean;
    /**
     * hangingList: 是否启用列表悬挂缩进。
     */
    hangingList?: boolean;
};
/**
 * 效果样式资源。
 */
export type M3EffectStyleResource = M3ResourceBase<"EFFECT_STYLE"> & {
    /**
     * effects: 视觉效果列表。
     */
    effects: M3Effect[];
};
/**
 * 圆角样式资源。
 */
export type M3RadiusStyleResource = M3ResourceBase<"CORNER_STYLE"> & {
    /**
     * cornerRadius: 统一圆角半径。
     */
    cornerRadius?: number;
    /**
     * cornerRadiusIndependent: M3RadiusStyleResource 中的业务字段，保留 M3 原始设计数据的对应语义，供渲染还原、代码生成或数据分析使用。
     */
    cornerRadiusIndependent?: boolean;
    /**
     * cornerTopLeftRadius: 左上圆角半径。
     */
    cornerTopLeftRadius?: number;
    /**
     * cornerTopRightRadius: 右上圆角半径。
     */
    cornerTopRightRadius?: number;
    /**
     * cornerBottomRightRadius: 右下圆角半径。
     */
    cornerBottomRightRadius?: number;
    /**
     * cornerBottomLeftRadius: 左下圆角半径。
     */
    cornerBottomLeftRadius?: number;
};
/**
 * 任意样式资源联合类型。
 */
export type M3StyleResource = M3FillStyleResource | M3TextStyleResource | M3EffectStyleResource | M3RadiusStyleResource;
/**
 * 按类型分组的样式资源集合。
 */
export type M3StyleResources = {
    /**
     * fillStyles: 填充样式资源表。
     */
    fillStyles?: Record<M3NodeId, M3FillStyleResource>;
    /**
     * textStyles: 文本样式资源表。
     */
    textStyles?: Record<M3NodeId, M3TextStyleResource>;
    /**
     * effectStyles: 效果样式资源表。
     */
    effectStyles?: Record<M3NodeId, M3EffectStyleResource>;
    /**
     * radiusStyles: 圆角样式资源表。
     */
    radiusStyles?: Record<M3NodeId, M3RadiusStyleResource>;
};
