import {
  ListItemIcon,
  ListItemText,
  Typography,
  Divider,
  ListItemButton,
  ListItem,
  Box,
  List,
  SwipeableDrawer,
} from "@mui/material";

import { IProps } from "./types";

export const DrawerComponent = ({ isDrawer, setIsDrawer }: IProps) => {
  return (
    <div>
      <SwipeableDrawer
        anchor="left"
        open={isDrawer}
        onOpen={() => isDrawer}
        onClose={() => setIsDrawer(false)}
      >
        <Typography sx={{ fontFamily: "Montserrat" }}>
          <Box role="presentation">
            <List>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <h1>Home</h1>
                  </ListItemIcon>
                  <ListItemText />
                </ListItemButton>
              </ListItem>
            </List>
            <Divider />
            <List>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <h1>Últimas nóticias</h1>
                  </ListItemIcon>
                  <ListItemText />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <h1>Categorias</h1>
                  </ListItemIcon>
                  <ListItemText />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <h1>Quem somos?</h1>
                  </ListItemIcon>
                  <ListItemText />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <h1>Termos</h1>
                  </ListItemIcon>
                  <ListItemText />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <h1>entre em contato</h1>
                  </ListItemIcon>
                  <ListItemText />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <h1>Sobre</h1>
                  </ListItemIcon>
                  <ListItemText />
                </ListItemButton>
              </ListItem>
            </List>
          </Box>
        </Typography>
      </SwipeableDrawer>
    </div>
  );
};
