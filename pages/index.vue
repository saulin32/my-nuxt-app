<template>
  <div class="container">
    <div class="info">
      <div class="info__wrapper">
        <GalleryList
          v-if="isLaptop || isDesktop"
          :data="galleryImages"
          :activeItem="activeItem"
          @update:activeItem="setActiveItem($event)"
        />
        <Gallery
          :activeItem="activeItem"
          @update:activeItem="setActiveItem($event)"
        />
      </div>
      <CardInfo />
    </div>
    <SimilarCards />
  </div>
</template>

<script>
import Gallery from '@/components/Section/Gallery';
import CardInfo from '@/components/Section/CardInfo';
import SimilarCards from '@/components/Section/SimilarCards';
import initDevice from '@/mixins/initDevice';
import GalleryList from '@/components/Section/GalleryList';

export default {
  mixins: [initDevice],

  components: {
    Gallery,
    CardInfo,
    SimilarCards,
    GalleryList,
  },

  data() {
    return {
      activeItem: 0,
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
    setActiveItem(id) {
      this.activeItem = id;
    },
  },
};
</script>

<style src="~/assets/scss/main.scss" lang="scss"></style>
<style lang="scss" scoped>
.info {
  @include laptop {
    display: grid;
    grid-template-columns: auto 1fr;
    padding-left: 172px;
    padding-right: 172px;
    gap: 61px;
  }

  @include desktop-middle {
    padding-right: 230px;
  }

  &__wrapper {
    @include laptop {
      display: flex;
      gap: 30px;
    }
  }
}
</style>
