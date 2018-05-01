import React from "react"
import "./body.css"

class Body extends React.Component {
render() {
return (
  <div className="main-container">

    {this.props.children}
  </div>

)}
}

export default Body
