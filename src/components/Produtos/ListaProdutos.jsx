import { useEffect, useState } from 'react'
import Card from '../Card/Card'
import styles from './Produtos.module.css'
import axios from 'axios'
import router from "next/router";
import AuthService from '../../services/AuthService'
export default function ListaProdutos(props) {
    const [lista, setLista] = useState([])
    useEffect(() => {
        axios('http://localhost:5136/api/Produto')
            .then(resp => {
                console.log(resp.data)
                setLista(resp.data)
            })
    }, [])
    const logout = () => {
        AuthService.logout();
        console.log("logout");
        router.push("/")
    }
    return (
        <div className={`${styles.texto} ${styles.corpo}`}>
            <h1>Produtos</h1>
            <div className={styles.conteudo}>
                {lista.map(produto => {
                    return <Card titulo={produto.nome}

                        conteudo={produto.imagem} />

                }
                )}
            </div>
            <button onClick={() => logout()}>Logout</button>
        </div>
    )
}