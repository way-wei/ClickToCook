import axios from "axios";

const userAxios = axios.create({
    baseURL: "http://127.0.0.1:8000/api",
});

const apiUrl = "http://127.0.0.1:8000/api";

//member
export function memberLogin(contents) {
  const api = `${apiUrl}/member/memberlogin`;
  const content = {
    account: contents.account,
    password: contents.password
  };
  return userAxios.post(api, content).then((res) => {
    return res;
  });
}

export function getMemberName(contents) {
  const api = `${apiUrl}/member/membername`;
  const content = {
    id: contents.id,
  };
  return userAxios.post(api, content).then((res) => {
    return res;
  });
}

export function addMember(contents) {
  const api = `${apiUrl}/member/addmember`;
  const content = {
    name: contents.name,
    gender: contents.gender,
    birth: contents.birth,
    phone: contents.phone,
    nickname: contents.nickname,
    mail: contents.mail,
    password: contents.password,
  };
  return userAxios.post(api, content).then((res) => {
    return res;
  });
}

export function getRecipeAuthor(contents) {
  const api = `${apiUrl}/member/recipeauthor`;
  const content = {
    id: contents.id
  };
  return userAxios.post(api, content).then((res) => {
    return res;
  });
}
//顯示會員資料
export function getAllMembers(contents) {    
  const api = `${apiUrl}/member/getAllMembers`;
    const content = {
      mId:contents.mId,
    };
    return userAxios.post(api, content).then((res) => {
      return res;
    });      
}
//顯示會員最新資料
export function getMemberNewInfo(contents) {    
  const api = `${apiUrl}/member/getMemberNewInfo`;
    const content = {
      mId:contents.mId,
    };
    return userAxios.post(api, content).then((res) => {
      return res;
    });      
}
//修改會員密碼
export function updatePassword(contents) {    
  const api = `${apiUrl}/member/updatePassword`;
    const content = {
      mId:contents.mId,
      password:contents.password
    };
    return userAxios.post(api, content).then((res) => {
      return res;
    });      
}
//修改會員資料
export function updateMember(contents) {    
  const api = `${apiUrl}/member/updateMember`;
    const content = {
      mId:contents.mId,
      mName: contents.mName,
      gender: contents.gender,
      birth: contents.birth,
      phone:contents.phone,
      nickname:contents.nickname,
      mail:contents.mail,
      password:contents.password,
    };
    return userAxios.post(api, content).then((res) => {
      return res;
    });      
}


//recipe
//顯示食譜最大rId
export function getrId() {
  return userAxios.get(`${apiUrl}/getrId`);
}
export function getAllRecipes(contents) {
  const api = `${apiUrl}/recipes`;
    const content = {
      id: contents.id
    };
    return userAxios.get(api, content).then((res) => {
      return res;
    });
}

export function getRecipeInfo(contents) {
    const api = `${apiUrl}/recipe/recipeinfo`;
    const content = {
      id: contents.id
    };
    return userAxios.post(api, content).then((res) => {
      return res;
    });
}

export function searchRecipe(contents) {
  const api = `${apiUrl}/recipe/searchrecipes`;
  const content = {
    category: contents.category,
    time: contents.time,
    serving: contents.serving
  };
  return userAxios.post(api, content).then((res) => {
    return res;
  });
}

//顯示會員食譜
export function getMemberRecipes(contents) {  
  const api = `${apiUrl}/recipe/getMemberRecipes`;
    const content = {
      mId:contents.mId,
    };
    return userAxios.post(api, content).then((res) => {
      return res;
    });     
}
//顯示會員指定食譜
export function getMemberARecipe(contents) {  
  const api = `${apiUrl}/recipe/getMemberARecipe`;
    const content = {
      rId:contents.rId,
    };
    return userAxios.post(api, content).then((res) => {
      return res;
    });     
}
//新增食譜
export function insertRecipe(contents) {
    const api = `${apiUrl}/recipe/insertRecipe`;
    const content = {
      rId:contents.rId,
      rName: contents.rName,
      intro: contents.intro,
      cover: contents.cover,
      serving: contents.serving,
      rTime: contents.rTime,
      mId: contents.mId,
      cId: contents.cId,
      OriginalPrice: contents.OriginalPrice,
    };
    return userAxios.post(api, content).then((res) => {
      return res;
    });
}
//修改食譜
export function updateRecipe(contents) {
  const api = `${apiUrl}/recipe/updateRecipe`;
  const content = {
    rId: contents.rId,
    rName: contents.rName,
    intro: contents.intro,
    serving: contents.serving,
    rTime: contents.rTime,
    cId: contents.cId,
    OriginalPrice:contents.OriginalPrice,
  };
  return userAxios.post(api, content).then((res) => {
    return res;
  });
}
//刪除食譜
export function deleteRecipe(contents) {
  const api = `${apiUrl}/recipe/deleteRecipe`;
  const content = {
    rId: contents.rId,
  };
  return userAxios.post(api, content).then((res) => {
    return res;
  });
}

