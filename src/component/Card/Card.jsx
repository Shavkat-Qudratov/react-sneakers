import React, {useState} from 'react';
import { BsHeart } from 'react-icons/bs';
import { useDispatch } from 'react-redux';

import './Card.css';

export const Card = ({ item }) => {
  const { id, imageUrl, price, title } = item;
  const [isLiked, setLiked] = React.useState(false);
  const [isOrder, setIsOrder] = useState(false);
  const dispatch = useDispatch();

  const hanleLike = (item) => {
    dispatch({ type: 'ADD_TO_FAVOURITE', payload: item });
    setLiked((prevValue) => !prevValue);
  };

  function setOrder() {
    setIsOrder((order) => !order);

    if (isOrder) {
      dispatch({ type: "REMOVE_FROM_ORDERS", payload: item });
    } else {
      dispatch({ type: "ADD_TO_ORDERS", payload: item });
    }
  }

  return (
    <div className="card">
      <div className="cardHeader">
        <BsHeart
          className={isLiked ? 'red' : 'emptyHeart'}
          size={24}
          onClick={() => hanleLike(item)}
        />
        <img width={'100%'} src={imageUrl} alt="green sneakers" />
      </div>
      <p className="cardTitle">{title}</p>

      <div className="cardFooter">
        <div>
          <span className="tsena">Цена:</span> <br /> <span className="summa">{price} руб.</span>
        </div>
        <div
        className={isOrder ? "orderIcon orderedIcon" : "orderIcon"}
        onClick={setOrder}>
          { isOrder ? <img src="/assets/images/addicon2.png" alt="" /> :  <img src="/assets/images/addicon.png"/>}
          
        </div>
      </div>
    </div>
  );
};