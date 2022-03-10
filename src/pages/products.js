import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import * as sections from "../components/sections"
import ShopItem from "../components/product"

const Fallback = (props) => {
  console.warn(`No component found for: ${props.blocktype}`)
  return false
}

export default function Shop(props) {
  const { product } = props.data

  return (
    <Layout {...Shop}>
      {ShopItem.blocks.map((block, i) => {
        const Component = sections[block.blocktype] || Fallback
        return <Component key={block.id} index={i} {...block} />
      })}
    </Layout>
  )
}

export const query = graphql`
  shopItem {
      id
      name
      image {
        id
        url
      }
      description
      price
    }
  }
`