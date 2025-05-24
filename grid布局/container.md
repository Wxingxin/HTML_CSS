# grid rows and columns

`grid-template-columns` 和 `grid-template-rows` 是 CSS Grid 布局中用于定义网格轨道（grid track）尺寸的关键属性。它们提供了极大的灵活性来控制网格单元格的布局。

### 基本概念

- **网格轨道（Grid Track）：** 指网格线之间的空间，可以是列（columns）或行（rows）。
- **网格线（Grid Line）：** 定义网格轨道的边界，有数字索引（从 1 开始）和可选的自定义名称。
- **网格单元格（Grid Cell）：** 网格轨道的交点形成的最小单位。

### `grid-template-columns` 和 `grid-template-rows` 的不同用法

这两个属性的用法非常相似，只是一个定义列宽，一个定义行高。下面我们将以 `grid-template-columns` 为例来详细说明各种用法，`grid-template-rows` 也同样适用。

#### 1. 使用固定长度单位

你可以使用任何 CSS 长度单位（`px`, `em`, `rem`, `vw`, `vh`, `%` 等）来定义列宽或行高。

```css
.container {
  display: grid;
  /* 定义三列：第一列 100px 宽，第二列 200px 宽，第三列 50px 宽 */
  grid-template-columns: 100px 200px 50px;
  /* 定义两行：第一行 50px 高，第二行 100px 高 */
  grid-template-rows: 50px 100px;
}
```

#### 2. 使用弹性单位 `fr` (fraction)

`fr` 单位代表网格容器中可用空间的一小部分（fraction）。当网格中有弹性内容时，`fr` 会根据设定的比例来分配剩余空间。

```css
.container {
  display: grid;
  /* 定义三列：
     * 第一列占据 1 份可用空间
     * 第二列占据 2 份可用空间
     * 第三列占据 1 份可用空间
     * 最终比例为 1:2:1
     */
  grid-template-columns: 1fr 2fr 1fr;
}
```

- **注意：** `fr` 单位只分配“剩余空间”。如果存在固定宽度的列，它们会先占据空间，`fr` 单位再分配剩下的。

  ```css
  .container {
    display: grid;
    /* 第一列 100px 宽，剩余空间按 1:2 比例分配给第二列和第三列 */
    grid-template-columns: 100px 1fr 2fr;
  }
  ```

#### 3. 使用 `minmax()` 函数

`minmax()` 函数允许你为网格轨道设置一个最小尺寸和最大尺寸。这在响应式布局中非常有用。

- `minmax(min, max)`:
  - `min`: 轨道的最小尺寸。
  - `max`: 轨道的最大尺寸。

```css
.container {
  display: grid;
  /* 定义三列：
     * 第一列最小 100px，最大 200px
     * 第二列最小 150px，最大 1fr (占据剩余空间的 1 份)
     * 第三列最小 50px，最大 100px
     */
  grid-template-columns: minmax(100px, 200px) minmax(150px, 1fr) minmax(50px, 100px);
}
```

- `minmax()` 函数的常用场景：
  - `minmax(auto, 1fr)`: 轨道尺寸至少要能容纳其内容（`auto`），但不能超过剩余空间的 1 份。
  - `minmax(100px, 1fr)`: 轨道尺寸至少 100px，但不能超过剩余空间的 1 份。

#### 4. 使用 `auto` 关键字

`auto` 关键字允许网格轨道自动调整大小以适应其内容。

```css
.container {
  display: grid;
  /* 定义三列：
     * 第一列根据内容自动调整宽度
     * 第二列占据 1 份可用空间
     * 第三列根据内容自动调整宽度
     */
  grid-template-columns: auto 1fr auto;
}
```

- 当 `auto` 用于 `minmax()` 函数的 `max` 值时，它表示轨道可以根据内容增长到最大。
- 当 `auto` 用于 `minmax()` 函数的 `min` 值时，它表示轨道可以根据内容收缩到最小（但不能小于内容的最小内容尺寸）。

#### 5. 使用 `repeat()` 函数

`repeat()` 函数用于创建重复的网格轨道，避免冗余代码。

- `repeat(count, track-list)`:
  - `count`: 重复的次数。可以是正整数。
  - `track-list`: 要重复的轨道定义（可以是单个值或多个值的列表）。

```css
.container {
  display: grid;
  /* 定义四列，每列 1fr */
  grid-template-columns: repeat(4, 1fr);

  /* 定义三列：第一列 100px，第二列 1fr，第三列 100px */
  /* 等同于：100px 1fr 100px */
  grid-template-columns: repeat(2, 100px) 1fr;
}
```

- `repeat()` 函数的特殊关键字：
  - **`auto-fill`**: 尽可能多地填充列/行，即使没有足够的网格项，也会创建空的轨道。这在希望创建响应式网格时非常有用。
    ```css
    .container {
      display: grid;
      /* 尽可能多地创建列，每列最小 200px，最大 1fr */
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    }
    ```
  - **`auto-fit`**: 类似于 `auto-fill`，但如果网格项的数量不足以填充所有创建的轨道，则会折叠空轨道，使网格项填满可用空间。
    ```css
    .container {
      display: grid;
      /* 尽可能多地创建列，每列最小 200px，最大 1fr。
         * 如果网格项不足，空轨道会被折叠。
         */
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    }
    ```
    **`auto-fill` vs `auto-fit` 区别：** 当没有足够的内容填充所有隐式创建的轨道时，`auto-fill` 会保留空轨道，而 `auto-fit` 会折叠它们。这通常意味着在内容不足时，`auto-fit` 会让现有内容扩展以填充整个容器。

