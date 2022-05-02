import { useDispatch } from 'react-redux';
import { addCustomer } from '../features/customerSlice';
import { randomID } from '../features/RandomID';
import { removeReservation } from '../features/reservationSlice';

interface ReservationCardTypes {
  name: string;
  index: number;
}

const ReservationCard = ({ name, index }: ReservationCardTypes) => {
  const dispatch = useDispatch();

  return (
    <div
      onDoubleClick={() => {
        dispatch(removeReservation(index));
        dispatch(
          addCustomer({
            id: randomID(19),
            name,
            food: [],
          })
        );
      }}
      className='reservation-card-container'
    >
      {name}
    </div>
  );
};

export default ReservationCard;
