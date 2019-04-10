<template>
  <div>
    {{ name }}
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: [String, Number],
      default: 'lison'
    }
  }
}
</script>

<style scoped>

</style>
