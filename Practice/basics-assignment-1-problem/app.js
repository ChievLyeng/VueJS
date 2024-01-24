const app = Vue.createApp({
  data() {
    return {
      name: "Chiev Lyeng",
      age: 20,
      image: "https://images.unsplash.com/photo-1566438480900-0609be27a4be?q=80&w=994&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    };
  },
  methods: {
    nextAge() {
      return this.age + 5;
    },
    favoriteNumber() {
      return Math.floor(Math.random() * (10 - 1) + 1);
    },
  },
});

app.mount("#assignment");
