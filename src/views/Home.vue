<template>
  <div class="home">
    <v-row>
      <v-col><v-img src="@/assets/landing.svg"> </v-img> </v-col>
    </v-row>
    <v-row>
      <v-col class="text-center">
        <div><strong>Selamat Datang</strong></div>
        <div>Hai, </div>
        <div class="mt-4">
          <v-btn to="/dashboard" color="pink lighten-1" dark rounded>MULAI</v-btn>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
};
</script>
