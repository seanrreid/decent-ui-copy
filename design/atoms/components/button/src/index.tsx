import {
  Button as ChakraButton,
  ComponentWithAs,
  forwardRef,
  useStyleConfig,
} from "@chakra-ui/react"
import { IButton } from "./types"

export const Button = forwardRef<IButton, ComponentWithAs<"button">>(
  ({ variant = 'primary', size = 'base', label, ...rest }, ref) => {
    const styles = useStyleConfig("Button", { size, variant })
    return (
      <ChakraButton sx={styles} ref={ref} {...rest}>
        {label}
      </ChakraButton>
    )
  }
)

export default Button
