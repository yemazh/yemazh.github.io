var offWidth = window.screen.width;    // 获取设备宽度
  //  通常把设计稿按照1rem =100px设置，好换算，假设设计稿宽度为移动端的750px，换算如下：
document.getElementsByTagName("html")[0].style.fontSize = offWidth*(100/750)+ 'px'; 
// document.getElementsByTagName("body")[0].style.fontSize = offWidth*(100/750)+ 'px'; 