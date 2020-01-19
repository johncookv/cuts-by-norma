import React, { useState } from 'react'
import { graphql } from 'gatsby'

import SEO from '~/components/seo'
import ProductForm from '~/components/ProductForm'
import {
  Img,
  Container,
  TwoColumnGrid,
  GridLeft,
  GridRight,
} from '~/utils/styles'
import { ProductTitle, ProductDescription } from './styles'

const ProductPage = ({ data }) => {
  const product = data.shopifyProduct

  const [pageCurrVariant, setPageCurrVariant] = useState('cbn-cuts-style-1')

  const pageCurrVariantData = product.variants.find(
    variant => variant.sku === pageCurrVariant
  )
  console.log('pageCurrVariantData: ', pageCurrVariantData)

  return (
    <>
      <SEO title={product.title} description={product.description} />
      <Container>
        <TwoColumnGrid>
          <GridLeft>
            {product.productType === 'Cuts' ? (
              <Img
                fluid={
                  pageCurrVariantData.image.localFile.childImageSharp.fluid
                }
                key={pageCurrVariantData.image.id}
                alt={pageCurrVariant.title}
              />
            ) : (
              product.images.map(image => (
                <Img
                  fluid={image.localFile.childImageSharp.fluid}
                  key={image.id}
                  alt={product.title}
                />
              ))
            )}
          </GridLeft>
          <GridRight>
            <ProductTitle>{product.title}</ProductTitle>
            <ProductDescription
              dangerouslySetInnerHTML={{ __html: product.descriptionHtml }}
            />
            <ProductForm
              setPageCurrVariant={setPageCurrVariant}
              product={product}
            />
          </GridRight>
        </TwoColumnGrid>
      </Container>
    </>
  )
}

export const query = graphql`
  query($handle: String!) {
    shopifyProduct(handle: { eq: $handle }) {
      id
      title
      handle
      productType
      description
      descriptionHtml
      shopifyId
      options {
        id
        name
        values
      }
      variants {
        id
        title
        sku
        image {
          id
          localFile {
            childImageSharp {
              fluid(maxWidth: 910) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
            }
          }
        }
        price
        availableForSale
        shopifyId
        selectedOptions {
          name
          value
        }
      }
      priceRange {
        minVariantPrice {
          amount
          currencyCode
        }
        maxVariantPrice {
          amount
          currencyCode
        }
      }
      images {
        originalSrc
        id
        localFile {
          childImageSharp {
            fluid(maxWidth: 910) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    }
  }
`

export default ProductPage
