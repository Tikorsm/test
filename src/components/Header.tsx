import Image from "next/image";


import Logo from '@/assets/logo.svg'
import { ItemMenu } from "./ItemMenu";
import { Search } from "./Search";
import IconUser from "@/assets/icon-user.svg"
import { Container } from "./Container";

export function Header(){
    return(
        <header className=" relative flex items-center w-full h-20 bg-primary-orange">
            <div className="absolute top-0 right-0 bg-primary-blue w-[19%] h-full z-0"></div>
            <Container>
                <div className="flex flex-1 items-center justify-between">
                    <div className="flex items-center gap-14">
                        <Image
                        src={Logo}
                        alt="Logo"
                        
                        />
                        <ul className="flex items-center gap-12">
                            <li>
                                <ItemMenu
                                 name="Para você"
                                />
                            </li>

                            <li>
                                <ItemMenu
                                 name="Para impresas"
                                />
                            </li>
             
                            <li>
                                <ItemMenu
                                 name="Serviços"
                                />
                            </li>
                       
                            <li>
                                <ItemMenu
                                 name="Ajuda"
                                />
                            </li>
                        </ul>
                    </div>
                    <div>
                        <Search/>
                    </div>

                </div>
                <div>
                    <button className="flex items-center gap-4 bg-primary-blue z-10 h-20 pl-10">
                        <Image
                        src={IconUser}
                        alt="Icon user"
                        />
                        <span className="text-white font-bold ">Acessar conta</span>
                    </button>
                </div>
                </Container>
        </header>
    )
}