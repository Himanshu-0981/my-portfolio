import React from "react";
import {useNavigate} from 'react-router-dom'
import Button from "../components/Button";

const Page404 = () => {

    const navigator = useNavigate()
    const handleGoBack = (url) => {
        navigator(url)
    }
    return (
        <>
            <div className="flex flex-col items-center justify-center h-96  mt-10">
                <p className="text-9xl font-bold text-blue-600">404</p>
                <p className="text-xl font-bold text-blue-600">Page Not Found</p>
                <Button title='Go Back' bg='bg-blue-600' handleClick={()=>handleGoBack('/home')}/>
            </div>
        </>
    )
}

export default Page404;