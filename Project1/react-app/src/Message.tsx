import { Fragment, useEffect, useState
 } from "react";
import axios from 'axios';
function Message(){ 
    const [inputText, setInputText] = useState('');
    const [password, setPassword] = useState('');
    useEffect(()=>{
    }
    ,[])
    const handleButtonClick = () => {
        if(inputText && password)
        axios.get('http://127.0.0.1:8000/add/'+inputText+'/'+password)
          .then(data => {
            // Handle the response data
            console.log(data);
          })
    };

    return (
        <div className="container">
        <div className="row">
            <div className="col-md-6 offset-md-3">
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Enter text" value={inputText} onChange={(e)=> setInputText(e.target.value)} />
                <input type="password" className="form-control" placeholder="Enter text" value={password} onChange={(e)=> setPassword(e.target.value)} />
                <div className="input-group-append">
                <button className="btn btn-primary" type="button" onClick={handleButtonClick}>Submit</button>
                </div>
            </div>
            </div>
            <ul>

            </ul>
        </div>
        </div>
    );
}
export default Message;