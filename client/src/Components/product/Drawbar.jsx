import React from 'react'
import { Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { ExpandMore, ExpandLess, Inbox } from '@mui/icons-material'

const Drawbar = ({ productsData, openCategory, handleCategoryClick, handleSubCategoryChange, selectedSubCategory }) => {
    return (
        <>

            <Drawer
                variant="permanent"
                anchor="left"
                sx={{
                    height:'100%',
                    zIndex: (theme) => theme.zIndex.drawer - 1,
                    width: 260,
                    "& .MuiDrawer-paper": {
                        position: 'absolute',
                        top: '120px',
                        bottom: '-56px',
                        width: 260,
                        boxSizing: "border-box",
                        backgroundColor: "#f8f9fa",
                    },
                }}>
                <List >
                    {Object.keys(productsData).map((mainCategory) => (
                        <React.Fragment key={mainCategory}>
                            <ListItem disablePadding>
                                <ListItemButton
                                    onClick={() => handleCategoryClick(mainCategory)}
                                    sx={{
                                        background: openCategory === mainCategory ? "#007bff" : 'Transparent',
                                        color: openCategory === mainCategory ? "#fff" : "#000",
                                        "&:hover": { backgroundColor: '#0056b3', color: "white" },
                                    }}>
                                    <ListItemIcon sx={{ color: openCategory === mainCategory ? "white" : 'black' }}>
                                        <Inbox />
                                    </ListItemIcon>
                                    <ListItemText primary={mainCategory.charAt(0).toUpperCase() + mainCategory.slice(1)} />
                                    {openCategory === mainCategory ? <ExpandLess /> : <ExpandMore />}
                                </ListItemButton>
                            </ListItem>
                            {openCategory === mainCategory && (
                                <List>
                                    {Object.keys(productsData[mainCategory]).map((subCat) => (
                                        <ListItem key={subCat} disablePadding>
                                            <ListItemButton
                                                onClick={() => handleSubCategoryChange(subCat, mainCategory)}
                                                sx={{
                                                    backgroundColor: selectedSubCategory === subCat ? "#17a2b8" : "transparent",
                                                    color: selectedSubCategory === subCat ? "white" : "black",
                                                    "&:hover": { backgroundColor: "#138496", color: "white" },
                                                }}>
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
        </>
    );
};

export default Drawbar
