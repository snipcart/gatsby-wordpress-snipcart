import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Product from '../components/product'


export default function Products(props) {
  const { products } = props.data
  console.log(products)
  return (
    <Layout>
    		<h1>Headless Art</h1>
      {products.nodes.map(({ product }) => {
        return <Product key={product.id} {...product} />
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
          image {
            id
            gatsbyImageData
            alt
          }
        }
      }
    }
  }
`
