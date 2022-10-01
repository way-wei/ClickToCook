<template>
<div class = "col-6 col-md-3 col-lg-2 mb-4 mt-3">
  <div class="StoreitemCard p-1">
    <router-link :to = "{name: 'Info', params:{id:item.rId}}" class = "routerLink" >
      <a class = "card-link StoreitemCardPointer">
      <img :src="`http://127.0.0.1:8000/recipe/${item.rId}.jpg`" class="card-img-top p-1" alt="...">
      <div class="card-body">
        <h5 class="card-title">{{ rName }}
        <span class="StoreitemPriceSpan">${{ this.price }}</span></h5>
        
      </div>
      </a>
      
    </router-link><button class="StoreitemCollectBtn" @click="DeleteCollect(rId)">取消收藏</button>
    </div>
</div>

</template>

<script>
import{getACollect, getPackagePrice} from "../services/recipe";
export default {
    props: {
        item: Object,
    },
    data() {
        return {
            mId:'',
            rId:"",
            ACollectListData:[],
            rName:"",
            intro:"",
            cover:"",
            serving:"",
            rTime:"",
            cId:"",
            price:0,
            listData:[]
        };
    },
    methods: {
        VueGetPrice() {
            getPackagePrice({
                id: this.item.rId})
            .then((res) => {
                this.listData = res.data;
                this.price = this.listData[0].price;
            });
            },
        ShowACollect(){
            getACollect({
                rId: this.item.rId
            }).then((res)=>{
                this.ACollectListData=res.data;
                this.rId=this.ACollectListData[0].rId;
                this.rName=this.ACollectListData[0].rName;
                this.cover=this.ACollectListData[0].cover
            })
        },
        DeleteCollect(){
            this.$emit("deleteCollect",this.item.rId);
        },        
    },
    mounted() {
      this.ShowACollect(),
      this.VueGetPrice()
    },
}   
</script>

<style>
.collectTitle{
    text-align: center;
}
.CollectSeeBtn{
    color: white;
    background-color: rgb(100,88,88);
    width:5.5rem;
    display: inline-block;
    height:30px;
    line-height: 30px;
    text-align: center;
    text-decoration: none;
    vertical-align: middle;
    border: 1px solid transparent;
    padding: 0 1rem;
    font-size: 15px;
    border-radius: 0.25rem;
    float: right;
}
.collectHeart{
    height: 20px;
    line-height: 20px;
}
.unCollectBtn{
    color: white;
    background-color: rgb(100,88,88);
    width:5.5rem;
    display: inline-block;
    height:30px;
    line-height: 30px;
    text-align: center;
    text-decoration: none;
    vertical-align: middle;
    border: 1px solid transparent;
    padding: 0 1rem;
    font-size: 15px;
    border-radius: 0.25rem;
}
</style>