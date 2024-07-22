/**
 * A module providing rendering grid of data as table with borders
 *
 * @example
 * ```ts
 * import { Table } from "@sauber/table";
 *
 * const t = new Table();
 * t.theme = Table.roundTheme;
 * t.headers = ["text", "number", "boolean"];
 * t.rows = [
 *    ["a", 0, true],
 *    ["bb", 10, false],
 * ];
 *
 * console.log(t.toString());
 * ```
 * 
 * @returns
 * ╭──────┬────────┬─────────╮
 * │ text │ number │ boolean │
 * ├──────┼────────┼─────────┤
 * │ a    │      0 │   true  │
 * │ bb   │     10 │  false  │
 * ╰──────┴────────┴─────────╯
 *
 * @module
 */

export * from "./src/table.ts";
