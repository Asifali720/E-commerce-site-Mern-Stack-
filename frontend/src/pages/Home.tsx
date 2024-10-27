import BrandsSlider from '../components/brands_slider/BrandsSlider'
import LatestCollection from '../components/latest_collection/LatestCollection'
import Layout from '../components/Layout'
import TwoColumnHeroSection from '../components/two_column_hero_section/TwoColumnHeroSection'

const Home = () => {
  return (
    <Layout>
       <TwoColumnHeroSection/>
       <BrandsSlider/>
       <LatestCollection/>
    </Layout>
  )
}

export default Home