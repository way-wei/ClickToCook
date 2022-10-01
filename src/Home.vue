<template>

  <div class="container-fluid HomeAboutBg">
    <div class="row row-cols-1">
      <div class="col-12 p-0">
        <Nav/>
      </div>

      <transition name="appear" appear>
      <div class="col-12 mt-5 p-0">
          <div class = "col-12 HomeVideoOverlay HomeVideoTitleBox HomeVideoTitle">
            CLICK To COOK
            <div class = "col-12 HomeVideoOverlay HomeStoreBtnBox mt-5">
              <button class = "HomeStoreBtn" @click="goStore">帶我逛逛</button>
            </div>
          </div>
          <div class="col-12">
          <video id="HomeVideo" autoplay loop muted poster="">
            <source src="./assets/pancake.mp4" type="video/mp4">
          </video>
        </div>
      </div>
      </transition>

      <div class="col-12 pt-4 pb-2" >
        <div class = "col-12 col-lg-10 ps-5 pe-4" >
          <h1 class = "HomeAboutTitle" data-aos="fade-right" data-aos-offset="80" data-aos-easing="ease-in-quad">食譜與食材的華麗饗宴</h1>
          <p class = "HomeAboutParagraph" data-aos="fade-down" data-aos-offset="80" data-aos-easing="ease-in-sine" data-aos-delay="300">
            以「買食譜」的概念出發。
            從瀏覽食譜到放入購物車，再到下單付款，最短只需要5到10分鐘中，一天三餐甚至是一整個禮拜的三餐都已完成備料。<br>
            每一份食譜包含它的材料包以及料理步驟，會員以買食譜的方式，只需跟著料理步驟自行下廚，就可以瞬間變出一桌好菜。
          </p>

          <div data-aos="fade-right" data-aos-offset="120" data-aos-easing="ease-in-sine" data-aos-duration="600">
            <h5 class = "HomeAboutCaption" >新菜色靈感來源地</h5>
            <p class = "HomeAboutParagraph">
              擁有大量且多元的食譜，讓你不再每日為三餐菜色煩惱。透過會員撰寫食譜的功能，來增加平台的食譜數量及種類。
              會員可以分享自己獨特的料理方式，也能讓有心想要分享的會員受到更多的關注，同時解決缺乏菜色靈感的問題。 
            </p>
          </div>
          
          <div data-aos="fade-right" data-aos-offset="140" data-aos-easing="ease-in-sine" data-aos-duration="600">
          <h5 class = "HomeAboutCaption">查看食譜下單食材</h5>
          <p class = "HomeAboutParagraph">
            商城裡食譜的下單購買功能，減少使用者上街購買食材所花費的時間。
            加上生鮮運送逐漸普及化，會員不需擔心食材的新鮮度。 
            會員收到材料包後，只需跟著食譜所提供的料理步驟進行料理。
            不管是對忙碌的民眾，或是廚房新手，都是很方便的選擇。 
          </p>
          </div>

          <div data-aos="fade-right" data-aos-offset="140" data-aos-easing="ease-in-sine" data-aos-duration="600">
            <h5 class = "HomeAboutCaption">貼心的材料包設計</h5>
            <p class = "HomeAboutParagraph">
              會員不需自行採買及備料，材料包已把適當份量的食材清洗、切好，減少會員備餐時間。
              有別於他牌市售料理包，會員可以依據自己的口味喜好或需求，調整料理方式。
              自由調配不用擔心會不喜歡，還有親自下廚的體驗感，自己煮的料理也能獲得一份安心。 
            </p>
          </div>
          
          
        </div>
        <div class = "col-12">
          <h2 class = "HomeAboutFooter pe-4">關於我們 About Us</h2>
        </div>
      </div>

      
      <div class = "col-12 HomePopularItemBg">
        <div class = "row align-items-center pt-4 pb-3 px-4">
          <div class="col-6 col-lg-3" data-aos="flip-right" data-aos-offset="150" data-aos-easing="ease-in-sine" data-aos-duration="600">
            <a class = "nav-link" href="/top1" @click="goAboutUs">
              <img :src="top1" class="img-fluid d-block HomePopularitemBox mx-auto" alt="熱銷Top1">
            </a>
            <p class="HomePopularitemCaption">熱銷Top1</p>
          </div>
          <div class="col-6 col-lg-3" data-aos="flip-right" data-aos-offset="150" data-aos-easing="ease-in-sine" data-aos-duration="600">
            <a class = "nav-link" href="/top2" @click="goAboutUs">
              <img :src="top2" class="img-fluid d-block HomePopularitemBox mx-auto" alt="熱銷Top2">
            </a>
            <p class="HomePopularitemCaption">熱銷Top2</p>
          </div>
          <div class="col-6 col-lg-3" data-aos="flip-right" data-aos-offset="150" data-aos-easing="ease-in-sine" data-aos-duration="600">
            <a class = "nav-link" href="/top3" @click="goAboutUs">
              <img :src="top3" class="img-fluid d-block HomePopularitemBox mx-auto" alt="熱銷Top3">
            </a>
            <p class="HomePopularitemCaption">熱銷Top3</p>
          </div>
          <div class="col-6 col-lg-3" data-aos="flip-right" data-aos-offset="150" data-aos-easing="ease-in-sine" data-aos-duration="600">
            <a class = "nav-link" href="/top4" @click="goAboutUs">
              <img :src="top4" class="img-fluid d-block HomePopularitemBox mx-auto" alt="熱銷Top4">
            </a>
            <p class="HomePopularitemCaption">熱銷Top4</p>
          </div>
        </div>

        <div class = "col-12">
          <h2 class = "HomeAboutFooter pe-4">熱賣品項 Best Selling</h2>
        </div>
      </div>

      <div class = "col-12 HomeStepBg pt-2">
          <h1 class= "HomeStepTitle">CLICK To COOK</h1>
          <div class = "row row-cols-1 justify-content-center align-items-center py-3 px-2">
          <div class = "col-8 col-md-5 col-lg mx-2 mb-4" data-aos="fade-up" data-aos-offset="550" data-aos-easing="ease-in-sine" data-aos-duration="400">
            <img :src= "recipe" class="img-fluid d-block HomeStepImg mx-auto" alt="recipe">
            <h3 class = "HomeStepCaption">瀏覽食譜</h3>
          </div>
          <div class = "col-7 col-md-5 col-lg mx-2 mb-4" data-aos="fade-up" data-aos-offset="550" data-aos-easing="ease-in-sine" data-aos-duration="400" data-aos-delay="400">
            <img :src= "cart" class="img-fluid d-block HomeStepImg mx-auto" alt="cart">
            <h3 class = "HomeStepCaption">放入購物車</h3>
          </div>
          <div class = "col-7 col-md-5 col-lg mx-2 mb-4" data-aos="fade-up" data-aos-offset="550" data-aos-easing="ease-in-sine" data-aos-duration="400" data-aos-delay="600">
            <img :src= "card" class="img-fluid d-block HomeStepImg mx-auto" alt="card">
            <h3 class = "HomeStepCaption">下單付款</h3>
          </div>
          <div class = "col-8 col-md-5 col-lg mx-2 mb-4" data-aos="fade-up" data-aos-offset="550" data-aos-easing="ease-in-sine" data-aos-duration="400" data-aos-delay="800">
            <img :src= "box" class="img-fluid d-block HomeStepImg mx-auto" alt="box">
            <h3 class = "HomeStepCaption">等待收貨</h3>
          </div>
          <div class = "col-8 col-md-5 col-lg mx-2 mb-4" data-aos="fade-up" data-aos-offset="550" data-aos-easing="ease-in-sine" data-aos-duration="400" data-aos-delay="1000">
            <img :src= "cook" class="img-fluid d-block HomeStepImg mx-auto" alt="cook">
            <h3 class = "HomeStepCaption">料理上菜</h3>
          </div>
          </div>
      </div>
    </div>

    <div class = "col-12">
      <Footer/>
    </div>
  </div>