#### 6. 使用 `fit-content()` 函数 (CSS Intrinsic & Extrinsic Sizing Module Level 3)

`fit-content()` 函数允许你根据内容来设置轨道大小，但会有一个上限。

- `fit-content(length)`:
  - 如果内容小于 `length`，则使用内容的尺寸。
  - 如果内容大于 `length`，则使用 `length` 作为轨道尺寸。
  - 如果内容本身就可以比 `length` 更小，它会根据内容缩小。

```css
.container {
  display: grid;
  /* 定义三列：
     * 第一列：内容尺寸，但最大不超过 200px。
     * 第二列：1fr
     * 第三列：内容尺寸，但最大不超过 300px。
     */
  grid-template-columns: fit-content(200px) 1fr fit-content(300px);
}
```

#### 7. 定义具名网格线

你可以为网格线命名，然后在 `grid-template-columns` 和 `grid-template-rows` 中使用这些名称，使布局更易读和维护。

```css
.container {
  display: grid;
  /* 定义列，并命名网格线：
     * 第一列：从 [start] 到 [main-start] 是 1fr
     * 第二列：从 [main-start] 到 [main-end] 是 2fr
     * 第三列：从 [main-end] 到 [end] 是 1fr
     */
  grid-template-columns: [start] 1fr [main-start] 2fr [main-end] 1fr [end];

  /* 你也可以定义多条同名网格线，通过数字后缀区分 */
  grid-template-rows: [header-start] 50px [header-end nav-start] 100px [nav-end content-start] 1fr [content-end];
}
```

然后，你可以在 `grid-column` 和 `grid-row` 等属性中使用这些名称来定位网格项：

```css
.item {
  grid-column: main-start / main-end; /* 从 main-start 线到 main-end 线 */
  grid-row: header-start / content-end; /* 从 header-start 线到 content-end 线 */
}
```

#### 8. 使用 `subgrid` (CSS Grid Level 2)

`subgrid` 允许一个网格容器的内部网格项使用其父网格的轨道定义，从而实现更复杂的对齐。

```css
.parent-grid {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: auto 1fr auto;
}

.child-grid {
  display: grid;
  grid-column: 1 / 4; /* 子网格占据父网格的所有列 */
  grid-row: 2 / 3; /* 子网格占据父网格的第二行 */

  /* 关键：使用 subgrid 来继承父网格的列定义 */
  grid-template-columns: subgrid;
  /* 如果子网格也需要行，并且其内容应该对齐到父网格的行，也可以使用 subgrid */
  grid-template-rows: subgrid; /* 但这通常要求父网格有明确的行定义，且子网格占据多行 */
}
```

- 当 `grid-template-columns` 或 `grid-template-rows` 的值设置为 `subgrid` 时，它会继承其父网格中其所跨越轨道的尺寸和线定义。这对于创建复杂的嵌套网格但又需要保持全局对齐的场景非常有用。

### 总结

`grid-template-columns` 和 `grid-template-rows` 是 CSS Grid 布局的基石，通过组合这些用法，你可以创建几乎任何复杂的二维布局。

- **固定尺寸:** `px`, `em`, `%` 等。
- **弹性尺寸:** `fr`。
- **内容适应:** `auto`, `fit-content()`, `minmax() (auto, ...)`。
- **重复模式:** `repeat()` (`auto-fill`, `auto-fit`)。
- **嵌套对齐:** `subgrid`。
- **可读性:** 具名网格线。

在 CSS Grid 布局和 Flexbox 布局中，`gap` 属性及其派生属性 `column-gap` 和 `row-gap` 用于在网格或弹性项之间创建间距。它们提供了一种非常方便的方式来管理元素之间的间隔，而无需使用负外边距或复杂的边距技巧。

# 1. gap = row-gap + column-gap

`gap` 是 `row-gap` 和 `column-gap` 的简写属性。

- **语法:**

  - `gap: <row-gap> <column-gap>;` (先写行间距，后写列间距)
  - `gap: <gap>;` (行间距和列间距相同)

- **应用场景:**

  - **Grid 布局:** 用于定义网格轨道之间的间距。
  - **Flexbox 布局:** (较新特性，需注意兼容性) 用于定义弹性项之间的间距。

- **示例 (Grid):**

  ```css
  .grid-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto auto;

    /* 行间距 20px，列间距 30px */
    gap: 20px 30px;

    /* 或者，行间距和列间距都是 15px */
    /* gap: 15px; */
  }

  .grid-item {
    background-color: lightblue;
    border: 1px solid blue;
    padding: 10px;
  }
  ```

