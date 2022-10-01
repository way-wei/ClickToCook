<template>
  <div class="container-fluid bg">
      <div>
          <Nav/>
      </div>

      <div class="">
        <div class="row">
            <div class="col-md-3">
                <nav id="sidebar" class="pt-5">
                    <div class="p-4 pt-5 ml-4">
                        <h5>{{this.showname}}</h5>
                                <ul class="list-unstyled components mb-5">
                                    <li>
                                        <a href="" @click="goEditMember()">修改個人資料</a>                                        
                                    </li>
                                    <li>
                                        <a href="" @click="goWriteRecipe()">撰寫食譜</a> 
                                    </li>
                                    <li>
                                        <a href="" @click="goEditRecipe()">修改食譜</a>                                        
                                    </li>                                                                 
                                </ul>     
                    </div>
                </nav>
            </div>

            <div class="col-md-9 col-sm-12 mt-5">
                <div class="col-md-10 mt-4">
                    <h4 class="titleStyle">修改食譜</h4>
                </div> 
                <div class = "row">
                    <RecipeList v-for="item in listData" :key="item.ID" :item="item"
                    @deleteRecipe="DeleteRecipe"/>
                </div>
            </div>

        </div>
        <div class = "col-12">
            <Footer/>
        </div>
    </div>
</div>
</template>

<script>
import RecipeList from "../components/recipeList.vue";
import{getMemberRecipes} from "../services/recipe";
import Nav from "../components/navigator.vue";
import Footer from "../components/footer.vue";
export default {
     components:{
        Nav,
        Footer,
        RecipeList,
    },
    data(){
        return{
            listData: [],
            mId:localStorage.getItem('userId'),
            rId:"",
            showname:localStorage.getItem('userName'),
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
     goEditPassword() {
       localStorage.setItem('userPW', this.MemberlistData[0].password)
       this.$router.push("/editpassword");
     },
    ShowMemberRecipes(){
        getMemberRecipes({
            mId:this.mId,
        }).then((res) => {
            this.listData = res.data;
        });
    },
      
    },
    mounted() {
      this.ShowMemberRecipes()
    },

}
</script>

<style>
.bg{
    background-color: #ebe6d7;
    height: 100%;
}
</style>