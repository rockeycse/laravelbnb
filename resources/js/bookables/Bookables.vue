<template>
  <div class="container">
    <!-- Rows is : {{ rows }} -->
    <div v-if="loading"><h1>Data is loading...</h1></div>
    <div v-else>
      <div class="row mb-4" v-for="row in rows" :key="'row' + row">
        <div
          class="col d-flex align-items-stretch"
          v-for="(bookable, column) in bookablesInRow(row)"
          :key="'row' + row + column"
        >
          <bookable-list-item

            v-bind="bookable"
          ></bookable-list-item>
        </div>
        <div
          class="col"
          v-for="p in placeholdersInRow(row)"
          :key="'placeholder' + row + p"
        ></div>
      </div>
    </div>
  </div>
</template>
  

<script>
import BookableListItem from "./BookableListItem.vue";

export default {
  components: {
    BookableListItem,
  },
  data() {
    return {
      bookables: null,
      loading: false,
      columns: 3,
    };
  },
  computed: {
    rows() {
      return this.bookables == null
        ? 0
        : Math.ceil(this.bookables.length / this.columns);
    },
  },
  methods: {
    bookablesInRow(row) {
      return this.bookables.slice((row - 1) * this.columns, row * this.columns);
    },
    placeholdersInRow(row) {
      return this.columns - this.bookablesInRow(row).length;
    },
  },
  created() {
    this.loading = true;
    // const p = new Promise((resolve, reject) => {
    //   console.log(resolve);
    //   console.log(reject);
    //   setTimeout(() => resolve("Hello"), 3000);
    // })
    //   .then((result) => "Hello Again " + result)
    //   .then((result) => console.log(result))
    //   .catch((result) => console.log(`Error ${result}`));

    // console.log(p);
    const request = axios.get(`/api/bookables`).then((response) => {
      this.bookables = response.data.data;
      this.loading = false;
    });
  },
};
</script> 