//ingredient
export function getItemIngre(contents) {
  const api = `${apiUrl}/ingredient/recipeingre`;
  const content = {
    id: contents.id
  };
  return userAxios.post(api, content).then((res) => {
    return res;
  });
}
//顯示指定食譜的食材
export function getAllIngredients(contents) {
  const api = `${apiUrl}/ingredient/getAllIngredients`;
  const content = {
    rId: contents.rId
  };
  return userAxios.post(api, content).then((res) => {
    return res;
  });
}
//新增指定食譜的食材
export function insertIngredient(contents) {
  const api = `${apiUrl}/ingredient/insertIngredient`;
  const content = {
    rId: contents.rId,
    ingredient: contents.ingredient,
    amount: contents.amount,
  };
  return userAxios.post(api, content).then((res) => {
    return res;
  });
}
//更新指定食譜的食材
export function updateIngredient(contents) {
  const api = `${apiUrl}/ingredient/updateIngredient`;
  const content = {
    rId: contents.rId,
    ingreId: contents.ingreId,
    ingredient: contents.ingredient,
    amount: contents.amount,
  };
  return userAxios.post(api, content).then((res) => {
    return res;
  });
}

//package
export function getPackagePrice(contents) {
  const api = `${apiUrl}/package/recipeprice`;
  const content = {
    id: contents.id
  };
  return userAxios.post(api, content).then((res) => {
    return res;
  });
}

export function getPackageInfo(contents) {
  const api = `${apiUrl}/package/getpackageinfo`;
  const content = {
    pId: contents.pId
  };
  return userAxios.post(api, content).then((res) => {
    return res;
  });
}

export function countPackagePrice(contents) {
  const api = `${apiUrl}/package/countprice`;
  const content = {
    cId: contents.cId,
    rId: contents.rId,
    price: contents.price
  };
  return userAxios.post(api, content).then((res) => {
    return res;
  });
}


//step
export function getItemStep(contents) {
  const api = `${apiUrl}/step/recipestep`;
  const content = {
    id: contents.id
  };
  return userAxios.post(api, content).then((res) => {
    return res;
  });
}
//顯示食譜步驟
export function getAllStep(contents) {
  const api = `${apiUrl}/step/getAllStep`;
  const content = {
    rId: contents.rId
  };
  return userAxios.post(api, content).then((res) => {
    return res;
  });
}
//新增食譜步驟
export function insertStep(contents) {
  const api = `${apiUrl}/step/insertStep`;
  const content = {
    rId: contents.rId,
    step: contents.step,
    steppic: contents.steppic,
  };
  return userAxios.post(api, content).then((res) => {
    return res;
  });
}
//修改食譜步驟
export function updateStep(contents) {
  const api = `${apiUrl}/step/updateStep`;
  const content = {
    stepId: contents.stepId,
    step: contents.step,
  };
  return userAxios.post(api, content).then((res) => {
    return res;
  });
}


//category
export function getCategoryId(contents) {
  const api = `${apiUrl}/category/id`;
  const content = {
    category: contents.category,
  };
  return userAxios.post(api, content).then((res) => {
    return res;
  });
}

//collect
export function addCollect(contents) {
  const api = `${apiUrl}/collect/addcollect`;
  const content = {
    mId: contents.mId,
    rId: contents.rId
  };
  return userAxios.post(api, content).then((res) => {
    return res;
  });
}
//顯示會員收藏
export function getAllCollects(contents) {
  const api = `${apiUrl}/collect/getAllCollects`;
  const content = {
    mId: contents.mId,
  };
  return userAxios.post(api, content).then((res) => {
    return res;
  });
}
//顯示會員指定收藏
export function getACollect(contents) {
  const api = `${apiUrl}/collect/getACollect`;
  const content = {
    rId: contents.rId,
  };
  return userAxios.post(api, content).then((res) => {
    return res;
  });
}
//刪除會員指定收藏
export function deleteCollect(contents) {
  const api = `${apiUrl}/collect/deleteCollect`;
  const content = {
    rId: contents.rId,
    mId: contents.mId
  };
  return userAxios.post(api, content).then((res) => {
    return res;
  });
}

//cart

//讀取會員購物車編號
export function getCartId(contents) {
  const api = `${apiUrl}/cart/getCartId`;
  const content = {
    mId: contents.mId
  };
  return userAxios.post(api, content).then((res) => {
    return res;
  });
}

//新增購物車
export function addCart(contents) {
  const api = `${apiUrl}/cart/addCart`;
  const content = {
    mId: contents.mId
  };
  return userAxios.post(api, content).then((res) => {
    return res;
  });
}

//orders

//顯示會員購物車商品
export function getOrdersItem(contents) {
  const api = `${apiUrl}/orders/getOrdersItem`;
  const content = {
    cartId: contents.cartId
  };
  return userAxios.post(api, content).then((res) => {
    return res;
  });
}

