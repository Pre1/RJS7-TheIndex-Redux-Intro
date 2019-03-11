import React, { Component } from "react";

// import * as actionsCreator from "./store/actions"
import { addAuthor } from "./store/actions";
import { connect } from "react-redux";

class Sidebar extends Component {
  newAuthor = () => {
    return {
      id: 5,
      first_name: "Author",
      last_name: "McAuthorFace",
      imageUrl:
        "https://www.netz.de/images/2016-11-21-firefox-focus-header-58cfedd908c25_500_300.jpg",
      books: [
        {
          title: "Anonymous book",
          color: "mysterious color"
        }
      ]
    };
  };

  render() {
    return (
      <div id="sidebar">
        <img src="theindex.svg" className="logo" alt="the index logo" />
        <section>
          <h4 className="menu-item active">
            <button>AUTHORS</button>
          </h4>
          <h4 className="menu-item">
            <button onClick={() => this.props.onAddAuthor(this.newAuthor())}>
              + ADD AUTHOR
            </button>
          </h4>
        </section>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAddAuthor: auth => dispatch(addAuthor(auth))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Sidebar);
