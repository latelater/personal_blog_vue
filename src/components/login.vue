
<template>
    <div id="Test">
      <p>{{ message }}</p>
      <button v-on:click="reverseMessage">逆转消息</button>
      <div>
        <group>
          <cell title="title" value="value"></cell>
        </group>
      </div>

    </div>
</template>
  
<script>
import { Group, Cell } from 'vux'
export default {
  name: 'Test',
  data() {
    return {
      message: 'Hello Vue.js!',
      title: "this is a title",
      value: "this is a value"
    };
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('');
    }
  },
  components: {
    Group,
    Cell
  }
}
</script>
  
<style>
    
</style>>
