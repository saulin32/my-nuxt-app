<template>
  <div class="gallery-list">
    <img
      class="gallery-list__img"
      :class="{ 'gallery-list__img--active': item.id === activeItem }"
      v-for="item in data"
      :key="item.id"
      :src="item.src"
      :alt="item.title"
      @click="selectItem(item)"
    />
  </div>
</template>

<script>
export default {
  emits: ['update:activeItem'],
  props: {
    data: {
      type: Array,
      required: true,
    },
    activeItem: {
      type: Number,
      required: true,
    },
  },
  methods: {
    selectItem(item) {
      this.$emit('update:activeItem', item.id);
    },
  },
};
</script>

<style lang="scss" setup>
.gallery-list {
  display: flex;
  flex-direction: column;
  margin-right: 30px;
  gap: 4px;
  width: 70px;

  &__img {
    height: 87px;
    object-fit: cover;
    cursor: pointer;

    &--active {
      opacity: 0.5;
    }
  }
}
</style>
