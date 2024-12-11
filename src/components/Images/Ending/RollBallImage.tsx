type Props = {
  className?: string
}
const RollBallImage: React.FC<Props> = ({ className }) => {
  return (
    <svg
      width="200"
      height="200"
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g clipPath="url(#clip0_301_2132)">
        <path
          d="M117.52 6.24385C103.693 7.05824 106.337 23.3234 109.387 31.3542L136.837 41.534C148.811 31.0148 170.862 8.27993 163.271 1.49336C155.68 -5.29322 135.933 12.6911 127.009 22.5316C129.607 16.763 131.347 5.42946 117.52 6.24385Z"
          fill="#604106"
        />
        <path
          d="M68.1239 6.69999C78.6488 7.51171 76.6367 23.7237 74.315 31.7282L53.42 41.8747C44.3053 31.39 27.5203 8.72941 33.2987 1.96503C39.0772 -4.79934 54.1079 13.1262 60.901 22.9345C58.9232 17.1848 57.5989 5.88826 68.1239 6.69999Z"
          fill="#604106"
        />
        <g filter="url(#filter0_i_301_2132)">
          <ellipse
            cx="96.846"
            cy="114.832"
            rx="85.0628"
            ry="85.1716"
            fill="#D18C0C"
          />
        </g>
        <path
          d="M191.398 60.8742L144.631 44.9258L152.425 60.8742C158.661 82.0484 181.006 69.6968 191.398 60.8742Z"
          fill="#C47908"
        />
        <path
          d="M1.61717 60.5383L48.3848 44.5898L40.5902 60.5383C34.3545 81.7124 12.01 69.3609 1.61717 60.5383Z"
          fill="#C47908"
        />
        <ellipse
          cx="88.71"
          cy="99.8968"
          rx="47.1065"
          ry="26.807"
          fill="#FFE4BB"
        />
        <ellipse
          cx="129.38"
          cy="62.9122"
          rx="6.43902"
          ry="11.5372"
          fill="black"
        />
        <ellipse
          cx="85.6609"
          cy="85.6473"
          rx="9.48908"
          ry="8.48322"
          fill="black"
        />
        <ellipse
          cx="54.8238"
          cy="62.9122"
          rx="6.43902"
          ry="11.5372"
          fill="black"
        />
        <path
          d="M36.8622 142.986C38.4889 132.399 63.9738 138.575 76.5129 142.986C100.236 136.539 125.314 136.2 132.431 142.986C138.124 148.416 123.507 164.477 115.486 171.829L76.5129 155.202L41.2678 167.418C39.1215 163.685 35.2355 153.573 36.8622 142.986Z"
          fill="#F84747"
        />
      </g>
      <defs>
        <filter
          id="filter0_i_301_2132"
          x="11.7832"
          y="25.6602"
          width="170.125"
          height="174.344"
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
            result="effect1_innerShadow_301_2132"
          />
        </filter>
        <clipPath id="clip0_301_2132">
          <rect width="200" height="200" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

export default RollBallImage
