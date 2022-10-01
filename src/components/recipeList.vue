<template>
    <div class = "col-md-3 mx-3 mt-4 mb-5 pb-5">
        <div class="EdititemCard p-1">
            <img :src="`http://127.0.0.1:8000/recipe/${item.rId}.jpg`" class="Edit-card-img-top p-1" alt="...">
            <div class="Edit-card-body">
                <h5 class="Edit-card-title">{{item.rName }}</h5>
                <button class="EditRecipeItemBtn" @click="goEditRecipeItem()">查看</button> 
            </div>
        </div>
    </div>
</template>

<script>
import { getMemberARecipe} from "../services/recipe";
export default {
    props: {
        item: Object,
    },
    data() {
        return {
          rName: "",
          cover: "",
          listData:[],
        };
    },
    methods: {
      goEditRecipeItem(){
        localStorage.setItem('userrId', this.item.rId)
        this.$router.push("/EditRecipeItem")
      },
      ShowMemberARecipes(){
            getMemberARecipe({
                rId:this.item.rId,
            }).then((res) => {
                this.listData = res.data;
                this.rId = this.listData[0].rId;
                this.rName = this.listData[0].rName;
                this.intro = this.listData[0].intro;
                this.cover = this.listData[0].cover;
                this.serving = this.listData[0].serving;
                this.rTime = this.listData[0].rTime;
                this.cId = this.listData[0].cId;
            });
        },
    },
    mounted() {
      this.ShowMemberARecipes()
    },
}
</script>

<style>
.EdititemCard{
  width: 90%;
  border-color:transparent !important;
  background-color: #724d391d !important;
  box-shadow: 3px 3px #2a241b5a !important;
}
.Edit-card-body{
  margin:5px;
  padding:0px;
  vertical-align:top;
}
.Edit-card-img-top{
  width: 100%;
  height: 40vmin;
  object-fit: cover;
}
.Edit-card-title{
  color: rgb(8, 8, 8);
  font-size:1.1rem;
}

.EditRecipeItemBtn{
    color: white;
    background-color: rgb(100,88,88);
    display: inline-block;
    line-height: 30px;
    text-align: center;
    text-decoration: none;
    vertical-align: middle;
    border: 1px solid transparent;
    width:90px;
    height: 35px;
    margin-top:5px;
    margin-bottom:5px;
    font-size: 17px;
    border-radius: 0.25rem;
    
}
.EditRecipeItemBtn:hover{
  color: white;
  background-color: rgb(138, 123, 123);
}
.deleteRecipeBtn{
  color: white;
    background-color: rgb(100,88,88);
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
    float:right;
}
.deleteRecipeBtn:hover{
  color: white;
  background-color: rgb(138, 123, 123);
}
</style>