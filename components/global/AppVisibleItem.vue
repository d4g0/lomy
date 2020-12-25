<template>
  <div ref="target">
      <slot ></slot>
  </div>
</template>

<script>
import { ref } from '@vue/composition-api'
import { useElementVisibility } from '@vueuse/core'

export default {
  setup() {
    const target = ref(null)
    const targetIsVisible = useElementVisibility(target)

    return {
      target,
      targetIsVisible,
    }
  }
}
</script>