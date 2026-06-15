/**
 * @file 定义 M3 设计稿中的分区节点。
 */
import { M3NodeTrait } from "./base";
import { M3GroupTrait } from "./group";
/**
 * 设计稿分区节点。
 */
export type M3SectionNode = M3NodeTrait<"SECTION"> & M3GroupTrait;
