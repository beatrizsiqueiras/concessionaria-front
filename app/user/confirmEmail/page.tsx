import UserCredentialsForm from '../../_components/crendentials-form'

const ChangePassword = () => {
    return (
        <div className="h-[70vh] w-[100%]">
            <div className=" text-center font-semibold text-gray-600 text-xl mt-20">
                <p>Informe o seu e-mail para receber o link de alteração de senha</p>
            </div>
            <UserCredentialsForm showOnlyEmailField={true} />
        </div>
    )
}

export default ChangePassword
