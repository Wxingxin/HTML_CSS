# 块级标签

### 1. 结构化元素这些元素用于定义页面或文档的主要结构和区域

`<address>`: 定义文档或文章作者/所有者的联系信息。

`<article>`: 定义独立的、可独立分发的内容，如博客文章、论坛帖子或新闻报道。

`<aside>`: 定义与页面内容相关但可以独立于内容的内容（例如，侧边栏、广告或补充信息）。

`<body>`: 定义 HTML 文档的主体内容。

`<blockquote>`: 定义长引用块。

`<div>`: 通用的块级容器，用于对其他 HTML 元素进行分组。它没有特定的语义，主要用于布局和样式。

`<details>`: 定义额外的细节，用户可以按需查看或隐藏。

`<figcaption>`: 定义 `<figure>` 元素的标题。

`<figure>`: 定义独立的流内容（例如，图像、图表、代码清单等），通常带有一个标题。

`<footer>`: 定义文档或某个部分的页脚。

`<header>`: 定义文档或某个部分的页眉。

`<hgroup>`: 用于将一组标题元素（`<h1>` 到
`<h6>`）组合在一起，通常与一个子标题或标语一起使用。

`<main>`: 定义文档的主体内容，在每个文档中应该只有一个 `<main>` 元素。

`<nav>`: 定义导航链接（例如，菜单、目录或索引）。

`<section>`: 定义文档中的一个独立部分，通常有一个标题。

`<table>`: 定义表格。

### 2. 标题元素 这些元素用于定义不同级别的标题，最重要的 <h1> 到最不重要的 <h6>

`<h1>`
`<h2>`
`<h3>`
`<h4>`
`<h5>`
`<h6>`

### 3. 文本内容标签用于组织和格式化文本：

`<p>`：段落。

`<div>`：通用块级容器，用于分组元素。

`<pre>`：预格式化文本（保留空格和换行符）。

`<blockquote>`：长引用内容。

`<address>`：文档作者或联系信息。

`<hr>`：水平线，用于分隔内容。

`<br>`：换行符（虽然是内联元素，但功能上常作为块级使用）。

### 4. 列表标签

`<ul>`：无序列表（项目符号）。

`<ol>`：有序列表（数字或字母）。

`<li>`：列表项（必须嵌套在 `<ul>` 或 `<ol>` 中）。

`<dl>`：定义列表（术语和描述）。

`<dt>`：定义术语（在 `<dl>`中使用）。

`<dd>`：术语的定义（在 `<dl>` 中使用）。

### 5. 表格标签用于展示表格数据：

`<table>`：表格容器。

`<thead>`：表格头部（包含列标题）。

`<tbody>`：表格主体（包含数据行）。

`<tfoot>`：表格底部（包含汇总信息）。

`<tr>`：表格行。

`<th>`：表格标题单元格。

`<td>`：表格数据单元格。

`<caption>`：表格标题（位于表格上方）。

`<colgroup>`：表格列组。

`<col>`：表格列（用于定义列属性）。

### 5. 表单元素 (Form Elements)这些元素与表单相关。

`<form>`: 定义 HTML 表单，用于用户输入。

`<fieldset>`: 用于将表单中的相关元素分组。

`<legend>`: 定义 `<fieldset>` 元素的标题。

`<noscript>`: 定义当浏览器不支持脚本或禁用脚本时显示的内容。

`<datalist>`：预定义选项列表（与 `<input>` 配合使用）

### 7. 其他块级标签

`<noscript>`：当浏览器不支持脚本时显示的内容。

`<canvas>`：用于绘制图形的区域（默认是块级，但可通过 CSS 修改）。

`<svg>`：可缩放矢量图形（默认是块级，但可通过 CSS 修改）。

`<video>`：视频播放器。

`<audio>`：音频播放器。

`<iframe>`：内联框架（嵌入其他网页）。

# 行内级标签

### 1. 文本格式化标签用于改变文本的外观或语义：

`<a>`：超链接。

`<strong>`：重要文本（通常显示为粗体）。

`<em>`：强调文本（通常显示为斜体）。

`<u>`：下划线文本。

`<s>`：删除线文本。

`<del>`：已删除的文本。

`<ins>`：插入的文本。

`<mark>`：标记 / 高亮的文本。

`<small>`：次要文本（如细则）。

`<sup>`：上标文本。

`<sub>`：下标文本。

`<b>`：粗体文本（无特殊语义）。

`<i>`：斜体文本（无特殊语义）。

`<u>`：下划线文本（无特殊语义）。

### 2. 文本结构标签用于组织和标记文本的结构：`

`<span>`：通用行内容器，用于样式化文本。

`<br>`：换行符。

`<address>`：联系信息（虽然块级更常见，但也可用于行内）

