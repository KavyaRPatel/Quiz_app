<template>
    <div>
        <router-view></router-view>
    </div>

</template>

<script>

import main from "./components/main.vue"

export default {
    components: {
        "app-main": main
    }
}
</script>

<style>

</style>
