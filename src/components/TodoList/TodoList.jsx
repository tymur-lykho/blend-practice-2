import Grid from '../Grid/Grid';
import GridItem from '../GridItem/GridItem';
import TodoListItem from '../TodoListItem/TodoListItem';

const TodoList = ({ list, onDelete, onEdit }) => {
  return (
    <Grid>
      {list.map((item, index) => (
        <GridItem key={item.id}>
          <TodoListItem
            data={item}
            number={index + 1}
            onDelete={onDelete}
            onEdit={onEdit}
          />
        </GridItem>
      ))}
    </Grid>
  );
};

export default TodoList;
