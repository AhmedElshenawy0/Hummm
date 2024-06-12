<template>
  <div
    class="d-flex justify-content-between align-items-start item"
    @click="
      $router.push({
        name: 'Single-Read',
        params: { id: data.id },
        query: { name: data.translations[0].title },
      })
    "
  >
    <div class="image">
      <img
        :src="`https://board.humm.world/assets/${data?.translations[0].cover?.id}`"
        class="img-fluid"
        alt=""
      />
    </div>
    <div class="docs">
      <h5>{{ data?.translations[0]?.title }}</h5>
      <!-- <p v-html="data?.translations[0]?.content"></p> -->
      <div class="info">
        <span
          ><img src="@/assets/user-6-line.svg" alt="" />{{
            data?.user_updated?.first_name
          }}
          {{ data?.user_updated?.last_name }}</span
        >
        <span
          ><img src="@/assets/time-line.svg" alt="" />{{
            new Date(data?.date_updated).toDateString()
          }}</span
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Article_Filter } from "@/generated/graphql";

const props = defineProps<{ data: Article_Filter }>();
</script>

<style scoped lang="scss">
@import "@/assets/sass/main.scss";
.item {
  margin-top: 20px;
  gap: 20px;
  height: 190px;
  border: 1px solid #000000;
  transition: 0.3s;
  padding: 20px;
  cursor: pointer;
  &:hover {
    box-shadow: 5px 6px #000000;
  }
  .image {
    width: 50%;
    height: 100%;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .docs {
    width: 55%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 100%;
    h5 {
      margin-bottom: 10px;
      font-size: 16px;
      font-weight: bold;
      line-height: 21px;
    }

    p {
      height: 73px;
      overflow: hidden;
    }
    .info {
      display: flex;
      flex-direction: column;
      gap: 10px;
      align-items: start;
      span {
        display: flex;
        gap: 6px;
        align-items: center;
      }
    }
  }
  @include breakpoints(small) {
    padding: 20px;
    .image {
      width: 40%;
      height: 100%;
    }
    .docs {
      h5 {
        font-size: 20px;
        line-height: 26px;
      }
      .info {
      }
    }
  }
  @include breakpoints(medium) {
    gap: 44px;
    height: 300px;
    padding: 34px;

    .image {
      width: 40%;
      height: 100%;
    }
    .docs {
      width: 60%;
      h5 {
        margin-bottom: 26px;
        font-size: 30px;
        font-weight: bold;
        line-height: 40px;
      }
      .info {
        display: flex;
        flex-direction: row;
        gap: 25px;
        align-items: center;
        flex-direction: row;
      }
    }
  }
}
</style>
<!-- "<p dir=\"rtl\"><span style=\"color: #000000;\">&nbsp;</span></p>\n<p dir=\"rtl\"><span style=\"font-weight: 400; color: #000000;\">السحلب واحد من أهم المشروبات الشتوية، والحقيقة مش كل البراندات بتعمله حلو مهما كانت مشهورة، والنهارده همم هتشاركم أجمد 5 براندات سحلب، والفرق بينهم.</span></p>\n<p dir=\"rtl\"><span style=\"color: #000000;\"><br /><br /></span></p>\n<p dir=\"rtl\"><span style=\"color: #000000;\"><strong>١- سحلب حلو الشام:</strong></span></p>\n<p dir=\"rtl\"><span style=\"color: #000000;\">&nbsp;</span></p>\n<p dir=\"rtl\"><span style=\"font-weight: 400; color: #000000;\">حلو الشام منزل أكتر من نوع سحلب، في سحلب حلو الشام الكلاسيك، وسحلب بالفسدق، وواحد تاني بالبندق، وسحلب مكسرات، بس النهارده هنتكلم عن السحلب الكلاسيك.&nbsp;</span></p>\n<p dir=\"rtl\"><span style=\"color: #000000;\">&nbsp;</span></p>\n<p dir=\"rtl\"><span style=\"font-weight: 400; color: #000000;\">أول حاجة لون السحلب بيبقى أبيض أكتر من أنواع تانية، كميته كبيرة وسعره حلو أوي، وبيكون معاه كيس صغير مكسرات، لكن الكيس بيبقى أغلبه جوز هند.&nbsp;</span></p>\n<p dir=\"rtl\"><span style=\"font-weight: 400; color: #000000;\">مكتوب عليه إن فيه سكر بس ممكن تحتاج تزود حبة فمن الأفضل تدوقه قبل ما تزود السكر.</span></p>\n<p dir=\"rtl\"><span style=\"font-weight: 400; color: #000000;\">كمان هو بيتقل بسرعة ومكتوب معلقتين لكل كوب لبن، فمن الأفضل بردو إنك تحط معلقة واحدة وتزود كمية السحلب بالتدريج.&nbsp;</span></p>\n<p dir=\"rtl\"><span style=\"font-weight: 400; color: #000000;\"><img src=\"https://board.humm.world/assets/298e4e53-1522-456c-8faa-cbdfa8c6577f?width=800&amp;height=400\" alt=\"Sa7lab Imagesd\" /></span></p>\n<p dir=\"rtl\"><span style=\"color: #000000;\"><br /><br /></span></p>\n<p dir=\"rtl\"><span style=\"color: #000000;\"><strong>٢- سحلب أبو عوف:&nbsp;</strong></span></p>\n<p dir=\"rtl\"><span style=\"color: #000000;\">&nbsp;</span></p>\n<p dir=\"rtl\"><span style=\"font-weight: 400; color: #000000;\">سحلب أبو عوف معروف طبعًا، وبيتميز بإن ريحته حلوة، وبيكون معاه كيس مكسرات، لكن المشكلة إنه بيبقى موجود جوه السحلب نفسه فممكن تبهدل الدنيا وأنت بتطلعه.&nbsp;</span></p>\n<p dir=\"rtl\"><span style=\"font-weight: 400; color: #000000;\">ميزته إنه مابيتقلش أوي حتى لو زودت الكمية، ومافيهوش طعم نشا.</span></p>\n<p dir=\"rtl\"><span style=\"font-weight: 400; color: #000000;\">لونه أغمق شوية وفيه سمسم بيديله طعم حلو أوي.&nbsp;</span></p>\n<p dir=\"rtl\"><span style=\"font-weight: 400; color: #000000;\"><img src=\"https://board.humm.world/assets/1ec7aaac-04ba-4bea-9d24-34575693d0bb?width=800&amp;height=400\" alt=\"Sa7lab Imagese\" /></span></p>\n<p dir=\"rtl\"><span style=\"color: #000000;\"><br /><br /></span></p>\n<p dir=\"rtl\"><span style=\"color: #000000;\"><strong>٣- سحلباشا من دريم:&nbsp;</strong></span></p>\n<p dir=\"rtl\"><span style=\"color: #000000;\">&nbsp;</span></p>\n<p dir=\"rtl\"><span style=\"font-weight: 400; color: #000000;\">أكتر ميزة فيه إن سعره على قد الإيد، مافيهوش كيس مكسرات لكن المنتج نفسه فيه سمسم بيديله طعم حلو أوي، فلو بتحب السحلب من غير مكسرات فبنرشحلك سحلباشا.&nbsp;</span></p>\n<p dir=\"rtl\"><span style=\"font-weight: 400; color: #000000;\">نسبة السكر فيه قليلة، فممكن تحتاج تحليه، لكنه قوامه وطمعه كريمي جدًّا، ودي حاجة بتميز منتجات دريم عمومًا، وكمان بيتقل بسهولة فلو بتحب السحلب خفيف شوية حط معلقة واحدة على كوباية اللبن.&nbsp;</span></p>\n<p dir=\"rtl\"><span style=\"font-weight: 400; color: #000000;\"><img src=\"https://board.humm.world/assets/9e969eeb-166d-45f9-8ef6-1b10e081b5da?width=800&amp;height=400\" alt=\"Sa7lab Imagesc\" /></span></p>\n<p dir=\"rtl\"><span style=\"color: #000000;\"><br /><br /></span></p>\n<p dir=\"rtl\"><span style=\"color: #000000;\"><strong>٤- سحلب زادنا:&nbsp;</strong></span></p>\n<p dir=\"rtl\"><span style=\"color: #000000;\">&nbsp;</span></p>\n<p dir=\"rtl\"><span style=\"font-weight: 400; color: #000000;\">سحلب زادنا سعره أغلى شوية، وده ممكن علشان بيجي معاه علبة مكسرات كبيرة ومتنوعة، كميته كمان كبيرة لكن طعمه مظبوط، مافيهوش طعم نشا، وبيكون حلو وكريمي.&nbsp;</span></p>\n<p dir=\"rtl\"><span style=\"color: #000000;\"><img src=\"https://board.humm.world/assets/d96aee59-0d66-4c83-a17a-1254a14f9276?width=800&amp;height=400\" alt=\"Sa7lab Imagesa\" /><br /><br /></span></p>\n<p dir=\"rtl\"><span style=\"color: #000000;\"><strong>٥- سحلب الحج عرفة:&nbsp;</strong></span></p>\n<p dir=\"rtl\"><span style=\"color: #000000;\">&nbsp;</span></p>\n<p dir=\"rtl\"><span style=\"font-weight: 400; color: #000000;\">علبة سحلب الحج عرفة شكلها حلو وسهلة الفتح، وكمان سعرها كويس، لكنها بدون مكسرات، بس هتلاقي في خليط السحلب نفسه سمسم بيديله طعم حلو أوي.&nbsp;</span></p>\n<p dir=\"rtl\"><span style=\"font-weight: 400; color: #000000;\"><img src=\"https://board.humm.world/assets/6bdd26bb-070a-4a2e-945d-4b07f086f721?width=800&amp;height=400\" alt=\"Sa7lab Imagesb\" /></span></p>\n<p dir=\"rtl\"><span style=\"color: #000000;\">&nbsp;</span></p>\n<p dir=\"rtl\"><span style=\"font-weight: 400; color: #000000;\">طعمه قريب من طعم سحلب زادنا، لكن المميز إن فيه طعم جوز هند وفانيليا خفيف بيدي نكهة حلوة جدًّا، ولو بتحب السحلب تقيل هتحتاج تزود الكمية على كوب اللبن علشان يتقل معاك زي ما تحب. </span></p>" -->
