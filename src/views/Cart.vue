<template>
<body>
<div class="container-fluid CartBg">
    <Nav/>
    <div class = "row row-col-1 mt-5 align-items-center justify-content-center CartDiv">
        <div class = "col-12 mb-4 mt-4">
            <CartItem v-for="item in listData" :key="item.ID" :item="item" />
        </div>
        <div class = "col CartLastBtnBox justify-content-center mt-3 mb-4">
            <button class="CartLastBtn" @click="VueJump()">
                <h5 class = "CartLastBtnTitle">確認訂單</h5>
            </button>
        </div>
        <div class = "col-12">
            <Footer/>
        </div>
    </div>
</div>
</body>
</template>

<script>
import Nav from "../components/navigator.vue";
import CartItem from "../components/cartitem.vue";
import Footer from "../components/footer.vue";
import { getOrdersItem} from "../services/recipe";

export default {
    components: {
        Nav,
        CartItem,
        Footer,
    },
    data(){
        return{
            listData: [],
        };
    },
    methods:{
        VueGetOrderItem(){
            getOrdersItem({
                cartId: localStorage.getItem('userCartId')})
            .then((res) => {
                this.listData = res.data;
                console.log(this.listData);
            });
        },

        VueJump(){
            this.$router.push("/myorder");
        }
    },
    mounted(){
        this.VueGetOrderItem();
    }
}
</script>

<style>
.CartBg{
    background-color: #ebe6d7;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

.CartDiv{
    flex-grow: 1;
    flex-shrink: 0;
    flex-basis: auto;
}

.CartLastBtnBox{
    display: flex;
}

.CartLastBtn{
    border-color: transparent;
    background-color: rgba(190, 142, 65, 0.447);
    align-items: center;
    width:150px;
    border-radius: 5px;
    box-shadow: 2px 2px #5d4e36a3;
}

.CartLastBtnTitle{
    letter-spacing: 3px;
    padding-top:15px;
    margin-left: 2px;
    font-size:22px;
    color:rgb(70, 43, 38);
    font-weight: 800;
    vertical-align:bottom;
}
</style>