不经常使用`<wbr>`：可选换行点（允许文本在特定位置换行）。
`<code>`：代码片段。
`<kbd>`：键盘输入。
`<samp>`：程序输出示例。
`<var>`：变量。
`<abbr>`：缩写或首字母缩写。

### 3. 引用标签用于短引用或术语定义：

不经常使用
`<q>`：短引用（浏览器通常会自动添加引号）。
`<dfn>`：定义术语。

### 4. 图像和媒体标签用于嵌入媒体内容：

`<img>`：图像。

`<object>`：嵌入外部资源（如 Flash、PDF）。

`<video>`：视频（默认块级，但可通过 CSS 设置为行内）。

`<audio>`：音频（默认块级，但可通过 CSS 设置为行内）。

`<source>`：为 `<video>` 或 `<audio>` 提供多个资源选项。

不经常使用`<area>`：图像映射中的可点击区域。
`<embed>`：嵌入外部内容（如插件）。
`<param>`：为 `<object>` 或 `<applet>` 定义参数。
`<map>`：图像映射（与 `<area>` 配合使用）。

### 5. 表单元素用于创建交互式表单控件：

`<input>`：输入字段（文本框、复选框、按钮等）。

`<select>`：下拉选择框。

`<option>`：下拉选择框中的选项。

`<optgroup>`：选项组（对 <option> 进行分组）。

`<textarea>`：多行文本输入框。

`<label>`：表单控件的标签。

`<button>`：按钮。

`<output>`：计算结果显示。

`<progress>`：进度条。

`<meter>`：刻度值显示（如磁盘空间使用率）。

### 6. 脚本和元数据标签用于脚本、样式和元数据：

`<script>`：JavaScript 代码或引用。

`<style>`：内联 CSS 样式（通常放在 `<head>` 中，但技术上是行内元素）。

`<link>`：外部资源链接（如 CSS 文件，默认是行内元素）。

`<meta>`：文档元数据（通常放在 `<head>` 中）。

`<base>`：文档中所有相对 URL 的基础 URL。

### 7.其他行内标签

不经常使用<data>：机器可读形式的数据（与人类可读文本一起使用）。
<time>：日期或时间值。
<ruby>：ruby 注释（用于东亚文字注音）。
<rt>：ruby 注释文本。
<rp>：ruby 注释的括号（在不支持 ruby 的浏览器中显示）。
<bdi>：双向隔离（隔离可能包含不同文本方向的文本）。
<bdo>：双向覆盖（强制文本方向）。
<wbr>：可选换行符（允许文本在特定位置换行）。

# title link meta ：

## title

```html
<head>
  <title>Document</title>
</head>
```

## link

### **1. 引入 CSS 样式表**

这是  `<link>`  标签最核心的用途，通过  `rel="stylesheet"`  引入外部 CSS 文件：

```html
<link rel="stylesheet" href="styles.css" />
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
/>
```

- **特性**：

  - 会阻塞页面渲染，建议放在  `<head>`  中尽早加载

  - 支持  `media`  属性适配不同设备：

    ```html
    <link
      rel="stylesheet"
      href="mobile.css"
      media="screen and (max-width: 600px)"
    />
    ```

### **2. 网站图标（Favicon）**

通过  `rel="icon"`  指定网站在浏览器标签页显示的图标：

```html
<link rel="icon" href="favicon.ico" />
<link rel="icon" type="image/png" href="favicon-32x32.png" sizes="32x32" />
```

- **常见图标尺寸**：16x16、32x32、48x48、512x512

- **多设备适配**：

  ```html
  <link rel="apple-touch-icon" href="apple-touch-icon.png" />
  <!-- iOS 设备 -->
  <link rel="manifest" href="site.webmanifest" />
  <!-- PWA 应用清单 -->
  ```

### **3. 预加载资源**

使用  `rel="preload"`  提前加载关键资源（如字体、JS 文件）：

```html
<link rel="preload" href="font.woff2" as="font" crossorigin />
<link rel="preload" href="main.js" as="script" />
```

- **性能优化**：减少资源加载延迟，提升首屏渲染速度

### **4. 预连接与预取**

- **预连接**（Preconnect）：提前建立网络连接

  ```html
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  ```

- **预取**（Prefetch）：提前下载未来可能用到的资源

  ```html
  <link rel="prefetch" href="next-page.html" />
  ```

### **5. 引入外部字体**

以 Google Fonts 为例：

```html
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap"
/>
```

## meta

### 1. 字符编码声明指定页面使用的字符编码，确保文本正确显示：

```html
<meta charset="UTF-8" />
```

### 2. 页面描述提供页面内容的简短描述，影响搜索引擎结果的显示：

```html
<meta name="description" content="这是一个示例网站，提供编程教程和技术文章。" />
```

### 3. 关键词（对 SEO 影响较小，但仍可使用）

```html
<meta name="keywords" content="HTML, CSS, JavaScript, 编程, 教程" />
```

### 4. 作者信息

