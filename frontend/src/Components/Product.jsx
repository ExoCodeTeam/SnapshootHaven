export default function Product({ id, img, name, price }) {


    return (
        <>
            <div key={id} className="flex flex-col items-start gap-[10px]">
                <div className="relative w-full h-0 pb-[100%] bg-gray-200 overflow-hidden flex items-center justify-center rounded-md">
                    <img
                        src={img}
                        alt={name}
                        className="absolute inset-0 m-auto max-w-[80%] max-h-[60%] object-contain"
                    />
                </div>
                <h2 className="text-[18px] ">{name}</h2>
                <h2 className="text-[20px] ">{price}$</h2>
            </div>
        </>

    )
}