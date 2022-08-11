# 导入excal并用表格方式展示

## 原因

> 在项目中有需要导入excal表格并使用表格展示的效果,同时提供在线编辑表格
> 支持上传excal或者上传表格中数据
> 静态资源上传:用的是一个服务器 ,

## 实现思路
- 1.创建input获取文件对象,并让input type=file
- 2.自定义[导入按钮]绑定点击事件,在事件函数内部通过this.$refs 获取input并触发click
事件
- 3.读取第一个文件对象
- 4.监听fileReader实例的事件,并使用excal插件读取文件内容,获取表头和标题数据,并进行数据重组
- 5.最后渲染到table上
- 6.外界:提供beforeUpload onsuccess onshowsuccess
- 7.点击上传:执行发送上传请求,同时触发onsuccess钩子
- beforeUpload展示excal数据之前的钩子,onshowsuccess 在渲染表格成功执行的钩子

> 三个钩子使用prop接收
