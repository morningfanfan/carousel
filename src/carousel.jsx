
var React = require('react');
var ReactDOM = require('react-dom');

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

  getInitialState: function() {
    return {
      carousel_row : 0,
      n : 5,//$.ajax....
   // ct_left:null,
      transitionStartLeft : false,
      transitionStartRight : false
  };
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
   this.setState(
     {//ct_left:carousel_transition,
      // carousel_row:this.state.carousel_row+1,
       transitionStartRight : true
     }
   )
  },
   handleClickRight: function() {
   this.setState(
     {
       //carousel_row:this.state.carousel_row-1,
       transitionStartLeft : true 
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
     mod:function(num,n){
       var tmp = num % n;
       if(tmp>=0)
       return tmp;
       else
       return n+tmp;
     },
  render: function() {
      var showing = <OnDisplay row={this.mod(this.state.carousel_row,this.state.n)}/>;
      var showing_l = <OnDisplay row={this.mod(this.state.carousel_row-1,this.state.n)}/>;
      var showing_r = <OnDisplay row={this.mod(this.state.carousel_row+1,this.state.n)}/>;
      
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
    var e = document.getElementById("carousel_on");
    if(e){addEventListener('animationend',change,false)};
  return(
    <div id="carousel">
      <div id="leftButton" onClick={this.handleClickLeft}></div>
      <div id="carousel_left" className={class_l}>{showing_l}</div>
      <div id="carousel_on" className={class_o}>{showing}</div>
      <div id="carousel_right" className={class_r}>{showing_r}</div>
      <div id="rightButton" onClick={this.handleClickRight}></div>
    </div>
  )
  }
})

var OnDisplay = React.createClass({
  render: function() {
    return(
      <a href="#"><img src={carouselImg[this.props.row].imgSrc}></img></a>
    )
  }
})
      var  carouselImg = [
      {
        id:0,
        imgSrc:"./img/IMAGE1.png",
        imgGoal:"#"
      },{
        id:1,
        imgSrc:"./img/IMAGE2.png",
        imgGoal:"#"
      },{
        id:2,
        imgSrc:"./img/IMAGE3.png",
        imgGoal:"#"
      },{
        id:3,
        imgSrc:"./img/IMAGE4.png",
        imgGoal:"#"
      },{
        id:4,
        imgSrc:"./img/IMAGE5.png",
        imgGoal:"#"
      }]
ReactDOM.render(<ImageTrasition/>, document.getElementById('whole_container'));