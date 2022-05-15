import React from 'react'
import './FormStyles.css'

const Form = () => {
  return (
    <div>
      <div className='form'>
            <form className='form'>
                <label>Nom</label>
                <input type='text'></input>
                <label>Email</label>
                <input type='email'></input>
                <label>Sujet</label>
                <input type='text'></input>
                <label>Message</label>
                <textarea rows='6' placeholder='ECRIVER VOTRE MESSAGE ICI' />
                <button className='btn'>Envoyer</button>
            </form>
        </div>
    </div>
  )
}

export default Form
