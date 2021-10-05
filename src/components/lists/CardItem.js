import style from './CardItem.module.css';


function CardItem(props) {
    const { version, date, status, author, description, image } = props;
    return (
        <div className={style.card}>
            <p className={style.headerLabel}>
                {`${version} ${date}`}
            </p>
            <div className={style.statusLabel}>
                <span className={style.status} style={{ backgroundColor: status.color }}>{status.label}</span>
                <div className={style.profileName}>
                    <img className={style.profilePicture} src={image} />
                    <p>{author.firstName} {author.lastName}</p>
                </div>
            </div>
            <p className={style.contentLabel}>
                {description}
            </p>
            <a className={style.btnLabel}
                href="/" alt="">Download
            </a>
        </div>

    )
}

export default CardItem;