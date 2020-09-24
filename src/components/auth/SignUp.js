import React from 'react'
import {connect} from 'react-redux'
import useFrom from '../../hooks/form/useForm'
import * as authActions from '../../store/actions/auth'

const SignUp = (props) => {
    const submit = () => {
        const {email, username, password} = values
        props.signUpUser(email, username, password)
    }
    const [values, errors, handleChange, handleSubmit] = useFrom(submit)
    return (
        <div className = "LoginForm">
            <form onSubmit={handleSubmit} noValidate>
                <div>
                    <div>email</div>
                    <input
                        name = "email"
                        value = {values.email || ""}
                        onChange = {handleChange}
                    />
                    {errors.email && <div style = {{fontSize: 12}}>{errors.email}</div>}
                </div>
                <div>
                    <div>username</div>
                    <input
                        name = "username"
                        value = {values.username|| ""}
                        onChange = {handleChange}
                    />
                    {errors.username && <div style = {{fontSize: 12}}>{errors.username}</div>}
                </div>
                <div>
                    <div>Password</div>
                    <input
                        type = "password"
                        name = "password"
                        value = {values.password || ""}
                        onChange = {handleChange}
                    />
                    {errors.password && <div style = {{fontSize: 12}}>{errors.password}</div>}
                </div>
                <div>
                    <div>Confirm Password</div>
                    <input
                        type = "password"
                        name = "confirmPassword"
                        value = {values.confirmPassword || ""}
                        onChange = {handleChange}
                    />
                    {errors.confirmPassword && <div style = {{fontSize: 12}}>{errors.confirmPassword}</div>}
                </div>
                <button type = "submit">Login</button>
            </form>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        signUpUser: (email, username, password) => {
            dispatch(authActions.signUp(email, username, password))
        }
    }
}
export default connect(null, mapDispatchToProps)(SignUp)
