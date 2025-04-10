import { Breadcrumbs, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

function BreadCrum({ openCategory, selectedSubCategory }) {
    return (
        <>
            <Breadcrumbs aria-label='breadcrumb' sx={{ my: 3 }}>
                <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
                    Home
                </Link>
                <Link to={`/product-category/${openCategory}`} style={{ textDecoration: 'none', color: "inherit" }}>
                    {openCategory}
                </Link>
                {selectedSubCategory && (
                    <Typography sx={{ textTransform: 'capitalize', fontWeight: 'bold' }}>
                        {selectedSubCategory}
                    </Typography>
                )}
            </Breadcrumbs>
        </>
    )
}

export default BreadCrum
