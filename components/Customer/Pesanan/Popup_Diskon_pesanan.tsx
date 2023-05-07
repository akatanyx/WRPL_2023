import Card_Diskon from "@/components/Customer/Pesanan/Card_Diskon"

export default function diskon ({closeModal}:any) {
    
    return (
        <div className="font-poppins absolute bg-white z-10">

            {/* Header */}
            <div>
                <div className='flex justify-between items-center w-screen mt-[28px] ml-[22px]'>
                    <div className='flex items-center'>
                        <button onClick={closeModal}>
                            <img src="/icon_c_promo_back.svg"/>
                        </button>

                        <img src="/logo_promo.svg" className="translate-x-[18px]"/>
                        <h1 className='font-bold font-poppins text-[21px] translate-x-[28px]'>
                            Promo
                        </h1>
                    </div>
                </div>
            </div>
            
            <div className="mb-7"></div>
            
            {/* Diskon */}
            <div className="flex flex-col gap-y-4">
                <Card_Diskon />
                <Card_Diskon />
                <Card_Diskon />
                <Card_Diskon />
                <Card_Diskon />
            </div>

            <div className="mb-7"></div>
            

        </div>
    )
}