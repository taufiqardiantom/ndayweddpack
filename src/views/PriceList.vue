<template>
  <div>
    <v-row
      ><v-col
        ><v-btn small text to="/dashboard"
          ><v-icon large>mdi-chevron-left</v-icon></v-btn
        >

        Price List
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-card outlined elevation="0" class="rounded-xl">
          <v-card-title class="py-3"> Kebutuhan </v-card-title>
          <v-divider></v-divider>
          <v-card-text>
            <v-row>
              <v-col cols="6">
                <v-checkbox
                  label="Makeup Artist"
                  v-model="arrKebutuhan"
                  value="Makeup Artist"
                ></v-checkbox>
                <v-checkbox
                  label="Foto & Video"
                  v-model="arrKebutuhan"
                  value="Foto & Video"
                ></v-checkbox>
              </v-col>
              <v-col cols="6">
                <v-checkbox
                  label="Dekorasi"
                  v-model="arrKebutuhan"
                  value="Dekorasi"
                ></v-checkbox>
                <v-checkbox
                  label="Henna"
                  v-model="arrKebutuhan"
                  value="Henna"
                ></v-checkbox>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
        <v-card outlined elevation="0" class="mt-4 rounded-xl">
          <v-card-title class="py-3"> Detail </v-card-title>
          <v-divider></v-divider>
          <v-expansion-panels>
            <v-expansion-panel v-for="(item, i) in arrKebutuhan" :key="i">
              <v-expansion-panel-header> {{ item }}</v-expansion-panel-header>
              <v-expansion-panel-content>
                <v-combobox
                  solo
                  dense
                  v-model="kategori"
                  :items="arrKategori"
                ></v-combobox
                >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
          <v-card-text>
            <div v-for="item in arrKebutuhan" :key="item">
              <v-col cols="8"> </v-col>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arrKebutuhan: ["Makeup Artist"],
      arrKategori: ["Basic", "Eksklusif", "Premium"],
    };
  },
};
</script>

<style>
</style>