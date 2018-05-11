import React from 'react';

class DepartmentInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
      description: props.description,
      imageURL: props.imageURL,
    };
  }

  render() {
    return (
      <div>
        <p>{this.props.description}</p>
        <img alt={this.props.name} src={this.props.imageURL} />
      </div>
    );
  }
}

export default DepartmentInfo;
