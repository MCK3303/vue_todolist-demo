<template>
  <div>
    <!-- 当total为0(即false)时 不显示该组件-->
    <div class="todo-footer" v-show="total">
          <label>
            <input type="checkbox"  :checked="isAll" @change="selcAll"/>
          </label>
          <span>
            <span>已完成{{doneTotal}}</span> / 全部{{total}}
          </span>
          <button class="btn btn-danger" @click="cleanTodo">清除已完成任务</button>
    </div>
    <span v-show="!total">目前没有任务了喔~~~</span>
  </div>
</template>

<script>
export default {
    name:'TodoFooter',
    //接收父组件传来的数据todos
    props:['todos','selcAll','cleanTodo'],
    computed:{
      total(){
        return this.todos.length
      },
      
      //对数组todos使用数组操作方法reduce() 计算'已完成'的数量
      doneTotal(){
        return this.todos.reduce((pre,current)=>{
          //如果当前值的done为true 则+1 否则+0
          return pre+(current.done ? 1:0);
        },0);
      },
      isAll(){
        //当todo完成数等于总数量时 返回true 打勾✔
        return this.doneTotal === this.total;       
      }
    }
}
</script>

<style scoped>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>