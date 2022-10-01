<template>
  <div class="container-fluid StoreBg">
    <Nav/>
    <div class = "row row-cols-2 mt-5 align-items-center justify-content-center" v-for="item in listData1" :key="item.ID" :item="item">
        <div class = "col-lg-5 col-md-6 col-12 mt-lg-5 ps-2 mt-sm-3">
            <img :src="`http://127.0.0.1:8000/recipe/${query}.jpg`" class="ItemInfoImg" alt="...">
        </div>
        
        <div class = "col-lg-7 col-md-6 col-12 mt-4 ps-lg-4 item">
            <div class="p-0">
                <div class="ps-lg-2" >
                    <div class = "ItemInfoTitleBox">
                        <h4 class="ItemInfoTitle">{{ item.rName }}</h4>
                    </div>
                    <div class = "ItemInfoIntroBox">
                        <h6 class="ItemInfoIntro">{{ item.intro }}</h6>
                    </div>
                    <h5 class="ItemInfoIngredient1">內容物：</h5>
                    <div class = "ItemInfoIngredientBox" v-for="ingre in listData2" :key="ingre.ID" :item="ingre">
                        <h5 class="ItemInfoIngredient2">
                            <p v-if = "ingre.ingreId != listData2.length">{{ingre.ingredient}}  {{ingre.amount}}、</p>
                            <p v-if = "ingre.ingreId == listData2.length">{{ingre.ingredient}}  {{ingre.amount}}</p>
                        </h5>
                    </div>
                    <div class = "ItemInfoInlineBox">
                        <div class = "ItemInfoLabel ItemInfoPeopleBox">
                            <h5 class="ItemInfoPeople">適合人數：</h5>
                        </div>
                        <div class = "ItemInfoLabel">
                            <h5 class="ItemInfoPeople">{{ item.serving }}</h5>
                        </div>
                    </div>
                    
                    <div class = "ItemInfoInlineBox">
                        <div class = "ItemInfoLabel ItemInfoBox2">
                            <h5 class="ItemInfoPeople">售價：</h5>
                        </div>
                        <div class = "ItemInfoLabel" >
                            <h5 class="ItemInfoPeople">${{price}}</h5>
                        </div>
                    </div>
                    
                    <div class = "ItemInfoInlineBox">
                        <div class = "ItemInfoLabel ItemInfoBox2">
                            <h5 class="ItemInfoPeople">數量：</h5>
                        </div>
                        <div class = "ItemInfoLabel">
                            <input type="button" class = "InfoItemAmountBtn" value="-" v-on:click="decrease" />
                            <span class = "InfoItemAmount">{{count}}</span>
                            <input type="button" class = "InfoItemAmountBtn" value="+" v-on:click="increase" />
                        </div>
                    </div>


                    <div class = "ItemInfoBox2">
                        <button class="ItemInfoCartBtn" @click="VueAddOrder()">
                            <img class = "ItemInfoCartIcon" src="../assets/carticon.png">
                            <h5 class = "ItemInfoCartTitle">放入購物車</h5>
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <div class = "col-12 mt-5 justify-content-center">
            <div class = "col ItemInfoStepTitleBox">
                <h4 class = "ItemInfoStepTitle">料理步驟</h4>
            </div>
            <div class = "col ItemInfoStepTimeBox mt-3">
                <h4 class = "ItemInfoStepTime">料理時間：{{ item.rTime }}</h4>
            </div>
        </div>
        <div class = "col-12">
            <div class = "col-12 justify-content-center">
                <div class="row" v-for="(stepItem,index) in stepListDate" :key="index">
                    <div class = "col-12 InfostepImg mt-3">
                        <img :src="`http://127.0.0.1:8000/stepImg/${stepItem.stepId}.jpg`" class="img-fluid mx-auto d-block"  alt="食譜照片">  
                    </div>
                    <div class = "col-12 InfostepCaption mt-2 mb-2">
                        <h5>{{index+1}}. {{stepItem.step}}</h5>
                    </div>
                </div>
            </div>            
        </div>
        <div class = "col-12 justify-content-center mb-3">
            <div class = "col ItemInfoStepTimeBox mt-3">
                <h4 class = "ItemInfoStepAuthor">食譜by：{{ author }}</h4>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import { getRecipeInfo, getItemIngre, getPackagePrice, getItemStep, getRecipeAuthor, addOrder} from "../services/recipe";
import 'bootstrap/dist/js/bootstrap.min.js';
import Nav from "../components/navigator.vue";

export default {
    components: {
        Nav,
    },
    

    data() {
      return {
        count:1,
        query:this.$route.params.id,
        listData1: [],
        listData2: [],
        listData3: [],
        
        listData4: [],
        stepListDate: [],
        listData5: [],
        price:0,
        pId:0,
        author:"",

      };
    },
    
    methods: {
        VueGetInfo() {
            getRecipeInfo({
                id: this.query})
            .then((res) => {
                this.listData1 = res.data;
                getRecipeAuthor({
                    id:this.listData1[0].mId})
                .then((res) => {
                    this.listData5 = res.data;
                    this.author = this.listData5[0].nickname;
                });
            });

        },

        VueGetIngre() {
            getItemIngre({
                id: this.query})
            .then((res) => {
                this.listData2 = res.data;
            });
        },

        VueGetPrice() {
            getPackagePrice({
                id: this.query})
            .then((res) => {
                this.listData3 = res.data;
                this.price = this.listData3[0].price;
                this.pId = this.listData3[0].pId;
            });
        },

        VueGetStep() {
            getItemStep({
                id: this.query})
            .then((res) => {
                this.stepListDate = res.data;
            });
        },

        decrease(){
            if (this.count > 1) {
                this.count--;
                console.log("數量-1");
            }
            else{
                console.log("最少為1");
            }
        },

        increase(){
            this.count++;
            console.log("數量+1");
        },

        VueAddOrder() {
            addOrder({
                cartId: localStorage.getItem('userCartId'),
                pId: this.pId,
                quantity:　this.count
            })
            .then((res) => {
                this.listData4 = res.data;
                alert("購物車加入成功");
                this.$router.push("/store");
            });
        },
    },
    mounted(){
        this.VueGetInfo();
        this.VueGetIngre();
        this.VueGetPrice();
        this.VueGetStep();
    }

}
</script>

