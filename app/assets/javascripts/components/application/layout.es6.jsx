class Layout extends React.Component {
  render() {
    return (
      <div>
        This is Layout component
        {React.cloneElement(this.props.children, this.props)}
      </div>
    );
  }
}

export default Layout;
