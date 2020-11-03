import React, { Component } from 'react'
import { Form, Button, Container } from 'react-bootstrap'
const axios = require('axios')

export default class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            password: '',
        };
        this.onChange = this.onChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    onChange = (e) => this.setState({ [e.target.name]: e.target.value });
    handleSubmit(event) {
        axios.post('http://localhost:8000/account/api/register',{
            username: this.state.email,
            password: this.state.password,
            first_name: this.state.first_name,
            last_name: this.state.last_name
        }).then(function (res){
            console.log(res)
            localStorage.setItem('token', res.data.access);
            localStorage.setItem('user', res.config.data);
        }).catch(function (err){
            console.log(err)
        })
        event.preventDefault();
    }
    render() {
        return (
            <Container style={{ marginTop: '150px' }}>
                <Form className="d-flex flex-column align-items-center">
                    <Form.Group controlId="formBasicFirstName" style={{ width: '300px' }}>
                        <Form.Label>First name</Form.Label>
                        <Form.Control type="text" placeholder="Enter First Name" name="first_name" value={this.state.first_name} onChange={this.onChange}/>
                    </Form.Group>
                    <Form.Group controlId="formBasicLastName" style={{ width: '300px' }}>
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Last Name" name="last_name" value={this.state.last_name} onChange={this.onChange}/>
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail" style={{ width: '300px' }}>
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" name="email" value={this.state.email} onChange={this.onChange}/>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword" style={{ width: '300px' }}>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" name="password" value={this.state.password} onChange={this.onChange}/>
                    </Form.Group>
                    <Button variant="primary" type="submit" onClick={this.handleSubmit} className="btn-block" style={{ maxWidth: '300px' }}>
                        Register
                    </Button>
                </Form>
            </Container>
        )
    }
}