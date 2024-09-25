document.addEventListener("DOMContentLoaded", function () {
    const productList = document.getElementById("product-list");
    const uploadForm = document.getElementById("upload-form");
    const productNameInput = document.getElementById("product-name");
    const productDescriptionInput = document.getElementById("product-description");
    const buyButton = document.getElementById("buy-button");
    const productIdInput = document.getElementById("product-id");
    const buyMessage = document.getElementById("buy-message");

    // 模拟商品数据
    const products = [
        { id: 1, name: "商品1", description: "描述1", price: 10, quantity: 5 },
        { id: 2, name: "商品2", description: "描述2", price: 20, quantity: 3 },
    ];

    // 渲染商品列表
    function renderProducts() {
        productList.innerHTML = "";
        products.forEach(product => {
            const productDiv = document.createElement("div");
            productDiv.innerHTML = `
                <p>ID: ${product.id}</p>
                <p>名称: ${product.name}</p>
                <p>描述: ${product.description}</p>
                <p>价格: $${product.price}</p>
                <p>库存: ${product.quantity}</p>
            `;
            productList.appendChild(productDiv);
        });
    }

    renderProducts();

    // 上传商品
    uploadForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const name = productNameInput.value;
        const description = productDescriptionInput.value;
        const newProduct = {
            id: products.length + 1, // 生成一个新的商品ID
            name: name,
            description: description,
            price: 0, // 你可以添加价格字段
            quantity: 1, // 你可以添加库存字段
        };
        products.push(newProduct);
    
        // 渲染商品列表
        renderProducts();
    
        // 清空输入框
        productNameInput.value = "";
        productDescriptionInput.value = "";
    });
    

    // 购买商品
    buyButton.addEventListener("click", function () {
        const productId = parseInt(productIdInput.value);
        const product = products.find(p => p.id === productId);
        if (product) {
            if (product.quantity > 0) {
                // 在此处添加购买商品的逻辑，扣除用户余额，更新商品库存
                // 更新商品列表
                renderProducts();
                buyMessage.textContent = "购买成功！";
            } else {
                buyMessage.textContent = "库存不足。";
            }
        } else {
            buyMessage.textContent = "找不到商品。";
        }
    });
});
