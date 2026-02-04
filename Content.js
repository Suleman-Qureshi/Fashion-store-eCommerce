export const DUMMY_ORDERS = [
  {
    _id: "order000001",
    createdAt: "2024-01-10T10:30:00.000Z",
    status: "delivered",
    totalPrice: 120,
    shippingPrice: 10,
    taxPrice: 5,
    shippingInfo: {
      address: "123 Main St",
      apartment: "Apt 4B",
      city: "New York",
      zip: "10001",
      country: "USA",
    },
    shippingMethod: "Express Delivery (2-3 business days)",
    orderItems: [
      {
        name: "Hand Bag",
        quantity: 1,
        price: 70,
        productId: {
          imgSrc1: "https://bootstrapmade.com/content/demo/FashionStore/assets/img/product/product-1.webp",
          sku: "RUN-001",
        },
      },
      {
        name: "Hand Bag",
        quantity: 2,
        price: 50,
        productId: {
          imgSrc1: "https://bootstrapmade.com/content/demo/FashionStore/assets/img/product/product-1-variant.webp",
          sku: "TSHIRT-002",
        },
      },
    ],
  },
  {
    _id: "order000002",
    createdAt: "2024-01-18T14:15:00.000Z",
    status: "processing",
    totalPrice: 85,
    shippingPrice: 10,
    taxPrice: 3.5,
    shippingInfo: {
      address: "456 Oak Avenue",
      apartment: "",
      city: "Los Angeles",
      zip: "90001",
      country: "USA",
    },
    shippingMethod: "Standard Shipping (3-5 business days)",
    orderItems: [
      {
        name: "Wooden Chair",
        quantity: 1,
        price: 55,
        productId: {
          imgSrc1: "https://bootstrapmade.com/content/demo/FashionStore/assets/img/product/product-2.webp",
          sku: "Wooden-Chair-010",
        },
      },
      {
        name: "Wooden Chair",
        quantity: 1,
        price: 30,
        productId: {
          imgSrc1: "https://bootstrapmade.com/content/demo/FashionStore/assets/img/product/product-2-variant.webp",
          sku: "Chair",
        },
      },
    ],
  },
  {
    _id: "order000003",
    createdAt: "2024-01-25T09:00:00.000Z",
    status: "cancelled",
    totalPrice: 45,
    shippingPrice: 10,
    taxPrice: 0,
    shippingInfo: {
      address: "789 Pine Road",
      apartment: "Unit 12",
      city: "Chicago",
      zip: "60601",
      country: "USA",
    },
    shippingMethod: "Express Delivery (2-3 business days)",
    orderItems: [
      {
        name: "Women Glasses",
        quantity: 1,
        price: 20,
        productId: {
          imgSrc1: "https://bootstrapmade.com/content/demo/FashionStore/assets/img/product/product-3.webp",
          sku: "Glasses",
        },
      },
      {
        name: "Glasses",
        quantity: 1,
        price: 25,
        productId: {
          imgSrc1: "https://bootstrapmade.com/content/demo/FashionStore/assets/img/product/product-3-variant.webp",
          sku: "Glasses",
        },
      },
    ],
  },
];