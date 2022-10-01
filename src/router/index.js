import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../Home.vue'
import Store from '../views/Store.vue'
import Info from '../views/ItemInfo.vue'
import Order from '../views/Order.vue'
import Cart from '../views/Cart.vue'
import EditMember from '../views/EditMember.vue'
import EditMemberBuyer from '../views/EditMemberBuyer.vue'
import EditPassword from '../views/EditPassword.vue'
import EditPasswordBuyer from '../views/EditPasswordBuyer.vue'
import EditRecipe from '../views/EditRecipe.vue'
import EditRecipeItem from '../views/EditRecipeItem.vue'
import WriteRecipe from '../views/WriteRecipe.vue'
import CollectRecipe from '../views/CollectRecipe.vue'
import Orders from '../views/MyOrders.vue'

Vue.use(VueRouter)
Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/store',
    name: 'Store',
    component: Store
  },
  {
    path: '/info',
    name: 'Info',
    component: Info,
  },
  {
    path: '/myorder',
    name: 'Order',
    component: Order
  },
  {
    path: '/mycart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/editmember',
    name: 'EditMember',
    component: EditMember
  },
  {
    path: '/editmemberbuyer',
    name: 'EditMemberBuyer',
    component: EditMemberBuyer
  },
  {
    path: '/editpassword',
    name: 'EditPassword',
    component: EditPassword
  },
  {
    path: '/editpasswordbuyer',
    name: 'EditPasswordBuyer',
    component: EditPasswordBuyer
  },
  {
    path: '/editrecipe',
    name: 'EditRecipe',
    component: EditRecipe
  },
  {
    path: '/editrecipeitem',
    name: 'EditRecipeItem',
    component: EditRecipeItem
  },
  {
    path: '/writerecipe',
    name: 'WriteRecipe',
    component: WriteRecipe
  },
  {
    path: '/collectrecipe',
    name: 'CollectRecipe',
    component: CollectRecipe
  },
  {
    path: '/myorders',
    name: 'Orders',
    component: Orders
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
