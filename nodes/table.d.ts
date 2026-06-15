/**
 * @file 定义表格节点、行列轨道、单元格和表格默认样式。
 */
import { M3SubNode } from ".";
import { M3Color, M3Fill, M3NodeId, M3RichTextData } from "../common";
import { M3NodeTrait } from "./base";
/**
 * 表格行或列轨道定义。
 */
export interface M3TableTrack {
    /**
     * sizing: 表格行列轨道尺寸策略。
     */
    sizing?: "FIXED" | "HUG" | "FILL";
    /**
     * width: 节点、设备、轨道或资源的宽度。
     */
    width?: number;
    /**
     * height: 节点、设备、轨道或资源的高度。
     */
    height?: number;
    /**
     * id: 唯一 ID，用于在文档树、资源表、交互目标和样式引用之间建立稳定关联。
     */
    id?: M3NodeId;
}
/**
 * 表格单元格内容数据。
 */
export interface M3TableCellData {
    /**
     * type: 类型标识，用于区分节点、动作、样式或数据结构的具体语义。
     */
    type?: "TEXT";
    /**
     * text: 菜单项或单元格中的文本内容。
     */
    text?: M3RichTextData;
}
/**
 * 表格单元格节点。
 */
export type M3TableCellNode = {
    /**
     * id: 唯一 ID，用于在文档树、资源表、交互目标和样式引用之间建立稳定关联。
     */
    id?: M3NodeId;
    /**
     * row: 表格单元格所在行索引。
     */
    row?: number;
    /**
     * column: 表格单元格所在列索引。
     */
    column?: number;
    /**
     * cellPath: 表格单元格在表格结构中的路径。
     */
    cellPath?: M3NodeId[];
    /**
     * data: 该字段保存当前结构的主要数据对象。
     */
    data?: M3TableCellData;
    /**
     * mergeAcross: 单元格向右合并的列数。
     */
    mergeAcross?: number;
    /**
     * mergeDown: 单元格向下合并的行数。
     */
    mergeDown?: number;
    /**
     * mergedBy: 当前单元格被哪些单元格合并。
     */
    mergedBy?: M3NodeId[];
    /**
     * transform: 节点局部变换矩阵。
     */
    transform?: number[];
    /**
     * children: 子节点列表，顺序就是图层树和渲染还原时的顺序。
     */
    children?: M3SubNode[];
};
/**
 * 表格节点。
 */
export type M3TableNode = M3NodeTrait<"TABLE"> & {
    /**
     * cellColor: 表格默认单元格填充色。
     */
    cellColor?: M3Color;
    /**
     * cellFillStyleId: 表格默认单元格填充样式 ID。
     */
    cellFillStyleId?: M3NodeId;
    /**
     * cellStrokeColor: 表格默认单元格描边颜色。
     */
    cellStrokeColor?: M3Color;
    /**
     * cellStrokeThickness: 表格默认单元格描边厚度。
     */
    cellStrokeThickness?: number;
    /**
     * cellDashPattern: 表格默认单元格虚线模式。
     */
    cellDashPattern?: number[];
    /**
     * cellStrokeLineType: 表格默认单元格描边线型。
     */
    cellStrokeLineType?: "SOLID" | "DASH" | "CUSTOM";
    /**
     * cellStrokeStyleId: 表格默认单元格描边样式 ID。
     */
    cellStrokeStyleId?: M3NodeId;
    /**
     * cellPaddingLeft: 表格单元格左内边距。
     */
    cellPaddingLeft?: number;
    /**
     * cellPaddingTop: 表格单元格上内边距。
     */
    cellPaddingTop?: number;
    /**
     * cellPaddingRight: 表格单元格右内边距。
     */
    cellPaddingRight?: number;
    /**
     * cellPaddingBottom: 表格单元格下内边距。
     */
    cellPaddingBottom?: number;
    /**
     * tableRows: 表格行定义列表。
     */
    tableRows?: M3TableTrack[];
    /**
     * tableColumns: 表格列定义列表。
     */
    tableColumns?: M3TableTrack[];
    /**
     * tableCells: 表格单元格列表。
     */
    tableCells?: M3TableCellNode[];
    /**
     * frozenRowStart: 冻结行起始索引。
     */
    frozenRowStart?: number;
    /**
     * frozenColumnStart: 冻结列起始索引。
     */
    frozenColumnStart?: number;
    /**
     * frozenRowEnd: 冻结行结束索引。
     */
    frozenRowEnd?: number;
    /**
     * frozenColumnEnd: 冻结列结束索引。
     */
    frozenColumnEnd?: number;
    /**
     * textFills: 文本填充列表。
     */
    textFills?: M3Fill[];
    /**
     * textData: 富文本内容数据。
     */
    textData?: M3RichTextData;
};
