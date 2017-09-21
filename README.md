# vue-look-images

> A Vue.js project

## 安装

``` bash
# install dependencies
npm install vue-look-images -S
```

## 使用

```js
//ES6
import vueLookImages from 'vue-look-images.js'
// require
var vueLookImages = require('LookImages')

Vue.use(vueLookImages)

// 或者直接使用script导入
<script src="./node_modules/vue/dist/vue-look-images.js"></script>

// 作为组件的方式使用
<vue-look-images></vue-look-images>
```

### 配置

```html
<vue-look-images
	:url-arr="array"
	:show-one="true"
	:align-row="true"
	:img-size="[30, 30]"
	:default-color="#15A6BB">
</vue-look-images>
```

### Props

|    name    |    Description   |   type   |default|
| -----------------  | ---------------- | :--------: | :----------: |
| url-arr       | 图片地址 |Array| []
| show-one        | 只展示第一张图片 |Boolean | false
| align-row        | 横排展示 |Boolean | true
| img-size        | 展示图片大小 |Array | [30, 30]
| default-color        | 激活图片边框颜色 |String | #15A6BB