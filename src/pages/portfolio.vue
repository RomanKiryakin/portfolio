<template>
  <div class="container-fluid portfolio_main_container">
    <div class="portfolio_bgc_container">
    <div class="row">
      <div class="col-sm-12 portfolio_text_header">
        Портфолио
      </div>
    </div>
    <div class="row">
      <div class="col-sm-6 portfolio_item_container" v-for="example in examples" :key="example.id">
        <img :src='example.image'  :alt="example.title">
        <div class="item_desc">
          {{example.description}}
        </div>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
import examples from '@/data/examples';

export default {
  name: 'my-portfolio',
  data() {
    return {
      examples,
    };
  },
};
</script>

<style scoped>

</style>
