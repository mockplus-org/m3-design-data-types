/**
 * @file 聚合所有 M3 节点类型，并提供节点联合类型供遍历和类型收窄使用。
 */
import { M3MasterNode, M3StateFrameNode } from "./component";
import { M3ConnectorNode } from "./connector";
import { M3CanvasNode, M3DocumentNode } from "./doc";
import { M3DatePickerNode, M3InputNode, M3NumberInputNode, M3SliderNode, M3TextareaNode } from "./form";
import { M3DynamicPanelNode, M3FrameNode, M3TemplateFrameNode } from "./frame";
import { M3GroupNode, M3ShapeGroupNode } from "./group";
import { M3InstanceNode, M3RepeatInstanceNode, M3SymbolInstanceNode } from "./instance";
import { M3ListNode } from "./list";
import { M3AudioNode, M3ImageNode, M3VideoNode } from "./media";
import { M3DropdownNode, M3HorizontalMenuNode, M3NavigationMenuNode } from "./menu";
import { M3SectionNode } from "./section";
import { M3EllipseNode, M3LineNode, M3PathNode, M3PolygonNode, M3RectangleNode, M3StarNode, M3TriangleNode } from "./shape";
import { M3TableNode } from "./table";
import { M3TextNode } from "./text";
import { M3TreeNode } from "./tree";
/**
 * 文档画布下可作为子节点出现的所有节点联合类型。
 */
export type M3SubNode = M3SectionNode | M3FrameNode | M3GroupNode | M3ShapeGroupNode | M3RectangleNode | M3EllipseNode | M3TriangleNode | M3PolygonNode | M3StarNode | M3LineNode | M3PathNode | M3ConnectorNode | M3TextNode | M3ImageNode | M3VideoNode | M3AudioNode | M3MasterNode | M3StateFrameNode | M3DynamicPanelNode | M3TemplateFrameNode | M3InstanceNode | M3SymbolInstanceNode | M3RepeatInstanceNode | M3InputNode | M3TextareaNode | M3NumberInputNode | M3SliderNode | M3DatePickerNode | M3TableNode | M3ListNode | M3TreeNode | M3HorizontalMenuNode | M3NavigationMenuNode | M3DropdownNode;
/**
 * 任意 M3 节点联合类型，包括文档、画布和子节点。
 */
export type M3Node = M3DocumentNode | M3CanvasNode | M3SubNode;
export * from "./base";
export * from "./component";
export * from "./connector";
export * from "./doc";
export * from "./form";
export * from "./frame";
export * from "./group";
export * from "./instance";
export * from "./list";
export * from "./media";
export * from "./menu";
export * from "./section";
export * from "./shape";
export * from "./table";
export * from "./text";
export * from "./tree";
