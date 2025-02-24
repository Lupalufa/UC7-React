import React from "react";
import style from "./Footer.module.css"

function Footer() {
    return (
        <>
            <footer className={style.footer}>
                <div className={style.divisao}>
                    <p className={style.titulo}>Copyright © Senac 2025</p>
                    <p className={style.subtitulo}>Todos os direitos reservados</p>
                </div>
            </footer>
        </>
    )
}

export default Footer