- **示例 (Flexbox):**

  ```css
  .flex-container {
    display: flex;
    flex-wrap: wrap; /* 允许换行，这样多行时行间距才能体现 */

    /* 行间距 20px，列间距 30px */
    gap: 20px 30px;

    /* 或者，行间距和列间距都是 15px */
    /* gap: 15px; */
  }

  .flex-item {
    background-color: lightgreen;
    border: 1px solid green;
    padding: 10px;
    flex: 1; /* 让弹性项占据可用空间 */
  }
  ```

### 2. `row-gap` 属性

`row-gap` 专门用于定义网格行或弹性行之间的间距。

- **语法:** `row-gap: <length> | <percentage>;`

- **应用场景:**

  - **Grid 布局:** 定义网格行之间的垂直间距。
  - **Flexbox 布局:** (较新特性) 定义当弹性项换行时，行之间的垂直间距。

- **示例 (Grid):**

  ```css
  .grid-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto;
    row-gap: 25px; /* 行之间有 25px 的垂直间距 */
  }
  ```

- **示例 (Flexbox):**

  ```css
  .flex-container {
    display: flex;
    flex-wrap: wrap;
    row-gap: 25px; /* 当弹性项换行时，行之间有 25px 的垂直间距 */
  }
  ```

### 3. `column-gap` 属性

`column-gap` 专门用于定义网格列或弹性列之间的间距。

- **语法:** `column-gap: <length> | <percentage>;`

- **应用场景:**

  - **Grid 布局:** 定义网格列之间的水平间距。
  - **Flexbox 布局:** (较新特性) 定义弹性项之间的水平间距。

- **示例 (Grid):**

  ```css
  .grid-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 40px; /* 列之间有 40px 的水平间距 */
  }
  ```

- **示例 (Flexbox):**

  ```css
  .flex-container {
    display: flex;
    /* flex-direction: row 默认 */
    column-gap: 40px; /* 弹性项之间有 40px 的水平间距 */
  }
  ```

### 关键点和注意事项

- **浏览器兼容性:**
  - `gap`, `row-gap`, `column-gap` 在 **Grid 布局** 中具有非常好的兼容性，主流浏览器都支持。
  - 在 **Flexbox 布局** 中，这些属性是较新的功能（在 CSS Box Alignment Module Level 3 中引入），虽然现代浏览器（如 Chrome, Firefox, Edge, Safari）已广泛支持，但如果需要支持旧版浏览器，可能需要备用方案（例如使用 `margin`）。建议查看 caniuse.com 以获取最新的兼容性信息。
- **不影响容器边缘:** `gap` 属性只在网格项或弹性项**之间**创建间距，而不会在容器的边缘创建额外的间距。这与使用 `margin` 可能需要额外处理边距塌陷或负外边距以去除容器边缘间距的情况不同，使得布局管理更加简洁。
- **百分比值:** 百分比值是相对于容器的宽度（对于 `column-gap`）或高度（对于 `row-gap`）计算的。
- **子元素间距:** `gap` 属性是应用于容器的，它控制的是容器直接子元素之间的间距，而不是子元素的子元素。

通过使用 `gap` 属性，你可以更清晰、更简洁地控制网格和弹性布局中元素间的视觉间隔，极大地简化了 CSS 代码。

# place-items = justify-items + align-items

在 CSS Grid 布局中，`place-items`、`justify-items` 和 `align-items` 是用于控制网格容器中所有网格项在其各自网格区域内如何对齐的关键属性。它们提供了强大的能力来精确控制内容的放置。

### 核心概念

- **网格区域 (Grid Area):** 每个网格项所占据的矩形区域。
- **轴线 (Axis):**
  - **主轴 (Main Axis) / 行轴 (Row Axis):** 对应于行方向的轴，通常是水平方向。
  - **交叉轴 (Cross Axis) / 列轴 (Column Axis):** 对应于列方向的轴，通常是垂直方向。

### 1. `justify-items` 属性 (主轴/行轴对齐)

`justify-items` 属性用于在网格容器的**主轴（行轴）**方向上，对齐其内部所有网格项的内容。

- **作用对象:** 网格容器 (Grid Container)
- **对齐方向:** 水平方向（默认情况下，当 `flex-direction` 为 `row` 时）
- **语法:** `justify-items: start | end | center | stretch;`

- **值解释:**

  - `start`: 网格项的内容在其网格区域的**起始线**（左侧，如果 `direction` 为 `ltr`）对齐。
  - `end`: 网格项的内容在其网格区域的**结束线**（右侧，如果 `direction` 为 `ltr`）对齐。
  - `center`: 网格项的内容在其网格区域的**中心**对齐。
  - `stretch` (默认值): 如果网格项没有设置明确的宽度，它将**拉伸**以填充其网格区域的整个宽度。

