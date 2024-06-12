<template>
  <div class="d-flex flex-column container-responsive">
    <div class="d-flex justify-content-between align-items-center">
      <div class="logo" @click="$router.push('/')">
        <img src="@/assets/Humm.svg" alt="" />
      </div>
      <div class="subscribe">
        <span class="m-1 border border-black rounded-circle d-flex">
          <img src="../assets/email.svg" alt="" />
        </span>
        <span class="fs-6 d-none d-lg-block">الإشتراك</span>
      </div>
      <button
        class="call-us-btn d-none d-lg-block"
        @click="$router.push({ name: 'Contact' })"
      >
        اتصل بنا
      </button>
    </div>
    <div
      class="d-flex align-items-center justify-content-between py-3 mt-3 border-top border-black"
    >
      <ul class="nav">
        <li>
          <div class="d-flex">
            <img @click="openMenu = true" src="../assets/menu.svg" alt="" />
            <RouterLink :to="{ name: 'Home' }" class="link home">
              القائمه
            </RouterLink>
          </div>
        </li>
        <ul class="links-holder d-none d-lg-flex">
          <li class="">
            <RouterLink class="link food" :to="{ name: 'Foods' }">
              <img
                src="https://humm.world/wp-content/uploads/2023/05/Path-35233.svg"
              />
              وصفات
            </RouterLink>
          </li>
          <li>
            <RouterLink class="link show" :to="{ name: 'Show' }">
              <img
                src="https://humm.world/wp-content/uploads/2023/05/Path-35234.svg"
              />
              برامج
            </RouterLink>
          </li>
          <li>
            <RouterLink class="link article" :to="{ name: 'Read' }">
              <img
                src="https://humm.world/wp-content/uploads/2023/05/Path-35235.svg"
              />المقالات</RouterLink
            >
          </li>
          <li>
            <RouterLink class="link about" :to="{ name: 'About' }">
              <img
                src="https://humm.world/wp-content/uploads/2023/05/Path-35232.svg"
              />
              أكاديمية همم
            </RouterLink>
          </li>
        </ul>
        <div v-if="openMenu" class="responsive">
          <ul class="r-nav">
            <img
              src="../assets/close-filled.svg"
              class="close"
              lt=""
              @click="openMenu = false"
            />
            <li class="r-link link-m-38" @click="openMenu = false">
              <RouterLink class="" to="/"> القائمه </RouterLink>
            </li>
            <li class="r-link link-m-35" @click="openMenu = false">
              <RouterLink class="" :to="{ name: 'Foods' }"> وصفات </RouterLink>
            </li>
            <li class="r-link link-m-36" @click="openMenu = false">
              <RouterLink class="" :to="{ name: 'Show' }"> برامج </RouterLink>
            </li>
            <li class="r-link link-m-24" @click="openMenu = false">
              <RouterLink class="" :to="{ name: 'Read' }"> المقالات</RouterLink>
            </li>
            <li class="r-link link-m-24" @click="openMenu = false">
              <RouterLink class="" :to="{ name: 'About' }">
                أكاديمية همم
              </RouterLink>
            </li>
            <li class="r-link link-m-24" @click="openMenu = false">
              <RouterLink class="" :to="{ name: 'Press' }"> الصحافه</RouterLink>
            </li>
            <li class="r-link link-m-24" @click="openMenu = false">
              <RouterLink class="" :to="{ name: 'About' }"> من نحن</RouterLink>
            </li>
            <li class="r-link link-m-24" @click="openMenu = false">
              <RouterLink class="" :to="{ name: 'Contact' }"
                >اتصل بنا</RouterLink
              >
            </li>
            <li class="r-link link-m-21">
              <RouterLink class="" to="/about"> أعلن معنا</RouterLink>
            </li>
            <li class="r-link">
              <RouterLink class="" to="/about"> الإشتراك</RouterLink>
            </li>
            <ul class="d-flex flex-row justify-content-start py-5 gap-3">
              <li><img src="../assets/instagram.svg" alt="" /></li>
              <li><img src="../assets/youtube.svg" alt="" /></li>
              <li><img src="../assets/Group 10173.svg" alt="" /></li>

              <li><img src="../assets/Group 10164.svg" alt="" /></li>
              <li><img src="../assets/Path 35026.svg" alt="" /></li>
            </ul>
          </ul>
        </div>
      </ul>
      <div class="search" @click="openSearch">
        <span> ابحث هنا </span>
        <svg xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 0 24 24">
          <path
            d="m18.031 16.617 4.283 4.283-1.414 1.414-4.282-4.283a9 9 0 1 1 1.414-1.414Zm-2.006-.742a7 7 0 1 0-.15.15l.15-.15Z"
          />
        </svg>
      </div>
    </div>
    <div class="search-com" v-if="search == true">
      <div class="search-container d-flex justify-content-between">
        <div class="d-flex gap-2 window flex-grow-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="20"
            width="20"
            viewBox="0 0 24 24"
          >
            <path
              d="m18.031 16.617 4.283 4.283-1.414 1.414-4.282-4.283a9 9 0 1 1 1.414-1.414Zm-2.006-.742a7 7 0 1 0-.15.15l.15-.15Z"
            />
          </svg>
          <input v-model="searchInput" type="text" placeholder="ابحث هنا" />
        </div>
        <button @click="search = false">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="18"
            width="18"
            viewBox="0 0 24 24"
          >
            <path
              fill="#000"
              d="M12 0A11.926 11.926 0 0 0 0 12a11.926 11.926 0 0 0 12 12 11.926 11.926 0 0 0 12-12A11.926 11.926 0 0 0 12 0Zm4.629 18L12 13.371 7.371 18 6 16.629 10.629 12 6 7.371 7.371 6 12 10.629 16.629 6 18 7.371 13.371 12 18 16.629Z"
            ></path>
          </svg>
        </button>
      </div>
      <div class="result-holder">
        <div
          v-for="(item, i) in article?.slice(0, 6)"
          :key="i"
          class="article-item"
          @click="handleClick(item)"
        >
          <p>{{ item?.type }}</p>
          <h4>{{ item?.translations[0]?.title }}</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterLink, useRouter } from "vue-router";
