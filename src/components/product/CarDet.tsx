import React, { useState } from 'react';
import { Star, Package, RefreshCw } from 'lucide-react';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import { useParams } from 'react-router-dom';

const CarDet: React.FC = () => {
    const { id } = useParams();
    const productList = JSON.parse(localStorage.getItem('cartProductList') as any);
    const product = productList[id as any];
    const [mainImage, setMainImage] = useState(product?.image);
    const productImages = product?.imagesList;

    return (
        <div className="bg-black text-white min-h-screen">
            <Header />
            <main className="pt-20">
                <div className="bg-gradient-to-b from-black to-zinc-900 py-12">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                            <div className="space-y-4">
                                <div className="max-w-lg mx-auto h-[500px] rounded-lg overflow-hidden bg-zinc-900">
                                    <img
                                        src={mainImage}
                                        alt={product?.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="grid grid-cols-4 gap-4 max-w-lg mx-auto">
                                    {productImages.map((image: any, index: any) => (
                                        <button
                                            key={index}
                                            onClick={() => setMainImage(image)}
                                            className={`aspect-square rounded-lg overflow-hidden bg-zinc-900 border-2 transition-colors ${mainImage === image ? 'border-gold-500' : 'border-transparent hover:border-gold-500/50'
                                                }`}
                                        >
                                            <img
                                                src={image}
                                                alt={product?.name}
                                                className="w-full h-full object-cover"
                                            />
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h1 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
                                    {product?.name}
                                </h1>
                                <div className="flex items-center gap-2 mb-6">
                                    <div className="flex">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className="h-5 w-5 text-gold-500 fill-gold-500" />
                                        ))}
                                    </div>
                                    <span className="text-gray-400">({product?.reviews} Reviews)</span>
                                </div>
                                <div className='mb-6'>
                                    <span className="text-gray-400 text-2xl">Price : </span><span className="text-gold-500 text-2xl">{product?.price}</span>
                                </div>
                                <div className="grid grid-cols-2 gap-4 mb-8">
                                    <div className="flex items-start gap-3 p-4 bg-zinc-900/50 rounded-lg">
                                        <Package className="h-5 w-5 text-gold-500" />
                                        <div>
                                            <h4 className="font-medium text-white">Shipping</h4>
                                            <p className="text-sm text-gray-400">2-10 Business Days</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3 p-4 bg-zinc-900/50 rounded-lg">
                                        <RefreshCw className="h-5 w-5 text-gold-500" />
                                        <div>
                                            <h4 className="font-medium text-white">Returns</h4>
                                            <p className="text-sm text-gray-400">14 Day Returns</p>
                                        </div>
                                    </div>
                                    <div className="col-span-2 p-2">
                                        <p className="text-gray-400 leading-relaxed">
                                            {product?.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default CarDet;