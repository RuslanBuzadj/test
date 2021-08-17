<template>
    <li class="sidebar-list-item" :class="{inner:isFocus}" @click="focusItem">
        <div class="buttons-controls" v-if="isFocus">
            <div class="buttons-controls__left">
                <base-button @click.stop="itemDown">
                    <img src="@/assets/img/arrow-top.svg" alt="">
                </base-button>
                <base-button @click.stop="itemUp">
                    <img src="@/assets/img/arrow-top-up.svg" alt="">
                </base-button>
            </div>
            <div class="buttons-controls__right">
                <base-button @click.stop="addText">
                    <img src="@/assets/img/brush.svg" alt="">
                </base-button>
                <base-button @click.stop="copyItem">
                    <img src="@/assets/img/copy.svg" alt="">
                </base-button>
                <base-button @click.stop="deleteItem">
                    <img src="@/assets/img/trash.svg" alt="">
                </base-button>
            </div>
        </div>
        <img :src="image" alt="">
        <span>{{title}}</span>
        <div class="input-group" v-if="isFocus">
            <input type="text" placeholder="Register now" @click.stop v-model="valueInput">
        </div>
    </li>
</template>

<script>
import  '@/assets/img/arrow-top.svg'
import  '@/assets/img/arrow-top-up.svg'
import  '@/assets/img/brush.svg'
import  '@/assets/img/copy.svg'
import  '@/assets/img/trash.svg'
export default {
    props: ['id','image', 'title', 'isFocus'],  
    emits:[
        'focus-item', 
        'item-up', 
        'item-down',
        'item-down', 
        'add-text', 
        'copy-item', 
        'delete-item'
    ],  
    data: () => ({        
        valueInput:''
    }),    
    methods:{        
        focusItem() {            
            this.$emit('focus-item', this.id, this.$props.isFocus)            
        },  
        itemUp() {            
            this.$emit('item-up', this.id)            
        },
        itemDown() {            
            this.$emit('item-down', this.id)            
        },         
        copyItem() {
            this.$emit('copy-item', this.id)
        },   
        deleteItem() {
            this.$emit('delete-item', this.id)
        },  
        addText() {
            navigator.clipboard.readText()
                .then(text => {
                    this.valueInput = text;
                })
                .catch(err => {
                alert('Something went wrong', err);
            })
        }      
    },
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
    .buttons-controls{
        position: absolute;
        top: -27px;
        right: 0;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .buttons-controls__left {
        margin-right: 5px;
        background: #449CF4;
        border-radius: 3px 3px 0px 0px;
    }
    .buttons-controls__left,
    .buttons-controls__right {
        padding: 3px;
        display: flex;
        align-items: center;
    }
    .buttons-controls__right {
        background-color: #68C2E9;
        border-radius: 3px 3px 0px 0px;
    }
    .buttons-controls .btn {
        width: 21px;
        height: 21px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: transparent;
        cursor: pointer;
        outline: none;
        border: 0;
    }
    .input-group {
        padding: 5px;
        width: 100%;
        background: #FFFFFF;
        box-shadow: 0px 64px 64px rgba(211, 214, 215, 0.2), 0px 32px 32px rgba(211, 214, 215, 0.2), 0px 16px 16px rgba(211, 214, 215, 0.2), 0px 4px 4px rgba(211, 214, 215, 0.2), 0px 2px 2px rgba(211, 214, 215, 0.2);
        border-radius: 2px;
    }
    .input-group input {
        padding: 5px;
        width: 100%;
        border: 1px solid #E4E6F1;
        border-radius: 2px;
        outline: none;
    }
    .buttons-controls .btn:hover{
        background-color: #4B97B8;
        border-radius: 2px;
    }
    .buttons-controls .btn img {
        margin-bottom: 0;
    }
    .sidebar-list-item.inner {
        background-color: #D9E7FF;
    }
    .sidebar-list-item.inner:first-child{
        margin-top: 27px;
    }
    .sidebar-list-item.inner:not(:first-child) {
        margin-top: 40px;
    }
    .sidebar-list-item img {
        margin-bottom: 10px;
    }
</style>