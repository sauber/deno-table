import { assertEquals, assertInstanceOf } from "@std/assert";
import { Table } from "./table.ts";

Deno.test("Blank Initialization", () => {
  const t = new Table();
  assertInstanceOf(t, Table);
});

Deno.test("Display Blank Table", () => {
  const t = new Table();
  assertEquals(t.toString(), "");
});

Deno.test("Display Title", () => {
  const t = new Table();
  t.title = "title";
  assertEquals(t.toString(), "[ title ]");
});

Deno.test("Display Headers", () => {
  const t = new Table();
  t.headers = ["a", "b"];
  assertEquals(
    t.toString(),
    "╔═══╤═══╗\n" + "║ \x1b[1ma\x1b[0m │ \x1b[1mb\x1b[0m ║\n" + "╚═══╧═══╝",
  );
});

Deno.test("Display Rows", () => {
  const t = new Table();
  t.rows = [["a", "b"]];
  assertEquals(t.toString(), "╔═══╤═══╗\n" + "║ a │ b ║\n" + "╚═══╧═══╝");
});

Deno.test("Display Headers and Rows", { ignore: true }, () => {
  const t = new Table();
  t.theme = t.roundTheme;
  t.headers = ["text", "number", "boolean"];
  t.rows = [
    ["a", 0, true],
    ["bb", 10, false],
  ];
  console.log(t.toString());
});

Deno.test("Display Object", { ignore: true }, () => {
  const t = new Table();
  class O {}
  const r = { foo: "bar" };
  t.rows = [[new O(), r]];
  console.log(t.toString());
});
