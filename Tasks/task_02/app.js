const app = Vue.createApp({
    data(){
        return{
            text: '',
            textEnter: '',
        }

    },
    methods:{
        showAlert(){
            alert('Alert here!')
        },
        refreshText(event){
            this.text = event.target.value;
        },
        refreshTextEnter(event){
            this.textEnter = event.target.value;
        }
    }
})
app.mount('#assignment');