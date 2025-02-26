import React from "react";
import Header from "../../components/Header/index"
import Footer from "../../components/Footer/index"
import style from "./Contato.module.css"

function Contato(){
    return (
        <>
            <Header />
            <main>
                <form action="#" method="post">
                    <div className={style.formulario_Nome}>
                        <label for="nome">Nome</label>
                        <input type="text" name="nome" placeholder="Insira seu nome"/>
                    </div>
                    <div className={style.formulario_Email}>
                        <label for="nome">Email</label>
                        <input type="email" name="email" x-moz-errormessage="Por favor, especifique um endereço de e-mail." placeholder="Insira seu Email"/>
                    </div>
                    <div className={style.formulario_Numero}>
                        <label for="nome">Numero</label>
                        <input type="text" name="numero" placeholder="Insira seu numero"/>
                    </div>
                    
                    <button type="submit">Enviar</button>

                </form>
            </main>
            <Footer />
        </>
    )
}

export default Contato