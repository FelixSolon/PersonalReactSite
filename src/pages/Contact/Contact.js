import React, { Component } from 'react'

import Input from '../../components/Form/Input'
import Textarea from '../../components/Form/Textarea'
import Button from '../../components/Button'

export default class Contact extends Component {

  state = {
    'email': '',
    'name': '',
    'message': ''
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({[name]: value});
    console.log(this.state[name])
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log("Firing");
    console.log(this.state);
  }

  render() {
    return (
      <div>
        I'm a contact page!
        <Input placeholder="Enter your email" name="email" type="email" onChange={this.handleInputChange} />
        <Input placeholder="Enter your name" name="name" type="text" onChange={this.handleInputChange} />
        <Textarea placeholder="Enter your message" name="message" type="textarea" onChange={this.handleInputChange} />
        <Button onClick={this.handleSubmit}>Click me!</Button>
      </div>
    )
  }
}
