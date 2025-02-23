// Auto-generated with deno_bindgen
import { CachePolicy, prepare } from "https://deno.land/x/plug@0.4.1/plug.ts";
function encode(v: string | Uint8Array): Uint8Array {
  if (typeof v !== "string") return v;
  return new TextEncoder().encode(v);
}
function decode(v: Uint8Array): string {
  return new TextDecoder().decode(v);
}
function read_pointer(v: any): Uint8Array {
  const ptr = new Deno.UnsafePointerView(v as Deno.UnsafePointer);
  const lengthBe = new Uint8Array(4);
  const view = new DataView(lengthBe.buffer);
  ptr.copyInto(lengthBe, 0);
  const buf = new Uint8Array(view.getUint32(0));
  ptr.copyInto(buf, 4);
  return buf;
}
const opts = {
  name: "deno_bindgen_test",
  url: (new URL("../target/debug", import.meta.url)).toString(),
  policy: CachePolicy.NONE,
};
const _lib = await prepare(opts, {
  add: { parameters: ["i32", "i32"], result: "i32", nonblocking: false },
  add2: { parameters: ["pointer", "usize"], result: "i32", nonblocking: false },
  sleep: { parameters: ["u64"], result: "void", nonblocking: true },
  test_buf: {
    parameters: ["pointer", "usize"],
    result: "u8",
    nonblocking: false,
  },
  test_buffer_return: {
    parameters: ["pointer", "usize"],
    result: "pointer",
    nonblocking: false,
  },
  test_buffer_return_async: {
    parameters: ["pointer", "usize"],
    result: "pointer",
    nonblocking: true,
  },
  test_lifetime: {
    parameters: ["pointer", "usize"],
    result: "usize",
    nonblocking: false,
  },
  test_manual_ptr: { parameters: [], result: "pointer", nonblocking: false },
  test_manual_ptr_async: {
    parameters: [],
    result: "pointer",
    nonblocking: true,
  },
  test_mixed: {
    parameters: ["isize", "pointer", "usize"],
    result: "i32",
    nonblocking: false,
  },
  test_mixed_order: {
    parameters: ["i32", "pointer", "usize", "i32"],
    result: "i32",
    nonblocking: false,
  },
  test_mut_buf: {
    parameters: ["pointer", "usize"],
    result: "void",
    nonblocking: false,
  },
  test_output: { parameters: [], result: "pointer", nonblocking: false },
  test_output_async: { parameters: [], result: "pointer", nonblocking: true },
  test_serde: {
    parameters: ["pointer", "usize"],
    result: "u8",
    nonblocking: false,
  },
  test_str: {
    parameters: ["pointer", "usize"],
    result: "void",
    nonblocking: false,
  },
  test_tag_and_content: {
    parameters: ["pointer", "usize"],
    result: "i32",
    nonblocking: false,
  },
});
/**
 * Doc comment for `Input` struct.
 * ...testing multiline
 */
export type Input = {
  /**
   * Doc comments get
   * transformed to JS doc
   * comments.
   */
  a: number;
  b: number;
};
export type TestLifetimeEnums = {
  Text: {
    _text: string;
  };
};
export type PlainEnum =
  | {
    a: {
      _a: string;
    };
  }
  | "b"
  | "c";
export type TestLifetimes = {
  text: string;
};
export type MyStruct = {
  arr: Array<string>;
};
export type TestLifetimeWrap = {
  _a: TestLifetimeEnums;
};
export type TagAndContent =
  | { key: "A"; value: { b: number } }
  | { key: "C"; value: { d: number } };
export type OptionStruct = {
  maybe: string | undefined | null;
};
export function add(a0: number, a1: number) {
  let result = _lib.symbols.add(a0, a1) as number;
  return result;
}
export function add2(a0: Input) {
  const a0_buf = encode(JSON.stringify(a0));
  let result = _lib.symbols.add2(a0_buf, a0_buf.byteLength) as number;
  return result;
}
export function sleep(a0: number) {
  let result = _lib.symbols.sleep(a0) as Promise<null>;
  return result;
}
export function test_buf(a0: Uint8Array) {
  const a0_buf = encode(a0);
  let result = _lib.symbols.test_buf(a0_buf, a0_buf.byteLength) as number;
  return result;
}
export function test_buffer_return(a0: Uint8Array) {
  const a0_buf = encode(a0);
  let result = _lib.symbols.test_buffer_return(
    a0_buf,
    a0_buf.byteLength,
  ) as Uint8Array;
  result = read_pointer(result);
  return result;
}
export function test_buffer_return_async(a0: Uint8Array) {
  const a0_buf = encode(a0);
  let result = _lib.symbols.test_buffer_return_async(
    a0_buf,
    a0_buf.byteLength,
  ) as Promise<Uint8Array>;
  result = result.then(read_pointer);
  return result;
}
export function test_lifetime(a0: TestLifetimes) {
  const a0_buf = encode(JSON.stringify(a0));
  let result = _lib.symbols.test_lifetime(a0_buf, a0_buf.byteLength) as number;
  return result;
}
export function test_manual_ptr() {
  let result = _lib.symbols.test_manual_ptr() as Uint8Array;
  result = read_pointer(result);
  return result;
}
export function test_manual_ptr_async() {
  let result = _lib.symbols.test_manual_ptr_async() as Promise<Uint8Array>;
  result = result.then(read_pointer);
  return result;
}
export function test_mixed(a0: number, a1: Input) {
  const a1_buf = encode(JSON.stringify(a1));
  let result = _lib.symbols.test_mixed(a0, a1_buf, a1_buf.byteLength) as number;
  return result;
}
export function test_mixed_order(a0: number, a1: Input, a2: number) {
  const a1_buf = encode(JSON.stringify(a1));
  let result = _lib.symbols.test_mixed_order(
    a0,
    a1_buf,
    a1_buf.byteLength,
    a2,
  ) as number;
  return result;
}
export function test_mut_buf(a0: Uint8Array) {
  const a0_buf = encode(a0);
  let result = _lib.symbols.test_mut_buf(a0_buf, a0_buf.byteLength) as null;
  return result;
}
export function test_output() {
  let result = _lib.symbols.test_output() as Uint8Array;
  result = read_pointer(result);
  return JSON.parse(decode(result)) as Input;
}
export function test_output_async() {
  let result = _lib.symbols.test_output_async() as Promise<Uint8Array>;
  result = result.then(read_pointer);
  return result.then((r) => JSON.parse(decode(r))) as Promise<Input>;
}
export function test_serde(a0: MyStruct) {
  const a0_buf = encode(JSON.stringify(a0));
  let result = _lib.symbols.test_serde(a0_buf, a0_buf.byteLength) as number;
  return result;
}
export function test_str(a0: string) {
  const a0_buf = encode(a0);
  let result = _lib.symbols.test_str(a0_buf, a0_buf.byteLength) as null;
  return result;
}
export function test_tag_and_content(a0: TagAndContent) {
  const a0_buf = encode(JSON.stringify(a0));
  let result = _lib.symbols.test_tag_and_content(
    a0_buf,
    a0_buf.byteLength,
  ) as number;
  return result;
}
