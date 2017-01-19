/**
 * Created by huijuan.lin on 2017/1/19.
 */
require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

/*获取图片相关数据*/
var imageDatas = require('../data/imageData.json');

/*另一种写法*/
/*imageDatas = (function (imageDatasArr) {
 return imageDatasArr.map(function (item) {
 var imageURL = require('../images/' + item.fileNames);
 return Object.assign(item,{'imageURL':imageURL});
 })
 })(imageDatas);*/


/*利用自执行函数,将图片名信息转成图片URL路径信息*/
imageDatas = (function genImageURL(imageDatasArr) {
  for (var i = 0; i < imageDatasArr.length; i++) {
    var singleImageData = imageDatasArr[i];//拿到数组里的每一个成员
    singleImageData.imageURL = require('../images/' + singleImageData.fileNames);//自定义imageURL属性用来存放拿到后的图片路径
    imageDatasArr[i] = singleImageData;//再将已经有了新属性imageURL的图片对象返回给imageDatasArr数组
  }
  return imageDatasArr;//最后返回数组
})(imageDatas);
//直接执行了genImageURL函数,且把图片数组imageDatas作为参数传入函数.


class AppComponent extends React.Component {
  render() {
    return (
      <section className="stage">
        <section className="img-sec">

        </section>
        <nav className="controller-nav">

        </nav>
      </section>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