- **示例:**

  ```html
  <div class="grid-container justify-start">
    <div class="item">Item 1</div>
    <div class="item">Item 2</div>
    <div class="item">Item 3</div>
  </div>
  <div class="grid-container justify-center">
    <div class="item">Item 4</div>
    <div class="item">Item 5</div>
    <div class="item">Item 6</div>
  </div>
  ```

  ```css
  .grid-container {
    display: grid;
    grid-template-columns: repeat(3, 150px); /* 固定列宽，以便观察对齐效果 */
    gap: 10px;
    height: 100px; /* 为了让 item 有足够的空间进行对齐 */
    border: 1px solid red;
  }
  .item {
    background-color: lightblue;
    border: 1px solid blue;
    padding: 5px;
    width: 80px; /* 给 item 一个宽度，使其小于网格区域，方便观察对齐 */
  }

  .justify-start {
    justify-items: start; /* 所有 item 在其网格区域内水平靠左对齐 */
  }
  .justify-center {
    justify-items: center; /* 所有 item 在其网格区域内水平居中对齐 */
  }
  /* 其他：
  .justify-end { justify-items: end; }
  .justify-stretch { justify-items: stretch; }
  */
  ```

### 2. `align-items` 属性 (交叉轴/列轴对齐)

`align-items` 属性用于在网格容器的**交叉轴（列轴）**方向上，对齐其内部所有网格项的内容。

- **作用对象:** 网格容器 (Grid Container)
- **对齐方向:** 垂直方向（默认情况下，当 `flex-direction` 为 `row` 时）
- **语法:** `align-items: start | end | center | stretch | baseline;`

- **值解释:**

  - `start`: 网格项的内容在其网格区域的**起始线**（顶部）对齐。
  - `end`: 网格项的内容在其网格区域的**结束线**（底部）对齐。
  - `center`: 网格项的内容在其网格区域的**中心**对齐。
  - `stretch` (默认值): 如果网格项没有设置明确的高度，它将**拉伸**以填充其网格区域的整个高度。
  - `baseline`: 网格项的内容根据其**基线**对齐。

- **示例:**

  ```html
  <div class="grid-container align-start">
    <div class="item">Item 1</div>
    <div class="item">Item 2</div>
    <div class="item">Item 3</div>
  </div>
  <div class="grid-container align-center">
    <div class="item">Item 4</div>
    <div class="item">Item 5</div>
    <div class="item">Item 6</div>
  </div>
  ```

  ```css
  .grid-container {
    display: grid;
    grid-template-columns: repeat(3, 150px);
    grid-template-rows: 100px; /* 固定行高，以便观察对齐效果 */
    gap: 10px;
    border: 1px solid red;
  }
  .item {
    background-color: lightblue;
    border: 1px solid blue;
    padding: 5px;
    height: 40px; /* 给 item 一个高度，使其小于网格区域，方便观察对齐 */
  }

  .align-start {
    align-items: start; /* 所有 item 在其网格区域内垂直靠上对齐 */
  }
  .align-center {
    align-items: center; /* 所有 item 在其网格区域内垂直居中对齐 */
  }
  /* 其他：
  .align-end { align-items: end; }
  .align-stretch { align-items: stretch; }
  .align-baseline { align-items: baseline; }
  */
  ```

### 3. `place-items` 属性 (简写属性)

`place-items` 是 `align-items` 和 `justify-items` 的简写属性。

- **语法:**

  - `place-items: <align-items-value> <justify-items-value>;` (先写垂直对齐，后写水平对齐)
  - `place-items: <value>;` (如果只提供一个值，则 `align-items` 和 `justify-items` 都使用该值)

- **作用对象:** 网格容器 (Grid Container)

- **示例:**

  ```html
  <div class="grid-container place-center">
    <div class="item">Item 1</div>
    <div class="item">Item 2</div>
    <div class="item">Item 3</div>
  </div>
  <div class="grid-container place-start-end">
    <div class="item">Item 4</div>
    <div class="item">Item 5</div>
    <div class="item">Item 6</div>
  </div>
  ```

  ```css
  .grid-container {
    display: grid;
    grid-template-columns: repeat(3, 150px);
    grid-template-rows: 100px;
    gap: 10px;
    border: 1px solid red;
  }
  .item {
    background-color: lightblue;
    border: 1px solid blue;
    padding: 5px;
    width: 80px; /* 小于网格区域宽度 */
    height: 40px; /* 小于网格区域高度 */
  }

  .place-center {
    /* 所有 item 在其网格区域内水平和垂直都居中 */
    place-items: center;
    /* 等同于：
       * align-items: center;
       * justify-items: center;
       */
  }

  .place-start-end {
    /* align-items: start; (垂直靠上)
       * justify-items: end; (水平靠右)
       */
    place-items: start end;
  }
  ```

### 总结

- **`justify-items`:** 控制**所有网格项**在其网格区域内的**水平对齐**（主轴）。
- **`align-items`:** 控制**所有网格项**在其网格区域内的**垂直对齐**（交叉轴）。
- **`place-items`:** `align-items` 和 `justify-items` 的**简写**。

这些属性都作用于**网格容器**，并影响其**所有直接子网格项**。如果你需要控制**单个网格项**的对齐，可以使用它们的对应属性：`justify-self`、`align-self` 和 `place-self`。

# place-content = justify-content + align-content

在 CSS Grid 布局中，`place-content`、`justify-content` 和 `align-content` 属性用于当**网格轨道（Grid Tracks）的总大小小于网格容器（Grid Container）时，如何分配网格轨道和容器之间的剩余空间。**

