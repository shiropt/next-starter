import { Container, Title, Button, Divider, Text } from "@mantine/core";
import { BrandGoogle, Mail } from "tabler-icons-react";
import { useRouter } from "next/router";
import { FC } from "react";

export const Signin: FC = () => {
  const router = useRouter();

  return (
    <Container size="sm" py="100px" className="">
      <Title order={3} data-testid="signin-title" className="text-center">
        ログイン
      </Title>
      <Button
        className="my-8"
        size="lg"
        fullWidth
        leftIcon={<Mail />}
        color="red"
        onClick={() => router.push("/signin/email")}
      >
        メールアドレスでログイン
      </Button>
      <Button fullWidth size="lg" leftIcon={<BrandGoogle />} variant="outline" color="gray">
        Googleでログイン
      </Button>
      <Divider my="sm" className="my-10" />
      <Text className="text-center">アカウントをお持ちでない方</Text>
      <Button
        fullWidth
        size="lg"
        variant="outline"
        color="red"
        className=" mt-4"
        onClick={() => router.push("/signup")}
      >
        会員登録
      </Button>
    </Container>
  );
};
