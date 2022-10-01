<template>
  <div class="EditRecipeItembg">
      <div>
          <Nav/>
      </div>

      <div class="container-fluid">
        <div class="row ">
            <div class="col-md-3">
            <nav id="sidebar" class="pt-5">
            <div class="p-4 pt-5 ml-4">
                <h5>會員名稱</h5>
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
            



        <div class="col-md-6 col-sm-12 mt-4">
        <div class="row g-3 mx-4 my-5 ">
            <div class="col-md-12">
                <h4 class="titleStyle">修改食譜</h4>
            </div>            
            <div class="col-md-12 d-flex justify-content-center coverbg">             
                <img :src="`http://127.0.0.1:8000/recipe/${rId}.jpg`" class="img-fluid" id="coverImg" alt="食譜照片">                
            </div>            
            <div class="col-md-12 col-sm-12">
                <label for="recipeName" class="form-label EditRecipeItemLable">食譜名稱</label>
                <div class="recipeNamebg">
                    <a v-if="!this.isEdit">{{ rName }}</a>                                
                    <input v-else type="text" class="form-control" v-model="rName" id="recipeName">
                </div>
            </div>
            <div class="col-md-12 col-sm-12">
                <label for="recipeIntro" class="form-label EditRecipeItemLable">簡介</label>
                <div class="recipeIntrobg">
                    <a v-if="!this.isEdit">{{ intro }}</a>
                    <textarea v-else class="form-control" id="recipeIntro" rows="3" v-model="intro"></textarea>
                </div>
            </div>
            <div class="col-md-6 col-sm-6">
                <label for="SelectCategory" class="form-label mr-5 EditRecipeItemLable">類別</label>
                <div class="selectCategorybg">
                    <a v-if="!this.isEdit">{{ cId }}</a>
                    <select v-else id="SelectCategory" class="form-select" v-model="cId">
                        <option value="">未設定</option>
                        <option value="1">前菜</option>
                        <option value="2">湯類</option>
                        <option value="3">主食</option>  
                        <option value="4">甜點</option>                   
                    </select>                    
                </div>
            </div>
            <div class="col-md-6 col-sm-6">
                <label for="recipePrice" class="form-label EditRecipeItemLable">食譜價格</label>
                <div class="recipePricebg">
                    <a v-if="!this.isEdit">{{ OriginalPrice }}</a>                                
                    <input v-else type="text" class="form-control" v-model="OriginalPrice" id="recipePrice">
                </div>
            </div>
            <div class="col-md-6 col-sm-6">
                <label for="SelectPeople" class="form-label EditRecipeItemLable">適合人數</label>
                <div class="selectPeoplebg">
                    <a v-if="!this.isEdit">{{ serving }}</a>
                    <select v-else id="SelectPeople" class="form-select" v-model="serving">
                        <option value="">未設定</option>
                        <option value="1人份">1人份</option>
                        <option value="2人份">2人份</option>
                        <option value="2~3人份">2~3人份</option>                
                    </select>
                </div>
            </div>
            <div class="col-md-6 col-sm-6">
                <label for="SelectTime" class="form-label EditRecipeItemLable">所需時間</label>
                <div class="selectTimebg">
                    <a v-if="!this.isEdit">{{ rTime }}</a>
                    <select v-else id="SelectTime" class="form-select" v-model="rTime">
                    <option value="">未設定</option>
                    <option value="5分鐘">5 分鐘</option>
                    <option value="10分鐘">10 分鐘</option>
                    <option value="15分鐘">15 分鐘</option>
                    <option value="20分鐘">20 分鐘</option>
                    <option value="25分鐘">25 分鐘</option>
                    <option value="30分鐘">30 分鐘</option>
                    <option value="30+分鐘">30+ 分鐘</option>
                    </select>
                </div>
            </div>
            
            <div class="col-md-12">
                <div class="row">
                    <label  class="form-label col-md-7 col-sm-7 EditRecipeItemLable">所需食材</label>
                    <label  class="form-label col-md-5 col-sm-5 EditRecipeItemLable">食材數量</label>
                    <div v-if="!this.isEdit">
                        <div class="row" v-for="(ingredientItem,index) in ingredientListDate" :key="index">
                            <div class="row ingredientbg">
                                <div class="col-md-7 col-sm-7">
                                    <a>{{ingredientItem.ingredient}}</a>
                                </div>
                                <div class="col-md-5 col-sm-5">
                                    <a>{{ingredientItem.amount}}</a>
                                </div>       
                            </div>
                        </div>
                    </div>
                    <div v-else>
                        <div  class="row" v-for="(ingredientItem,index) in ingredientListDate" :key="index">
                            <div class="row ingredientbg">
                                <div class="col-md-7 col-sm-7">
                                    <input v-model="ingredientItem.ingredient" type="text" class="form-control" placeholder="輸入食材">
                                </div>
                                <div class="col-md-5 col-sm-5">
                                    <input v-model="ingredientItem.amount" type="text" class="form-control" placeholder="數量">
                                </div> 
                            </div>      
                        </div>
                    </div>
                   
                </div>

                <div v-if="!this.isEdit">
                    <label  class="form-label col-md-6 col-sm-6 EditRecipeItemLable">步驟照片</label>
                    <label  class="form-label col-md-6 col-sm-6 EditRecipeItemLable">步驟說明</label>
                    <div class="row" v-for="(stepItem,index) in stepListDate" :key="index">
                        <div class="row stepbg"> 
                            <div class="col-md-6 col-sm-6">
                                <img :src="`http://127.0.0.1:8000/stepImg/${stepItem.stepId}.jpg`" class="img-fluid mx-auto d-block"  alt="食譜照片">                    
                            </div>
                            <div class="col-md-6 col-sm-6">
                                <a>{{stepItem.step}}</a>
                            </div>
                        </div>
                    </div>   
                </div>

                <div v-else>
                    <label  class="form-label col-md-6 col-sm-6 EditRecipeItemLable">步驟照片</label>
                    <label  class="form-label col-md-6 col-sm-6 EditRecipeItemLable">步驟說明</label>
                    <div class="row" v-for="(stepItem,index) in stepListDate" :key="index">
                        <div class="row stepbg"> 
                            <div class="col-md-6 col-sm-6">
                                <img :src="`http://127.0.0.1:8000/stepImg/${stepItem.stepId}.jpg`" class="img-fluid mx-auto d-block"  alt="食譜照片">  
                            </div>
                            <div class="col-md-6 col-sm-6">
                                <textarea class="form-control" rows="3" v-model="stepItem.step" style="height: 150px"></textarea>
                            </div>
                        </div>
                    </div>   
                </div>            
            </div>       
            
            <hr>
            <div class="col-md-12 d-flex justify-content-center">
                <button v-if="!this.isEdit" type="button" class="addRecipeBtn"  @click="isEdit = !isEdit">修改</button>
                <button v-if="this.isEdit" type="submit" class="addRecipeBtn"  
                @click="UpdateRecipe(rName,intro,serving.rTime,OriginalPrice);UpdateIngredient();UpdateStep();">完成</button>
                <!---->
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
import { getMemberARecipe,updateRecipe,getAllIngredients,getAllStep,updateIngredient,updateStep} from "../services/recipe";