<style>
.InfostepImg > .img-fluid{
    width: 48%;
    display: block;
    margin:auto;
}

@media (max-width:767px) {
    .InfostepImg > .img-fluid{
        width: 85%;
    }
}

@media (min-width:768px) {
    .InfostepImg > .img-fluid{
        width: 60%;
    }
}

@media (min-width:1200px){
    .InfostepImg > .img-fluid{
        width: 48%;
    }
}

.InfostepCaption > h5{
    padding-top:8px;
    white-space: normal;
    font-size: 1rem;
    text-align: center;
}

.ItemInfoImg{
    box-shadow: 4px 4px #242222ac;
}

@media (max-width:767px) {
    .ItemInfoImg{
        max-width: 70%;
        max-height: 70%;
        display: block;
        margin:auto;
    }
}

@media (min-width:768px) {
    .ItemInfoImg{
        max-width: 80%;
        max-height: 80%;
        display: block;
        margin:auto;
    }
}

@media (min-width:992px) {
    .ItemInfoImg{
        max-width: 80%;
        max-height: 80%;
        float:right;
    }
}

@media (min-width:1200px){
    .ItemInfoImg{
        max-width: 80%;
        max-height: 80%;
        float:right;
    }
}

.ItemInfoTitleBox{
    height:80px;
}

.ItemInfoTitle{
    font-size: 2.5rem;
    font-weight:600;
}

.ItemInfoIntroBox{
    height:60px;
    margin-top:8px;
}

.ItemInfoIntro{
    padding-top:5px;
    font-size: 0.9rem;
}

.ItemInfoIngredient1{
    padding-top: 15px;
    padding-bottom: 15px;
    font-size: 1rem;
}
.ItemInfoIngredientBox{
    display: inline-block;
     white-space: nowrap;
}
.ItemInfoIngredient2{
    padding-top: 1px;
    padding-bottom: 15px;
    font-size: 1rem;
}

.ItemInfoInlineBox{
    margin-top:5px;
    overflow: auto;
    white-space: nowrap;
}

.ItemInfoLabel{
    display:inline-block;
}

.ItemInfoPeopleBox{
    width:120px;
}

.ItemInfoBox2{
    margin-top: 10px;
    width:80px;
}

.ItemInfoPeople{
    padding-top:5px;
    font-size: 1.1rem;
}

input[type="button"]
{
    font-size:25px;
    font-weight: 200;
    color:rgb(41, 39, 39);
}

.InfoItemAmountBtn{
    width:40px;
    vertical-align:middle;
    text-align: center;
    height:35px;
    background-color: rgba(72, 51, 24, 0.447);
    border-color: transparent;
    line-height:1px;
}

.InfoItemAmount{
    font-size: 1.1rem;
    background-color: rgba(254, 254, 254, 0.723);
    width: 70px;
    height:35px;
    color:rgb(48, 31, 20);
    display:inline-block;
    text-align: center;
    vertical-align:middle;
    line-height: 35px;
}

.ItemInfoCartBtn{
    border-color: transparent;
    background-color: rgba(190, 142, 65, 0.447);
    align-items: center;
    width:200px;
    height: 70px;
    margin-top:20px;
    white-space: nowrap;
    border-radius: 5px;
    box-shadow: 2px 2px #5d4e36a3;
}

.ItemInfoCartBtn:hover .ItemInfoCartIcon{
    transform: scale(1.08);
}

.ItemInfoCartIcon{
    width:50px;
    height: 50px;
    object-fit: cover;
    display: inline-block;
}

.ItemInfoCartTitle{
    display: inline-block;
    font-size:1.2rem;
    margin-left:10px;
    color:rgb(70, 43, 38);
    font-weight: 700;
    vertical-align:bottom;
}

.ItemInfoStepTitleBox{
    background-color: #a39875a6;
    width:400px;
    color:rgb(62, 53, 33);
    display:block;
    margin:auto;
}

.ItemInfoStepTitle{
    font-size:2.3rem;
    letter-spacing: 3px;
    text-align: center;
    font-weight: 700;
}

.ItemInfoStepTimeBox{
    width:400px;
    color:rgb(62, 53, 33);
    display:block;
    margin:auto;
}

.ItemInfoStepTime{
    font-size:1rem;
    text-align: center;
    font-weight: 700;
    font-family: 'Noto Serif TC','Times New Roman';
    font-style: italic;
}

.ItemInfoStepAuthor{
    font-size:1rem;
    text-align: center;
    font-weight: 700;
    font-family: 'EB Garamond','Noto Serif TC';
    font-style: italic;
}
</style>