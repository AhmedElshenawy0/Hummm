<template>
  <div class="container-responsive">
    <BlackAds />
    <div class="d-flex justify-content-between">
      <div class="desc">
        <h3>{{ read?.translations[0]?.title }}</h3>
        <div
          class="content"
          v-html="read?.translations[0]?.content"
          v-inline
        ></div>
      </div>
      <span class="line d-none d-lg-flex"></span>
      <div class="others d-none d-lg-flex">
        <ReadItem
          v-for="(item, i) in allRead.slice(0, 2)"
          :key="i"
          :data="item"
          :ImageId="item.translations[0].cover.id"
        />
        <span class="others-line"></span>
        <ShowEpisodeItem
          style="border: none"
          class="test"
          v-for="(item, i) in shows[showRandomNum]?.all_episodes.slice(-4)"
          :key="i"
          :myData="item"
          showName="dsd"
        />
      </div>
    </div>
    <SubscribeCom />
    <TwoAds />
    <div class="read-container">
      <button @click="$router.push({ name: 'Read' })">اعرف المزيد</button>
      <div class="d-flex read-holder">
        <div
          class="holder-item"
          v-for="(item, i) in allRead.slice(0, 3)"
          @click="
            $router.push({
              name: 'Single-Read',
              query: { name: item?.translations[0].title },
            })
          "
        >
          <img
            :src="`https://board.humm.world/assets/${item.translations[0]?.cover?.id}`"
            alt=""
          />
          <h3>{{ item?.translations[0]?.title }}</h3>
          <p>
            {{
              new Date(item?.date_created).toDateString() ||
              new Date(item?.date_updated).toDateString()
            }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useQuery } from "@vue/apollo-composable";
import { ALL_SHOW_QUERY, ALL_READ_QUERY } from "@/graphql/queries";
import { computed, ref, onBeforeMount, onUpdated } from "vue";
import gql from "graphql-tag";
import { useRoute, useRouter } from "vue-router";
// import ReadItem from "@/components/Read/ReadItem.vue";
import ReadItem from "@/components/Home/ReadSection/ReadItem.vue";
import ShowEpisodeItem from "@/components/Show/ShowEpisodeItem.vue";
import BlackAds from "@/components/Home/Advertising/BlackAds.vue";
import SubscribeCom from "@/components/Home/SubscribSection/SubscribeCom.vue";
import TwoAds from "@/components/Home/Advertising/TwoAds.vue";
import ReadSliderVue from "@/components/Home/ReadSection/ReadSlider.vue";
import PressItem from "@/components/Home/PressSection/PressItem.vue";
import ReadItem2 from "@/components/Home/ReadSection/ReadItem.vue";
import type { Article_Filter } from "@/generated/graphql";

const showRandomNum = ref<number>(Math.floor(Math.random() * 4));
// const EpisodeRandomNum = ref<number>(Math.floor(Math.random() * 4));
const route = useRoute();
const result3 = useQuery(ALL_SHOW_QUERY);
const result2 = useQuery(ALL_READ_QUERY);
const { result } = useQuery(
  gql`
    query  {
      Article( filter: {
            type: { _contains: "read" }
            translations: {
                title: { _contains: "${route?.query?.name}" }
            }
        }) {
        id
        translations {
          title
          content
          cover {
            id
          }
        }
        date_updated
        user_updated {
          first_name
          last_name
        }
        category {
          translations {
            title
            description
          }
        }
      }
    }
  `
);
onBeforeMount(() => {
  window.scrollTo(0, 0)

})
onUpdated(()=> {
  window.scrollTo(0, 0)
})

const allRead = computed(():Article_Filter[] => result2?.result.value?.Article ?? []);
const shows = computed(():Article_Filter[] => result3?.result.value?.shows ?? []);
const read = computed(():Article_Filter =>
  allRead.value?.find((ele) => ele?.translations[0].title == route.query.name)
);

</script>

<style scoped lang="scss">
@import "@/assets/sass/main.scss";
.container-responsive {
  .desc {
    width: 100%;

    @include breakpoints(medium) {
      width: 60%;
    }
    .content::v-deep {
      img {
        width: 100%;
        margin-top: 20px;
      }
    }
  }

  .others {
    width: 40%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    gap: 24px;

    .others-line {
      height: 1px;
      background-color: #000000;
    }
    .test {
      padding: 0;
    }
    @media (max-width: 767px) {
      display: none;
    }
  }

  .line {
    width: 1px;
    margin: 0 38.5px;
    min-height: 100%;
    background-color: #000000;
  }
  .read-container {
    button {
      @include button(5px, 4px);
      margin-bottom: 25px;
      @include breakpoints(xs) {
        @include button(5px, 4px);
      }
    }
    .read-holder {
      gap: 25px;
      .holder-item {
        padding: 25px;
        box-shadow: -4px -5px #000;
        width: 80% !important;
        height: 100%;
        outline: 1px solid black;
        margin-bottom: 33px;
        cursor: pointer;

        h3 {
          margin-top: 30px;
          margin-bottom: 20px;
          font-size: 30px;
          font-weight: bold;
          line-height: 40px;
        }

        img {
          width: 100%;
        }
      }
      @media (max-width: 991px) {
        flex-direction: column;
        .holder-item {
          padding: 25px;
          box-shadow: -4px -5px #000;
          width: 100% !important;
          height: 100%;
          outline: 1px solid black;
          margin-bottom: 20px;
          cursor: pointer;

          h3 {
            margin-top: 20px;
            margin-bottom: 20px;
            font-size: 25px;
            font-weight: bold;
            line-height: 40px;
          }
        }
      }
    }
  }
}
</style>
