# AppView
移动端适应框架


框架基于flexible https://github.com/amfe/lib-flexible

## 样式(Base)
`base.css`定义了移动网页的基本样式，包括去除`body`的`margin`等

## 字体(Font)
`font.css`定义了基本的字体样式

通过设置样式，可以简单方便的设置文字大小，并兼容移动端显示。

```html
    <p class="text-xs">10px字体，在有些浏览器有最小字体限制，可能无法正常显示.</p>
    <p class="text-s">12px字体，适用于描述性文字.</p>
    <p class="text-m">14px字体，默认字体大小.</p>
    <p class="text-l">16px字体，稍大.</p>
    <p class="text-xl">18px字体，适用于标题.</p>
    <p class="text-xxl">24px字体，适用于标题.</p>
```
## 视图(View)
