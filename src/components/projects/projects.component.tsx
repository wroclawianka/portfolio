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
  SlideFade,
  Text,
  useMultiStyleConfig
} from '@chakra-ui/react';
import { projects } from '../../constants';
import { useState } from 'react';
import { ExternalLinkIcon, GitHubIcon } from '../icons';
import { useTranslation } from 'react-i18next';

export const Projects = () => {
  const style = useMultiStyleConfig('projects', {});
  const { t } = useTranslation();
  // show first 6 projects by init
  const [list, setList] = useState(projects.slice(0, 6));

  const seeMore = () => {
    // show all projects
    setList(projects);
  };

  return (
    <>
      <Box sx={style.accent}>
        <Text fontSize={'5xl'} sx={style.title}>
          Projects
        </Text>
      </Box>
      <Box sx={style.container}>
        <Grid sx={style.projectsGrid}>
          {list.map(({ title, webpage, repo, description, stack }, index) => (
            <GridItem key={title}>
              <SlideFade in={index <= list.length} offsetY="20px">
                <Flex sx={style.projectBox} _hover={style.projectHover}>
                  <Box>
                    <Grid sx={style.links}>
                      <Link href={repo}>
                        <IconButton
                          size="md"
                          variant="ghost"
                          aria-label={t('porfolio.repositorium')}
                          colorScheme="teal"
                          icon={<GitHubIcon />}
                        />
                      </Link>
                      {webpage ? (
                        <Link href={webpage}>
                          <IconButton
                            size="md"
                            variant="ghost"
                            aria-label={t('porfolio.website')}
                            colorScheme="teal"
                            icon={<ExternalLinkIcon />}
                          />
                        </Link>
                      ) : (
                        <></>
                      )}
                    </Grid>
                    <Box sx={style.content}>
                      <Text sx={style.projectName}>{title}</Text>
                      <Text>{description}</Text>
                    </Box>
                  </Box>
                  <Box>
                    <Text sx={style.stackText}>
                      <List sx={style.stackList}>
                        {stack.map((el) => (
                          <ListItem key={el}>{el}</ListItem>
                        ))}
                      </List>
                    </Text>
                  </Box>
                </Flex>
              </SlideFade>
            </GridItem>
          ))}
        </Grid>
        <Flex mt={10} mb={5} justifyContent="center">
          {projects.length !== list.length ? (
            <Button size="lg" colorScheme="teal" onClick={() => seeMore()}>
              {t('porfolio.see_more')}
            </Button>
          ) : (
            <></>
          )}
        </Flex>
      </Box>
    </>
  );
};
