import React, { Component } from 'react'

class Todoitem extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         
      }
    }
  render() {
    let {e,index,updateItem , deleteItem} = this.props
    return (
      <>
      <div>
        <input type="text" onChange={(e)=>{
            updateItem(e.target.value,index)
        }} value={e} />
        <button onClick={()=>{
            deleteItem(index)
        }}>Delete Item</button>
      </div>
      </>
    )
  }
}

export default Todoitem