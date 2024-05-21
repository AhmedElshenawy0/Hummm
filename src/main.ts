import { createApp, provide, h } from "vue";
import { DefaultApolloClient } from "@vue/apollo-composable";
import { ApolloClient, InMemoryCache } from "@apollo/client/core";
import { createPinia } from "pinia";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import App from "./App.vue";
import router from "./router";
import "vue-plyr/dist/vue-plyr.css";
import 'video.js/dist/video-js.css';
import VueDragscroll from "vue-dragscroll";
import vueVimeoPlayer from 'vue-vimeo-player';

const cache = new InMemoryCache();

const apolloClient = new ApolloClient({
  cache,
  uri: "https://board.humm.world/graphql",
});

const app = createApp({
  setup() {
    provide(DefaultApolloClient, apolloClient);
  },

  render: () => h(App),
});

app.use(createPinia());
app.use(router).use(VueDragscroll).use(vueVimeoPlayer)

app.mount("#app");
