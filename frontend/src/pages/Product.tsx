import React, { useContext } from "react";
import Layout from "../components/Layout";
import ProductDetailSection from "../components/product_detail_section/ProductDetailSection";
import { data } from "../data/navigate_sec/data";
import clsx from "clsx";
import DiscriptionSection from "../components/discription_section/DiscriptionSection";
import Reviews from "../components/reviews/Reviews";
import FAQSSection from "../components/faqs/FAQSSection";
import {
  DataContext,
  DataProviderProps,
} from "../components/context/DataProvider";
import ReviewsModal from "../components/modals/ReviewsModal";
import RelatedProductSection from "../components/related_product/RelatedProductSection";
import { useParams } from "react-router-dom";

const Product = () => {
  const { id } = useParams();
  const [navigateSec, setNavigateSec] = React.useState<string>("disc");
  const { openReviews, products } = useContext(
    DataContext
  ) as DataProviderProps;
  const [product, setProduct] = React.useState<any | null>(null);
  const [img, setImg] = React.useState<string>("");

  const fetchProduct = () => {
    if (!products || !Array.isArray(products) || !id) return;

    const productCopy = products.find((item: any) => item._id === id);
    if (productCopy) {
      setProduct(productCopy);
      setImg(productCopy.image?.[0] || "");
    } else {
      console.warn("🚀 ~ Product not found for ID:", id);
    }
  };

  React.useEffect(() => {
    fetchProduct();
  }, [products, id]);

  return (
    <Layout>
      {openReviews && <ReviewsModal />}
      {product ? (
        <>
          <ProductDetailSection img={img} setImg={setImg} product={product} />

          <div className="w-full max-w-[1440px] mx-auto px-20 lg:px-10 xl:px-20 flex mb-10">
            {data.map((item) => (
              <button
                className={clsx(
                  "w-full text-center font-medium  pb-5 border-b ",
                  navigateSec === item.type
                    ? "text-black border-b-black"
                    : "text-gray-500 border-b-gray-300"
                )}
                onClick={() => setNavigateSec(item.type)}
              >
                {item.title}
              </button>
            ))}
          </div>
          {navigateSec == "disc" && <DiscriptionSection />}
          {navigateSec == "reviews" && <Reviews />}
          {navigateSec == "faq" && <FAQSSection />}
          <RelatedProductSection
            subCategory={product.subCategory}
            category={product.category}
          />
        </>
      ) : (
        ""
      )}
    </Layout>
  );
};

export default Product;
