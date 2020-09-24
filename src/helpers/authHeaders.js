export const authHeader = () => {
    let accessToken = localStorage.getItem('accessToken')
    if(accessToken){
        return { 'authorization' : 'Bearer ' + accessToken }
    }
    else {
        return {}
    }
}

