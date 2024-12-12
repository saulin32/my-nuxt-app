<template>
  <div class="card">
    <img v-if="data.img" class="card-img" :src="data.img" :alt="data.img" />
    <div class="card__wrapper">
      <p class="card-title">{{ data.title }}</p>
      <div class="card__price">
        <span> {{ data.price }} </span>
        <span> {{ data.newPrice }} </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  cursor: pointer;

  &-title {
    @include text-normal;
    text-transform: uppercase;

    @include laptop {
      text-transform: lowercase;
    }
  }

  &-img {
    width: -webkit-fill-available;

    @include laptop {
      height: auto;
    }
  }

  &__price {
    @include text-normal;
    color: $gray-middle;
  }

  &__wrapper {
    display: flex;
    flex-direction: column;
    margin-top: 5px;
    gap: 4px;

    @include laptop {
      margin-top: 10px;
      gap: 15px;
    }
  }
}
</style>
