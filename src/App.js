import React, { useState } from 'react';
import {
  Container,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Collapse,
  List,
  ListItem,
  ListItemText,
  makeStyles
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const albumsData = [
  {
    id: 1,
    title: 'Happier Than Ever',
    cover: 'https://cdn1.ozone.ru/s3/multimedia-4/6088199500.jpg',
    songs: [
      'Getting Older',
      'I Didn\'t Change My Number',
      'Billie Bossa Nova',
      'my future',
      'Oxytocin',
      'GOLDWING',
      'Lost Cause',
      'Halley\'s Comet',
      'Not My Responsibility',
      'OverHeated',
      'Everybody Dies',
      'Your Power',
      'NDA',
      'Therefore I Am',
      'Happier Than Ever',
      'Male Fantasy'
    ]
  },
  {
    id: 2,
    title: 'WHEN WE ALL FALL ASLEEP, WHERE DO WE GO?',
    cover: 'https://avatars.yandex.net/get-music-content/99892/0a911a32.a.7190880-1/m1000x1000',
    songs: [
      '!!!!!!!',
      'bad guy',
      'xanny',
      'you should see me in a crown',
      'all the good girls go to hell',
      'wish you were gay',
      'when the party\'s over',
      'my strange addiction',
      'bury a friend',
      'ilomilo',
      'listen before i go',
      'i love you',
      'goodbye'
    ]
  },
  {
    id: 3,
    title: 'dont smile at me',
    cover: 'https://avatars.yandex.net/get-music-content/98892/90ce450c.a.4923330-1/m1000x1000',
    songs: [
      'COPYCAT',
      'idontwannabeyouanymore',
      'my boy',
      'watch',
      'party favor',
      'bellyache',
      'ocean eyes',
      'hostage',
      '&burn'
    ]
  }
];

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    textAlign: 'center',
    marginTop: theme.spacing(4),
  },
  card: {
    marginBottom: theme.spacing(2),
  },
  media: {
    height: 0,
    paddingTop: '100%',
  },
}));

const Album = ({ album }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
      <Card className={classes.card}>
        <CardMedia
            className={classes.media}
            image={album.cover}
            title={album.title}
        />
        <CardHeader
            title={album.title}
            onClick={handleExpandClick}
            action={<ExpandMoreIcon />}
        />
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <List>
              {album.songs.map((song, index) => (
                  <ListItem key={index}>
                    <ListItemText primary={`${index + 1}. ${song}`} />
                  </ListItem>
              ))}
            </List>
          </CardContent>
        </Collapse>
      </Card>
  );
};

const App = () => {
  const classes = useStyles();

  return (
      <Container maxWidth="sm" className={classes.root}>
        {albumsData.map(album => (
            <Album key={album.id} album={album} />
        ))}
      </Container>
  );
};

export default App;
