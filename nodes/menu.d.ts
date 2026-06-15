/**
 * @file 定义水平菜单、导航菜单和下拉选择节点。
 */
import { M3Color, M3TextStyle } from "../common";
import { M3NodeTrait } from "./base";
import { M3ListTrait, M3MenuItem } from "./list";
/**
 * 菜单类节点共享的图标、箭头、指示器和滚动配置。
 */
export interface M3MenuTrait {
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
     * menuArrowType: 菜单箭头样式。
     */
    menuArrowType?: "ARROW" | "TRIANGLE" | "PLUS_MINUS";
    /**
     * indicatorEnabled: 是否显示选中指示器。
     */
    indicatorEnabled?: boolean;
    /**
     * indicatorColor: 选中指示器颜色。
     */
    indicatorColor?: M3Color;
    /**
     * selectedBackgroundEnabled: 是否显示选中背景。
     */
    selectedBackgroundEnabled?: boolean;
    /**
     * selectedBackgroundColor: 选中背景颜色。
     */
    selectedBackgroundColor?: M3Color;
    /**
     * scrollbarVisibility: 滚动条显示策略。
     */
    scrollbarVisibility?: "HIDDEN" | "ALWAYS" | "AUTO_HIDDEN";
    /**
     * scrollbarColor: 滚动条颜色。
     */
    scrollbarColor?: M3Color;
}
/**
 * 水平菜单节点。
 */
export type M3HorizontalMenuNode = M3NodeTrait<"HORIZONTAL_MENU"> & M3TextStyle & M3ListTrait & M3MenuTrait;
/**
 * 导航菜单节点。
 */
export type M3NavigationMenuNode = M3NodeTrait<"NAVIGATION_MENU"> & M3TextStyle & M3ListTrait & M3MenuTrait;
/**
 * 下拉选择项。
 */
export interface M3SelectionOption {
    /**
     * label: 选项显示文本。
     */
    label?: string;
    /**
     * isSelected: 选项是否被选中。
     */
    isSelected?: boolean;
}
/**
 * 下拉选择节点。
 */
export type M3DropdownNode = M3NodeTrait<"DROPDOWN"> & M3TextStyle & {
    /**
     * dropdownOpened: 下拉面板是否打开。
     */
    dropdownOpened?: boolean;
    /**
     * dropdownSelectMode: 下拉选择模式。
     */
    dropdownSelectMode?: "SINGLE" | "MULTIPLE";
    /**
     * dropdownOptionsBackground: 下拉选项面板背景色。
     */
    dropdownOptionsBackground?: M3Color;
    /**
     * dropdownOptionsTextColor: 下拉选项文本颜色。
     */
    dropdownOptionsTextColor?: M3Color;
    /**
     * dropdownSelectedTextColor: 下拉选中项文本颜色。
     */
    dropdownSelectedTextColor?: M3Color;
    /**
     * dropdownOptions: 下拉选项列表。
     */
    dropdownOptions?: M3SelectionOption[];
    /**
     * dropdownSupportSearch: 下拉是否支持搜索。
     */
    dropdownSupportSearch?: boolean;
    /**
     * placeholder: 输入或下拉控件的占位文本。
     */
    placeholder?: string;
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
     * selectedBackgroundEnabled: 是否显示选中背景。
     */
    selectedBackgroundEnabled?: boolean;
    /**
     * selectedBackgroundColor: 选中背景颜色。
     */
    selectedBackgroundColor?: M3Color;
    /**
     * itemHeight: 列表项高度。
     */
    itemHeight?: number;
    /**
     * selectionRule: 选择规则。
     */
    selectionRule?: "NORMAL" | "SINGLE" | "CONTINUOUS";
};
