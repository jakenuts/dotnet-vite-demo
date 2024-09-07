<script setup lang="ts">
import { ref } from 'vue'

    defineProps<{ msg: string }>();

const count = ref(0)
</script>

<template>
  <h3>{{ msg }}</h3>

  <div class="card">
      <div class="card-body">
          <button type="button" @click="count++" class="btn btn-outline-primary">count is {{ count }}</button>         
      </div>
      <div class="card-footer">
          Edit <code>components/HelloWorld.vue</code> to test HMR
      </div>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
