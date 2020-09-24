import React from 'react'
import useForm from '../../hooks/form/useForm'
import {connect} from  'react-redux'
import * as authActions from '../../store/actions/auth'
import signInValidate from './formValidates/signInValidate'

const SignIn = (props) => {
    const submit = () => {
        const {email, password} = values
        props.loginUser(email, password)
    }
    const [values, errors, handleChange, handleSubmit] = useForm(submit, signInValidate)

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
                    <div>Password</div>
                    <input
                        type = "password"
                        name = "password"
                        value = {values.password || ""}
                        onChange = {handleChange}
                    />
                    {errors.password && <div style = {{fontSize: 12}}>{errors.password}</div>}
                </div>
                <button type = "submit">Login</button>
            </form>
        </div>
    )
}


const mapDispatchToProps = dispatch => {
    return {
        loginUser: (email, password) => {
            dispatch(authActions.signIn(email, password))
        }
    }
}
export default connect(null, mapDispatchToProps)(SignIn)
