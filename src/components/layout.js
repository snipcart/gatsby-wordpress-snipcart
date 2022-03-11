import * as React from "react"
import Header from "./header"
import Footer from "./footer"
import Head from "./head"
import "../styles.css.ts"

export default function Layout(props) {
  return (
    <>
      <Head {...props} />
      <Header />
      {props.children}
      <script async src="https://cdn.snipcart.com/themes/v3.3.3/default/snipcart.js"></script>
      <div hidden id="snipcart" data-api-key="NDYxOGY2Y2MtYjY3MC00MmE1LTkyM2QtYWI5NmU0OWFlOTkwNjM3MTIyOTM2ODEzOTQ5NDkx"></div>
      <Footer />
    </>
  )
}
