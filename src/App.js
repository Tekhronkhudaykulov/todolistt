import axios from 'axios';
import {useEffect,useState } from 'react';
import '../src/style.scss';
import './App.css';
import TodoItem from './components/TodoItem';
const App = () =>  {
  const [todos, setTodos] = useState([]);

  const getData = async () => {
     try{
      const res = await axios.get('https://jsonplaceholder.typicode.com/todos/');
      setTodos(res.data);
      console.log(res)
     }catch (e){
        console.log(e);
     }
  }

  useEffect(() => {
    getData();
  }, [])

    return (
    <>
    <div className="all_items">
          <h1>Textni kiriting</h1>
          <div className="inputAll">
          <input type="text"  placeholder="textni yozing..."/>
          <button onClick={getData} type="submit">Bosing</button>
          </div>
    </div>
    <div className="items">
      {
          todos.map(item => (
            <TodoItem title={item.title} />
          ))
        }
    </div>
    </>

  )
}
export default App;
