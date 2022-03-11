import * as React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export default function Product(props) {
	return (
		<section>
			{props.image && (
				<GatsbyImage
					alt={props.image.alt}
					image={getImage(props.image)}
				/>
			)}
			<h2>{props.name}</h2>
			<p>{props.description}</p>
			<p>{props.price}</p>
			<button
				className="snipcart-add-item"
				data-item-id={props.id}
				data-item-price={props.price}
				data-item-url="/shop"
				data-item-description={props.description}
				data-item-name={props.name}
				data-item-image={props.image.gatsbyImageData.images.fallback.src}
			>Add to cart</button>
		</section>
	)
}
