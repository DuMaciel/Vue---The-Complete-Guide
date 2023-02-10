<template>
    <user-data @new-user="newUser"></user-data>
    <active-user v-for="user in users" :key="user.id" :user="user"></active-user>
</template>
<script lang="js">
export default {
    data(){
        return {
            users:[
                {
                    id: (new Date()).toISOString,
                    name: 'Eduardo',
                    age: 20,
                    email: 'email@email.com'
                },
                {
                    id: (new Date()).toISOString,
                    name: 'Leonardo',
                    age: 21,
                    email: 'email@email.com'
                }
            ]

        }
    },
    methods:{
        newUser(user){
            this.users.push(user)
        }
    }
}
</script>
<style>
    :root{
        --blue: hsl(228, 50%, 50%);
    }
    #app {
        width: 600px;
        margin: auto;
        font-family: Arial, Helvetica, sans-serif;
    }
    #app div {
        text-align: center;
        margin: auto;
        background-color: hsl(228, 50%, 90%);
        border-radius: 1em;
        padding: 1em;
        margin-top: 1em;
    }
    #app div h2 {
        border-bottom: 0.1em solid var(--blue);
    }
    #app div strong {
        color: var(--blue);
    }
    #app div input, 
    #app div button {
        display: block;
        box-sizing: border-box;
        width: 90%;
        margin: auto;
        margin-top: 1em;
        border: 0.1em solid var(--blue);
        border-radius: 0.5em;
        padding: 0.5em;
    }
    #app div button {
        background-color: var(--blue);
        color: white;
    }
</style>