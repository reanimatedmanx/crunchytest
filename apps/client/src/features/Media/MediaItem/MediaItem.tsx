import { Flex, Card, Inset, Text, Strong } from "@radix-ui/themes";

export const MediaItem: React.FC = () => {
  return (
    <Card size="2" style={{ width: "100%" }}>
      <Flex direction="row">
        <Inset
          clip="padding-box"
          side="top"
          p="current"
          style={{ minWidth: 110 }}
        >
          <img
            src="https://images.unsplash.com/photo-1617050318658-a9a3175e34cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
            alt="Bold typography"
            style={{
              display: "block",
              objectFit: "cover",
              width: "100%",
              height: 140,
              backgroundColor: "var(--gray-5)",
            }}
          />
        </Inset>
        <Text as="p" size="3">
          <Strong>Typography</Strong> is the art and technique of arranging type
          to make written language legible, readable and appealing when
          displayed.
        </Text>
      </Flex>
    </Card>
  );
};
