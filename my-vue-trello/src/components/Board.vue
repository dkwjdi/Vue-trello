<template>
    <div>Board
        {{loading}}
        {{typeof loading}}
        <div v-if="loading">loading board...</div>
        <div v-else>
            <div>bid : {{bid}}</div>
            <router-link :to="`/b/${bid}/c/1`">Card1</router-link>
            <router-link :to="`/b/${bid}/c/2`">CaRD2</router-link>
        </div>
    <hr>
    <router-view></router-view>

    </div>
    
</template>

<script>
export default {
    data(){
        return {
            bid: 0,
            loading : false
        }
    },
    methods: {
        fetchData(){
            this.loading=true
            setTimeout(()=>{
                this.bid=this.$route.params.bid;
                this.loading=false
            },1000)

        }
    },
    created(){
        this.fetchData();
    }
}
</script>
 

<style >
    
</style>