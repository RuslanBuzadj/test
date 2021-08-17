<template>
    <ul :class="[isSidebar ? 'sidebar-list': 'main-list']">
        <slot></slot>    
    </ul>
</template>

<script>
export default {    
    props:['isSidebar']
}
</script>

<style scoped>
    .sidebar-list {
        padding: 30px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
    .main-list {
        padding: 25px 30px;
        width: 100%;
        height: 100%;
    }
</style>