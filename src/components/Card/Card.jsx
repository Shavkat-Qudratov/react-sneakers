import React from 'react';
import { BsHeart } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import './Card.css';

export const Card = ({ item, addToFavorites }) => {
  const { id, imageUrl, price, title, isLiked } = item;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="card">
      <div className="cardHeader">
        <BsHeart
          className={isLiked ? 'red' : 'emptyHeart'}
          size={24}
          onClick={() => addToFavorites(item)}
        />
        <img width={'100%'} src={imageUrl} alt="green sneakers" />
      </div>
      <p className="cardTitle">{title}</p>

      <div className="cardFooter">
        <div>
          <span className="tsena">Цена:</span> <br /> <span className="summa">{price} руб.</span>
        </div>
        <div>
          <img src="/assets/icons/add.png" alt="" />
        </div>
      </div>
    </div>
  );
};