import React from "react";

export default class Form extends React.Component {
  constructor() {
    super();

    this.cardRef = React.createRef();
    this.nameRef = React.createRef()
  }

  handleClick = (e) => {
    e.preventDefault();
    if (this.cardRef.current.value.length < 16) {
      alert("Invalid card number")
      return
    }
  }

  componentDidMount() {
    this.cardRef.current.focus()
  }

  invalidCardName = () => {
    if (this.cardRef.current.value.length < 16) {
      alert("Invalid card number")
      return
    }
  }
  
  focusName = () =>{
    if(this.cardRef.current.value.length === 16){
      this.nameRef.current.focus()      
    }
  }

  render() {
    return (
      <div>
        <h1>Form</h1>
        <form onSubmit={this.handleClick}>
          <input type="text" id="card" name="card" placeholder="VISA CARD" ref={this.cardRef} onChange={this.focusName} />
          <input type="text" id="name" name="name" placeholder="name" ref={this.nameRef} />
          <button>Send</button>
        </form>
      </div>
    )
  }
}