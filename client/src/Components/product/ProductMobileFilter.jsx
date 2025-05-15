import { Box, Button, Drawer } from '@mui/material'
import { FilterList as FilterListIcon, } from '@mui/icons-material';


const ProductMobileFilter = ({ mobileFilterOpen, setMobileFilterOpen, FilterSidebar  }) => {
    return (
        <>
            <Box display={{ xs: 'block', sm: 'none' }}>
                <Button onClick={() => setMobileFilterOpen(true)}
                    sx={{ ml: 4, mt: 3 }}
                    startIcon={<FilterListIcon />
                    }>Filters</Button>
                <Drawer anchor="left" open={mobileFilterOpen} onClose={() => setMobileFilterOpen(false)}>
                    <Box sx={{ width: 250, p: 2 }}>{FilterSidebar}</Box>
                </Drawer>
            </Box>
        </>
    )
}

export default ProductMobileFilter
