import React from 'react';
import { useCart } from '../../context/CartContext';

interface Product {
  name: string;
  reference: string;
  description: string;
  details: string[];
  price: number;
  images: string[];
}

interface ProductDetailsProps {
  product: Product;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
  const { addToCart } = useCart() as any;
  const [selectedImage, setSelectedImage] = React.useState(0);

  const handleAddToCart = () => {
    addToCart({
      id: product.reference,
      name: product.name,
      price: product.price,
      image: product.images[0]
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <div className="aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden">
            <img
              src={product.images[selectedImage]}
              alt={product.name}
              className="w-full h-full object-center object-cover"
            />
          </div>
          <div className="grid grid-cols-4 gap-4">
            {product.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`aspect-w-1 aspect-h-1 rounded-lg overflow-hidden ${selectedImage === index ? 'ring-2 ring-indigo-500' : ''
                  }`}
              >
                <img
                  src={image}
                  alt={`${product.name} view ${index + 1}`}
                  className="w-full h-full object-center object-cover"
                />
              </button>
            ))}
          </div>
        </div>
        <div className="space-y-6">
          <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
          <p className="text-gray-500">Reference: {product.reference}</p>
          <p className="text-xl font-medium text-gray-900">${product.price.toLocaleString()}</p>
          <div className="prose prose-sm text-gray-500">
            <p>{product.description}</p>
          </div>
          <div className="border-t border-gray-200 pt-6">
            <h3 className="text-lg font-medium text-gray-900">Details</h3>
            <ul className="mt-4 space-y-2">
              {product.details.map((detail, index) => (
                <li key={index} className="text-gray-500">
                  • {detail}
                </li>
              ))}
            </ul>
          </div>
          <button
            onClick={handleAddToCart}
            className="w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;