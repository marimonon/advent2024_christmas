type Props = {
  className?: string
}
const SantaBagImage: React.FC<Props> = ({ className }) => {
  return (
    <svg
      width="373"
      height="411"
      viewBox="0 0 373 411"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g filter="url(#filter0_d_279_2904)">
        <path
          d="M352.204 41L254.203 15C240.603 15 236.87 5.16667 236.704 0C235.704 13.5 225.204 15 220.204 14C170.37 30.5 61.3034 100.2 23.7034 247C-13.8966 393.8 247.204 424.5 247.204 259.5L236.704 32L324.204 103.5L330.204 64L352.204 41Z"
          fill="url(#paint0_linear_279_2904)"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_279_2904"
          x="0"
          y="0"
          width="372.203"
          height="410.734"
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
          <feOffset dy="20" />
          <feGaussianBlur stdDeviation="10" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_279_2904"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_279_2904"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_279_2904"
          x1="196.451"
          y1="-0.5"
          x2="196.451"
          y2="366.663"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="#D7F2F6" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export default SantaBagImage
