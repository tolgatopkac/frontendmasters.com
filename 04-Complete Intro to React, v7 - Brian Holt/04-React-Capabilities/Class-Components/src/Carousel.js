import { Component } from "react";

class Carousel extends Component {
  state = {
    active: 0,
  };

  static defaultProps = {
    images: ["http://pets-images.dev-apis.com/pets/none.jpg"],
  };
}

console.log(Carousel.defaultProps);

const x = new Carousel();

x.state.active;

export default Carousel;
