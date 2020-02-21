import React, { Component } from "react";
import PropTypes from "prop-types";
import axios from "axios";

import "./Form.scss";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mailSent: false,
      error: null
    };
  }
  handleFormSubmit = e => {
    e.preventDefault();
    axios({
      method: "POST",
      url: `${process.env.REACT_APP_API}`,
      headers: { "content-type": "application/json" },
      data: this.state
    })
      .then(result => {
        if (result.data.sent) {
          this.setState({
            mailSent: result.data.sent
          });
          this.setState({ error: false });
        } else {
          this.setState({ error: true });
        }
      })
      .catch(error => this.setState({ error: error.message }));
  };

  handleChange = (e, field) => {
    let value = e.target.value;
    let updateValue = {};
    updateValue[field] = value;
    this.setState(updateValue);
  };

  render() {
    const { successMessage, errorMessage, fieldsConfig } = this.props.config;
    return (
      <div className="ContainerForm">
        <div>
          <h3>Entre em contato:</h3>
        </div>
        <div>
          <form action="/contato" method="POST" className="topBefore">
            {fieldsConfig &&
              fieldsConfig.map(field => {
                return (
                  <React.Fragment key={field.id}>
                    {field.type !== "textarea" ? (
                      <React.Fragment>
                        <label>{field.label}</label>
                        <input
                          type={field.type}
                          placeholder={field.placeholder}
                          value={field.name}
                          onChange={e => this.handleChange(e, field.fieldName)}
                        />
                      </React.Fragment>
                    ) : (
                      <React.Fragment>
                        <label>{field.label}</label>
                        <textarea
                          placeholder={field.placeholder}
                          onChange={e => this.handleChange(e, field.fieldName)}
                          value={field.name}
                        />
                      </React.Fragment>
                    )}
                  </React.Fragment>
                );
              })}
            <input
              id="submit"
              type="submit"
              onClick={e => this.handleFormSubmit(e)}
              value="Enviar"
            />
            <div>
              {this.state.mailSent && (
                <div className="Success">{successMessage}</div>
              )}
              {this.state.error && <div className="Error">{errorMessage}</div>}
            </div>
          </form>
        </div>
      </div>
    );
  }
}
export default Form;
Form.propTypes = {
  config: PropTypes.object.isRequired
};
