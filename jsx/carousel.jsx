
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

var ImageCarousel = React.createClass({
  propTypes: {
    imageSrc:" ../img/1.png"
  },
  render: function() {
    return (
      <div>
        <ReactCSSTransitionGroup transitionName="carousel" transitionEnterTimeout={300} transitionLeaveTimeout={300}>
          <img src={this.props.imageSrc} key={this.props.imageSrc} />
        </ReactCSSTransitionGroup>
      </div>
    );
  }
});