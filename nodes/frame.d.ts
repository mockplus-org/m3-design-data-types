/**
 * @file 定义 Frame、动态面板、模板容器以及滚动、插槽、自动布局能力。
 */
import { M3Color, M3NodeId } from "../common";
import { M3NodeType } from "../enums";
import { M3NodeTrait } from "./base";
import { M3GroupTrait } from "./group";
/**
 * 容器节点的滚动能力配置。
 */
export type M3ScrollTrait = {
    /**
     * scrollDirection: 滚动方向。
     */
    scrollDirection?: "BOTH" | "HORIZONTAL" | "VERTICAL" | "NONE";
    /**
     * scrollbarVisibility: 滚动条显示策略。
     */
    scrollbarVisibility?: "HIDDEN" | "ALWAYS" | "AUTO_HIDDEN";
    /**
     * scrollbarColor: 滚动条颜色。
     */
    scrollbarColor?: M3Color;
};
/**
 * 模板或作用域插槽定义。
 */
export interface M3ScopeSlot {
    /**
     * id: 唯一 ID，用于在文档树、资源表、交互目标和样式引用之间建立稳定关联。
     */
    id?: M3NodeId;
    /**
     * name: 用户在设计工具中看到的名称，通常用于图层树、资源面板和代码命名。
     */
    name?: string;
    /**
     * layerIdPath: 插槽或变量关联的图层路径。
     */
    layerIdPath?: M3NodeId[];
    /**
     * deletable: 是否允许删除。
     */
    deletable?: boolean;
}
/**
 * 包含作用域插槽列表的能力。
 */
export type M3ScopeSlotTrait = {
    /**
     * scopeSlots: 作用域插槽列表。
     */
    scopeSlots?: M3ScopeSlot[];
};
/**
 * 自动布局/堆叠布局配置。
 */
export type M3StackLayoutTrait = {
    /**
     * stackMode: 自动布局主轴方向。
     */
    stackMode?: "HORIZONTAL" | "VERTICAL";
    /**
     * stackSpacing: 自动布局主轴间距。
     */
    stackSpacing?: number;
    /**
     * stackPaddingTop: 自动布局顶部内边距。
     */
    stackPaddingTop?: number;
    /**
     * stackPaddingRight: 自动布局右侧内边距。
     */
    stackPaddingRight?: number;
    /**
     * stackPaddingBottom: 自动布局底部内边距。
     */
    stackPaddingBottom?: number;
    /**
     * stackPaddingLeft: 自动布局左侧内边距。
     */
    stackPaddingLeft?: number;
    /**
     * stackPrimaryAlign: 自动布局主轴对齐方式。
     */
    stackPrimaryAlign?: "MIN" | "CENTER" | "MAX" | "SPACE_EVENLY";
    /**
     * stackCounterAlign: 自动布局交叉轴对齐方式。
     */
    stackCounterAlign?: "MIN" | "CENTER" | "MAX" | "BASELINE";
    /**
     * stackPrimarySizing: 自动布局主轴尺寸策略。
     */
    stackPrimarySizing?: "HUG" | "FIXED" | "MIN";
    /**
     * stackCounterSizing: 自动布局交叉轴尺寸策略。
     */
    stackCounterSizing?: "HUG" | "FIXED" | "MIN";
    /**
     * stackPositioning: 自动布局中子节点的定位方式。
     */
    stackPositioning?: "AUTO" | "ABSOLUTE";
    /**
     * stackPrimaryGrow: 自动布局主轴增长方式。
     */
    stackPrimaryGrow?: "FIXED" | "FILL";
    /**
     * stackCounterGrow: 自动布局交叉轴增长方式。
     */
    stackCounterGrow?: "FIXED" | "FILL";
    /**
     * stackCounterSpacing: 自动布局换行后交叉轴间距。
     */
    stackCounterSpacing?: number;
    /**
     * stackWrap: 自动布局是否换行。
     */
    stackWrap?: "NO_WRAP" | "WRAP";
    /**
     * stackCounterSpacingMode: 交叉轴间距计算方式。
     */
    stackCounterSpacingMode?: "AUTO" | "SPACE_BETWEEN";
    /**
     * stackReverseZIndex: 自动布局子节点是否反向堆叠。
     */
    stackReverseZIndex?: boolean;
    /**
     * stackIncludeStrokes: 自动布局计算尺寸时是否包含描边。
     */
    stackIncludeStrokes?: boolean;
    /**
     * stackLayoutEnabled: 是否启用自动布局。
     */
    stackLayoutEnabled?: boolean;
};
/**
 * Frame 类容器共享能力集合。
 */
export type M3FrameTrait<TType extends M3NodeType> = M3NodeTrait<TType> & M3GroupTrait & M3ScrollTrait & M3ScopeSlotTrait & M3StackLayoutTrait;
/**
 * 普通 Frame 容器节点。
 */
export type M3FrameNode = M3FrameTrait<"FRAME">;
/**
 * 动态面板节点。
 */
export type M3DynamicPanelNode = M3FrameTrait<"DYNAMIC_PANEL"> & {
    /**
     * activeFrameId: 动态面板当前激活的内容 Frame ID。
     */
    activeFrameId?: M3NodeId;
    /**
     * tilingColumnCount: 动态面板平铺列数。
     */
    tilingColumnCount?: number;
};
/**
 * 模板 Frame 节点。
 */
export type M3TemplateFrameNode = M3FrameTrait<"TEMPLATE_FRAME"> & {
    /**
     * quickDesignerLinker: 模板快速设计关联节点 ID 列表。
     */
    quickDesignerLinker?: M3NodeId[];
    /**
     * templateTextLinker: 模板文本关联节点 ID 列表。
     */
    templateTextLinker?: M3NodeId[];
};
