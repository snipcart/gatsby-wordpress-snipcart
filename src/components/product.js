import * as React from "react"
import { graphql } from "gatsby"
import {
  Container,
  Section,
  FlexList,
  Text,
  Kicker,
  Heading,
  Subhead,
  Box,
  Icon,
  LinkList,
} from "./ui"

function ShopItem(props) {
    return (
      <Box center>
        {props.image && (
          <Icon alt={props.image.alt} image={props.image} size="large" />
        )}
        <Subhead>{props.heading}</Subhead>
        <Text>{props.text}</Text>
        <Text>{props.text}</Text>

      </Box>
    )
  }
  
  export default function ShopItem(props) {
    return (
        <Section>
        <Container>
          <Box center paddingY={4}>
            <Heading>
              {props.kicker && <Kicker>{props.kicker}</Kicker>}
              {props.heading}
            </Heading>
            {props.text && <Text>{props.text}</Text>}
          </Box>
          <FlexList gap={4} variant="responsive">
            {props.content.map((product) => (
              <li key={product.id}>
                <Product {...product} />
              </li>
            ))}
          </FlexList>
        </Container>
      </Section>
    )
  }
  
  export const query = graphql`
  shopItem {
    id
    name
    image {
        alt
        id
        gatsbyImageData
    }
    description
    price
    }