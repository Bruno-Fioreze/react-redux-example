import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { UserState } from "../types/user"

function UserCard( props: { user: UserState } ) {
  return (
    <Card className='user-card'>
        <CardActionArea>
        <CardMedia
            component="img"
            height="140"
            image={props.user.avatar}
            alt={`${props.user.first_name}`}
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                {props.user.first_name} {props.user.last_name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
            {props.user.email}
            </Typography>
        </CardContent>
        </CardActionArea>
    </Card>
  );
}

export default UserCard;