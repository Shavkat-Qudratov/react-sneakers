import React from 'react';
import {Wrapper} from '../../component/Wrapper'
import {Header} from '../../component/Header'
import {Slider} from '../../component/Slider'
import {CardContainer} from '../../component/CardContainer'

import data from '../../data';
import { useSelector } from 'react-redux';

export const Home = () => {
  const { allSneakers } = data;
  const state = useSelector((state) => state);
  // console.log(state);
  return (
    <div className="homeContainer">
      <Wrapper>
        <Header />
        <Slider/>
      </Wrapper>
      <Wrapper>
        <CardContainer items={allSneakers} />
        {/* <CardContainer items={allSneakers} /> */}
      </Wrapper>
    </div>
  );
};