```html
<meta name="author" content="Doubao" />
```

### 5. 页面刷新 / 重定向

###### 自动刷新当前页面：

```html
<meta http-equiv="refresh" content="30" />
```

<!-- 每30秒刷新一次 -->

###### 延迟后重定向到另一个页面：

```html
<meta http-equiv="refresh" content="5;url=https://www.baidu.com" />
```

<!-- 5秒后跳转 -->

### 6. 缓存控制控制浏览器如何缓存页面：

```html
<meta
  http-equiv="cache-control"
  content="no-cache, no-store, must-revalidate"
/>
```

```html
<meta http-equiv="pragma" content="no-cache" />
```

```html
html<meta http-equiv="expires" content="0" />
```

### 7. 移动端适配优化页面在移动设备上的显示：

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

width=device-width：页面宽度等于设备屏幕宽度。
initial-scale=1.0：初始缩放比例为 1:1。

## 8. 防止 XSS 攻击

```html
<meta http-equiv="Content-Security-Policy" content="default-src 'self'" />
```

# 常用非标签操作

### **1. 占位文本生成（Lorem Ipsum）**

- **用途**：在设计阶段生成临时文本，测试排版和布局。

- **示例**：

  lorem18

- **快捷键**：在 VS Code 中输入  `lorem`  后按  `Tab`，可自动生成随机文本。

### **2. 注释（Comments）**

- **用途**：添加代码说明，帮助团队协作或未来维护。

- **语法**：

  ```html
  <!-- 这是一个 HTML 注释 -->
  ```

### **3. 实体编码（HTML Entities）**

- **用途**：显示 HTML 特殊字符（如  `<`, `>`, `&`, 空格等）。

- **常见实体**：

  | 字符   | 实体编码 | 示例                    |
  | ------ | -------- | ----------------------- |
  | `<`    | `&lt;`   | `&lt;div&gt;`           |
  | `>`    | `&gt;`   | `&gt;/div&lt;`          |
  | `&`    | `&amp;`  | `example&amp;test`      |
  | `"`    | `&quot;` | `title=&quot;...&quot;` |
  | `©`    | `&copy;` | `&copy; 2023`           |
  | `®`    | `&reg;`  | `产品名称&reg;`         |
  | `空格` | `&nbsp;` | `Hello&nbsp;World`      |

### **4. 相对路径与绝对路径**

- **用途**：引用外部资源（如图片、CSS、JavaScript）。

- **示例**：

  ```html
  <!-- 相对路径 -->
  <img src="images/logo.png" />
  <!-- 当前目录下的 images 文件夹 -->
  <script src="../script.js"></script>
  <!-- 上级目录的 script.js -->

  <!-- 绝对路径 -->
  <link href="https://cdn.example.com/style.css" rel="stylesheet" />
  ```

### **5. ID 和 Class 选择器**

- **用途**：为元素添加标识符，用于 CSS 样式或 JavaScript 交互。

- **示例**：

  ```html
  <div id="header" class="main-header">
    <h1 class="title">标题</h1>
  </div>
  ```

### **6. 条件注释（针对 IE 浏览器）**

- **用途**：为特定版本的 Internet Explorer 提供特定代码。

- **示例**：

  ```html
  <!--[if IE 8]>
    <script src="ie8-polyfill.js"></script>
  <![endif]-->
  ```

### **7. 表单验证属性**

- **用途**：在不使用 JavaScript 的情况下验证表单输入。

- **示例**：

  ```html
  <input type="email" required placeholder="邮箱地址" />
  <input type="number" min="1" max="100" />
  <input pattern="[A-Za-z]{3}" title="必须输入3个字母" />
  ```

### **8. 数据属性（Data Attributes）**

- **用途**：在 HTML 元素中存储自定义数据，供 JavaScript 使用。

- **示例**：

  ```html
  <button data-id="123" data-action="delete">删除</button>
  ```

  ```js
  const button = document.querySelector("button");
  console.log(button.dataset.id); // 输出: 123
  ```

### **9. 内联样式（Inline Styles）**

- **用途**：直接在元素上应用 CSS 样式。

- **示例**：

  ```html
  <div style="color: red; font-size: 16px;">文本</div>
  ```

### **10. 表单元素的  `for`  和  `id`  关联**

- **用途**：点击标签时聚焦到对应的表单控件。

- **示例**：

  ```html
  <label for="username">用户名:</label>
  <input type="text" id="username" name="username" />
  ```

### **11. 转义字符**

- **用途**：在 JavaScript 或 CSS 中使用特殊字符。

- **示例**：

  ```js
  <script>const message = 'He said: "Hello!"'; // 使用双引号需要转义</script>
  ```

# a 标签

### `<a>` 标签的基本语法

`<a>` 标签是一个**行内元素**（inline element），它需要一个 `href` 属性来指定链接的目标。

