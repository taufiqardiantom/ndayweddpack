<template>
  <div>
    <v-card class="rounded-xl">
      <v-img
        src="@/assets/PriceList.jpg"
        class="white--text align-end"
        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
        height="200px"
      >
        <v-card-title>Sesuaikan Kebutuhan Anda</v-card-title>
        <v-card-text
          ><v-chip to="/pricelist" color="pink lighten-2" dark>
            <v-icon>mdi-</v-icon> Price List
          </v-chip></v-card-text
        >
      </v-img>
    </v-card>
    <v-card class="rounded-xl mt-4">
      <v-img
        src="@/assets/Gallery.jpg"
        class="white--text align-end"
        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
        height="200px"
      >
        <v-card-title>Lihat Portofolia Kami</v-card-title>
        <v-card-text
          ><v-chip to="/gallery" color="pink lighten-2" dark>
            <v-icon>mdi-</v-icon> Gallery
          </v-chip></v-card-text
        >
      </v-img>
    </v-card>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>