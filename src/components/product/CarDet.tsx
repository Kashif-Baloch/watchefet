import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ChevronRight, Star, Package, RefreshCw, Box } from 'lucide-react';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import Button from '../../components/common/Button';
import { useCart } from '../../context/CartContext';

interface QualityOption {
    name: string;
    price: number;
    description: string;
}


const ProductDet: React.FC = () => {
    const { id } = useParams()
    const { products } = useCart()

    const [productList, _setProductList] = useState(JSON.parse(localStorage.getItem('productList') as any));

    const product = productList.find((product: Object | any) => product?.id === Number(id));

    const [mainImage, setMainImage] = useState(product?.image);
    const [selectedQuality, setSelectedQuality] = useState<QualityOption>({
        name: 'AAA Grade',
        price: product.price,
        description: 'High-quality replica with standard movement',
    });
    const [includeBox, setIncludeBox] = useState(true);
    const [includePremiumBox, setIncludePremiumBox] = useState(false);
    const [includeLuxuryBox, setIncludeLuxuryBox] = useState(false);
    const { addItem } = useCart();
    
    const pricing = () => {
        if (!product?.cate) {
            if (products.category === 'w-rolex') {
                return {
                    "AAA": 0, "AAAAA": 299, "Super Clone": 489, img: `https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Hublot/Box%20&%20Papers.jpg`
                };
            }
            else if (products.category === 'w-ap') {
                return {
                    "AAA": 199, "AAAAA": 0, "Super Clone": 549, img: `https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Hublot/Box%20&%20Papers.jpg`
                };
            }
            else if (products.category === 'w-patek') {
                return {
                    "AAA": 199, "AAAAA": 0, "Super Clone": 549, img: `https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Hublot/Box%20&%20Papers.jpg`
                };
            }
            else if (products.category === 'w-hublot') {
                return {
                    "AAA": 199, "AAAAA": 0, "Super Clone": 0, img: `https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Hublot/Box%20&%20Papers.jpg`
                };
            }
            else if (products.category === 'daydate' || products.category === 'datejust' || products.category === 'submariner' || products.category === 'gmtmaster' || products.category === 'daytona' || products.category === 'explorer' || products.category === 'deepsea' || products.category === 'yachtmaster' || products.category === 'skydweller' || products.category === 'rolex') {
                return { "AAA": 179, "AAAAA": 299, "Super Clone": 559, img: "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Box.jpg" };
            }
            else if (products.category === 'aquanaut' || products.category === 'patek') {
                return {
                    "AAA": 199, "AAAAA": 0, "Super Clone": 599, img: `https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Patek/Box%20&%20Certificate.jpg`
                };
            }
            else if (products.category === 'nautilus') {
                return {
                    "AAA": 199, "AAAAA": 299, "Super Clone": 599, img: `https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Patek/Box%20&%20Certificate.jpg`
                };
            }
            else if (products.category === 'bigbang') {
                return {
                    "AAA": 199, "AAAAA": 0, "Super Clone": 679, img: `https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Hublot/Box%20&%20Papers.jpg`
                };
            }
            else if (products.category === 'classicfusion') {
                return {
                    "AAA": 199, "AAAAA": 0, "Super Clone": 549, img: `https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Hublot/Box%20&%20Papers.jpg`
                };
            }
            else if (products.category === 'spiritofbigbang') {
                return {
                    "AAA": 199, "AAAAA": 0, "Super Clone": 579, img: `https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Hublot/Box%20&%20Papers.jpg`
                };
            }
            else if (products.category === "apy") {
                return product?.pricing
            }
            else {
                return {
                    "AAA": 0, "AAAAA": 0, "Super Clone": 0, img: ``
                };
            }
        } else {
            return product?.pricing
        }
    }

    const handleBoxSelection = (type: 'standard' | 'premium' | 'luxury') => {
        if (type === 'standard') {
            setIncludeBox(true);
            setIncludePremiumBox(false);
            setIncludeLuxuryBox(false);
        } else if (type === 'premium') {
            setIncludeBox(false);
            setIncludePremiumBox(true);
            setIncludeLuxuryBox(false);
        } else {
            setIncludeBox(false);
            setIncludePremiumBox(false);
            setIncludeLuxuryBox(true);
        }
    };

    const getpremium  = ()=>{
        if (product.category === "Audemars Piguet") {
            return 29
        }
        if (product.category === "Rolex") {
            return 39
        }
        if (product.category === "Patek Philippe") {
            return 29
        }
        if (product.category === "Hublot") {
            return 39
        }
        else return 0
    }

    const getluxury = ()=>{
        if (product.category === "Audemars Piguet") {
            return 79
        }
        if (product.category === "Rolex") {
            return 0
        }
        if (product.category === "Patek Philippe") {
            return 99
        }
        if (product.category === "Hublot") {
            return 0
        }
        else return 0
    }


    useEffect(() => {
        if (!includeBox && !includePremiumBox && !includeLuxuryBox) {
            setIncludeBox(true);
        }
    }, [includeBox, includePremiumBox, includeLuxuryBox]);

    const handleAddToCart = () => {
        const idwDate = Date.now()
        const carListItems = JSON.parse(localStorage.getItem(product?.category as any) as any)
        // checking if the same id product already exist in the localstorage then nevert add
        const isProductExist = carListItems?.find((item: any) => item.id === product.id)
        if (!isProductExist) {
            carListItems ? localStorage.setItem(product?.category as any, JSON.stringify([...carListItems, product])) : localStorage.setItem(product?.category as any, JSON.stringify([product]))
        }



        // also adding the reviews with other detail in the product as it doesnt exist in the product object
        // const cartproducts = carListItems ? { ...carListItems, [idwDate]: { ...product, reviews } } : { [idwDate]: { ...product, reviews } }
        // localStorage.setItem(product?.category as any, JSON.stringify([...carListItems, product]))

        addItem({
            _id: product.id,
            id: idwDate,
            name: `${product.name} - ${selectedQuality.name}`,
            price: selectedQuality.price,
            image: mainImage,
            quality: selectedQuality.name,
        });

        if (includePremiumBox) {
            addItem({
                _id: product.id,
                id: idwDate + 1,
                name: `Premium ${product.category} Box with Certificate`,
                price: getpremium(),
                image: pricing()?.img,
                quality: 'Premium',
            });
        }

        if (includeLuxuryBox) {
            addItem({
                _id: product.id,
                id: idwDate + 1,
                name: `Luxury ${product.category} Box with Certificate`,
                price: getluxury(),
                image: pricing()?.img,
                quality: 'Luxury',
            });
        }
    };

    useEffect(() => {

        console.log(JSON.parse(localStorage.getItem('productList') as any));
        console.log(localStorage.getItem('category') as any);

    }, []);

    const productImages = [product?.image, ...product?.imagesList];

    const backurl = () => {
        if (product?.category == 'Audemars Piguet' && products?.category == 'w-ap') {
            return '/audemars-piguet/womens'
        }
        else if (product?.category == 'Rolex' && products?.category == 'w-rolex') {
            return '/rolex/womens'
        }
        else if (product?.category == 'Patek Philippe' && products?.category == 'w-patek') {
            return '/patek-philippe/womens'
        }
        else if (product?.category == 'Hublot' && products?.category == 'w-hublot') {
            return '/hublot/womens'
        }
        else if (product?.category === 'Rolex') {
            return '/rolex'
        }
        else if (product?.category === 'Patek Philippe') {
            return '/patek-philippe'
        }
        else if (product?.category === 'Hublot') {
            return '/hublot'
        }
        else if (product?.category === 'Audemars Piguet') {
            return '/audemars-piguet'
        }
        else {
            return '/collections'
        }
    }

    const showurl = products?.category == 'w-ap' || products?.category == 'w-rolex' || products?.category == 'w-patek' || products?.category == 'w-hublot' ? false : true;

    const backbaseurl = () => {
        // if (products?.category == 'w-ap') {
        //     return '/audemars-piguet/womens'
        // }
        // else if (products?.category == 'w-rolex') {
        //     return '/rolex/womens'
        // }
        // else if (products?.category == 'w-patek') {
        //     return '/patek-philippe/womens'
        // }
        // else if (products?.category == 'w-hublot') {
        //     return '/hublot/womens'
        // }
        if (products?.category == 'datejust' || products?.category == 'submariner' || products?.category == 'daytona') {
            return `/rolex/${products?.category}`
        }
        else if (products?.category == 'daydate') {
            return '/rolex/day-date'
        }
        else if (products?.category == 'gmtmaster') {
            return '/rolex/gmt-master-ii'
        }
        else if (products?.category == 'explorer') {
            return '/rolex/explorer-ii'
        }
        else if (products?.category == 'deepsea') {
            return '/rolex/deepsea'
        }
        else if (products?.category == 'yachtmaster') {
            return '/rolex/yacht-master'
        }
        else if (products?.category == 'skydweller') {
            return '/rolex/sky-dweller'
        }
        else if (products?.category == 'apy') {
            return '/audemars-piguet'
        }
        else if (products?.category == 'nautilus') {
            return '/patek-philippe/nautilus'
        }
        else if (products?.category == 'aquanaut') {
            return '/patek-philippe/aquanaut'
        }
        else if (products?.category == 'bigbang') {
            return '/hublot/big-bang'
        }
        else if (products?.category == 'classicfusion') {
            return '/hublot/classic-fusion'
        }
        else if (products?.category == 'spiritofbigbang') {
            return '/hublot/spirit-of-big-bang'
        }
        else {
            return '/womens-collection'
        }
    }

    const getname = () =>{
        if (products?.category == 'datejust') {
            return 'Datejust'
        }
        else if (products?.category == 'submariner') {
            return 'Submariner'
        }
        else if (products?.category == 'daytona') {
            return 'Daytona'
        }
        else if (products?.category == 'daydate') {
            return 'Day-Date'
        }
        else if (products?.category == 'gmtmaster') {
            return 'GMT-Master II'
        }
        else if (products?.category == 'explorer') {
            return 'Explorer II'
        }
        else if (products?.category == 'deepsea') {
            return 'Sea-Dweller & Deepsea'
        }
        else if (products?.category == 'yachtmaster') {
            return 'Yacht-Master'
        }
        else if (products?.category == 'skydweller') {
            return 'Sky-Dweller'
        }
        else if (products?.category == 'apy') {
            return 'Audemars Piguet'
        }
        else if (products?.category == 'nautilus') {
            return 'Nautilus'
        }
        else if (products?.category == 'aquanaut') {
            return 'Aquanaut'
        }
        else if (products?.category == 'bigbang') {
            return 'Big Bang'
        }
        else if (products?.category == 'classicfusion') {
            return 'Classic Fusion'
        }
        else if (products?.category == 'spiritofbigbang') {
            return 'Spirit Of Big Bang'
        }
        else {
            return products?.category
        }
    }

    return (
        <div className="bg-black text-white min-h-screen">
            <Header />
            <main className="pt-20">
                <div className="bg-gradient-to-b from-black to-zinc-900 py-12">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        {products.category !== "watches" ? <div className="flex items-center gap-2 text-sm text-gray-400 mb-8">
                            <Link to="/" className="hover:text-gold-500">Home</Link>
                            <ChevronRight className="h-4 w-4" />
                            <Link to={!showurl ? "/womens-collection" : "/collections"} className="hover:text-gold-500">{!showurl ? "Women's Collections" : "Collections"}</Link>
                            <ChevronRight className="h-4 w-4" />
                            <Link to={backurl()} className="hover:text-gold-500">{product.category}</Link>
                            <ChevronRight className="h-4 w-4" />
                            {showurl && products?.category !== "apy" && <Link to={backbaseurl()} className="hover:text-gold-500 capitalize">{getname()}</Link>}
                            {showurl && products?.category !== "apy" && <ChevronRight className="h-4 w-4" />}
                            <span className="text-gold-500">{product?.name}</span>
                        </div>
                        :
                         <div className="flex items-center gap-2 text-sm text-gray-400 mb-8">
                         <Link to="/" className="hover:text-gold-500">Home</Link>
                         <ChevronRight className="h-4 w-4" />
                         <span className="text-gold-500">{product?.name}</span>
                     </div>
                        }

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                            <div className="space-y-4">
                                {/* Fixing the height of the image so that on changing the image page should not jump around */}
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

                                <div className="mb-8">
                                    <h3 className="text-lg font-medium text-white mb-4">Select Quality</h3>
                                    <div className="space-y-4">
                                        {pricing()?.["AAA"] !== 0 && <button
                                            onClick={() => setSelectedQuality(
                                                {
                                                    name: 'AAA Grade',
                                                    price: pricing()?.["AAA"] || 0,
                                                    description: 'High-quality replica with standard movement',
                                                }
                                            )}
                                            className={`w-full p-4 rounded-lg border transition-all ${selectedQuality.name === 'AAA Grade'
                                                ? 'border-gold-500 bg-gold-500/10'
                                                : 'border-zinc-700 hover:border-gold-500/50'
                                                }`}
                                        >
                                            <div className="flex justify-between items-center mb-2">
                                                <span className="font-medium text-white">AAA Grade</span>
                                                <span className="text-gold-500">£{pricing()?.["AAA"]}</span>
                                            </div>
                                            <p className="text-sm text-gray-400 text-left">High-quality replica with standard movement</p>
                                        </button>}
                                        {pricing()?.["AAAAA"] !== 0 && <button
                                            onClick={() => setSelectedQuality(
                                                {
                                                    name: 'AAAAA Grade',
                                                    price: pricing()?.["AAAAA"] || 0,
                                                    description: 'Premium replica with enhanced movement and finishing',
                                                }
                                            )}
                                            className={`w-full p-4 rounded-lg border transition-all ${selectedQuality.name === 'AAAAA Grade'
                                                ? 'border-gold-500 bg-gold-500/10'
                                                : 'border-zinc-700 hover:border-gold-500/50'
                                                }`}
                                        >
                                            <div className="flex justify-between items-center mb-2">
                                                <span className="font-medium text-white">AAAAA Grade</span>
                                                <span className="text-gold-500">£{pricing()?.["AAAAA"]}</span>
                                            </div>
                                            <p className="text-sm text-gray-400 text-left">Premium replica with enhanced movement and finishing</p>
                                        </button>}
                                        {pricing()?.["Super Clone"] !== 0 && <button
                                            onClick={() => setSelectedQuality(
                                                {
                                                    name: 'Super Clone',
                                                    price: pricing()?.["Super Clone"] || 0,
                                                    description: 'Highest quality replica with Swiss clone movement',
                                                }
                                            )}
                                            className={`w-full p-4 rounded-lg border transition-all ${selectedQuality.name === 'Super Clone'
                                                ? 'border-gold-500 bg-gold-500/10'
                                                : 'border-zinc-700 hover:border-gold-500/50'
                                                }`}
                                        >
                                            <div className="flex justify-between items-center mb-2">
                                                <span className="font-medium text-white">Super Clone</span>
                                                <span className="text-gold-500">£{pricing()?.["Super Clone"]}</span>
                                            </div>
                                            <p className="text-sm text-gray-400 text-left">Highest quality replica with Swiss clone movement</p>
                                        </button>}
                                    </div>
                                </div>

                                <div className="mb-8">
                                    <h3 className="text-lg font-medium text-white mb-4">Box Selection (Required)</h3>
                                    <div className="space-y-4">
                                        <button
                                            onClick={() => handleBoxSelection('standard')}
                                            className={`w-full p-4 rounded-lg border transition-all ${includeBox
                                                ? 'border-gold-500 bg-gold-500/10'
                                                : 'border-zinc-700 hover:border-gold-500/50'
                                                }`}
                                        >
                                            <div className="flex justify-between items-center">
                                                <div className="flex items-center gap-3">
                                                    <Box className="h-5 w-5 text-gold-500" />
                                                    <div className="text-left">
                                                        <span className="font-medium text-white">Standard Box</span>
                                                        <p className="text-sm text-gray-400">Standard presentation box</p>
                                                    </div>
                                                </div>
                                                <span className="text-green-500">FREE</span>
                                            </div>
                                        </button>

                                        {getpremium() > 0 && <button
                                            onClick={() => handleBoxSelection('premium')}
                                            className={`w-full p-4 rounded-lg border transition-all ${includePremiumBox
                                                ? 'border-gold-500 bg-gold-500/10'
                                                : 'border-zinc-700 hover:border-gold-500/50'
                                                }`}
                                        >
                                            <div className="flex justify-between items-center">
                                                <div className="flex items-center gap-3">
                                                    <Box className="h-5 w-5 text-gold-500" />
                                                    <div className="text-left">
                                                        <span className="font-medium text-white">Premium Box & Certificate</span>
                                                        <p className="text-sm text-gray-400">Premium box with authentication certificate</p>
                                                    </div>
                                                </div>
                                                <span className="text-gold-500">£{getpremium()}</span>
                                            </div>
                                        </button>}

                                        {getluxury() > 0 && <button
                                            onClick={() => handleBoxSelection('luxury')}
                                            className={`w-full p-4 rounded-lg border transition-all ${includeLuxuryBox
                                                ? 'border-gold-500 bg-gold-500/10'
                                                : 'border-zinc-700 hover:border-gold-500/50'
                                                }`}
                                        >
                                            <div className="flex justify-between items-center">
                                                <div className="flex items-center gap-3">
                                                    <Box className="h-5 w-5 text-gold-500" />
                                                    <div className="text-left">
                                                        <span className="font-medium text-white">Luxury Box & Certificate</span>
                                                        <p className="text-sm text-gray-400">Luxury box with authentication certificate</p>
                                                    </div>
                                                </div>
                                                <span className="text-gold-500">£{getluxury()}</span>
                                            </div>
                                        </button>}
                                    </div>
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
                                </div>

                                <Button
                                    variant="primary"
                                    size="lg"
                                    fullWidth
                                    onClick={handleAddToCart}
                                >
                                    Add to Cart - £{selectedQuality.price + (includePremiumBox ? 39 : 0)}
                                </Button>
                            </div>
                        </div>

                        <div className="mt-16">
                            <h2 className="text-2xl font-serif font-bold text-white mb-6">Product Details</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {/* <div>
                                    <h3 className="text-lg font-medium text-white mb-4">Specifications</h3>
                                    <div className="space-y-3">
                                        <div className="flex justify-between py-2 border-b border-zinc-800">
                                            <span className="text-gray-400">Case Size</span>
                                            <span className="text-white">36mm - 41mm</span>
                                        </div>
                                        <div className="flex justify-between py-2 border-b border-zinc-800">
                                            <span className="text-gray-400">Movement</span>
                                            <span className="text-white">Automatic</span>
                                        </div>
                                        <div className="flex justify-between py-2 border-b border-zinc-800">
                                            <span className="text-gray-400">Case Material</span>
                                            <span className="text-white">Stainless Steel, Titanium, Ceramic, Gold</span>
                                        </div>
                                        <div className="flex justify-between py-2 border-b border-zinc-800">
                                            <span className="text-gray-400">Water Resistance</span>
                                            <span className="text-white">50m - 100m</span>
                                        </div>
                                    </div>
                                </div> */}
                                <div>
                                    <h3 className="text-lg font-medium text-white mb-4">Description</h3>
                                    <p className="text-gray-400 leading-relaxed">
                                        {product?.description}
                                    </p>
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

export default ProductDet;