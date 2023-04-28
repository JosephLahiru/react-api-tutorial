import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [doctors, setDoctors] = useState([]);

  useEffect(()=>{
    async function fetchDoctors(){
      const response = await fetch("https://mcms_api.mtron.me/get_doctors");
      const data = await response.json();
      console.log(data)
      setDoctors(data);
    }
    fetchDoctors();
  }, []);

  return (
    <div>
      <h1>Doctor List</h1>
      <table>
        <tr>
          <th>Doctor ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>NIC</th>
          <th>Email</th>
          <th>Address</th>
          <th>Contact Number</th>
        </tr>
        {doctors.map((doctor)=>
          <tr key={doctor.d_id}>
            <td>{doctor.d_id}</td>
            <td>{doctor.first_name}</td>
            <td>{doctor.last_name}</td>
            <td>{doctor.nic}</td>
            <td>{doctor.email}</td>
            <td>{doctor.address}</td>
            <td>{doctor.contact_no}</td>
          </tr>
        )}
      </table>
    </div>
  );
}

export default App;
