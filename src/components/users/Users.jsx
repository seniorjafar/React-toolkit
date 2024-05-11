import React, {useState} from 'react';
import "./Users.css";
import male from "../../assets/male-avatar-boy-face-man-user-9.svg";
import female from "../../assets/female-avatar-girl-face-woman-user-2.svg";
import { useDispatch } from 'react-redux';
import { removeFromUsers } from "../../context/usersSlice";
import Modal from 'react-modal';

function Users({ data }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const dispatch = useDispatch();

  const handleRemoveUser = (user) => {
    dispatch(removeFromUsers(user));
  };

  return (
    <div className='users__wrapper'>
      <div>
      
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        
      >
        <h2>Personal</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam provident modi sequi consequatur quia porro praesentium quasi! Aliquid deleniti deserunt voluptatibus numquam repudiandae cupiditate culpa. Tenetur blanditiis excepturi reprehenderit in! Molestias rerum nam voluptates ea animi. Beatae, rem sunt ullam sit velit excepturi dolores, commodi nihil corrupti voluptates, numquam itaque!</p>
        <button className='modal__btn' onClick={() => setModalIsOpen(false)}>Close</button>
      </Modal>
    </div>
      {data?.map((user) => (
        <div key={user.id} className="users__card">
          <img src={user.gender === "male" ? male : female} alt="" />
          <h2>{user.name}</h2>
          <p>{user.profession}</p>
          <p>{user.age} years old</p>
          <p>+998 {user.number}</p>
          <p>{user.address}</p>
          <div className='btn_code'>
            <button onClick={() => handleRemoveUser(user)}>Remove</button>
          <button onClick={() => setModalIsOpen(true)}>More</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Users;