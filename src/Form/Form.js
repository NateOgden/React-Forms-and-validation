import React from 'react';
import validator from 'validator';

class Form extends React.Component {
    constructor(props) {
        super(props);
        //bind the specific instance of onchange from
        //this particular class to the onchange method
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        //set default form state
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            phone: ""

        };
    }

    onChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    onSubmit(event) {


        if (validator.isEmpty(this.state.firstName) || validator.isEmpty(this.state.lastName) || validator.isEmpty(this.state.email) || validator.isEmpty(this.state.phone)) {
            alert('Please complete all fields before submitting');
            event.preventDefault();
        } else {

            if (validator.isEmail(this.state.email) === false && validator.isMobilePhone(this.state.phone, 'en-US') === false) {
                alert('Please enter a valid email address and phone number');
                event.preventDefault();
            } else if (validator.isMobilePhone(this.state.phone, 'en-US') === false) {
                alert('Please enter a valid phone number');
                event.preventDefault();
            } else {
                alert('Your form has been submitted. Thank you!');
                event.preventDefault();
            }
        }


    }

    render() {
        return (
            <div className="form-wrapper">
                <form id="myForm">
                    <label>First Name</label>
                    <input
                        name="firstName"
                        type="text"
                        onChange={this.onChange}
                        value={this.state.firstName}
                    />

                    <label>Last Name</label>
                    <input
                        name="lastName"
                        type="text"
                        onChange={this.onChange}
                        value={this.state.lastName}
                    />

                    <label>Email</label>
                    <input
                        name="email"
                        type="email"
                        onChange={this.onChange}
                        value={this.state.email}
                    />

                    <label>Phone</label>
                    <input
                        name="phone"
                        type="tel"
                        onChange={this.onChange}
                        value={this.state.phone}
                    />
                    <button onClick={this.onSubmit.bind(this)}>Submit</button>
                </form>
            </div>
        )
    }
}

export default Form;