```html
<a href="目标 URL 或路径" 属性1="值1" 属性2="值2" ...>链接文本或内容</a>
```

- **`href` 属性**：必需属性，指定链接的目标 URL (Uniform Resource Locator)。这是点击链接后浏览器将导航到的地址。
- **链接文本或内容**：这是用户在页面上实际看到和点击的部分。它可以是纯文本、图像，甚至是其他行内元素或符合内容模型要求的块级元素（在 HTML5 中，`<a>` 的内容模型放宽，可以包含块级元素，只要 `<a>` 本身是作为流式内容而不是短语内容来使用，例如 `<div>` 中包裹 `<a>`，而 `<a>` 又包裹其他块级内容。但在实际开发中，如果 `<a>` 内部有复杂块级内容，通常建议用 CSS 和 JavaScript 来实现点击区域，而不是直接用 `<a>` 包含复杂块级结构）。

---

### `<a>` 标签的核心使用方法

#### 1. 链接到外部网页（Absolute URL / 绝对 URL）

这是最常见的用法，链接到当前网站之外的任何页面。

```html
<a href="https://www.google.com">访问 Google</a>
<a href="https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/a"
  >MDN 的 a 标签文档</a
>
```

#### 2. 链接到内部网页（Relative URL / 相对 URL）

链接到当前网站内部的其他页面。路径可以是相对的，取决于当前 HTML 文件相对于目标文件的位置。

- **同一目录**：
  ```html
  <a href="about.html">关于我们</a>
  ```
- **子目录**：
  ```html
  <a href="pages/contact.html">联系我们</a>
  ```
- **父目录**：
  ```html
  <a href="../index.html">返回首页</a>
  ```
- **网站根目录（以 `/` 开头）**：
  ```html
  <a href="/images/logo.png">网站 Logo</a>
  ```

#### 3. 在新标签页/窗口中打开链接 (`target` 属性)

使用 `target` 属性来指定链接打开的目标上下文。

- **`target="_blank"`**：在新标签页或新窗口中打开链接。
  ```html
  <a href="https://www.example.com" target="_blank">在新标签页打开示例网站</a>
  ```
  **最佳实践**：当使用 `target="_blank"` 时，为了安全考虑（防止钓鱼攻击和性能问题），强烈建议同时添加 `rel="noopener noreferrer"` 属性。
  ```html
  <a href="https://www.example.com" target="_blank" rel="noopener noreferrer"
    >在新标签页打开示例网站 (安全)</a
  >
  ```
- **`target="_self"`**：在当前框架集中加载被链接文档。这是默认值，通常不需要显式设置。
  ```html
  <a href="another-page.html" target="_self">在当前窗口打开</a>
  ```
- **`target="_parent"`**：在父框架集中加载被链接文档（如果当前文档在框架中）。
- **`target="_top"`**：在整个窗口中加载被链接文档（清除所有框架）。
- **`target="framename"`**：在指定名称的 `<frame>` 或 `<iframe>` 中打开链接。

#### 4. 链接到页面内的特定位置（锚点链接 `id` 属性）

用于在长页面中快速跳转到特定部分，或从其他页面直接跳转到某个页面的特定部分。

**步骤：**

1.  在目标位置的 HTML 元素上添加一个**唯一的 `id` 属性**。
2.  在 `<a>` 标签的 `href` 属性中使用 `#` 加上该 `id` 值。

```html
<a href="#section-introduction">跳转到引言</a>
<a href="#conclusion">跳转到结论</a>

<h2 id="section-introduction">1. 引言</h2>
<p>这是引言部分的内容。</p>

<h2 id="conclusion">5. 结论</h2>
<p>这是结论部分的内容。</p>

<a href="articles.html#chapter-1">查看文章第一章</a>
```

#### 5. 触发邮件发送 (`mailto:`)

点击链接会打开用户的默认邮件客户端，并预填充收件人地址。

```html
<a href="mailto:your_email@example.com">发送邮件给我</a>
<a href="mailto:support@example.com?subject=网站咨询&body=您好，我想咨询关于..."
  >联系客服</a
>
<a href="mailto:person1@example.com,person2@example.com">发送给多人</a>
```

- `?subject=...`：用于预填充邮件主题。
- `&body=...`：用于预填充邮件正文。
- **注意**：主题和正文中的特殊字符需要进行 URL 编码（例如，空格变成 `%20`）。

#### 6. 触发电话拨打 (`tel:`)

在支持电话功能的设备（如智能手机）上，点击链接会提示用户拨打电话。

```html
<a href="tel:+1234567890">拨打电话：+1 234 567 890</a>
<a href="tel:010-88889999p123">拨打公司电话（转分机123）</a>
```

- `tel:` 协议用于指定电话号码。
- `p` 表示暂停，`w` 表示等待用户输入。

#### 7. 下载文件 (`download` 属性)

