// JavaScript Document
/* --------------------------------------
 * main.js
 * -------------------------------------- */

//Phone選單套件
var navlight_main = function navlight_main(){

  //定義區塊Class
  var $WRAPPER = $('.WRAPPER'); //最大包
  
  /* 
    * -------------------------------------------
    * Phone選單套件【NavArea_pagebar活動頁主要頁籤】
    * -------------------------------------------
    */
  //置頂
  $WRAPPER.find('.NavArea_tabbar').topSuction({
  });
  //展開
  $WRAPPER.find('.NavArea_tabbar').navbtn({
  });
  //高亮
  $WRAPPER.navLight({
    navarea: '.NavArea_tabbar',        //最大包Class。預設.NavArea
    lightCls: 'cate-hover',           //高亮Class。預設cate-hover
    content: '.js-navlight_Phone',		//選單對應內容區塊Class。預設.js-navlight_content
    top_i: 15,                        //錨點偏移
    //開關
    open_light: true,                 //啟動--高亮對應區塊。
    open_getname: true,               //啟動--自動擷取選單資料
  });

  /* 
    * -------------------------------------------
    * 排行榜單的選單 
    * -------------------------------------------
    */  
  //置頂
  $WRAPPER.find('.Area_floorPD_NavArea_tabbar').topSuction({
  });
  //展開
  $WRAPPER.find('.Area_floorPD_NavArea_tabbar').navbtn({
  });
  //高亮
  $WRAPPER.navLight({
    navarea: '.Area_floorPD_NavArea_tabbar',        //最大包Class。預設.NavArea
    lightCls: 'cate-hover',           //高亮Class。預設cate-hover
    content: '.js-navlight_Area_floorPD', //選單對應內容區塊Class。預設.js-navlight_content
    top_i: 15,                        //錨點偏移
    //開關
    open_light: true,                 //啟動--高亮對應區塊。
    open_getname: true,               //啟動--自動擷取選單資料
  });

  /*多選單互動啟動(勿動)*/
  fNavChange();

  };

};  



/* --------------------------------------
 * 頁面讀取完畢後執行
 * -------------------------------------- */
$(window).on('load',function(){
  navlight_main(); //Phone選單套件
});


