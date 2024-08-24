import Navbar from "../Components/Navbar";
import Filters from "../Components/Shop/Filters";
import ShopGall from "../Components/Shop/ShopGall";

export default function Shop() {


    return (
        <div className=" my-[100px] mx-[150px] grid grid-cols-12 gap-5">
            <Filters />
            <ShopGall />

        </div>
    )
}