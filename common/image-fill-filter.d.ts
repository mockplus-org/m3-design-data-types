/**
 * @file 定义图片填充的滤镜参数，用于描述亮度、对比度、色温等图像调整。
 */
/**
 * 图片填充滤镜参数集合。
 */
export interface M3ImageFillFilter {
    /**
     * exposure: 曝光调整值。
     */
    exposure?: number;
    /**
     * contrast: 对比度调整值。
     */
    contrast?: number;
    /**
     * saturation: 饱和度调整值。
     */
    saturation?: number;
    /**
     * temperature: 色温调整值。
     */
    temperature?: number;
    /**
     * tint: 色调偏移值。
     */
    tint?: number;
    /**
     * highlights: 高光调整值。
     */
    highlights?: number;
    /**
     * shadows: 阴影调整值。
     */
    shadows?: number;
    /**
     * hue: 色相调整值。
     */
    hue?: number;
}
