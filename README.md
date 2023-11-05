# shenron-demo

You can check the operation of [shenron](https://github.com/bird-studio/shenron).

## Setup

```bash
brew install deno
```

## Execution

```bash
deno run --allow-run --allow-read --allow-write --allow-env --allow-sys ./generation.ts
```

## Deliverables

```bash
tree output/
```

```
output/
└── apple
    ├── Apple
    │   ├── greenApple.html
    │   └── redApple.html
    ├── apple
    │   ├── greenApple.html
    │   └── redApple.html
    ├── deliciousApple
    │   ├── greenApple.html
    │   ├── redApple.html
    │   └── sweetApple
    │       ├── greenApple.html
    │       └── redApple.html
    ├── sweetApple
    │   ├── greenApple.html
    │   └── redApple.html
    └── vegetable
        └── tomato.html
```

```bash
find ./output -name "*.html" | xargs cat
```

```
lower case
<p> This is green apple apple. </p>

upper case
<p> This is greenApple apple. </p>

lower case & upper case
<p> This is green apple greenApple apple. </p>
lower case
<p> This is red apple apple. </p>

upper case
<p> This is redApple apple. </p>

lower case & upper case
<p> This is red apple redApple apple. </p>
lower case
<p> This is green apple </p>

upper case
<p> This is greenApple </p>

lower case & upper case
<p> This is green apple </p> <p> This is greenApple </p>
lower case
<p> This is red apple </p>

upper case
<p> This is redApple </p> 

lower case & upper case
<p> This is red apple </p> <p> This is redApple </p> 
lower case
<p> This is green apple </p>

upper case
<p> This is greenApple </p>

lower case & upper case
<p> This is green apple </p> <p> This is greenApple </p>
lower case
<p> This is red apple </p>

upper case
<p> This is redApple </p>

lower case & upper case
<p> This is red apple </p> <p> This is redApple </p>
lower case
<p> This is green apple </p>

upper case
<p> This is greenApple </p>

lower case & upper case
<p> This is green apple </p> <p> This is greenApple </p>
lower case
<p> This is red apple </p>

upper case
<p> This is redApple </p>

lower case & upper case
<p> This is red apple </p> <p> This is redApple </p>
lower case
<p> This is green apple </p>

upper case
<p> This is greenApple </p>

lower case & upper case
<p> This is green apple </p> <p> This is greenApple </p>
lower case
<p> This is red apple </p>

upper case
<p> This is redApple </p>

lower case & upper case
<p> This is red apple </p> <p> This is redApple </p>
<p> This is tomato. </p>
```
