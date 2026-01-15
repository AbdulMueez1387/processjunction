import "./OurProducts.css";
import { FaOilCan, FaSprayCan, FaTools } from "react-icons/fa";

const products = [
  {
    id: 1,
    title: "Engine oil of various grades",
    image: "/images/firstproduct.png",
    icon: <FaOilCan />,
  },
  {
    id: 2,
    title: "Car Shampoo and Cleaning items",
    image: "/images/secondproduct.png",
    icon: <FaSprayCan />,
  },
  {
    id: 3,
    title: "Car Maintenance Items",
    image: "/images/thirdproduct.png",
    icon: <FaTools />,
  },
];

const OurProducts = () => {
  return (
    <section className="products-section">
      <h2 className="section-title">Our Products</h2>

      <div className="products-container">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <div className="image-wrapper">
              <img src={product.image} alt={product.title} />

              {/* ICON */}
              <div className="icon-box">
                {product.icon}
              </div>
            </div>

            <div className="card-content">
              <h3>{product.title}</h3>
              <span className="read-more">Read More</span>
            </div>
          </div>
        ))}

        {/* right arrow */}
        <div className="arrow">→</div>
      </div>
    </section>
  );
};

export default OurProducts;
