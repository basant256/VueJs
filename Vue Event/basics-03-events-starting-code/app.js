const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name:'',
     
    };
  },
  watch:{
    counter(value){
        if(value>100){
          this.counter=0;
        }
    }
  },
  computed:{
    fullName(){
      console.log("Hey");
      if(this.name==''){
        return '';
      }
      return this.name+' '+'Kumar';
    }
  },
  methods:{
    confirmInput(){
        if(this.name==''){
          return '';
        }
        return this.name+' '+'Kumar';
    },
    submitForm(event){
       // event.preventDefault();
        alert("Form Submitted");
    },
    setName(event,lastName){
      this.name=event.target.value;
    },
    resetInput(){
      this.name='';
    },
    add(num){
      this.counter=this.counter+num;
    },
    remove(num){
      this.counter=this.counter-num;
    }
  }
});

app.mount('#events');
