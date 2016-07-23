
var React = require('react');
//var ReactCSSTransitionGroup = require('react-addons-css-transition-group');


//var ImageCarousel = React.createClass({
 // propTypes: {
   // imageSrc:" ../img/1.png"
 // },
  //render: function() {
   // return (
  //    <div>
   //     <ReactCSSTransitionGroup transitionName="carousel" transitionEnterTimeout={300} transitionLeaveTimeout={300}>
   //       <img src={this.props.imageSrc} key={this.props.imageSrc} />
  //      </ReactCSSTransitionGroup>
 //     </div>
 //   );
//  }
//});
var ImageTrasition = React.createClass({
  propTypes: {
    imageSrc:['../img/1.png','../img/1.png'],
    width:window.innerWidth
  },
  getInitialState: {
    flag = 0
  },
  handleClickLeft: function() {
    $("div#showing").animate({
      left:'-=this.props.width'
    },{
      speed:200,
      queue:false
    });
    $("div#come_right").animate({
      left:'-=this.props.width'
    },{
      speed:200,
      queue:false
    });
  },
  render: function() {
  <div id="carousel">
    <div id="come_left" img={imageSrc[flag-1]}></div>
    <div id="showing" img={imageSrc[flag]}></div>
    <div id="come_right" img={imageSrc[flag+1]}></div>
      <div id="leftButton" onClick={handleClickLeft}></div>
      <div id="rightButton"></div>
  </div>
  }
})