/**
 * @file 定义列表节点、菜单项和列表通用配置。
 */
import { M3Color, M3NodeId, M3TextStyle } from "../common";
import { M3NodeTrait } from "./base";
/**
 * 列表类节点类型集合。
 */
export type M3ListNodeType = "LIST" | "TREE" | "HORIZONTAL_MENU" | "NAVIGATION_MENU";
/**
 * 菜单项文字附加图标和箭头颜色的样式。
 */
export type M3MenuStyle = M3TextStyle & {
    /**
     * arrowColor: 箭头颜色。
     */
    arrowColor?: M3Color;
    /**
     * iconColor: 图标颜色。
     */
    iconColor?: M3Color;
};
/**
 * 列表类节点共享的选择、布局和分隔线配置。
 */
export type M3ListTrait = {
    /**
     * itemTemplateId: 列表项模板 ID。
     */
    itemTemplateId?: string;
    /**
     * subItemTemplateId: 子列表项模板 ID。
     */
    subItemTemplateId?: string;
    /**
     * selectedItemIds: 列表当前选中项 ID 列表。
     */
    selectedItemIds?: string[];
    /**
     * selectionRule: 选择规则。
     */
    selectionRule?: "NORMAL" | "SINGLE" | "CONTINUOUS";
    /**
     * paddingLeft: 左内边距。
     */
    paddingLeft?: number;
    /**
     * paddingTop: 上内边距。
     */
    paddingTop?: number;
    /**
     * paddingRight: 右内边距。
     */
    paddingRight?: number;
    /**
     * paddingBottom: 下内边距。
     */
    paddingBottom?: number;
    /**
     * itemHeight: 列表项高度。
     */
    itemHeight?: number;
    /**
     * listDirection: 列表排列方向。
     */
    listDirection?: "HORIZONTAL" | "VERTICAL";
    /**
     * showSeparatorLine: 是否显示分隔线。
     */
    showSeparatorLine?: boolean;
    /**
     * separatorLineColor: 分隔线颜色。
     */
    separatorLineColor?: M3Color;
    /**
     * separatorLineWidth: 分隔线宽度。
     */
    separatorLineWidth?: number;
    /**
     * separatorLineType: 分隔线线型。
     */
    separatorLineType?: "SOLID" | "DASHED";
    /**
     * menuSelectedStyle: 菜单选中项样式。
     */
    menuSelectedStyle?: M3MenuStyle;
};
/**
 * 菜单、树或列表中的一项。
 */
export interface M3MenuItem {
    /**
     * id: 唯一 ID，用于在文档树、资源表、交互目标和样式引用之间建立稳定关联。
     */
    id?: M3NodeId;
    /**
     * text: 菜单项或单元格中的文本内容。
     */
    text?: string;
    /**
     * icon: 菜单项图标资源。
     */
    icon?: string;
    /**
     * selected: 是否被选中。
     */
    selected?: boolean;
    /**
     * checked: 是否被勾选。
     */
    checked?: boolean;
    /**
     * expanded: 是否展开子项。
     */
    expanded?: boolean;
    /**
     * children: 子节点列表，顺序就是图层树和渲染还原时的顺序。
     */
    children?: M3MenuItem[];
}
/**
 * 列表节点。
 */
export type M3ListNode = M3NodeTrait<"LIST"> & M3ListTrait & {
    /**
     * items: 列表项数据。
     */
    items?: M3MenuItem[];
};
