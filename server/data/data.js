import bcrypt from 'bcryptjs'

const data = {
  users: [
    {
      name:"Karan",
      email:"karan.mann@hyperisland.se",
      password: bcrypt.hashSync('1234', 8),
      isAdmin: true
    },
    {
      name:"John",
      email:"john@mail.se",
      password: bcrypt.hashSync('1234', 8),
      isAdmin: false
    }
  ],
  products: [
    {
      name: "Nike Slim Shirt1",
      category: "Shirts",
      image: "/images/p1.jpg",
      price: 120,
      countInStock: 0,
      brand: "Nike",
      rating: 4.5,
      numReviews: 10,
      description: "high quality product",
    },
    {
      name: "Nike Slim Shirt2",
      category: "Shirts",
      image: "/images/p1.jpg",
      price: 121,
      countInStock: 5,
      brand: "Nike",
      rating: 5,
      numReviews: 11,
      description: "high quality product",
    },
    {
      name: "Nike Slim Shirt3",
      category: "Shirts",
      image: "/images/p1.jpg",
      price: 122,
      countInStock: 20,
      brand: "Nike",
      rating: 4.5,
      numReviews: 12,
      description: "high quality product",
    },
    {
      name: "Nike Slim Shirt4",
      category: "Shirts",
      image: "/images/p1.jpg",
      price: 123,
      countInStock: 2,
      brand: "Nike",
      rating: 3,
      numReviews: 13,
      description: "high quality product",
    },
    {
      name: "Nike Slim Shirt5",
      category: "Shirts",
      image: "/images/p1.jpg",
      price: 124,
      countInStock: 40,
      brand: "Nike",
      rating: 4,
      numReviews: 14,
      description: "high quality product",
    },
    {
      name: "Nike Slim Shirt6",
      category: "Shirts",
      image: "/images/p1.jpg",
      price: 125,
      countInStock: 9,
      brand: "Nike",
      rating: 5,
      numReviews: 15,
      description: "high quality product",
    },
  ],
};

export default data