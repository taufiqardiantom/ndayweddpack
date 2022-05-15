<template>
  <v-container>
    <vue-instagram
      token="IGQVJVN0FmS3NRaXg3N3M0V1ItTnFjLWdpREFuTnozdlNkZAThEdlFLLTZA2ZAm5WaUU0ZAXVzV2JwUk10NGtmMVp6c2k0c1ZAmTzRpRDh3emhueW5PSzdMUFNuQlZAKbWRLRmN4Tk9HZAHVtV2d0Y0xWRVhjcQZDZD"
      :count="5"
      :tags="['hashtag1', 'hashtag2']"
      mediaType="image"
    >
      <template slot="feeds" slot-scope="props">
        <li class="fancy-list">{{ props.feed.link }}</li>
      </template>
      <template slot="error" slot-scope="props">
        <div class="fancy-alert">{{ props.error.error_message }}</div>
      </template>
    </vue-instagram>
  </v-container>
</template>

<script>
import VueInstagram from "vue-instagram";
export default {
  data() {
    return {};
  },
  components: {
    VueInstagram,
  },
};
</script>

<style>
</style>