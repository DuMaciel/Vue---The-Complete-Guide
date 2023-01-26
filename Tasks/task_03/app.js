const app = Vue.createApp({
    data(){
        return{
            count: 0,
            clicks: 0,
            result: "Not there yet",
        }
    },
    computed: {
        calculateResult(){
            if(this.count < 37){
                return this.result = "Not there yet"
            }
            if(this.count > 37){
                return this.result = "Too much!"
                
            }
            return this.result = "Congraduletions!"
        }
    },
    methods:{
        add(value){
            this.click()
            this.count += value
        },
        reset(){
            this.count = 0
            this.clicks = 0
        },
        click(){
            this.clicks++
        }
    },
    watch: {
        result(){
            const that = this;
            setTimeout(()=> that.count = 0,5000)
        }
    }
})
app.mount('#assignment');