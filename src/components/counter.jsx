import React, { Component } from "react";

class Counter extends Component {
  // state = {
  //   value: this.props.counter.value,
  //   imageUrl: "https://picsum.photos/200",
  //   tags: [],
  // };

  // styles = {
  //   fontSize: 10,
  //   fontWeight: "bold",
  // };

  // handleIncrement = (product) => {
  //   // console.log("Increment Clicked", this.state.count);
  //   // console.log(product);
  //   this.setState({ value: this.state.value + 1 });
  // };

  // renderTags() {
  //   if (this.state.tags.length === 0) return <p>There are no tags!</p>;

  //   return this.state.tags.map((tag) => <li key={tag}>{tag}</li>);
  // }

  // constructor() {
  //   super();
  //   // console.log("Constructor", this);
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }

  componentDidUpdate(prevProps, prevState) {
    // this method is called everytime a component is updated.
    console.log("Counter -- Update");
    console.log("prevProps", prevProps);
    console.log("prevState", prevState);
    // if (prevProps.counter.value !== this.props.counter.value) {
    //   // Ajax call and get new data from the server
    // }
  }

  componentWillUnmount() {
    // This method is called just before a component is removed from the dom.
    // any clean-up code is written here.
    console.log("Counter -- Unmount");
  }

  render() {
    // console.log("props", this.props);
    console.log("Counter -- Render");

    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCounter()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)} // do not call like handleIncrement()
          // to pass arrow argument to an event handler:
          // 1. define the event-handler with arrow function.
          // 2. pass an arrow function in onClick(for example) which in turns returns the eventHandler function you want to call.

          style={this.styles}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
        {/* <div>
          {this.state.tags.length === 0 && "Please add another tag!"}
          {this.renderTags()}
        </div> */}
      </div>
    );
    // this is not a string, it's a JSX expression which
    // is compiled to calls to react which create react
    // elements (React.createElement), that's why we have,
    // to import React object on the top though we don't
    // directly use it.
  }
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCounter() {
    const { value } = this.props.counter; // object destructuring
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;

// Rule of thumb:
// The component that owns a piece of state should be the one modifying it.
