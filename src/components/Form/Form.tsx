import { useState, SyntheticEvent } from 'react';
import './Form.scss';

export const Form = (props: { createNewToDo: Function }) => {
  const [text, setText] = useState<string>('');

  const formSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    console.log('test');

    if (text) {
      props.createNewToDo(text);
      setText('');
    }
  }

  return (
    <div className="form-wrapper">
      <form action="#" onSubmit={formSubmit}>
        <label>
          <input
            placeholder='Добавить task'
            value={text}
            type="text"
            onChange={(e) => setText(e.target.value)}
          />
          <button></button>
        </label>
      </form>
    </div>
  );
}