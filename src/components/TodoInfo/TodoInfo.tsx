import { FC } from 'react';
import cn from 'classnames';
import { Todo } from '../../types/Todo';

interface Props {
  todo: Todo
  onSelectTodo: (todo: Todo) => void;
  selectedTodo: Todo | null;
}

export const TodoInfo: FC<Props> = ({
  todo,
  onSelectTodo,
  selectedTodo,
}) => {
  const isTodoSelected = todo.id === selectedTodo?.id;

  return (
    <tr
      data-cy="todo"
      className={cn({ 'has-background-info-light': isTodoSelected })}
    >
      <td className="is-vcentered">{todo.id}</td>
      <td className="is-vcentered">
        {todo.completed && (
          <span className="icon" data-cy="iconCompleted">
            <i className="fas fa-check" />
          </span>
        )}
      </td>

      <td className="is-vcentered is-expanded">
        <p className={cn({ 'has-text-danger': !todo.completed },
          { 'has-text-success': todo.completed })}
        >
          {todo.title}
        </p>
      </td>

      <td className="has-text-right is-vcentered">
        <button
          data-cy="selectButton"
          className="button"
          type="button"
          onClick={() => onSelectTodo(todo)}
        >
          <span className="icon">
            <i className={cn('far', {
              'fa-eye-slash': selectedTodo === todo,
              'fa-eye': selectedTodo !== todo,
            })}
            />
          </span>
        </button>
      </td>
    </tr>
  );
};