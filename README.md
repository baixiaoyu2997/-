# 前端vue环境搭建
## 简介
1. vue代码中template、script代码按照eslint规范提示报错，style部分由stylelint提示报错
2. 格式化时自动修复（默认按键shift+alt+f）
3. 支持提交代码时进行校验，如果有报错不能通过提交

## 安装vscode插件
- vetur（vue代码格式化）
- eslint（js代码检查）
- prettier（代码格式化）
- stylelint（css/less/scss校验）
  
>eslint和prettier有重叠部分，eslint更侧重于代码质量，prettier更侧重与代码格式

## vscode 工作空间设置
> 文件->首选项->设置->工作区设置->点击右上角的花括号图标,覆盖设置
```
{
  "vetur.format.defaultFormatter.html": "none",
  "vetur.format.defaultFormatter.css": "none",
  "vetur.format.defaultFormatter.js": "none",
  "vetur.format.defaultFormatter.less": "none",
  "vetur.format.defaultFormatter.postcss": "none",
  "vetur.format.defaultFormatter.scss": "none",
  "vetur.format.defaultFormatter.stylus": "none",
  "vetur.format.defaultFormatter.ts": "none",
  "vetur.validation.template": false,
  "vetur.validation.style": false,
  "eslint.autoFixOnSave": false, // 取消保存时自动修复
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    {
      "language": "vue",
      "autoFix": false
    }
  ],
  "prettier.disableLanguages": [],
  "prettier.eslintIntegration": true,
  "scss.validate": false
}

```

## 创建项目
1. 创建项目
   + `vue create projectname`
   + 选择Manually select features
   + 用空格勾选Babel、CSS Pre-processors、Linter/Formatter,回车
   + Sass/SCSS
   + ESLint with error prevention only
   + Lint on save
   + In dedicated config files
   + 选择是否以此配置当作以后的默认设置，选N
>tips: 需要vue-cli3,编写此文档时vue-cli版本3.3.0

1. 安装npm依赖包  
`npm install --save-dev eslint-config-prettier eslint-config-standard eslint-plugin-import eslint-plugin-node eslint-plugin-prettier eslint-plugin-promise eslint-plugin-standard lint-staged prettier stylelint stylelint-config-recommended-scss stylelint-scss`
2. 安装完毕后，package.json文件应该如下所示

```json
{
  "name": "lint",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "serve": "vue-cli-service serve",
    "build": "vue-cli-service build",
    "lint": "vue-cli-service lint --no-fix",
    "lint:fix": "vue-cli-service lint"
  },
  "gitHooks": {  // @vue/cli-service自动安装yorkie(fork自husky)
    "pre-commit": "lint-staged" // 配置提交前校验
  },
  "lint-staged": {
    "*.{js,vue}": "eslint",
    "*.{html,vue,css,sass,scss}": "stylelint"
  },
  "dependencies": {
    "vue": "^2.5.21"
  },
  "devDependencies": {
    "@vue/cli-plugin-babel": "^3.3.0",
    "@vue/cli-plugin-eslint": "^3.3.0",
    "@vue/cli-service": "^3.3.0",
    "babel-eslint": "^10.0.1",
    "eslint": "^5.12.0",
    "eslint-config-prettier": "^3.5.0",
    "eslint-config-standard": "^12.0.0",
    "eslint-plugin-import": "^2.14.0",
    "eslint-plugin-node": "^8.0.1",
    "eslint-plugin-prettier": "^3.0.1",
    "eslint-plugin-promise": "^4.0.1",
    "eslint-plugin-standard": "^4.0.0",
    "eslint-plugin-vue": "^5.0.0-beta.6",
    "lint-staged": "^8.1.0",
    "node-sass": "^4.9.0",
    "prettier": "^1.15.3",
    "sass-loader": "^7.0.1",
    "stylelint": "^9.10.0",
    "stylelint-config-recommended-scss": "^3.2.0",
    "stylelint-scss": "^3.5.1",
    "vue-template-compiler": "^2.5.21"
  }
}


```

## .eslintrc.js
项目根目录创建`.eslintrc.js`文件:
```js
module.exports = {
  root: true, // 此项是用来告诉eslint找当前配置文件不能往父级查找
  extends: [
    'standard',
    'plugin:vue/recommended',
    'prettier',
    'prettier/standard',
    'prettier/vue'
  ],
  globals: {
    // 这里填入你的项目需要的全局变量
    // 这里值为 false 表示这个全局变量不允许被重新赋值，比如：
    //
    // Vue: false
  },
  // 此项是用来提供插件的，插件名称省略了eslint-plugin-*
  plugins: ['standard', 'vue', 'prettier'],
  // 这里填入你的项目需要的个性化配置
  rules: {
    'prettier/prettier': ['error', { semi: false, singleQuote: true,printWidth:120 }],
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'any'
        }
      }
    ],
    'vue/name-property-casing': 'off',
    'vue/attribute-hyphenation':'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  },
  // 此项是用来指定javaScript语言类型和风格
  parserOptions: {
    sourceType: 'module', // sourceType用来指定js导入的方式，默认是script，如果代码是在ECMASCRIPT中的模块使用module
    ecmaFeatures: {
      jsx: true
    }
  },
  // 此项指定环境的全局变量，使用 env 关键字指定你想启用的环境，并设置它们为 true
  env: {
    es6: true,
    node: true
  }
}

```
## .stylelintrc
```
{
  "extends": "stylelint-config-recommended-scss"
}

```


## 命令行指令
1. `npm run serve` 在线运行
1. `npm run build` 打包命令
1. `npm run lint` 用eslint检查所有代码错误
1. `npm run lint:fix` 修复所有可fix的eslint错误