</template>

<script>
import Nav from "./components/navigator.vue";
import Footer from "./components/footer.vue";
export default {
  components: {
      Nav,
      Footer
  },

  data () {
    return {
      show:true,
      top1: require('./assets/images/1.jpg'),
      top2: require('./assets/images/19.jpg'),
      top3: require('./assets/images/26.jpg'),
      top4: require('./assets/images/91.jpg'),
      recipe: require('./assets/recipeimg.png'),
      cart: require('./assets/cartimg.png'),
      card: require('./assets/creditcardimg.png'),
      box: require('./assets/boximg.png'),
      cook: require('./assets/cookingimg.png'),   
    }
  },

  methods: {
    goAboutUs(){
      this.$router.push('/aboutUs');
    },
    goStore(){
      this.$router.push('/store');
    }
  }
}
</script>

<style>

.HomeVideoOverlay {
    position:absolute;
    margin-top: 50%;
    z-index:1;
}

.HomeVideoTitleBox{
  margin-top:15%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.HomeVideoTitle{
  font-size:6vmax;
  font-weight: 900;
  letter-spacing: 5px;
  color: rgba(255, 255, 255, 0.87);
  text-shadow: 0.1em 0.1em 0.2em rgb(98, 95, 90);
}

.HomeStoreBtnBox{
  padding-top:6%;
  height: 7vmin;
  display: flex;
  justify-content: center;
  align-items: center;
}

.HomeStoreBtn{
  border-radius: 10px;
  font-size: 1.1rem;
  font-weight: 500;
  background-color:rgba(102, 51, 153, 0);
  border: none;
  background-color: #e6dec2;
  color:rgb(29, 28, 28);
  padding:4px;
  padding-left: 3%;
  padding-right: 3%;
  letter-spacing: 2px;
}

.HomeStoreBtn:hover{
  background-color: #6e5237d7;
  color:white;
}

#HomeVideo {
  object-fit:fill;
  width:100%;
  height: 50vw;
  filter: saturate(1.3) brightness(0.95);
}