import { computed, onUpdated, ref, watchEffect } from "vue";
import { useQuery } from "@vue/apollo-composable";
import { ALL_ARTICLE, SEARCHED_QUERY } from "@/graphql/queries";
import type { Article_Filter } from "@/generated/graphql";

const openMenu = ref(false);
const searchInput = ref<string>("ن");
const search = ref(false);
const { result, variables } = useQuery(SEARCHED_QUERY, {
  title: searchInput.value,
});

// All Articles
const articles = computed(() => result.value?.Article);

// Searched Article
const article = computed(() => articles.value);

const router = useRouter();
const openSearch = () => {
  search.value = true;
  searchInput.value = "";
};
onUpdated(() => {
  variables.value = { title: searchInput.value };
});
const handleClick = (item: any) => {
  search.value = false;
  if (item?.type == "food") {
    router.push({
      name: "Single-Food",
      params: { id: item?.id },
      query: { name: item?.translations[0]?.title },
    });
  } else if (item.type == "read") {
    router.push({
      name: "Single-Read",
      params: { id: item?.id },
      query: { name: item?.translations[0]?.title },
    });
  } else if (item.type == "press") {
    console.log("press");
  } else if (item?.type == "episode") {
    router.push({
      name: "Single-Show",
      params: { id: item.id },
      query: { name: item?.shows?.translations[0]?.title },
    });
  } else {
    console.log("NO THING");
  }
};
</script>

<style scoped lang="scss">
@import "@/assets/sass/main.scss";

.container-responsive {
  font-family: $main-font;
  margin: 0 auto;
  .logo {
    cursor: pointer;
  }
  .search-com {
    position: fixed;
    background-color: #000000bb;
    width: 100%;
    height: calc(100vh + 400px);
    z-index: 999999999;
    top: -300px;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-top: 150px;

    .search-container {
      background-color: white;
      padding: 0 10px;
      width: 70%;
      border: 2px solid #000000;
      height: 40px;

      .window {
        display: flex;
        align-items: center;
        input {
          border: none;
          outline: none;
          flex: 1;
        }
      }
      button {
        border: none;
        border-right: 2px solid #000000;
        padding-right: 10px;
        outline: none;
        background: none;
        display: flex;
        align-items: center;
      }
    }
    .result-holder {
      border: 2px solid #000000;
      background-color: white;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      width: 70%;
      padding: 10px;
      gap: 10px;

      .article-item {
        width: 49%;
        border: 1px solid #000000;
        padding: 10px;
        display: flex;
        flex-direction: column;
        gap: 0;
        @media (max-width: 767px) {
          width: 100%;
        }
        p {
          margin: 0;
        }
        h4 {
          font-size: calc(0.9rem + 0.22959vw);
          font-weight: bold;
        }
      }
    }
  }
  .subscribe {
    display: flex;
    align-items: center;
    font-weight: bold;
    justify-content: center;
    span {
      padding: 15px 12px 14px 13px;
    }
  }
  .call-us-btn {
    @include shadowButton(5px, 4px);
    font-size: 18px;

    @media (max-width: 767px) {
      @include shadowButton(5px, 4px);
      font-size: 12px;
    }
  }

  .search {
    font-size: 16px;
    font-weight: 400;
    display: flex;
    align-items: center;
    gap: 2px;
    cursor: pointer;
    span {
      width: 70px;
    }
  }
  .nav {
    display: flex;
    align-items: center;

    .links-holder {
      display: flex;
      align-items: center;
      flex: 1;
    }

    .link {
      text-decoration: none;
      color: black;
      font-size: 24px;
      display: flex;
      align-items: center;
      font-weight: bold;
      line-height: 32px;
      padding: 0 1em;
    }
    .home {
      gap: 16px;
    }
    .food {
      gap: 13px;
    }
    .show {
      gap: 7px;
    }
    .article {
      gap: 15px;
    }
    .about {
      gap: 16px;
    }
    .responsive {
      position: fixed;
      top: 0;
      right: 0;
      height: 100%;
      overflow-y: scroll;
      background-color: #000000;
      z-index: 222;
      width: 90%;
      @include breakpoints(mobile) {
        width: 481px;
      }
      .r-nav {
        display: flex;
        flex-direction: column;
        position: relative;
        padding-right: 94px;
        padding-top: 120px;
      }
      .r-link {
        font-size: 40px;
        font-weight: bold;
        line-height: 1;
        a {
          text-decoration: none;
          color: white;
        }
      }
      $links: (
        "m-38": 38px,
        "m-35": 35px,
        "m-36": 36px,
        "m-24": 24px,
        "m-21": 21px,
      );
      @each $name, $margin in $links {
        .link-#{$name} {
          margin-bottom: $margin;
        }
      }
      .close {
        position: absolute;
        top: 31.5px;
        left: 36px;
        cursor: pointer;
      }
    }
  }
}
</style>
