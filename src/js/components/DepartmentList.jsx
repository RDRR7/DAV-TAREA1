import React from 'react';

class Department extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
      description: props.description,
      image: props.image
    };
  }

  render() {
    return (
      <div>
        <h2>{this.props.name}</h2>
      </div>
    );
  }
}

export default Department;
