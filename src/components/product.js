import * as React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export default function Product(props) {
	return (
		<section>
			<h2>{props.name}</h2>
			{props.image && (
				<GatsbyImage
					alt={props.image.alt}
					image={getImage(props.image)}
				/>
			)}
			<p>{props.description}</p>
			<p>{props.price}</p>
			<button
				className="snipcart-add-item"
				data-item-id={props.id}
				data-item-price={props.price}
				data-item-description={props.description}
				data-item-name={props.name}
				data-item-image={props.image.gatsbyImageData.images.fallback.src}
			>Add to cart</button>
		</section>
	)
}
