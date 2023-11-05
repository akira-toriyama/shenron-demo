import { generation } from "https://deno.land/x/shenron/mod.ts";

await generation({
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
