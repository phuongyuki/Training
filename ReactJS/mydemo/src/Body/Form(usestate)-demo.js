import React, {useState} from 'react';

export default function Login(){
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

function handleSubmit(event){
  console.log({username}, {password})
  event.preventDefault();
}

return (
  
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Username:
            <input value={username} onChange={e => setUsername(e.target.value)} type="text" />  
          </label>
        </div>
        <div>
          <label>
            Password
            <input value={password} onChange={e => setPassword(e.target.value)} type="password" />
          </label>
        </div>
        <input type="submit" value="Submit" />
      </form>

);
}