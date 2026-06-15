/**
 * @file 定义 M3 文本、字体、段落、富文本和超链接相关类型。
 */
import { M3NodeId, M3UnitValue } from "./base";
import { M3Fill } from "./fill";
/**
 * 字体名称信息，保留字体族、样式和 PostScript 名称。
 */
export interface M3FontName {
    /**
     * family: 字体族名称。
     */
    family?: string;
    /**
     * style: 字体样式名称。
     */
    style?: string;
    /**
     * postscript: 字体 PostScript 名称。
     */
    postscript?: string;
}
/**
 * 可变字体轴配置。
 */
export interface M3FontVariationAxis {
    /**
     * axisTag: 可变字体轴标签。
     */
    axisTag?: "wght" | "wdth" | "hght" | "opsz" | "slnt" | "GRAD" | "XOPQ" | "XTRA" | "YOPQ" | "YTAS" | "YTDE" | "YTFI" | "YTLC" | "YTUC";
    /**
     * value: 该字段保存当前类型的主要值，具体含义由所在类型和 dataType 决定。
     */
    value?: number;
}
/**
 * 字体粗细、宽度和倾斜样式。
 */
export interface M3FontStyle {
    /**
     * weight: 字体粗细。
     */
    weight?: "INVISIBLE" | "THIN" | "EXTRA_LIGHT" | "LIGHT" | "NORMAL" | "MEDIUM" | "SEMI_BOLD" | "BOLD" | "EXTRA_BOLD" | "BLACK" | "EXTRA_BLACK";
    /**
     * width: 节点、设备、轨道或资源的宽度。
     */
    width?: "ULTRA_CONDENSED" | "EXTRA_CONDENSED" | "CONDENSED" | "SEMI_CONDENSED" | "NORMAL" | "SEMI_EXPANDED" | "EXPANDED" | "EXTRA_EXPANDED" | "ULTRA_EXPANDED";
    /**
     * slant: 字体倾斜样式。
     */
    slant?: "UPRIGHT" | "ITALIC" | "OBLIQUE";
}
/**
 * 文本中的超链接，可以指向 URL 或设计稿节点。
 */
export type M3Hyperlink = {
    /**
     * type: 类型标识，用于区分节点、动作、样式或数据结构的具体语义。
     */
    type: "URL" | "NODE";
    /**
     * url: 跳转链接地址或媒体资源地址。
     */
    url?: string;
    /**
     * nodeID: 目标节点 ID。
     */
    nodeID?: M3NodeId;
};
/**
 * 可复用文本样式字段。
 */
export interface M3TextStyle {
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
     * textFills: 文本填充列表。
     */
    textFills?: M3Fill[];
    /**
     * hyperlink: 文本超链接配置。
     */
    hyperlink?: M3Hyperlink;
}
/**
 * 段落级文本排版样式。
 */
export interface MkParagraphStyle {
    /**
     * paragraphSpacing: 段落间距。
     */
    paragraphSpacing?: number;
    /**
     * paragraphIndent: 段落首行或整体缩进。
     */
    paragraphIndent?: number;
    /**
     * textDecoration: 文本装饰线，如下划线或删除线。
     */
    textDecoration?: "NONE" | "STRIKETHROUGH" | "UNDERLINE";
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
}
/**
 * 富文本中的单行段落信息。
 */
export interface M3RichTextLine {
    /**
     * lineType: 富文本行类型，如普通行、有序列表或无序列表。
     */
    lineType?: "NONE" | "UNORDERED_LIST" | "ORDERED_LIST";
    /**
     * indentationLevel: 列表缩进层级。
     */
    indentationLevel?: number;
    /**
     * styleId: 富文本样式表中的样式 ID。
     */
    styleId?: number;
    /**
     * listNumber: 有序列表的序号。
     */
    listNumber?: number;
    /**
     * blockType: 富文本块类型。
     */
    blockType?: "NONE" | "QUOTE_BLOCK";
    /**
     * indentLevel: 缩进层级。
     */
    indentLevel?: number;
}
/**
 * 富文本内容，包含字符、样式覆盖和行信息。
 */
export interface M3RichTextData {
    /**
     * characters: 文本字符内容。
     */
    characters?: string;
    /**
     * characterStyleOverrides: 每个字符对应的样式覆盖 ID 列表。
     */
    characterStyleOverrides?: number[];
    /**
     * styleOverrideTable: 富文本样式覆盖表，key 为 styleId。
     */
    styleOverrideTable?: {
        /**
         * key: 富文本样式覆盖表的动态 styleId，值是该 styleId 对应的文本样式。
         */
        [key: number]: M3TextStyle;
    };
    /**
     * textLines: 富文本行信息列表。
     */
    textLines?: M3RichTextLine[];
}
