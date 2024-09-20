import React, { useState } from 'react';
import ProductsHeader from './ProductsHeader';
import Product from './Product';
import Pagination from '@mui/material/Pagination';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Stack from '@mui/material/Stack';

export default function Table({ products }) {
    const [sortConfig, setSortConfig] = useState({ key: 'id', direction: 'asc' });
    const [selectedProducts, setSelectedProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    const itemsPerPage = 6;

    const sortedProducts = [...products].sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
            return sortConfig.direction === 'asc' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
            return sortConfig.direction === 'asc' ? 1 : -1;
        }
        return 0;
    });

    const indexOfLastProduct = currentPage * itemsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
    const currentProducts = sortedProducts.slice(indexOfFirstProduct, indexOfLastProduct);

    const requestSort = (key) => {
        let direction = 'asc';
        if (sortConfig.key === key && sortConfig.direction === 'asc') {
            direction = 'desc';
        }
        setSortConfig({ key, direction });
    };

    const handleSelectAll = (event) => {
        if (event.target.checked) {
            setSelectedProducts(currentProducts.map(product => product.id));
        } else {
            setSelectedProducts([]);
        }
    };

    const handleSelectProduct = (id) => {
        setSelectedProducts(prevSelected => {
            if (prevSelected.includes(id)) {
                return prevSelected.filter(productId => productId !== id);
            } else {
                return [...prevSelected, id];
            }
        });
    };

    const handleDeleteSelected = () => {
        const remainingProducts = products.filter(
            (product) => !selectedProducts.includes(product.id)
        );
        setSelectedProducts([]);
        console.log('Deleted products:', selectedProducts);
        console.log('Remaining products:', remainingProducts);
    };

    const handlePageChange = (event, value) => {
        setCurrentPage(value);
    };

    return (

        <div className='flex flex-col justify-between h-full'>
            <div className='flex flex-col gap-[30px]'>
                <ProductsHeader
                    sortConfig={sortConfig}
                    requestSort={requestSort}
                    totalProducts={products.length}
                    selectedCount={selectedProducts.length}
                    handleSelectAll={handleSelectAll}
                    handleDelete={handleDeleteSelected}
                />
                <div className='flex flex-col gap-5'>
                    {currentProducts.map((product) => (
                        <Product
                            key={product.id}
                            id={product.id}
                            name={product.name}
                            price={product.price}
                            category={product.category}
                            isSelected={selectedProducts.includes(product.id)}
                            handleSelect={handleSelectProduct}
                            handleEdit={() => console.log('Edit product:', product.id)}
                            handleDelete={() => handleDeleteSelected(product.id)}
                        />
                    ))}
                </div>
            </div>
            <div className='flex justify-end'>
                <Stack spacing={2}>
                    <Pagination
                        variant="outlined"
                        shape="rounded"
                        size="large"
                        count={Math.ceil(products.length / itemsPerPage)}
                        page={currentPage}
                        onChange={handlePageChange}
                        color="primary"
                    />
                </Stack>
            </div>
        </div>

    );
}
