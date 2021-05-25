import { useSelector } from 'react-redux';
import ListItem from './ListItem';


function List() {
    const items = useSelector(state => state.list)
    return (
        <ul>
            {items.map((item) =>
                <ListItem key={item.id} item={item}></ListItem>
            )}
        </ul>
    )
}

export default List;