简而言之：

- `justify-content` 影响**行（columns）**在**主轴**上的分布。
- `align-content` 影响**列（rows）**在**交叉轴**上的分布。
- `place-content` 是两者的简写。

它们与 `justify-items`/`align-items` 的主要区别在于：

- `justify-items`/`align-items` 控制的是**网格项（Grid Items）**在其**各自的网格单元格/区域**内的对齐。
- `justify-content`/`align-content` 控制的是**整个网格（即所有网格轨道组成的整体）**在**网格容器内**的对齐。

---

### 1. `justify-content` 属性 (主轴/行轴内容对齐)

`justify-content` 属性用于在网格容器的**主轴（行轴）**方向上，当网格轨道的总宽度小于容器宽度时，如何分配剩余空间和对齐**所有网格列**。

- **作用对象:** 网格容器 (Grid Container)
- **对齐方向:** 水平方向（默认情况下，当 `flex-direction` 为 `row` 时）
- **适用条件:** 只有当 `grid-template-columns` 定义的列总宽度**小于**网格容器的宽度时，此属性才会有明显效果。
- **语法:** `justify-content: start | end | center | stretch | space-around | space-between | space-evenly;`

- **值解释:**

  - `start`: 所有网格列在其网格容器的**起始线**（左侧，如果 `direction` 为 `ltr`）对齐。剩余空间全部放在末尾。
  - `end`: 所有网格列在其网格容器的**结束线**（右侧，如果 `direction` 为 `ltr`）对齐。剩余空间全部放在开头。
  - `center`: 所有网格列在其网格容器的**中心**对齐。剩余空间在两边均匀分布。
  - `stretch`: 如果 `grid-template-columns` 使用 `auto` 关键字且允许拉伸，则列会**拉伸**以填充容器的整个宽度。
  - `space-around`: 每条网格线两侧的间距相等，这意味着在两端（容器边缘）的间距是中间间距的一半。
  - `space-between`: 第一列的起始线和最后一列的结束线紧贴容器边缘，**剩余空间均匀地分布在列之间**。
  - `space-evenly`: 所有间距（包括两端和中间的间距）都相等。

- **示例:**

  ```html
  <div class="grid-container justify-content-start">
    <div class="item">1</div>
    <div class="item">2</div>
    <div class="item">3</div>
  </div>
  <div class="grid-container justify-content-center">
    <div class="item">4</div>
    <div class="item">5</div>
    <div class="item">6</div>
  </div>
  ```

  ```css
  .grid-container {
    display: grid;
    grid-template-columns: 80px 80px 80px; /* 总宽度 240px */
    width: 400px; /* 容器宽度大于列总宽度，以便观察效果 */
    gap: 10px;
    border: 2px solid red;
  }
  .item {
    background-color: lightblue;
    padding: 10px;
    text-align: center;
  }

  .justify-content-start {
    justify-content: start; /* 网格内容靠左对齐 */
  }
  .justify-content-center {
    justify-content: center; /* 网格内容水平居中 */
  }
  /* 其他示例：
  .justify-content-end { justify-content: end; }
  .justify-content-space-between { justify-content: space-between; }
  .justify-content-space-around { justify-content: space-around; }
  .justify-content-space-evenly { justify-content: space-evenly; }
  */
  ```

---

### 2. `align-content` 属性 (交叉轴/列轴内容对齐)

`align-content` 属性用于在网格容器的**交叉轴（列轴）**方向上，当网格轨道的总高度小于容器高度时，如何分配剩余空间和对齐**所有网格行**。

- **作用对象:** 网格容器 (Grid Container)
- **对齐方向:** 垂直方向（默认情况下，当 `flex-direction` 为 `row` 时）
- **适用条件:** 只有当 `grid-template-rows` 定义的行总高度**小于**网格容器的高度时，此属性才会有明显效果。
- **语法:** `align-content: start | end | center | stretch | space-around | space-between | space-evenly;`

- **值解释:** (与 `justify-content` 的值解释类似，只是方向从水平变为垂直)

  - `start`: 所有网格行在其网格容器的**起始线**（顶部）对齐。
  - `end`: 所有网格行在其网格容器的**结束线**（底部）对齐。
  - `center`: 所有网格行在其网格容器的**中心**对齐。
  - `stretch`: 如果 `grid-template-rows` 使用 `auto` 关键字且允许拉伸，则行会**拉伸**以填充容器的整个高度。
  - `space-around`: 每条网格线两侧的间距相等，两端的间距是中间间距的一半。
  - `space-between`: 第一行的起始线和最后一行的结束线紧贴容器边缘，**剩余空间均匀地分布在行之间**。
  - `space-evenly`: 所有间距（包括两端和中间的间距）都相等。

