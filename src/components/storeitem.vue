<template>

<div class = "col-6 col-md-3 col-lg-2 mb-4 mt-3">
  <div class="StoreitemCard p-1">
    <router-link :to = "{name: 'Info', params:{id:item.rId}}" class = "routerLink" >
      <a class = "card-link StoreitemCardPointer">
      <img :src="`http://127.0.0.1:8000/recipe/${item.rId}.jpg`" class="card-img-top p-1" alt="...">
      
      <div class="card-body">
        <h5 class="card-title">{{ item.rName }}
        <span class="StoreitemPriceSpan">${{ this.price }}</span>
      </h5></div>
      </a>
    </router-link>
    <button class="StoreitemCollectBtn" @click="VueCollectRecipes()">收藏</button>
  </div>
</div>

  
    
</template>

<script>

import { getPackagePrice, addCollect} from "../services/recipe";

export default 

{

  props: {
    item: Object,
  },

  data () {
    return {
      price:0,
      listData:[],
      listData2:[],
      id: this.item.rId,
      userId: localStorage.getItem('userId'),
    }
  },

  methods:{
    VueGetPrice() {
      getPackagePrice({
          id: this.id})
      .then((res) => {
          this.listData = res.data;
          this.price = this.listData[0].price;
      });
    },

    VueCollectRecipes() {
      addCollect({
          mId: this.userId,
          rId: this.id
      })
      .then((res) => {
        this.listData2 = res.data;
        if(this.listData2[0] == "T"){
          alert("收藏成功");
        }
        else{
          alert("已經收藏過囉");
        }
      });
    },
  },
  mounted(){
    this.VueGetPrice();
  }
}
</script>

<style>
.StoreitemCard{
  width: 100%;
  border-color:transparent !important;
  background-color: #724d391d !important;
  box-shadow: 3px 3px #2a241b5a !important;
}

.StoreitemCard:hover img{
  transform: scale(1.05);
}

.StoreitemCardPointer{
  cursor: pointer;
}

.StoreitemCard > .routerLink > a{
  text-decoration: #724d3900;
}

.StoreitemCard > .routerLink >.card-link > .card-img-top{
  width: 100%;
  height: 40vmin;
  object-fit: cover;
}

.StoreitemCard > .routerLink >.card-link > .card-body{
  margin:5px;
  padding:0px;
  vertical-align:top;
}

.StoreitemCard > .routerLink >.card-link > .card-body > .card-title{
  color: rgb(8, 8, 8);
  font-size:1.1rem;
}

.StoreitemPriceSpan{
  float:right;
}

.StoreitemCollectBtn{
    border-color: transparent;
    background-color: rgba(190, 142, 65, 0.447);
    align-items: center;
    width:90px;
    height: 35px;
    margin-top:5px;
    margin-bottom:5px;
    border-radius: 5px;
    margin-left: 5px;
    box-shadow: 2px 2px #5d4e36a3;
    font-size: 17px;
}



.StoreitemCollectBtn:hover{
  background-color: #c11b0fd7;
  color:white;
}


</style>