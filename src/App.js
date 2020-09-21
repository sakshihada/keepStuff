import React,{useState} from 'react';
import Style from './index.css'
import Header from './Header';
import Footer from './Footer';
import CreateNode from './CreateNode';
import Note from './Note';
function App() {
  const[addItem,setAddItem]=useState([]);

  const addNote=(note)=>{
    // alert('iam clicked');
    setAddItem((prevData)=>{
      return [...prevData,note ];
    })
    console.log(note);
  }

  return (
    <>
    <Header/>
    <CreateNode
      passNote={addNote}
    />
    
    {addItem.map((val,index)=>{
      return (<Note 
      key={index}
      id={index}
      title={val.title}
      content={val.content}
      />)

    })}
    <Footer />
 </>
  );
}

export default App;
