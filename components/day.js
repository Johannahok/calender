import React from "react"

class Day extends React.Component {

  render() {
    return (
      <div>
        <label className="checkbox-container">
          <input
            className="checkbox"
            checked={this.props.done}
            type="checkbox"
            onChange={this.props.clickEvent} />
          <span className="checkmark" />
        </label>
      </div>
    )
  }
}

export default Day
