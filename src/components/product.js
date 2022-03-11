import * as React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {
	Button,
  } from "./ui"

export default function Product(props) {
	return (
		<section style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
			<h2>{props.name}</h2>
			{props.image && (
				<GatsbyImage
					style={{ display: 'block', width: '50%' }}
					alt={props.image.alt}
					image={getImage(props.image)}
				/>
			)}
			<p style={{ width: '50%' }}>{props.description}</p>
			<p style={{ width: '50%' }}>{props.price}$</p>
			<Button
				className="snipcart-add-item"
				data-item-id={props.id}
				data-item-price={props.price}
				data-item-description={props.description}
				data-item-name={props.name}
				data-item-image={props.image.gatsbyImageData.images.fallback.src}
			>Add to cart</Button>
		</section>
	)
}
