<template>
  <div id="app">
    <Header></Header>
    <main>
      <nuxt />
    </main>
  </div>
</template>

<script>
import Header from '@/components/Common/Header';

export default {
  components: {
    Header,
  },
};
</script>
