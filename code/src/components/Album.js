import React from 'react';
import Artists from './Artists';
import { Icons } from './Icons';

const Album = (props) => {
	return (
		<article className="article">
			<div className="image-container">
				<a href={props.albumLink} target="_blank" rel="noopener noreferrer">
					<div className="overlay"></div>
					<Icons/>
					<img 
						className="album-image"
						src={props.img} 
						alt="album cover"
					/>
				</a>
			</div>
			<a className="album-link" href={props.albumLink} target="_blank" rel="noopener noreferrer">
				<h2 className="album-name">{props.album}</h2>
			</a>
            <div className="artists-container">
				{props.artists.map((artist) => (
					<Artists 
						key={artist.name} 
						artistName={artist.name} 
						artistLink={artist.external_urls.spotify}
					/>
				))}
			</div>
		</article>
	);
};

export default Album;