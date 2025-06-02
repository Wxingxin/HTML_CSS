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
