<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top py-1 NavigatorBg">
      <div class="container-fluid">
        <a class="navbar-brand NavigatorSpace" href="/home">C<sup>2</sup>ook </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto">
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="/home">關於我們</a>
            </li>
            <li class="nav-item" v-if="this.userType != 'author'">
              <a class="nav-link" aria-current="page" href="/store">商城</a>
            </li>
          </ul>
          <ul class="navbar-nav ms-auto">
            <li class="nav-item" v-if="this.userId == ''">
              <!--member toggle slide in-->
              <div class="toggle">
                <a class="nav-link NavigatorSlideMemberPointer" @click="toggleLogin" >會員登入</a>
              </div>
            </li>
            <li class="nav-item dropdown" v-if="this.userId != '' && this.userType == 'buyer'" >
              <a class="nav-link dropdown-toggle" v-for="item in listData2" :key="item.ID" :item="item" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                {{item.mName}}
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li><a class="dropdown-item" href="/collectrecipe">我的收藏</a></li>
                <li><a class="dropdown-item" href="/editmemberbuyer">修改資料</a></li>
                <li><a class="dropdown-item" href="/myorders">我的訂單</a></li>
                <li><a class="dropdown-item" href="/home" @click="VueLogout()">登出帳號</a></li>
              </ul>
            </li>
            <li class="nav-item dropdown" v-if="this.userId != '' && this.userType == 'author'" >
              <a class="nav-link dropdown-toggle" v-for="item in listData2" :key="item.ID" :item="item" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                {{item.mName}}
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li><a class="dropdown-item" href="/editmember">修改個人資料</a></li>
                <li><a class="dropdown-item" href="/writerecipe">撰寫食譜</a></li>
                <li><a class="dropdown-item" href="/editrecipe">修改食譜</a></li>
                <li><a class="dropdown-item" href="/home" @click="VueLogout()">登出帳號</a></li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/myCart" v-if="this.userType != 'author'">購物車</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    
    <transition name="slide">
      <div class="LoginSlidein mt-5" v-if="Loginopen">
        <div class = "Loginbox">
          <h3 class = "LoginLabel">帳號</h3>
          <input class="LoginInputBox LoginLabel" v-model="account">
        </div>
        <div class = "Loginbox">
          <h3 class = "LoginLabel">密碼</h3>
          <input class="LoginInputBox LoginLabel" type = "password" v-model="password">
        </div>
        <button class="LoginBtn" @click="VueLogin('buyer'), VueLoginType('buyer')">
            <h5>購買者登入</h5>
        </button>
        <div class="toggle">
          <button class="LoginBtn"  @click="VueLogin('author'), VueLoginType('author')">
            <h5>撰寫者登入</h5>
          </button>
        </div>
      <hr>
        <div class="toggle">
          <button class="LoginBtn2"  @click="toggleRegister">
            <h5>註冊新帳號</h5>
          </button>
        </div>
      </div>
    </transition>



    <transition name="slide">
      <div class="RegisterSlidein" v-if="Registeropen">
        <div class = "RegisterBox">
          <h3 class = "LoginLabel RegisterBoxh31">真實姓名</h3>
          <input class="RegisterInputBox LoginLabel" v-model="name">
        </div>
        <div class = "RegisterBox">
          <h3 class = "LoginLabel RegisterBoxh32">性別</h3>
          <div class = "LoginGender LoginLabel">
            <div class="LoginGenderMale">
              <input type="radio" value="M" v-model="gender">男
            </div>
            <div>
              <input type="radio" value="F" v-model="gender">女
            </div>
          </div>
        </div>
        <div class = "RegisterBox DatePickerBox">
          <h3 class = "LoginLabel RegisterBoxh32">生日</h3>
          <div class= "LoginLabel LoginDatepicker">
            <b-form-datepicker id="example-datepicker" v-model="birth" class="mb-2"></b-form-datepicker>
          </div>
        </div>
        <div class = "RegisterBox">
          <h3 class = "LoginLabel RegisterBoxh31">手機號碼</h3>
          <input class="RegisterInputBox LoginLabel" v-model="phone">
        </div>
        <div class = "RegisterBox">
          <h3 class = "LoginLabel RegisterBoxh32">信箱</h3>
          <input class="RegisterInputBox LoginLabel" v-model="mail">
        </div>
        <div class = "RegisterBox">
          <h3 class = "LoginLabel RegisterBoxh32">帳號</h3>
          <input class="RegisterInputBox LoginLabel" v-model="nickname">
        </div>
        <div class = "RegisterBox">
          <h3 class = "LoginLabel RegisterBoxh32">密碼</h3>
          <input class="RegisterInputBox LoginLabel" v-model="password2">
        </div>
        
        <button class="RegisterBtn" @click="VueAddMember()">
            <h5>註冊</h5>
        </button>
      </div>
    </transition>
  </div>
