import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import List from "../components/list"
import SEO from "../components/seo"

import data from "../data/pokedex.json"

const IndexPage = () => (
  <Layout>
    <SEO title="Pokemon Sword and Shield Team Builder" />

    <div>
      <List data={data} />
    </div>
  </Layout>
)

export default IndexPage
