export const getServices = () => {
    return dispatchEvent => {
        dispatchEvent({ type: "LOADING"})
    }
}