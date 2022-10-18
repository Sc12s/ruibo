import serviceAxios from ".."

const SET_ADDRESS = (data: object): any => {
    return serviceAxios({
        method: 'POST',
        url: '/setPersonalAddress',
        data
    })
}

const GET_ADDRESS = (params: any) => {
    return serviceAxios({
        method: 'GET',
        url: '/getPersonalAddress',
        params
    })
}

export {
    SET_ADDRESS,
    GET_ADDRESS
}