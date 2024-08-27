// eslint-disable-next-line react/prop-types
export default function MainData({ children }) {
    return (
        <div className="md:mt-2 mt-3 md:pt-2 px-2 md:px-5 pb-7 flex outline-none
        flex-wrap gap-3 md:gap-7 md:justify-start justify-center rounded-md overflow-x-hidden scrollable-element">
            {children}
        </div>
    )
}
