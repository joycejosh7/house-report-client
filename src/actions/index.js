export const getServices = () => {
    return dispatchEvent => {
        dispatchEvent({ type: "LOADING"})
        fetch("http://localhost:3001/services")
        .then(resp => resp.json())
        .then(services => dispatchEvent({ type: "SET_SERVICES", services}))
    }
}