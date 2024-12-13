type Props = {
  className?: string
  onClick?: () => void
}
const DeerballImage: React.FC<Props> = ({ className, onClick }) => {
  return (
    <svg
      width="82"
      height="87"
      viewBox="0 0 82 87"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      onClick={onClick}
    >
      <path
        d="M49.7374 3.1892C43.8038 3.53869 44.9381 10.5186 46.247 13.9649L58.0268 18.3334C63.1654 13.8192 72.6281 4.06296 69.3705 1.15061C66.1128 -1.76173 57.639 5.95595 53.8093 10.1788C54.9243 7.70333 55.671 2.83972 49.7374 3.1892Z"
        fill="#604106"
      />
      <path
        d="M28.5405 3.38356C33.0571 3.7319 32.1936 10.689 31.1973 14.124L22.2306 18.4782C18.3191 13.9788 11.1162 4.25446 13.5959 1.35164C16.0756 -1.55117 22.5258 6.14125 25.4409 10.3503C24.5922 7.88293 24.0239 3.03523 28.5405 3.38356Z"
        fill="#604106"
      />
      <g filter="url(#filter0_i_277_1721)">
        <ellipse
          cx="40.8655"
          cy="49.7862"
          rx="36.5032"
          ry="36.5499"
          fill="#D18C0C"
        />
      </g>
      <path
        d="M81.4416 26.6331L61.3721 19.7891L64.717 26.6331C67.3929 35.7196 76.9817 30.4191 81.4416 26.6331Z"
        fill="#C47908"
      />
      <path
        d="M-0.000162125 26.4885L20.0693 19.6445L16.7244 26.4885C14.0485 35.575 4.45973 30.2746 -0.000162125 26.4885Z"
        fill="#C47908"
      />
      <ellipse
        cx="37.3751"
        cy="43.3787"
        rx="20.2149"
        ry="11.5037"
        fill="#FFE4BB"
      />
      <ellipse
        cx="54.8276"
        cy="27.5076"
        rx="2.76319"
        ry="4.95098"
        fill="black"
      />
      <ellipse
        cx="36.0662"
        cy="37.2635"
        rx="4.07207"
        ry="3.64043"
        fill="black"
      />
      <ellipse
        cx="22.8325"
        cy="27.5076"
        rx="2.76319"
        ry="4.95098"
        fill="black"
      />
      <path
        d="M15.1243 61.8718C15.8224 57.3286 26.7588 59.9788 32.1398 61.8718C42.3201 59.105 53.082 58.9594 56.136 61.8718C58.5793 64.2018 52.3064 71.0942 48.8645 74.2492L32.1398 67.114L17.0149 72.3562C16.0939 70.7544 14.4262 66.4151 15.1243 61.8718Z"
        fill="#F84747"
      />
      <defs>
        <filter
          id="filter0_i_277_1721"
          x="4.3623"
          y="9.23633"
          width="73.0068"
          height="77.0996"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="-20" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_277_1721"
          />
        </filter>
      </defs>
    </svg>
  )
}

export default DeerballImage
