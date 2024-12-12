<template>
  <div class="control">
    <ul v-if="isPhone || isTablet" class="control-dots">
      <li
        v-for="(item, index) in data"
        :key="`${item.id}-dot`"
        class="control-dot"
        :class="{
          'control-dot--active': index === indexActive,
        }"
        role="button"
      />
    </ul>
    <div v-if="isDesktop || isLaptop" class="control-arrows">
      <button
        class="control-arrows__item"
        :class="{ 'control-arrows__item--inactive': indexActive === 0 }"
        type="button"
        @click="prev"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 15 10">
          <path
            fill="currentColor"
            fill-rule="evenodd"
            d="M0 5l5.275 5 .968-.917-3.622-3.434H15V4.35H2.62L6.244.917 5.275 0 0 5z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
      <button
        class="control-arrows__item"
        :class="{
          'control-arrows__item--inactive': indexActive === data.length - 1,
        }"
        type="button"
        @click="next"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 15 10">
          <path
            fill="currentColor"
            fill-rule="evenodd"
            d="M15 5l-5.275 5-.968-.917 3.623-3.434H0V4.35h12.38L8.756.917 9.725 0 15 5z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
import initDevice from '../../../mixins/initDevice';

export default {
  mixins: [initDevice],
  props: {
    data: {
      type: Array,
      required: true,
    },

    indexActive: {
      type: Number,
      required: true,
    },
  },

  emits: ['update:indexActive'],

  methods: {
    prev() {
      let newIndex = this.indexActive - 1;

      if (newIndex < 0) {
        newIndex = this.data.length - 1;
      }

      this.$emit('update:indexActive', newIndex);
    },

    next() {
      let newIndex = this.indexActive + 1;

      if (newIndex >= this.data.length) {
        newIndex = 0;
      }

      this.$emit('update:indexActive', newIndex);
    },
  },
};
</script>

<style lang="scss" scoped>
.control {
  padding: 5px 6px;

  &-dots {
    display: flex;
    gap: 6px;
  }

  &-arrows {
    display: flex;
    justify-content: space-between;

    &__item {
      padding: 8px 11px;
      background-color: $white;
      border: none;
      border-radius: 50%;
      outline: none;
      cursor: pointer;

      svg {
        width: 10px;
        height: 15px;
      }

      &--inactive {
        opacity: 0.5;
        pointer-events: none;
      }
    }
  }

  &-dot {
    width: 7px;
    height: 7px;
    color: $white;
    opacity: 0.4;

    &--active {
      opacity: 1;
    }
  }
}
</style>
