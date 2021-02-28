import React from 'react'
import Layout from '../components/layout'
import SEO from "../components/seo"

const AboutPage = () => {
    return (
        <Layout>
            <SEO title="About" />
        <div>
            <h1>About Us</h1>
            <p>This is About us !!</p>
        </div>
        </Layout>
    )
}

export default AboutPage;