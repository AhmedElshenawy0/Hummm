// import { ref, computed } from "vue";
// import { defineStore } from "pinia";
// import type { Article, Article_Filter } from "@/generated/graphql";
// import { useQuery } from "@vue/apollo-composable";
// import { ALL_FOOD_QUERY, LIMITED_SHOW_QUERY } from "@/graphql/queries";

// type ArticlesType = {
//   foods: Article_Filter[];
//   food: Article[];
// };

// export const useFoodStore = defineStore("counter", {
//   state: (): ArticlesType => ({
//     foods: [],
//     food:[],
//   }),
//   actions: {
//     getAllFoods() {
//       const { result } = useAsyncQuery(ALL_FOOD_QUERY);
//       this.foods = computed(() => result?.value?.Article ?? []);

//        this.foods =  mainEpisode.value;
//       console.log(this.foods);
//       console.log(mainEpisode.value);
//     },
//     // getAllShow(id:number) {
//     //   this.food = this.foods.find((ele:Article) => +ele.id == id)

//     // },
//   },
// });
