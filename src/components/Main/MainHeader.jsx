

// eslint-disable-next-line react/prop-types
export default function MainHeader({ PageHeading, children }) {
    return (
        <div className="flex md:justify-between md:flex-row flex-col h-fit md:h-14 px-3 md:px-5 md:items-center">
            <h1 className="md:text-2xl lg:text-3xl xl:text-4xl text-3xl my-2 md:my-4 font-bold capitalize">{PageHeading}</h1>
            {children}
        </div>
    )
}
