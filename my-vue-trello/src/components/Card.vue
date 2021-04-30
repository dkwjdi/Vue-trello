<template>
    <div>
        Card
        <div v-if="loading">loading....</div>
        <div v-else>
               <div>{{cid}}</div>
        </div>
     
     
        </div>
    
</template>

<script>
export default {
    data(){
        return{
            cid:0,
            loading:false,
        }
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