import CardItem from "./CardItem";
import style from './CardList.module.css';

function CardList(props) {
    return (
        <div className={style.listCard}>
            {props.cards.map((cards) => (
                <CardItem
                    version={cards.version}
                    date={cards.date}
                    status={cards.status}
                    author={cards.author}
                    description={cards.description}
                    image={cards.image}

                />
            ))}
        </div>
    )
}

export default CardList;