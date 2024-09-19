import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import bus from "./EventBus";
import "./Toast.css";

const Toast = () => {
  const [toasts, setToasts] = useState([]);

  useEffect(() => {
    const handleSendToast = (toast) => {
        setToasts((prevToasts) => [...prevToasts, { id: Date.now(), ...toast }]);
  
        //1.5초 이후에 토스트를 제거 
        setTimeout(() => {
          setToasts((prevToasts) => prevToasts.slice(1));
        }, 1500);
      };

    // "SEND_TOAST라는 키워드를 통한 구독 pub,sub 패턴"
    const unsubscribe = bus.subscribe("SHOW_TOAST", handleSendToast);
    return () => {
      unsubscribe();
    };
  }, []);
  return createPortal(
    <div className="toast-container">
      {toasts.map((toast, index) => (
        <div key={index} className="toast">
          {toast.message}
        </div>
      ))}
    </div>,
    document.getElementById("toast-container")
  );
};

export default Toast;