.HomeAboutBg{
  background-color:#a39875;
}

.HomeAboutTitle{
  font-size:3rem;
  letter-spacing: 2px;
  padding:0;
  font-weight: 600;
  color:rgb(255, 255, 255);
  text-shadow: 0.1em 0.1em 0.3em rgb(5, 5, 5);
}

.HomeAboutParagraph{
  font-size:0.9rem;
  margin-bottom: 50px;
  padding-top:5px;
  color:rgb(62, 53, 33);
  font-family:'Noto Serif TC';
}

.HomeAboutCaption{
  font-size:1.5rem;
  font-weight: 600;
  color:rgb(78, 21, 9);
}

.HomeAboutFooter{
  font-size:1.3rem;
  font-style: italic;
  font-weight: 600;
  color:rgb(84, 48, 16);
  font-family:'Times New Roman', 'Noto Serif TC';
  text-align: right;
}

.HomePopularItemBg{
  background-color:#ebe6d7;
}

.HomePopularitemBox{
  filter: brightness(100%);
  box-shadow: 8px 8px 7px rgba(0, 0, 0, 0.514);
  width:250px;
}

.HomePopularitemBox:hover{
  filter: brightness(75%);
  -webkit-transition: all 1s ease;
  -moz-transition: all 1s ease;
  -o-transition: all 1s ease;
  -ms-transition: all 1s ease;
  transition: all 1s ease;
}

.HomePopularitemCaption{
  font-size: 2vmax;
  font-weight:bold;
  letter-spacing: 3px;
  color: rgba(44, 40, 40, 0.87);
  text-shadow: 0.1em 0.1em 0.2em rgb(151, 141, 126);
  text-align:center;
}

.HomeStepBg{
  background-color:#a39875;
}

.HomeStepTitle{
  font-size:2rem;
  text-align: center;
  color:rgb(75, 50, 14);
  padding-top:2px;
}

.HomeStepImg{
  width:200px;
}

.HomeStepCaption{
  font-size:120%;
  text-align: center;
  font-weight: 500;
  color:rgb(75, 50, 14);
  padding-top:10px;
}

.appear-enter,
.appear-leave-to {
  opacity: 0;
}

.appear-enter-active,
.appear-leave-active {
  transition: all 4s;
}

.appear-enter-to,
.appear-leave {
  opacity: 1;
}

.before-enter{
  opacity:0;
  transform: translateX(100px);
  transition: all 2s ease-out;
}

.enter{
  opacity:1;
  transform: translateX(0px);
}
</style>