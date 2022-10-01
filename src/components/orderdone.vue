<template>
<div class = "row align-items-center pt-3 px-lg-5 px-2 pb-5 ">
    <table>
        <tr>
            <td class = "OrderItemImgBox"><img :src="`http://127.0.0.1:8000/recipe/${rId}.jpg`" class = "OrderItemImgNew"  alt="..."></td>
            <td class = "OrderItemTitleBoxNew"><h4 class="OrderItemTitle">{{this.rName}}</h4></td>
            <td class = "OrderItemPriceBox" ><h4 class="OrderItemTitle">${{this.price}}</h4></td>
            <td class = "OrderItemAmountBox"><h4 class="OrderItemTitle">*{{item.amount}}</h4></td>
            <td class = "OrderItemSumBox"><h4 class="OrderItemTitle">${{item.sum}}</h4></td>
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
        listData:[],
        listData2:[],
        pId:this.item.pId,
        price:0,
        rId:0,
        rName:'',
        cover:""
      };
    },

    methods:{
        VueGetPackageInfo(){
            getPackageInfo({
                pId:this.pId,
            })
            .then((res) => {
                this.listData = res.data;
                this.price = this.listData[0].price;
                this.rId = this.listData[0].rId;
                getRecipeInfo({
                    id:this.rId,
                })
                .then((res) => {
                    this.listData2 = res.data;
                    this.cover = this.listData2[0].cover;
                    this.rName = this.listData2[0].rName;
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
.bg{
    background-color: #ebe6d7;
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