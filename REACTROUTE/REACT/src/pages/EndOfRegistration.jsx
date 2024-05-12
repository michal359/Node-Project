import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../App'
import { serverRequests } from '../Api';

function EndOfRegistration({ setUserData }) {

  const UserData = useContext(UserContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    username: UserData.username,
    email: '',
    address: {
      street: '',
      suite: '',
      city: '',
      zipcode: '',
      geo: {
        lat: '',
        lng: '',
      },
    },
    phone: '',
    website: UserData.website,
    company: {
      name: '',
      catchPhrase: '',
      bs: '',
    },
  });

  const handleAddUser = async () => {
    
    try {
      setUserData(formData);
      serverRequests('PUT', `users/${UserData.id}`, formData).then((jsonResponse) => {
        setUserData(jsonResponse)
        const { website, ...userInLocalStorage } = jsonResponse
        localStorage.setItem('loggedInUser', JSON.stringify(userInLocalStorage));
        navigate(`/home`)
        alert(`${UserData.username} added successfully!`);
      });
      
    } catch (error) {
      console.error('Error adding user:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, username: UserData.username, website: UserData.website })
    if (name === 'address.street') {
      setFormData((prevUserData) => ({
        ...prevUserData,
        address: {
          ...prevUserData.address,
          street: value,
        },
      }));
    } else if (name === 'address.suite') {
      setFormData((prevUserData) => ({
        ...prevUserData,
        address: {
          ...prevUserData.address,
          suite: value,
        },
      }));
    } else if (name === 'address.city') {
      setFormData((prevUserData) => ({
        ...prevUserData,
        address: {
          ...prevUserData.address,
          city: value,
        },
      }));
    } else if (name === 'address.zipcode') {
      setFormData((prevUserData) => ({
        ...prevUserData,
        address: {
          ...prevUserData.address,
          zipcode: value,
        },
      }));
    } else if (name === 'address.geo.lat') {
      setFormData((prevUserData) => ({
        ...prevUserData,
        address: {
          ...prevUserData.address,
          geo: {
            ...prevUserData.address.geo,
            lat: value,
          },
        },
      }));
    } else if (name === 'address.geo.lng') {
      setFormData((prevUserData) => ({
        ...prevUserData,
        address: {
          ...prevUserData.address,
          geo: {
            ...prevUserData.address.geo,
            lng: value,
          },
        },
      }));
    }

    else if (name === 'company.name') {
      setFormData((prevUserData) => ({
        ...prevUserData,
        company: {
          ...prevUserData.company,
          name: value,
        },
      }));
    } else if (name === 'company.catchPhrase') {
      setFormData((prevUserData) => ({
        ...prevUserData,
        company: {
          ...prevUserData.company,
          catchPhrase: value,
        },
      }));
    } else if (name === 'company.bs') {
      setFormData((prevUserData) => ({
        ...prevUserData,
        company: {
          ...prevUserData.company,
          bs: value,
        },
      }));
    }
  };

  const handleInputChangen = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };




  return (<>

    <div>
      <h1 className='registerHeader'>End of registration</h1>
      <form>
        <br />
        <div className='endOfRegisterForm'>
          <div className='details'>
            <h2>Personal Info</h2><br />
            <div>
              <input
                type="text"
                name="name"
                placeholder='name'
                value={formData.name}
                onChange={handleInputChangen}
              />
            </div>
            <br />
            <div>
              <input
                type="email"
                name="email"
                placeholder='email'
                value={formData.email}
                onChange={handleInputChangen}
              />
            </div>
            <br />
            <div>
              <input
                type="text"
                name="phone"
                placeholder='phone'
                value={formData.phone}
                onChange={handleInputChangen}
              />
            </div>
            <br />
          </div>

          <div className='address'>
            <h2>Address </h2><br />
            <div>
              <input
                type="text"
                name="address.street"
                placeholder='street'
                value={formData.address.street}
                onChange={handleInputChange}
              />
            </div>
            <br />
            <div>
              <input
                type="text"
                name="address.suite"
                placeholder='suite'
                value={formData.address.suite}
                onChange={handleInputChange}
              />
            </div>
            <br />
            <div>
              <input
                type="text"
                name="address.city"
                placeholder='city'
                value={formData.address.city}
                onChange={handleInputChange}
              />
            </div>
            <br />
            <div>
              <input
                type="text"
                name="address.zipcode"
                placeholder='zipcode'
                value={formData.address.zipcode}
                onChange={handleInputChange}
              />
            </div>
            <br />
            <h2>Geo </h2><br />
            <div>
              <input
                type="text"
                name="address.geo.lat"
                placeholder='geo lat'
                value={formData.address.geo.lat}
                onChange={handleInputChange}
              />
            </div>
            <br />
            <div>
              <input
                type="text"
                name="address.geo.lng"
                placeholder='geo lng'
                value={formData.address.geo.lng}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <br />

          <div className='company'>
            <h2>Company </h2><br />
            <div>
              <input
                type="text"
                name="company.name"
                placeholder='company name'
                value={formData.company.name}
                onChange={handleInputChange}
              />
            </div>
            <br />
            <div>
              <input
                type="text"
                name="company.catchPhrase"
                placeholder='catch phrase'
                value={formData.company.catchPhrase}
                onChange={handleInputChange}
              />
            </div>
            <br />
            <div>
              <input
                type="text"
                name="company.bs"
                placeholder='bs'
                value={formData.company.bs}
                onChange={handleInputChange}
              />
            </div>
            <br />
          </div>
        </div>
        <button className='endOfRegisterBtn' type="button" onClick={handleAddUser}>
          Add Yourself
        </button>
      </form>
    </div>
  </>
  )
}

export default EndOfRegistration