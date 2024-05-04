<template>
   <div>
      <span>Поиск </span>
      <input v-model="FindStr" class="input-find" />
   </div>
   
   <div>
    <el-radio-group v-model="Order" size="large">
      <el-radio-button v-for="(item,index) in SortFunc" :label="item.label" :value="index" :key="index" />
    </el-radio-group>
  </div>
   <VideoCard v-for="item in OrderedList" :key="item.id" :mysupervar="item" />
</template>

<script setup>
import {ref,reactive,computed} from 'vue'

import VideoCard from '@/components/VideoCard.vue'
import {videocards} from '@/dataset'
import {SortFunc} from '@/lib/SortFunc.js'

const List = reactive(videocards)

const Order = ref(0)

const FindStr = ref("")

const OrderedList = computed(() => List.filter(Find).sort(SortFunc[Order.value].func))

const Find = (item) => 
   item.name.toLowerCase().includes(FindStr.value.toLowerCase()) ? true : false

</script>

<style>
.input-find {
   margin: 12px;
   font-size: 1.2em;
}
</style>