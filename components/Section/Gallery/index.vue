<template>
  <div class="gallery">
    <img
      class="gallery__img"
      :class="{ 'gallery__img--active': item.id === activeItem }"
      :style="{ transform: `translateX(-${activeItem * 100}%)` }"
      v-for="item in galleryImages"
      :key="item.id"
      :src="item.src"
      :alt="item.title"
    />

    <Control
      class="gallery__controls"
      :data="galleryImages"
      :indexActive="activeItem"
      @update:indexActive="setIndexActive($event)"
    />
  </div>
</template>

<script>
import Control from '@/components/UI/Control';
import initDevice from '@/mixins/initDevice';

export default {
  props: {
    activeItem: {
      type: Number,
      default: 0,
    },
  },
  emits: ['update:activeItem'],
  components: {
    Control,
  },
  mixins: [initDevice],

  data() {
    return {
      galleryImages: [
        {
          id: 0,
          title: 'Фото 1',
          src: require('~/assets/img/photo1.png'),
        },
        {
          id: 1,
          title: 'Фото 2',
          src: require('~/assets/img/photo1.png'),
        },
        {
          id: 2,
          title: 'Фото 3',
          src: require('~/assets/img/photo1.png'),
        },
      ],
    };
  },

  methods: {
    setIndexActive(id) {
      this.$emit('update:activeItem', id);
    },
  },
};
</script>

<style lang="scss" scoped>
.gallery {
  position: relative;
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;


  @include laptop {
    width: 100%;
    height: fit-content;
    max-width: 518px;
    overflow: hidden;
  }

  &__img {
    min-width: 100vw;
    scroll-snap-align: start;
    transition: transform 0.5s ease;

    @include laptop {
      min-width: auto;
      width: inherit;
    }
  }

  &__controls {
    position: absolute;
    bottom: 12px;
    left: 50%;

    @include laptop {
      top: 50%;
      transform: translateY(-20%);
      left: 0;
      right: 0;
    }
  }
}
</style>
