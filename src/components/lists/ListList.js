import ListItem from "./ListItem";
import classes from './ListList.module.css';



function ListList(props) {
    return (
        <ul className={classes.list}>
            {props.lists.map((lists) => (
                <ListItem
                    key={lists.id}
                    image={lists.image}
                    tittle={lists.tittle}
                    description={lists.description}
                />
            ))}
        </ul>
    )

}
export default ListList;