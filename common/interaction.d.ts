/**
 * @file 定义 M3 原型交互事件和动作类型，用于描述点击、跳转、弹窗、变量、动画等交互行为。
 */
import { M3Color, M3NodeId, M3Point, M3Size } from "./base";
import { M3VariableData } from "./variable";
/**
 * 交互动作属性键集合，对应原始交互动作数据中的可配置字段。
 */
export type M3InteractionActionKey = "TYPE" | "EXECUTE_TYPE" | "TARGET" | "INVALID_INFOS" | "LINE" | "CAN_EXTENDS" | "IS_DELETED" | "IS_ADDED" | "IS_BUILTIN" | "DELAY" | "ANIMATION" | "NOT_CLOSE_ON_MOUSE_HOVER" | "CONDITIONS" | "URL" | "LINK_DESC" | "BLANK" | "LIST_SELECT_TYPE" | "MOVE_TYPE" | "IS_MODIFIED_MOVE_TO" | "IS_MODIFIED_MOVE_BY" | "OFFSET" | "VALUE_PERCENT" | "ANCHOR_TYPE" | "SCREEN_ANCHOR" | "LAYER_ANCHOR" | "SMART_ANCHOR" | "CLOSE_ON_BLANK" | "CLOSE_CLICK_THROUGH" | "SHOW_MASK" | "MASK_COLOR" | "DELAY_CLOSE" | "DELAY_CLOSE_TIME" | "PLACEMENT" | "SPECIFIED_PLACEMENT" | "INDEX" | "ROTATE_TYPE" | "ANGLE" | "ROTATE_ANCHOR" | "SCALE_TYPE" | "VALUE_TYPE_X" | "VALUE_TYPE_Y" | "SIZE" | "SCALE_ANCHOR" | "DIRECTION" | "TARGET_VARIABLE" | "VISIBILE_TYPE" | "STATES" | "VARS" | "IS_TOP_RENDER" | "SWAP_CONTENT_TYPE" | "TARGET_CONTENT_FRAME_ID" | "LOOP_SWITCH_CONTENT" | "LOOP_SWITCH_DELAY";
/**
 * 交互动作类型集合，用于区分跳转、弹窗、移动、缩放等动作。
 */
export type M3InteractionActionType = "NONE" | "LINK" | "SCROLL_TO" | "SWAP_STATE" | "CONDITIONAL" | "SET_VARIABLE" | "NAVIGATE" | "PAGE_UP" | "TRANSIT_LAYER" | "POPUP" | "SWAP_POPUP" | "CLOSE_POPUP" | "VISIBLE" | "LIST_SELECT" | "ADD_LIST_ITEM" | "REMOVE_LIST_ITEM" | "MODIFY_LIST_ITEM" | "MOVE" | "SCALE" | "ROTATE" | "SWAP_CONTENT";
/**
 * 交互动效类型集合。
 */
export type M3InteractionAnimationType = "IMMEDIATE" | "NORMAL" | "MOVE_IN" | "MOVE_OUT" | "PUSH_IN" | "FLIP" | "ZOOM" | "FADE_IN" | "FADE_OUT" | "SMART";
/**
 * 交互动效缓动曲线类型集合。
 */
export type M3InteractionAnimationEasingType = "NONE" | "LINEAR" | "EASE_IN" | "EASE_OUT" | "EASE_IN_OUT" | "EASE_IN_BACK" | "EASE_OUT_BACK" | "EASE_IN_OUT_BACK" | "CUSTOM_SPRING" | "GENTLE" | "QUICK" | "SLOW" | "BOUNCY" | "CUSTOM_BEZIER";
/**
 * 列表项增删改动作的插入或匹配位置类型。
 */
export type M3InteractionListItemPlacement = "LAST_ITEM" | "FIRST_ITEM" | "SPECIFIED_ITEM";
/**
 * 列表项动作指定位置的解释方式。
 */
export type M3InteractionSpecifiedPlacement = "SELECTED" | "UNSELECTED" | "INDEX";
/**
 * 交互动作使用的动画配置。
 */