export default {
    components:{
        Nav,   
        Footer,   
    },
    data() {
       return {
            isEdit: false,
            listData: [],
            ingredientListDate:[
                {
                    rId:"",
                    ingreId:"",
                    ingredient: "",
                    amount: ""
                }
            ],
            stepListDate:[],
            rId:localStorage.getItem('userrId'),
            rName: "",
            intro : "",
            cover: "",
            serving : "",
            rTime : "",
            cId :"",
            OriginalPrice:"",
            ingreId:"",
            ingredient:"",
            amount:"",
       };
     },
     methods:{
         goEditMember() {
            this.$router.push("/editmember")
        },
        goWriteRecipe() {
            this.$router.push("/writerecipe")
        },
        goEditRecipe() {
            this.$router.push("/editrecipe")
        },
        

        ShowMemberARecipe(){
            getMemberARecipe({
                rId:this.rId,
            }).then((res) => {
                this.listData = res.data;
                this.rId = this.listData[0].rId;
                this.rName = this.listData[0].rName;
                this.intro = this.listData[0].intro;
                this.cover = this.listData[0].cover;
                this.serving = this.listData[0].serving;
                this.rTime = this.listData[0].rTime;
                this.mId = this.listData[0].mId;
                this.cId = this.listData[0].cId;
                this.OriginalPrice = this.listData[0].OriginalPrice;
                if(this.cId == 1){
                    this.cId ="前菜";
                }else if(this.cId==2){
                    this.cId="湯品";
                }else if(this.cId==3){
                    this.cId="主食";
                }else if(this.cId==4){
                    this.cId="甜點";
                }
            });
        },
        UpdateRecipe(){
            console.log(this.rId)
            updateRecipe({
                rId: this.rId,
                rName: this.rName,
                intro: this.intro,
                serving: this.serving,
                rTime: this.rTime,
                cId: this.cId,
            }).then((res) => {
                alert("更新成功");
                this.isEdit=false;
                this.ShowMemberARecipe();
            });
        },
        UpdateIngredient(){
            for (let i = 0 ; i < this.ingredientListDate.length; i ++) {
                console.log(this.ingredientListDate);
                updateIngredient({
                    ingreId: this.ingredientListDate[i].ingreId,
                    ingredient: this.ingredientListDate[i].ingredient,
                    amount: this.ingredientListDate[i].amount,
                }).then((res) => {
                    console.log("食譜食材更新成功");
                    this.isEdit=false;
                    this.ShowAllIngredients()
                });
            }         
        },
        UpdateStep(){
            for (let i = 0 ; i < this.stepListDate.length; i ++) {
                updateStep({
                    stepId: this.stepListDate[i].stepId,
                    step: this.stepListDate[i].step,
                }).then((res) => {
                    console.log("食譜步驟更新成功");
                    this.isEdit=false;
                    this.ShowAllStep()
                });               
            }           
        },
        ShowAllIngredients(){
            getAllIngredients({
                rId:this.rId,
            }).then((res) => {
                this.ingredientListDate = res.data;
            });
        },
        ShowAllStep(){
            getAllStep({
                rId:this.rId,
            }).then((res) => {
                this.stepListDate = res.data;
            });
        },    
    },
    mounted() {
      this.ShowMemberARecipe()
      this.ShowAllIngredients()
      this.ShowAllStep()
    },
     
     
};

