<template>
  <div class="container-responsive">
    <div class="subscribe d-flex">
      <h1 class="title">اشترك في نشرة همم</h1>
      <div class="form">
        <h3>نشرة همم البريدية</h3>
        <form class="d-flex gap-2 align-items-center">
          <div class="d-flex gap-2 input-holder">
            <input type="text" placeholder="الاسم بالكامل" />
            <input type="email" placeholder="البريد الالكتروني" />
          </div>
          <button>الإشتراك</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.container-responsive {
  padding-bottom: 25px;
  .subscribe {
    box-shadow: 8px 7px $main-color;
    padding: 34px;
    flex-direction: column;
    border: 1px solid $main-color;
    gap: 14px;
    h1 {
      font-size: 24px;
      font-weight: bold;
      line-height: 32px;
    }
    .form {
      h3 {
        font-size: 16px;
        font-weight: bold;
        line-height: 21px;
        margin-bottom: 14px;
      }
      form {
        display: flex;
        flex-direction: column;
        .input-holder {
          width: 100%;
          input {
            flex: 1;
            font-size: 11px;
            font-weight: bold;
            padding: 9px 10px 9px 10px;
            color: $main-color;
            border: 1px solid $main-color;
            width: 100%;

          }
        }
        button {
          font-size: 10px;
          font-weight: bold;
          background-color: $main-color;
          height: 34px;
          color: white;
          width: 100%;
        }
      }
    }
    @include breakpoints(medium) {
      padding: calc(1.2875rem + 3.78827vw);

      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      h1 {
        font-size: 35px;
        font-weight: bold;
        line-height: 55px;
        max-width: 330px;
       
      }
      .form {
        flex-direction: row;

        h3 {
          font-size: 22px;
          font-weight: bold;
          line-height: 30px;
        }

        form {
          flex-direction: row;
          .input-holder {
            width: 100%;
            input {
              font-size: 14px;
              font-weight: bold;
              padding: 12px 12px 12px 10px;
              color: $main-color;
              border: 1px solid $main-color;
              width: 50%;

            }
          }
          button {
            font-size: 15px;
            font-weight: bold;
            background-color: $main-color;
            width: 129px;
            height: 44px;
            color: white;
          }
        }
      }
    }
    @include breakpoints(large) {
      h1 {
        font-size: 57px;
        font-weight: bold;
        line-height: 76px;
      }
      .form {
        flex: 1;

        h3 {
          font-size: 30px;
          font-weight: bold;
          line-height: 40px;
        }
        .input-holder {
            width: 100%;
        input {
          font-size: 16px;
          font-weight: bold;
          padding: 12px 21px 12px 67px;
          color: $main-color;
          border: 1px solid $main-color;
        }}
        button {
          font-size: 20px;
          font-weight: bold;
          background-color: $main-color;
          width: 130px;
          height: 44px;
          color: white;
        }
      }
    }
  }
}
</style>
