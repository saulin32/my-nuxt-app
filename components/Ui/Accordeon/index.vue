<template>
  <div class="accordeon">
    <div class="accordeon__item" v-for="item in data" :key="item.id">
      <div class="accordeon__header">
        <p class="accordeon__header-title">{{ item.title }}</p>
        <svg class="accordeon__header-plus">
          <use xlink:href="~/assets/icons/sprite.svg#plus"></use>
        </svg>
      </div>
      <div class="accordeon__content">
        {{ item.content }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      required: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.accordeon {
  margin-bottom: 9px;

  @include laptop {
    margin-bottom: 0;
  }

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 7px 15px 0;
    cursor: pointer;

    &-title {
      @include text-normal;
      color: $black-middle;
      text-transform: uppercase;
    }

    &-plus {
      width: 9px;
      height: 9px;
      color: $gray-medium;
    }
  }

  &__item {
    border-top: 1px solid $gray-medium;

    &:last-child {
      border-bottom: 1px solid $gray-medium;
    }
  }
}
</style>
