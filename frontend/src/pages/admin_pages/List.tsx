import { listProduct } from "../../api/admin_api/listProduct";
import { ProductProps } from "../../api/admin_api/addProduct";
import React from "react";
import { toast } from "react-toastify";
import { toastStyle } from "../../components/context/DataProvider";
import { useReactTable, getCoreRowModel, flexRender } from "@tanstack/react-table";



const data = [
  { id: 1, name: "John Doe", age: 25 },
  { id: 2, name: "Jane Smith", age: 30 },
  { id: 3, name: "Alice Brown", age: 22 },
];

const columns = [
  { accessorKey: "id", header: "ID" },
  { accessorKey: "name", header: "Name" },
  { accessorKey: "age", header: "Age" },
];


const List = () => {

  const [products, setProducts] = React.useState<ProductProps[]>([]);

console.log("🚀 ~ listProduct:", listProduct)


  const getAllProducts = async () => {
    try {
      const response = await listProduct();
      setProducts(response?.data);
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
    data,
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
        {table.getRowModel().rows.map((row) => (
          <tr key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <td key={cell.id} style={{ padding: "8px" }}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>

  </div>;
};

export default List;
