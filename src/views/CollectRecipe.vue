<template>
  <div class="container-fluid bg">
    <div>
        <Nav/>
    </div>

    <div class="row justify-content-center align-items-center">
        <div class="col-5 mt-5 pt-5">
            <h4 class="titleStyle">我的收藏</h4>
        </div> 
        
        <div class = "col-12 pt-4 mb-5">
            <div class = "row row-cols-1 align-items-center mx-lg-3">
            <CollectList v-for="item in listData" :key="item.ID" :item="item" @deleteCollect="DeleteCollect"/>
            </div>
        </div>

        
        <div class = "col-12">
            <Footer/>
        </div>
    </div>
</div>
</template>

<script>
import CollectList from "../components/CollectList.vue";
import{getAllCollects,deleteCollect} from "../services/recipe";
import Nav from "../components/navigator.vue";
import Footer from "../components/footer.vue";
export default {
     components:{
        Nav,
        Footer,
        CollectList,
    },
    data(){
        return{
            listData: [],
            rId:"",
            mId:localStorage.getItem('userId'),
        };
    },
    methods: {
     goEditMember() {
       this.$router.push("/editmember")
     },
     goWriteRecipe() {
       this.$router.push("/writerecipe")
     },
     goEditRecipe() {
       this.$router.push("/editrecipe")
     },
     goCollectRecipe() {
       this.$router.push("/collectrecipe")
     },
    ShowAllCollects(){
        getAllCollects({
            mId:this.mId,
        }).then((res) => {
            this.listData = res.data;            
        });
    },
    DeleteCollect(rId){
            deleteCollect({
                rId: rId,
                mId:this.mId
            }).then((res)=>{
                alert('刪除成功');
                this.ShowAllCollects();
            })
        },   
      
    },
    mounted() {
      this.ShowAllCollects()
    },

}
</script>

<style>
.bg{
    background-color: #ebe6d7;
}
</style>