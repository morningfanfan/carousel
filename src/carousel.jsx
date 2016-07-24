
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
//  propTypes: {
 //   imageSrc:['../img/1.png','../img/1.png'],
 //   width:window.innerWidth
 // },
  getInitialState: {
    carousel_row = 0,
    n = 2
  },
  handleClickLeft: function() {
//    $("div#showing").animate({
 //     left:'-=this.props.width'
  //  },{
 //     speed:200,
  //    queue:false
 //   });
 //   $("div#come_right").animate({
//     left:'-=this.props.width'
 //   },{
 //     speed:200,
 //     queue:false
 //   });
   setState(
     {carousel_row:carousel_row + 1}
   )
  },
   handleClickRight: function() {
   setState(
     {carousel_row:carousel_row - 1}
   )
  },
  render: function() {
      showing = <OnDisplay row={this.state.carousel_row % this.state.n}/>
  return(
    <div id="carousel">
      <div id="leftButton" onClick={handleClickLeft}></div>
      {showing}
      <div id="rightButton" onClick={handleClickRight}></div>
    </div>
  )
  }
})

var OnDisplay = React.createClass({
 propTypes: {
    imageSrc:['../img/1.png','../img/1.png']
  },
  render: function() {
    return(
      <a href="#"><img src={this.props.imageSrc[row]}></img></a>
    )
  }
})