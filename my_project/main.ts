export function add(a: number, b: number): number {
  return a + b;
}

// Learn more at https://docs.deno.com/runtime/manual/examples/module_metadata#concepts
if (import.meta.main) {
  const myNum: number = add(2, 3);
  console.log("Add 2 + 3 =", myNum);
}

console.log(Deno.args);

if (Deno.args[0] == "1") {
  console.log("Cheats Enabled");
}
