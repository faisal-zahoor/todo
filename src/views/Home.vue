<template>
  <div class="home">
    <TodoList />
  </div>
</template>

<script>
// @ is an alias to /src

import TodoList from '@/components/TodoList.vue'

export default {
  name: 'Home',
  components: {
    TodoList,
  },
  created() {
    let session_id = localStorage.getItem('user')
    if (!session_id) {
      this.$router.push({ name: 'Auth' })
    }
  },
}
</script>

<style scoped>
</style>
