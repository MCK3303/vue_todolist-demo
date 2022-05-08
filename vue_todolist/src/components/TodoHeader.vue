<template>
    <div class="todo-header">
        <input type="text" placeholder="请输入你的任务名称，按回车键确认" @keyup.enter="add"/>
    </div>
</template>

<script>
// nanoid是分别暴露 导入方式如下↓
import {nanoid} from 'nanoid'
export default {
    name:'TodoHeader',
    //接收来自父组件的addTodo方法
    // props:['addTodo'],
    methods: {
      //传入事件对象e
      add(e){
        //把文本框输入的内容存进定义的todoObj变量
        const todoObj = {id:nanoid(),title:e.target.value,done:false};
        // ①把todoObj变量作为参数传给App组件的addTodo方法
        // this.addTodo(todoObj);
        
        //②通过自定义事件执行addTodo 并传参todoObj
        this.$emit('addTodo',todoObj);
        //清空文本框
        e.target.value = '';
      }
    },
   
}
</script>

<style scoped>
/*header*/
.todo-header input {
  width: 560px;
  height: 28px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 7px;
}

.todo-header input:focus {
  outline: none;
  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
}

</style>