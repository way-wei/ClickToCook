<template>
  <div class="container-fluid StoreBg">
    <Nav/>
    <div class = "row row-col-1 mt-5 align-items-center justify-content-center ">
        <div class = "col-12 pt-md-2 ps-md-5">
            <h5 class = "OrderItem pt-3 px-3 px-md-4">訂單商品</h5>
        </div>
        <div class = "col-12 mb-4">
            <OrderItem v-for="item in listData" :key="item.ID" :item="item" />
        </div>
        <div class = "col-12 px-md-5 px-1">
            <hr>
        </div>
        <div class = "col-12 ps-md-5 mb-4">
            <table class="OrderTable">
                <tr>
                    <td colspan="2"><h5 class = "OrderInfo pt-1 px-3 px-md-4">付款資訊</h5></td>
                </tr>
                <tr>
                    <td class = "OrderPaymentTitleBox"><h5 class = "OrderPaymentTitle px-1 px-md-2 px-lg-4">付款方式：</h5></td>
                    <td class = "OrderPaymentWayBox">
                        <input type = "radio" value="貨到付款" name="PaymentWay" @click="creditcard = false" v-model="method"><label class = "OrderPaymentText">貨到付款</label>
                        <input type = "radio" value="信用卡付款" name="PaymentWay" @click="creditcard = true" v-model="method"><label class = "OrderPaymentText">信用卡付款</label>
                    </td>
                </tr>
                <tr v-if="creditcard ==true">
                    <td class = "OrderPaymentTitleBox"><h5 class = "OrderPaymentTitle px-1 px-md-2 px-lg-4">信用卡種類：</h5></td>
                    <td class = "OrderPaymentWayBox">
                        <input type = "radio" value="JCB" name="CardType" v-model="cardkind"><label class = "OrderPaymentText CardTypeText">JCB</label>
                        <input type = "radio" value="MasterCard" name="CardType" v-model="cardkind"><label class = "OrderPaymentText CardTypeText">MasterCard</label>
                        <input type = "radio" value="VISA" name="CardType" v-model="cardkind"><label class = "OrderPaymentText CardTypeText">VISA</label>
                    </td>
                </tr>
                <tr v-if="creditcard ==true">
                    <td class = "OrderPaymentTitleBox"><h5 class = "OrderPaymentTitle px-1 px-md-2 px-lg-4">信用卡持有者：</h5></td>
                    <td class = "OrderPaymentWayBox">
                        <input type = "text" name="PaymentOwner" class = "OrderPaymentTextOwner OrderPaymentText" v-model="cardowner">
                    </td>
                </tr>
                <tr v-if="creditcard ==true">
                    <td class = "OrderPaymentTitleBox"><h5 class = "OrderPaymentTitle px-1 px-md-2 px-lg-4">信用卡卡號：</h5></td>
                    <td class = "OrderPaymentWayBox">
                        <input type = "text" name="PaymentId1" class = "OrderPaymentTextId OrderPaymentText" placeholder="****" v-model="c1">
                        <input type = "text" name="PaymentId2" class = "OrderPaymentTextId OrderPaymentText" placeholder="****" v-model="c2">
                        <input type = "text" name="PaymentId3" class = "OrderPaymentTextId OrderPaymentText" placeholder="****" v-model="c3">
                        <input type = "text" name="PaymentId4" class = "OrderPaymentTextId OrderPaymentText" placeholder="****" v-model="c4">
                    </td>
                </tr>
                <tr v-if="creditcard ==true">
                    <td class = "OrderPaymentTitleBox"><h5 class = "OrderPaymentTitle px-1 px-md-2 px-lg-4">有效日期：</h5></td>
                    <td class = "OrderPaymentWayBox">
                        <input type = "text" name="PaymentDateM" class = "OrderPaymentTextId OrderPaymentText" placeholder="MM" v-model="mm">
                        <input type = "text" name="PaymentDateY" class = "OrderPaymentTextId OrderPaymentText" placeholder="YY" v-model="yy">
                    </td>
                </tr>
                <tr v-if="creditcard ==true">
                    <td class = "OrderPaymentTitleBox"><h5 class = "OrderPaymentTitle px-1 px-md-2 px-lg-4">安全碼：</h5></td>
                    <td class = "OrderPaymentWayBox">
                        <input type = "text" name="PaymentPin" class = "OrderPaymentTextId OrderPaymentText" placeholder="***" v-model="pin">
                    </td>
                </tr>
            </table>
        </div>
        <div class = "col-12 px-md-5 px-1">
            <hr>
        </div>
        
        <div class = "col-12 ps-md-5">
            <table class="OrderTable">
                <tr>
                    <td colspan="2"><h5 class = "OrderInfo pt-1 px-3 px-md-4">寄送資訊</h5></td>
                </tr>
                <tr>
                    <td class = "OrderPaymentTitleBox"><h5 class = "OrderPaymentTitle px-1 px-md-2 px-lg-4">收件者姓名：</h5></td>
                    <td class = "OrderPaymentWayBox">
                        <h5 class = "OrderPaymentTitle">
                            {{mName}}
                        </h5>
                    </td>
                </tr>
                <tr>
                    <td class = "OrderPaymentTitleBox"><h5 class = "OrderPaymentTitle px-1 px-md-2 px-lg-4">連絡電話：</h5></td>
                    <td class = "OrderPaymentWayBox">
                        <h5 class = "OrderPaymentTitle">
                            {{phone}}
                        </h5>
                    </td>
                </tr>
                <tr>
                    <td class = "OrderPaymentTitleBox"><h5 class = "OrderPaymentTitle px-1 px-md-2 px-lg-4">收件地址：</h5></td>
                    <td class = "OrderPaymentWayBox">
                        <input type = "text" name="SendAddress" class = "OrderPaymentTextAddress OrderPaymentText" v-model="address">
                    </td>
                </tr>
            </table>
        </div>

        <div class = "col-12 px-md-5 px-1">
            <hr>
        </div>


        <div class = "col-12 ps-md-5">
            <table class="OrderTable">
                <tr>
                    <td class = "OrderMoneyTitleBox"><h5 class = "OrderPaymentTitle px-1 px-md-2 px-lg-4">商品總金額：</h5></td>
                    <td class = "OrderMoneyTextBox">
                        <h5 class="OrderMoneyText">${{sum}}</h5>
                    </td>
                </tr>
                <tr>
                    <td class = "OrderMoneyTitleBox"><h5 class = "OrderPaymentTitle px-1 px-md-2 px-lg-4">運費：</h5></td>
                    <td class = "OrderMoneyTextBox">
                        <h5 class="OrderMoneyText">${{fee}}</h5>
                    </td>
                </tr>
                <tr>
                    <td class = "OrderMoneyTitleBox"><h5 class = "OrderPaymentTitle px-1 px-md-2 px-lg-4">總付款金額：</h5></td>
                    <td class = "OrderMoneyTextBox">
                        <h5 class="OrderMoneyTextSum">${{total}}</h5>
                    </td>
                </tr>
                
            </table>
        </div>
        <div class = "col OrderBtnBox justify-content-center mt-3 mb-4">
            <button class="OrderBtn" @click="VueAddTransaction(), VueAddRecord()">
                <h5 class = "OrderBtnTitle">下訂單</h5>
            </button>
        </div>
        <div class = "col-12">
            <Footer/>
        </div>
    </div>
    
  </div>
