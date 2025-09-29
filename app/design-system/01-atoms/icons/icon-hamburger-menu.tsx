type Props = {
    width?: number | string
    height?: number | string
    color?: string
}

export default function IconHamburgerMenu({width = 30, height = 20, color = '#ffffff'}: Props) {
    return (
        <span className="icon">
            <svg width={width} height={height} viewBox="0 0 30 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 20V17.2223H30V20H0ZM0 11.3889V8.61112H30V11.3889H0ZM0 2.77775V0H30V2.77775H0Z"
                fill={color} />
            </svg>
        </span>
    )
}