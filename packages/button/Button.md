## button封装理由

- 1.首先 增删改查，保存，提交 禁止按钮颜色特点，与组件库样式不同，所以重构
- 2.大小设置UI与element-ui不一样
- 3.禁止点击ui与element-ui不一样
- 4.功能：有身份权限的限制

## 实现方式
> type size disabled 重新编写样式
> isOther 是否有权限，有就显示 无不显示