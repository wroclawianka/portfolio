import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  IconButton,
  Link,
  List,
  ListItem,
  Text,
  useMultiStyleConfig
} from '@chakra-ui/react';
import { projects } from '../../constants/projects';
import { useState } from 'react';
import { ExternalLinkIcon, GitHubIcon } from '../icons';
import { useTranslation } from 'react-i18next';

export const Projects = () => {
  const style = useMultiStyleConfig('projects', {});
  const { t } = useTranslation();
  const [list, setList] = useState(projects.slice(0, 6));

  const seeMore = () => {
    setList(projects);
  };

  return (
    <Box sx={style.root}>
      <Grid sx={style.grid}>
        {list.map(({ title, webpage, repo, description, stack }) => (
          <GridItem key={title}>
            <Box sx={style.project}>
              <Flex
                flexDirection="column"
                justifyContent="space-between"
                height="100%"
              >
                <Box>
                  <Flex sx={style.flex}>
                    <Text alignSelf={'center'} fontWeight="bold" fontSize="lg">
                      {title}
                    </Text>
                    <Grid sx={style.buttons}>
                      <Link href={repo}>
                        <IconButton
                          size="md"
                          variant="ghost"
                          aria-label={t("projects.repositorium")}
                          colorScheme="teal"
                          icon={<GitHubIcon />}
                        />
                      </Link>
                      {webpage ? (
                        <Link href={webpage}>
                          <IconButton
                            size="md"
                            variant="ghost"
                            aria-label={t("projects.website")}
                            colorScheme="teal"
                            icon={<ExternalLinkIcon />}
                          />
                        </Link>
                      ) : (
                        <></>
                      )}
                    </Grid>
                  </Flex>

                  <Text fontSize="lg">{description}</Text>
                </Box>
                <Box>
                  <Text pt={4} fontSize="md">
                    <List display="flex" gap={3}>
                      {stack.map((element) => (
                        <ListItem key={element}>{element}</ListItem>
                      ))}
                    </List>
                  </Text>
                </Box>
              </Flex>
            </Box>
          </GridItem>
        ))}
      </Grid>
      <Flex mt={6} justifyContent="center">
        {projects.length !== list.length ? (
          <Button size="lg" colorScheme="teal" onClick={() => seeMore()}>
            {t("projects.see_more")}
          </Button>
        ) : (
          <></>
        )}
      </Flex>
    </Box>
  );
};
