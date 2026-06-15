/**
 * @file 定义 M3 文档根节点、画布节点和画布设备配置。
 */
import { M3SubNode } from ".";
import { M3Color, M3NodeId, M3Point, M3Size } from "../common";
import { M3DeviceType } from "../enums";
import { M3BaseTrait } from "./base";
/**
 * 画布绑定的设备预设信息。
 */
export interface M3Device {
    /**
     * id: 唯一 ID，用于在文档树、资源表、交互目标和样式引用之间建立稳定关联。
     */
    id?: string;
    /**
     * name: 用户在设计工具中看到的名称，通常用于图层树、资源面板和代码命名。
     */
    name?: string;
    /**
     * type: 类型标识，用于区分节点、动作、样式或数据结构的具体语义。
     */
    type?: M3DeviceType;
    /**
     * category: 设备分类。
     */
    category?: "NONE" | "PHONE" | "PAD" | "WATCH" | "BOOK";
    /**
     * modelName: 设备型号名称。
     */
    modelName?: string;
    /**
     * width: 节点、设备、轨道或资源的宽度。
     */
    width?: number;
    /**
     * height: 节点、设备、轨道或资源的高度。
     */
    height?: number;
    /**
     * offset: 相对目标位置的偏移量，通常用于滚动、弹窗或阴影。
     */
    offset?: M3Point;
    /**
     * imageSize: 设备外观图片尺寸。
     */
    imageSize?: M3Size;
    /**
     * deviceScaleFactor: 设备像素缩放比例。
     */
    deviceScaleFactor?: number;
    /**
     * description: 描述文本。
     */
    description?: string;
    /**
     * canRotated: 设备是否允许旋转。
     */
    canRotated?: boolean;
    /**
     * screen: 设备屏幕方向。
     */
    screen?: "VERTICAL" | "HORIZONTAL";
}
/**
 * 文档下的页面/画布节点。
 */
export type M3CanvasNode = M3BaseTrait<"CANVAS"> & {
    /**
     * backgroundColor: 画布背景色。
     */
    backgroundColor?: M3Color;
    /**
     * backgroundEnabled: 是否启用画布背景。
     */
    backgroundEnabled?: boolean;
    /**
     * prototypeBackgroundColor: 原型播放背景色。
     */
    prototypeBackgroundColor?: M3Color;
    /**
     * prototypeBackgroundEnabled: 是否启用原型播放背景色。
     */
    prototypeBackgroundEnabled?: boolean;
    /**
     * device: 画布绑定的设备预设。
     */
    device?: M3Device;
    /**
     * defaultPageSize: 默认页面尺寸。
     */
    defaultPageSize?: M3Size;
    /**
     * defaultPageSizeName: 默认页面尺寸名称。
     */
    defaultPageSizeName?: string;
    /**
     * children: 子节点列表，顺序就是图层树和渲染还原时的顺序。
     */
    children: M3SubNode[];
};
/**
 * M3 设计文件的文档根节点。
 */
export type M3DocumentNode = M3BaseTrait<"DOCUMENT"> & {
    /**
     * startFlowFrameId: 原型起始 Frame ID。
     */
    startFlowFrameId: M3NodeId;
    /**
     * defaultPageSize: 默认页面尺寸。
     */
    defaultPageSize?: M3Size;
    /**
     * children: 子节点列表，顺序就是图层树和渲染还原时的顺序。
     */
    children: M3CanvasNode[];
};
