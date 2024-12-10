const DoorCloseImage: React.FC = () => {
  return (
    <svg
      width="314"
      height="765"
      viewBox="0 0 314 765"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="314" height="690" fill="#C47908" />
      <circle cx="266.5" cy="346.5" r="23.5" fill="#E2A610" />
      <g filter="url(#filter0_d_276_1058)">
        <rect
          x="170"
          y="363.133"
          width="95.5312"
          height="18.4899"
          transform="rotate(-15 170 363.133)"
          fill="#E2A610"
        />
      </g>
      <circle cx="270" cy="345" r="17" fill="#E2A610" />
      <defs>
        <filter
          id="filter0_d_276_1058"
          x="166"
          y="338.406"
          width="105.062"
          height="50.5859"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
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
            result="effect1_dropShadow_276_1058"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_276_1058"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  )
}

export default DoorCloseImage
