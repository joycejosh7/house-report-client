export const getServices = () => {
    return dispatchEvent => {
        dispatchEvent({ type: "LOADING"})
        fetch("http://localhost:3001/services")
        .then(resp => resp.json())
        .then(services => dispatchEvent({ type: "SET_SERVICES", services}))
    }
}

export const addService = (service, history) => {
    return dispatch => {
      fetch('http://localhost:3001/services', {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ service })
      })
        .then(resp => resp.json())
        .then(service => {
          dispatch({ type: "ADD_SERVICE", service })
          history.push("/services")
        })
    }
  }