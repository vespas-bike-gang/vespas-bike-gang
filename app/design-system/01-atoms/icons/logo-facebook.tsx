type Props = {
    width?: string | number,
    height?: string | number,
    color?: string
}

export default function LogoFacebook({ width = 20, height = 20, color = '#ffffff' }: Props) {
    return (
        <span className="icon">
            <svg width={width} height={width} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M17.7778 0H2.22222C1 0 0 1 0 2.22222V17.7778C0 19.0011 1 20 2.22222 20H10V12.2222H7.77778V9.4722H10V7.19444C10 4.79 11.3467 3.10111 14.1844 3.10111L16.1878 3.10333V5.99778H14.8578C13.7533 5.99778 13.3333 6.82667 13.3333 7.59556V9.4733H16.1867L15.5556 12.2222H13.3333V20H17.7778C19 20 20 19.0011 20 17.7778V2.22222C20 1 19 0 17.7778 0Z"
                fill={color} />
            </svg>
        </span>
    )
}