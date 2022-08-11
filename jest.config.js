// jest 测试框架的配置文件
// 生成方式: 1.输入jest-cli初始化可以自动生成 2.自己写配置
// 运行条件:输入jest命令运行,或者执行测试有关命令
module.exports = {
    // 如果测试是node环境下js代码,修改配置为node
    testEnvironment: 'jsdom', // 默认JSdom
    roots: [
      '<rootDir>/src',
      '<rootDir>/packages',
    ], // 
    transform: {
      '^.+\\.vue$': 'vue-jest', // vue单文件
      '^.+\\js$': 'babel-jest' // esm最新语法 import
    },
    moduleFileExtensions: ['vue', 'js', 'json', 'jsx', 'ts', 'tsx', 'node'],
    testMatch: ['**/__tests__/**/*.spec.js'],
    // 别名
    moduleNameMapper: {
      '^element-ui(.*)$': '<rootDir>$1',
      '^main(.*)$': '<rootDir>/src$1'
    }
  }