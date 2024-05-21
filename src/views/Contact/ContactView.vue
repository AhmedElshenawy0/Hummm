<template>
  <div
    class="container-responsive d-flex flex-column-reverse flex-lg-row justify-content-between gap-4 align-items-center"
  >
    <form class="d-flex flex-column gap-3">
      <div class="inputs-holder d-flex gap-2">
        <div class="w-50 d-flex flex-column gap-2 mb-1">
          <label>الاسم بالكامل * </label>
          <input type="text" />
        </div>
        <div class="w-50 d-flex flex-column gap-2 mb-1">
          <label> البريد الالكتروني *</label>
          <input type="email" />
        </div>
      </div>
      <div class="inputs-holder d-flex gap-2">
        <div class="w-50 d-flex flex-column gap-2 mb-1">
          <label>رقم الهاتف * </label>
          <input type="number" />
        </div>
        <div class="w-50 d-flex flex-column gap-2 mb-1">
          <label>البلد *</label>
          <input type="text" />
        </div>
      </div>
      <label>الرساله *</label>
      <textarea name="" id="" cols="20" rows="6"></textarea>
      <button>ارسال</button>
    </form>
    <div class="info-container position-relative">
      <h3>شاركونا استفساراتكم واقتراحاتكم</h3>
      <p>hi@humm.world</p>
      <p>01000111888</p>
      <img
        class="position-absolute"
        src="https://humm.world/wp-content/themes/humm/public/static/img/6.svg"
        alt=""
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { CONTACT_ITEM } from "@/graphql/queries";
import { useMutation } from "@vue/apollo-composable";
import gql from "graphql-tag";
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const user = ref({
  status: "",
});
// const {
//   mutate: CreateContactItem,
//   onDone,
//   onError,
// } = useMutation(
//   gql`
//     mutation Create_Contact_item($status: String!) {
//       create_Contact_item(data: { status: $status })
//     }
//   `,
//   () => ({
//     variables: {
//       status: user.value.status,
//     },
//   })
// );

// onDone((res) => {
//   console.log(res);
//   router.push({ name: "Contact-message" });
// });
// onError((res) => {
//   console.log(res.message);
// });
</script>

<style scoped lang="scss ">
@import "@/assets/sass/main.scss";
.container-responsive{
  margin-bottom:20px;
  .info-container{
   background-image:url("https://humm.world/wp-content/themes/humm/public/static/img/5.svg");
   padding:6.25rem 5rem 9.375rem;
   color:white;
  background-size: cover;
  max-width:620px;
  max-height:620px;
  display:flex;
  justify-content:center;
  flex-direction:column;
  h3{
    max-width:7em;
    font-size:calc(1.1625rem + 2.64031vw);
    font-weight:bold;
    margin-bottom:20px;
  }

  }

  form{
    width:100%;

    @include breakpoints(medium){
      width:50%;

    }
    .inputs-holder{
      display:flex;
      width:100%;
    }
    button{
      @include button(4px, 5px);
      margin:0 auto;

    }
  }
  img{
    width:75px;
    bottom:12px;
    right:10px;
  }

}
</style>
