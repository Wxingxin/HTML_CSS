# 最简单的echarts
```html
<!DOCTYPE html>
<html lang="zh">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>最简单的 ECharts 柱状图</title>
    <script src="https://cdn.jsdelivr.net/npm/echarts@5.4.3/dist/echarts.min.js"></script>
    <style>
      #main {
        width: 600px; /* 设置图表容器的宽度 */
        height: 400px; /* 设置图表容器的高度 */
      }
    </style>
  </head>
  <body>
    <div id="main"></div>
    <script>
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById("main"));

      // 指定图表的配置项和数据
      var option = {
        title: {
          text: "简单柱状图", // 图表标题
        },
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"], // X 轴数据
        },
        yAxis: {}, // Y 轴，使用默认配置
        series: [
          {
            name: "销量", // 系列名称，会在 tooltip 和 legend 中显示
            type: "bar", // 图表类型为柱状图
            data: [5, 20, 36, 10, 10, 20], // 数据
          },
        ],
      };

      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    </script>
  </body>
</html>
```

### 一、图表基础配置 (Option Root Level)

`option` 是 ECharts 配置的根对象，所有图表元素都通过这个对象来定义。

1.  **`title` (标题)**

    - **作用：** 图表的标题和副标题。
    - **常用属性：**
      - `text`: 主标题文本。
      - `subtext`: 副标题文本。
      - `left`, `top`, `right`, `bottom`: 标题的位置（可以是 `'left'`, `'center'`, `'right'` 或具体的像素值百分比）。
      - `textStyle`: 主标题文本样式（如 `color`, `fontSize`, `fontWeight`）。
      - `subtextStyle`: 副标题文本样式。
      - `link`: 点击title要跳转到哪里。
    - **示例：**
      ```javascript
      title: {
        text: '我的图表',
        subtext: '数据来源：某某公司',
        left: 'center',
        textStyle: {
          color: '#333',
          fontSize: 18
        }，
        link: 'http://www.baidu.com'
      }
      ```

2.  **`tooltip` (提示框)**

    - **作用：** 鼠标悬停在图表元素上时显示的数据提示框。
    - **常用属性：**
      - `trigger`: 触发类型。
        - `'item'`: 数据项图形触发（如饼图、散点图）。
        - `'axis'`: 坐标轴触发（如柱状图、折线图）。
        - `'none'`: 不触发。
      - `formatter`: 提示框内容的格式化函数或字符串模板。
      - `axisPointer`: 坐标轴指示器配置项。
        - `type`: 指示器类型，如 `'line'` (直线指示器), `'shadow'` (阴影指示器)。
      - `confine`: 是否将 tooltip 框限制在图表的区域内。
    - **示例：**
      ```javascript
      tooltip: {
        trigger: 'axis',
        formatter: '{b} <br/> {a}: {c} 件', // {b}表示类目名，{a}表示系列名，{c}表示数据值
        axisPointer: {
          type: 'shadow'
        }
      }
      ```

3.  **`legend` (图例)**

    - **作用：** 用于筛选/高亮显示不同数据系列。
    - **常用属性：**
      - `data`: 图例的数据，通常与 `series` 中的 `name` 对应。
      - `orient`: 图例布局方向，`'horizontal'` (水平) 或 `'vertical'` (垂直)。
      - `left`, `top`, `right`, `bottom`: 图例的位置。
      - `selectedMode`: 图例的选择模式，`'single'` (单选) 或 `'multiple'` (多选)。
    - **示例：**
      ```javascript
      legend: {
        data: ['销量', '利润'],
        top: 'bottom',
        orient: 'horizontal'
      }
      ```

4.  **`grid` (直角坐标系网格)**

    - **作用：** 直角坐标系内绘图网格的区域。一个 ECharts 实例中可以有多个 grid 组件。
    - **常用属性：**
      - `left`, `top`, `right`, `bottom`: 控制网格区域与容器的距离。
      - `containLabel`: 是否包含坐标轴的刻度标签。
    - **示例：**
      ```javascript
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true // 包含坐标轴标签
      }
      ```

5.  **`color` (调色盘)**
    - **作用：** 全局的颜色列表，系列会自动从这里选择颜色。
    - **示例：**
      ```javascript
      color: ["#c23531", "#2f4554", "#61a0a8", "#d48265", "#91c7ae"];
      ```

---

### 二、坐标轴配置 (Axis)

对于直角坐标系图表（如柱状图、折线图、散点图），X 轴和 Y 轴是必不可少的。

1.  **`xAxis` (X 轴)**

    - **作用：** 直角坐标系中的 X 轴。
    - **常用属性：**
      - `type`: 坐标轴类型。
        - `'category'`: 类目轴，适用于离散数据。
        - `'value'`: 数值轴，适用于连续数据。
        - `'time'`: 时间轴。
        - `'log'`: 对数轴。
      - `data`: 当 `type` 为 `'category'` 时，X 轴的类目数据。
      - `name`: 坐标轴名称。
      - `nameLocation`: 坐标轴名称显示位置，如 `'start'`, `'middle'`, `'end'`。
      - `axisLabel`: 刻度标签的配置，如 `formatter` (格式化), `rotate` (旋转角度)。
      - `axisTick`: 刻度线配置。
      - `axisLine`: 坐标轴线配置。
      - `splitLine`: 分隔线配置（网格线）。
    - **示例：**
      ```javascript
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        axisLabel: {
          rotate: 45 // 标签旋转45度
        }
      }
      ```

