import bus from "./EventBus";

export const showToast = (message) => {
    bus.publish("SHOW_TOAST",{message})
}