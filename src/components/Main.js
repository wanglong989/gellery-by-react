require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

let yeomanImage = require('../images/yeoman.png');
/**
 * 获取图片相关的数据 利图片名转换成 URL 路径信息
 *
 */

let picData = require('../data/pic.json');
let imageDatas = (function genImagesURL(imagePicDataArr){
  for(var i = 0;i < imagePicDataArr.length;i++){
    var singleImageData = imagePicDataArr[i];

    singleImageData.imageURL = require('../images/'+singleImageData.fileName);

    imagePicDataArr[i] = singleImageData;
  }
  return imagePicDataArr;
})(picData);


class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">

        <section className="stage">
          <section className="img-sec">
            ww
          </section>
          <nav className="controller-nav">
            ww
          </nav>
        </section>

      </div>
    );
  }
}

AppComponent.defaultProps = {

};

export default AppComponent;