</template>

<script>
import Nav from "../components/navigator.vue";
import OrderItem from "../components/orderitem.vue";
import Footer from "../components/footer.vue";
import { deleteAllItemSum, deleteOrder, addRecord, getCheckedOrder, getMaxId, addTransaction, getOrderSum, getAllMembers, getPackageInfo } from "../services/recipe";

export default {
    components: {
        Nav,
        OrderItem,
        Footer
    },
    data(){
        return{
            c1:"",
            c2:"",
            c3:"",
            c4:"",
            mm:"",
            yy:"",
            creditcard: false,
            MaxtId:0,
            method:"",
            cardowner:"",
            cardkind:"",
            pin:"",
            address:"",
            total:0,
            fee:0,
            sum:0,
            listData:[],
            listData2:[],
            listData3:[],
            listData4:[],
            listData5:[],
            sum1:0,
            listData6:[],
            phone:"",
            mName:localStorage.getItem('userName'),
        }
    },
    methods:{
        VueGetCheckedOrder(){
            getCheckedOrder({
                cartId: localStorage.getItem('userCartId')})
            .then((res) => {
                this.listData = res.data;
            });
        },

        /*VueGetMaxId(){
            getMaxId().then((res) => {
                this.listData2 = res.data;
                this.MaxtId = this.listData2[0].MaxId;
            });
        },*/

        VueAddTransaction(){
            getMaxId().then((res) => {
                this.listData2 = res.data;
                this.MaxtId = this.listData2[0].MaxId;
            });
            addTransaction({
                tId: parseInt(this.MaxtId) + 1,
                method: this.method, 
                cardowner: this.cardowner, 
                cardkind: this.cardkind, 
                cardId: this.c1 + this.c2 + this.c3 + this.c4,
                valid: this.mm + '/' + this.yy, 
                pin: this.pin,  
                address: this.address,  
                total: this.total, 
                fee: this.fee,            
                mId: localStorage.getItem('userId'), 
                cartId: localStorage.getItem('userCartId')
            })
            .then((res) => {
                this.listData3 = res.data;
                if(this.listData3[0] == 'T'){
                    alert("下單成功");
                    this.$router.push("/myorders");
                }
            });
        },
            
        VueAddRecord(){
            for(let i = 0 ; i <= this.listData.length; i ++){
                getPackageInfo({
                    pId: this.listData[i].pId})
                .then((res) => {
                    this.listData6 = res.data;
                    getMaxId().then((res) => {
                        this.listData2 = res.data;
                        this.MaxtId = this.listData2[0].MaxId;
                    });                   
                    addRecord({
                        tId: parseInt(this.MaxtId) + 1,
                        pId: this.listData[i].pId,
                        amount: this.listData[i].quantity,
                        sum: this.listData6[0].price * this.listData[i].quantity
                    })
                    .then((res) => {
                    });
                    deleteOrder({
                        cartId: localStorage.getItem('userCartId'),
                        pId:this.listData[i].pId,})
                    .then((res) => {
                    });
                    deleteAllItemSum();
                });
            } 
        },

        VueGetOrderSum(){
            getOrderSum({
                cartId: localStorage.getItem('userCartId')
            })
            .then((res) => {
                this.listData4 = res.data;
                this.sum = this.listData4[0].OrderSum;
                if(this.sum > 1500){
                    this.fee = 0;
                }
                else{
                    this.fee = 150;
                }
                this.total = parseInt(this.sum) + parseInt(this.fee);
            });
        },

        
        VueGetPhone(){
            getAllMembers({
                mId: localStorage.getItem('userId')
            })
            .then((res) => {
                this.listData5 = res.data;
                this.phone = this.listData5[0].phone;
            });
        },

        VueRecordAddItem(){
            getMaxId().then((res) => {
                this.listData2 = res.data;
                this.MaxtId = this.listData2[0].MaxId;
            });
            for(let i = 0 ; i <= this.listData.length; i ++){
                console.log(this.listData[i]);
                getPackageInfo({
                    pId: this.listData[i].pId})
                .then((res) => {
                    this.listData6 = res.data;                    
                    addRecord({
                        tId: parseInt(this.MaxtId) + 1,
                        pId: this.listData[i].pId,
                        amount: this.listData[i].quantity,
                        sum: this.listData6[0].price * this.listData[i].quantity
                    })
                    .then((res) => {
                    });
                    deleteOrder({
                        cartId: localStorage.getItem('userCartId'),
                        pId:this.listData[i].pId,})
                    .then((res) => {
                    });
                    deleteAllItemSum();
                });
            }
        }


    },
    mounted(){
        this.VueGetCheckedOrder();
        /*this.VueGetMaxId();*/
        this.VueGetOrderSum();
        this.VueGetPhone();
    }
}
</script>

