<template>
    <ul>
        <li v-for="(route, index) in routes" :key="index">
            <router-link v-if="!route.hidden" :to="route.path" class="menu-item" >
                {{route.display}}
            </router-link>
        </li>
    </ul>
</template>
<script>
import { routes } from "../models/routes";

export default {
    data(){
        return{
            routes,
        }
    }
}
</script>
<style scoped>
.menu-item.router-link-exact-active{
    background: rgb(230, 230, 230);
}
.menu-item.router-link-exact-active::after{
    content: "|";
    background: #0864c7;
}
</style>