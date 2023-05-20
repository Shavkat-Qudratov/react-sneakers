
import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';

import data from './data';
import './SliderStyles.css';

export  function Slider() {
	const [ people, setPeople ] = useState(data);
	const [ index, setIndex ] = useState(0);

	useEffect(
		() => {
			const lastIndex = people.length - 1;
			if (index < 0) {
				setIndex(lastIndex);
			}
			if (index > lastIndex) {
				setIndex(0);
			}
		},
		[ index, people ]
	);


	return (

		<section className="section">
		     <hr
        style={{
          position:'absolute',
            height: '0px',
            left: '135px',
            top: '173px',
            width:'80%',
            border:'1px solid #EAEAEA'
        }}
    />
	
			<div className="section-center">
				{people.map((person, personIndex) => {
					const { id, image, } = person;
					

					let position = 'nextSlide';
					if (personIndex === index) {
						position = 'activeSlide';
					}
					if (personIndex === index - 1 || (index === 0 && personIndex === people.length - 1)) {
						position = 'lastIndex';
					}

					return (
						<article className={position} >
							<img src={image}  className="person-img" />
						
						</article>
					);
				})}
				<button className="prev" onClick={() => setIndex(index - 1)}>
					<FiChevronLeft />
				</button>
				<button className="next" onClick={() => setIndex(index + 1)}>
					<FiChevronRight />
				</button>
			</div>
		</section>
	);
}

