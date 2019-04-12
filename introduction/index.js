// html内にて `{{ key }}`で`data`内の情報を参照できる
const app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
});

// v-bind:<attributename>="key"をタグ内で使用することで、
// 属性値に`data`内の情報をバインドできる
const app2 = new Vue({
  el:'#app-2',
  data: {
    message: 'This is message.'
  }
});

// v-if="key"で`data`内のkeyの値をboolとして評価してtrueの時は
// 当該タグ表示、そうでない時は非表示と切り替えることができる。
const app3 = new Vue({
  el:'#app-3',
  data: {
    seen: true
  }
});

// v-for="item in items"で当該タグを`data.items`の要素数分だけ繰り返すことができる。
//　itemsは配列
const app4 = new Vue({
  el: '#app-4',
  data: {
    todos: [
      { text: "message 1"},
      { text: "message 2"},
      { text: "message 3"},
      { text: "message 4"},
    ]
  }
});

// v-on:click="functionName"で当該要素を押した際に処理を発火できる
const app5 = new Vue({
  el: "#app-5",
  data: {
    message: "This is Message."
  },
  methods: {
    reverseMessage: function() {
      this.message = this.message.split("").reverse().join("");
    }
  }
});

// two-way binding
const app6 = new Vue({
  el: "#app-6",
  data: {
    message: "Hello Vue!"
  }
});

// custom component
Vue.component("todo-item", {
  props: ["todo"],
  template: "<li>{{ todo.text }}</li>"
});

const app7 = new Vue({
  el: "#app-7",
  data: {
    items: [
      { id: 0, text: "grocery 0"},
      { id: 1, text: "grocery 1"},
      { id: 2, text: "grocery 2"},
    ]
  }
});