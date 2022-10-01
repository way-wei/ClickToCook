<template>
<div class = "row align-items-center pt-md-3 mx-md-4 mx-lg-5 mx-1 mb-md-2 mb-4 CartItemTable">
    <table>
        <tr>
            <td rowspan = "2" class = "CartItemCheckBox" >
                <input type = "checkbox" class = "CartItemCheck" v-if="item.status == 'F'" @click="VueUpdateOrdersItemF()">
                <input type = "checkbox" class = "CartItemCheck" v-if="item.status == 'T'" checked = "checked" @click="VueUpdateOrdersItemT()">
            </td>
            <td rowspan = "2" class = "CartItemImgBox"><img :src="`http://127.0.0.1:8000/recipe/${rId}.jpg`" class = "CartItemImg"></td>
            <td class = "CartItemTitleBox"><h4 class="CartItemTitle">{{ this.recipeName }}</h4></td>
            <td rowspan = "2" class = "CartItemPriceBox"><h4 class="CartItemTitle">${{ this.packagePrice }}</h4></td>
            <td rowspan = "2" class = "CartBtnBox">
                <button class="CartBtn">
                    <h5 class = "CartBtnTitle" @click="VueDeleteOrdersItem()">刪除</h5>
                </button>
            </td>
        </tr>
        
        <tr>
            <td class = "CartItemAmountBox">
                <div class = "ItemInfoLabel">
                    <input type="button" class = "CartItemAmountBtn" value="-" v-on:click="decrease" @click="VueUpdateOrderMinus()"/>
                    <span class = "CartItemAmount">{{count}}</span>
                    <input type="button" class = "CartItemAmountBtn" value="+" v-on:click="increase" @click="VueUpdateOrderPlus()" />
                </div>
            </td>
        </tr>

            
        
    </table>
</div>
</template>

<script>
import { deleteItemSum ,addItemSum ,getPackageInfo, getRecipeInfo, getPackagePrice,  deleteOrdersItem ,updateOrdersItemF, updateOrdersItemT, updateOrderPlus, updateOrderMinus} from "../services/recipe";

export default {
    props: {
        item: Object,
    },
    data() {
      return {
        orderId: this.item.orderId,
        count:this.item.quantity,
        pId:this.item.pId,
        packagePrice:0,
        image:"",
        recipeName:"",
        listData:[],
        listData2:[],
        listData3:[],
        listData4:[],
        listData5:[]
      };
    },
    
    methods: {
        VueGetOrderItemInfo(){
            getPackageInfo({
                pId: this.pId})
            .then((res) => {
                this.listData = res.data;
                getPackagePrice({
                    id: this.listData[0].rId})
                .then((res) => {
                    this.listData2 = res.data;
                    this.packagePrice = this.listData2[0].price;
                });
                getRecipeInfo({
                    id: this.listData[0].rId})
                .then((res) => {
                    this.listData3 = res.data;
                    this.image = this.listData3[0].cover;
                    this.recipeName = this.listData3[0].rName;
                    this.rId = this.listData3[0].rId;
                });
            });
        },

        VueDeleteOrdersItem(){
             deleteOrdersItem({
                cartId:localStorage.getItem('userCartId'),
                orderId: this.orderId
            })
            .then((res) => {
                this.listData4 = res.data;
                if(this.listData4[0] == 'T'){
                    alert("刪除成功");
                    this.VueGetOrderItemInfo();
                }
                else{
                    alert("刪除失敗");
                    this.VueGetOrderItemInfo();
                }
            });
            
        },

        VueUpdateOrdersItemF(){
             updateOrdersItemF({
                cartId:localStorage.getItem('userCartId'),
                orderId: this.orderId
            })
            .then((res) => {
                this.listData5 = res.data;
                if(this.listData5[0] == 'T'){
                    addItemSum({
                        cartId:localStorage.getItem('userCartId'),
                        orderIdsum: this.orderId,
                        amount: this.count,
                        price:this.packagePrice
                    })
                    .then((res) => {
                    });
                }
                else{
                    alert("更新失敗");
                }
            });
            this.VueGetOrderItemInfo();
        },

        VueUpdateOrdersItemT(){
             updateOrdersItemT({
                cartId:localStorage.getItem('userCartId'),
                orderId: this.orderId
            })
            .then((res) => {
                this.listData5 = res.data;
                if(this.listData5[0] == 'T'){
                    deleteItemSum({
                        cartId:localStorage.getItem('userCartId'),
                        orderIdsum: this.orderId
                    })
                    .then((res) => {
                    });
                }
                else{
                    alert("更新失敗");
                }
            });
            this.VueGetOrderItemInfo();
        },

        VueUpdateOrderPlus() {
            updateOrderPlus({
                cartId: localStorage.getItem('userCartId'),
                pId: this.pId
            })
            .then((res) => {
            });
        },

        VueUpdateOrderMinus() {
            updateOrderMinus({
                cartId: localStorage.getItem('userCartId'),
                pId: this.pId
            })
            .then((res) => {
            });
        },

        decrease(){
            if (this.count > 1) {
                this.count--;
            }
        },
        
        increase(){
            this.count++;
        },
        
    },

    mounted(){
        this.VueGetOrderItemInfo();
    }
}
</script>

