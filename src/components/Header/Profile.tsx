import { Flex, Box, Text, Avatar } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Matheus Aguiar</Text>
        <Text>mfzaguiar@gmail.com</Text>
      </Box>

      <Avatar
        size="md"
        name="Matheus Aguiar"
        src="https://github.com/mfzaguiar.png"
      />
    </Flex>
  );
}
