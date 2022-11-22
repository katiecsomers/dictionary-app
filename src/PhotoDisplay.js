import React from "react";

import "./PhotoDisplay.css";

export default function PhotoDisplay(props) {
	if (props.data) {
		return (
			<div className="PhotoDisplay row">
				{props.data.map(function (photo, index) {
					if (index < 6)
						return (
							<div
								className="col-4 "
								key={index}
							>
								<a
									href={photo.links.html}
									target="_blank"
									rel="noreferrer"
								>
									<img
										src={photo.urls.regular}
										className="img-fluid shadow"
										alt={photo.alt_description}
									/>
								</a>
							</div>
						);
					else {
						return null;
					}
				})}
			</div>
		);
	} else {
		return null;
	}
}
