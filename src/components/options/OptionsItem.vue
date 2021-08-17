<template>
    <li class="sidebar-list-item" @click="changeItem" @dragstart="dragItem">        
        <img :src="image" alt="">
        <span>{{title}}</span>        
    </li>
</template>

<script>
export default {
    props: ['id','image', 'title'],
    emits:['change-item','drag-item'],
    methods:{
        changeItem() {
            this.$emit('change-item', this.id)
        },
        dragItem(e) {
            this.$emit('drag-item',e , this.id)
        }
    }
}
</script>

<style scoped>
    .sidebar-list-item{
        flex: 0 0 47%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        background: #F6F9FE;
        border-radius: 6px;
        padding: 15px 10px;
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        line-height: 150%;
        letter-spacing: 0.02em;
        margin-bottom: 10px;
        position: relative;
    }
    .sidebar-list-item img {
        margin-bottom: 10px;
    }
</style>