当 `href` 属性指向一个文件时，`download` 属性可以强制浏览器下载文件，而不是在浏览器中打开或预览。

```html
<a href="/documents/report.pdf" download>下载 PDF 报告</a>
<a href="/images/original.jpg" download="我的假期照片.jpg">下载高分辨率照片</a>
```

- `download` 属性是一个 HTML5 新增属性。如果省略值，则使用原始文件名。如果提供值，浏览器会建议使用该值作为文件名。

#### 8. 链接中包含图片或其他行内元素

可以将 `<img>` 标签或其他行内元素（如 `<span>`、`<em>` 等）放在 `<a>` 标签内部，使这些元素成为可点击的链接区域。

```html
<a href="https://www.example.com">
  <img src="logo.png" alt="网站 Logo" style="width:150px; height:auto;" />
  <p>点击图片访问我们的网站</p>
</a>
```

### `<a>` 标签的其他重要属性

- **`title` 属性**：
  提供关于链接的额外信息。当用户将鼠标悬停在链接上时，通常会显示为一个工具提示。这对可访问性和用户体验很有帮助。

  ```html
  <a href="https://www.w3.org/" title="访问万维网联盟官网，了解Web标准">W3C</a>
  ```

- **`rel` 属性**：
  指定当前文档与被链接文档之间的关系。对于 SEO（搜索引擎优化）和安全性非常重要。

  - **`rel="nofollow"`**：告诉搜索引擎不要将此链接计入排名或传递权重。常用于用户生成内容（如评论）、论坛帖子或广告链接，以防止垃圾链接和操纵搜索引擎排名。
  - **`rel="noopener"`**：防止新打开的页面访问原始页面的 `window.opener` 对象。这是安全最佳实践，防止新页面进行恶意的 `window.opener.location = ...` 攻击。
  - **`rel="noreferrer"`**：阻止浏览器将 `Referer` 头发送到新打开的页面，这意味着新页面不知道用户是从哪里来的。
  - **推荐组合**：`target="_blank"` 和 `rel="noopener noreferrer"` 一起使用，以同时解决安全和隐私问题。
    ```html
    <a href="https://external.com" target="_blank" rel="noopener noreferrer"
      >外部链接</a
    >
    ```
  - **`rel="external"`**：表示链接指向外部文档。
  - **`rel="sponsored"`**：Google 推荐用于标识付费广告、赞助商或任何其他包含报酬的链接。
  - **`rel="ugc"` (User Generated Content)**：Google 推荐用于标识用户生成内容的链接，如评论、论坛帖子。
  - **`rel="prev"` / `rel="next"`**：用于指示分页文档中的上一页/下一页。
  - **`rel="icon"` / `rel="shortcut icon"`**：用于定义网站图标（favicon），但这些通常用在 `<link>` 标签中，而不是 `<a>` 标签。

- **`type` 属性（不常用）**：
  指定链接内容的 MIME 类型。通常不用于 `<a>` 标签，更多用于 `<link>` 或 `<script>`。

  ```html
  <a href="document.pdf" type="application/pdf">查看 PDF</a>
  ```

- **`hreflang` 属性**：
  指示被链接文档的语言。用于搜索引擎和某些浏览器在选择特定语言版本的文档时。

  ```html
  <a href="index.html" hreflang="en">English Version</a>
  <a href="index.html" hreflang="zh">中文版本</a>
  ```

- **`media` 属性（不常用）**：
  指定链接的目标媒体/设备。例如，可以指定链接在打印时显示。通常用于 `<link>` 标签。
  ```html
  <a href="print-version.html" media="print">打印友好版本</a>
  ```

### 可访问性（Accessibility）注意事项

- **有意义的链接文本**：避免使用“点击这里”、“更多”等通用文本。链接文本应该清晰地描述链接的目的地或内容。
  - **差**：`请<a href="page.html">点击这里</a>阅读更多。`
  - **好**：`阅读更多关于<a href="page.html">我们公司历史</a>的信息。`
- **`alt` 属性（用于图片链接）**：如果 `<a>` 标签内包含 `<img>` 标签，确保 `<img>` 标签有有意义的 `alt` 属性，以便屏幕阅读器能描述图片内容。
- **`title` 属性的补充作用**：`title` 可以提供额外上下文，但不要依赖它来传达关键信息，因为并非所有用户都能访问到它（例如触摸屏用户）。关键信息应在链接文本本身或周围的段落中体现。

# input

在 HTML 中，**表单（Forms）** 是与用户进行交互的关键部分。它们允许用户输入数据（如文本、选择项、文件等），然后将这些数据提交到服务器进行处理。HTML 表单由一个 `<form>` 标签以及各种**表单控件（Form Controls）** 组成。

### 1. `<form>` 标签：表单容器

`<form>` 标签定义了 HTML 表单的开始和结束，它包裹了所有表单相关的输入控件。

