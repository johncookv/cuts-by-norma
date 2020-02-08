import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import styled from '@emotion/styled'

import ContextProvider from '~/provider/ContextProvider'

import { GlobalStyle } from '~/utils/styles'
import Navigation from '~/components/Navigation'

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 0px 1rem 1.45rem;
`
const Footer = styled.footer`
  padding: 1rem;
  background-color: rebeccapurple;
  color: white;
  display: flex;
`

const Layout = ({ children }) => {
  return (
    <ContextProvider>
      <GlobalStyle />
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            file(relativePath: { eq: "logo-white.png" }) {
              childImageSharp {
                fluid(maxWidth: 225) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={data => (
          <>
            <Navigation logoFluid={data.file.childImageSharp.fluid} />
            <Wrapper>{children}</Wrapper>
            <Footer>
              <div>© {new Date().getFullYear()}, Cuts by Norma</div>
            </Footer>
          </>
        )}
      />
    </ContextProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
