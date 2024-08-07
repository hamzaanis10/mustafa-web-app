import Image from "next/image"
import AppCheckBox from '../app.checkbox/app.checkbox'

const AppPaymentMethod = () => {
    const balance = 40
    return (
        <div className="p-4 bg-white border-round" style={{ width: "100%" }}>
            <div className='ml-2'>
                <span className="text-2xl font-semibold">Payment Method</span>
                <div className='flex mt-2'>
                    <AppCheckBox checked={true} label="" id="cc"/>
                    <p className="mt-1 mb-2">New Credit Card</p>
                </div>
                <div className='mt-0 ml-5'>
                    <Image src="/assets/images/payment_cards.png" alt="Payment Cards" width={220} height={27}/>
                </div>
                <div className='flex align-items-center justify-content-center ml-5 mt-4 border-1 border-green-400 border-round py-5 cursor-pointer'>
                    <i className="pi pi-plus text-md mr-2"></i>
                    <span>Add New Card</span>
                </div>
                <div className='flex mt-3'>
                    <AppCheckBox checked={true} label="" id="cc" />
                    <p className="mt-1 mb-2">Credit card - 1234</p>
                </div>
                <div className='mt-0 ml-5'>
                    <Image src="/assets/images/payment_cards.png" alt="Payment Cards" width={220} height={27}/>
                </div>
                <div className='flex mt-3 text-xs'>
                    <div className="mt-1">
                    <AppCheckBox checked={false} label="" id="cc" />
                    </div>
                    <Image className="ml-1" src="/assets/images/payment-method-must-logo.png" alt="Must Logo" width={55} height={40}/>
                    <p className="mt-2 ml-2 text-sm">MUST Wallet (Balance: €{balance}.00)</p>
                    {balance < 50 ? 
                    <p className="mt-2 ml-4 text-red-500 text-sm" style={{width:"18rem"}}>Insufficient MUST wallet balance, please top up or choose other payment methods.</p>: ""
                    }
                </div>
            </div>
        </div>
    )
}

export default AppPaymentMethod