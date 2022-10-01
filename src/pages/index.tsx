import LinkedinCard from "@/components/LinkedinCard/LinkedinCard";
import ProfileCard from "@/components/ProfileCard/ProfileCard";
import ProfileCardOne from "@/components/ProfileCardOne/ProfileCardOne";
import ProfileCardTwo from "@/components/ProfileCardTwo/ProfileCardTwo";
import ToggleColor from "@/components/ToggleColor/ToggleColor";
import { Avatar } from "@mantine/core";
import { IconBrandLinkedin } from "@tabler/icons";
import { useContext, useEffect } from "react";

import {
  Button,
  Container,
  createStyles,
  Group,
  Text,
  Title,
} from "@mantine/core";

const useStyles = createStyles((theme) => ({
  root: {
    paddingTop: 80,
    paddingBottom: 80,
  },

  label: {
    textAlign: "center",
    fontWeight: 900,
    fontSize: 220,
    lineHeight: 1,
    // marginBottom: theme.spacing.xl * 1.5,
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[4]
        : theme.colors.gray[2],

    [theme.fn.smallerThan("sm")]: {
      fontSize: 120,
    },
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    textAlign: "center",
    fontWeight: 900,
    fontSize: 38,

    [theme.fn.smallerThan("sm")]: {
      fontSize: 32,
    },
  },

  description: {
    maxWidth: 500,
    margin: "auto",
    marginTop: theme.spacing.xl,
    // marginBottom: theme.spacing.xl * 1.5,
  },
}));

export default function Home() {
  const { classes } = useStyles();

  return (
    <Container className={classes.root}>
      <div className={classes.label}>HELLO</div>
      <Text
        color="dimmed"
        size="lg"
        align="center"
        className={classes.description}
      >
        You have found the future personal site of...
      </Text>
      <br />
      <Title className={classes.title}>Owen Opichka</Title>
      <br />
      <br />
      <Group position="center">
        <Button
          component="a"
          href="https://www.linkedin.com/in/owenopichka/"
          target={"_blank"}
          rightIcon={<IconBrandLinkedin />}
          variant="subtle"
          size="md"
        >
          For Now click Here to view my LinkedIn Page
        </Button>
      </Group>
    </Container>
  );
  // return (
  //   <>
  //     <ToggleColor />
  //     <br />
  //     <Avatar
  //       size="lg"
  //       color="dark"
  //       src="https://media-exp1.licdn.com/dms/image/C5603AQH6MFLYVCiGwA/profile-displayphoto-shrink_200_200/0/1663123825610?e=1669852800&v=beta&t=GggVUXUMV0meVwQKYHrTQDAf688J19A7HsNcbff0NLo"
  //     />
  //     <br />
  //     <ProfileCard
  //       image={
  //         "https://media-exp1.licdn.com/dms/image/D5616AQG4wTGmtAg3mA/profile-displaybackgroundimage-shrink_200_800/0/1664327163981?e=1669852800&v=beta&t=86SXGGknxgXyQRuLHM8oyD4NaCxW5TmBoghTcYoNT_0"
  //       }
  //       avatar={
  //         "https://media-exp1.licdn.com/dms/image/C5603AQH6MFLYVCiGwA/profile-displayphoto-shrink_200_200/0/1663123825610?e=1669852800&v=beta&t=GggVUXUMV0meVwQKYHrTQDAf688J19A7HsNcbff0NLo"
  //       }
  //       name={"Owen Opichka"}
  //       job={""}
  //       stats={[]}
  //     />
  //     <br />
  //     <LinkedinCard />
  //     <br />
  //     <ProfileCardOne
  //       avatar={
  //         "https://media-exp1.licdn.com/dms/image/C5603AQH6MFLYVCiGwA/profile-displayphoto-shrink_200_200/0/1663123825610?e=1669852800&v=beta&t=GggVUXUMV0meVwQKYHrTQDAf688J19A7HsNcbff0NLo"
  //       }
  //       name={"Owen Opichka"}
  //       title={"Undergraduate Researcher"}
  //       phone={"+1(920)905-4893"}
  //       email={"o.g.opichka@gmail.com"}
  //     />
  //     <br />
  //     <ProfileCardTwo
  //       avatar={
  //         "https://media-exp1.licdn.com/dms/image/C5603AQH6MFLYVCiGwA/profile-displayphoto-shrink_200_200/0/1663123825610?e=1669852800&v=beta&t=GggVUXUMV0meVwQKYHrTQDAf688J19A7HsNcbff0NLo"
  //       }
  //       name={"Owen Opichka"}
  //       email={"o.g.opichka@gmail.com"}
  //       job={"Aspiring Software Engineer"}
  //     />
  //   </>
  // );
}