- **示例:**

  ```html
  <div class="grid-container align-content-start">
    <div class="item">1</div>
    <div class="item">2</div>
    <div class="item">3</div>
    <div class="item">4</div>
    <div class="item">5</div>
    <div class="item">6</div>
  </div>
  <div class="grid-container align-content-center">
    <div class="item">7</div>
    <div class="item">8</div>
    <div class="item">9</div>
    <div class="item">10</div>
    <div class="item">11</div>
    <div class="item">12</div>
  </div>
  ```

  ```css
  .grid-container {
    display: grid;
    grid-template-columns: repeat(3, 80px);
    grid-template-rows: 60px 60px; /* 总高度 120px */
    height: 300px; /* 容器高度大于行总高度，以便观察效果 */
    gap: 10px;
    border: 2px solid red;
  }
  .item {
    background-color: lightgreen;
    padding: 10px;
    text-align: center;
  }

  .align-content-start {
    align-content: start; /* 网格内容靠上对齐 */
  }
  .align-content-center {
    align-content: center; /* 网格内容垂直居中 */
  }
  /* 其他示例：
  .align-content-end { align-content: end; }
  .align-content-space-between { align-content: space-between; }
  .align-content-space-around { align-content: space-around; }
  .align-content-space-evenly { align-content: space-evenly; }
  */
  ```

---

### 3. `place-content` 属性 (简写属性)

`place-content` 是 `align-content` 和 `justify-content` 的简写属性。

- **作用对象:** 网格容器 (Grid Container)
- **语法:**

  - `place-content: <align-content-value> <justify-content-value>;` (先写垂直对齐，后写水平对齐)
  - `place-content: <value>;` (如果只提供一个值，则 `align-content` 和 `justify-content` 都使用该值)

- **示例:**

  ```html
  <div class="grid-container place-content-center">
    <div class="item">1</div>
    <div class="item">2</div>
    <div class="item">3</div>
    <div class="item">4</div>
    <div class="item">5</div>
    <div class="item">6</div>
  </div>
  <div class="grid-container place-content-start-end">
    <div class="item">7</div>
    <div class="item">8</div>
    <div class="item">9</div>
    <div class="item">10</div>
    <div class="item">11</div>
    <div class="item">12</div>
  </div>
  ```

  ```css
  .grid-container {
    display: grid;
    grid-template-columns: repeat(3, 80px);
    grid-template-rows: 60px 60px;
    width: 400px;
    height: 300px;
    gap: 10px;
    border: 2px solid red;
  }
  .item {
    background-color: lightcoral;
    padding: 10px;
    text-align: center;
  }

  .place-content-center {
    /* 所有网格轨道水平和垂直都居中 */
    place-content: center;
    /* 等同于：
       * align-content: center;
       * justify-content: center;
       */
  }

  .place-content-start-end {
    /* align-content: start; (网格内容垂直靠上)
       * justify-content: end; (网格内容水平靠右)
       */
    place-content: start end;
  }
  ```

---

### 总结与对比

| 属性              | 作用对象 | 影响范围       | 对齐方向        | 适用条件                                    |
| :---------------- | :------- | :------------- | :-------------- | :------------------------------------------ |
| `justify-items`   | 网格容器 | 所有**网格项** | **水平**对齐    | 改变网格项在其**自身网格区域内**的对齐方式  |
| `align-items`     | 网格容器 | 所有**网格项** | **垂直**对齐    | 改变网格项在其**自身网格区域内**的对齐方式  |
| `place-items`     | 网格容器 | 所有**网格项** | 垂直 & 水平对齐 | `align-items` 和 `justify-items` 的简写     |
| `justify-content` | 网格容器 | **整个网格**   | **水平**对齐    | 网格**列总宽度小于容器宽度**时              |
| `align-content`   | 网格容器 | **整个网格**   | **垂直**对齐    | 网格**行总高度小于容器高度**时              |
| `place-content`   | 网格容器 | **整个网格**   | 垂直 & 水平对齐 | `align-content` 和 `justify-content` 的简写 |

理解这些 `content` 属性的关键在于，它们只有在网格轨道不足以填满整个网格容器时才有效。如果你的网格轨道已经通过 `fr` 单位或其他方式自动填满了容器，那么这些 `content` 属性将不会有任何视觉上的效果。

# grid-auto-columns + grid-auto-rows + grid-auto-flow

在 CSS Grid 布局中，`grid-auto-columns`、`grid-auto-rows` 和 `grid-auto-flow` 属性用于处理**隐式网格轨道**和**网格项的自动放置**。它们与 `grid-template-columns` 和 `grid-template-rows` 形成互补，后者用于定义**显式网格**。

### 核心概念

- **显式网格 (Explicit Grid):** 由 `grid-template-columns` 和 `grid-template-rows` 明确定义的网格线和轨道。
- **隐式网格 (Implicit Grid):** 当网格项被放置在显式网格之外时（例如，通过 `grid-column: 4 / 5` 将项目放在一个未定义的列上，或者自动放置算法创建了新的行/列），浏览器会自动创建这些额外的网格轨道。这些自动创建的轨道构成了隐式网格。

### 1. `grid-auto-columns` (隐式列的尺寸)

`grid-auto-columns` 属性用于指定**隐式创建的列**的尺寸。

- **作用对象:** 网格容器 (`grid-container`)
- **语法:** `grid-auto-columns: <track-size>+;` (可以是一个或多个尺寸值，形成一个重复模式)
- **默认值:** `auto` (意味着隐式列的大小会根据其内容自动调整)

