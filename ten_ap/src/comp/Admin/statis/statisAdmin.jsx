import React, { useEffect, useState } from 'react'; // Đảm bảo bạn import httpService từ đúng vị trí
import httpService from '../../service/http.service';

function ProductStatistics() {
    const [newProductsCount, setNewProductsCount] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        httpService.get("/api/products")
            .then(response => {
                if (response && response.data) {
                    const newProductsToday = response.data.filter(product => {
                        // Lấy ngày hiện tại
                        const today = new Date();
                        // Đặt thời gian bắt đầu là 00:00:00 sáng hôm nay
                        today.setHours(0, 0, 0, 0);
                        console.log(today)
                        // Lấy ngày tạo sản phẩm
                        console.log(product.createdAt)
                        
                        const productCreatedAt = new Date(product.createdAt);
                        console.log(today.getTime < productCreatedAt.getTime)
                        // Lọc ra các sản phẩm được tạo ra trong ngày hôm nay
                        return productCreatedAt.getTime() >= today.getTime();
                    });
                    // Đếm số lượng sản phẩm mới được thêm vào trong ngày
                    setNewProductsCount(newProductsToday.length);
                    setIsLoading(false);
                }
            })
            .catch(error => {
                console.error("Error fetching products:", error);
                setIsLoading(false);
            });
    }, []);

    return (
        <div>
            <h2>Thống kê số lượng sản phẩm được tạo trong ngày</h2>
            {isLoading ? (
                <p>Loading...</p>
            ) : (
                <p>Số lượng sản phẩm mới trong ngày: {newProductsCount}</p>
            )}
        </div>
    );
}

export default ProductStatistics;