import React, { Component } from "react";

export default class AllCodes extends Component {
  constructor(props) {
    super(props);
    // this.handlePostChange = this.handlePostChange.bind(this);
  }

  //   handlePostChange(races) {
  //     this.props.handlePostChange(races);
  //   }

  fetchList = () => {
    fetch("https://api.neds.com.au/rest/v1/racing/?method=nextraces&count=10")
      .then((response) => response.json())
      .then((r) => console.log(r.data.race_summaries))
      .then((json) => {
        // this.handlePostChange(json);
      });
  };

  componentDidMount() {
    this.fetchList();
  }

  render() {
    return <ul></ul>;
  }
}
