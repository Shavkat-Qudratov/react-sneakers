import React from 'react';
import { MdOutlineClose } from 'react-icons/md';

import './Modal.css';

export const Modal = ({ isOpen, close }) => {
  return (
    <div className={isOpen ? 'modalWrapper' : 'hideModal'}>
      <div className={isOpen ? 'childrenModal' : 'hideChildren'}>
        <div className="modal_header">
          <h1>Корзина</h1>
          <button className="modal_close_btn" onClick={close}>
            <MdOutlineClose className="modal_close_icon" size={72} />
          </button>
        </div>

        <section className="modal_body">
          <div className="item">
            <div>
              <img
                width={'70px'}
                src="https://github.com/Shavkat-Qudratov/react-sneakers/blob/main/public/assets/images/1.jpg?raw=true"
                alt="no"
              />
            </div>
            <div className="item_title">
              <p className="title">Мужские Кроссовки Nike Blazer Mid Sued</p>
              <p className="summa">12 999 руб. </p>
            </div>
            <div>
              <button className="modal_close_btn" onClick={() => {}}>
                <MdOutlineClose className="modal_close_icon" size={72} />
              </button>
            </div>
          </div>

         
        </section>
      </div>
    </div>
  );
};