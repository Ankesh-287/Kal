import { useTheme } from '@emotion/react'
import { Inbox, ExpandMore, ExpandLess } from '@mui/icons-material'
import { Collapse, List, ListItem, ListItemButton, ListItemIcon, ListItemText, } from '@mui/material'
import React from 'react'

const ProductCategory = ({ categories, openCategory, handleCategoryClick, handleSubCategoryClick }) => {
    const theme = useTheme();
    return (
        <>
            <List component="nav">
                {categories.map((cat, index) => (
                    <React.Fragment key={cat.name}>
                        <ListItem disablePadding>
                            <ListItemButton
                                onClick={() => handleCategoryClick(cat.name)}
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
                                {cat.subCategories.map((sub) => (
                                    <ListItem key={sub} disablePadding>
                                        <ListItemButton
                                            sx={{ pl: 4 }}
                                            onClick={() => handleSubCategoryClick(sub)}
                                        >
                                            <ListItemText primary={sub.charAt(0).toUpperCase() + sub.slice(1)} />
                                        </ListItemButton>
                                    </ListItem>
                                ))}
                            </List>
                        </Collapse>
                    </React.Fragment>
                ))}
            </List>
        </>
    )
}

export default ProductCategory
