import { generate } from "https://deno.land/x/shenron/mod.ts";

await generate({
  path: {
    output: "./output",
    template: "./tpl/fruits",
  },
  replacements: [{
    before: "fruits",
    after: "apple",
  }, {
    before: "Fruits",
    after: "Apple",
  }],
});
