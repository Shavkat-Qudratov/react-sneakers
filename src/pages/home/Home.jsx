import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Wrapper } from '../../component/Wrapper'
import { Header } from '../../component/Header'
import { Slider } from '../../component/Slider'
import { CardContainer } from '../../component/CardContainer'

import { useEffect } from 'react';
import { fetchItems } from '../../redux/thunk';

export const Home = () => {
  const { allSneakers } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchItems(' http://localhost:5000/allSneakers', 'SAVE_ALL_SNEAKERS'));
  }, [])

  return (
    <div className="homeContainer">
      <Wrapper>
        <Header />
        <Slider />
      </Wrapper>
      <Wrapper>
        <CardContainer items={allSneakers} />

      </Wrapper>
    </div>
  );
};