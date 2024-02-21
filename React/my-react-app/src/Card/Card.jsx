import styles from "./Card.module.css"

function Card() {
    const imgUrl = "https://i.pinimg.com/originals/bf/95/34/bf953419d76bf747cba69b55e6e03957.png";
    return (
        <div className={styles.card}>
            <img className={styles.cardImage} src={imgUrl} alt="profile picture" />
            <h2 className={styles.cardTitle}>Bro Code</h2>
            <p className={styles.cardText}>I make Youtube videos and play video games</p>
        </div>
    );
}

export default Card