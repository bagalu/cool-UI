// 验证 git commit 提交是否规范的代码
// 运行平台是node
/**
 * 如何实现验证commit规范
 * 1.读取git commit 提交的内容
 * 2.编写验证关键字的正则
 * 3.不能通过正则验证的,提示commit提交不规范,让commit失败
 * 注意:本脚本应该在git commit完成之前执行
 * 
 * 问题: 什么时候运行这个脚本?
 */


// 1.获取git的配置参数,为了获取git commit的提交
const msgPath = process.env.HUSKY_GIT_PARAMS
// 作用: node工具提示信息设置样式
// 1.5 读取git commit 的提交信息
const msg = require('fs')
.readFileSync(msgPath, 'utf-8')
.trim()
// 2.验证是否有关键字
const commitRE = /^(feat|fix|docs|style|refactor|perf|test|workflow|build|ci|chore|release|workflow)(\(.+\))?: .{1,50}/

// 3.如果commit msg 中没有关键字
if (!commitRE.test(msg)) {
    console.log(msg)
    console.error(
      `  ${chalk.bgRed.white(' ERROR ')} ${chalk.red(
        `invalid commit message format.`
      )}\n\n` +
        chalk.red(
          `  Proper commit message format is required for automated changelog generation. Examples:\n\n`
        ) +
        `    ${chalk.green(`feat(compiler): add 'comments' option`)}\n` +
        `    ${chalk.green(
          `fix(v-model): handle events on blur (close #28)`
        )}\n\n` +
        chalk.red(
          `  See https://github.com/vuejs/vue-next/blob/master/.github/commit-convention.md for more details.\n`
        )
    )
    // 结束进程, git commit 提交失败
    process.exit(1)
}