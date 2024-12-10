type Props = {
  className?: string
}
const RibbonImage: React.FC<Props> = ({ className }) => {
  return (
    <svg
      width="466"
      height="461"
      viewBox="0 0 466 461"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M98.6768 265.857L182.483 208.494L320.251 120.165L319.606 153.047L373.539 185.677L224.326 223.328L173.167 333.479C137.781 323.837 117.347 304.558 98.6768 265.857Z"
        fill="url(#paint0_radial_277_2234)"
        stroke="#FF0000"
      />
      <path
        d="M198.55 101.802L181.971 217.637L208.524 254.237L183.015 309.939L174.89 374.529L211.388 337.047L265.67 353.529L221.002 229.311L284.312 132.135C261.875 105.778 243.761 98.2357 198.55 101.802Z"
        fill="url(#paint1_radial_277_2234)"
        stroke="#FF0000"
      />
      <rect
        x="154.809"
        y="227.127"
        width="70.2919"
        height="82.8119"
        rx="1.5"
        transform="rotate(-59.5273 154.809 227.127)"
        fill="url(#paint2_radial_277_2234)"
      />
      <rect
        x="154.809"
        y="227.127"
        width="70.2919"
        height="82.8119"
        rx="1.5"
        transform="rotate(-59.5273 154.809 227.127)"
        fill="black"
        fill-opacity="0.16"
      />
      <rect
        x="154.809"
        y="227.127"
        width="70.2919"
        height="82.8119"
        rx="1.5"
        transform="rotate(-59.5273 154.809 227.127)"
        stroke="#FF0000"
      />
      <defs>
        <radialGradient
          id="paint0_radial_277_2234"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(224.336 231.837) rotate(-6.93987) scale(153.688 99.2647)"
        >
          <stop stop-color="#930606" />
          <stop offset="1" stop-color="#F50A0A" />
        </radialGradient>
        <radialGradient
          id="paint1_radial_277_2234"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(234.409 271.55) rotate(62.7828) scale(173.467 109.867)"
        >
          <stop stop-color="#930606" />
          <stop offset="1" stop-color="#F50A0A" />
        </radialGradient>
        <radialGradient
          id="paint2_radial_277_2234"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(189.771 269.211) rotate(90) scale(41.906 35.6459)"
        >
          <stop stop-color="#FF0000" />
          <stop offset="1" stop-color="#F50A0A" />
        </radialGradient>
      </defs>
    </svg>
  )
}

export default RibbonImage
