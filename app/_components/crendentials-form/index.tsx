import React from 'react'

const UserCredentialsForm = ({
    showPassConfirmationField = false,
}: {
    showPassConfirmationField?: boolean
}) => {
    return (
        <div className="grid grid-cols-6 gap-4">
            <div className="col-start-2 col-span-4 flex mt-10">
                <div className="row-span-3 block w-[100%] text-center">
                    <div className="mt-6 block">
                        <p className="font-bold mb-4">E-mail:</p>
                        <input
                            placeholder="Insira o seu e-mail"
                            type="email"
                            name=""
                            id=""
                            required
                            className="border-3 border-gray-500 bg-gray-100 h-14 w-[50%] text-center"
                        />
                    </div>
                    <div className="mt-4 block">
                        <p className="font-bold mb-4">
                            {showPassConfirmationField ? 'Nova senha' : 'Senha'}
                            :
                        </p>
                        <input
                            placeholder="Insira a sua senha"
                            type="password"
                            name=""
                            id=""
                            required
                            className="border-gray-500 border-1 bg-gray-100 w-[50%] h-14 text-center"
                        />
                    </div>
                    {!showPassConfirmationField ? (
                        <div className="mt-4 block">
                            <a
                                href="/user/changePassword"
                                className="text-blue-950 font-semibold"
                            >
                                Esqueceu a senha?
                            </a>
                        </div>
                    ) : (
                        ''
                    )}
                    {showPassConfirmationField ? (
                        <div className="mt-4 block">
                            <p className="font-bold mb-4">
                                Confirme a sua nova senha:
                            </p>
                            <input
                                placeholder="Confirme a sua senha"
                                type="password"
                                name=""
                                id=""
                                className="border-gray-500 border-1 bg-gray-100 w-[50%] h-14 text-center"
                            />
                        </div>
                    ) : (
                        ''
                    )}
                    <div className="mt-10 block">
                        <button
                            className=" bg-green-600 w-[10%] h-14 text-center text-white font-semibold rounded-lg"
                            type="submit"
                        >
                            {showPassConfirmationField
                                ? 'Alterar senha'
                                : 'Entrar'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserCredentialsForm
