import { Typography } from "@mui/material"

function ProductText({ image, category, name, price, stock, desc }) {
    return (
        <>
            <Typography variant="body2" sx={{ color: 'gray', fontWeight: '300' }}>
                {category?.toUpperCase()}
            </Typography>

            <Typography variant="h5" sx={{ fontWeight: '600', mt: 1 }}> {name} </Typography>

            <Typography variant="h6" sx={{ display: 'inline-block', fontWeight: '600', mt: 1 }}>  Rs {price} </Typography>

            <Typography variant="subtitle2" sx={{ display: 'inline-block', color: 'grey', fontWeight: '400' }}> & Free Shipping </Typography>

            <Typography variant="body1"
                sx={{
                    color: stock > 10 ? "green" : "red",
                    fontWeight: '400'
                }}>
                {stock > 10 ? `${stock} pcs in stock` : ` Hurry only ${stock} pcs are Left`}
            </Typography>

            <Typography variant="subtitle2" sx={{ mt: 1, color: 'grey', fontWeight: '400' }}>{desc}</Typography>
        </>
    )
}

export default ProductText
