import React, { useContext } from 'react';
import './TourDisplay.css';
import { SlLocationPin } from 'react-icons/sl';
import { FaClipboardCheck } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';
import { tour_details } from '../../assets/assets';

const TourDisplay = ({  }) => {
  const { Tour_list } = useContext(StoreContext); 

 
  return (
    <div className="travel-list container grid gap-5">
      {Tour_list.map(({ id, image, name, price }) => (
        <div key={id} className="destination">
          <div className="card">
            <img src={image} className="imageDiv" alt={name} />
            <div className="card-body">
              <span className="content d-flex gap-1">
                <SlLocationPin id="locationIcon" className="icon mt-1" />
                <span className="name">{name}</span>
              </span>
              <span className="content">
                <p className="mt-3 text-dark fs-5 fw-5">Westminister Bridge</p>
              </span>
              <div className="fees d-flex justify-content-between mt-2">
                <div className="price" id="locationIcon">
                  <p>{price}/per month</p>
                </div>
                <Link to='/detail' className="btn btn Btn">
                  Book Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TourDisplay;
