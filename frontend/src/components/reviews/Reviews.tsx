import Button from "../button/Button"
import sortIcon from "../../assets/sort.svg"
import { reviews_data } from "../../data/reviews/data"
import ReviewsCard from "../reviews_card/ReviewsCard"

const Reviews = () => {
  return (
    <section className="w-full max-w-[1440px] mx-auto px-4 lg:px-10 xl:px-20" id="reviews">
      <div className="w-full flex items-center justify-between mb-6">
        <h3 className="text-xl font-satoshi font-semibold text-black">All Reviews<span className="text-sm text-gray-500"> ({reviews_data.length})</span></h3>
        <div className="flex items-center gap-2">
          <button className="p-3 rounded-full bg-gray-200">
            <img src={sortIcon} alt="" />
          </button>
          <select name="" id="" className="py-3 px-4 rounded-full bg-gray-200 font-satoshi outline-none">
            <option value="latest">Latest</option>
            <option value="24hr">24hr before</option>
            <option value="last_week">Last week</option>
            <option value="last_month">Last month</option>
          </select>
          <Button label="Write a Review" variant="primary"/>
        </div>
      </div>
      
      <div className="grid sm:grid-cols-2 gap-5 mb-20">
          {
            reviews_data.map((props)=>(
              <ReviewsCard name={props.name} stars={props.stars} date={props.date} review={props.review}/>
            ))
          }
      </div>

    </section>
  )
}

export default Reviews