/**
 * @file 定义文本图层节点，组合基础节点、文本样式和富文本内容。
 */
import { M3RichTextData, M3TextStyle, MkParagraphStyle } from "../common";
import { M3NodeTrait } from "./base";
/**
 * 文本图层节点。
 */
export type M3TextNode = M3NodeTrait<"TEXT"> & M3TextStyle & {
    /**
     * textStyle: 文本节点合并后的文本样式和段落样式。
     */
    textStyle: M3TextStyle & MkParagraphStyle;
    /**
     * textData: 富文本内容数据。
     */
    textData: M3RichTextData;
};
