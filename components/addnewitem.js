import React from "react"
import "./addnewitem.css"

class AddNewItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      newItem: ""
    }
  }
  handleNewItem = event => {
    this.setState({
      newItem: event.target.value
    })
  }

  itemOnSubmit = event => {
    event.preventDefault()
  this.props.handleOnSubmit(this.state.newItem)
  }

  render() {

    return (
      <div className="hero">
        <img src={require(`../images/plant.jpg`)}/>
        <div className="hero-input">
          <h1>Save the environment!</h1>

        <form onSubmit={this.itemOnSubmit}>
          <label>
            <input
              className="new-item-input"
              placeholder="How do you want to save the environment today? 🐝 🌱 "
              type="text"
              onChange={this.handleNewItem}
              value={this.state.newItem} />
          </label>
          <button className="add-item-button">Add</button>
        </form>
        </div>
      </div>
    )
  }
}

export default AddNewItem
