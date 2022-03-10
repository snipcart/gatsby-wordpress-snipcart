import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import * as sections from "../components/sections"
import ShopItem from "../components/product"

const Fallback = (props) => {
  console.warn(`No component found for: ${props.blocktype}`)
  return false
}

export default function Products(props) {
  const { products } = props.data

  return (
    <Layout>
      {products.nodes.forEach(product => {
        return <button class="snipcart-add-item" data-id={product.id}>Add to cart</button>
      })}
    </Layout>
  )
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
