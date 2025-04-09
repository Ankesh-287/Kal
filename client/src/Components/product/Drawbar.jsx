import React from 'react';
import {
  Drawer, List, ListItem, ListItemButton,
  ListItemIcon, ListItemText, useTheme
} from '@mui/material';
import { ExpandMore, ExpandLess, Inbox } from '@mui/icons-material';

const Drawbar = ({
  productsData,
  openCategory,
  handleCategoryClick,
  handleSubCategoryChange,
  selectedSubCategory
}) => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  return (
    <Drawer
      variant="permanent"
      anchor="left"
      sx={{
        height: '100%',
        zIndex: (theme) => theme.zIndex.drawer - 1,
        width: 240,
        '& .MuiDrawer-paper': {
          position: 'absolute',
          top: '80px',
          bottom: 0,
          width: 240,
          boxSizing: 'border-box',
          backgroundColor: theme.palette.background.paper,
          borderRight: `1px solid ${theme.palette.divider}`,
        },
      }}
    >
      <List>
        {Object.keys(productsData).map((mainCategory) => (
          <React.Fragment key={mainCategory}>
            <ListItem disablePadding>
              <ListItemButton
                onClick={() => handleCategoryClick(mainCategory)}
                sx={{
                  backgroundColor: openCategory === mainCategory
                    ? theme.palette.primary.main
                    : 'transparent',
                  color: openCategory === mainCategory
                    ? theme.palette.primary.contrastText
                    : theme.palette.text.primary,
                  '&:hover': {
                    backgroundColor: theme.palette.primary.dark,
                    color: theme.palette.primary.contrastText,
                  },
                }}
              >
                <ListItemIcon
                  sx={{
                    color: openCategory === mainCategory
                      ? theme.palette.primary.contrastText
                      : theme.palette.text.primary,
                  }}
                >
                  <Inbox />
                </ListItemIcon>
                <ListItemText primary={mainCategory.charAt(0).toUpperCase() + mainCategory.slice(1)} />
                {openCategory === mainCategory ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
            </ListItem>

            {openCategory === mainCategory && (
              <List disablePadding>
                {Object.keys(productsData[mainCategory]).map((subCat) => (
                  <ListItem key={subCat} disablePadding>
                    <ListItemButton
                      onClick={() => handleSubCategoryChange(subCat, mainCategory)}
                      sx={{
                        pl: 4,
                        backgroundColor: selectedSubCategory === subCat
                          ? theme.palette.secondary.main
                          : 'transparent',
                        color: selectedSubCategory === subCat
                          ? theme.palette.secondary.contrastText
                          : theme.palette.text.primary,
                        '&:hover': {
                          backgroundColor: theme.palette.secondary.dark,
                          color: theme.palette.secondary.contrastText,
                        },
                      }}
                    >
                      <ListItemText primary={subCat.charAt(0).toUpperCase() + subCat.slice(1)} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            )}
          </React.Fragment>
        ))}
      </List>
    </Drawer>
  );
};

export default Drawbar;
