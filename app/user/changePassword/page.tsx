import UserCredentialsForm from '../../_components/crendentials-form'

const ChangePassword = () => {
    return (
        <div className="h-[70vh] w-[100%]">
            <div className=" text-center font-light text-gray-600 text-3xl mt-20">
                <p>Alteração de senha</p>
            </div>
            <UserCredentialsForm showPassConfirmationField={true} />
        </div>
    )
}

export default ChangePassword
