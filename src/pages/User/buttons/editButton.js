import React from "react";

class EditButton extends React.PureComponent {
  onEditClick = () => {
    this.props.onClick(this.props.item.uid);
  };
  render() {
    return (
      <button className="btn btn-default btn-fill" onClick={this.onEditClick}>
        <i className="fa fa-edit" />
      </button>
    );
  }
}

export default EditButton;
