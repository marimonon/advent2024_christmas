type Props = {
  className?: string
  onClick?: () => void
}
const DoorOpenImage: React.FC<Props> = ({ className, onClick }) => {
  return (
    <svg
      width="314"
      height="766"
      viewBox="0 0 314 766"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      onClick={onClick}
    >
      <path d="M0 0L222 75.5V420.5V765.5L0 690V0Z" fill="#C47908" />
      <circle cx="173.5" cy="398.5" r="23.5" fill="#E2A610" />
      <g filter="url(#filter0_d_276_1106)">
        <rect
          x="77"
          y="415.133"
          width="95.5312"
          height="18.4899"
          transform="rotate(-15 77 415.133)"
          fill="#E2A610"
        />
      </g>
      <circle cx="177" cy="397" r="17" fill="#E2A610" />
      <defs>
        <filter
          id="filter0_d_276_1106"
          x="73"
          y="390.406"
          width="105.062"
          height="50.5859"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_276_1106"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_276_1106"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  )
}

export default DoorOpenImage
