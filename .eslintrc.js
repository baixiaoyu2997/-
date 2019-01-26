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
    'prettier/prettier': [
      'error',
      { semi: false, singleQuote: true, printWidth: 120 }
    ],
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'any'
        }
      }
    ],
    'vue/name-property-casing': 'off', // eslint-plugin-vue规则去这查看https://vuejs.github.io/eslint-plugin-vue/rules/
    'vue/attribute-hyphenation': 'off',
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