2.  **`yAxis` (Y 轴)**
    - **作用：** 直角坐标系中的 Y 轴。
    - **常用属性：** 同 `xAxis`，但 `type` 通常为 `'value'`。
    - **示例：**
      ```javascript
      yAxis: {
        type: 'value',
        name: '数值',
        min: 0, // 最小值
        max: 100 // 最大值
      }
      ```

---

### 三、系列配置 (Series)

`series` 是 ECharts 配置中最核心的部分，定义了图表的类型、数据以及如何渲染这些数据。它是一个数组，表示可以有多个数据系列。

1.  **`series` (系列)**

    - **作用：** 图表的数据系列列表。每个数组项都是一个数据系列。
    - **常用属性（通用）：**
      - `name`: 系列名称，用于 `tooltip` 和 `legend` 中。
      - `type`: **图表类型**，如 `'bar'` (柱状图), `'line'` (折线图), `'pie'` (饼图), `'scatter'` (散点图), `'map'` (地图) 等。
      - `data`: 系列的数据，格式取决于图表类型和轴类型。
      - `itemStyle`: 图形样式（如柱条、折线、饼块等），可以设置 `color`, `borderColor`, `borderWidth` 等。
      - `label`: 图形上的文本标签（如柱条上的数值、饼图上的百分比）。
        - `show`: 是否显示标签。
        - `position`: 标签位置，如 `'top'`, `'inside'`, `'outside'`。
        - `formatter`: 标签内容格式化函数或字符串模板。
      - `emphasis`: 鼠标悬停时的样式。
      - `z`: Z 轴层叠。

2.  **特定图表类型的 `series` 属性：**

    - **柱状图 (`type: 'bar'`)：**
      - `barWidth`: 柱条宽度。
      - `barGap`: 同系列不同柱子之间的间隔。
      - `barCategoryGap`: 不同类目之间的间隔。
      - `stack`: 用于堆叠柱状图，设置相同的值可以堆叠。
    - **折线图 (`type: 'line'`)：**
      - `smooth`: 是否平滑曲线。
      - `symbol`: 标记的图形（如 `'circle'`, `'rect'`, `'triangle'`, `'none'`）。
      - `symbolSize`: 标记的大小。
      - `areaStyle`: 区域填充样式（用于面积图）。
    - **饼图 (`type: 'pie'`)：**

      - `radius`: 饼图的半径，可以是数组 `[内半径, 外半径]` (环形图)。
      - `center`: 饼图的圆心坐标，数组 `[x, y]`。
      - `roseType`: 玫瑰图，`'radius'` 或 `'area'`。
      - `labelLine`: 标签的引导线样式。

    - **示例 (柱状图 `series`)：**
      ```javascript
      series: [
        {
          name: "产品A",
          type: "bar",
          data: [120, 200, 150, 80, 70, 110, 130],
          itemStyle: {
            color: "#91CC75",
          },
          label: {
            show: true,
            position: "top",
          },
        },
        {
          name: "产品B",
          type: "bar",
          data: [100, 150, 120, 90, 80, 100, 140],
          stack: "total", // 堆叠柱状图
        },
      ];
      ```

---

### 四、组件配置 (Components)

除了上述核心配置，ECharts 还提供了许多功能性组件。

1.  **`dataZoom` (数据区域缩放)**

    - **作用：** 用于缩放或平移数据区域，适用于大数据量。
    - **常用属性：**
      - `type`: `'inside'` (内置型) 或 `'slider'` (滑动条型)。
      - `start`, `end`: 数据窗口的起始和结束百分比。
      - `xAxisIndex`, `yAxisIndex`: 控制哪个轴的数据缩放。
    - **示例：**
      ```javascript
      dataZoom: [
        {
          type: "slider", // 滑动条型
          xAxisIndex: 0, // 控制第一个 xAxis
          start: 0, // 初始显示0%
          end: 50, // 初始显示50%
        },
      ];
      ```

2.  **`toolbox` (工具栏)**

    - **作用：** 提供一些工具按钮，如数据视图、数据下载、图片保存、区域缩放、重置等。
    - **常用属性：**
      - `show`: 是否显示工具栏。
      - `feature`: 各个工具的配置项。
        - `dataView`: 数据视图。
        - `saveAsImage`: 保存为图片。
        - `restore`: 重置。
        - `dataZoom`: 区域缩放。
    - **示例：**
      ```javascript
      toolbox: {
        show: true,
        feature: {
          dataView: { readOnly: false },
          magicType: { type: ['line', 'bar'] }, // 切换图表类型
          restore: {},
          saveAsImage: {}
        }
      }
      ```

3.  **`visualMap` (视觉映射)**
    - **作用：** 将数据映射到视觉元素（如颜色、大小、透明度），常用于热力图、散点图、地图等。
    - **常用属性：**
      - `type`: `'continuous'` (连续型) 或 `'piecewise'` (分段型)。
      - `min`, `max`: 映射的最小值和最大值。
      - `inRange`: 定义数据在 `min` 到 `max` 范围内如何映射到视觉元素。
    - **示例 (连续型)：**
      ```javascript
      visualMap: {
        min: 0,
        max: 100,
        inRange: {
          color: ['#E0FFFF', '#006edd'] // 颜色渐变
        }
      }
      ```

---

### 五、动画与事件

1.  **`animation` (动画)**

    - ECharts 默认开启动画。
    - `animation`: 是否开启动画。
    - `animationDuration`: 初始动画的时长。
    - `animationEasing`: 初始动画的缓动效果。

2.  **事件 (Events)**
    - `myChart.on('click', function (params) { ... });`：监听点击事件。
    - `params` 对象包含了被点击元素的详细信息。

---