</template>

<script>
import 'bootstrap/dist/js/bootstrap.min.js'
import { memberLogin, getMemberName, addMember, getCartId, addCart} from "../services/recipe";


export default {
  data() {
    return {
      account:"",
      password:"",
      listData: [],
      listData2: [],
      userId:localStorage.getItem("userId"),
      userType:localStorage.getItem("userType"),
      Loginopen: false,
      Registeropen: false,

      name:"",
      gender:"",
      birth:"",
      phone:"",
      nickname:"",
      mail:"",
      password2:"",
      listData3: [],
      
      listData4: [],
    };
  },
  
  methods: {
    VueLogin(type) {
      memberLogin({
          account: this.account,
          password: this.password})
      .then((res) => {
          this.listData = res.data;
          for(var i = 0; i < this.listData.length; i++){
            if(typeof(this.listData[i].mId) == "undefined"){
              alert("帳號或密碼錯誤");
              break;
            }
            else{
              if(type == 'buyer'){
                this.$router.push({path: '/store'});
              }
              else{
                this.$router.push({path: '/editmember'});
              }
              localStorage.setItem('userId',this.listData[i].mId);
              localStorage.setItem('userName',this.listData[i].mName);
              addCart({
                  mId: localStorage.getItem("userId")})
              .then((res) => {
                  
              });
              getCartId({
                  mId: localStorage.getItem("userId")})
              .then((res) => {
                  this.listData4 = res.data;
                  localStorage.setItem('userCartId',this.listData4[0].cartId);
              });
            }
          }
      });
    },

    

    
    

    VueLoginType(type){
      localStorage.setItem('userType',type);
    },

    VueShowName(){
      if(this.userId != ""){
        getMemberName({
          id: this.userId})
        .then((res) => {
            this.listData2 = res.data;
            console.log(this.listData2[0].mName);
        });
      }
    },

    VueLogout() {
      localStorage.setItem('userId', ""),
      localStorage.setItem('userType',"");
      localStorage.setItem('userName',"");
      localStorage.setItem('userCartId',"");
      localStorage.setItem('userPW',"");
    },

    VueAddMember() {
      addMember({
        name: this.name,
        gender: this.gender,
        birth: this.birth,
        phone: this.phone,
        nickname: this.nickname,
        mail: this.mail,
        password: this.password2,
      })
      .then((res) => {
        this.listData3 = res.data;
        if(this.listData3[0].mId != ""){
          alert("註冊成功");
        }
        else{
          alert("帳號名稱重複，請重新註冊");
        }
        this.$router.push({path: '/home'});
      });
    },



    toggleLogin() {
      this.Loginopen = !this.Loginopen;
      if(this.Registeropen = true){
        this.Registeropen = false
      };
    },

    toggleRegister() {
      if(this.Loginopen = true){
        this.Loginopen = false
      };
      this.Registeropen = !this.Registeropen;
    }
  },

  mounted(){
    this.VueShowName();
  }
    
}
</script>

<style>
.DatePickerBox{
  height:120px;
}

.LoginGender{
  width:340px;
}

.LoginGenderMale{
  float: left;
}
.LoginDatepicker{
  width:340px;
}
.NavigatorBg{
  font-weight:600;
  background-color: rgb(103, 97, 82);
}

.navbar-nav > li{
  padding-left:50px;
  padding-right:10px;
}

.NavigatorSpace{
  margin-left:10px;
  font-size:3vw;
}

.NavigatorSlideMemberPointer{
  cursor: pointer;
}

.slide-enter, .slide-leave-active {
  right: -100%;
}

.LoginSlidein {
  text-align: center;
  vertical-align: middle;
  min-width: 538px;
  padding: 100px 3% 3% 3%;
  position: fixed;
  z-index: 100;
  top: 0;
  right: 0;
  background: rgb(221, 221, 221);
  height: 100%;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.5);
  transition: all 0.5s ease-in-out;
}

.Loginbox{
  overflow: auto;
  white-space: nowrap;
  margin-bottom:20px;
}

.Loginbox > h3{
  font-size: 20px;
  font-weight: 700;
  padding-right:20px;
}

.LoginLabel{
  display: inline-block;
}

.LoginInputBox{
  font-size: 20px;
  border-radius:5px;
  width: 340px;
  height: 50px;
  border: transparent;
  background-color: #C1BFB9;
  font-family: "Times New Roman";
  padding-left: 5px;
}

.LoginBtn > h5{
  font-size:1.3rem;
  margin-left:10px;
  font-weight: 800;
  padding:0px;
  line-height:47px;
  align-items: center;
  letter-spacing: 5px;;
}

