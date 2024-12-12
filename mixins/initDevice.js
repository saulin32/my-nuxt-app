let resizeObserver = null;

export default {
  data() {
    return {
      isDesktop: false, // device > 1024px
      isLaptop: false, // 768px < device <= 1024px
      isTablet: false, // 480px < device <= 768px
      isPhone: false, // device <= 480px
    };
  },

  mounted() {
    resizeObserver = new ResizeObserver((entries) => {
      this.isDesktop = false;
      this.isLaptop = false;
      this.isTablet = false;
      this.isPhone = false;

      const entrie = entries[0];

      if (!entrie) {
        return;
      }

      const isLandscape = window.matchMedia("(orientation: landscape)").matches
      const width = isLandscape ? window.screen.height : entrie.contentRect.width

      if (width > 1024) {
        this.isDesktop = true;
        return;
      }

      if (768 < width && width <= 1024) {
        this.isLaptop = true;
        return;
      }

      if (480 < width && width <= 768) {
        this.isTablet = true;
        return;
      }

      if (width <= 480) {
        this.isPhone = true;
        return;
      }
    });

    if (!resizeObserver) {
      return;
    }

    resizeObserver.observe(document.querySelector('html'));
  },

  destroyed() {
    resizeObserver.disconnect();
  },
};

