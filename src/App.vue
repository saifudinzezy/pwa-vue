<template>
  <v-app>
    <v-toolbar app>
      <v-btn icon v-if="$route.name !== 'home'" @click="$router.go(-1)">
        <v-icon>mdi-arrow-left-thick</v-icon>
      </v-btn>
      <v-toolbar-title>
        <span>CropChien</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import Home from "./components/Home.vue";
export default {
  name: "App",
  components: {
    Home
  },
  data() {
    return {
      //
    };
  }
};
</script>
