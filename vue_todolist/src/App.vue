<template>
  <div id="app">
    <div id="root">
      <div class="todo-container">
        <div class="todo-wrap">
          <TodoHeader @addTodo="addTodo"/>
          <TodoMain :todos="todos" 
          :cd="changeDone"
          :delItem="delItem"
          />
          <TodoFooter 
          :todos="todos"
          :selcAll ="selcAll"
          :cleanTodo ="cleanItem"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue'
import TodoMain from './components/TodoMain.vue'
import TodoFooter from './components/TodoFooter.vue'

export default {
  name: 'App',
  components: {
    TodoHeader,
    TodoMain,
    TodoFooter
  },
  methods: {
    addTodo(rcv){
      console.log('接收到数据',rcv);
      //把数据添加进todos数组
      this.todos.unshift(rcv);
    },
    changeDone(id){
      //遍历todos，括号中的todo是遍历得到的每一个数据
      this.todos.forEach((todo)=>{
        if(todo.id===id){
          todo.done = !todo.done;
        }
      })
    },
    delItem(id,name){
      //confirm点击确定为true 执行删除
      if(confirm(`确定删除`+name+`吗?`)){
        //对todos数组进行过滤 返回一个没有该id元素的数组
        this.todos = this.todos.filter((todo)=>{
        return todo.id !== id
      })}
    },
    //清空任务列表
    cleanItem(){
      if(confirm(`确定清除所有已完成任务吗？`)){
        this.todos = this.todos.filter((todo)=>{
          return todo.done != true;
        })
      }
    },
    //当点击全选框时 把所有的项勾上
    selcAll(event){
      //遍历todos数组 把当前全选框的勾选状态全都给到todos.done属性
      this.todos.forEach((item)=>{
        item.done = event.target.checked;
      })
      // this.todos.done = event.target.checked;
    }
  },
  data() {
    return {
      //当本地存储为空(get不到Item) 则初始化todos为空数组↓
      //如果有数据 则从本地存储中获取 key为todos的数据
      todos:JSON.parse(localStorage.getItem('todos')) || []
    }
  },
  watch:{
    todos:{
      //开启深度监视 当todos被改变时 执行handler()
      deep:true,
      handler(value){
        console.log(value);
        //对改变后的数据value进行处理 并存入本地存储
        value = JSON.stringify(value);
        localStorage.setItem("todos",value);
      }
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
/*base 总样式*/
body {
  background: #fff;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn:focus {
  outline: none;
}

.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
