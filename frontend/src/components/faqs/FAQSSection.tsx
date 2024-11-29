import Accordions from "../accordions/Accordions"
import { data } from "./mock"

const FAQSSection = () => {
  return (
      <section className="w-full mb-10" id="faq_section">
          <div className="w-full max-w-[1440px] mx-auto px-4 lg:px-10 xl:px-20">
              <h2 className="text-3xl font-extrabold font-Roboto text-black tracking-[-0.05em] mb-5">FAQs</h2>
              <div className="grid md:grid-cols-2 gap-5">
                {
                  data.map((item, i)=>(
                    <Accordions key={i} question={item.question} answer={item.answer}/>
                  ))
                }
                 
              </div>
          </div>
      </section>
  )
}

export default FAQSSection