<template>
  <ul class="todo-main">
      <!-- 将遍历得到的todoObj作为msg传给TodoItem -->
      <!-- props从App接收到的方法也传给TodoItem -->
      <TodoItem v-for="todoObj in todos" 
      :key="todoObj.id" 
      :msg="todoObj" 
      :cd="cd"
      :delItem="delItem"

      />
  </ul>
</template>

<script>
import TodoItem from './TodoItem.vue'
export default {
    name:'TodoMain',
    components:{
      // 把ul里的li拆为TodoMain的子组件
      TodoItem
    },
    data() {
      return {
        
      }
    },
    props:['todos','cd','delItem']
}
</script>

<style scoped>
/*main*/
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>