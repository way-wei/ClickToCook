<template>
  <div class="wbg">
      <div>
          <Nav/>
      </div>

      <div class="container-fluid">
        <div class="row ">
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
            



        <div class="col-md-6 col-sm-12 mt-4">
        <div class="row g-3 mx-4 my-5 ">
            <div class="col-md-12">
                <h4 class="titleStyle">撰寫食譜</h4>
            </div>            
            <div class="col-md-12 d-flex justify-content-center">             
                <img-inputer v-model="cover" theme="light" size="5px" type="file" accept="image/*" placeholder="請上傳食譜封面" :on-change="chooseImg" />
            </div>            
            <div class="col-md-6">
                <label for="recipeName" class="form-label">食譜名稱</label>
                <input type="text" class="form-control" v-model="rName" id="recipeName">
            </div>
            <div class="col-md-12">
                <label for="recipeIntro" class="form-label">簡介</label>
                <textarea class="form-control" id="recipeIntro" rows="3" v-model="intro"></textarea>
            </div>
            <div class="col-md-6">
                <label for="SelectCategory" class="form-label mr-5">類別</label>
                <select id="SelectCategory" class="form-select" v-model="cId">
                    <option value="">未設定</option>
                    <option value="1">前菜</option>
                    <option value="2">湯品</option>
                    <option value="3">主食</option>  
                    <option value="4">甜點</option>                     
                </select> 
            </div>
            <div class="col-md-6">
                <label for="recipeName" class="form-label">食譜價格</label>
                <input type="text" class="form-control" v-model="OriginalPrice" id="recipeName">
            </div>
            <div class="col-md-6">
                <label for="SelectPeople" class="form-label">適合人數</label>
                <select id="SelectPeople" class="form-select" v-model="serving">
                <option value="">未設定</option>
                <option value="1人份">1人</option>
                <option value="2人份">2人</option>
                <option value="2~3人份">2~3人</option>
                </select>
            </div>
            <div class="col-md-6">
                <label for="SelectTime" class="form-label">所需時間</label>
                <select id="SelectTime" class="form-select" v-model="rTime">
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
            <div class="col-md-12">
                <div class="row">
                    <label  class="form-label col-md-6 col-sm-6">所需食材</label>
                    <label  class="form-label col-md-2 col-sm-3">食材數量</label>                    
                    <div class="row col-md-10 mb-3"  v-for="(ingredientItem, index) in ingredientListDate" :key="index">
                        <div class="col-md-7 col-sm-6">                        
                            <input v-model="ingredientItem.ingredient" type="text" class="form-control" placeholder="輸入食材">
                        </div>
                        <div class="col-md-4 col-sm-4">                        
                            <input v-model="ingredientItem.amount" type="text" class="form-control" placeholder="數量">
                        </div>
                        <div class="col-md-1 col-sm-2">
                            <button @click="dldIngredientColumn(index,1)" class="dldPackageBtn"><img src="../assets/images/trash.png" class="DlePackageImg"></button>                            
                        </div>
                    </div>
                    <div class="form-label col-md-2 col-sm-2">
                        <button @click="addPackagColumn" type="button" class="addPackageBtn">新增欄位</button>
                    </div>
                </div>                
            </div>


            
            <div class="col-md-12">                
                <div class="row">
                    <label for="inputState" class="form-label col-md-4 col-sm-5">步驟照片</label>
                    <label for="inputState" class="form-label col-md-5 col-sm-3">步驟解說</label>                    
                    <div class="row col-md-10 mb-5"  v-for="(StepItem, index) in stepListDate" :key="index">
                        <div class="col-md-6 col-sm-5"> 
                             <img-inputer v-model="StepItem.steppic" theme="light" size="5px" type="file" accept="image/*" placeholder="請上傳食譜步驟照片" />
                        </div>
                        <div class="col-md-5 col-sm-3 ">                        
                            <textarea v-model="StepItem.step" type="text" class="form-control " placeholder="輸入解說" style="height: 150px"></textarea>
                        </div>
                        <div class="col-md-1 col-sm-4">
                            <button @click="dldStepColumn(index,1)" class="dldStepBtn"><img src="../assets/images/trash.png" class="DlePackageImg"></button>                           
                        </div>
                    </div>
                    <div class="form-label col-md-1 col-sm-4">
                        <button @click="addStepColumn" type="button" class="addStepBtn">新增欄位</button>
                    </div>
                </div>
            </div>
            
            <hr>
            <div class="col-md-12 d-flex justify-content-center">
                <button type="submit" class="addRecipeBtn"  @click="addRecipe();addIngredient();addStep();CountPackagePrice();">完成</button>
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
import { Recipes,insertRecipe,insertIngredient,insertStep,getrId,countPackagePrice} from "../services/recipe";

