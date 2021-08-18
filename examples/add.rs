use deno_bindgen::deno_bindgen;

#[deno_bindgen]
fn add(a: i32, b: i32) -> i32 {
    a + b
}

#[deno_bindgen]
fn sub(a: i32, b: i32) -> i32 {
    a - b
}

#[deno_bindgen]
fn mul(a: i32, b: i32) -> i32 {
    a * b
}
