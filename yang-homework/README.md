# YangMingQiang-homework

> homework project by Vue.js

## Build Setup

``` bash
# install dependencies
yarn

# serve with hot reload at localhost:8080
yarn dev

# run all tests
yarn test
```

## Project trees

```
├──build --webpack配置
├──config --项目环境配置
├──dist --打包完的文件目录
├──node_modules --第三方模块
├──src
│ ├──assets
| 	├──DroidSansFallback.ttf --思源黑体字体图标库
| 	├──font.css --引入思源黑体
| ├──components --业务组件
| ├──icons --svg格式icon图标组件抽离出来，注册为全局组件
| ├──router --路由
| ├──styles --样式
│ | ├──_variables.scss --scss全局变量
│ | ├──app.scss --集中引入自定义scss(配合sass-resources-loader全局注册变量)
│ | ├──global.scss --集中引入自定义属性，在main.js中引入
| ├──view --页面组件
| ├──app.vue --根组件，在此配置版心最小为1024px
| ├──main.js --入口js文件
├──static
| ├──initdata.txt --项目初始化数据
├──test --组件的单元测试 	
```

