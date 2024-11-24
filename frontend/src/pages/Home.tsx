import BestSellingCollection from '../components/best_selling_collection/BestSellingCollection'
import BrandsSlider from '../components/brands_slider/BrandsSlider'
import BrowseByStyle from '../components/browse_by_style/BrowseByStyle'
import LatestCollection from '../components/latest_collection/LatestCollection'
import Layout from '../components/Layout'
import TwoColumnHeroSection from '../components/two_column_hero_section/TwoColumnHeroSection'

const Home = () => {
  return (
    <Layout>
       <TwoColumnHeroSection/>
       <BrandsSlider/>
       <LatestCollection/>
      <BestSellingCollection/>
      <BrowseByStyle/>
    </Layout>
  )
}

export default Home