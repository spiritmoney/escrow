// ToastNotification.tsx
import React, { useEffect, useState } from 'react';
import { toast, ToastContainer, ToastOptions } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface ToastProps {
    message: string;
}

export default function ToastNotification({ message }: ToastProps) {

    toast.success(message, {
        className: "text-white bg-blue-600",
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });


    return (
        <>
            <ToastContainer />
        </>
    );
}
