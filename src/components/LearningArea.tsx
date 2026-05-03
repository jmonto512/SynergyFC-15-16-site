import { Box, Text, Wrap, WrapItem } from '@chakra-ui/react'
import type { LearningArea as LearningAreaData } from '../data/learningAreas'

export default function LearningArea({ title, skills }: LearningAreaData) {
  return (
    <Box
      mb={8}
      pb={8}
      borderBottom="1px solid"
      borderColor="whiteAlpha.100"
      _last={{ borderBottom: 'none', mb: 0, pb: 0 }}
    >
      <Text
        fontFamily="mono"
        fontSize="11px"
        fontWeight="500"
        color="whiteAlpha.600"
        letterSpacing="2px"
        textTransform="uppercase"
        mb={4}
      >
        {title}
      </Text>
      <Wrap spacing={2}>
        {skills.map((skill) => (
          <WrapItem key={skill}>
            <Box
              px={3}
              py={1.5}
              border="1px solid"
              borderColor="whiteAlpha.200"
              color="whiteAlpha.800"
              fontSize="sm"
              lineHeight="1.4"
              transition="all 0.2s"
              _hover={{ borderColor: 'whiteAlpha.400', color: 'white' }}
            >
              {skill}
            </Box>
          </WrapItem>
        ))}
      </Wrap>
    </Box>
  )
}