<style>
.CartItemTable{
    padding-left:50px;
    padding-right:50px;
}

.CartItemCheckBox{
    width:2%;
}

.CartItemCheck{
    width: 20px;
    height: 20px;
}

.CartItemImgBox{
    width:3%;
}

.CartItemImg{
    width:130px;
    height: 130px;
    object-fit: cover;
    display: block;
    margin-left:25px;
}

.CartItemTitleBox{
    width:20%;
    vertical-align: bottom;
    margin-bottom: 15px;
}

.CartItemTitle{
    font-size: 19px;
}

.CartItemPriceBox{
    width:8%;
    padding-left:2%;
    text-align: left;
    vertical-align: middle;
}

.CartItemAmountBox{
    width:15%;
    text-align: left;
    margin-top:5%;
    vertical-align: top;
}

.CartItemAmountBtn{
    width:30px;
    vertical-align:top;
    text-align: center;
    height:39px;
    background-color: rgba(72, 51, 24, 0.447);
    border-color: transparent;
    line-height: 1px;
}

.CartItemAmount{
    font-size: 1.1rem;
    background-color: rgba(254, 254, 254, 0.723);
    width: 60px;
    height:40px;
    color:rgb(48, 31, 20);
    display:inline-block;
    text-align: center;
    vertical-align:middle;
    line-height: 40px;
}

.CartBtnBox{
    width:10%;
    text-align: right;
}

.CartBtn{
    border-color: transparent;
    background-color: rgba(190, 142, 65, 0.447);
    text-align: center;
    width:100px;
    border-radius: 5px;
    box-shadow: 2px 2px #5d4e36a3;
}

.CartBtnTitle{
    padding-top:10px;
    padding-bottom:0;
    font-size:22px;
    color:rgb(70, 43, 38);
    font-weight: 800;
    vertical-align:bottom;
}

@media (max-width:767px) {
    .CartItemTable{
        padding-left:0px;
        padding-right:0px;
    }
    .CartItemImg{
        width:100px;
        height: 100px;
        object-fit: cover;
        display: block;
    }
    .CartItemTitle{
        font-size: 15px;
        padding-left:2%;
    }
    .CartItemAmountBox{
        width:30%;
        padding-left:2px;
    }
    .CartItemAmountBtn{
        width:20px;
        vertical-align:bottom;
        text-align: center;
        height:25px;
        background-color: rgba(72, 51, 24, 0.447);
        border-color: transparent;
        line-height: 1px;
    }
    .CartItemAmount{
        font-size: 0.9rem;
        background-color: rgba(254, 254, 254, 0.723);
        width: 50px;
        height:25px;
        color:rgb(48, 31, 20);
        display:inline-block;
        text-align: center;
        vertical-align:middle;
        line-height: 23px;
    }
    .CartItemPriceBox{
        width:12%;
    }
    .CartBtn{
        width:60px;
    }
    .CartBtnTitle{
        font-size: 15px;
        padding-top:10px;
    }
}

@media (min-width:768px) {
    .CartItemTitle{
        font-size: 18px;
        padding-left:3%;
    }
    .CartBtn{
        width:100px;
    }
    .CartBtnTitle{
        font-size: 22px;
    }
    
}

@media (min-width:992px) {
    .CartItemTitle{
        font-size: 19px;
        padding-left:0%;
    }
}

@media (min-width:1200px){
    .CartItemTitle{
        font-size: 19px;
        padding-left:0;
    }
}
</style>