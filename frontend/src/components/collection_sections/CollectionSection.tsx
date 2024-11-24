import React from "react";
import { DataContext, DataProviderProps } from "../context/DataProvider";
import ProductItem from "../product_item/ProductItem";
import { IoChevronDownCircleOutline } from "react-icons/io5";
import clsx from "clsx";

const CollectionSection = () => {
    const [show, setShow] = React.useState(false)
    const [filterProducts, setFilterProducts] = React.useState<any[]>([])
    const [category , setCategory] = React.useState<any[]>([])
    const [sortByRange, setSortByRange] = React.useState<String>('relavent')
    const [subCategory , setSubCategory] = React.useState<any[]>([])
    const {products, currency, search} = React.useContext(DataContext) as DataProviderProps
    console.log("🚀 ~ CollectionSection ~ search:", search)


    const handleCategory = (e: any) => {
        if(category.includes(e.target.value)){
            setCategory(prev => prev.filter(item => item !== e.target.value))
        }else{
            setCategory(prev => [...prev, e.target.value])
        }
    }
    const handleSubCategory = (e: any) => {
        if(subCategory.includes(e.target.value)){
            setSubCategory(prev => prev.filter(item => item !== e.target.value))
        }else{
            setSubCategory(prev => [...prev, e.target.value])
        }
    } 

    const handleSortByRange = (e: any) => {
        setSortByRange(e.target.value)
    }

    const handleSortProducts = () => {
        let filterProducts = products && products.slice()
        switch(sortByRange){
            case 'high_to_low':
                setFilterProducts(filterProducts.sort((a, b) => b.price - a.price))
                break
            case 'low_to_high':
                setFilterProducts(filterProducts.sort((a, b) => a.price - b.price))
                break
            default:
               handleApplyFilter()
        }
    }

    const handleApplyFilter =()=>{
          let productCp =  products && products.slice()

           if(search.length > 0){
               productCp = productCp.filter((item)=> item.name.toLowerCase().includes(search.toLowerCase()))
           }
           if(category.length > 0){
               productCp = productCp.filter((item)=> category.includes(item.category))
           } else if(subCategory.length > 0){
               productCp = productCp.filter((item)=> subCategory.includes(item.subCategory))
           }
           setFilterProducts(productCp)
        }
  

    React.useEffect(() => {
       handleApplyFilter()
    }, [category, subCategory, search])

    React.useEffect(() => {
        handleSortProducts()
    }, [sortByRange])



  return (
    <section className="mb-10 mt-[140px] lg:mb-20" id="collection_section">
      <div className="w-full max-w-[1440px] mx-auto flex flex-col sm:flex-row px-4 lg:px-10 xl:px-20 gap-6 md:gap-10 items-start justify-center">
          <button onClick={() => setShow(!show)} className="w-full font-satoshi font-bold text-xl p-2 border rounded-2xl border-gray-300 justify-between sm:hidden flex items-center gap-2"><span>Filters</span><IoChevronDownCircleOutline  className={clsx("transition-all ease-in-out duration-300", show ? "rotate-180" : 'rotate-0')}/></button>
        <div className={clsx("w-full sm:w-1/4 transition-all ease-in-out duration-300 md:p-10 h-0 overflow-hidden border border-gray-300 rounded-2xl  sm:h-auto", show ? "h-auto p-6": 'h-0 p-0 sm:p-6')}>
        
          <h3 className="font-satoshi font-bold text-xl mb-5 hidden sm:block">Filters</h3>
          <div className="w-full border-b sm:border-y border-gray-300 pb-6 sm:py-6">
            <h3 className="font-satoshi font-bold text-base mb-1">Categories</h3>
            <div className="flex items-center gap-2 mb-2">
                <input type="checkbox" name="Men" id="" value="Men" onChange={handleCategory}/>
                <label htmlFor="">Men</label>
            </div>
            <div className="flex items-center gap-2 mb-2">
                <input type="checkbox" name="Women" id="" value="Women" onChange={handleCategory}/>
                <label htmlFor="">Women</label>
            </div>
            <div className="flex items-center gap-2">
                <input type="checkbox" name="Kids" id="" value="Kids" onChange={handleCategory}/>
                <label htmlFor="">Kids</label>
            </div>
          </div>

          <div className="w-full py-6">
          <h3 className="font-satoshi font-bold text-base mb-1">Type</h3>
            <div className="flex items-center gap-2 mb-2">
                <input type="checkbox" name="Topwear" id="" onChange={handleSubCategory} value="Topweare"/>
                <label htmlFor="">Topware</label>
            </div>
            <div className="flex items-center gap-2 mb-2">
                <input type="checkbox" name="Bottomwear" id="" onChange={handleSubCategory} value="Bottomwear"/>
                <label htmlFor="">Bottomwear</label>
            </div>
            <div className="flex items-center gap-2">
                <input type="checkbox" name="Winterwear" id="" onChange={handleSubCategory} value="Winterwear"/>
                <label htmlFor="">Winterwear</label>
            </div>
          </div>
        </div>

        <div className="w-full sm:w-3/4">
          <div className="w-full flex flex-col sm:flex-row items-center sm:justify-between mb-6">
             <h2 className="font-satoshi font-bold text-3xl">All Collection</h2>
             <select name="" id="" onChange={handleSortByRange} defaultValue={sortByRange as string} className="bg-transparent border-b border-b-gray-300 pb-1 outline-none font-satoshi text-zinc-800">
                <option value="high_to_low">Sort by: High to Low</option>
                <option value="low_to_high">Sort by: Low to High</option>
                <option value="relavent">Sort by: Relavent</option>
             </select>
          </div>

       {
        filterProducts.length > 0 ?<div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
           { 
            filterProducts && filterProducts.map((product: any) => {
                return <ProductItem {...product} currency={currency}/>
            })
           }
          </div> : <p className="font-satoshi text-center text-xl">No product found...!</p>
       }       
        </div>
      </div>
    </section>
  );
};

export default CollectionSection;
