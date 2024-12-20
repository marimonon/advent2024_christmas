type Props = {
  className?: string
  onClick?: () => void
}
const FireImage: React.FC<Props> = ({ className, onClick }) => {
  return (
    <svg
      width="231"
      height="228"
      viewBox="0 0 231 228"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      onClick={onClick}
    >
      <path
        d="M231 112.883C231 173.902 165.935 228 115.222 228C64.5093 228 0 170.617 0 109.598C0 48.5787 63.6032 0 114.287 0C164.971 0 231 51.864 231 112.883Z"
        fill="url(#paint0_radial_276_1109)"
      />
      <path
        d="M126.659 59C131.123 59 137.18 83.746 145.363 97.9506C153.546 112.155 184.258 147.443 172.25 177.945C159.178 211.364 85.1071 217.868 69.0601 174.282C57.7954 143.779 95.9468 112.155 105.724 97.9506C112.419 88.1569 123.577 59 126.659 59Z"
        fill="url(#paint1_radial_276_1109)"
      />
      <defs>
        <radialGradient
          id="paint0_radial_276_1109"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(115.518 113.994) scale(114.065 105.248)"
        >
          <stop offset="0.034" stopColor="#FFE265" stopOpacity="0.7" />
          <stop offset="0.112" stopColor="#FFE575" stopOpacity="0.643" />
          <stop offset="0.417" stopColor="#FFF0B0" stopOpacity="0.422" />
          <stop offset="0.677" stopColor="#FFF8DB" stopOpacity="0.234" />
          <stop offset="0.88" stopColor="#FFFDF5" stopOpacity="0.087" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </radialGradient>
        <radialGradient
          id="paint1_radial_276_1109"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(125.905 215.834) scale(206.464 145.246)"
        >
          <stop offset="0.17" stopColor="#FF9616" />
          <stop offset="0.654" stopColor="#FFD429" />
        </radialGradient>
      </defs>
    </svg>
  )
}

export default FireImage
