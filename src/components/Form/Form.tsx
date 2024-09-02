import { useState, SyntheticEvent } from 'react';
import './Form.scss';

export const Form = (props: { createNewToDo: Function }) => {
  const [text, setText] = useState<string>('');

  const formSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
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
          <button className='form-button'>
            <svg width="3rem" height="3rem" viewBox="-1.7 0 20.4 20.4" xmlns="http://www.w3.org/2000/svg"><path d="M16.416 10.283A7.917 7.917 0 1 1 8.5 2.366a7.916 7.916 0 0 1 7.916 7.917zm-2.958.01a.792.792 0 0 0-.792-.792H9.284V6.12a.792.792 0 1 0-1.583 0V9.5H4.32a.792.792 0 0 0 0 1.584H7.7v3.382a.792.792 0 0 0 1.583 0v-3.382h3.382a.792.792 0 0 0 .792-.791z" /></svg>
          </button>
        </label>
      </form>
    </div>
  );
}