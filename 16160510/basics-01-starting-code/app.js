const app=Vue.createApp({
    data(){
        return {
            courseGoalA:'Finish The Course and leran Vue!',
            courseGoalB:'Master in Vue and build amazing app',
            vueHtml:'<h3>I am Learning Vue</h3>',
            vueLink:"https://v3.vuejs.org/"
        };
    },
    methods:{
        outputGoal(){
            
            const random_numb=Math.random();
            if(random_numb < 0.5){
                return this.courseGoalA;
            }else{
                return this.courseGoalB;
            }
        }
    }
});

app.mount('#user-goal');