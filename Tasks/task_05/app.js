const app = Vue.createApp({
    data(){
        return{
            task: '',
            tasks: [],
            hidden: true,
        }
    },
    methods:{
        addTask(){
            this.tasks.push(this.task)
            this.task = ''
        },
        hiddenList(){
            this.hidden = !this.hidden
        }
    }

})
app.mount('#assignment')