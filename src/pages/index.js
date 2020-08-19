import React from 'react'

import SEO from '~/components/seo'
import ProductGrid from '~/components/ProductGrid'

const IndexPage = () => (
  <>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Cuts by Norma - where shirts become art!</h1>
    <h3>*Free Shipping on orders $75 or more!*</h3>
    <ProductGrid />
  </>
)

export default IndexPage
