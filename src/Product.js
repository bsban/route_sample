import React from 'react';
import {useParams} from 'react-router-dom';

const Product=(props)=>{
    const {productId} = useParams();
    return (
        <>
            <h3>{productId}번 상품 페이지 입니다.</h3>
        </>
    )
}

export default Product;