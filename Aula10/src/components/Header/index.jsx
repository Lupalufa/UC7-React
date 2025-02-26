import React from "react";
import style from "./Header.module.css"

function Header() {
    return (
        <>
            <header className={style.header}>
                <div className={style.divisao}>
                    <h1>EasyApply</h1>
                    <nav className={style.navbar}>
                        <a href="/">Inicio</a>
                        <a href="/sobre">Sobre</a>
                        <a href="#">Projetos</a>
                    </nav>
                    <div className={style.contato}>
                        <a href="/contato">contato</a>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header