export interface M3InteractionAnimation {
    /**
     * type: 类型标识，用于区分节点、动作、样式或数据结构的具体语义。
     */
    type: M3InteractionAnimationType;
    /**
     * direction: 方向枚举，用于动画、滚动、列表或移动语义。
     */
    direction: "NONE" | "FROM_RIGHT" | "FROM_LEFT" | "FROM_BOTTOM" | "FROM_TOP";
    /**
     * flipDirection: 翻转动效方向。
     */
    flipDirection: "NONE" | "HORIZONTAL" | "VERTICAL";
    /**
     * zoomType: 缩放动效类型。
     */
    zoomType: "NONE" | "ZOOM_IN" | "ZOOM_OUT";
    /**
     * duration: 持续时间，通常以毫秒为单位。
     */
    duration: number;
    /**
     * delay: 延迟时间，通常以毫秒为单位。
     */
    delay: number;
    /**
     * easingType: 缓动类型，决定动画速度曲线。
     */
    easingType: M3InteractionAnimationEasingType;
    /**
     * easingFunction: 自定义贝塞尔缓动曲线控制点。
     */
    easingFunction: [number, number, number, number];
}
/**
 * 交互动作的目标图层或连接形状。
 */
export interface M3InteractionActionTarget {
    /**
     * type: 类型标识，用于区分节点、动作、样式或数据结构的具体语义。
     */
    type: "NONE" | "LAYER" | "CONNECT_SHAPE";
    /**
     * idPath: 从根或作用域到目标节点的 ID 路径。
     */
    idPath: M3NodeId[];
    /**
     * isSelf: 目标是否指向当前节点自身。
     */
    isSelf: boolean;
    /**
     * isParentComponent: 目标是否位于父组件作用域中。
     */
    isParentComponent: boolean;
}
/**
 * 组件状态切换时要应用的状态属性值。
 */
export interface M3InteractionStateValue {
    /**
     * status: 组件状态属性和值的引用。
     */
    status: {
        /**
         * propId: 组件状态属性 ID。
         */
        propId: M3NodeId;
        /**
         * valueId: 组件状态值 ID。
         */
        valueId: M3NodeId;
    };
    /**
     * propName: 组件状态属性名称。
     */
    propName: string;
    /**
     * valueName: 组件状态值名称。
     */
    valueName: string;
    /**
     * isBool: 状态值是否按布尔值解释。
     */
    isBool: boolean;
    /**
     * boolValue: 布尔状态的实际值。
     */
    boolValue: boolean;
}
/**
 * 交互动作中引用或修改的组件变量值。
 */
export interface M3InteractionVarValue {
    /**
     * layerIdPath: 插槽或变量关联的图层路径。
     */
    layerIdPath?: M3NodeId[];
    /**
     * aliasLayerIdPath: 变量别名指向图层的 ID 路径。
     */
    aliasLayerIdPath?: M3NodeId[];
    /**
     * layerName: 变量所属或目标图层名称。
     */
    layerName: string;
    /**
     * varType: 变量来源类型。
     */
    varType: "COMPONENT_PROPERTY";
    /**
     * varID: 变量 ID。
     */
    varID: M3NodeId;
    /**
     * parentVarID: 父级变量 ID。
     */
    parentVarID: M3NodeId;
    /**
     * aliasParentVarID: 别名变量的父级变量 ID。
     */
    aliasParentVarID?: M3NodeId;
    /**
     * varValue: 变量当前值。
     */
    varValue: M3VariableData;
    /**
     * varName: 变量名称。
     */
    varName: string;
    /**
     * varExecuteType: 变量执行时选取首项、末项或不特殊处理的策略。
     */
    varExecuteType: "NONE" | "FIRST" | "LAST";
    /**
     * varExecuteRule: 变量执行时的递增或递减规则。
     */
    varExecuteRule: "NONE" | "INCREASE_ONE" | "DECREASE_ONE";
}
/**
 * 所有交互动作共享的基础字段。
 */
export type M3InteractionActionBase<TType extends M3InteractionActionType> = {
    /**
     * id: 唯一 ID，用于在文档树、资源表、交互目标和样式引用之间建立稳定关联。
     */
    id: M3NodeId;
    /**
     * type: 类型标识，用于区分节点、动作、样式或数据结构的具体语义。
     */
    type: TType;
    /**
     * target: 交互动作的目标对象。
     */
    target?: M3InteractionActionTarget;
    /**
     * executeType: 动作执行方式，用于区分默认执行或并行执行。
     */
    executeType?: "NONE" | "DEFAULT" | "PARALLEL";
    /**
     * canExtends: 该动作是否允许在组件或原型继承场景中扩展。
     */
    canExtends?: boolean;
    /**
     * isDeleted: 动作是否被标记为删除。
     */
    isDeleted?: boolean;
    /**
     * isAdded: 动作是否为新增动作。
     */
    isAdded?: boolean;
    /**
     * isBuildin: 动作是否为系统内置动作。
     */
    isBuildin?: boolean;
    /**
     * delay: 延迟时间，通常以毫秒为单位。
     */
    delay?: number;
};
/**
 * M3InteractionLinkAction 表示一种 M3 原型交互动作。
 */
