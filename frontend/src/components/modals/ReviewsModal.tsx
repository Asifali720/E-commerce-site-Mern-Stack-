import { CgClose } from "react-icons/cg"
import Button from "../button/Button"
import StarRating from "../star_rating/StarRating"
import { useContext } from "react"
import { DataContext, DataProviderProps } from "../context/DataProvider"


const ReviewsModal = () => {
    const {setOpenReviews} = useContext(DataContext) as DataProviderProps
  return (
    <div className="w-screen h-screen bg-black/70 flex items-center justify-center fixed top-0 left-0 z-50">
          <div className="p-6 bg-white rounded-2xl w-full sm:max-w-[500px] relative">
            <button className="absolute top-3 right-3" onClick={()=>setOpenReviews(false)}>
               <CgClose size={20}/> 
            </button>
            
            <h3 className="font-Roboto text-black font-extrabold text-2xl tracking-tighter">Leave a Review</h3>
            <StarRating className="my-2"/>
            <textarea name="" id="" placeholder="Write Review" rows={5} className="w-full resize-none font-Roboto placeholder:text-gray-500 outline-none border border-gray-300 rounded-lg p-2 mb-2"></textarea>
            <Button label="Submit" variant="primary"/>
          </div>
    </div>
  )
}

export default ReviewsModal