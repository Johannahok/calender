import React from "react"
import Goal from "./goal"
import AddNewItem from "./addnewitem"
import Body from "./body"

class App extends React.Component {
  constructor(props) {
    super(props)
    const goalTasks = JSON.parse(localStorage.getItem("storeItem"))
    if (localStorage.getItem("storeItem")) { // Kollar om det finns något i localStorage, om det är sant det.
      this.state = goalTasks
    } else {
      this.state = {
        goals: [{
          id: Date.now(),
          text: "",
          days: [false, false, false, false, false, false, false]
        }]
      }
    }
  }

  itemToList = newText => {
    console.log(this.state.goals)
    const environmentItems = this.state.goals
    environmentItems.unshift({
      id: Date.now(),
      text: newText,
      days: [false, false, false, false, false, false, false]
    })
    this.setState({
      goals: environmentItems

    })
    localStorage.setItem("storeItem", JSON.stringify(this.state))
  }

  deleteGoal = index => {
    const deletingGoal = this.state.goals
    deletingGoal.splice(index, 1)
    this.setState({
      goals: deletingGoal
    })
    localStorage.setItem("storeItem", JSON.stringify(this.state))
  }

 dayClickHandler = (goalIndex, dayIndex) => {
   const newState = this.state
   newState.goals[goalIndex].days[dayIndex] = !newState.goals[goalIndex].days[dayIndex]
   this.setState(newState)
   localStorage.setItem("storeItem", JSON.stringify(this.state))
 }

 render() {
   return (
     <div>
       <Body>
         <AddNewItem
           handleOnSubmit={this.itemToList} />
         {this.state.goals.map((listGoal, index) => {
           return <Goal
             index={index}
             key={listGoal.id}
             text={listGoal.text}
             days={listGoal.days}
             handleRemoveGoal={this.deleteGoal}
             clickEvent={this.dayClickHandler} />
         })}
       </Body>
     </div>
   )
 }
}

export default App