**常用属性：**

- **`action`** (必需)：指定当表单提交时，数据将被发送到哪个 URL。这个 URL 通常是一个服务器端的脚本（如 PHP、Python、Node.js 等），负责接收和处理数据。
  ```html
  <form action="/submit_data.php"></form>
  ```
- **`method`**：指定提交表单数据时使用的 HTTP 方法。
  - **`GET`** (默认值)：表单数据会以 URL 参数的形式附加到 `action` URL 后面。数据会显示在 URL 中，因此不适合敏感信息，且有 URL 长度限制。常用于搜索、筛选等操作。
    ```html
    <form action="/search" method="GET">
      <input type="text" name="query" />
      <button type="submit">搜索</button>
    </form>
    ```
  - **`POST`**：表单数据会作为 HTTP 请求体的一部分发送。数据不会显示在 URL 中，没有长度限制，更安全，适合提交敏感信息或大量数据（如注册、登录、文件上传）。
    ```html
    <form action="/register" method="POST"></form>
    ```
- **`enctype`**：当 `method="POST"` 时，指定表单数据的编码类型。
  - **`application/x-www-form-urlencoded`** (默认值)：所有字符在发送前进行编码（空格转换为 `+`，特殊字符转换为十六进制 ASCII 值）。
  - **`multipart/form-data`**：用于文件上传。当表单包含 `<input type="file">` 时，必须使用此编码类型。
  - **`text/plain`**：不常用，将空格转换为 `+`，但不对特殊字符编码。主要用于调试。
    ```html
    <form action="/upload" method="POST" enctype="multipart/form-data">
      <input type="file" name="myFile" />
      <button type="submit">上传文件</button>
    </form>
    ```
- **`target`**：指定提交表单后，响应在哪个窗口或框架中显示。与 `<a>` 标签的 `target` 属性类似（`_blank`, `_self`, `_parent`, `_top`, `framename`）。
- **`autocomplete`**：控制表单或单个输入字段的自动填充功能。
  - `autocomplete="on"` (默认)：允许浏览器自动填充。
  - `autocomplete="off"`：禁用自动填充。常用于敏感字段如密码。
    ```html
    <form action="/login" method="POST" autocomplete="off"></form>
    ```
- **`novalidate`**：一个布尔属性。如果存在，表示表单在提交时不进行 HTML5 内置的客户端验证。
  ```html
  <form action="/submit" novalidate>
    <input type="email" required />
    <button type="submit">提交</button>
  </form>
  ```

### 2. `<input>` 标签：最常用的表单控件

`<input>` 标签是 HTML 表单中最通用的元素，通过其 `type` 属性可以创建多种类型的输入字段。

**常用属性：**

- **`type`** (必需)：定义输入字段的类型。
- **`name`** (必需，用于数据提交)：定义字段的名称，在表单提交时，这个名称会作为参数名发送给服务器。
- **`value`**：定义字段的初始值或当前值。

---

**`input` 标签的常见 `type` 值：**

#### 2.1. 文本输入

- **`text`** (默认类型)：单行文本输入框。
  ```html
  <label for="username">用户名:</label>
  <input
    type="text"
    id="username"
    name="username"
    value="guest"
    placeholder="请输入您的用户名"
    maxlength="50"
    required
  />
  ```
  - **`placeholder`**: 输入框内的提示文本。
  - **`maxlength`**: 允许输入的最大字符数。
  - **`minlength`**: 允许输入的最小字符数。
  - **`size`**: 输入框在字符数方面的可见宽度。
  - **`readonly`**: 字段只读，不能修改，但会随表单提交。
  - **`disabled`**: 字段禁用，不能修改，也不会随表单提交。
  - **`required`**: HTML5 属性，标记为必填字段。
  - **`pattern`**: HTML5 属性，定义正则表达式，用于验证输入值。
  - **`autocomplete`**: 单独控制此输入框的自动填充行为。
- **`password`**：密码输入框，输入内容通常显示为点或星号。
  ```html
  <label for="pwd">密码:</label>
  <input type="password" id="pwd" name="password" required />
  ```
- **`email`**：用于输入电子邮件地址。浏览器会进行基本的格式验证。
  ```html
  <label for="email">邮箱:</label>
  <input type="email" id="email" name="user_email" required />
  ```
- **`url`**：用于输入 URL。浏览器会进行基本的格式验证。
  ```html
  <label for="website">网址:</label>
  <input type="url" id="website" name="user_website" />
  ```
- **`tel`**：用于输入电话号码。在移动设备上通常会弹出数字键盘。
  ```html
  <label for="phone">电话:</label>
  <input type="tel" id="phone" name="user_phone" />
  ```
- **`search`**：用于搜索字段。某些浏览器会为其添加搜索图标或清除按钮。
  ```html
  <label for="search">搜索:</label> <input type="search" id="search" name="q" />
  ```

