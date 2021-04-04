<template>
  <div>
    <label for="">いまどんなかんじ？ </label>
    <input type="radio" name="painLevel" value="1" />
    <input type="radio" name="painLevel" value="2" />
    <input type="radio" name="painLevel" value="3" />
    <input type="radio" name="painLevel" value="4" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
  setup() {
    return {};
  },
});
</script>
