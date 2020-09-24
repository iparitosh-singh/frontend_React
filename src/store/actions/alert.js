import * as actionsTypes from './actionsTypes'


const alertMessage = (message) => {
    return {
        type: actionTypes.ALERT_SUCCESS,
        message
    }
}
const alertSuccess = (message) => {
    return {
        type: actionsTypes.ALERT_SUCCESS,
        message
    }
}

const alertFail = (message) => {
    return {
        type: actionTypes.ALERT_FAIL,
        message
    }
}

