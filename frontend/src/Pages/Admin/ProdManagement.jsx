import filter from "../../assets/Admin/filter.svg"
import settings from "../../assets/Admin/settings-w.svg"
import plus from "../../assets/Admin/+.svg"
import Table from "../../Components/Admin/Table"






export default function ProdManagment() {


    const sampleProducts = [
        { id: 1, name: 'Camera', price: 1000, category: 'Cameras' },
        { id: 2, name: 'Lens', price: 200, category: 'Lenses' },
        { id: 3, name: 'Tripod', price: 150, category: 'Accessories' },
        { id: 4, name: 'Camera', price: 1000, category: 'Cameras' },
        { id: 5, name: 'Lens', price: 200, category: 'Lenses' },
        { id: 6, name: 'Tripod', price: 150, category: 'Accessories' },
        { id: 7, name: 'Camera', price: 1000, category: 'Cameras' },
        { id: 8, name: 'Lens', price: 200, category: 'Lenses' },
        { id: 9, name: 'Tripod', price: 150, category: 'Accessories' },

        // Add more products here
    ];





    return (
        <div style={{ height: 'calc(100vh - 80px)' }} className="flex flex-col py-[30px]  gap-10 px-[30px]  ">
            <h1 className=" text-[32px] font-medium text-[#303841]">Product Management</h1>
            <div className="flex w-full justify-between items-center">
                <input type="text" placeholder="Searche ..." className=" h-[50px] max-w-[40%]  p-[10px] text-[18px] placeholder:text-[20px] placeholder:text-[#303841] placeholder:text-opacity-30 
            placeholder:font-semibold focus:outline-none focus:border-[#F6C90E] focus:border-b-2 " />
                <div className="flex  gap-5">
                    <button className="bg-[#3A4750] flex gap-[10px] px-[20px]  h-[40px] items-center justify-center rounded-md">
                        <img src={filter} className=" h-[20px]" alt="" />
                        <h1 className="text-[16px] text-white">Filters</h1>
                    </button>
                    <button className="bg-[#3A4750]  flex gap-[10px] px-[20px]  h-[40px] items-center justify-center rounded-md whitespace-nowrap">
                        <img src={settings} className=" h-[20px]" alt="" />
                        <h1 className="text-[16px] text-white">Category Management</h1>
                    </button>
                    <button className="bg-[#F6C90E] flex gap-[10px] px-[20px]  h-[40px] items-center justify-center rounded-md whitespace-nowrap">
                        <img src={plus} className=" h-[20px]" alt="" />
                        <h1 className="text-[16px] font-medium text-[#3A4750]">Add Product</h1>
                    </button>
                </div>
            </div>

            <div className="h-full">
                <Table products={sampleProducts} />

            </div>

        </div>
    )
}