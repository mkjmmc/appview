# AppView
这是一个基础的移动端适应的样式框架，可以用来快速，简单的搭建移动端H5网页。
框架基于淘宝的移动端解决方案[flexible](https://github.com/amfe/lib-flexible)。
实现了跨移动端的浏览器自适应框架。

框架主要分为3块，定义了基本移动端网页样式

* [首页](http://appview.htmlid.cn/)
* [文档](http://appview.htmlid.cn/)
* [Demo](http://appview.htmlid.cn/demo/)

## 相关资料
flexible: https://github.com/amfe/lib-flexible

相关文章请参考[此处](https://github.com/amfe/article/issues/17)

## 样式(Base)
基本样式库`base.css`定义了移动网页的基本样式，包括去除`body`的`margin`等

样式包括：

* 图片自适应
* 图片圆角
* 图片圆形
* 文本对齐
* 字符串截取
* 大小写
* 情境文本颜色
* 情境背景颜色
* padding 规范 
* margin 规范
* 元素居中
* 左右浮动
* 显示和隐藏
* 清除浮动

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
视图`view.css`是基于基本样式的扩展，定义了部分移动端常用控件，只需要简单的html结构就可以实现原生控件效果，
基本控件包括：

* 列表
* TabBar
* TitleBar
* TableView

## 最新版本
1.0.0

## 依赖库
基于淘宝移动端解决方案flexible，github地址：
https://github.com/amfe/lib-flexible

完整引用举例
    <script src="http://g.tbcdn.cn/mtb/lib-flexible/{{version}}/??flexible.js"></script>
  
## 使用方法
建议对于js做`内联处理`，在所有资源加载之前执行这个js。

执行这个js后，会在`html`（也就是document.documentElement）上增加一个`data-dpr`属性，以及`font-size`样式。

之后页面中的元素，都可以用`rem`单位来设置。`html`上的`font-size`就是rem的基准像素。

## 把视觉稿中的px转换成rem

首先，目前视觉稿大小分为`640`，`750`以及，`1125`这三种。

当前方案会把这3类视觉稿分成`100`份来看待（为了以后兼容vh，vw单位）。每一份被称为一个单位a。同时，1rem单位认定为10a。拿750的视觉稿举例：

    1a = 7.5px
    1rem = 75px
因此，对于视觉稿上的元素的尺寸换算，只需要`原始px值`除以`rem基准px值`即可。例如240px * 120px的元素，最后转换为3.2rem * 1.6rem。





