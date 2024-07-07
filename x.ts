// deno run --allow-sys --allow-env --allow-read --allow-run --allow-write x.ts
import * as zx from 'npm:zx'

const o = {
    outputDir: './myFruits',
    tplDir: './tpl/fruits',
    replacements: [{
      before: 'Fruits',
      after: 'Apple',
    },{
        before: 'fruits',
        after: 'apple',
    }]
} as const

const dir = {
    work: zx.tmpdir(),
    current: Deno.cwd()
} as const

// 元ネタを作業ディレクトリへコピー
zx.$.sync`cp -r ${o.tplDir} ${dir.work}`

// 作業ディレクトリへ移動
zx.cd(dir.work)

// ディレクトリ, ファイル名を置換
// o.replacements.forEach(v => zx.$.sync`f2 -f '${v.before}' -r '${v.after}' --recursive --include-dir --exec`)

// ファイルの中身を置換
// o.replacements.forEach(v => zx.$.sync`find ./ -type f | LC_ALL=C xargs sed -i "" "s/${v.before}/${v.after}/g"`)

// 完成品をコピー
zx.$.sync`mkdir -p ${dir.current}/${o.outputDir}`
zx.$.sync`cp -r . ${dir.current}/${o.outputDir}`
