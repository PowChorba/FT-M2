import React from 'react';


export function validate(input){
  let error = {};
  if(!input.username){
    error.username = 'Username is required';
  } else if(!/\S+@\S+\.\S+/.test(input.username)) {
    error.username = 'Username is invalid'
  }
  if(!input.password){
    error.password = 'Password is required';
  } else if (!/(?=.*[0-9])/.test(input.password)){
    error.password = 'Password is invalid'
  }
  return error
}





export default function  Form() {
  const [error, setError] = React.useState({})
  const [input, setInput] = React.useState({
    username: '',
    password: '',
  })

  const handleCambio = function(e){
    const {name,value} = e.target;
    setInput({
      ...input,
      [name]: value,
    })
    setError(validate({
      ...input,
      [name]: value,
    }))
  }

  function sumbit(event){
    event.preventDefault()
    if(Object.keys(error).length === 0){
      alert('Datos enviados correctamente')
      
    }
  }

  return (
      <div>
        <form onSubmit={sumbit}>
          <div>
            <label>Username:</label>
            <input type='text' name='username' className={error.username && 'danger'} onChange={handleCambio} value={input.username}/>
            {error.username &&(
              <p className='danger'>{error.username || ''}</p>
            )}
          </div>
          <div> 
            <label>Password:</label>
            <input type="password" name='password' className={error.password && 'danger'} onChange={handleCambio}  value={input.password}/>
            {error.password &&(
              <p className='danger'>{error.password || ''}</p>
            )}
          </div>
          <button type='submit'>Submit</button>
        </form>
      </div>
  )
}
