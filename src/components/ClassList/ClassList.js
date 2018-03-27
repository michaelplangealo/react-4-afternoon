import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
export default class ClassList extends Component {
  constructor() {
    super();

    this.state = {
      students: []
    };
  }

  componentDidMount() {
    axios
      .get(
        `http://localhost:3005/students?class=${this.props.match.params.class}`
      ) /* params.class is literally :class from "routes" console.log(this.props.match to see what's up) */
      .then(results => {
        this.setState({
          students: results.data
        });
      });
  }

  /* mapping over the students array, which consist of students:data. to this new array, give each element(student) a unique key index, as well as access the value of first_name and last_name of each element(student). return it all in a </h3> tag. */
  render() {
    const students = this.state.students.map((student, i) => (
      <Link to={`/student/${student.id}`} key={i}>
        <h3 key={i}>
          {student.first_name}
          {student.last_name}
        </h3>
      </Link>
    ));
    return (
      <div className="box">
        <h1>{this.props.match.params.class} </h1>
        <h2>ClassList:</h2>
        {students}
      </div>
    );
  }
}
