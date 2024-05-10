import React,{useState} from 'react'
import "./CreateUser.css"
import {useDispatch} from 'react-redux'
import {addToUsers} from "../../context/usersSlice" 

function CreateUser() {
  const [name, setName] = useState('')
  const [profession, setProfession] = useState('')
  const [age, setAge] = useState('')
  const [number, setNumber] = useState('')
  const [address, setAddress] = useState('')
  const [gender, setGender] = useState('')
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    let newUser = {
      id: new Date().getTime(),
      name,
      profession,
      age: +age,
      number,
      address,
      gender,
      
    }
    
    dispatch(addToUsers(newUser))
    setName('')
    setProfession('')
    setAge('')
    setNumber('')
    setAddress('')
    setGender('')
  }
 
  return (
    <div className='create__user'>
      <h2>Create User</h2>
      <form onSubmit={handleSubmit} className='create__user-form' action="">
        <input value={name} required onChange={(e)=> setName(e.target.value)} type="text" placeholder='name' />
        <input value={profession} required onChange={(e)=> setProfession(e.target.value)}  type="text" placeholder='profession' />
        <input value={age} required onChange={(e)=> setAge(e.target.value)} type="number" placeholder='age' />
        <input value={number} required onChange={(e)=> setNumber(e.target.value)} type="number" placeholder='97 779 61 77' />
        <input value={address} required onChange={(e)=> setAddress(e.target.value)}  type="text" placeholder='address' />
        <select value={gender} required onChange={(e) => setGender(e.target.value)} name="" id="">
          <option value="">gender</option>
          <option value="male">male</option>
          <option value="female">female</option>
        </select>
        <button type='submit'>Create</button>
      </form>
    </div>
  )
}

export default CreateUser