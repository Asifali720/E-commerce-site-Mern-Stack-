import Button from "../button/Button"
import sortIcon from "../../assets/sort.svg"
import { reviews_data } from "../../data/reviews/data"
import ReviewsCard from "../reviews_card/ReviewsCard"
import React from "react"
import { DataContext, DataProviderProps } from "../context/DataProvider"

const Reviews = () => {
  const {setOpenReviews} = React.useContext(DataContext) as DataProviderProps
  const [sortByDate, setSortByDate] = React.useState<string>("latest")
  const [sortReview, setSortReview] = React.useState<any>(reviews_data)

  const handleSortByDate = (e: any)=>{
    setSortByDate(e.target.value)
  }

  const handleSortReviews = ()=>{
    const reviews = reviews_data && reviews_data.slice()
     switch(sortByDate){
       case "latest":
       setSortReview(reviews.sort((a, b)=> b.date - a.date))
       break
       case "oldest":
       setSortReview(reviews.sort((a,b)=> a.date - b.date))
       break
       case "reset":
       setSortReview(reviews)
       break
       default:
       setSortReview(reviews)
     }
  }

  React.useEffect(()=>{
    handleSortReviews()
  }, [sortByDate])

  return (
    <section className="w-full max-w-[1440px] mx-auto px-4 lg:px-10 xl:px-20" id="reviews">
      <div className="w-full flex items-center justify-between mb-6">
        <h3 className="text-xl font-satoshi font-semibold text-black">All Reviews<span className="text-sm text-gray-500"> ({reviews_data.length})</span></h3>
        <div className="flex items-center gap-2">
          <button className="p-3 rounded-full bg-gray-200">
            <img src={sortIcon} alt="" />
          </button>
          <select name="" id="" onChange={handleSortByDate} defaultValue={sortByDate} className="py-3 px-4 rounded-full bg-gray-200 font-satoshi outline-none">
            <option value="latest">Latest</option>
            <option value="oldest">Oldest</option>
            <option value="reset">Reset</option>
          </select>
          <Button label="Write a Review" variant="primary" onClick={()=>setOpenReviews(true)}/>
        </div>
      </div>
      
      <div className="grid sm:grid-cols-2 gap-5 mb-20">
          {
            sortReview.map((props: any)=>(
              <ReviewsCard name={props.name} stars={props.stars} date={props.date} review={props.review}/>
            ))
          }
      </div>

    </section>
  )
}

export default Reviews