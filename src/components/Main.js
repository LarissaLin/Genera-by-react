require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';

/*拿到图片信息*/
var imageDatas=require('../data/imageData.json');
/*利用自执行将图片的文件名转换成真实有效的图片路径*/
imageDatas=(function imageJson (imageArr) {
  for (var i=0;i<imageArr.length;i++){
    var singleImg=imageArr[i];
    singleImg.imageURL = require('../images/' + singleImg.fileName);

    imageArr[i] = singleImg;//再将已经添加了新属性的每个元素赋值回原数组的每个对象中
  }
  return imageArr;//返回已经拥有新属性的数组
})(imageDatas);//此处写的imageDatas相当于inageJson函数的参数.


var AppComponent = React.createClass({
  render:function () {
    return(
      <section className="stage">
        <section className="img-sec">

        </section>
        <nav className="controller-nav">

        </nav>
      </section>
    )
  }
})

/*class AppComponent extends React.Component {
  render() {
    return (
      <section></section>
    );
  }
}*/

AppComponent.defaultProps = {
};

export default AppComponent;
