const app = Vue.createApp({
  data() {
    return {
      courseGoalA: "Finish the course and learn Vue!",
      courseGoalB: "Master Vue and build amazing apps!",
      courseGoalC: "<h1> I love you </h1>",
      vueLink: "https://vuejs.org/",
    };
  },
  methods: {
    outputGoal() {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        return this.courseGoalA;
        // here vue convert all in return to instance object
      } else {
        return this.courseGoalB;
      }
    },
  },
});

app.mount("#user-goal");
