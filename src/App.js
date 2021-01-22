import React, {useState} from 'react';
import Header from './Header';
import CreateNote from './CreateNote';
import Note from './Note';
import './App.css';

const App = () => {

  const [addItem, setAddItem] = useState([]);

  const addNote = (note) =>{
    // alert("clicked");
    setAddItem((prevData) => {
      return [...prevData, note];
    });

    console.log(note);
  };

  const onDelete = (id) =>{
    setAddItem((oldData) =>
    oldData.filter((currData,index) =>{
      return index !== id;
    })
    );
  };

  return (
    <>
    <Header/> 
    <CreateNote passNote = {addNote}/>
    
    {addItem.map((val, index) =>{
      return(
        <Note
          key ={index}
          id ={index}
          title={val.title}
          content={val.content}
          deleteItem = {onDelete}

        />
      );
    })}

    </>
  );
}

export default App;