<style>
.OrderTable{
    width:100%;
}

.OrderItem{
    font-size: 20px;
    font-weight: 600;
    color:rgb(78, 21, 9);
    font-style:italic;
}

hr{
    padding-top:1.5px;
    margin-left: auto;
    margin-right: auto;
    color: rgb(51, 22, 4) !important;
    border: transparent;
}
.OrderInfo{
    font-size: 20px;
    font-weight: 600;
    color:rgb(78, 21, 9);
    margin-top: 20px;
    font-style:italic;
}

.OrderPaymentTitleBox{
    width:10%;
    padding-top:20px;
    padding-bottom: 10px;
}

.OrderPaymentTitle{
    font-size: 19px;
    font-weight: 600;
}

.OrderPaymentWayBox{
    width:50%;
}

.OrderPaymentText{
    font-size: 23px;
    font-weight: 500;
    margin-right:15px;
}

input[type = "radio"]{
    width:15px;
    height:15px;
    margin-right: 8px;
    margin-left:8px;
}

.CardTypeText{
    font-family: 'Times New Roman', serif;
}

.OrderPaymentTextOwner{
    margin-left: 8px;
    background-color: transparent;
    border-color: #49331fd7;
    border-radius:5px;
    width:200px;
}

.OrderPaymentTextOwner2{
    margin-left: 8px;
    background-color: transparent;
    border-color: #49331fd7;
    border-radius:5px;
    width:200px;
}

