import { useTheme } from '@emotion/react'
import { Inbox, ExpandMore, ExpandLess } from '@mui/icons-material'
import { Collapse, List, ListItem, ListItemButton, ListItemIcon, ListItemText, } from '@mui/material'
import React from 'react'

const ProductCategory = ({ categories = [], openCategory, handleCategoryClick, handleSubCategoryClick, selectedSubCategory }) => {
    const theme = useTheme();
    if (!Array.isArray(categories)) {
        console.error('Invalid categories data:', categories);
        return null;
    }
    return (
        <List component="nav">
            {categories.map((cat, index) => (
                <React.Fragment key={cat.slug}>
                    <ListItem disablePadding>
                        <ListItemButton
                            onClick={() => handleCategoryClick(cat)}
                            sx={{
                                bgcolor: openCategory === cat.name ? theme.palette.primary.main : 'transparent',
                                color: openCategory === cat.name ? theme.palette.secondary.contrastText : theme.palette.text.primary,
                            }}
                        >
                            <ListItemIcon>
                                <Inbox />
                            </ListItemIcon>
                            <ListItemText primary={`${cat.name.charAt(0).toUpperCase() + cat.name.slice(1)} ${index}`} />
                            {openCategory === cat.name ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>
                    </ListItem>

                    <Collapse in={openCategory === cat.name} timeout="auto" unmountOnExit>
                        <List disablePadding>
                            {Array.isArray(cat.subCategories) ? cat.subCategories.map((sub) => (
                                <ListItem key={sub?._id || sub?.slug || sub?.name} disablePadding>
                                    <ListItemButton
                                        sx={{
                                            pl: 4,
                                            bgcolor: selectedSubCategory === sub ? theme.palette.action.selected : 'transparent',
                                        }}
                                        onClick={() => handleSubCategoryClick(cat, sub)}
                                    >
                                        <ListItemText primary={
                                            typeof sub === 'string'
                                                ? sub.charAt(0).toUpperCase() + sub.slice(1)
                                                : typeof sub?.name === 'string'
                                                    ? sub.name.charAt(0).toUpperCase() + sub.name.slice(1)
                                                    : 'Invalid subcategory'
                                        } />
                                    </ListItemButton>
                                </ListItem>
                            )) : null}
                        </List>
                    </Collapse>

                </React.Fragment>
            ))}
        </List>
    );
};


export default ProductCategory
