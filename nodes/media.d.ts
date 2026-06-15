/**
 * @file 定义图片、视频和音频媒体节点。
 */
import { M3ImageFillFilter } from "../common";
import { M3NodeTrait } from "./base";
import { M3FrameTrait } from "./frame";
/**
 * 图片节点。
 */
export type M3ImageNode = M3NodeTrait<"IMAGE"> & {
    /**
     * imageMime: 图片 MIME 类型或资源类型。
     */
    imageMime?: string;
    /**
     * imageShapeType: 图片节点裁剪形状。
     */
    imageShapeType?: "NONE" | "RECTANGLE" | "ROUNDED_RECTANGLE" | "OVAL" | "TRIANGLE" | "POLYGON" | "STAR";
    /**
     * presetImageType: 预设图片样式类型。
     */
    presetImageType?: "NONE" | "CLASSIC_STYLE" | "PLACEHOLDER_STYLE";
    /**
     * isPresetImageAssets: 是否为预设图片资源。
     */
    isPresetImageAssets?: boolean;
    /**
     * isIconLayer: 是否作为图标图层使用。
     */
    isIconLayer?: boolean;
    /**
     * imageScaleMode: 图片在容器内的缩放和裁剪方式。
     */
    imageScaleMode?: "TILE" | "FILL" | "STRETCH" | "FIT" | "CROP";
    /**
     * filters: 图片滤镜参数集合。
     */
    filters?: M3ImageFillFilter;
};
/**
 * 音视频节点共享的媒体地址与播放设置。
 */
export interface M3MediaTrait {
    /**
     * url: 跳转链接地址或媒体资源地址。
     */
    url?: string;
    /**
     * mediaUrlType: 媒体地址类型。
     */
    mediaUrlType?: "INVALID" | "NORMAL" | "THIRD_PARTY";
    /**
     * isAutoPlay: 媒体是否自动播放。
     */
    isAutoPlay?: boolean;
    /**
     * isLoopPlay: 媒体是否循环播放。
     */
    isLoopPlay?: boolean;
}
/**
 * 视频节点。
 */
export type M3VideoNode = M3FrameTrait<"VIDEO"> & M3MediaTrait;
/**
 * 音频节点。
 */
export type M3AudioNode = M3FrameTrait<"VIDEO"> & M3MediaTrait;
