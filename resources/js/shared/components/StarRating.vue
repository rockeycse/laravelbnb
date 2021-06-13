<template lang="">
    <div class="d-flex">
        <!-- Actual Rating is {{ rating }} -->
        <i class="fas fa-star" v-for="star in fullStar" :key="'full' + star" @click="$emit('input', star)"></i>
        <i class="fas fa-star-half-alt" v-if="halfStar"></i>
        <i class="far fa-star" v-for="star in emptyStars" :key="'empty' + star" @click="$emit('input', fullStar + star)"></i>
    </div>
</template>


<script>
export default {
  props: {
    value: Number,
  },
  computed: {
    halfStar() {
      const fraction = Math.round((this.value - Math.floor(this.value)) * 100);
    //   console.log(fraction);
      return fraction > 0 && fraction < 50;
    },
    fullStar() {
      return Math.round(this.value);
    },
    emptyStars() {
      return 5 - Math.ceil(this.value);
    },
  },
  
};
</script>

<style lang="">
</style>