.OrderPaymentTextId{
    font-family: 'Times New Roman', serif;
    margin-left: 8px;
    background-color: transparent;
    border-color: #49331fd7;
    border-radius:5px;
    width:100px;
}

.OrderPaymentTextPhone{
    font-family: 'Times New Roman', serif;
    margin-left: 8px;
    background-color: transparent;
    border-color: #49331fd7;
    border-radius:5px;
    width:230px;
}

.OrderPaymentTextAddress{
    font-family: 'Times New Roman', serif;
    margin-left: 8px;
    background-color: transparent;
    border-color: #49331fd7;
    border-radius:5px;
    width:500px;
}

.OrderMoneyTitleBox{
    width:85%;
    text-align: right;
}

.OrderMoneyTextBox{
    width:15%;
    text-align: right;
}

.OrderMoneyText{
    font-size: 20px;
    font-weight: 500;
    margin-right:15px;
    text-align: left;
}

.OrderMoneyTextSum{
    font-size: 28px;
    font-weight: 500;
    margin-right:15px;
    text-align: left;
    color:rgb(213, 15, 15);
}

.OrderBtnBox{
    display: flex;
}

.OrderBtn{
    border-color: transparent;
    background-color: rgba(190, 142, 65, 0.447);
    align-items: center;
    width:200px;
    border-radius: 5px;
    box-shadow: 2px 2px #5d4e36a3;
}

.OrderBtnTitle{
    letter-spacing: 5px;
    padding-top:15px;
    font-size:1.6rem;
    color:rgb(70, 43, 38);
    font-weight: 700;
    vertical-align:bottom;
}

@media (max-width:767px) {
    .OrderItem{
        font-size: 15px;
        font-weight: 600;
        color:rgb(78, 21, 9);
        font-style:italic;
    }   
    .OrderInfo{
        font-size: 15px;
        font-weight: 600;
        color:rgb(78, 21, 9);
        margin-top: 20px;
        font-style:italic;
    }
    .OrderPaymentTitleBox{
        width:25%;
    }
    .OrderPaymentTitle{
        font-size: 15px;
        font-weight: 600;
    }
    .OrderPaymentText{
        font-size: 15px;
    }
    .OrderPaymentTextId{
        width:60px;
        margin-left: 0px;
    }
    .OrderPaymentTextAddress{
        width:250px;
    }
    .OrderMoneyTitleBox{
        width:80%;
    }
    .OrderMoneyTextBox{
        width:20%;
    }
    .OrderPaymentTextOwner{
        margin-left: 0px;
    }
}
@media (min-width:768px){    
    .OrderPaymentTitle{
        font-size: 18px;
        font-weight: 600;
    }
    .OrderPaymentTitleBox{
        width:20%;
    }
    .OrderPaymentText{
        font-size: 18px;
    }
    .OrderPaymentTextId{
        width:60px;
    }
    .OrderPaymentTextAddress{
        width:300px;
    }
    .OrderMoneyTitleBox{
        width:85%;
    }
    .OrderMoneyTextBox{
        width:15%;
    }
    
}

@media (min-width:992px){
    .OrderPaymentTitleBox{
        width:15%;
    }
    .OrderPaymentTitle{
        font-size: 19px;
        font-weight: 600;
    }
    .OrderPaymentText{
        font-size: 19px;
    }
    .OrderPaymentTextId{
        width:100px;
    }
    .OrderPaymentTextAddress{
        width:300px;
    }
    
}
@media (min-width:1200px){
    .OrderPaymentTitleBox{
        width:13%;
    }
    .OrderPaymentTitle{
        font-size: 19px;
        font-weight: 600;
        margin-left:5%;
    }
    .OrderPaymentText{
        font-size: 19px;
    }
    .OrderPaymentTextId{
        width:100px;
    }
    .OrderPaymentTextAddress{
        width:450px;
    }
}






</style>