# vue-look-images

> A Vue.js project

## 安装

``` js
# install dependencies
npm install vue-look-images -S

# serve with hot reload at localhost:8080
npm run dev

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
	:img-size="['30px', '30px']"
	:default-color="red">
</vue-look-images>
```
