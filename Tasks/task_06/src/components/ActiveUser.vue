<template>
    <div>
        <h2>{{ user.name }}</h2>
        <h3><strong>Age:</strong> {{ user.age }}</h3>
        <h3><strong>Email:</strong> {{ user.email }}</h3>
    </div>
</template>
<script lang="js">
export default {
    props:{
        user: {
            types: {
                id: String,
                name: String,
                age: Number,
                email: String
            },
            required: true,
        }
    }
}
</script>