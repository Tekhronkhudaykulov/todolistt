import axios from 'axios';
import {useEffect,useState } from 'react';
import '../src/style.scss';
import './App.css';
import TodoItem from './components/TodoItem';
import { Col, Container, Row, Table } from 'reactstrap';

const App = () =>  {
  const [todo, setTodos] = useState([]);
  const getData = () => {
    const urlAPI = "https://paragraf.uz/wp-json/wc/v3/products";
    axios.get(urlAPI, {
      auth: {
        username: 'ck_a84f9db0adf5f2cb773a4f935a193b7bf2c86d84',
        password: 'cs_d3021e56e149c76f1f6590443bfbb93be132bbb4'
      }
    })

    .then((response) => {
        setTodos(response.data)
        console.log(response.data);
    })
  }

  useEffect(() => {
    getData();
  }, [])

  //   return (
  //   <>
  //   <div className="items">
  //     {
  //       todo.map(item => (
  //         <TodoItem name = {item.name} 
  //                   key={item.id}
  //                   date_created = {item.date_created}
  //                   images={item.images}
  //                   />
  //       ))
  //     }
  //   </div>
   
  //   </>
  // )
  return (
    <div className="Coin">
      <div className="container">
                        <div className='text'>
                          <h2>Name</h2>
                          <h2>Phone image</h2>
                          <h2>Date created</h2>
                        </div>
                        <div className='all_box'>
                            <div className='item_name'>
                                  {
                                    todo.map(item => (
                                      <p>{item.name}</p>
                                    ))
                                  }
                            </div>
                            <div className='all_i'>
                                {
                                    todo.map(item => (
                                      <TodoItem 
                                      images={item.images}
                                      /> 
                                    ))
                                }
                            </div>
                             <div className='item_date'>
                                  {
                                    todo.map(item => (
                                      <p>{item.date_created}</p>
                                    ))
                                  }
                            </div>
                        </div>
      </div>
                          
    </div>
)
}
export default App;
