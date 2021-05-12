import React from "react";
//import "./ToolbarWithButtons.css";

import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";



function ListWithAvatarAndButton(props) {
  return (
    /*
      <List>
      {props.listItems.map(item => (
          <>*/
            <ListItem key={props.id}>
                <ListItemAvatar>
                    <Avatar style={{color:"white", backgroundColor:"#3f51b5"}}>
                          {props.iconAvatar}
                    </Avatar>
                </ListItemAvatar>
                <ListItemText 
                    primary={props.textPrimary}
                    secondary={props.textSecondary} />
                <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="" onClick={() => props.callback()}>
                        {props.iconAction}
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
            
          /*</>
      ))}
        
      </List>
    </div>*/
  );
}

export default ListWithAvatarAndButton;
