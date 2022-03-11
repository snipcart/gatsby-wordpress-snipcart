import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Product from '../components/product'


export default function Products(props) {
  const { products } = props.data
  console.log(products)
  return (
    <Layout>
      {products.nodes.map(({ product }) => {
        return <Product key={product.id} {...product} />
      })}
      {/* {products.nodes.forEach(product => {
        return <button class="snipcart-add-item" data-id={product.id}>Add to cart</button>
      })} */}
    </Layout>
  )
  // return (
  //   <span>banana</span>
  // )
}

export const query = graphql`
  {
    products: allWpPost {
      nodes {
        product {
          description
          id
          name
          price
          fieldGroupName
        }
      }
    }
  }
`
