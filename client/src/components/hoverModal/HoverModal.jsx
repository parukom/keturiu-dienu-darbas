import "./HoverModal.css";
import { React } from "react";

class HoverModal extends React.Component {
  state = {
    likeList: "",
  };
  renderLikeList = () => {
    return <div className="likes__list">Likes to be rendered specifically</div>;
  };
  handleLeave = () => {
    return this.setState({ likeList: "" });
  };
  handleHover = () => {
    return this.setState({ likeList: this.renderLikeList() });
  };
  render() {
    return (
      <div className="likes__wrapper">
        <div
          className="likes__relavance"
          onMouseOver={this.handleHover}
          onMouseLeave={this.handleLeave}
        >
          Hover me
          {this.state.likeList}
        </div>
      </div>
    );
  }
}
export default HoverModal;
