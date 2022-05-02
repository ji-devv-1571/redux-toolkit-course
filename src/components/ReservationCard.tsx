import React from 'react';

interface ReservationCardTypes {
  name: string;
}

const ReservationCard = ({ name }: ReservationCardTypes) => {
  return <div className='reservation-card-container'>Laith Harb</div>;
};

export default ReservationCard;
