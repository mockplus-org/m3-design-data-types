/**
 * @file 定义所有 M3 节点共享的基础属性、几何信息、外观样式、约束、交互和组件引用字段。
 */
import type { M3BlendMode, M3NodeType } from "../enums";
import { M3NodeId, M3Transform, M3Fill, M3Effect, M3Interaction, M3NodePropKey } from "../common";
/**
 * 节点相对父容器的布局约束类型。
 */
export type M3ConstraintType = "FREE" | "LEFT" | "CENTER_HORIZONTAL" | "RIGHT" | "LEFT_RIGHT" | "TOP" | "CENTER_VERTICAL" | "BOTTOM" | "TOP_BOTTOM" | "SCALE";
/**
 * 所有节点的基础身份字段。
 */
export type M3BaseTrait<TType extends M3NodeType> = {
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
     * idx: 同一父节点下的排序号，决定图层树 children 的先后顺序和还原时的堆叠顺序。
     */
    idx: string;
};
/**
 * 可渲染图层节点共享的几何、外观、布局、交互和组件字段。
 */
export type M3NodeTrait<TType extends M3NodeType> = M3BaseTrait<TType> & {
    /**
     * x: 节点左上角在父坐标系中的 X 坐标。
     */
    x: number;
    /**
     * y: 节点左上角在父坐标系中的 Y 坐标。
     */
    y: number;
    /**
     * width: 节点、设备、轨道或资源的宽度。
     */
    width: number;
    /**
     * height: 节点、设备、轨道或资源的高度。
     */
    height: number;
    /**
     * maxWidth: 节点最大宽度约束。
     */
    maxWidth?: number;
    /**
     * maxHeight: 节点最大高度约束。
     */
    maxHeight?: number;
    /**
     * minWidth: 节点最小宽度约束。
     */
    minWidth?: number;
    /**
     * minHeight: 节点最小高度约束。
     */
    minHeight?: number;
    /**
     * transform: 节点局部变换矩阵。
     */
    transform: M3Transform;
    /**
     * opacity: 透明度，通常取 0 到 1，用于控制渲染不透明程度。
     */
    opacity?: number;
    /**
     * blendMode: 混合模式，决定该对象与背景或下层内容的颜色混合方式。
     */
    blendMode?: M3BlendMode;
    /**
     * lockedRatio: 是否锁定宽高比。
     */
    lockedRatio?: boolean;
    /**
     * locked: 节点是否被锁定。
     */
    locked?: boolean;
    /**
     * visible: 是否可见；渲染或代码生成时不可见对象通常应跳过或隐藏。
     */
    visible?: boolean;
    /**
     * clipChildren: 是否裁剪超出容器边界的子节点。
     */
    clipChildren?: boolean;
    /**
     * clickThrough: 节点是否允许点击穿透。
     */
    clickThrough?: boolean;
    /**
     * maskType: 蒙版类型。
     */
    maskType?: "NONE" | "OUTLINE" | "ALPHA";
    /**
     * shouldBreakMaskChain: 是否断开蒙版链。
     */
    shouldBreakMaskChain?: boolean;
    /**
     * shouldDrawMaskLayer: 是否绘制蒙版图层本身。
     */
    shouldDrawMaskLayer?: boolean;
    /**
     * shouldMaskStroke: 蒙版是否作用于描边。
     */
    shouldMaskStroke?: boolean;
    /**
     * fills: 节点或样式的填充列表。
     */
    fills?: M3Fill[];
    /**
     * fillStyleId: 引用的填充样式 ID。
     */
    fillStyleId?: M3NodeId;
    /**
     * strokes: 描边填充列表。
     */
    strokes?: M3Fill[];
    /**
     * strokeStyleId: 引用的描边样式 ID。
     */
    strokeStyleId?: M3NodeId;
    /**
     * strokeThicknessIndependent: 四边描边厚度是否独立设置。
     */
    strokeThicknessIndependent?: boolean;
    /**
     * strokeThickness: 统一描边厚度。
     */
    strokeThickness?: number;
    /**
     * strokeLeftThickness: 左侧描边厚度。
     */
    strokeLeftThickness?: number;
    /**
     * strokeTopThickness: 顶部描边厚度。
     */
    strokeTopThickness?: number;
    /**
     * strokeRightThickness: 右侧描边厚度。
     */
    strokeRightThickness?: number;
    /**
     * strokeBottomThickness: 底部描边厚度。
     */
    strokeBottomThickness?: number;
    /**
     * strokeAlignment: 描边相对路径或边界的位置。
     */
    strokeAlignment?: "CENTER" | "INSIDE" | "OUTSIDE";
    /**
     * strokeLineType: 描边线型。
     */
    strokeLineType?: "SOLID" | "DASH" | "CUSTOM";
    /**
     * dashPattern: 虚线模式数组。
     */
    dashPattern?: [];
    /**
     * strokeCap: 线段端点样式。
     */
    strokeCap?: "BUTT" | "ROUND" | "SQUARE";
    /**
     * strokeJoin: 线段连接处样式。
     */
    strokeJoin?: "MITER" | "ROUND" | "BEVEL";
    /**
     * strokeArrowScale: 箭头标记缩放比例。
     */
    strokeArrowScale?: number;
    /**
     * crnerRadiusIndependent: 圆角是否四角独立；字段名保留原始拼写。
     */
    crnerRadiusIndependent?: boolean;
    /**
     * cornerRadius: 统一圆角半径。
     */
    cornerRadius?: number;
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
    /**
     * cornerStyleId: 引用的圆角样式 ID。
     */
    cornerStyleId?: M3NodeId;
    /**
     * effects: 视觉效果列表。
     */
    effects?: M3Effect[];
    /**
     * effectStyleId: 引用的效果样式 ID。
     */
    effectStyleId?: M3NodeId;
    /**
     * horizontalFlip: 是否水平翻转。
     */
    horizontalFlip?: boolean;
    /**
     * verticalFlip: 是否垂直翻转。
     */
    verticalFlip?: boolean;
    /**
     * horizontalConstraint: 水平方向布局约束。
     */
    horizontalConstraint?: M3ConstraintType;
    /**
     * verticalConstraint: 垂直方向布局约束。
     */
    verticalConstraint?: M3ConstraintType;
    /**
     * fixWidthConstraint: 是否固定宽度约束。
     */
    fixWidthConstraint?: boolean;
    /**
     * fixHeightConstraint: 是否固定高度约束。
     */
    fixHeightConstraint?: boolean;
    /**
     * stackPrimaryGrow: 自动布局主轴增长方式。
     */
    stackPrimaryGrow?: "FIXED" | "FILL";
    /**
     * stackCounterGrow: 自动布局交叉轴增长方式。
     */
    stackCounterGrow?: "FIXED" | "FILL";
    /**
     * stackPositioning: 自动布局中子节点的定位方式。
     */
    stackPositioning?: "AUTO" | "ABSOLUTE";
    /**
     * scrollBehavior: 原型滚动行为。
     */
    scrollBehavior?: "INVARIANT" | "CONTENT";
    /**
     * prototypeExtendsEnabled: 是否启用原型继承扩展。
     */
    prototypeExtendsEnabled?: boolean;
    /**
     * prototypeExtends: 当前节点是否参与原型继承。
     */
    prototypeExtends?: boolean;
    /**
     * prototypeExtendsAccept: 当前节点是否接受原型继承。
     */
    prototypeExtendsAccept?: boolean;
    /**
     * interactions: 挂在节点上的交互列表。
     */
    interactions?: M3Interaction[];
    /**
     * cellPath: 表格单元格在表格结构中的路径。
     */
    cellPath?: M3NodeId[];
    /**
     * overrideKey: 组件实例覆盖项 key。
     */
    overrideKey?: M3NodeId;
    /**
     * componentPropRefs: 节点字段与组件属性定义之间的引用关系。
     */
    componentPropRefs?: {
        /**
         * defID: 组件属性定义 ID。
         */
        defID: M3NodeId;
        /**
         * defName: 组件属性定义名称。
         */
        defName: string;
        /**
         * nodeField: 该组件属性绑定的节点字段名。
         */
        nodeField: M3NodePropKey;
    }[];
    /**
     * booleanOperation: 形状组合或布尔运算模式。
     */
    booleanOperation: "NONE" | "UNION" | "DIFFERENCE" | "INTERSECT" | "XOR";
    /**
     * addonIndentLevel: 列表、菜单或树节点的附加缩进层级。
     */
    addonIndentLevel: "FIRST" | "LEVEL1" | "LEVEL2" | "LEVEL3" | "LEVEL4" | "LEVEL5" | "LEVEL6" | "LEVEL7" | "LEVEL8" | "LEVEL9";
    /**
     * addonChecked: 列表、菜单或树节点是否勾选。
     */
    addonChecked: boolean;
    /**
     * addonExpanded: 列表、菜单或树节点是否展开。
     */
    addonExpanded: boolean;
    /**
     * alias: 节点别名。
     */
    alias?: string;
    /**
     * resourceAlias: 资源别名。
     */
    resourceAlias?: string;
};
