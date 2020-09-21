import React, { useState }  from 'react';
import Button from "@material-ui/core/Button";
import AddIcon from '@material-ui/icons/Add';
const CreateNode=(props)=> {

    const [note, setNote] = useState({
        title: "",
        content: "",
      });
    const InputEvent=(event)=>
    {
        const{name,value}=event.target;  // const value=event.target.value;
        // const name=event.target.name;

        setNote((prevData)=>{
            return { 
                ...prevData,// spread operator use krke hum esa kr skte h react me  
            [name]: value, // agar yha pr name title ka hua to value b title ki or content ka hua to content ki
            };  

        });
    };
    console.log(note);
    const addEvent= () =>{ props.passNote(note);
        setNote({
            title: "",
            content: "",
          });
    };

  return (
    <>
    <div className="main_note">
    <form>
    <input
              type="text"
              placeholder="Title"
              name="title"
              autoComplete="off"
              value={note.title}
              onChange={InputEvent}
            />
        <textarea rows=" " 
        column=""
        name="content"
        value={note.content}
        onChange={InputEvent}
        placeholder="write a note" />
        <Button onClick={addEvent}>
        <AddIcon className="plus_sign"/>
        </Button>
    </form>

    </div>
 
 </>
  );
}

export default CreateNode;