import React from "react"
import Layout from "../components/Layout"
import ProductDetailSection from "../components/product_detail_section/ProductDetailSection"
import {data} from '../data/navigate_sec/data'
import clsx from "clsx"
import DiscriptionSection from "../components/discription_section/DiscriptionSection"
import Reviews from "../components/reviews/Reviews"
import FAQSSection from "../components/faqs/FAQSSection"


const Product = () => {
  const [navigateSec, setNavigateSec] = React.useState<string>("disc")

  return (
     <Layout>
       <ProductDetailSection/>
       <div className="w-full max-w-[1440px] mx-auto px-20 lg:px-10 xl:px-20 flex mb-10">
        {
          data.map((item)=>(
            <button className={clsx("w-full text-center font-medium  pb-5 border-b ", navigateSec === item.type ? "text-black border-b-black": "text-gray-500 border-b-gray-300")} onClick={()=>setNavigateSec(item.type)}>{item.title}</button>
          ))
        }
       </div>
       { navigateSec == "disc" && <DiscriptionSection/> }
       { navigateSec == "reviews" && <Reviews/>}
       { navigateSec == "faq" && <FAQSSection/> }
     </Layout>
  )
}

export default Product