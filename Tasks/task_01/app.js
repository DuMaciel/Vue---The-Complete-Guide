const app = Vue.createApp({
    data() {
        return{
            name: "Eduardo Maciel",
            age: 20,
            randomNumber: parseInt(Math.random()*10),
            img: "https://static.preparaenem.com/2022/08/paisagem-natural-suica.jpg"
        }
    }
})
app.mount('#assignment')