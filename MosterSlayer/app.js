function getRandomValue(min,max){
    return Math.floor(Math.random()*(max-min))+min;
}

const app = Vue.createApp({
    data(){
        return {
            playerHealth:100,
            monsterHealth:100
        }
    },
    computed:{
            monsterHealthBarStyle(){
                return {width: this.monsterHealth + '%'}
            },
            playerHealthBarStyle(){
                return {width:this.playerHealth + '%'}
            }
    },
    methods:{
        attackMonster(){
            const attackValue = getRandomValue(5,12)
            this.monsterHealth-=attackValue;
            this.attackPlayer();
        },

        attackPlayer(){
            const attackValue = getRandomValue(8,12);
            this.playerHealth-=attackValue;
        },

        specialAttackMonster(){
            const attackValue = getRandomValue(10,25);
            this.monsterHealth-=attackValue;
            this.attackPlayer();
        }
    }
});

app.mount('#game');