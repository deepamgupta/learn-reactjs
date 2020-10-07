import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 1,
    imageUrl: "https://picsum.photos/200",
    tags: [],
  };

  styles = {
    fontSize: 10,
    fontWeight: "bold",
  };

  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags!</p>;

    return this.state.tags.map((tag) => <li key={tag}>{tag}</li>);
  }

  render() {
    return (
      <React.Fragment>
        {/* <span className={this.getBadgeClasses()}>{this.formatCounter()}</span>
        <button style={this.styles} className="btn btn-secondary btn-sm">
          Increment
        </button> */}
        <div>
          {this.state.tags.length === 0 && "Please add another tag!"}
          {this.renderTags()}
        </div>
      </React.Fragment>
    );
    // this is not a string, it's a JSX expression which
    // is compiled to calls to react which create react
    // elements (React.createElement), that's why we have,
    // to import React object on the top though we don't
    // directly use it.
  }
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCounter() {
    const { count } = this.state; // object destructuring
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
