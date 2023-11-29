import styles from './Card.module.css'
export default function Card(props) {
    return (
        <div className={styles.card}>
            <div className={styles.titulo}>
                {props.titulo}
            </div>
            <div className={styles.conteudo}>
                <img className={styles.produto} src={`/images/${props.conteudo}`}

                    alt={`Imagem ${props.titulo}`} />

            </div>
        </div>
    )
}