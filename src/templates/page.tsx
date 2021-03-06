import React from 'react'
import { graphql } from 'gatsby'

import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'

import SEO from '../components/seo'
import MdxRenderer from '../components/mdxRenderer'
import { PageTemplate, Page } from '../models'
import Hero from '../components/hero'

export interface PageTemplateProps extends PageTemplate {
  pageContext: { pageId: string }
  data: { page: Page }
}

function PostTemplate({ path, data }: PageTemplateProps) {
  const { body, frontmatter } = data.page
  const { title, excerpt } = frontmatter

  return (
    <>
      <SEO title={title} description={excerpt} path={path} />

      <Hero title={title} description={excerpt} />

      <Container maxWidth="md">
        <MdxRenderer>{body}</MdxRenderer>
        <Box py={3} />
      </Container>
    </>
  )
}

export default PostTemplate

export const pageQuery = graphql`
  query($id: String!) {
    page: mdx(id: { eq: $id }) {
      ...Page
    }
  }
`
