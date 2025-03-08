import { listProduct } from "../../api/admin_api/listProduct";
import React, { useContext } from "react";
import { toast } from "react-toastify";
import { DataContext, DataProviderProps, toastStyle } from "../../components/context/DataProvider";
import { useReactTable, getCoreRowModel, flexRender } from "@tanstack/react-table";
import { RiFileEditFill } from "react-icons/ri";
import { MdDelete } from "react-icons/md";
import { ProductProps } from "../../api/admin_api/addProduct";
import { deleteProduct } from "../../api/admin_api/deletProduct";


 const ImageViwerAndRenderer: React.FC<{image: string[]}> = ({image})=>{
  const [isViewImage, setIsViewImage] = React.useState<boolean>(false)
  return(
    <div >
      <img src={image?.[0]} alt="image" width={50} height={50} onClick={()=>setIsViewImage(true)} className="cursor-pointer"/>
      {
        isViewImage &&<div className="fixed bg-white/70 top-0 left-0 w-screen h-screen flex items-center justify-center " onClick={()=>setIsViewImage(false)}>
      <div className="w-full max-w-[400px] h-auto -mt-10">
      <img src={image?.[0]} alt="image" className="w-full h-full"/>
      </div>
      </div>
      }
    </div>
  )
}


const ActionDeleteAndUpdateProduct: React.FC<{original: ProductProps}>= ({original})=>{
  const [isLoading, setIsLoading] = React.useState<boolean>(false)
  const {token} = useContext(DataContext) as DataProviderProps
  console.log("🚀 ~ token: >>> action", token)
  const handleDeleteProduct = async () =>{
    try {
      setIsLoading(true)
      const response = await deleteProduct(original?._id!, token) 
      console.log("🚀 ~ handleDeleteProduct ~ response:", response)
      setIsLoading(false)
      toast.success(response?.data?.message, toastStyle)
    } catch (error: any) {
      toast.error(error?.message, toastStyle)
    }
  }
  return (
    <div className="flex items-center justify-center gap-5">
      <button><RiFileEditFill /></button>
      <button onClick={handleDeleteProduct}><MdDelete /></button>
    </div>
  )
}



const columns = [
  { accessorKey: "image", header: "Image", cell: (info: any) => <ImageViwerAndRenderer image={info?.row?.original?.image}/>},
  { accessorKey: "name", header: "Name" },
  { accessorKey: "category", header: "Category" },
  { accessorKey: "price", header: "Price" },
  { accessorKey: "action", header: "Action", cell: (info: any) => <ActionDeleteAndUpdateProduct original={info?.row?.original} /> },
];


const List = () => {
const [isLoading, setIsLoading] = React.useState<boolean>(false)
const {realProducts, setRealProducts} = useContext(DataContext) as DataProviderProps



  const getAllProducts = async () => {
    try {
      setIsLoading(true)
      const response = await listProduct();
      setIsLoading(false)
      setRealProducts(response?.data);
      return response;
    } catch (err: any | string) {
      console.log(err.message);
      toast.error(err?.message, toastStyle);
    }
  };

  React.useEffect(() => {
    getAllProducts();
  }, []);



  const table = useReactTable({
    data: realProducts,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });




  return <div className="pl-4 lg:pl-10 xl:pl-20 py-10 w-full pr-10">
     <h1 className="font-Roboto text-3xl uppercase tracking-[-0.05em] font-extrabold mb-4">My Product</h1>

     <table className="w-full" style={{ width: "100%", borderCollapse: "collapse" }}>
      <thead>
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <th key={header.id} style={{ padding: "8px", background: "#f4f4f4" }}>
                {flexRender(header.column.columnDef.header, header.getContext())}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {
          isLoading ? (
            [1, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17].map((_, i)=>{
              return (
                <tr key={i}>
                  {[1, 2, 3, 4, 5].map((_, j)=>{
                    return (
                      <td key={j} style={{ padding: "8px" }}>
                        <div className="w-44 h-4 bg-gray-300 animate-pulse rounded"></div>
                      </td>
                    )
                  })}
                </tr>
              )
            })
          ): (
            table.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} style={{ padding: "8px" }}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))
          )
        }

      </tbody>
    </table>

  </div>;
};

export default List;
