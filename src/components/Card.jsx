import React from 'react';

const Card = ({ name, email, id }) => {
	return (
		<div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 tc">
			<img alt='photo' src={`https://robohash.org/${id}?size=200x200`} width="200" height="200" />
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>
	);
}

export default Card;