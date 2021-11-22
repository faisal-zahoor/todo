<template>
  <div class="min-h-screen w-full flex justify-center font-sans bg-grey">
    <div class="bg-white rounded shadow-md p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
      <div class="mb-4">
        <h5></h5>
        <h1 class="mb-8 text-3xl text-center">Todo List</h1>

        <div class="flex mt-4">
          <input
            class="
              shadow
              appearance-none
              border
              rounded
              w-full
              py-2
              px-3
              mr-4
              text-grey-darker
            "
            placeholder="Add Todo"
          />
          <button
            class="
              flex-no-shrink
              p-2
              border-2
              rounded
              text-green-500
              border-green-500
              hover:text-white hover:bg-green-500
            "
          >
            Add
          </button>
        </div>
      </div>
      <hr class="mb-5" />
      <div>
        <div class="flex mb-4 items-center">
          <p class="w-full text-grey-darkest">
            Add another component to Tailwind Components
          </p>
          <button
            class="
              flex-no-shrink
              p-2
              ml-4
              mr-2
              border-2
              rounded
              hover:text-white
              text-green-500
              border-green-500
              hover:bg-green-500
            "
          >
            Done
          </button>
          <button
            class="
              flex-no-shrink
              p-2
              ml-2
              border-2
              rounded
              text-red-500
              border-red-500
              hover:text-white hover:bg-red-500
            "
          >
            Remove
          </button>
        </div>
        <hr class="mb-4" />
      </div>
    </div>
  </div>
</template>

<script>
import firbase from '../firebase'
import { collection } from 'firebase/firestore'

export default {
  name: 'TodoList',

  created() {
    const citiesRef = collection(firbase, 'todo')

    console.log(citiesRef)
  },
}
</script>

<style></style>
