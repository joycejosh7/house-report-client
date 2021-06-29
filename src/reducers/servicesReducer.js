const initialState = {
    services: [],
    loading: true
}

const servicesReducer = (state= initialState, action) => {
    switch(action.type) {
        case "LOADING":
            return {
                ...state,
                loading: true
            }
        case "SET_SERVICES":
            return {
                ...state,
                loading: false,
                services: action.services
            }
        case "ADD_SERVICE":
            return {
                ...state,
                services: [...state.services, action.service]
            }
        case "DELETE_SERVICE":
            return {
                services: state.services.filter(service => service.id !== action.service.id)
            }
        default:
            return state
    }
}

export default servicesReducer