- **何时会创建隐式列？**

  - 当一个网格项通过 `grid-column` 属性被放置到**显式网格之外的列**时。
  - 当 `grid-auto-flow` 设置为 `column` 且没有足够的显式列来放置所有网格项时。

- **值解释:** 与 `grid-template-columns` 类似，可以使用：

  - **长度单位:** `px`, `em`, `rem`, `vw`, `vh`, `%`
  - **弹性单位:** `fr`
  - **关键字:** `auto`, `min-content`, `max-content`
  - **函数:** `minmax()`, `fit-content()`

- **示例:**

  ```html
  <div class="grid-container auto-columns">
    <div class="item item-1">Item 1</div>
    <div class="item item-2">Item 2</div>
    <div class="item item-3">Item 3</div>
    <div class="item item-4">Item 4 (placed outside explicit grid)</div>
    <div class="item item-5">Item 5</div>
  </div>
  ```

  ```css
  .grid-container.auto-columns {
    display: grid;
    grid-template-columns: 100px 100px; /* 显式定义两列，每列 100px */
    grid-template-rows: 50px; /* 显式定义一行 */

    /* 隐式创建的列将是 150px 宽 */
    grid-auto-columns: 150px;
    grid-auto-flow: row; /* 默认值，先填满行 */

    width: 600px; /* 容器宽度 */
    border: 2px solid blue;
    gap: 5px;
  }

  .item {
    background-color: lightblue;
    border: 1px solid steelblue;
    padding: 5px;
  }

  .item-4 {
    /* 将 item-4 放置到第 4 列，而我们只定义了 2 列，因此第 3 和第 4 列是隐式创建的 */
    grid-column: 4;
    grid-row: 1;
  }
  ```

  在这个例子中，`item-4` 被放置在第 4 列。由于 `grid-template-columns` 只定义了 2 列，因此第 3 列和第 4 列是隐式创建的。它们的宽度将由 `grid-auto-columns: 150px;` 定义。

### 2. `grid-auto-rows` (隐式行的尺寸)

`grid-auto-rows` 属性用于指定**隐式创建的行**的尺寸。

- **作用对象:** 网格容器 (`grid-container`)
- **语法:** `grid-auto-rows: <track-size>+;` (可以是一个或多个尺寸值，形成一个重复模式)
- **默认值:** `auto`

- **何时会创建隐式行？**

  - 当一个网格项通过 `grid-row` 属性被放置到**显式网格之外的行**时。
  - 当 `grid-auto-flow` 设置为 `row`（默认）且没有足够的显式行来放置所有网格项时。

- **值解释:** 与 `grid-template-rows` 类似，可以使用：

  - **长度单位:** `px`, `em`, `rem`, `vw`, `vh`, `%`
  - **弹性单位:** `fr`
  - **关键字:** `auto`, `min-content`, `max-content`
  - **函数:** `minmax()`, `fit-content()`

- **示例:**

  ```html
  <div class="grid-container auto-rows">
    <div class="item item-1">Item 1</div>
    <div class="item item-2">Item 2</div>
    <div class="item item-3">Item 3</div>
    <div class="item item-4">Item 4 (forced to new row)</div>
    <div class="item item-5">Item 5</div>
    <div class="item item-6">Item 6</div>
  </div>
  ```

  ```css
  .grid-container.auto-rows {
    display: grid;
    grid-template-columns: repeat(3, 100px); /* 显式定义三列 */
    grid-template-rows: 50px; /* 显式定义一行 */

    /* 隐式创建的行将是 80px 高 */
    grid-auto-rows: 80px;
    grid-auto-flow: row; /* 默认值，先填满行 */

    border: 2px solid green;
    gap: 5px;
  }

  .item {
    background-color: lightgreen;
    border: 1px solid darkgreen;
    padding: 5px;
  }

  .item-4 {
    /* 将 item-4 放置到第 2 行，而我们只定义了 1 行，因此第 2 行是隐式创建的 */
    grid-row: 2;
    grid-column: 1;
  }
  ```

  在这个例子中，`item-4` 被放置在第 2 行。由于 `grid-template-rows` 只定义了 1 行，因此第 2 行是隐式创建的。它的高度将由 `grid-auto-rows: 80px;` 定义。即使没有显式指定 `grid-row`，如果自动放置的网格项超出了显式定义的行数，也会创建隐式行。

### 3. `grid-auto-flow` (自动放置算法)

`grid-auto-flow` 属性控制自动放置的网格项（那些没有通过 `grid-row` 或 `grid-column` 显式放置的项）如何填充网格。

- **作用对象:** 网格容器 (`grid-container`)
- **语法:** `grid-auto-flow: row | column | dense | row dense | column dense;`
- **默认值:** `row`

