import { createIcon } from "@chakra-ui/react"

export const SingleCheckOutline = createIcon({
  displayName: "SingleCheckOutline",
  viewBox: "0 0 24 24",
  path: (
    <svg>
      <g clipPath="url(#cpSingleCheckOutline)">
        <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10Zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm-.997-4L6.76 11.757l1.414-1.414 2.83 2.829 5.655-5.657 1.415 1.414L11.004 16Z" fill="currentColor" />
      </g>
      <defs>
        <clipPath id="cpSingleCheckOutline">
          <path fill="currentColor" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  ),
})