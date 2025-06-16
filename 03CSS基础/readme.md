# 属性选择器

```js
[attr]
[attr=value] 是指定值
[attr~=value] 包含指定值，与其他值有空格分开
[attr|=value] 选择属性值以指定值开头，后跟连字符的元素
[attr^=value] 属性值以指定字符串 开头
[attr$=value] 属性值以指定字符串 结尾
[attr*=value] 属性值包含指定 字符串
```

# 组合选择器

```js
//后代选择器
main p {}

//子选择器
main > p {}

//相邻兄弟选择器
main + h1 {}

//通用兄弟选择器
main - h1 {}
```

# 伪类选择器

### 链接伪类

:link 选择所有未被访问的链接
:visited 选择所有以被访问的链接

### 用户行为伪类

:hover 选择鼠标指针悬停在器元素上的元素
:active 选择被用户激活（eg：点击时）的元素
:focus 选择获得焦点的元素（通常是表单或不可交互的元素）

### UI 元素状态伪类

:enable 选择所有可用的（未禁用的）**表单**元素
:disable 选择所有被禁用的**表单**元素
:checked 选择所有被选用（如**复选框或单选按钮**）的元素

### 结构性伪类

:root 选择文档是根元素
:empty 选择不包含任何子元素（包括文本节点）的元素
:only-child 选择是其父元素的唯一子元素的元素

:first-clild 选择父元素唯一子元素
:last-child 选择父元素最后一个子元素
:nth-child(n) 选择父元素的第 n 个子元素
:nth-last-child(n) 选择父元素倒数的第 n 个子元素

### 其他伪类

:not(selector) 选择不匹配指定选择器的元素
:target 选择当前 URL 的片段标识符（#id）所指向的元素

:first-of-type 选择其父元素中指定类型的第一个子元素
:last-of-type 选择其父元素中指定类型的最后一个子元素
:nth-of-typ(n) 选择其父元素中指定的第 n 个子元素
:nth-last-of-type(n) 选择其父元素指定类型的倒数第 n 个子元素

# 伪元素选择器

::before AND ::after
**它们允许你在选定元素的内容之前或之后插入生成的内容。插入的内容默认是行内元素。**
**必须配合 content 属性使用，content 属性的值就是你要插入的内容。**
**content 可以是字符串、URL（用于插入图片)、attr（）函数（获取元素属性值)、counter（）函数等。**


### 1. 伪元素的默认位置（`display: inline` 或 `inline-block` 时）

当伪元素未被设置为 `position: absolute` 或 `fixed` 时，它们的定位行为与普通的行内元素或行内块级元素类似。

- **默认 `display: inline` (初始状态)：**

  - 伪元素就像文本一样，插入到父元素内容的**开头** (`::before`) 或 **末尾** (`::after`)。
  - 它们的位置完全由父元素的内容流决定。
  - `width` 和 `height` 不起作用。`margin` 和 `padding` 也会表现出行内元素的特点（垂直方向的 `margin` 和 `padding` 不会影响周围元素的布局）。
  - 它们不会单独占据一行，而是与父元素内容在同一行上。
  - **父元素位置规则：** 伪元素是父元素内容的一部分，因此它会随着父元素内容的流动而定位。

- **设置为 `display: inline-block`：**
  - 伪元素仍然在父元素的内容流中，与父元素的其他行内内容（如文本、图片）排列。
  - 现在 `width` 和 `height` 生效，并且 `margin` 和 `padding` 也会在所有方向上影响其尺寸。
  - **父元素位置规则：** 伪元素依然是父元素内容的一部分，其位置由父元素内部的文本流和盒模型决定。它会占据父元素内容区域内的空间。

**示例：**

```html
<style>
  .parent {
    border: 2px solid blue;
    padding: 10px;
    margin: 20px;
  }
  .parent::before {
    content: "前缀 ";
    color: red;
    /* 默认 inline，width/height无效 */
  }
  .parent::after {
    content: " 后缀";
    color: green;
    display: inline-block; /* 转换为 inline-block */
    width: 50px; /* 现在可以设置宽度 */
    height: 20px;
    background-color: yellow;
    vertical-align: middle; /* 垂直对齐 */
  }
</style>

<div class="parent">这是父元素的内容。</div>
```

在这个例子中，`::before` 会出现在 "这是父元素的内容。" 之前，并且它们都在同一行。`::after` 会出现在 "这是父元素的内容。" 之后，虽然它是一个有宽度和高度的黄色块，但它仍然在父元素的文本流中，并且与文本在同一行上垂直对齐。

### 2. 伪元素的定位（`position: absolute` 时）

