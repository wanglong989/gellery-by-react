require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

//let yeomanImage = require('../images/yeoman.png');
/**
 * 获取图片相关的数据 利图片名转换成 URL 路径信息
 *
 */

let picData = require('../data/pic.json');
let imageDatas = (function genImagesURL(imagePicDataArr){

  for(var i = 0;i < imagePicDataArr.length;i++){

    var singleImageData = imagePicDataArr[i];

    singleImageData.imageURL = require('../images/'+singleImageData.fileName);
    singleImageData.key = i+1;
    imagePicDataArr[i] = singleImageData;

  }
  return imagePicDataArr;

})(picData);


var ImgFigure = React.createClass({
  render: function () {
    return (
        <figure className="img-figure">

          <img src={this.props.imageURL}  alt={this.props.title}/>
          <figcaption>
            <h2>{this.props.desc}</h2>
          </figcaption>
        </figure>
    );
  }
});


class AppComponent extends React.Component {

  render() {

    var controllerUnits = [],
        imgFigure = [],
        activeIndex = 0;
    imageDatas.forEach(function(value,i){
      var activeFlag = '';
      if(activeIndex == 0){
        activeFlag = 'active';
      }
      imgFigure.push(<ImgFigure key={value.key} title={value.title} desc={value.desc} imageURL={value.imageURL} />);
    });

    return (

      <div className="index">

        <section className="stage">
          <section className="img-sec">
            {imgFigure}
          </section>
          <nav className="controller-nav">
            {controllerUnits}
          </nav>
        </section>

      </div>
    );
  }

}

AppComponent.defaultProps = {

};

export default AppComponent;