</script>

<style>
.EditRecipeItembg{
    background-color: #ebe6d7;
    height: 100%;
}
.titleStyle{
    text-align: center;
    background-color:rgb(100,88,88) ;
    height: 30px;
    line-height: 30px;
    color: white;
    font-size: 1.3rem;
}
.uppic {
    height: 330px;
    width: 220px;
    margin: 0 auto;
    opacity: 0;
}
#coverImg {
    height: 330px;
    max-width: 220px;
}
.uppicStep {
    height: 158px;
    width: 227px;
    margin: 0 auto;
    opacity: 0;
}
#img-avatarStep {
    position: absolute;
    height: 158px;
    max-width: 227px;
}
.work-experiences > div {
  margin: 20px 0;
  padding-bottom: 10px;
}
.work-experiences > div:not(:last-child) {
  border-bottom: 1px solid rgb(206, 212, 218);
}
.EditRecipeaddPackageImg{
    width: 40px;
    background-color: #ebe6d7;
}
.addPackageBtn{
    border: none;
}
.addStepImg{
    width: 40px;
    background-color: #ebe6d7;
}
.addStepBtn{
    border: none;
}
.DleStepImg{
    width: 35px;
}
.addRecipeBtn{
    color: white;
    background-color: rgb(100,88,88);
    display: inline-block;
    width: 200px;
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
    margin-bottom: 50px;
    
}
.addRecipeBtn:hover{
    background-color: rgb(138, 123, 123);
}
.DlePackageImg{
    width: 35px;
    background-color: #ebe6d7;
}
.EditRecipeItemLable{
    color: rgb(100,88,88);
    margin-top:10px;
}
.stepbg{
    background-color: white;
    padding: 10px;
    margin-bottom: 10px;
}
.ingredientbg{
    background-color: white;
    padding: 10px;
    margin-bottom: 10px;
}
.recipeNamebg{
    background-color: white;
    padding: 10px;
}
.recipeIntrobg{
    background-color: white;
    padding: 10px;
}
.selectCategorybg{
    background-color: white;
    padding: 10px;
}
.recipePricebg{
    background-color: white;
    padding: 10px;
}
.selectPeoplebg{
    background-color: white;
    padding: 10px;
}
.selectTimebg{
    background-color: white;
    padding: 10px;
}
.coverbg{
    background-color: white;
    padding: 10px;
    border:black;
}
</style>