//加入購物車商品
export function addOrder(contents) {
  const api = `${apiUrl}/orders/addorder`;
  const content = {
    cartId: contents.cartId,
    pId: contents.pId,
    quantity: contents.quantity
  };
  return userAxios.post(api, content).then((res) => {
    return res;
  });
}

export function deleteOrder(contents) {
  const api = `${apiUrl}/orders/deleteorder`;
  const content = {
    cartId: contents.cartId,
    pId: contents.pId
  };
  return userAxios.post(api, content).then((res) => {
    return res;
  });
}

//刪除購物車商品
export function deleteOrdersItem(contents) {
  const api = `${apiUrl}/orders/deleteOrdersItem`;
  const content = {
    cartId: contents.cartId,
    orderId: contents.orderId
  };
  return userAxios.post(api, content).then((res) => {
    return res;
  });
}

//更新購物車商品
export function updateOrdersItemF(contents) {
  const api = `${apiUrl}/orders/updateOrdersItemF`;
  const content = {
    cartId: contents.cartId,
    orderId: contents.orderId
  };
  return userAxios.post(api, content).then((res) => {
    return res;
  });
}

export function updateOrdersItemT(contents) {
  const api = `${apiUrl}/orders/updateOrdersItemT`;
  const content = {
    cartId: contents.cartId,
    orderId: contents.orderId
  };
  return userAxios.post(api, content).then((res) => {
    return res;
  });
}

export function updateOrderPlus(contents) {
  const api = `${apiUrl}/orders/updateOrderPlus`;
  const content = {
    cartId: contents.cartId,
    pId: contents.pId
  };
  return userAxios.post(api, content).then((res) => {
    return res;
  });
}

export function updateOrderMinus(contents) {
  const api = `${apiUrl}/orders/updateOrderMinus`;
  const content = {
    cartId: contents.cartId,
    pId: contents.pId
  };
  return userAxios.post(api, content).then((res) => {
    return res;
  });
}

export function getCheckedOrder(contents) {
  const api = `${apiUrl}/orders/getCheckedOrder`;
  const content = {
    cartId: contents.cartId
  };
  return userAxios.post(api, content).then((res) => {
    return res;
  });
}

//record
export function addRecord(contents) {
  const api = `${apiUrl}/record/addRecord`;
  const content = {     
    tId: contents.tId,
    pId: contents.pId,
    amount: contents.amount,
    sum: contents.sum
  };
  return userAxios.post(api, content).then((res) => {
    return res;
  });
}

export function getAllRecord(contents) {
  const api = `${apiUrl}/record/getAllRecord`;
  const content = {     
    tId: contents.tId,
  };
  return userAxios.post(api, content).then((res) => {
    return res;
  });
}

//transaction
//取的最大tId
export function getMaxId() {
  return userAxios.get(`${apiUrl}/transaction/getMaxId`);
}

//新增訂單
export function addTransaction(contents) {
  const api = `${apiUrl}/transaction/addTransaction`;
  const content = {
    tId: contents.tId,
    method: contents.method, 
    cardowner: contents.cardowner, 
    cardkind: contents.cardkind, 
    cardId: contents.cardId,
    valid: contents.valid, 
    pin: contents.pin,  
    address: contents.address,  
    total: contents.total, 
    fee: contents.fee,            
    mId: contents.mId, 
    cartId: contents.cartId,
  };
  return userAxios.post(api, content).then((res) => {
    return res;
  });
}

export function getAllTransaction(contents) {
  const api = `${apiUrl}/transaction/getAllTransaction`;
  const content = {
    mId: contents.mId,
  };
  return userAxios.post(api, content).then((res) => {
    return res;
  });
}

export function getOneTransaction(contents) {
  const api = `${apiUrl}/transaction/getOneTransaction`;
  const content = {
    tId: contents.tId,
  };
  return userAxios.post(api, content).then((res) => {
    return res;
  });
}

//sum_count
export function addItemSum(contents) {
  const api = `${apiUrl}/sumcount/addItemSum`;
  const content = {     
    orderIdsum: contents.orderIdsum, 
    cartId: contents.cartId,
    amount: contents.amount,
    price: contents.price,
  };
  return userAxios.post(api, content).then((res) => {
    return res;
  });
}

export function deleteItemSum(contents) {
  const api = `${apiUrl}/sumcount/deleteItemSum`;
  const content = {     
    orderIdsum: contents.orderIdsum, 
    cartId: contents.cartId
  };
  return userAxios.post(api, content).then((res) => {
    return res;
  });
}

export function deleteAllItemSum() {
  return userAxios.get(`${apiUrl}/sumcount/deleteAllItemSum`);
}

export function getOrderSum(contents) {
  const api = `${apiUrl}/sumcount/getOrderSum`;
  const content = {     
    cartId: contents.cartId
  };
  return userAxios.post(api, content).then((res) => {
    return res;
  });
}