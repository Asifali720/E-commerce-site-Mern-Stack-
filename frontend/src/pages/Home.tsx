import BrandsSlider from '../components/brands_slider/BrandsSlider'
import Layout from '../components/Layout'
import TwoColumnHeroSection from '../components/two_column_hero_section/TwoColumnHeroSection'

const Home = () => {
  return (
    <Layout>
       <TwoColumnHeroSection/>
       <BrandsSlider/>
    </Layout>
  )
}

export default Home