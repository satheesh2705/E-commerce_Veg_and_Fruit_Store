import React from 'react';
import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  styled,
  Typography,
} from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import HistoryIcon from '@mui/icons-material/Loop';
import FavoriteIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/ExitToApp';
// import theme from '../../theme/theme';

const ListItemIcons = styled(ListItemIcon)({
  marginRight: '-15px',
});

const CustomListItem = styled(ListItem)(({ theme }) => ({
  borderLeft: '3px solid transparent',
  '&:hover': {
    borderLeft: '3px solid rgba(32, 181, 38, 1)',
    backgroundColor: 'rgba(237, 242, 238, 1)',
    '& .MuiListItemText-root': {
      color: 'black',
    },
    '& .MuiListItemIcon-root': {
      color: 'black',
    },
  },
}));

const Sidebar = () => {
  return (
      <Box
        sx={{
          width: '250px',
          borderRight: '1px solid #e0e0e0',
         
        }}
      >
        <List>
          <ListItem>
          <Typography variant='p' component='h4'> Navigation </Typography>

          </ListItem>
          <Divider />
          <CustomListItem >
            <ListItemIcons>
              <DashboardIcon />
            </ListItemIcons>
            <ListItemText
              primary="Dashboard"
              sx={{ color: 'rgba(102, 102, 102, 1)' }}
            />
          </CustomListItem>
          <CustomListItem >
            <ListItemIcons>
              <HistoryIcon />
            </ListItemIcons>
            <ListItemText
              primary="Order History"
              sx={{ color: 'rgba(102, 102, 102, 1)' }}
            />
          </CustomListItem>
          <CustomListItem >
            <ListItemIcons>
              <FavoriteIcon />
            </ListItemIcons>
            <ListItemText
              primary="Wishlist"
              sx={{ color: 'rgba(102, 102, 102, 1)' }}
            />
          </CustomListItem>
          <CustomListItem >
            <ListItemIcons>
              <ShoppingCartIcon />
            </ListItemIcons>
            <ListItemText
              primary="Shopping Cart"
              sx={{ color: 'rgba(102, 102, 102, 1)' }}
            />
          </CustomListItem>
          <CustomListItem >
            <ListItemIcons>
              <SettingsIcon />
            </ListItemIcons>
            <ListItemText
              primary="Settings"
              sx={{ color: 'rgba(102, 102, 102, 1)' }}
            />
          </CustomListItem>
          <CustomListItem >
            <ListItemIcons>
              <LogoutIcon />
            </ListItemIcons>
            <ListItemText
              primary="Log-out"
              sx={{ color: 'rgba(102, 102, 102, 1)' }}
            />
          </CustomListItem>
        </List>
      </Box>
    // </ThemeProvider>
  );
};

export default Sidebar;
