<template>
  <div class="container">
    Rows is : {{ rows }}
    <div v-if="loading">Data is loading...</div>
    <div v-else>
      <div class="row mb-4" v-for="row in rows" :key="'row' + row">
        <div
          class="col"
          v-for="(bookable, column) in bookablesInRow(row)"
          :key="'row' + row + column"
        >
          <bookable-list-item
            :item-title="bookable.title"
            :item-content="bookable.content"
            :price="1000"
          ></bookable-list-item>
        </div>
        <div class="col" v-for="p in placeholdersInRow(row)" :key="'placeholder' + row + p"></div>
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

    setTimeout(() => {
      this.bookables = [
        { 
          id: 1,
          title: "Cheap Villa !!!",
          content: "A very cheap Villa",
        },
        {
          id: 2,
          title: "Cheap Villa 2",
          content: "A very cheap Villa 2",
        },
        {
          id: 3,
          title: "Cheap Villa 3",
          content: "A very cheap Villa 3",
        },
        {
          id: 4,
          title: "Cheap Villa 4",
          content: "A very cheap Villa 4",
        },
        {
          id: 5,
          title: "Cheap Villa 5",
          content: "A very cheap Villa 5",
        },
        {
          id: 6,
          title: "Cheap Villa 6",
          content: "A very cheap Villa 6",
        },
        {
          id: 7,
          title: "Cheap Villa 7",
          content: "A very cheap Villa 7",
        },
        {
          id: 8,
          title: "Cheap Villa 8",
          content: "A very cheap Villa 8",
        },
      ];
      this.loading = false;
    }, 2000);
  },
};
</script> 

