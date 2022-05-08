<template>
   <li>
        <label>
        <!-- checked绑定msg中的done属性，点击事件把msg中的id作为参数传入cd方法 -->
        <input type="checkbox" :checked='msg.done' @click="cd(msg.id)"/>
        <span>{{msg.title}}</span>
        </label>
        <!-- 点击事件 把msg的参数传过去给App方法的delItem -->
        <button class="btn btn-danger" @click="delItem(msg.id,msg.title)" >删除</button>
    </li>
</template>

<script>
export default {
    name:'TodoItem',
    //接收到的msg就是todoObj
    //cd,delItem是来自App的操作方法，在这里主要传递参数过去
    props:['msg','cd','delItem']
}
</script>

<style scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}

li:hover{
  background: #ddd;
}
li:hover>button{
  display:block;
}


</style>