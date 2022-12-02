// import { Box, Typography } from '@mui/material';
import React, { useEffect, useState } from "react";
import { Box } from "@mui/system";

import { useParams, useSearchParams } from "react-router-dom";
import ProductList from "./ProductList";
import { useProducts } from "../../components/context/ProductContextProvaider";

const ProductsPage = () => {
    const { products, getProducts } = useProducts();

    useEffect(() => {
        getProducts();
    }, []);

    const [page, setPage] = useState(1);
    const itemsPerPage = 30;
    const count = Math.ceil(products.length / itemsPerPage);

    function currentData() {
        const begin = (page - 1) * itemsPerPage;
        const end = begin + itemsPerPage;
        return products.slice(begin, end);
    }
    const [searchParams, setSearchParams] = useSearchParams();
    useEffect(() => {
        getProducts();
        setPage(1);
    }, [searchParams]);

    return (
        <div style={{ backgroundColor:'rgb(18, 18, 18)',display:'flex',justifyContent:'center' }}>
            <Box sx={{ width: "80%" ,}}>
                <ProductList currentData={currentData} />
            </Box>
            {/* <ProductHeader />
      <Box sx={{ width: "100%", mt: "80px" }}>
        <Box
          sx={{
            display: {
              xs: "block",
              sm: "block",
              md: "flex",
              lg: "flex",
              xl: "flex",
            },
          }}
        >
          <Box
            sx={{
              width: {
                xs: "100%",
                sm: "100%",
                md: "35%",
                lg: "35%",
                xl: "35%",
              },
            }}
          >
            <ProductFilter />
          </Box>
          <Box
            sx={{
              width: {
                xs: "100%",
                sm: "100%",
                md: "65%",
                lg: "65%",
                xl: "65%",
              },
            }}
          >
            <ProductSortPagination
              page={page}
              setPage={setPage}
              count={count}
            />
            <ProductList currentData={currentData} />
          </Box>
        </Box>
      </Box> */}
        </div>
    );
};

export default ProductsPage;