这是伪元素最常见的用法之一，也涉及到最重要的定位规则。

当伪元素被设置为 `position: absolute;` 时，它们的定位行为与其他被绝对定位的元素一样。

- **定位上下文 (Containing Block)：** 绝对定位的元素（包括伪元素）会相对于其最近的 **已定位祖先元素** 进行定位。

  - **已定位祖先元素** 指的是 `position` 属性值不是 `static`（即 `relative`, `absolute`, `fixed`, `sticky`）的祖先元素。
  - 如果没有任何已定位的祖先元素，那么它会相对于 **初始包含块**（通常是 `<html>` 元素或浏览器视口）进行定位。

- **伪元素与父元素的关系：**
  - 为了使伪元素能够相对于其直接父元素进行精确定位（例如，在父元素的某个角，或者完全覆盖父元素），**该父元素必须被设置为一个定位上下文**，通常是 `position: relative;`。
  - 如果父元素没有定位上下文，伪元素会“跳出”父元素，并向上查找最近的已定位祖先，直到 `html` 元素。

**基本规则：**

1.  **设置父元素 `position: relative;`** (或 `absolute`, `fixed`, `sticky`)。
2.  **设置伪元素 `position: absolute;`**。
3.  **使用 `top`, `bottom`, `left`, `right` 属性** 来相对于父元素进行定位。
4.  **设置 `width` 和 `height`**（需要伪元素 `display: block` 或 `inline-block`）。

**示例：创建覆盖层或角标**

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      .card {
        position: relative; /* 关键：为伪元素提供定位上下文 */
        width: 250px;
        height: 150px;
        border: 2px solid #ccc;
        margin: 50px;
        background-color: #f0f8ff;
        overflow: hidden; /* 防止伪元素内容溢出 */
      }

      .card::before {
        content: "NEW";
        display: block; /* 必须转换为块级才能设置尺寸 */
        position: absolute; /* 绝对定位 */
        top: 10px; /* 距离父元素顶部10px */
        right: 10px; /* 距离父元素右侧10px */
        background-color: #ff4500;
        color: white;
        padding: 5px 10px;
        border-radius: 5px;
        font-size: 14px;
        font-weight: bold;
        z-index: 1; /* 确保在内容之上 */
      }

      .card::after {
        content: "";
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%; /* 宽度与父元素相同 */
        height: 100%; /* 高度与父元素相同 */
        background-color: rgba(0, 0, 0, 0.5); /* 半透明黑色背景 */
        opacity: 0; /* 默认隐藏 */
        transition: opacity 0.3s ease;
        z-index: 0; /* 在内容之下 */
      }

      .card:hover::after {
        opacity: 1; /* 鼠标悬停时显示覆盖层 */
      }
    </style>
  </head>
  <body>
    <div class="card">
      <h3>产品标题</h3>
      <p>产品描述内容。</p>
    </div>
  </body>
</html>
```

**解释：**

- `.card` 元素设置了 `position: relative;`，使其成为 `::before` 和 `::after` 的定位上下文。
- `::before` 被绝对定位到 `card` 的右上角，作为“NEW”徽章。它的 `top` 和 `right` 值是相对于 `.card` 的内边距边缘（因为没有 `padding`）。
- `::after` 也被绝对定位，并通过 `top: 0; left: 0; width: 100%; height: 100%;` 完美地覆盖了 `.card` 的内容区域，以实现悬停时的半透明覆盖效果。

### 总结规则：

1.  **非定位伪元素：**

    - `display: inline`（默认）：像文本一样嵌入父元素内容流中。`width`/`height` 无效。
    - `display: inline-block` 或 `block`：仍然在父元素内容流中，但 `width`/`height` 生效。其位置由父元素的盒模型和内容流决定。

2.  **绝对定位伪元素 (`position: absolute;`)：**
    - 它们会脱离文档流。
    - 其定位（`top`, `bottom`, `left`, `right`）是相对于其最近的 **已定位祖先元素**（`position: relative`, `absolute`, `fixed`, `sticky`）的内边距边缘。
    - **最常见和推荐的做法是：将伪元素的直接父元素设置为 `position: relative;`，以便伪元素可以精确地相对于该父元素进行定位。**
    - 如果没有已定位的祖先，则相对于初始包含块（通常是浏览器视口）。



::fitst-line
选择块级元素的第一行文本

::first-letter
选择块级元素的第一个字母。常用于创建首字下沉效果。

::selection
选择被用户用鼠标或键盘高亮选中的文本。

::placeholder
用于设置输入框占位文本的样式。

::marker
选择列表项的标记盒 (通常是项目符号或数字)。
