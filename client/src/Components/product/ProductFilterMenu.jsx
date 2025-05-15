import { FormControl, Grid, InputLabel, MenuItem, Select } from "@mui/material"

const ProductFilterMenu = ({ setSortOption, sortOption }) => {
    return (
        <>
            <Grid item xs={12} lg={3} sx={{ position: 'absolute', top: 90, right: 20 }}>
                <FormControl size="small" sx={{ minWidth: 180 }}>
                    <InputLabel>Sort By</InputLabel>
                    <Select value={sortOption} label="Sort By" onChange={(e) => setSortOption(e.target.value)}>
                        <MenuItem value="">Default</MenuItem>
                        <MenuItem value="price-asc">Price: Low to High</MenuItem>
                        <MenuItem value="price-desc">Price: High to Low</MenuItem>
                        <MenuItem value="rating">Rating</MenuItem>
                        <MenuItem value="latest">Latest</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
        </>
    )
}

export default ProductFilterMenu
