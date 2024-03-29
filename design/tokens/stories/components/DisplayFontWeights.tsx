import React from 'react'
import { StoryLayout } from "../../../shared/StoryLayout"
import { Box, Text } from "@chakra-ui/react"
export const FONT_WEIGHT = {
    BOLD: 700,
    SEMI: 600,
    MEDIUM: 500,
    NORMAL: 400,
};

export function DisplayFontWeights() {
  // @todo this should be updated when we have our version of the text component
  return (
    <StoryLayout title="Font Weight">
      <Box>
        {Object.entries(FONT_WEIGHT).map(([name, weight]) => (
          <Box key={name} marginY="4" display="flex" justifyContent="space-between">
            <Text fontWeight={weight} paddingY="4">
              {name}: {weight}
            </Text>
            <Text fontWeight={weight} paddingY="4">
              In anim proident ad dolore deserunt nostrud cupidatat enim sunt nisi ex ut.
            </Text>
          </Box>
        ))}
      </Box>
    </StoryLayout>
  )
}
