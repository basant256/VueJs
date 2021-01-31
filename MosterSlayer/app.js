function getRandomValue(min,max){
    return Math.floor(Math.random()*(max-min))+min;
}

const app = Vue.createApp({
    data(){
        return {
            playerHealth:100,
            monsterHealth:100,
            countRound:0,
            winner:null,
            loadMessages:[]
        }
    },
    computed:{
            monsterHealthBarStyle(){
                if(this.monsterHealth <= 0){
                    return {width:'0%'}
                }
                return {width: this.monsterHealth + '%'}
            },
            playerHealthBarStyle(){
                if(this.playerHealth <= 0){
                    return {width:'0%'}
                }
                return {width:this.playerHealth + '%'}
            },
          
            mayUseSpecialAttack(){
                return this.countRound % 3 !==0;
            },
    },
    watch:{
        playerHealth(value){
            if(value<=0 && this.monsterHealth<=0){
                this.winner='Draw';
            }else if(value<=0){
                this.winner='Monster';
            }
        },
        monsterHealth(value){
            if(value<=0 && this.playerHealth<=0){
                this.winner='Draw';
            }else if(value<=0){
                this.winner='Player';
            }
        }
    },
    methods:{
        startGame(){
            this.monsterHealth=100;
            this.playerHealth=100;
            this.winner=null;
            this.countRound=0;
            this.loadMessages=[];
        },
        attackMonster(){

            this.countRound++;
            const attackValue = getRandomValue(5,12)
            this.monsterHealth-=attackValue;
            this.addBattleLog('player','attack',attackValue);
            this.attackPlayer();
        },

        attackPlayer(){
            const attackValue = getRandomValue(8,12);
            this.playerHealth-=attackValue;
            this.addBattleLog('monster','attack',attackValue);
        },
       
        specialAttackMonster(){
            const attackValue = getRandomValue(10,25);
            this.monsterHealth-=attackValue;
            this.addBattleLog('player','attack-special',attackValue);
            this.attackPlayer();
        },
        healPlayer(){

            this.countRound++;
            const healValue=getRandomValue(8,20);
            if(this.playerHealth + healValue>100){
                this.playerHealth=100;
            }else{
                this.playerHealth+=healValue;
            }
            this.addBattleLog('player','heal',healValue);
            this.attackPlayer();
        },
        surrender(){
            this.winner='Monster';
        },
        addBattleLog(who,what,value){
                this.loadMessages.unshift({
                    actionBy:who,
                    actionType:what,
                    actionValue:value
                })
        }
    }
});

app.mount('#game');