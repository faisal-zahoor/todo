<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <TodoList msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import { getAuth } from 'firebase/auth'

import TodoList from '@/components/TodoList.vue'

export default {
  name: 'Home',
  components: {
    TodoList,
  },
  created() {
    const auth = getAuth()
    if (!auth.currentUser) {
      this.$router.push({ name: 'Auth' })
    }
  },
}
</script>
