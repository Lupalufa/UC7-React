import React from "react";
import style from "./Header.module.css"

function Header() {
    return (
        <>
            <header className={style.header}>
                <div className={style.divisao}>
                    <h1>EasyApply</h1>
                    <nav className={style.navbar}>
                        <a href="#">Inicio</a>
                        <a href="#">Sobre</a>
                        <a href="#">Projetos</a>
                    </nav>

                    <a className={style.contato} href="#">contato</a>
                </div>
            </header>
        </>
    )
}

export default Header