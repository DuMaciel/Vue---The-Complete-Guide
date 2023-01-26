const app = Vue.createApp({
    data(){
        return{
            color: '',
            classe: 0,
            visible: true,
        }
    },
    computed: {
        decoration(){
            return {user1: this.classe==1, user2: this.classe==2, user3: this.classe==3,user4: this.classe==4, user5: this.classe==5, 'visible': this.visible, 'hidden': !this.visible}
        },
    },
    methods:{
        toggleVisible(){
            this.visible = !this.visible
        },
    },
})
app.mount('#assignment');