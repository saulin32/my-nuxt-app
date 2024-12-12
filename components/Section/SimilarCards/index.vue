<template>
  <div class="similar-cards">
    <h2 class="similar-cards-title">ПОХОЖИЕ ТОВАРЫ</h2>

    <div class="similar-cards__items">
      <SimilarCard v-for="item in cards" :key="item.id" :data="item" />
    </div>
  </div>
</template>

<script>
import SimilarCard from '@/components/Section/SimilarCard';

export default {
  components: {
    SimilarCard
  },
  data() {
    return {
      cards: [
        {
          id: 1,
          img: require('~/assets/img/photo2.png'),
          title: 'ПЛАТЬЕ С V-ОБРАЗНЫМ ВЫРЕЗОМ, БЕЛЫЙ',
          price: '14 900 RUB',
          newPrice: '8 000',
        },
        {
          id: 2,
          img: require('~/assets/img/photo3.png'),
          title: 'ЖАКЕТ ДВУБОРТНЫЙ, СЕРО-ГОЛУБОЙ',
          price: '8900 RUB',
          newPrice: null,
        },
        {
          id: 3,
          img: require('~/assets/img/photo4.png'),
          title: 'ЖАКЕТ ДВУБОРТНЫЙ, СЕРО-ГОЛУБОЙ',
          price: '8900 RUB',
          newPrice: null,
        },
        {
          id: 4,
          img: require('~/assets/img/photo5.png'),
          title: 'ЖАКЕТ ДВУБОРТНЫЙ, СЕРО-ГОЛУБОЙ',
          price: '8900 RUB',
          newPrice: null,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.similar-cards {
  display: flex;
  flex-direction: column;
  padding: 0 15px;
  gap: 24px;

  @include laptop {
    margin-top: 42px;
    padding-left: 40px;
    padding-right: 40px;
  }

  &-title {
    @include text-big;
    color: $black-middle;
  }

  &__items {
    display: grid;
    grid-template-columns: repeat(2, 50%);
    padding: 4px 0;
    gap: 8px;
    row-gap: 32px;

    @include laptop {
      grid-template-columns: repeat(4, 25%);
    }
  }
}
</style>
