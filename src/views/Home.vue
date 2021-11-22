<template>
  <div class="home">
    <TodoList />
    <Loading />
  </div>
</template>

<script>
// @ is an alias to /src

import TodoList from '@/components/TodoList.vue'
import Loading from '@/components/Loading.vue'

export default {
  name: 'Home',

  components: {
    TodoList,
    Loading,
  },

  created() {
    let session_id = localStorage.getItem('user')
    if (!session_id) {
      this.$router.push({ name: 'Auth' })
    }
  },
}
</script>

<style scoped></style>