export interface M3InteractionLinkAction extends M3InteractionActionBase<"LINK"> {
    /**
     * url: 跳转链接地址或媒体资源地址。
     */
    url: string;
    /**
     * linkDesc: 链接的人类可读说明。
     */
    linkDesc: string;
    /**
     * blank: 跳转时是否在新窗口或新上下文中打开。
     */
    blank: boolean;
}
/**
 * M3InteractionScrollToAction 表示一种 M3 原型交互动作。
 */
export interface M3InteractionScrollToAction extends M3InteractionActionBase<"SCROLL_TO"> {
    /**
     * offset: 相对目标位置的偏移量，通常用于滚动、弹窗或阴影。
     */
    offset: M3Point;
    /**
     * direction: 方向枚举，用于动画、滚动、列表或移动语义。
     */
    direction: "NONE" | "HORIZONTAL" | "VERTICAL" | "BOTH";
    /**
     * animation: 该动作使用的动画配置。
     */
    animation: M3InteractionAnimation;
}
/**
 * M3InteractionSwapStateAction 表示一种 M3 原型交互动作。
 */
export interface M3InteractionSwapStateAction extends M3InteractionActionBase<"SWAP_STATE"> {
    /**
     * animation: 该动作使用的动画配置。
     */
    animation: M3InteractionAnimation;
    /**
     * states: 要切换或写入的组件状态值列表。
     */
    states: M3InteractionStateValue[];
    /**
     * vars: 要读取或写入的变量值列表。
     */
    vars: M3InteractionVarValue[];
}
/**
 * M3InteractionConditionalAction 表示一种 M3 原型交互动作。
 */
export interface M3InteractionConditionalAction extends M3InteractionActionBase<"CONDITIONAL"> {
    /**
     * conditions: 条件动作中的分支条件和分支动作列表。
     */
    conditions: {
        /**
         * type: 类型标识，用于区分节点、动作、样式或数据结构的具体语义。
         */
        type: "IF" | "ELSE_IF" | "ELSE";
        /**
         * groups: 条件表达式分组。
         */
        groups: {
            /**
             * expression: 条件表达式数据；当前结构待完善。
             */
            expression: {};
            /**
             * termDataGroups: 条件表达式项分组；当前结构待完善。
             */
            termDataGroups: {};
        }[][];
        /**
         * actions: 交互动作集合或动作分组。
         */
        actions: M3InteractionAction[];
        /**
         * isValid: 该条件或动作数据是否有效。
         */
        isValid: boolean;
    }[];
}
/**
 * M3InteractionSetVariableAction 表示一种 M3 原型交互动作。
 */
export interface M3InteractionSetVariableAction extends M3InteractionActionBase<"SET_VARIABLE"> {
    /**
     * targetVariable: 被设置或修改的目标变量。
     */
    targetVariable: {
        /**
         * id: 唯一 ID，用于在文档树、资源表、交互目标和样式引用之间建立稳定关联。
         */
        id: M3NodeId;
    };
}
/**
 * M3InteractionNavigateAction 表示一种 M3 原型交互动作。
 */
export interface M3InteractionNavigateAction extends M3InteractionActionBase<"NAVIGATE"> {
    /**
     * blank: 跳转时是否在新窗口或新上下文中打开。
     */
    blank: boolean;
    /**
     * animation: 该动作使用的动画配置。
     */
    animation: M3InteractionAnimation;
}
/**
 * M3InteractionPageUpAction 表示一种 M3 原型交互动作。
 */
export interface M3InteractionPageUpAction extends M3InteractionActionBase<"PAGE_UP"> {
}
/**
 * M3InteractionPopupAction 表示一种 M3 原型交互动作。
 */
