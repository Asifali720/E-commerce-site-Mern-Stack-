
const ReviewsCard = ({stars, date, review, name}:{stars: string[], date: number, review: string, name: string}) => {

  const newDate = new Date(date)
  return (
    <div className='w-full bg-white p-8 rounded-3xl border border-gray-300'>
      <div className='flex items-center gap-1 mb-2'>
        {
            stars.map((star)=>(
                <img src={star} alt="" className='w-4 h-4'/>
            ))
        }
      </div>
       <h3 className="text-xl font-satoshi font-bold text-black mb-3">{name}</h3>
       <p className="font-satoshi text-gray-500 mb-4">{review}</p>
       <span className="text-sm font-satoshi text-gray-800">Post on {newDate.toDateString()}</span>
    </div>
  )
}

export default ReviewsCard