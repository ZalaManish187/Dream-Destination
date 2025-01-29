import React from 'react'
import './TourDetail.css'
import { CiLocationOn } from "react-icons/ci";
import { RiMapPinTimeLine } from "react-icons/ri";
import { GoPeople } from "react-icons/go";
import { tour_details } from '../../assets/assets';


function TourDetail() {
  return (
    <div className='tourDetail'>
      {
        tour_details.map(({ id, header, image, price,formHeader,location,km,people,description }) => {
          return (
            <div key={id}>
              <div class="detailContainer container">
                <div class="row">
                  <div class="col">
                    <img src={image} alt='' />
                    <div className='detailHeader mt-5 bg-light p-4'>
                      <h3>{header}</h3>
                      <div className='informationDetail d-flex gap-5'>
                        <p><CiLocationOn />{location}</p>
                        <p>{price}/ per person</p>
                        <p><RiMapPinTimeLine />{km} k/m</p>
                        <p><GoPeople />  {people} people</p>
                      </div>
                      <div className='description mt-3'>
                      <h4>Description</h4>
                        <p>{description}</p>
                      </div>
                      <div className='review'>
                        <input type='text'/>
                      </div>
                    </div>

                  </div>
                  <div class="col">
                    <div className='tripDetails'>
                      <p>{price}/per month</p>
                      <div className='formDetail d-flex flex-column gap-4 p-4'>
                      <div className='formHeader'>
                      <p>{formHeader}</p>
                      </div>
                        <input type='text' placeholder='Full Name' />
                        <input type='text' placeholder='Phone' />
                        <div className='d-flex gap-4'>
                        <input type='date' />
                        <input type='number' placeholder='Guest'/>
                        </div>
                      </div>
                      <div className='totalAmount'>

                      </div>
                      <div className='tourBtn mt-5'>
                        <button className='btn text-light'>Book Now</button>
                      </div>

                    </div>
                  </div>
                </div>





              </div>
            </div>
          )
        })
      }

    </div>
  )
}

export default TourDetail