import React from "react";
import { IoCloudUpload } from "react-icons/io5";
import Button from "../../components/button/Button";
import clsx from "clsx";

const Add = () => {
  const [image1, setImage1] = React.useState<File | undefined>();

  const [image2, setImage2] = React.useState<File | undefined>();
  const [image3, setImage3] = React.useState<File | undefined>();
  const [name, setName] = React.useState<string>("");
  const [description, setDescripttion] = React.useState<string>("");
  const [category, setCategory] = React.useState<string>("men");
  const [subCategory, setSubCategory] = React.useState<string>("topwear");
  const [price, setPrice] = React.useState<string>("");
  const [sizes, setSizes] = React.useState<string[]>([]);
  const [bestSelling, setBestSelling] = React.useState<boolean>(false);

  const handleSubmitProduct = async () => {
    try {
      console.log("Submitting product...");

      const formData = new FormData();
      formData.append("name", name);
      formData.append("description", description);
      formData.append("category", category);
      formData.append("subCategory", subCategory);
      formData.append("price", price);
      formData.append("sizes", JSON.stringify(sizes));
      formData.append("bestSelling", JSON.stringify(bestSelling));
      image1 && formData.append("image1", image1);
      image2 && formData.append("image2", image2);
      image3 && formData.append("image3", image3);

      for (const [key, value] of formData.entries()) {
        console.log(`${key}:`, value);
      }
      console.log("🚀 ~ handleSubmitProduct ~ formData:", formData);
    } catch (err: any | string) {
      console.log(err.message);
    }
  };

  return (
    <div className="pl-4 lg:pl-10 xl:pl-20 py-10">
      <h2 className="font-Roboto text-xl uppercase tracking-[-0.05em] font-extrabold mb-4">
        Upload Image
      </h2>
      <div className="flex items-center gap-5">
        <label
          htmlFor="image1"
          className="w-20 h-20 border-2 border-gray-400 border-dashed flex items-center justify-center cursor-pointer"
        >
          {!image1 ? (
            <IoCloudUpload size={30} color="#9ca3af" />
          ) : (
            <img
              src={URL.createObjectURL(image1)}
              alt=""
              className="w-full h-full object-cover"
            />
          )}

          <input
            type="file"
            id="image1"
            hidden
            onChange={(e: any) => setImage1(e.target.files[0])}
          />
        </label>
        <label
          htmlFor="image2"
          className="w-20 h-20 border-2 border-gray-400 border-dashed flex items-center justify-center cursor-pointer"
        >
          {!image2 ? (
            <IoCloudUpload size={30} color="#9ca3af" />
          ) : (
            <img
              src={URL.createObjectURL(image2)}
              alt=""
              className="w-full h-full object-cover"
            />
          )}
          <input
            type="file"
            id="image2"
            hidden
            onChange={(e: any) => setImage2(e.target.files[0])}
          />
        </label>
        <label
          htmlFor="image3"
          className="w-20 h-20 border-2 border-gray-400 border-dashed flex items-center justify-center cursor-pointer"
        >
          {!image3 ? (
            <IoCloudUpload size={30} color="#9ca3af" />
          ) : (
            <img
              src={URL.createObjectURL(image3)}
              alt=""
              className="w-full h-full object-cover"
            />
          )}
          <input
            type="file"
            id="image3"
            hidden
            onChange={(e: any) => setImage3(e.target.files[0])}
          />
        </label>
      </div>
      <div className="my-4 flex flex-col">
        <label
          htmlFor=""
          className="font-Roboto text-xl uppercase tracking-[-0.05em] font-extrabold mb-1"
        >
          Product name
        </label>
        <input
          type="text"
          name=""
          id=""
          className="py-2 px-4 w-full max-w-[500px] border border-gray-200 rounded-lg outline-none focus:border-gray-600 font-satoshi text-slate-900"
          onChange={(e) => setName(e.target.value)}
          placeholder="Type here"
        />
      </div>
      <div className="my-4 flex flex-col">
        <label
          htmlFor=""
          className="font-Roboto text-xl uppercase tracking-[-0.05em] font-extrabold mb-1"
        >
          Product description
        </label>
        <textarea
          name=""
          id=""
          className="py-2 px-4 w-full max-w-[500px] border border-gray-200 rounded-lg outline-none focus:border-gray-600 resize-none font-satoshi text-slate-900"
          placeholder="Write discription here"
          onChange={(e) => setDescripttion(e.target.value)}
        ></textarea>
      </div>
      <div className="flex items-center gap-5">
        <div className="flex flex-col">
          <label
            htmlFor=""
            className="font-Roboto text-xl uppercase tracking-[-0.05em] font-extrabold mb-1"
          >
            Product category
          </label>
          <select
            name=""
            id=""
            className="py-2 px-4 rounded-lg border border-gray-400 font-satoshi font-semibold text-slate-800 outline-none"
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="men">Men</option>
            <option value="women">Women</option>
            <option value="kids">Kids</option>
          </select>
        </div>

        <div className="flex flex-col">
          <label
            htmlFor=""
            className="font-Roboto text-xl uppercase tracking-[-0.05em] font-extrabold mb-1"
          >
            Sub category
          </label>
          <select
            name=""
            id=""
            className="py-2 px-4 rounded-lg border border-gray-400 font-satoshi font-semibold text-slate-800 outline-none"
            defaultValue={"topwear"}
            onChange={(e) => setSubCategory(e.target.value)}
          >
            <option value="topwear">Topwear</option>
            <option value="bottomwear">Bottomwear</option>
            <option value="winterwear">Winterwear</option>
          </select>
        </div>
        <div className="flex flex-col">
          <label
            htmlFor=""
            className="font-Roboto text-xl uppercase tracking-[-0.05em] font-extrabold mb-1"
          >
            Product Price
          </label>
          <input
            type="number"
            name=""
            id=""
            value={price}
            className="py-2 rounded-lg border w-20 border-gray-400 font-satoshi font-semibold text-slate-800 outline-none"
            placeholder="00"
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
      </div>

      <div className="my-4">
        <label
          htmlFor=""
          className="font-Roboto text-xl uppercase tracking-[-0.05em] font-extrabold inline-block mb-1"
        >
          Product Sizes
        </label>
        <div className="flex items-center gap-2">
          <div
            className={clsx(
              "w-10 h-10  flex items-center justify-center font-satoshi font-semibold  text-base cursor-pointer",
              sizes.includes("S")
                ? "bg-pink-400 text-white"
                : "bg-gray-200 text-slate-600"
            )}
            onClick={() =>
              setSizes((prev) =>
                prev.includes("S")
                  ? prev.filter((item) => item !== "S")
                  : [...prev, "S"]
              )
            }
          >
            <span>S</span>
          </div>
          <div
            className={clsx(
              "w-10 h-10 flex items-center justify-center font-satoshi font-semibold  text-base cursor-pointer",
              sizes.includes("M")
                ? "bg-pink-400 text-white"
                : "bg-gray-200 text-slate-600"
            )}
            onClick={() =>
              setSizes((prev) =>
                prev.includes("M")
                  ? prev.filter((item) => item !== "M")
                  : [...prev, "M"]
              )
            }
          >
            <span>M</span>
          </div>
          <div
            className={clsx(
              "w-10 h-10 flex items-center justify-center font-satoshi font-semibold text-base cursor-pointer",
              sizes.includes("L")
                ? "bg-pink-400 text-white"
                : "bg-gray-200 text-slate-600"
            )}
            onClick={() =>
              setSizes((prev) =>
                prev.includes("L")
                  ? prev.filter((item) => item !== "L")
                  : [...prev, "L"]
              )
            }
          >
            <span>L</span>
          </div>
          <div
            className={clsx(
              "w-10 h-10 flex items-center justify-center font-satoshi font-semibold text-base cursor-pointer",
              sizes.includes("XL")
                ? "bg-pink-400 text-white"
                : "bg-gray-200 text-slate-600"
            )}
            onClick={() =>
              setSizes((prev) =>
                prev.includes("XL")
                  ? prev.filter((item) => item !== "XL")
                  : [...prev, "XL"]
              )
            }
          >
            <span>XL</span>
          </div>
          <div
            className={clsx(
              "w-10 h-10 flex items-center justify-center font-satoshi font-semibold  text-base cursor-pointer",
              sizes.includes("XXL")
                ? "bg-pink-400 text-white"
                : "bg-gray-200 text-slate-600"
            )}
            onClick={() =>
              setSizes((prev) =>
                prev.includes("XXL")
                  ? prev.filter((item) => item !== "XXL")
                  : [...prev, "XXL"]
              )
            }
          >
            <span>XXL</span>
          </div>
        </div>
      </div>
      <div className="flex gap-2">
        <input
          type="radio"
          name="best_seller"
          id=""
          onChange={() => setBestSelling((prev) => !prev)}
        />
        <label
          htmlFor="best_seller"
          className="font-satoshi font-medium text-slate-500"
        >
          Add to bestseller
        </label>
      </div>
      <Button
        label="Add"
        variant="primary"
        className="mt-5"
        onClick={handleSubmitProduct}
      />
    </div>
  );
};

export default Add;
