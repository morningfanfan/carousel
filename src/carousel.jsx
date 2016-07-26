
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
  propTypes: {
    carouselImg:[
      {
        id:0,
        imgSrc:"#",
        imgGoal:"#"
      },{
        id:1,
        imgSrc:"#",
        imgGoal:"#"
      },{
        id:2,
        imgSrc:"#",
        imgGoal:"#"
      }
    ]
  },
  getInitialState: {
    carousel_row = 0,
    n = this.props.carouselImg.length,//$.ajax....
   // ct_left:null,
    transitionStartLeft = false,
    transitionStartRight = false
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

  // setState(
    // {carousel_row:this.state.carousel_row + 1}
  // )
   setState(
     {//ct_left:carousel_transition,
      // carousel_row:this.state.carousel_row+1,
       transitionStartRight = true
     }
   )
  },
   handleClickRight: function() {
   setState(
     {
       carousel_row:this.state.carousel_row-1,
       transitionStartLeft = true 
     }
   )
  },  
     change:function(){
       if(this.state.transitionStartLeft){
              setState({
              carousel_row:this.state.carousel_row-1,
              transitionStartLeft:false
               })
       }
       if(this.state.transitionStartRight){
              setState({
              carousel_row:this.state.carousel_row+1,
              transitionStartRight:false
               })
       }
   },
  render: function() {
      var showing = <OnDisplay row={this.state.carousel_row % this.state.n}/>;
      var showing_l = <OnDisplay row={this.state.carousel_row-1 % this.state.n}/>;
      var showing_r = <OnDisplay row={this.state.carousel_row+1 % this.state.n}/>;
      document.getElementById("carousel_on").addEventListener('animationend',change);
    //  var classes = React.addons.classSet({
     //   'cl':this.state.cl,
     //   'cr':this.atate.cr,
    //    'co':this.state.co
    //  });
    var class_l = this.state.transitionStartLeft ? 'left_move_left' : 'left_stop';
    var class_l = this.state.transitionStartRight ? 'left_move_right' : 'left_stop';
    var class_o = this.state.transitionStartLeft ? 'on_move_left' : 'on_stop';
    var class_o = this.state.transitionStartRight ? 'on_move_right' : 'on_stop';
    var class_r = this.state.transitionStartLeft ? 'right_move_left' : 'right_stop';
    var class_r = this.state.transitionStartRight ? 'right_move_right' : 'right_stop';
  return(
    <div id="carousel">
      <div id="leftButton" onClick={handleClickLeft}></div>
      <div id="carousel_left" className={class_l}>{showing_l}</div>
      <div id="carousel_on" className={classes_o}>{showing}</div>
      <div id="carousel_right" className={classes_r}>{showing_r}</div>
      <div id="rightButton" onClick={handleClickRight}></div>
    </div>
  )
  }
})

var OnDisplay = React.createClass({
 propTypes: {
    imageSrc:['../img/1.png','../img/1.png','#']
  },
  render: function() {
    return(
      <a href="#"><img src={this.props.imageSrc[this.props.row]}></img></a>
    )
  }
})