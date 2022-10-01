<template>
  <div class="editMemberbg">
      <div>
          <Nav/>
      </div>

      <div class="container-fluid">
        <div class="row ">
            <div class="col-md-3">
              <nav id="sidebar" class="pt-5">
                <div class="p-4 pt-5 ml-4">
                      <h5>{{this.showname}}</h5>
                            <ul class="list-unstyled components mb-5">
                              <li>
                                  <a href="" @click="goEditMember()">修改個人資料</a>
                              </li>
                              <li>
                                  <a href="" @click="goWriteRecipe()">撰寫食譜</a> 
                              </li>
                              <li>
                                  <a href="" @click="goEditRecipe()">修改食譜</a>
                              </li>
                            </ul>     
                </div>
              </nav>
            </div>


        <div class="col-md-6 col-sm-12 mt-4">
        <form class="row g-3 mx-4 my-5 ">
            <div class="col-md-12">
                <h4 class="titleStyle">修改個人資料</h4>
            </div>     
              <div class="col-md-6">                
                  <label for="recipeName" class="form-label EditMemberLable">真實姓名</label>
                  <input type="text" class="form-control" id="recipeName" v-model="mName">                  
              </div>  
              <div class="col-md-6">
                  <label for="recipeName" class="form-label EditMemberLable">暱稱</label>
                  <input  type="text" class="form-control" id="recipeName" v-model="nickname">                
              </div> 

              <div class="col-md-6">
                  <label for="SelectPeople" class="form-label EditMemberLable">性別</label>
                  <select  id="SelectPeople" class="form-select" v-model="gender">
                    <option value="">未設定</option>
                    <option value="M">男生</option>
                    <option value="F">女生</option>
                  </select>
              </div>
              <div class="col-md-6">
                  <label for="recipeName" class="form-label EditMemberLable">生日</label>
                  <b-form-datepicker v-model="birth" class="mb-2"></b-form-datepicker>                
              </div> 

              <div class="col-md-6">
                  <label for="recipeName" class="form-label EditMemberLable">手機號碼</label>
                  <input type="text" class="form-control" id="recipeName" v-model="phone">
              </div> 
              <div class="col-md-6">
                  <label for="recipeName" class="form-label EditMemberLable">信箱</label>
                  <input type="text" class="form-control" id="recipeName" v-model="mail">
                
              </div> 

              <div class="col-md-6">
                  <label for="recipeName" class="form-label EditMemberLable">密碼</label>
                  <button type="submit" class="updatepwBtn" @click="goEditPassword()">修改密碼</button>
              </div> 
              
              <div class="col-md-12 d-flex justify-content-center">              
                <button type="submit" class="addRecipeBtn" @click="updateMemberItem()">儲存變更</button>
              </div>
           
        </form>
            </div>
        </div>
      </div>
      <div class = "col-12">
            <Footer/>
      </div>
    </div>
</template>


<script>
import Nav from "../components/navigator.vue";
import Footer from "../components/footer.vue";
import{getAllMembers,updateMember} from "../services/recipe";
export default {
    data() {
      return {
        isEdit: false,
        MemberlistData: [],
        mId:localStorage.getItem('userId'),
        showname:localStorage.getItem('userName'),
        mName:"",
        gender:"",
        birth:"",
        phone:"",
        nickname:"",
        mail:"",
        password:"",
        userPW:"",
      }
    },
    components:{
        Nav,   
        Footer 
    },
    methods: {
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
     goEditPassword() {
       localStorage.setItem('userPW', this.MemberlistData[0].password)
       this.$router.push("/editpassword");
     },
     getMemberInfo(){
        getAllMembers({
            mId:this.mId,
        }).then((res) => {
          console.log(this.mId);
            this.MemberlistData = res.data;
            this.mId = this.MemberlistData[0].mId;
            this.mName = this.MemberlistData[0].mName;
            this.gender = this.MemberlistData[0].gender;
            this.birth = this.MemberlistData[0].birth;
            this.phone = this.MemberlistData[0].phone;
            this.nickname = this.MemberlistData[0].nickname;
            this.mail = this.MemberlistData[0].mail;
            this.password = this.MemberlistData[0].password;
        });
      },
      updateMemberItem() {
            updateMember({
                mId: this.mId,
                mName: this.mName,
                gender: this.gender,
                birth: this.birth,
                phone:this.phone,
                nickname:this.nickname,
                mail:this.mail,
                password:this.password,
            }).then((res) => {
              alert("修改成功");
              this.getMemberInfo();
            });
        },
    },
    mounted() {
      this.getMemberInfo()
    },
}
</script>

<style scoped>
@import './../assets/css/sideStyle.css';
.editMemberbg{
    background-color: #ebe6d7;
    min-height: 100vh;
}
.updatepwBtn{
  color: white;
    background-color: rgb(100,88,88);
    display: inline-block;
    font-weight: 400;
    line-height: 1.5;
    text-align: center;
    text-decoration: none;
    vertical-align: middle;
    user-select: none;
    border: 1px solid transparent;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    border-radius: 0.25rem;
    margin-left: 20px;
}
.updatepwBtn:hover{
  background-color: rgb(138, 123, 123);
}
.EditMemberLable{
    font-size: 1.1rem;
    color: rgb(100,88,88);
}
</style>