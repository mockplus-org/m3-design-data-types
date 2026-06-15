/**
 * @file 定义输入框、文本域、数字输入、滑块和日期选择器等表单节点。
 */
import { M3Color, M3TextStyle } from "../common";
import { M3NodeTrait } from "./base";
/**
 * 输入类表单节点共享的内容、占位符、颜色和内边距字段。
 */
export type M3InputTrait = {
    /**
     * inputText: 输入控件当前文本值。
     */
    inputText?: string;
    /**
     * placeholder: 输入或下拉控件的占位文本。
     */
    placeholder?: string;
    /**
     * inputReadonly: 输入控件是否只读。
     */
    inputReadonly?: boolean;
    /**
     * inputTextColor: 输入文本颜色。
     */
    inputTextColor?: M3Color;
    /**
     * placeholderColor: 占位文本颜色。
     */
    placeholderColor?: M3Color;
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
};
/**
 * 单行输入框节点。
 */
export type M3InputNode = M3NodeTrait<"INPUT"> & M3TextStyle & M3InputTrait & {
    /**
     * inputType: 输入框类型。
     */
    inputType?: "TEXT" | "NUMBER" | "PASSWORD";
};
/**
 * 多行文本输入节点。
 */
export type M3TextareaNode = M3NodeTrait<"INPUT"> & M3TextStyle & M3InputTrait;
/**
 * 数字输入框节点。
 */
export type M3NumberInputNode = M3NodeTrait<"NUMBER_INPUT"> & M3TextStyle & M3InputTrait & {
    /**
     * maxDecimalDigits: 数字输入允许的最大小数位数。
     */
    maxDecimalDigits?: number;
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
};
/**
 * 滑块节点。
 */
export type M3SliderNode = M3NodeTrait<"SLIDER"> & {
    /**
     * sliderProgress: 滑块当前进度。
     */
    sliderProgress?: number;
    /**
     * sliderColor: 滑块轨道颜色。
     */
    sliderColor?: M3Color;
    /**
     * progressColor: 滑块已完成进度颜色。
     */
    progressColor?: M3Color;
};
/**
 * 日期/时间选择器节点。
 */
export type M3DatePickerNode = M3NodeTrait<"DATE_PICKER"> & M3TextStyle & {
    /**
     * datePickerValue: 日期选择器起始值或单值。
     */
    datePickerValue?: number | bigint;
    /**
     * datePickerValueEnd: 日期范围选择器结束值。
     */
    datePickerValueEnd?: number | bigint;
    /**
     * datePickerType: 日期选择器类型。
     */
    datePickerType?: "DATE" | "DATE_RANGE" | "TIME" | "TIME_RANGE" | "DATE_TIME" | "DATE_TIME_RANGE";
    /**
     * datePickerFormat: 日期显示格式。
     */
    datePickerFormat?: "HYPHENATED_DATE" | "SLASHED_DATE" | "CHINESE_DATE" | "TIME_WITH_SECONDS" | "TIME_WITHOUT_SECONDS" | "HYPHENATED_DATE_TIME_WITHOUT_SECONDS" | "HYPHENATED_DATE_TIME_WITH_SECONDS" | "SLASHED_DATE_TIME_WITHOUT_SECONDS" | "SLASHED_DATE_TIME_WITH_SECONDS" | "CHINESE_DATE_TIME_WITHOUT_SECONDS" | "CHINESE_DATE_TIME_WITH_SECONDS";
    /**
     * datePickerStyle: 日期选择器视觉/交互风格。
     */
    datePickerStyle?: "WEB" | "MOBILE";
    /**
     * datePickerShowYear: 是否显示年份。
     */
    datePickerShowYear?: boolean;
    /**
     * datePickerShowMask: 是否显示日期选择遮罩。
     */
    datePickerShowMask?: boolean;
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
};
