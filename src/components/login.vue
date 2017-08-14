
<template>
  <div id="Test">
    <div>
      <label for="username">username: </label>
      <input name="username" v-model="username">
    </div>
    <div>
      <label for="password">password: </label>
      <input name="password" v-model="password">
    </div>
    <button name="btn" value="summit">summit</button>
  </div>
</template>
  
<script>
export default {
  name: 'Test',
  data() {
    return {
      username: "username",
      password: "password"
    };
  },
  methods: {

  },
  components: {

  }
}
</script>
  
<style>
    
</style>>
