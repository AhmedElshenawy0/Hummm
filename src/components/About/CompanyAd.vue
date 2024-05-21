<template>
  <div class="d-flex justify-content-between gap-5 flex-column-reverse mt-4 mb-4 container-responsive align-items-center flex-lg-row">
    <div class="info">
      <h3 class="title">
        اعرض شركتك ومنتجاتك لملايين من خلال الإعلان على موقعنا
      </h3>
      <p class="desc">
        همم عندها تقريبًا 2 مليون متابع وبتكبر يوم عن يوم! كلهم بييجوا هنا علشان
        يتعلموا ويبتكروا ويحتفلوا بحب الأكل وده اللي بيخلينا أحسن مكان تعلن فيه.
        بغض النظر عن حجم شركتك، دايمًا فيه مكان ليك. كون جزء من عالم همم. اختار
        أكتر من مكان في موقع همم مع اختيار وجود مقالات مخصصة ومراجعة تفصيلية
        للمنتجات وصور. ابعتلنا دلوقتي!
      </p>
    </div>
    <div class="image">
      <img class="w-100" src="https://humm.world/wp-content/uploads/2023/05/2-1.png" alt="" />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
@import "@/assets/sass/main.scss";
.container-responsive{

    .info{
        max-width: 500px;
        text-align: center;
        .title{
            font-size:40px;
            font-weight:bold;
            line-height:54px;
            margin-bottom:25px;
        }
        .desc{
            font-size:20px;
            line-height:27px;
        }
    }

    @include breakpoints(large){
        .info{
        max-width: 615px;
        .title{
            font-size:55px;
            font-weight:bold;
            line-height:64px;
            margin-bottom:25px;
        }
        p{
            font-size:20px;
            line-height:27px;
        }
    }
    }
    @include breakpoints(large){
        
    }
}
</style>
