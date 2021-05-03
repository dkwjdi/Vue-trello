<template>
  <div class="add-card">
    <form @submit.prevent="onSubmit">
      <input class="form-control" v-model="inputTitle" type="text" ref="inputText">
      <button class="btn btn-success" :disabled="invalidInput"  type="submit" >Add Card</button>
      <a class="cancel-add-btn" href="" @click.prevent.stop="$emit('close')">&times;</a>
    </form>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  props : ['listId'],
  data() {
    return {
      inputTitle: ''
    }
  },
  computed : {
      invalidInput(){
          console.log(this.inputTitle.trim())
          return !this.inputTitle.trim()
      }
  },

  mounted(){
    
      this.$refs.inputText.focus()
      console.log(this.$el)
      console.log("@@@@@@@@@@@@@@@")
      this.setupClickOutside(this.$el)

  },
  methods : {
    ...mapActions([
      'ADD_CARD'
      ]),
      onSubmit(){
          if(this.invalidInput) return
          const {inputTitle, listId} = this
          this.ADD_CARD({title:inputTitle, listId})
            .finally(()=>this.inputTitle='')

      },
      setupClickOutside(el){
           console.log("@@@@@@@@@@@@@@@####################")
          document.querySelector('body').addEventListener('click', e=>{
              console.log("e.target")
              console.log(el) 
              console.log(el.contains(e.target))
              if(el.contains(e.target)) {
                  console.log("return")
                  return
              }
              console.log("emit")
              this.$emit('close')
          })
      }
  }
}
</script>

<style>
.add-card {
  padding: 10px;
  display: block;
  position: relative;
}
.add-card .cancel-add-btn {
  display: inline-block;
  margin-left: 10px;
  vertical-align: middle;
  text-decoration: none;
  color: #888;
  font-size: 24px;
}
.add-card .cancel-add-btn:hover,
.add-card .cancel-add-btn:focus {
  color: #666;
}
</style>