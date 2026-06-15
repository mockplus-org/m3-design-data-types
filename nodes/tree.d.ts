/**
 * @file 定义树形列表节点及其图标、箭头、复选框配置。
 */
import { M3Color, M3TextStyle } from "../common";
import { M3NodeTrait } from "./base";
import { M3ListTrait, M3MenuItem } from "./list";
/**
 * 树形列表节点。
 */
export type M3TreeNode = M3NodeTrait<"TREE"> & M3TextStyle & M3ListTrait & {
    /**
     * menuItems: 菜单或树节点的项目树。
     */
    menuItems?: M3MenuItem[];
    /**
     * iconEnabled: 是否显示图标。
     */
    iconEnabled?: boolean;
    /**
     * iconColor: 图标颜色。
     */
    iconColor?: M3Color;
    /**
     * iconSize: 图标尺寸。
     */
    iconSize?: number;
    /**
     * selectedIconColor: 选中状态图标颜色。
     */
    selectedIconColor?: M3Color;
    /**
     * arrowEnabled: 是否显示箭头。
     */
    arrowEnabled?: boolean;
    /**
     * arrowColor: 箭头颜色。
     */
    arrowColor?: M3Color;
    /**
     * arrowSize: 箭头尺寸。
     */
    arrowSize?: number;
    /**
     * selectedArrowColor: 选中状态箭头颜色。
     */
    selectedArrowColor?: M3Color;
    /**
     * checkboxEnabled: 是否显示复选框。
     */
    checkboxEnabled?: boolean;
    /**
     * checkboxColor: 复选框颜色。
     */
    checkboxColor?: M3Color;
    /**
     * checkboxSize: 复选框尺寸。
     */
    checkboxSize?: number;
};
