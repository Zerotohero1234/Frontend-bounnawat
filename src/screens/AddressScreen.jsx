import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Header from '../components/Header';

export const AddressScreen = () => {

    const navigate = useNavigate();

    
const oldAddress = (e) => {
    e.preventDefault();
    navigate("/payment");
};

const newAddress = (e) => {
    e.preventDefault();
    navigate("/login?redirect=shipping");
};

  return (
    <>
    <Header/>
    <div className="container d-flex justify-content-center align-items-center login-center">
        <div className="Login3 col-md-8 col-lg-4 col-11">
            <h2>ສະຖານທີ່ທີຢາກໃຫ້ສົ່ງ</h2>
            <button onClick={oldAddress} type="button" className="btn btn-warning" >ສົ່ງບ່ອນເກົ່າ</button>
            <span>ຫຼື</span>
            <button onClick={newAddress} type="button" className="btn btn-success" >ສົ່ງບ່ອນໃໝ່</button>
        </div>
    </div>
    </>
  )
}

export default AddressScreen;