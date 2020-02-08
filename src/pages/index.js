import React from 'react'
import { Link } from 'gatsby'

import SEO from '~/components/seo'
import ProductGrid from '~/components/ProductGrid'

const IndexPage = () => (
  <>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Cuts by Norma</h1>
    <p>Where shirts become art! Design update coming soon!</p>
    <ProductGrid />
  </>
)

export default IndexPage