export interface M3InteractionPopupAction extends M3InteractionActionBase<"POPUP"> {
    /**
     * animation: 该动作使用的动画配置。
     */
    animation: M3InteractionAnimation;
    /**
     * offset: 相对目标位置的偏移量，通常用于滚动、弹窗或阴影。
     */
    offset: M3Point;
    /**
     * anchorType: 弹窗、缩放或旋转时使用的锚点类型。
     */
    anchorType: "NONE" | "SCREEN" | "LAYER";
    /**
     * screenAnchor: 相对屏幕的弹窗锚点。
     */
    screenAnchor: "NONE" | "TOP_LEFT" | "TOP_RIGHT" | "BOTTOM_LEFT" | "BOTTOM_RIGHT" | "LEFT_CENTER" | "RIGHT_CENTER" | "TOP_CENTER" | "BOTTOM_CENTER" | "CENTER";
    /**
     * layerAnchor: 相对图层的弹窗锚点。
     */
    layerAnchor: "NONE" | "LEFT_TOP" | "LEFT_CENTER" | "LEFT_BOTTOM" | "TOP_LEFT" | "TOP_CENTER" | "TOP_RIGHT" | "RIGHT_TOP" | "RIGHT_CENTER" | "RIGHT_BOTTOM" | "BOTTOM_LEFT" | "BOTTOM_CENTER" | "BOTTOM_RIGHT" | "CENTER";
    /**
     * smartAnchor: 是否启用智能锚点定位。
     */
    smartAnchor: boolean;
    /**
     * closeOnBlank: 点击空白区域时是否关闭弹窗。
     */
    closeOnBlank: boolean;
    /**
     * closeClickThrough: 关闭时点击是否穿透到下层对象。
     */
    closeClickThrough: boolean;
    /**
     * showMask: 是否显示弹窗遮罩。
     */
    showMask: boolean;
    /**
     * maskColor: 弹窗遮罩颜色。
     */
    maskColor: M3Color;
    /**
     * delayClose: 是否延迟关闭弹窗。
     */
    delayClose: boolean;
    /**
     * delayCloseTime: 弹窗延迟关闭时间。
     */
    delayCloseTime: number;
}
/**
 * M3InteractionSwapPopupAction 表示一种 M3 原型交互动作。
 */
export interface M3InteractionSwapPopupAction extends M3InteractionActionBase<"SWAP_POPUP"> {
    /**
     * animation: 该动作使用的动画配置。
     */
    animation: M3InteractionAnimation;
}
/**
 * M3InteractionClosePopupAction 表示一种 M3 原型交互动作。
 */
export interface M3InteractionClosePopupAction extends M3InteractionActionBase<"CLOSE_POPUP"> {
    /**
     * animation: 该动作使用的动画配置。
     */
    animation: M3InteractionAnimation;
    /**
     * notCloseOnMouseHover: 鼠标悬停时是否阻止关闭弹窗。
     */
    notCloseOnMouseHover: boolean;
}
/**
 * M3InteractionVisibleAction 表示一种 M3 原型交互动作。
 */
export interface M3InteractionVisibleAction extends M3InteractionActionBase<"VISIBLE"> {
    /**
     * animation: 该动作使用的动画配置。
     */
    animation: M3InteractionAnimation;
    /**
     * visibleType: 可见性动作的执行类型，如显示、隐藏或切换。
     */
    visibleType: "TOGGLE" | "SHOW" | "HIDE";
    /**
     * isTopRender: 显示时是否置顶渲染。
     */
    isTopRender: boolean;
}
/**
 * M3InteractionListSelectAction 表示一种 M3 原型交互动作。
 */
export interface M3InteractionListSelectAction extends M3InteractionActionBase<"LIST_SELECT"> {
    /**
     * animation: 该动作使用的动画配置。
     */
    animation: M3InteractionAnimation;
    /**
     * listSelectType: 列表选择动作类型。
     */
    listSelectType: "SELECT_ALL" | "SELECT_REVERSE" | "SELECT_NONE" | "SELECT_NEXT" | "SELECT_PREVIOUS";
}
/**
 * M3InteractionAddListItemAction 表示一种 M3 原型交互动作。
 */
export interface M3InteractionAddListItemAction extends M3InteractionActionBase<"ADD_LIST_ITEM"> {
    /**
     * placement: 列表项新增、删除或修改的位置规则。
     */
    placement: M3InteractionListItemPlacement;
    /**
     * specifiedPlacement: 指定列表位置的解释方式。
     */
    specifiedPlacement: M3InteractionSpecifiedPlacement;
    /**
     * index: 索引位置。
     */
    index: number;
    /**
     * states: 要切换或写入的组件状态值列表。
     */
    states: M3InteractionStateValue[];
    /**
     * vars: 要读取或写入的变量值列表。
     */
    vars: M3InteractionVarValue[];
}
/**
 * M3InteractionRemoveListItemAction 表示一种 M3 原型交互动作。
 */
