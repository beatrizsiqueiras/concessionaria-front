import { LiaUser } from "react-icons/lia";

export default function Header() {
    return (
        <header className="bg-white text-gray-700 font-mono border-b-2 uppercase font-thin sticky top-0 z-50">
            <div className="flex flex-row">
                <div className="basis-32 flex justify-center">
                    <img
                        className="h-20 w-auto"
                        src="https://static.vecteezy.com/system/resources/previews/013/923/528/non_2x/sports-car-silhouette-black-logo-png.png"
                        alt=""
                    />
                </div>
                <div className="basis-1/4 flex align-text-bottom justify-start mt-5">
                    <p className="text-4xl">PrimeDrive</p>
                </div>
                <div className="basis-9/12 mt-5">
                    <nav className="flex justify-end space-x-7 text-2xl mr-6">
                        <a className="hover:text-gray-300">Grupo de carros</a>
                        <a className="hover:text-gray-300">Rede de Agências</a>
                        <a className="hover:text-gray-300">Ofertas</a>
                        <a className="hover:text-gray-300">Fidelidade</a>
                        <a className="hover:text-gray-300">Dúvidas</a>
                    </nav>
                </div>
                <div className="basis-1 flex justify-center mt-5 mr-7">
                    <a className="hover:text-gray-300 text-3xl">
                        <LiaUser />
                    </a>
                </div>
            </div>
        </header>
    )
}
