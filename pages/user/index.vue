<template>
  <div>
    <ul>
      <li>
        <nuxt-link to="/user/pain-record">いまどんなかんじ？</nuxt-link>
      </li>
      <li>
        <nuxt-link to="">いつもどんなかんじ？</nuxt-link>
      </li>
      <li>
        <nuxt-link to="">アルバム</nuxt-link>
      </li>
      <li>
        <nuxt-link to="">おくすりとうろく</nuxt-link>
      </li>
      <li>
        <nuxt-link to="">いたいところとうろく</nuxt-link>
      </li>
    </ul>
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
