const signUpValidate = (values) => {
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    let errors = {}
    if(values.email.length === 0){
        errors.email = "Email Address cannot be empty"
    } else if(!emailRegex.test(values.email)){
       errors.email = "Enter a valid email address"
    }

    if(values.password.length === 0){
        errors.password= "Password cannot be empty"
    } else if(values.password.length <= 5){
        errors.password= "Password must be greater than 5 characters"
    }
    else if(values.confirmPassword !== values.password){
        errors.confirmPassword= "Password confirmation do not match"
    }
    return errors
}

export default signUpValidate