.LoginBtn{
  border-color: transparent;
  background-color: rgb(115, 108, 89);
  align-items: center;
  border-radius: 5px;
  box-shadow: 2px 2px #5d4e36a3;
  width: 390px;
  height: 50px;
  margin: 5% auto;  
  color:#f3f0f0;
}
.LoginBtn:hover{
  background-color:rgb(143, 134, 110) ;
}
.LoginBtn2 > h5{
  font-size:1.3rem;
  margin-left:10px;
  font-weight: 800;
  padding:0px;
  line-height:47px;
  align-items: center;
  letter-spacing: 5px;;
}
.LoginBtn2{
  border-color: transparent;
  background-color: rgb(99, 96, 89);
  align-items: center;
  border-radius: 5px;
  box-shadow: 2px 2px #5d4e36a3;
  width: 390px;
  height: 50px;
  margin: 5% auto;  
  color:#f3f0f0;
}
.LoginBtn2:hover{
  background-color:rgb(121, 117, 112);
}
.RegisterBtn{
  border-color: transparent;
  background-color: rgb(99, 96, 89);
  align-items: center;
  border-radius: 5px;
  box-shadow: 2px 2px #5d4e36a3;
  width: 435px;
  height: 50px;
  margin: 0% auto;
  margin-top:3%;
  color:#f3f0f0;
}
.RegisterBtn:hover{
  background-color:rgb(121, 117, 112);
}
.RegisterBtn > h5{
  font-size:1.3rem;
  margin-left:10px;
  font-weight: 800;
  padding:0px;
  line-height:47px;
  align-items: center;
  letter-spacing: 5px;;
}

.RegisterSlidein {
  min-width: 538px;
  padding: 60px 1% 3% 3%;
  position: fixed;
  z-index: 100;
  top: 0;
  right: 0;
  background: rgb(221, 221, 221);
  height: 100%;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.5);
  transition: all 0.5s ease-in-out;
}

.RegisterBox{
  overflow: auto;
  white-space: nowrap;
  margin-bottom:20px;
}

.RegisterBoxh31{
  font-size: 20px;
  font-weight: 700;
  padding-right:20px;
}

.RegisterBoxh32{
  font-size: 20px;
  font-weight: 700;
  padding-right:60px;
}

.RegisterInputBox{
  font-size: 20px;
  border-radius:5px;
  width: 340px;
  height: 50px;
  border: transparent;
  background-color: #C1BFB9;
  font-family: "Times New Roman";
  padding-left: 5px;
}

@media (max-width:767px) {
  .LoginSlidein {
    text-align: center;
    vertical-align: middle;
    min-width: 538px;
    padding: 130px 0% 3% 6%;
    position: fixed;
    z-index: 100;
    top: 0;
    right: 0;
    background: rgb(221, 221, 221);
    height: 100%;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.5);
    transition: all 0.5s ease-in-out;
  }
  .RegisterSlidein {
  
    text-align: center;
    min-width: 538px;
    padding: 65px 1% 1% 8%;
    position: fixed;
    z-index: 100;
    top: 0;
    right: 0;
    background: rgb(221, 221, 221);
    height: 100%;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.5);
    transition: all 0.5s ease-in-out;
  }
}

@media (min-width:768px) {
  .LoginSlidein {
    text-align: center;
    vertical-align: middle;
    min-width: 538px;
    padding: 130px 0% 3% 0%;
    position: fixed;
    z-index: 100;
    top: 0;
    right: 0;
    background: rgb(221, 221, 221);
    height: 100%;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.5);
    transition: all 0.5s ease-in-out;
  }
  .RegisterSlidein {
    text-align: center;
    min-width: 538px;
    padding: 65px 1% 3% 4%;
    position: fixed;
    z-index: 100;
    top: 0;
    right: 0;
    background: rgb(221, 221, 221);
    height: 100%;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.5);
    transition: all 0.5s ease-in-out;
  }
}

@media (min-width:992px){
  .LoginSlidein {
    text-align: center;
    vertical-align: middle;
    min-width: 538px;
    padding: 130px 3% 3% 3%;
    position: fixed;
    z-index: 100;
    top: 0;
    right: 0;
    background: rgb(221, 221, 221);
    height: 100%;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.5);
    transition: all 0.5s ease-in-out;
  }
  .RegisterSlidein {
    text-align: center;
    min-width: 538px;
    padding: 65px 1% 3% 1%;
    position: fixed;
    z-index: 100;
    top: 0;
    right: 0;
    background: rgb(221, 221, 221);
    height: 100%;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.5);
    transition: all 0.5s ease-in-out;
  }
}
</style>

