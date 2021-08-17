<template>
    <aside class="aside">
        <slot></slot>
    </aside>
</template>

<style scoped>
    .aside {
        flex: 0 0 270px;
        border-right: 1px solid #E4E6F1;
        position: relative;
        z-index: 1;
    }
</style>