import React from 'react';
import DepartmentInfo from './DepartmentInfo';

class DepartmentList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
      description: props.description,
      image: props.image,
      infoVisible: false,
    };
  }

  render() {
    return (
      <div>
        <h2 onClick={() => this.onClick()}>{this.props.name}</h2>
        {this.state.infoVisible ? <DepartmentInfo {...this.props} /> : null}
      </div>
    );
  }

  onClick() {
    this.setState(prevState => ({ infoVisible: !prevState.infoVisible }));
  }
}

export default DepartmentList;
