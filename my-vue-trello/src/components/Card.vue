<template>
    <div>
        <Modal>
        Card
        <div v-if="loading">loading....</div>
        <div v-else>
               <div>{{cid}}</div>
        </div>
     </Modal>
     
        </div>
    
</template>

<script>
import Modal from './Modal.vue'
export default {
    data(){
        return{
            cid:0,
            loading:false,
        }
    },
    components : {
        Modal,
    },
    watch : {
        $route :{
            handler : 'fetchData',
            immediate : true
        }
    },
  
    methods:{
        fetchData(){
            this.loading=true
             this.cid=this.$route.params.cid;
             setTimeout(()=>{
                 this.loading=false;
             },1000)

        }
    }
    
}
</script>


<style >
    
</style>