export interface M3InteractionRemoveListItemAction extends M3InteractionActionBase<"REMOVE_LIST_ITEM"> {
    /**
     * placement: 列表项新增、删除或修改的位置规则。
     */
    placement: M3InteractionListItemPlacement;
    /**
     * specifiedPlacement: 指定列表位置的解释方式。
     */
    specifiedPlacement: M3InteractionSpecifiedPlacement;
    /**
     * index: 索引位置。
     */
    index: number;
}
/**
 * M3InteractionModifyListItemAction 表示一种 M3 原型交互动作。
 */
export interface M3InteractionModifyListItemAction extends M3InteractionActionBase<"MODIFY_LIST_ITEM"> {
    /**
     * placement: 列表项新增、删除或修改的位置规则。
     */
    placement: M3InteractionListItemPlacement;
    /**
     * specifiedPlacement: 指定列表位置的解释方式。
     */
    specifiedPlacement: M3InteractionSpecifiedPlacement;
    /**
     * index: 索引位置。
     */
    index: number;
    /**
     * states: 要切换或写入的组件状态值列表。
     */
    states: M3InteractionStateValue[];
    /**
     * vars: 要读取或写入的变量值列表。
     */
    vars: M3InteractionVarValue[];
}
/**
 * M3InteractionMoveAction 表示一种 M3 原型交互动作。
 */
export interface M3InteractionMoveAction extends M3InteractionActionBase<"MOVE"> {
    /**
     * moveType: 移动动作类型。
     */
    moveType: "NONE" | "MOVE_TO" | "MOVE_BY" | "FOLLOW";
    /**
     * isModifiedMoveTo: 是否修改了移动到目标位置的数据。
     */
    isModifiedMoveTo: boolean;
    /**
     * isModifiedMoveBy: 是否修改了按偏移移动的数据。
     */
    isModifiedMoveBy: boolean;
    /**
     * offset: 相对目标位置的偏移量，通常用于滚动、弹窗或阴影。
     */
    offset: M3Point;
    /**
     * valuePercent: 百分比形式的动作值。
     */
    valuePercent: number;
    /**
     * animation: 该动作使用的动画配置。
     */
    animation: M3InteractionAnimation;
}
/**
 * M3InteractionCommonAnchor 是 common/interaction.ts 中的 M3 类型定义，用于让 AI 和消费方理解该数据结构的语义。
 */
export type M3InteractionCommonAnchor = "NONE" | "TOP_LEFT" | "TOP_RIGHT" | "BOTTOM_LEFT" | "BOTTOM_RIGHT" | "LEFT_CENTER" | "RIGHT_CENTER" | "TOP_CENTER" | "BOTTOM_CENTER" | "CENTER";
/**
 * M3InteractionScaleAction 表示一种 M3 原型交互动作。
 */
export interface M3InteractionScaleAction extends M3InteractionActionBase<"SCALE"> {
    /**
     * scaleType: 缩放动作类型。
     */
    scaleType: "NONE" | "SCALE_TO" | "SCALE_BY" | "FOLLOW";
    /**
     * valueTypeX: X 方向缩放值的解释方式。
     */
    valueTypeX: "NONE" | "ABSOLUTE" | "PERCENT";
    /**
     * valueTypeY: Y 方向缩放值的解释方式。
     */
    valueTypeY: "NONE" | "ABSOLUTE" | "PERCENT";
    /**
     * scaleAnchor: 缩放动作的锚点。
     */
    scaleAnchor: M3InteractionCommonAnchor;
    /**
     * size: 尺寸值。
     */
    size: M3Size;
    /**
     * valuePercent: 百分比形式的动作值。
     */
    valuePercent: number;
    /**
     * animation: 该动作使用的动画配置。
     */
    animation: M3InteractionAnimation;
}
/**
 * M3InteractionRotateAction 表示一种 M3 原型交互动作。
 */
export interface M3InteractionRotateAction extends M3InteractionActionBase<"ROTATE"> {
    /**
     * rotateType: 旋转动作类型。
     */
    rotateType: "NONE" | "ROTATE_TO" | "ROTATE_BY" | "FOLLOW";
    /**
     * angle: 旋转角度。
     */
    angle: number;
    /**
     * valuePercent: 百分比形式的动作值。
     */
    valuePercent: number;
    /**
     * rotateAnchor: 旋转动作的锚点。
     */
    rotateAnchor: M3InteractionCommonAnchor;
    /**
     * animation: 该动作使用的动画配置。
     */
    animation: M3InteractionAnimation;
}
/**
 * M3InteractionSwapContentAction 表示一种 M3 原型交互动作。
 */
