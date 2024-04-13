import { LiaUser } from 'react-icons/lia'

export default function Header() {
    return (
        <header className="bg-white text-[#006494] font-mono border-b-2 uppercase font-thin sticky top-0 z-50">
            <div className="flex flex-row">
                <div className="basis-32 flex justify-center">
                    <img
                        className="h-20 w-auto"
                        src="https://static.vecteezy.com/system/resources/previews/013/923/528/non_2x/sports-car-silhouette-black-logo-png.png"
                        alt=""
                    />
                </div>
                <div className="basis-1/4 flex align-text-bottom justify-start mt-5">
                    <a className="text-4xl" href="/">
                        PrimeDrive
                    </a>
                </div>
                <div className="basis-9/12 mt-5">
                    <nav className="flex justify-end space-x-7 text-2xl mr-6">
                        <a className="hover:text-gray-300">Grupo de carros</a>
                        <a className="hover:text-gray-300">Rede de Agências</a>
                        <a className="hover:text-gray-300" href="/deals">
                            Ofertas
                        </a>
                        <a className="hover:text-gray-300">Fidelidade</a>
                        <a className="hover:text-gray-300">Dúvidas</a>
                    </nav>
                </div>
                <div className="basis-1 flex justify-center mt-3 mr-7">
                    <div className="dropdown inline-block relative">
                        <button className="text-gray-700 font-semibold py-2 px-4 inline-flex items-center">
                            <span className="mr-1 text-3xl">
                                <LiaUser />
                            </span>
                            <svg
                                className="fill-current h-4 w-4"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                            >
                                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{' '}
                            </svg>
                        </button>
                        <ul className="dropdown-menu absolute hidden text-gray-700 pt-1 w-30 bg-gray-200 rounded-t">
                            <li className="relative mr-4">
                                <a
                                    className=" hover:bg-gray-300 py-2 px-4 block whitespace-no-wrap"
                                    href="/login"
                                >
                                    Login
                                </a>
                            </li>
                            <li className="">
                                <a
                                    className=" hover:bg-gray-300 py-2 px-4 block whitespace-no-wrap"
                                    href="#"
                                >
                                    Cadastre-se
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}
