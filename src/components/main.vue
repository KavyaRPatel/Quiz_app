<template>
    <div>
        <app-login></app-login>
        <app-add></app-add>
    </div>
</template>

<script>
import login from "./login.vue"
import addQuestion from "./addQuestion.vue"

export default {
    components: {
        "app-login": login,
        "app-add": addQuestion

    }
}
</script>

<style>

</style>
