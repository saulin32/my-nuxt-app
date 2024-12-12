<template>
  <section class="card-info">
    <div class="card-info__header">
      <div class="card-info__wrapper">
        <p class="card-info-text">ЖАКЕТ УДЛИНЁННЫЙ, БЕЛЫЙ</p>
        <svg v-if="isTablet || isPhone" class="card-info__header-icon">
          <use xlink:href="~/assets/icons/sprite.svg#favorite"></use>
        </svg>
      </div>
      <p class="card-info-text">8900 RUB</p>
    </div>

    <div class="card-info__size">
      <p class="card-info__size-title">Размеры</p>
      <div class="card-info__size-list">
        <div class="card-info__size-wrapper">
          <button class="card-info__size-btn" type="button">XS</button>
          <p class="card-info__size-wrapper-text">мало</p>
        </div>
        <div class="card-info__size-wrapper">
          <button class="card-info__size-btn" type="button">S</button>
        </div>
        <div class="card-info__size-wrapper">
          <button
            class="card-info__size-btn card-info__size-btn--inactive"
            type="button"
          >
            M
          </button>
          <p class="card-info__size-wrapper-text">подписка</p>
        </div>
      </div>
    </div>

    <div class="card-info__color">
      <p class="card-info__color-title">Цвет: белый</p>
      <div class="card-info__color-wrapper">
        <button
          class="card-info__color-item card-info__color-item--white"
        ></button>
        <button
          class="card-info__color-item card-info__color-item--dark"
        ></button>
        <button
          class="card-info__color-item card-info__color-item--other"
        ></button>
      </div>
    </div>

    <div class="card-info__actions">
      <button class="card-info__actions-btn" type="button">
        добавить в корзину
      </button>
      <button class="card-info__actions-favorite" type="button">
        <svg class="card-info__header-icon">
          <use xlink:href="~/assets/icons/sprite.svg#favorite"></use>
        </svg>
      </button>
    </div>

    <Accordeon :data="accordeonData" />
  </section>
</template>

<script>
import Accordeon from '@/components/Ui/Accordeon';
import initDevice from '@/mixins/initDevice';

export default {
  components: {
    Accordeon,
  },
  mixins: [initDevice],

  data() {
    return {
      accordeonData: [
        {
          id: 1,
          title: 'Описание',
          content: '',
        },
        {
          id: 2,
          title: 'Состав и уход',
          content: '',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.card-info {
  $self: &;

  padding: 31px 16px;

  @include laptop {
    padding: 0;
  }

  &__header {
    display: flex;
    flex-direction: column;
    margin-bottom: 31px;
    gap: 8px;

    &-icon {
      width: 13px;
      height: 17px;
      cursor: pointer;
    }
  }

  &-text {
    @include text-big;
  }

  &__wrapper {
    display: flex;
    justify-content: space-between;
  }

  &__size {
    display: flex;
    flex-direction: column;
    margin-bottom: 34px;
    gap: 9px;

    &-title {
      @include text-normal;
      color: $gray-dark;
    }

    &-list {
      display: flex;
      gap: 14px;
    }

    &-btn {
      background-color: $white;
      padding: 9px 28px;
      border: 1px solid $black-middle;
      cursor: pointer;

      &--inactive {
        color: $gray-light;
        border-color: $gray-light;
        pointer-events: none;
      }
    }

    &-wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 4px;

      &-text {
        @include text-normal;
        color: $gray-light;
      }
    }
  }

  &__color {
    display: flex;
    flex-direction: column;
    margin-bottom: 32px;
    gap: 6px;

    &-title {
      @include text-normal;
      color: $gray-dark;
    }

    &-item {
      width: 28px;
      height: 28px;
      outline: none;
      border: none;
      cursor: pointer;

      &--white {
        background-color: $white;
        border: 1px solid $gray-light;
      }

      &--dark {
        background-color: $black;
      }

      &--other {
        background-color: $early-dawn;
      }
    }

    &-wrapper {
      display: flex;
      gap: 16px;
    }
  }

  &__actions {
    display: none;
    margin-bottom: 40px;

    @include laptop {
      display: flex;
      gap: 10px;
    }

    &-favorite {
      padding: 12px 15px;
      border: 1px solid $black;
      color: $black;
      background: $white;
      outline: none;
      cursor: pointer;
    }

    &-btn {
      @include text-large;

      padding: 15px 25px;
      width: 100%;
      color: $white;
      background: $black;
      border: none;
      outline: none;
      text-transform: uppercase;
      cursor: pointer;
    }
  }
}
</style>
