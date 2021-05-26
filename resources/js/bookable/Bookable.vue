<template>
  <div class="container">
    <div class="row">
      <div class="col-md-8 pb-4">
        <div class="card">
          <div class="card-body">
            <div v-if="!loading">
              <h1>{{ bookable.title }}</h1>
              <hr />
              <article>{{ bookable.description }}</article>
            </div>
            <div v-else>Loading...</div>
          </div>
        </div>
      </div>
      <div class="col-md-4 pb-4">
        <availability></availability>
      </div>
    </div>
  </div>
</template>

<script>
import Availability from "./Availability";

export default {
  components: {
    Availability,
  },
  data() {
    return {
      bookable: null,
      loading: false,
    };
  },
  created() {
    // console.log(this.$route.params.id);\
    this.loading = true;
    const request = axios
      .get(`/api/bookables/${this.$route.params.id}`)
      .then((response) => {
        this.bookable = response.data.data;
        this.loading = false;
      });
  },
};
</script>