type Props = {
  className?: string
}
const BigSnowmanImage: React.FC<Props> = ({ className }) => {
  return (
    <svg
      width="512"
      height="999"
      viewBox="0 0 512 999"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect
        width="19.0797"
        height="170.868"
        transform="matrix(-0.866025 0.5 0.5 0.866025 16.5234 319.143)"
        fill="#604106"
      />
      <rect
        x="494.643"
        y="303.553"
        width="19.0797"
        height="200.417"
        transform="rotate(30 494.643 303.553)"
        fill="#604106"
      />
      <path
        d="M294.093 14.9638C344.945 19.003 368.104 29.8396 394.499 72.9334L364.379 125.103L263.973 67.1338L294.093 14.9638Z"
        fill="black"
      />
      <path
        d="M278.02 57.8947C197.995 49.9688 223.289 68.8182 245.939 79.2336C269.768 86.9391 326.217 107.177 361.379 126.484C396.542 145.79 397.754 131.31 393.965 121.657C388.66 103.705 358.045 65.8206 278.02 57.8947Z"
        fill="black"
      />
      <circle cx="250.434" cy="801" r="198" fill="#D9D9D9" />
      <ellipse cx="248.934" cy="509" rx="171.5" ry="171" fill="#D9D9D9" />
      <circle cx="250.434" cy="228" r="159" fill="#D9D9D9" />
      <path
        d="M115.434 180L191.773 205C198.121 221.739 184.75 228.641 177.271 230L115.434 180Z"
        fill="#FFAA54"
      />
      <circle cx="292.434" cy="148" r="8" fill="black" />
      <circle cx="185.434" cy="148" r="8" fill="black" />
      <path d="M134.934 274.5H345.434" stroke="black" />
      <path
        d="M86.4336 397L133.434 345H368.934L402.434 387.936L86.4336 397Z"
        fill="#930606"
      />
    </svg>
  )
}

export default BigSnowmanImage
