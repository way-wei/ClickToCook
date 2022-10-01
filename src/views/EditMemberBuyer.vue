<template>
  <div class="container-fluid editMemberbg">
      <div>
          <Nav/>
      </div>

      <div ><!--class="container-fluid "-->
        <div class="row">
        <div class="col-12 mt-4">
        <form class="row g-3 mt-5 pt-2 me-5 ms-5 justify-content-center align-items-center">
            <div class="col-10">
                <h4 class="titleStyle">修改個人資料</h4>
            </div>     
              <div class="col-md-5 col-sm-8 mt-3">                
                  <label for="recipeName" class="form-label EditMemberLable">真實姓名</label>
                  <input type="text" class="form-control" id="recipeName" v-model="mName">                  
              </div>  
              <div class="col-md-5 col-sm-8 mt-3">
                  <label for="recipeName" class="form-label EditMemberLable">暱稱</label>
                  <input  type="text" class="form-control" id="recipeName" v-model="nickname">                
              </div> 

              <div class="col-md-5 col-sm-8 mt-3">
                  <label for="SelectPeople" class="form-label EditMemberLable">性別</label>
                  <select  id="SelectPeople" class="form-select" v-model="gender">
                    <option value="">未設定</option>
                    <option value="M">男生</option>
                    <option value="F">女生</option>
                  </select>
              </div>
              <div class="col-md-5 col-sm-8 mt-3">
                  <label for="recipeName" class="form-label EditMemberLable">生日</label>
                  <b-form-datepicker v-model="birth" class="mb-2"></b-form-datepicker>                
              </div> 

              <div class="col-md-5 col-sm-8 mt-3">
                  <label for="recipeName" class="form-label EditMemberLable">手機號碼</label>
                  <input type="text" class="form-control" id="recipeName" v-model="phone">
              </div> 
              <div class="col-md-5 col-sm-8 mt-3">
                  <label for="recipeName" class="form-label EditMemberLable">信箱</label>
                  <input type="text" class="form-control" id="recipeName" v-model="mail">
                
              </div> 

              <div class="col-md-10 col-sm-8 mt-5">
                  <label for="recipeName" class="form-label EditMemberLable">密碼</label>
                  <button type="submit" class="updatepwBtn" @click="goEditPassword()">修改密碼</button>
              </div> 
              
              <div class="col-md-12 d-flex justify-content-center mt-5">              
                <button type="submit" class="addRecipeBtn" @click="updateMemberItem()">儲存變更</button>
              </div>
           
        </form>
            </div>
        </div>
      </div>
      <footer>
        <Footer/>
      </footer>
      
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
        goEditPassword() {
       localStorage.setItem('userPW', this.MemberlistData[0].password)
       this.$router.push("/editpasswordbuyer");
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
.EditMemberBuyerFooter{
  position: sticky;
}
</style>