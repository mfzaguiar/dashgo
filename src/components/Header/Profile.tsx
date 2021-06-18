import { Flex, Box, Text, Avatar } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Matheus Aguiar</Text>
          <Text>mfzaguiar@gmail.com</Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Matheus Aguiar"
        src="https://github.com/mfzaguiar.png"
      />
    </Flex>
  );
}
