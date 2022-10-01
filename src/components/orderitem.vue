<template>
<div class = "row align-items-center pt-md-3 mx-md-4 mx-lg-5 mx-1 mb-md-2 mb-4">
    <table>
        <tr>
            <td class = "OrderItemImgBox"><img :src="`http://127.0.0.1:8000/recipe/${rId}.jpg`" class = "OrderItemImg"  alt="..."></td>
            <td class = "OrderItemTitleBox"><h4 class="OrderItemTitle">{{ this.rName }}</h4></td>
            <td class = "OrderItemPriceBox"><h4 class="OrderItemTitle">${{this.packagePrice}}</h4></td>
            <td class = "OrderItemAmountBox"><h4 class="OrderItemTitle">*{{ this.quantity }}</h4></td>
            <td class = "OrderItemSumBox"><h4 class="OrderItemTitle">${{ this.sum }}</h4></td>
        </tr>
    </table>
</div>
</template>

<script>
import { getPackageInfo, getRecipeInfo } from "../services/recipe";


export default {
    props: {
        item: Object,
    },
    
    data() {
      return {
        orderId: this.item.orderId,
        quantity:this.item.quantity,
        pId:this.item.pId,
        sum:0,
        listData:[],
        packagePrice:0,
        cover:"",
        rName:"",
        listData2:[],
      };
    },
    methods:{
        
        VueGetPackageInfo(){
            getPackageInfo({
                pId: this.pId})
            .then((res) => {
                this.listData = res.data;
                this.packagePrice = this.listData[0].price;
                this.sum = this.listData[0].price * this.quantity;
                localStorage.setItem('initotal', this.initotal);
                getRecipeInfo({
                    id: this.listData[0].rId})
                .then((res) => {
                    this.listData2 = res.data;
                    this.cover= this.listData2[0].cover;
                    this.rName = this.listData2[0].rName;
                    this.rId = this.listData2[0].rId;
                });
            });
        },
    },

    mounted(){
        this.VueGetPackageInfo();
    }
}
</script>

<style>
.OrderItemImgBox{
    width:20%;
}

.OrderItemImg{
    width:140px;
    height: 140px;
    object-fit: cover;
    display: block;
    margin-left: auto;
    margin-right: auto;
}

.OrderItemTitle{
    font-size: 20px;
}

.OrderItemTitleBox{
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

@media (max-width:767px) {
    .OrderItemImg{
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