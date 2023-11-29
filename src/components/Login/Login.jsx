import { useState } from 'react';
import styles from './Login.module.css'
import router from "next/router";
import AuthService from '../../services/AuthService';
export default function Login(props) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    async function handleSubmit(evento) {
        evento.preventDefault();
        if (!username || !password) {
            setMessage("Preencha o username e a senha para continuar!");
        } else {
            AuthService.login(username, password).then(
                () => {
                    console.log("localStorage: " +

                        localStorage.getItem("user"));

                    router.push("/produtos")
                },
                (error) => {
                    const resMessage =
                        (error.response &&
                            error.response.data &&
                            error.response.data.message) ||
                        error.message ||
                        error.toString();
                    setMessage(resMessage);
                }
            );
        }
    };
    return (
        <div className={styles.conteudo}>
            <h1 className={styles.tituloAuth}>Login</h1>
            <form className={styles.formLogin} onSubmit={handleSubmit} >
                <div>
                    <label className={styles.lblLogin}

                        htmlFor="username">Username: </label>

                    <input
                        type="text"
                        value={username}
                        placeholder="Digite o e-mail"
                        className={styles.inputAuth}
                        onChange={(event) => setUsername(event.target.value)}
                    />
                </div>

                <div>
                    <label className={styles.lblLogin} htmlFor="senha">Senha:

                    </label>

                    <input
                        type="password"
                        value={password}
                        placeholder="Digite a senha"
                        className={styles.inputAuth}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                </div>
                <button type="submit" className={styles.buttonSubmit}

                >Login</button>

                <h4 className={styles.msgErro}>{message}</h4>
            </form>
        </div>
    )
}