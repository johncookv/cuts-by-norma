import React from 'react'
import { Link } from 'gatsby'

import SEO from '~/components/seo'
import ProductGrid from '~/components/ProductGrid'

const IndexPage = () => (
  <>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Cuts by Norma - where shirts become art!</h1>
    <h3>*Free Shipping Over $75!*</h3>
    <ProductGrid />
  </>
)

export default IndexPage
