<template>
   <h1>Home view</h1>
   <Transition name="fade" mode="out-in">
      <div v-if="ready">
         <ul>
            <li v-for="user in UserList" :key="user.id">
               <span>ID: {{ user.id }}</span>&nbsp;&nbsp;
               <span>UserName: {{ user.username }}</span>
            </li>
         </ul>
      </div>
      <div v-else>
         WAIT
      </div>
   </Transition>   
</template>

<script setup>
import { onMounted, reactive, ref } from 'vue';

const ready = ref(false)
const UserList = reactive([])

onMounted(MySuperFunction)

function MySuperFunction() {
   console.log('HomeView MySuperFunction')

   fetch("http://localhost:8080/api/user")
      .then(ProcessResponse)
      .then(ProcessData)
      .catch(ErrorHandler)
}

function ProcessResponse(rrr) {
   console.dir(rrr)

   return rrr.json()
}

function ProcessData(data) {
   console.dir(data)

   data.forEach(user => UserList.push(user))
   ready.value = true
}

function ErrorHandler(err) {
   console.log("ERRROOORRRRR!!!!!!")
   console.error(err)
}

</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>