- **值解释:**

  - `row` (默认):

    - 自动放置的网格项会**先填充行**，然后在新的一行中继续填充。
    - 当一行填满时，会创建新的行（隐式行），其尺寸由 `grid-auto-rows` 控制。
    - 这就像书写文本一样，从左到右，从上到下。

  - `column`:

    - 自动放置的网格项会**先填充列**，然后在新的一列中继续填充。
    - 当一列填满时，会创建新的列（隐式列），其尺寸由 `grid-auto-columns` 控制。
    - 这就像在报纸上阅读多列文章一样，从上到下，从左到右。

  - `dense`:
    - 一个可选关键字，可以与 `row` 或 `column` 结合使用（例如 `row dense` 或 `column dense`）。
    - 当设置为 `dense` 时，自动放置算法会尝试填充**所有可用的空单元格**，即使这会导致网格项的视觉顺序与源文档中的顺序不一致。
    - 这有助于减小网格中的空白区域，但可能会牺牲内容的逻辑顺序。

- **示例 (`grid-auto-flow: row` - 默认):**

  ```html
  <div class="grid-container auto-flow-row">
    <div class="item item-1">1</div>
    <div class="item item-2">2</div>
    <div class="item item-3">3 (span 2 cols)</div>
    <div class="item item-4">4</div>
    <div class="item item-5">5</div>
    <div class="item item-6">6</div>
  </div>
  ```

  ```css
  .grid-container.auto-flow-row {
    display: grid;
    grid-template-columns: repeat(3, 100px); /* 显式定义 3 列 */
    grid-auto-rows: 50px; /* 隐式行高 */
    grid-auto-flow: row; /* 默认值，但明确写出 */
    border: 2px solid purple;
    gap: 5px;
  }
  .item {
    background-color: lightcoral;
    border: 1px solid firebrick;
    padding: 5px;
  }
  .item-3 {
    grid-column: span 2; /* item-3 跨两列 */
  }
  ```

  结果：Item 1, Item 2 放置在第一行。Item 3 跨越两列，占据了第一行的后两格。第一行只剩下一格空位。因为是 `row` 流，系统会跳过这个空位，在第二行从头开始放置 Item 4, Item 5。然后 Item 6 会被放置在第三行。

- **示例 (`grid-auto-flow: column`):**

  ```html
  <div class="grid-container auto-flow-column">
    <div class="item item-1">1</div>
    <div class="item item-2">2</div>
    <div class="item item-3">3 (span 2 rows)</div>
    <div class="item item-4">4</div>
    <div class="item item-5">5</div>
    <div class="item item-6">6</div>
  </div>
  ```

  ```css
  .grid-container.auto-flow-column {
    display: grid;
    grid-template-columns: repeat(2, 100px); /* 显式定义 2 列 */
    grid-auto-rows: 50px; /* 显式定义行高 */
    grid-auto-columns: 60px; /* 隐式列宽 */
    grid-auto-flow: column; /* 关键：先填充列 */
    height: 200px; /* 容器有足够的垂直空间来观察多行 */
    border: 2px solid orange;
    gap: 5px;
  }
  .item {
    background-color: lightgoldenrodyellow;
    border: 1px solid goldenrod;
    padding: 5px;
  }
  .item-3 {
    grid-row: span 2; /* item-3 跨两行 */
  }
  ```

  结果：Item 1, Item 2 放置在第一列。Item 3 跨越两行，占据了第一列的后两格。第一列只剩下一格空位。因为是 `column` 流，系统会跳过这个空位，在第二列从头开始放置 Item 4, Item 5。然后 Item 6 会被放置在第三列。

- **示例 (`grid-auto-flow: dense`):**

  ```html
  <div class="grid-container auto-flow-dense">
    <div class="item item-1">Item 1</div>
    <div class="item item-2">Item 2</div>
    <div class="item item-3 long-item">Item 3 (longer)</div>
    <div class="item item-4">Item 4</div>
    <div class="item item-5">Item 5</div>
  </div>
  ```

  ```css
  .grid-container.auto-flow-dense {
    display: grid;
    grid-template-columns: repeat(3, 100px);
    grid-auto-rows: 50px;
    grid-auto-flow: row dense; /* 尝试填充空白区域 */
    border: 2px solid teal;
    gap: 5px;
  }
  .item {
    background-color: lightcyan;
    border: 1px solid darkcyan;
    padding: 5px;
  }
  .long-item {
    /* item-3 跨两列，会在中间留下空位 */
    grid-column: span 2;
  }
  ```

  结果：Item 1 放置在第一格。Item 2 放置在第二格。Item 3 跨两列，放置在第三和第四格。**这时，第一行第二格留出了一个空位。** 如果没有 `dense`，Item 4 会从第二行第一格开始放置。有了 `dense`，系统会回溯，尝试将 Item 4 放置在第一行留出的空位（如果它能放得下），然后 Item 5 会继续在第二行放置。这可能会导致视觉顺序与 DOM 顺序不同。

### 总结

- `grid-auto-columns` 和 `grid-auto-rows` 用于定义**隐式网格轨道**的尺寸。它们是当你没有明确指定网格项的放置位置，或者网格项被放置到显式网格之外时，浏览器用来创建新轨道的方式。
- `grid-auto-flow` 控制**自动放置算法**如何填充网格。它决定了是先按行填充还是先按列填充，以及是否应该尝试填充所有可能的空位（`dense`）。

这三个属性在你需要创建动态的、内容驱动的网格布局时非常有用，它们允许你定义一个基本结构，同时让浏览器智能地处理超出预设的网格项。
