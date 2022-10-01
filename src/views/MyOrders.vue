<template>
  <div class="container-fluid MyOrdersbg">
      <div>
          <Nav/>
      </div>

      <div class="">
        <div class="row">
            <div class="col-md-3">
              <nav id="sidebar" class="pt-5">
                <div class="p-4 pt-5 ml-4 MyOrdersBtnBox">
                    <h5>{{this.showname}}</h5>
                        <ul class="list-unstyled components mb-5">
                        <li v-for="item in listData" :key="item.ID" :item="item" >
                            <hr><button class = "MyOrdersBtn" @click="VueGetAllRecord(item.tId) ;VueGetOneTransaction(item.tId)" >{{item.tDate}}</button> 
                        </li>
                        </ul>     
                </div>
              </nav>
            </div>


            <div class="col-md-7 col-sm-12 mt-5 pt-5">
              <h5 class="myorderstitle pb-2">收件地址：{{this.address}}</h5>
              <h5 class="myorderstitle pb-2">總金額：${{this.total}}</h5>
              <h5 class="myorderstitle pb-2">訂單日期：{{this.tDate}}</h5>
              <h5 class="myorderstitle pb-2">訂單商品：</h5>
              <Done v-for="item in listData1" :key="item.ID" :item="item"/>
            </div>
        </div>
      </div>
    </div>
</template>


<script>
import Nav from "../components/navigator.vue";
import Footer from "../components/footer.vue";
import Done from "../components/orderdone.vue";
import{getAllTransaction, getAllRecord, getOneTransaction} from "../services/recipe";


export default {
    props: {
      item: Object,
      record: Object,
    },
    data() {
      return {
        showname:localStorage.getItem('userName'),
        listData:[],
        listData1:[],        
        listData2:[],
        listData3:[],
        address:"",
        tDate:"",
        total:""
      }
    },
    components:{
        Nav,   
        Footer,
        Done     
    },
    methods: {
      VueGetAllTransaction(){
        getAllTransaction({
          mId:localStorage.getItem('userId'),
        }).then((res) => {
            this.listData = res.data;
        });
      },

      VueGetAllRecord(id){
        getAllRecord({
          tId:id,
        })
        .then((res) => {
            this.listData1 = res.data;
        });
      },

      VueGetOneTransaction(id){
        getOneTransaction({
          tId:id,
        }).then((res) => {
            this.listData3 = res.data;
            this.address = this.listData3[0].address;
            this.tDate = this.listData3[0].tDate;
            this.total = this.listData3[0].total;
        });
      },


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
    },

    mounted(){
      this.VueGetAllTransaction();
    }
}
</script>

<style scoped>
@import './../assets/css/sideStyle.css';

.MyOrdersBtn{
  border: none;
  background-color: transparent;
  font-size: 1.1rem;
}

.MyOrdersBtnBox{
  margin-left:12px;
}

.MyOrdersbg{
    background-color: #ebe6d7;
    min-height: 100vw;
}
.OrderItemImgBox{
    width:20%;
}

.OrderItemImgNew{
    width:130px;
    height: 130px;
    object-fit: cover;
    display: block;
    margin-left: auto;
    margin-right: auto;
}

.OrderItemTitle{
    font-size: 20px;
}

.OrderItemTitleBoxNew{
  padding-left: 20px;
    width:45%;
}

.OrderItemPriceBox{
    width:12%;
    padding-left:2%;
}

.OrderItemAmountBox{
    width:12%;
    text-align: center;
}

.OrderItemSumBox{
    width:12%;
    text-align: right;
    padding-right: 1%;
}
.myorderstitle{
  font-size:1.1rem;
}
@media (max-width:767px) {
    .OrderItemImgNew{
        width:100px;
        height: 100px;
        object-fit: cover;
         display: block;
        margin-left: auto;
        margin-right: auto;
    }
    .OrderItemTitle{
        font-size: 15px;
    }
    .OrderItemTitleBox{
        padding-left:3%;
    }
}

@media (min-width:768px) {
    .OrderItemTitleBox{
        padding-left:2%;
    }
    .OrderItemTitle{
        font-size: 18px;
    }
    .OrderPaymentWay{
        font-size: 23px;
        font-weight: 600;
        padding-left:2%;
    }
}

@media (min-width:992px) {
    .OrderItemTitleBox{
        padding-left:0.5%;
    }
    .OrderItemTitle{
        font-size: 19px;
    }
    .OrderPaymentWay{
        font-size: 23px;
        font-weight: 600;
        padding-left:0.5%;
    }
}

@media (min-width:1200px){
    .OrderItemTitleBox{
        padding-left:0;
    }
    .OrderItemTitle{
        font-size: 19px;
    }
    .OrderPaymentWay{
        font-size: 23px;
        font-weight: 600;
        padding-left:0%;
    }
}
</style>