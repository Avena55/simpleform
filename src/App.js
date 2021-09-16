import './App.css';
import React from 'react';
import { useForm } from 'react-hook-form'

function App() {
  const { register, handleSubmit } = useForm();

  function onSubmit(data) {
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
    .then((response) => response.json())
    .then((json) => console.log(json));
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit)}>

        <label htmlFor="title">Title:</label>
        <input id='title' type="text" {...register('title')} />
        <label htmlFor="body">Body:</label>
        <input id='body' type="text" {...register('body')} />
        <label htmlFor="user-id">User ID:</label>
        <input id='user-id' type="number" {...register('userId', { valueAsNumber: true })} />
        <button type='submit'>Enviar</button>


      </form>
    </div>
  );
}

export default App;