export default {
    components:{
        Nav,   
        Footer     
    },
    data() {
       return {
            listData: [],
            rId: "",
            rName: "",
            intro : "",
            cover: "",
            serving : "",
            rTime : "",
            mId:localStorage.getItem('userId'),
            cId :"",
            OriginalPrice:"",
            ingredientListDate: [
                {
                    ingredient: "",
                    amount: ""
                },            
            ],
            stepListDate: [
                {
                    steppic: "",
                    step: ""
                },            
            ],
            stepId:"",
            step:"",
            steppic:"",
            rIdData:[],
            showname:localStorage.getItem('userName'),
       };
     },
     methods:{
        goEditMember() {
            this.$router.push("/editMember")
        },
        goWriteRecipe() {
            this.$router.push("/writeRecipe")
        },
        goEditRecipe() {
            this.$router.push("/editRecipe")
        },
        goCollectRecipe() {
            this.$router.push("/collectRecipe")
        },
        getAllRecipes() {
            Recipes().then((res) => {
                this.listData = res.data;
            });
        },
        addRecipe(){
            insertRecipe({
                rId: this.rIdData[0].rId,
                rName: this.rName,
                intro: this.intro,
                cover: this.cover,
                serving: this.serving,
                rTime: this.rTime,
                mId: this.mId,
                cId: this.cId,
                OriginalPrice: this.OriginalPrice,
            }).then((res) => {
                alert("新增成功");
                this.rId = "";
                this.rName = "";
                this.intro = "";
                this.cover = "";
                this.serving = "";
                this.rTime = "";
                this.cId = "";
                this.OriginalPrice="";
                this.$router.push("/EditRecipe")
            });
        },
        addIngredient(){
            for (let i = 0 ; i < this.ingredientListDate.length; i ++) {
                insertIngredient({
                    rId: this.rIdData[0].rId,
                    ingredient: this.ingredientListDate[i].ingredient,
                    amount: this.ingredientListDate[i].amount,
                }).then((res) => {
                    this.rId = "";
                    this.ingreId = "";
                    this.ingredient = "";
                    this.amount = "";
                });
            }
        },
        addStep(){
            for (let i = 0 ; i < this.stepListDate.length; i ++) {
                let file =this.stepListDate[i].steppic  //steppic是綁定的file對象
                let reader = new FileReader()
                let img = new Image()
                reader.readAsDataURL(file)
                reader.onloadend = (e) => {
                    img.src = e.target.result
                    this.stepListDate[i].steppic = reader.result
                    insertStep({
                        rId: this.rIdData[0].rId,
                        step: this.stepListDate[i].step,
                        steppic: this.stepListDate[i].steppic,
                    }).then((res) => {
                        this.rId = "";
                        this.step = "";
                        this.steppic = "";
                    });
                }
            }
        },
        addPackagColumn () {
            this.ingredientListDate.push({
                ingredient: '',
                amount: ''
            })
        },
        addStepColumn () {
            this.stepListDate.push({
                steppic: '',
                stepnum: ''
            })
        },
        dldStepColumn (index) {
            this.stepListDate.splice(index,1)
        },
        dldIngredientColumn(index) {
            this.ingredientListDate.splice(index,1)
        },
        chooseImg () {        //上傳照片時將圖片轉爲base64
          let file = this.cover  //cover是綁定的file對象
          let reader = new FileReader()
          let img = new Image()
          // 讀取圖片
          reader.readAsDataURL(file)
          // 讀取完畢後的操作
          reader.onloadend = (e) => {
            img.src = e.target.result
            // 這裏的e.target就是reader
            // console.log(reader.result)
            // reader.result就是圖片的base64字符串
            this.cover = reader.result
          }
        },
        GetrId(){
            getrId().then((res)=>{
                console.log(res);
                this.rIdData=res.data
            });
        },
        CountPackagePrice(){
            countPackagePrice({
                rId: this.rIdData[0].rId,
                cId: this.cId,
                price:this.OriginalPrice})
            .then((res) => {
            });
        }
        
     },
     mounted() {
      this.GetrId()
    },
     
     
};

</script>

<style>
.wbg{
    background-color: #ebe6d7;
    height: 100%;
}
.titleStyle{
    text-align: center;
    background-color:rgb(100,88,88) ;
    height: 50px;
    line-height: 50px;
    color: white;
}
.uppic {
    height: 330px;
    width: 220px;
    margin: 0 auto;
    opacity: 0;
}
#img-avatar {
    position: absolute;
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
.addPackageImg{
    width: 30px;
    background-color: #ebe6d7;
}
.addPackageBtn{
    color: white;
    background-color: rgb(100,88,88);
    display: inline-block;
    width: 100px;
    font-weight: 400;
    text-align: center;
    text-decoration: none;
    vertical-align: middle;
    user-select: none;
    border: 1px solid transparent;
    padding: 0.375rem 0.75rem;
    font-size: 15px;
    border-radius: 0.25rem;
}
.dldPackageBtn{
    border:none;
    width: 40px;
    background-color: #ebe6d7;
}
.dldStepBtn{
    border:none;
    width: 40px;
    background-color: #ebe6d7;
}
.addStepBtn{
    color: white;
    background-color: rgb(100,88,88);
    display: inline-block;
    width: 100px;
    font-weight: 400;
    text-align: center;
    text-decoration: none;
    vertical-align: middle;
    user-select: none;
    border: 1px solid transparent;
    padding: 0.375rem 0.75rem;
    font-size: 15px;
    border-radius: 0.25rem;
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

</style>