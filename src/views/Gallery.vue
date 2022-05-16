<template>
  <v-container>
    <v-row
      ><v-col
        ><v-btn small text to="/dashboard"
          ><v-icon large>mdi-chevron-left</v-icon></v-btn
        >

        Gallery
      </v-col>
    </v-row>
    <!-- <vue-instagram
      token="IGQVJWcVhWTTIxUkl5MWxwX2wzSTYzQWp0UmV3bzdoQjBFRTMtd3RfZAy1rbHVfWVZATaWU5ajR4RlVHRmFHN0VaX3hYUnNnMlVtUFJRaUk5TzVweTVSV05JUTZAKNnA2ZATJqaTlRamt3emZAIcDVrT3p6MAZDZD"
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
    </vue-instagram> -->

    <v-row class="d-flex justify-space-around pa-0">
      <v-col cols="auto" v-for="item in arrData" :key="item.id">
        <v-card rounded="lg" elevation="2">
          <v-img
            @click="showImage(item.media_url)"
            height="150"
            width="150"
                    aspect-ratio="1"
            :src="item.media_url"
            :lazy-src="item.media_url"
            class="grey lighten-2"
          >
            <template v-slot:placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular
                  indeterminate
                  color="grey lighten-5"
                ></v-progress-circular>
              </v-row> </template
          ></v-img>
        </v-card>
      </v-col>
    </v-row>
    <v-dialog v-model="dialogShowImage">
      <v-img height="500" width="500" :src="sImageUri"></v-img>
    </v-dialog>
  </v-container>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      arrData: [],
      dialogShowImage: false,
      sImageUri: "",
      loading: true,
    };
  },
  mounted() {
    this.loadData();
  },
  methods: {
    showImage(imageUri) {
      this.dialogShowImage = true;
      this.sImageUri = imageUri;
    },
    async loadData() {
      await axios
        .get(
          "https://v1.nocodeapi.com/taufiqardianto/instagram/WkDGgYqGuKzwaErq"
        )
        .then((res) => {
          this.arrData = res.data.data;
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>

<style>
</style>