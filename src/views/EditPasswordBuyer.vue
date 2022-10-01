<template>
  <div class="container-fluid EditPasswordBuyerbg">
      <div>
          <Nav/>
      </div>

      <div class="">
        <div class=" row align-items-center justify-content-center">
            

            <div class="col-md-6 col-sm-12 mt-4">
        <div class="row g-3 mx-4 my-5 ">
            <div class="col-md-12">
                <h4 class="titleStyle">修改密碼</h4>
            </div>           
            <div class="col-md-6">
                <label for="recipeName" class="form-label">舊密碼</label>                
                <input type="text" class="form-control" id="recipeName" v-model="OldPassword">
            </div>
            <div class="col-md-6">
                <label for="recipeName" class="form-label">新密碼</label>                
                <input type="text" class="form-control" id="recipeName" v-model="password">
            </div>  
            
            
            <div class="col-md-12 d-flex justify-content-center">
                <button type="submit" class="addRecipeBtn" @click="updatePW">修改密碼</button>
            </div>
        </div>

            </div>
        </div>
      </div>
      <div class = "col-12">
            <Footer/>
        </div>
    </div>
</template>


<script>
import Nav from "../components/navigator.vue";
import Footer from "../components/footer.vue";
import{updatePassword} from "../services/recipe";
export default {
    data() {
      var validatePass = (OldPassword,rightPW=localStorage.getItem('userPW')) => {
        if (OldPassword === rightPW) {
          this.updatePW();
        } else {
          console.log(OldPassword);
          console.log(rightPW);
          alert("舊密碼錯誤");
        }
      };
      return {
        mId:localStorage.getItem('userId'),
        password:"",
        rightPW:localStorage.getItem('userPW'),
        OldPassword:"",
        validatePass,
        showname:localStorage.getItem('userName'),
      }
    },
    components:{
        Nav,   
        Footer,      
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

     updatePW(){
       if(this.OldPassword == this.rightPW){
         updatePassword({
          mId:this.mId,
          password:this.password            
        }).then((res) => {
          alert("修改成功");
          this.$router.push({path:'/editmemberbuyer'});
        });
       }
       else{
         alert("舊密碼錯誤");
       }
        
      }, 
    }
}
</script>

<style scoped>
@import './../assets/css/sideStyle.css';
.EditPasswordBuyerbg{
    background-color: #ebe6d7;
    min-height: 100vh;
}
.updatepwBtn{
  color: white;
    background-color: rgb(100,88,88);
    display: inline-block;
    font-weight: 400;
    line-height: 1.5;
    text-align: center;
    text-decoration: none;
    vertical-align: middle;
    user-select: none;
    border: 1px solid transparent;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    border-radius: 0.25rem;
    margin-left: 20px;
}
.updatepwBtn:hover{
  background-color: rgb(138, 123, 123);
}
</style>