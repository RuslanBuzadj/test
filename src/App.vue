<template>
   <the-header></the-header>
   <div class="main-wrapper">
      <the-aside>
        <options-list :isSidebar="true">
            <option-item v-for="option in options" 
              :key='option.id'
              :id="option.id"
              :title="option.title"
              :image="option.image"              
              @change-item="dropItem"
              draggable='true'
              @drag-item="dragItem"
              ></option-item> 
        </options-list>
      </the-aside>
      <the-main>
        <options-list @drop="odDrop($event)" @dragenter.prevent @dragover.prevent>
          <option-item-main v-for="option in optionsMain" 
            :key='option.id'
            :id="option.id"
            :title="option.title"
            :image="option.image"
            :isFocus="option.isFocus"
            @focus-item="isFocus"
            @delete-item="itemDelete" 
            @copy-item="itemCopy"
            @item-up="itemUp"   
            @item-down="itemDown"       
            ></option-item-main>
          </options-list>
      </the-main>
   </div>
</template>

<script>
import TheHeader from './components/layouts/TheHeader.vue'
import TheAside from './components/layouts/asside.vue'
import TheMain from './components/layouts/Main.vue'
import OptionsList from './components/options/OptionsList.vue'
import OptionItem from './components/options/OptionsItem.vue'
import OptionItemMain from './components/options/OptionsItemMain.vue'
export default {
  name: 'App',
  components:{
    TheHeader,
    TheAside,
    TheMain,
    OptionsList,
    OptionItem,
    OptionItemMain
  },
  data: () => ({
        options: [
            {
                id: 'head',
                title:'Headline',
                image: './image/Headline.svg',                
            },
            {
                id: 'paragraph',
                title:'Paragraph',
                image: './image/text-align-left.svg'
            },
            {
                id: 'button',
                title:'Button',
                image: './image/image.svg'
            },
            {
                id: 'image',
                title:'Image',
                image: './image/image-2.svg'
            },
        ],
        optionsMain: []
    }),
    methods: {
      dropItem (id) {          
        const item = this.indexFind(this.options, id);
        const newItem = {
          id: new Date().toISOString(),
          title: this.options[item].title,
          image: this.options[item].image,
          isFocus: false,
        }
        this.optionsMain.unshift(newItem)
      },
      dragItem(e, id) {          
          e.dataTransfer.dropEffect = 'move';
          e.dataTransfer.dropAllowed = 'move';
          e.dataTransfer.setData('itemId', id)
      },
      odDrop(e) {        
        const itemId =  e.dataTransfer.getData('itemId');
        this.dropItem(itemId)
      },
      isFocus (id, isFocus) {
        const optionsItem = this.indexFind(this.optionsMain, id); 
        this.optionsMain.forEach(item => item.isFocus = false)      
        this.optionsMain[optionsItem].isFocus = !isFocus
      },
      itemCopy(id) {
        const index = this.indexFind(this.optionsMain, id);
        const newItem = {
          id: new Date().toISOString(),
          title: this.optionsMain[index].title,
          image: this.optionsMain[index].image,
          isFocus: false,
        }
        this.optionsMain.splice(index + 1, 0,newItem)
      },
      itemUp (id) {
        const index = this.indexFind(this.optionsMain, id);
        const arrItem = this.optionsMain[index]
        if(index != 0) {
        this.optionsMain.splice(index, 1);
        this.optionsMain.splice(index - 1, 0, arrItem)}
      },
      itemDown (id) {
        const index = this.indexFind(this.optionsMain, id);
        const arrItem = this.optionsMain[index]
        if(index != this.optionsMain.length) {
        this.optionsMain.splice(index, 1);
        this.optionsMain.splice(index + 1, 0, arrItem)}
      },
      itemDelete(id) {
        const index = this.indexFind(this.optionsMain, id);        
        this.optionsMain.splice(index, 1)
      },
      indexFind(arr, id) {
        return arr.findIndex(res => res.id === id);
      }
    },
}
</script>

<style>
  *{
    box-sizing: border-box;
  }
  h1 {
    padding: 0;
    margin: 0;
  }
  body {
    padding: 0;
    margin: 0;
    font-family: 'Roboto', sans-serif;
  }
  .main-wrapper {
    display: flex;
    margin-top: 68px;
    min-height: calc(100vh - 68px);
  }
  ul, li {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  .main-list .sidebar-list-item{
    margin-bottom: 20px;
  }
</style>
