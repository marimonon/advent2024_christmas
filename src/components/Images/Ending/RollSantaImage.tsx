type Props = {
  className?: string
}
const RollSantaImage: React.FC<Props> = ({ className }) => {
  return (
    <svg
      width="200"
      height="200"
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g filter="url(#filter0_i_301_2120)">
        <ellipse
          cx="100.5"
          cy="99.9386"
          rx="90.5"
          ry="90.9386"
          fill="#FF0000"
        />
      </g>
      <ellipse
        cx="113.809"
        cy="67.6258"
        rx="60.5551"
        ry="41.3055"
        fill="#FFE4BB"
      />
      <path
        d="M112.81 148.234C35.087 136.509 45.8227 103.82 60.9061 88.9412C78.2076 70.0206 127.672 70.62 150.408 76.2828C208.434 105.596 163.717 148.235 112.81 148.234Z"
        fill="white"
      />
      <path
        d="M49.9238 88.3231C58.4444 64.8231 100.484 66.2093 120.439 69.84C166.273 57.4299 182.139 80.5118 184.343 93.604C151.436 93.3399 129.988 85.1325 123.377 81.0618C116.619 92.4158 71.5925 90.6335 49.9238 88.3231Z"
        fill="white"
      />
      <ellipse
        cx="94.1791"
        cy="52.6354"
        rx="6.32169"
        ry="11.6588"
        fill="black"
      />
      <ellipse
        cx="142.089"
        cy="53.3033"
        rx="6.32169"
        ry="11.6588"
        fill="black"
      />
      <ellipse
        cx="107.82"
        cy="166.222"
        rx="13.9743"
        ry="9.32704"
        fill="white"
      />
      <ellipse cx="23.9743" cy="73.62" rx="13.9743" ry="9.32704" fill="white" />
      <path
        d="M122.462 21.6497C73.8278 16.9485 46.1583 52.5177 37.9512 73.9477C41.9438 82.2087 46.0474 77.3898 47.6001 73.9477C77.8776 35.9732 99.1718 28.6451 122.462 28.6451C145.753 28.6451 166.049 44.3012 170.707 56.6262C174.433 66.4862 177.583 62.9553 178.692 59.9573C179.912 51.1854 170.707 26.3132 122.462 21.6497Z"
        fill="white"
      />
      <path
        d="M103.826 94.2734C108.928 100.936 122.858 110.263 137.764 94.2734"
        stroke="black"
      />
      <defs>
        <filter
          id="filter0_i_301_2120"
          x="10"
          y="-7"
          width="181"
          height="197.879"
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
          <feOffset dy="-40" />
          <feGaussianBlur stdDeviation="8" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_301_2120"
          />
        </filter>
      </defs>
    </svg>
  )
}

export default RollSantaImage
