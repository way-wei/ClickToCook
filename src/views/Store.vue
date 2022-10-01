<template>
<div class="container-fluid StoreBg">
    <Nav/>
    <div class = "row row-cols-2 align-items-center">
        <div class = "row align-items-center mx-lg-4 mt-5 pt-3">
            <div class = "col pt-3">
                <h4 class = "StoreFilterTitle">食譜種類</h4>
                <select name="種類" id="種類選擇" class = "StoreFilterSpan" ref="category">
                    <option value="全部" selected>全部</option>
                    <option value="前菜">前菜</option>
                    <option value="湯品">湯品</option>
                    <option value="主食">主食</option>
                    <option value="甜點">甜點</option>
                </select>
            </div>
            
            <div class = "col pt-3">
                <h4 class = "StoreFilterTitle">料理時間</h4>
                <select name="時間" id="時間選擇" class = "StoreFilterSpan" ref="time">
                    <option value="全部" selected>全部</option>
                    <option value="5分鐘">5分鐘</option>
                    <option value="10分鐘">10分鐘</option>
                    <option value="15分鐘">15分鐘</option>
                    <option value="20分鐘">20分鐘</option>
                    <option value="25分鐘">25分鐘</option>
                    <option value="30分鐘">30分鐘</option>
                    <option value="30+分鐘">30+分鐘</option>
                </select>
            </div>
            
            <div class = "col pt-3">
                <h4 class = "StoreFilterTitle">適合人數</h4>
                <select name="人數" id="人數選擇" class = "StoreFilterSpan" ref="serving">
                    <option value="全部" selected>全部</option>
                    <option value="1人份">1人份</option>
                    <option value="2人份">2人份</option>
                    <option value="3人份">3人份</option>
                </select>
            </div>

            <div class = "col mt-4 pt-3">
                <button class="StoreFilterBtn" @click="VueSearchRecipes()">篩選</button>
            </div>
        </div>
        
        
        
        <div class = "col-12 pt-4 mb-5">
            <div class = "row row-cols-1 align-items-center mx-lg-3">
            <Item v-for="item in dataShow" :key="item.ID" :item="item" />
            </div>
        </div>
        <div  class = "allpageBtn">
            <button value="上一頁" @click="prePage()" class="pageBtn col-3">上一頁</button>
            <button v-for="i in pageNum" :key="i" @click="page(i)" class="pagenum">{{i}}</button>
            <button value="下一頁" @click="nextPage()" class="pageBtn col-3">下一頁</button>
        </div>
        <div class = "col-12">
            <Footer/>
        </div>
    </div>
</div>
 
</template>

<script>
import 'bootstrap/dist/js/bootstrap.min.js';

import Nav from "../components/navigator.vue";
import Item from "../components/storeitem.vue";
import Footer from "../components/footer.vue";


import { getAllRecipes, searchRecipe, getCategoryId} from "../services/recipe";


export default {
    components: {
        Nav,
        Item,
        Footer
    },
    data () {
        return {
            listData: [],
            listData2: [],
            user:localStorage.getItem('userId'),
            category:"",
            time:"",
            price:"",
            serving:"",
            totalPage:[],
            pageSize:24,
            pageNum:1,
            dataShow:[],
            currentPage:0,
        }
        
    },
    careted(){
        this.pageNum=Math.ceil(this.listData.length / this.pageSize) || 1;
                for(let i =0; i<this.pageNum;i++){
                    this.totalPage[i]=this.listData.slice(this.pageSize * i , this.pageSize *(i+1))
                }
                this.dataShow = this.totalPage[this.currentPage];
    },
    methods:{
        VueAllRecipes() {
            getAllRecipes({
                id: "",})
            .then((res) => {
                this.listData = res.data;
                this.pageNum=Math.ceil(this.listData.length / this.pageSize) || 1;
                for(let i =0; i<this.pageNum;i++){
                    this.totalPage[i]=this.listData.slice(this.pageSize * i , this.pageSize *(i+1))
                }
                this.dataShow = this.totalPage[this.currentPage];
            });
        },

        VueSearchRecipes() {
            if(this.$refs.category.value != "全部"){
                getCategoryId({
                    category: this.$refs.category.value,
                })
                .then((res) => {
                    this.listData2 = res.data;
                    searchRecipe({
                        category: this.listData2[0].cId,
                        serving: this.$refs.serving.value,
                        time:this.$refs.time.value})
                    .then((res) => {
                        this.dataShow = res.data;
                        console.log(this.dataShow);
                    });
                });                
            }
            else{
                searchRecipe({
                    category: this.$refs.category.value,
                    serving: this.$refs.serving.value,
                    time:this.$refs.time.value})
                .then((res) => {
                    this.dataShow = res.data;
                    console.log(this.dataShow);
                });
            }
        },
        prePage(){
            if(this.currentPage === 0) return;
            this.dataShow=this.totalPage[--this.currentPage];
        },
        page(i){
            this.currentPage =i
            this.dataShow=this.totalPage[i-1];
        },
        nextPage(){
            if(this.currentPage === this.pageNum -1) return;
            this.dataShow=this.totalPage[++this.currentPage];
        }
        
    },

    mounted() {
        this.VueAllRecipes();
    },

    
}
</script>

