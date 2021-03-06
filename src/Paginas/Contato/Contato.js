import React, { Component } from "react";
import Axios from "axios";

import "./Contato.scss";

class Contato extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      assunto: "",
      message: "",
      disabled: false,
      emailSent: null
    };
  }

  handleChange = event => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    this.setState({
      disabled: true
    });

    Axios.post("https://danielvalente-api.herokuapp.com/api/email", this.state)
      .then(res => {
        if (res.data.success) {
          this.setState({
            disabled: false,
            emailSent: true
          });
        } else {
          this.setState({
            disabled: false,
            emailSent: false
          });
        }
      })
      .catch(err => {
        this.setState({
          disabled: false,
          emailSent: false
        });
      });
  };

  render() {
    return (
      <div className="ContainerContato">
        <h3>Entre em contato:</h3>
        <form
          method="POST"
          action="https://danielvalente-api.herokuapp.com/api/email"
          onSubmit={this.handleSubmit}
        >
          <input
            type="text"
            name="name"
            placeholder="Seu nome "
            required
            value={this.state.name}
            onChange={this.handleChange}
          />

          <input
            type="text"
            name="email"
            required
            placeholder="Seu email "
            value={this.state.email}
            onChange={this.handleChange}
          />

          <input
            type="text"
            name="assunto"
            required
            placeholder="Assunto "
            value={this.state.assunto}
            onChange={this.handleChange}
          />

          <textarea
            name="message"
            placeholder="Deixe sua mensagem. "
            required
            value={this.state.message}
            onChange={this.handleChange}
          ></textarea>

          <input
            id="submit"
            type="submit"
            value="Enviar!"
            disabled={this.state.disabled}
          />

          {this.state.emailSent === true && (
            <p className="Sucesso">Email enviado.</p>
          )}
          {this.state.emailSent === false && (
            <p className="Erro">Email não enviado.</p>
          )}
        </form>
      </div>
    );
  }
}

export default Contato;
