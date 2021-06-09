<template lang="">
    <div class="d-flex">
        <!-- Actual Rating is {{ rating }} -->
        <i class="fas fa-star" v-for="star in fullStar" :key="'full' + star"></i>
        <i class="fas fa-star-half-alt" v-if="halfStar"></i>
        <i class="far fa-star" v-for="star in emptyStars" :key="'empty' + star"></i>
    </div>
</template>


<script>
export default {
  props: {
    rating: Number,
  },
  computed: {
    halfStar() {
      const fraction = Math.round((this.rating - Math.floor(this.rating)) * 100);
    //   console.log(fraction);
      return fraction > 0 && fraction < 50;
    },
    fullStar() {
      return Math.round(this.rating);
    },
    emptyStars() {
      return 5 - Math.ceil(this.rating);
    },
  },
  
};
</script>

<style lang="">
</style>