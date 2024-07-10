import * as shenron from "https://deno.land/x/shenron@v2.0.0/mod.ts";

await shenron.generate({
  dir: {
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
