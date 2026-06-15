/**
 * @file 定义 M3 连接线节点及其与其他图层的连接关系。
 */
import type { M3NodeId, M3Point } from "../common";
import { M3ArrowMarker } from "../enums";
import { M3PathTrait } from "./shape";
/**
 * 连接线与被连接图层之间的锚点关系。
 */
export interface M3LayerConnectorInfo {
    /**
     * ids: 相关节点 ID 列表。
     */
    ids?: M3NodeId[];
    /**
     * viewBoxOffset: 连接关系相对视口的偏移。
     */
    viewBoxOffset?: M3Point;
    /**
     * relation: 连接点在连接线中的关系。
     */
    relation?: "NONE" | "START" | "END" | "SEGMENT" | "SEGMENT_MID";
    /**
     * connectType: 连接线连接到图层的方式。
     */
    connectType?: "LAYER_SELECT_BOX" | "LAYER_SELECT_BOX_ANCHOR" | "LAYER_SELECT_BOX_CENTER_ANCHOR" | "LAYER_CONTENT_BOX" | "LAYER_CONTENT_BOX_ANCHOR" | "LAYER_CONTENT_AREA" | "CUSTOM_ANCHOR";
}
/**
 * 连接线节点。
 */
export type M3ConnectorNode = M3PathTrait<"CONNECTOR"> & {
    /**
     * connectorType: 连接线形态。
     */
    connectorType?: "NONE" | "LINE" | "CURVE" | "POLYLINE" | "ROUND_POLYLINE";
    /**
     * textDirection: 文本方向。
     */
    textDirection?: "HORIZONTAL" | "VERTICAL" | "FOLLOW";
    /**
     * crossLineStyle: 交叉线样式是否启用。
     */
    crossLineStyle?: boolean;
    /**
     * modifiedConnector: 连接线是否被用户修改过。
     */
    modifiedConnector?: boolean;
    /**
     * beginArrowMarker: 线段起点箭头或标记。
     */
    beginArrowMarker?: M3ArrowMarker;
    /**
     * endArrowMarker: 线段终点箭头或标记。
     */
    endArrowMarker?: M3ArrowMarker;
    /**
     * strokeLineType: 描边线型。
     */
    strokeLineType?: "SOLID" | "DASH" | "CUSTOM";
    /**
     * connectStartLayerIds: 连接线起点连接的图层 ID 列表。
     */
    connectStartLayerIds?: M3NodeId[];
    /**
     * connectEndLayerIds: 连接线终点连接的图层 ID 列表。
     */
    connectEndLayerIds?: M3NodeId[];
    /**
     * connectors: 连接线的锚点关系列表。
     */
    connectors?: M3LayerConnectorInfo[];
};
