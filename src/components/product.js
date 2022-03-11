import * as React from "react"

export default function Product(props) {
	return (
		<section>
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
			>Add to cart</button>
		</section>
	)
}
