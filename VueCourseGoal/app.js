const app = Vue.createApp({
  data() {
    return { 
      enteredGoalValue: '',
      goals: []
     };
  },
  methods: {
    addGoal() {
      this.goals.push(this.enteredGoalValue);
      this.enteredGoalValue='';
    },
    removeGoal(indx){
      this.goals.splice(indx,1);
    }
  }
});

app.mount('#user-goals');