#### 2.2. 数字与范围输入

- **`number`**：用于输入数字。通常会显示增减按钮。
  ```html
  <label for="quantity">数量 (1-10):</label>
  <input type="number" id="quantity" name="qty" min="1" max="10" value="1" />
  ```
  - **`min`**: 允许的最小值。
  - **`max`**: 允许的最大值。
  - **`step`**: 递增/递减的步长。
- **`range`**：滑动条，用于选择一个范围内的值。
  ```html
  <label for="volume">音量:</label>
  <input type="range" id="volume" name="vol" min="0" max="100" value="50" />
  ```

#### 2.3. 日期和时间输入

- **`date`**：日期选择器（年、月、日）。
  ```html
  <label for="dob">生日:</label> <input type="date" id="dob" name="user_dob" />
  ```
- **`time`**：时间选择器（时、分）。
  ```html
  <label for="appt-time">预约时间:</label>
  <input type="time" id="appt-time" name="appt_time" />
  ```
- **`datetime-local`**：日期和时间选择器（不含时区）。
  ```html
  <label for="meeting-time">会议时间:</label>
  <input type="datetime-local" id="meeting-time" name="meeting_time" />
  ```
- **`week`**：周选择器（年、周）。
- **`month`**：月选择器（年、月）。

#### 2.4. 选择与选项

- **`checkbox`**：复选框，允许用户选择零个或多个选项。
  ```html
  <input type="checkbox" id="fruit1" name="fruits" value="apple" />
  <label for="fruit1">苹果</label><br />
  <input type="checkbox" id="fruit2" name="fruits" value="banana" checked />
  <label for="fruit2">香蕉</label>
  ```
  - **`checked`**: 默认选中。
- **`radio`**：单选按钮，允许用户从一组互斥的选项中选择一个。**同组的单选按钮必须拥有相同的 `name` 属性值。**
  ```html
  <input type="radio" id="gender-male" name="gender" value="male" />
  <label for="gender-male">男</label><br />
  <input type="radio" id="gender-female" name="gender" value="female" checked />
  <label for="gender-female">女</label>
  ```
  - **`checked`**: 默认选中。

#### 2.5. 文件上传

- **`file`**：文件选择器，用于上传文件。**需要将 `<form>` 的 `enctype` 设置为 `multipart/form-data`。**
  ```html
  <label for="upload-file">选择文件:</label>
  <input
    type="file"
    id="upload-file"
    name="document"
    accept=".pdf,.doc"
    multiple
  />
  ```
  - **`accept`**: 规定可上传的文件类型（MIME 类型或文件扩展名）。
  - **`multiple`**: 允许用户选择多个文件。

#### 2.6. 提交与重置按钮

- **`submit`**：提交按钮，点击后会将表单数据发送到 `action` 指定的 URL。
  ```html
  <input type="submit" value="提交表单" />
  ```
- **`reset`**：重置按钮，点击后会将表单中的所有控件恢复到其初始值。
  ```html
  <input type="reset" value="重置" />
  ```
- **`image`**：图像提交按钮。当点击图像时，其坐标也会被发送。
  ```html
  <input type="image" src="submit_button.png" alt="提交" />
  ```

#### 2.7. 隐藏字段

- **`hidden`**：隐藏字段，用户不可见，但会随表单提交。常用于存储一些不希望用户修改的数据，如用户 ID、会话令牌等。
  ```html
  <input type="hidden" name="user_id" value="12345" />
  ```

#### 2.8. 颜色选择器

- **`color`**：颜色选择器。
  ```html
  <label for="fav-color">选择颜色:</label>
  <input type="color" id="fav-color" name="favorite_color" value="#ff0000" />
  ```

---

### 3. `<textarea>` 标签：多行文本输入

用于创建多行文本输入区域。

```html
<label for="comment">留言:</label>
<textarea
  id="comment"
  name="user_comment"
  rows="5"
  cols="40"
  placeholder="请在此输入您的留言..."
  required
></textarea>
```

- **`rows`**: 可见的行数。
- **`cols`**: 可见的列数（字符宽度）。
- 其他属性如 `name`, `id`, `placeholder`, `readonly`, `disabled`, `required`, `maxlength`, `minlength` 等与 `<input type="text">` 类似。

### 4. `<select>` 标签：下拉列表

用于创建下拉菜单，用户从预定义选项中选择一个（或多个）。

```html
<label for="country">国家:</label>
<select id="country" name="user_country">
  <option value="">请选择国家</option>
  <option value="usa">美国</option>
  <option value="can" selected>加拿大</option>
  <option value="mex">墨西哥</option>
</select>
```

- **`<option>` 标签**：定义下拉列表中的每个选项。
  - **`value`**: 提交给服务器的值。
  - **`selected`**: 默认选中此选项。
  - **`disabled`**: 禁用此选项。
