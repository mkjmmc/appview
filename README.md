# AppView
移动端适应框架


框架基于flexible https://github.com/amfe/lib-flexible

## 样式(Base)
`base.css`定义了移动网页的基本样式，包括去除`body`的`margin`等

## 字体(Font)
`font.css`定义了基本的字体样式

通过设置样式，可以简单方便的设置文字大小，并兼容移动端显示。

在iPhone4和iPhone6的Retina屏下面，我们希望看到的文本字号是相同的。也就是说，我们不希望文本在Retina屏幕下变小，
另外，我们希望在大屏手机上看到更多文本，以及，现在绝大多数的字体文件都自带一些点阵尺寸，通常是`16px`和`24px`，所以我们不希望出现`13px`和`15px`这样的奇葩尺寸。
如此一来，就决定了在制作H5的页面中，`rem`并不适合用到段落文本上。所以在Flexible整个适配方案中，考虑文本还是使用`px`作为单位。只不过使用`[data-dpr]`属性来区分不同`dpr`下的文本字号大小。

```html
<p class="text-xs">10px字体，在有些浏览器有最小字体限制，可能无法正常显示.</p>
<p class="text-s">12px字体，适用于描述性文字.</p>
<p class="text-m">14px字体，默认字体大小.</p>
<p class="text-l">16px字体，稍大.</p>
<p class="text-xl">18px字体，适用于标题.</p>
<p class="text-xxl">24px字体，适用于标题.</p>
```

我们定义了基本的字体大小`10px`,`12px`,`14px`,`16px`,`18px`,`24px`用于适配常见的网页字体，如果需要特殊的字号，可以自行添加样式如下

```css
.text-xxl {font-size:24px}
[data-dpr="2"] .text-xxl {font-size:48px}
[data-dpr="3"] .text-xxl {font-size:72px}
```

## 视图(View)
