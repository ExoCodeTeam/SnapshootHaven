export default function Product({ id, img, name, price }) {


    return (
        <>
            <div key={id} className="flex flex-col items-start gap-[5px]
            lg:gap-[8px]
            xl:gap-[10px]">
                <div className="relative w-full h-0 pb-[100%] bg-gray-200 overflow-hidden flex items-center justify-center rounded-md">
                    <img
                        src={img}
                        alt={name}
                        className="absolute inset-0 m-auto max-w-[80%] max-h-[60%] object-contain"
                    />
                </div>
                <h2 className="text-[12px] 
                xl:text-[18px]
                 lg:text-[14px]">{name}</h2>
                <h2 className="text-[14px] 
                xl:text-[20px]
                 lg:text-[16px]">{price}$</h2>
            </div>
        </>

    )
}