<style>
.CartSearchTable{
    margin-top:40px;
    font-size:1.1rem;
    width:97%;
    margin-left:auto;
    margin-right:auto;
    border:2px #585032 solid ;
}

.CartSearchTableTitle{
    background-color: #46231133;
    padding-left:8px;
    padding-bottom:8px;
    padding-top:8px;
    width:8%;
}

.CartSearchTableItem{
    width:10%;
    padding-left: 8px;
    font-weight:800;
}

.CartSearchTableItem:hover{
    cursor: pointer;
    color: #8c6009fa;
    font-weight: 700;
}

.StoreBg{
    background-color: #ebe6d7;
}

.StoreFilterBtn{
    background-color: #e6d7ab;
    height: 30px;
    width:80px;
    font-size: 18px;
    color:rgb(61, 39, 13);
    font-weight:600;
    border:1px #585032 solid;
}

.StoreFilterSpan{
    background-color: #e6d7ab;
    height: 30px;
    width:120px;
    color:rgb(61, 39, 13);
    font-weight:600;
    border:1px #585032 solid; 
}

.StoreFilterTitle{
    font-size: 18px;
}

.dropdown-menu{
    width: 22%;
    background-color: #cfc198 !important;
    border-radius: 0px !important;
}

.dropdown-menu > li >.dropdown-item{
    color:rgb(61, 39, 13) !important;
}

.dropdown-menu li:hover > ul.dropdown-menu {
    display: block;
    color:rgb(61, 39, 13) !important;
}

.dropdown-submenu {
    position:relative;
}

.dropdown-submenu>.dropdown-menu {
    top:0;
    left:100%;
    margin-top:-20px;
    padding-left:8px;
}

.dropdown-menu > li > a:hover:after {
    text-decoration: underline;
    transform: rotate(90deg);
}

.StoreSearch{
    font-size: 18px;
    border-radius:5px;
    width:30vmin;
    border-color:#49331fd7;
    background-color: #ebe6d7;
    box-shadow: 2px 2px #5d4e36a3;
}

.StoreSearchIcon{
    background-image: url(../assets/search.png) ;
    background-position: center;
    background-size: 30px;
    background-repeat: no-repeat;
    width:45px;
    height:45px;
    border:none;
    background-color: #ebe6d7;
}
.pageBtn{
    background-color:#ebe6d7;
    width: 100px;
    height: 30px;
    border: none;
    color: black;
}
.pagenum{
    margin:10px ;
    border:none;
    background-color:#ebe6d7;
}
.pagenum:hover{
    color: #585032;
}
.allpageBtn{
    text-align: center;
    align-items: center;
    margin: 0 auto;
}
@media (max-width:767px) {
    .CartSearchTable{
        border:2px #585032 solid;
        margin-top:40px;
        font-size:0.8rem;
        width:97%;
        margin-left:auto;
        margin-right:auto;
    }

    .CartSearchTableTitle{
      width:16%;
      padding-left:0px; 
    }
    .CartSearchTableItem{
        width:15%;
        padding-left: 8px;
    } 
}

@media (min-width:768px) {
    .CartSearchTable{
        margin-top:40px;
        font-size:1.1rem;
        width:97%;
        margin-left:auto;
        margin-right:auto;
    }
    .CartSearchTableTitle{
      width:10%; 
      padding-left:8px; 
    }
    .CartSearchTableItem{
        width:10%;
        padding-left: 8px;
    }
}

@media (min-width:992px) {
    .CartSearchTableTitle{
        width:8%;  
    }
}

@media (min-width:1200px){
    .CartSearchTableTitle{
      width:8%;  
    }
}
</style>