- **`multiple`** (属性)：如果存在，允许用户选择多个选项（通常按住 `Ctrl` 或 `Cmd` 键点击）。
  ```html
  <label for="fruits-multi">选择水果 (可多选):</label>
  <select id="fruits-multi" name="selected_fruits" multiple size="4">
    <option value="apple">苹果</option>
    <option value="banana">香蕉</option>
    <option value="orange">橙子</option>
    <option value="grape">葡萄</option>
  </select>
  ```
  - **`size`**: 当 `multiple` 存在时，可见的行数。
- **`<optgroup>` 标签**：用于对选项进行分组，提高可读性。
  ```html
  <label for="cars">选择汽车品牌:</label>
  <select id="cars" name="car_brand">
    <optgroup label="德国品牌">
      <option value="bmw">宝马</option>
      <option value="mercedes">奔驰</option>
    </optgroup>
    <optgroup label="日本品牌">
      <option value="toyota">丰田</option>
      <option value="honda">本田</option>
    </optgroup>
  </select>
  ```
  - **`label`**: 分组的标题。

### 5. `<button>` 标签：按钮

用于创建可点击的按钮，比 `input type="submit"` 等更灵活，可以包含 HTML 内容（如图片、文字）。

```html
<button type="submit">提交</button>
<button type="reset">重置</button>
<button type="button">点击我</button>
```

- **`type`** (重要)：指定按钮的行为。
  - **`submit`** (默认)：提交表单。
  - **`reset`**：重置表单。
  - **`button`**：普通按钮，不会自动提交或重置，通常与 JavaScript 事件处理程序一起使用。

### 6. `<label>` 标签：表单控件的标签

用于定义表单控件的文字标签。**强烈推荐使用**，因为它提高了表单的可访问性。

```html
<label for="username">用户名:</label>
<input type="text" id="username" name="username" />
```

- **`for` 属性**：与关联控件的 `id` 属性值相同。这使得点击标签文本时，相关的输入框会获得焦点，对于辅助技术（如屏幕阅读器）也很有帮助。

### 7. `<fieldset>` 和 `<legend>` 标签：对表单控件分组

- **`<fieldset>`**：用于将表单中的相关元素进行分组，通常会绘制一个边框。
- **`<legend>`**：定义 `<fieldset>` 元素的标题/说明。

```html
<form>
  <fieldset>
    <legend>个人信息</legend>
    <label for="name">姓名:</label>
    <input type="text" id="name" name="user_name" /><br /><br />
    <label for="email">邮箱:</label>
    <input type="email" id="email" name="user_email" />
  </fieldset>

  <fieldset>
    <legend>联系方式</legend>
    <label for="phone">电话:</label>
    <input type="tel" id="phone" name="user_phone" />
  </fieldset>
</form>
```

### 8. `<datalist>` 标签：为输入提供预定义选项列表

为 `<input>` 元素提供一个预定义选项列表，用户可以从列表中选择，也可以输入自己的值。

```html
<label for="browser">选择您喜欢的浏览器:</label>
<input list="browsers" id="browser" name="browser" />

<datalist id="browsers">
  <option value="Edge"></option>
  <option value="Firefox"></option>
  <option value="Chrome"></option>
  <option value="Opera"></option>
  <option value="Safari"></option>
</datalist>
```

- `<input>` 的 `list` 属性值需要与 `<datalist>` 的 `id` 属性值匹配。

### 9. 表单验证 (HTML5 Validation)

HTML5 引入了一些内置的客户端表单验证功能，可以减少对 JavaScript 的依赖。

- **`required`**：必填字段。
- **`minlength` / `maxlength`**：最小/最大字符长度。
- **`min` / `max`**：数字输入的最大/最小值。
- **`pattern`**：使用正则表达式验证输入格式。
- **`type="email"` / `type="url"` / `type="number"`** 等：浏览器会对这些类型进行基本格式验证。

```html
<form>
  <label for="username_val">用户名 (至少3个字符):</label>
  <input
    type="text"
    id="username_val"
    name="username_val"
    minlength="3"
    required
  /><br /><br />

  <label for="phone_val">电话号码 (格式: 123-456-7890):</label>
  <input
    type="tel"
    id="phone_val"
    name="phone_val"
    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
  /><br /><br />

  <button type="submit">提交</button>
</form>
```

当用户提交表单时，如果验证不通过，浏览器会显示默认的错误消息，并阻止表单提交。可以通过 CSS `:valid`, `:invalid` 伪类来样式化表单。

### 总结

HTML 表单是用户与网页交互的重要桥梁。理解并熟练运用 `<form>`、`<input>`、`<textarea>`、`<select>`、`<button>` 以及相关的辅助标签和属性，是构建功能丰富、用户友好的前端应用的基础。同时，结合 HTML5 的验证特性以及 CSS 和 JavaScript，可以创建更加强大的交互式表单。
