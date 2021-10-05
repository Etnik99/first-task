import classes from './ListItem.module.css';


function ListItem(props) {
    return (
        <li className={classes.item}>
            <div className={classes.image}>
                <img alt="logo-item" src={props.image} />
            </div>
            <div className={classes.content}>
                <h1>{props.tittle}</h1>
                <p>{props.description}</p>
            </div>
        </li>

    )
}

export default ListItem;