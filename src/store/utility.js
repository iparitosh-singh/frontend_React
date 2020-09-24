const updateState = (oldState, updatedValues) => {
    return {
        ...oldState,
        ...updatedValues
    }
}
export default updateState
