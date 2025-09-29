type Props = {
    width?: string | number,
    height?: string | number,
    color?: string
}

export default function LogoYoutube({ width = 20, height = 20, color = '#ffffff' }: Props) {
    return (
        <span className="icon">
            <svg width={width} height={height} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M10 0C0.172 0 0 1.13507 0 10C0 18.8649 0.172 20 10 20C19.828 20 20 18.8649 20 10C20 1.13507 19.828 0 10 0ZM12.705 10.1519L8.215 12.2508C7.822 12.4331 7.5 12.2288 7.5 11.7942V7.84062C7.5 7.40701 7.822 7.20173 8.215 7.38398L12.705 9.4829C13.098 9.6672 13.098 9.9676 12.705 10.1519Z"
                fill={color} />
            </svg>
        </span>
    )
}