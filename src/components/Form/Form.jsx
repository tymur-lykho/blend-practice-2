import { FiSearch } from 'react-icons/fi';
import style from './Form.module.css';

const Form = ({ onSubmit }) => {
  const submitHandler = e => {
    e.preventDefault();
    const inputValue = e.target.elements['search'].value;
    if (!inputValue.trim()) return;
    onSubmit(inputValue);
    e.target.reset();
  };

  return (
    <form className={style.form} onSubmit={submitHandler}>
      <button className={style.button} type="submit">
        <FiSearch size="16px" />
      </button>

      <input
        className={style.input}
        placeholder="What do you want to write?"
        name="search"
        required
        autoFocus
      />
    </form>
  );
};

export default Form;