export interface M3InteractionSwapContentAction extends M3InteractionActionBase<"SWAP_CONTENT"> {
    /**
     * animation: 该动作使用的动画配置。
     */
    animation: M3InteractionAnimation;
    /**
     * swapContentType: 动态内容切换方式。
     */
    swapContentType: "PREVIOUS" | "NEXT" | "FIRST_CONTENT" | "LAST_CONTENT" | "STOP_LOOP_SWITCH" | "TARGET_CONTENT";
    /**
     * targetContentFrameID: 要切换到的目标内容 Frame ID。
     */
    targetContentFrameID: M3NodeId;
    /**
     * loopSwitchContent: 是否循环切换内容。
     */
    loopSwitchContent: boolean;
    /**
     * loopSwitchDelay: 循环切换内容的延迟时间。
     */
    loopSwitchDelay: number;
}
/**
 * M3InteractionActionGeneric 是 common/interaction.ts 中的 M3 类型定义，用于让 AI 和消费方理解该数据结构的语义。
 */
export interface M3InteractionActionGeneric extends M3InteractionActionBase<"NONE" | "TRANSIT_LAYER"> {
}
/**
 * 所有具体交互动作的联合类型。
 */
export type M3InteractionAction = M3InteractionLinkAction | M3InteractionScrollToAction | M3InteractionSwapStateAction | M3InteractionConditionalAction | M3InteractionSetVariableAction | M3InteractionNavigateAction | M3InteractionPageUpAction | M3InteractionPopupAction | M3InteractionSwapPopupAction | M3InteractionClosePopupAction | M3InteractionVisibleAction | M3InteractionListSelectAction | M3InteractionAddListItemAction | M3InteractionRemoveListItemAction | M3InteractionModifyListItemAction | M3InteractionMoveAction | M3InteractionScaleAction | M3InteractionRotateAction | M3InteractionSwapContentAction;
/**
 * 触发交互的事件配置。
 */
export interface M3InteractionEvent {
    /**
     * type: 类型标识，用于区分节点、动作、样式或数据结构的具体语义。
     */
    type: "NONE" | "CLICK" | "DOUBLE_CLICK" | "RIGHT_CLICK" | "MOUSE_DOWN" | "MOUSE_UP" | "MOUSE_DRAG" | "MOUSE_ENTER" | "MOUSE_LEAVE" | "SWIPE_LEFT" | "SWIPE_RIGHT" | "SWIPE_UP" | "SWIPE_DOWN" | "PINCH_TO_ZOOM_IN" | "PINCH_TO_ZOOM_OUT" | "LOADED" | "MOUSE_WHEEL" | "KEY_DOWN" | "KEY_UP" | "MOUSE_HOVER";
    /**
     * flowType: 事件传播流向。
     */
    flowType: "NONE" | "CAPTURE" | "BUBBLE";
    /**
     * preventType: 事件阻止策略。
     */
    preventType: "NONE" | "CAPTURE" | "BUBBLE";
    /**
     * dampingType: 拖拽或滚动交互的阻尼强度。
     */
    dampingType: "NONE" | "LOW" | "MID" | "HIGH";
    /**
     * dampingBackType: 回弹时使用的阻尼阶段。
     */
    dampingBackType: "NONE" | "INITIAL" | "FINAL";
    /**
     * triggerDistanceType: 触发距离的计算方式。
     */
    triggerDistanceType: "AUTO" | "CUSTOM";
    /**
     * triggerDistanceValue: 自定义触发距离值。
     */
    triggerDistanceValue: number;
    /**
     * shortcut: 触发事件的快捷键。
     */
    shortcut: string;
}
/**
 * 挂在节点上的完整交互定义。
 */
export interface M3Interaction {
    /**
     * id: 唯一 ID，用于在文档树、资源表、交互目标和样式引用之间建立稳定关联。
     */
    id: M3NodeId;
    /**
     * actions: 交互动作集合或动作分组。
     */
    actions: {
        /**
         * id: 唯一 ID，用于在文档树、资源表、交互目标和样式引用之间建立稳定关联。
         */
        id: M3NodeId;
        /**
         * actions: 交互动作集合或动作分组。
         */
        actions: Record<M3InteractionActionKey, M3InteractionAction>;
    }[];
    /**
     * event: 触发该交互的事件配置。
     */
    event: M3InteractionEvent;
}
