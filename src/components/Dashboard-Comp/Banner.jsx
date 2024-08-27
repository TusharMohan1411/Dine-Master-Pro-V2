import restauImage from '../../../public/images/restaurant/r2.png'

export default function Banner() {

    return (

        <div className="flex-col rounded-lg flex h-full w-full justify-center">
            <div className="mb-4">
                <h1 className='text-4xl font-bold'>Dashboard</h1>
            </div>
            <div className="h-3/4 bg-purple-400 flex md:flex-row flex-col p-4 items-center justify-between rounded-xl">
                <h1 className="text-3xl md:mb-0 mb-6 text-center md:text-left md:text-4xl font-extrabold text-white">Diwali Season is Here..!</h1>
                <div>
                    <img src={restauImage} alt="Restaurant Image" className='h-36 md:h-48 z-50 bottom-4 relative md:bottom-8' />
                </div>
            </div>
        </div>
    )
}
