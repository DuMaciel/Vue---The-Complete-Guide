<template>
    <div>
        <form @submit.prevent="newUser"> 
        <h2>New User!</h2>
        <input type="text" v-model="name" placeholder="Enter the name here..." required>
        <input type="number" v-model="age" placeholder="Enter the age here..." required>
        <input type="email" v-model="email" placeholder="Enter the email here...">
        <button type="submit">Add User</button>
        </form>   
    </div>
</template>
<script lang="js">
export default {
    emits:['new-user'],
    data(){
        return {
            name: '',
            age: null,
            email: ''
        }
    },
    methods:{
        newUser(){
            const user = {
                id: (new Date()).toISOString,
                name: this.name,
                age: this.age,
                email: this.email
            }
            this.$emit('new-user', user)
        }
    }
}
</script>