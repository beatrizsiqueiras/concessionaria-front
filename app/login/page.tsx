'use client'

import UserCredentialsForm from '../_components/crendentials-form'

const Login = () => {
    return (
        <div className="h-[60vh] w-[100%]">
            <div className=" text-center font-light text-gray-600 text-3xl mt-20">
                <p>Faça o seu login!</p>
            </div>
            <UserCredentialsForm showPassConfirmationField={false}/>
        </div>
    )
}

export default Login
