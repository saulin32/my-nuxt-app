<template>
  <div class="header">
    <div class="header__icons">
      <button class="header__icons-btn">
        <svg class="header__icons-icon">
          <use xlink:href="~/assets/icons/sprite.svg#user"></use>
        </svg>
      </button>
      <button class="header__icons-btn">
        <svg class="header__icons-icon">
          <use xlink:href="~/assets/icons/sprite.svg#bag"></use>
        </svg>
      </button>
      <button class="header__icons-btn">
        <svg class="header__icons-icon">
          <use xlink:href="~/assets/icons/sprite.svg#find"></use>
        </svg>
      </button>
    </div>
    <img class="header__logo" src="~/assets/img/header/stik.png" />
  </div>
</template>

<script></script>

<style lang="scss" scoped>
.header {
  position: relative;
  padding: 15px 16px;

  @include laptop {
    padding: 31px 48px;
  }

  &__logo {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
    cursor: pointer;
  }

  &__icons {
    display: flex;
    gap: 16px;

    @include laptop {
      justify-content: flex-end;
    }

    &-icon {
      width: 15px;
      height: 20px;
    }

    &-btn {
      background-color: $white;
      border: none;
      outline: none;
      cursor: pointer;

      &:last-child {
        margin-left: auto;

        @include laptop {
          margin-left: 0;
        }
      }
    }
  }
}
</style>
