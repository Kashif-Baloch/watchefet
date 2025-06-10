import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import Header from '../../../components/layout/Header';
import Footer from '../../../components/layout/Footer';
import ProductCard from '../../../components/product/ProductCard';
import SectionTitle from '../../../components/common/SectionTitle';
import { useCart } from '../../../context/CartContext';

const datejustWatches = [
  {
    id: 1,
    name: 'Datejust 41mm Blue Diamond Dial Fluted Jubilee',
    price: 179,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Datejust/datejust-bluedial-diamond-silverjubilee-fluted-41/datejust-bluedial-diamond-silverjubilee-fluted-41.png',
    category: 'Rolex',
    imagesList: [
      'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Datejust/datejust-bluedial-diamond-silverjubilee-fluted-41/back',
      'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Datejust/datejust-bluedial-diamond-silverjubilee-fluted-41/clasp.jpg',
      'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Datejust/datejust-bluedial-diamond-silverjubilee-fluted-41/main',
    ],
    description: "The Rolex Datejust 41 is the epitome of classic style and functionality. This model features a stunning blue dial housed in a 41mm case, perfectly balanced for both elegance and presence on the wrist. The signature Jubilee bracelet provides exceptional comfort and sophistication, while the fluted bezel adds a distinctive touch of luxury.",
    isNew: true,
  },
  {
    id: 2,
    name: 'Datejust 41mm Fluted Bezel Champagne Dial',
    price: 179,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Datejust/datejust-blackchampagnedial-silverjubilee-fluted/datejust-blackchampagnedial-silverjubilee-fluted.png',
    category: 'Rolex',
    imagesList: [
      'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Datejust/datejust-blackchampagnedial-silverjubilee-fluted/clasp.jpg',
      'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Datejust/datejust-blackchampagnedial-silverjubilee-fluted/back',
      'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Datejust/datejust-blackchampagnedial-silverjubilee-fluted/main',
    ],
    description: "The Rolex Datejust 41 is the epitome of classic style and functionality. This model features a stunning black dial housed in a 41mm case, perfectly balanced for both elegance and presence on the wrist. The signature Jubilee bracelet provides exceptional comfort and sophistication, while the fluted bezel adds a distinctive touch of luxury.",
    isNew: false,
  },
  {
    id: 3,
    name: 'Datejust 41mm Diamond Dial with Fluted Bezel',
    price: 179,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Datejust/datejust-greydial-diamond-silverjubilee-41/datejust-greydial-diamond-silverjubilee-41.jpg',
    category: 'Rolex',
    imagesList: [
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Datejust/datejust-greydial-diamond-silverjubilee-41/back",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Datejust/datejust-greydial-diamond-silverjubilee-41/clasp.jpg"
    ],
    description: "The Rolex Datejust 41 is the epitome of classic style and functionality. This model features a stunning grey dial with diamond hour markers housed in a 41mm case, perfectly balanced for both elegance and presence on the wrist. The signature Jubilee bracelet provides exceptional comfort and sophistication, while the fluted bezel adds a distinctive touch of luxury.",
    isNew: true,
  },
  {
    id: 4,
    name: 'Datejust 41mm Wimbledon Dial with Fluted Bezel',
    price: 179,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Datejust/datejust-wimbledon-41/datejust-wimbledon-41.jpg',
    category: 'Rolex',
    imagesList: [
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Datejust/datejust-wimbledon-41/clasp.jpg",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Datejust/datejust-wimbledon-41/back"
    ],
    description: "The Rolex Datejust 41 with Wimbledon dial is a masterpiece of style and functionality. This model features the distinctive Wimbledon dial, characterized by its slate grey face with Roman numerals in 18 ct white gold and a green finish. The 41mm case provides perfect balance on the wrist, while the signature Jubilee bracelet offers exceptional comfort. The fluted bezel in 18 ct white gold adds a refined touch to this iconic timepiece.",
    isNew: false,
  },
  {
    id: 5,
    name: 'Datejust 41mm White Roman Dial Fluted Jubilee',
    price: 179,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Datejust/datejust-whitedial-roman-silverjubilee-fluted-41/datejust-whitedial-roman-silverjubilee-fluted-41.jpg',
    category: 'Rolex',
    imagesList: [
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Datejust/datejust-whitedial-roman-silverjubilee-fluted-41/back",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Datejust/datejust-whitedial-roman-silverjubilee-fluted-41/clasp.jpg"
    ],
    description: "The Rolex Datejust 41 with White Roman Dial is a testament to timeless elegance. This model features a pristine white dial with Roman numerals in polished finish, creating a sophisticated and classic appearance. The 41mm case is perfectly proportioned, while the signature Jubilee bracelet provides exceptional comfort. The fluted bezel adds a distinctive touch of luxury to this iconic timepiece.",
    isNew: true,
  },
  {
    id: 6,
    name: 'Datejust 41mm Fluted Bezel Roman Numerals',
    price: 179,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Datejust/datejust-bluedial-roman-fluted-jubilee-41/datejust-bluedial-roman-fluted-jubilee-41.webp',
    category: 'Rolex',
    imagesList: [
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Datejust/datejust-bluedial-roman-fluted-jubilee-41/back",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Datejust/datejust-bluedial-roman-fluted-jubilee-41/clasp.jpg"
    ],
    description: "The Rolex Datejust 41 with Roman numerals is a perfect blend of classic elegance and modern sophistication. This model features a stunning blue dial with applied Roman numerals, creating a timeless and refined appearance. The 41mm case provides excellent presence on the wrist, while the signature Jubilee bracelet ensures maximum comfort. The fluted bezel adds a distinctive touch of luxury that has become synonymous with the Datejust collection.",
    isNew: false,
  },
  {
    id: 7,
    name: 'Datejust 41mm Gold Diamond Dial Two-Tone',
    price: 179,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Datejust/datejust-golddial-diamond-2tonesilvergoldjubilee-fluted-41/datejust-golddial-diamond-2tonesilvergoldjubilee-fluted-41.jpg',
    category: 'Rolex',
    imagesList: [
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Datejust/datejust-golddial-diamond-2tonesilvergoldjubilee-fluted-41/back.webp",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Datejust/datejust-golddial-diamond-2tonesilvergoldjubilee-fluted-41/clasp.webp"
    ],
    description: "The Rolex Datejust 41 Two-Tone with Gold Diamond Dial exemplifies luxury and sophistication. This model features a stunning gold dial with diamond hour markers, housed in a 41mm case combining stainless steel and 18k gold. The signature Jubilee bracelet provides exceptional comfort, while the fluted bezel adds a distinctive touch of elegance. The combination of precious metals and diamonds creates a timepiece that's both luxurious and versatile.",
    isNew: true,
  },
  {
    id: 8,
    name: 'Datejust 41mm Gold Champagne Dial Two-Tone',
    price: 179,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Datejust/datejust-golddial-champagne-2tonesilvergoldjubilee-fluted-41/datejust-golddial-champagne-2tonesilvergoldjubilee-fluted-41.jpg',
    category: 'Rolex',
    imagesList: [
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Datejust/datejust-golddial-champagne-2tonesilvergoldjubilee-fluted-41/back.webp",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Datejust/datejust-golddial-champagne-2tonesilvergoldjubilee-fluted-41/clasp.webp",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Datejust/datejust-golddial-champagne-2tonesilvergoldjubilee-fluted-41/side.webp"
    ],
    description: "The Rolex Datejust 41 Two-Tone with Gold Diamond Dial exemplifies luxury and sophistication. This model features a stunning gold dial with diamond hour markers, housed in a 41mm case combining stainless steel and 18k gold. The signature Jubilee bracelet provides exceptional comfort, while the fluted bezel adds a distinctive touch of elegance. The combination of precious metals and diamonds creates a timepiece that's both luxurious and versatile.",
    isNew: false,
  },
  {
    id: 9,
    name: 'Datejust 41mm Wimbledon Dial Two-Tone',
    price: 179,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Datejust/datejust-wimbledon-2tonesilvergold-jubilee-fluted-41/datejust-wimbledon-2tonesilvergold-jubilee-fluted-41.jpg',
    category: 'Rolex',
    imagesList: [
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Datejust/datejust-wimbledon-2tonesilvergold-jubilee-fluted-41/back.webp",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Datejust/datejust-wimbledon-2tonesilvergold-jubilee-fluted-41/clasp.webp",
    ],
    description: "The Rolex Datejust 41 Two-Tone with Gold Champagne Dial represents timeless elegance. This model features a stunning champagne-colored dial that perfectly complements the two-tone case and bracelet combination of stainless steel and 18k gold. The signature Jubilee bracelet provides exceptional comfort, while the fluted bezel adds a classic touch of luxury. The warm tones of the dial create a sophisticated and versatile timepiece suitable for any occasion.",
    isNew: true,
  },
  {
    id: 10,
    name: 'Datejust 41mm Brown Dial Two-Tone',
    price: 179,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Datejust/datejust-browndial-champagne-2tonesilverrose-jubilee-fluted/datejust-browndial-champagne-2tonesilverrose-jubilee-fluted',
    category: 'Rolex',
    imagesList: [
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Datejust/datejust-browndial-champagne-2tonesilverrose-jubilee-fluted/back.webp",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Datejust/datejust-browndial-champagne-2tonesilverrose-jubilee-fluted/clasp.webp",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Datejust/datejust-browndial-champagne-2tonesilverrose-jubilee-fluted/side.webp"
    ],
    description: "The Rolex Datejust 41 Two-Tone with Brown Champagne dial exemplifies refined elegance. This model features a stunning brown champagne dial that creates a warm, sophisticated appearance, perfectly complemented by the two-tone combination of stainless steel and 18k rose gold. The signature Jubilee bracelet provides exceptional comfort, while the fluted bezel adds a classic touch of luxury. The harmonious blend of colors and materials makes this timepiece a versatile choice for both formal and casual occasions.",
    isNew: true,
  },
  {
    id: 11,
    name: 'Datejust 41mm Brown Diamond Dial Two-Tone',
    price: 179,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Datejust/datejust-browndial-diamond-2tonesilverrose-jubilee-fluted/datejust-browndial-diamond-2tonesilverrose-jubilee-fluted',
    category: 'Rolex',
    imagesList: [
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Datejust/datejust-browndial-diamond-2tonesilverrose-jubilee-fluted/back.webp",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Datejust/datejust-browndial-diamond-2tonesilverrose-jubilee-fluted/side2.webp",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Datejust/datejust-browndial-diamond-2tonesilverrose-jubilee-fluted/side.webp"
    ],
    description: "The Rolex Datejust 41 Two-Tone with Brown Diamond dial represents the pinnacle of luxury and sophistication. This model features a stunning brown dial adorned with diamond hour markers, creating an exquisite blend of elegance and opulence. The two-tone case and bracelet combination of stainless steel and 18k rose gold adds a warm, luxurious touch. The signature Jubilee bracelet provides exceptional comfort, while the fluted bezel completes the classic Datejust aesthetic. The combination of diamonds and precious metals makes this timepiece a true statement of refined taste and success.",
    isNew: true,
  },
  {
    id: 12,
    name: 'Datejust 41mm White Dial Champagne Silver Jubilee',
    price: 179,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Datejust/datejust-whitedial-champagne-silverjubilee-fluted/datejust-whitedial-champagne-silverjubilee-fluted-41',
    category: 'Rolex',
    imagesList: [
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Datejust/datejust-whitedial-champagne-silverjubilee-fluted/close%20up.png",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Datejust/datejust-whitedial-champagne-silverjubilee-fluted/clasp.jpg",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Datejust/datejust-whitedial-champagne-silverjubilee-fluted/back"
    ],
    description: "The Rolex Datejust 41 with White Champagne dial embodies timeless elegance. This model features a stunning white champagne dial that creates a subtle, sophisticated appearance. The 41mm case in 904L steel provides perfect proportions, while the signature Jubilee bracelet ensures exceptional comfort. The fluted bezel adds a classic touch of luxury that has become synonymous with the Datejust collection. The combination of the champagne dial with the steel case and bracelet creates a versatile timepiece suitable for any occasion.",
    isNew: true,
  },
  {
    id: 13,
    name: 'Datejust 41mm Mother of Pearl Diamond Dial',
    price: 179,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Datejust/datejust-mop-diamond-silverjubilee-fluted-41/datejust-mop-diamond-silverjubilee-fluted-41.jpg',
    category: 'Rolex',
    imagesList: [
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Datejust/datejust-mop-diamond-silverjubilee-fluted-41/back",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Datejust/datejust-mop-diamond-silverjubilee-fluted-41/clasp.jpg",
    ],
    description: "The Rolex Datejust 41 with Mother of Pearl Diamond dial represents the epitome of luxury and sophistication. This exquisite timepiece features a stunning mother of pearl dial adorned with diamond hour markers, creating a mesmerizing play of light and iridescence. The 41mm case in 904L steel provides perfect proportions, while the signature Jubilee bracelet ensures exceptional comfort. The fluted bezel adds a classic touch of luxury that has become synonymous with the Datejust collection. The combination of the natural mother of pearl, diamonds, and steel creates a timepiece that is both elegant and distinctive.",
    isNew: true,
  },
  {
    id: 14,
    name: 'Datejust 41mm Blue Dial Smooth Bezel',
    price: 179,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Datejust/Smooth%20Bezel/datejust-bluedial-champagne-smooth-silverjubilee/datejust-bluedial-champagne-smooth-silverjubilee',
    category: 'Rolex',
    imagesList: [
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Datejust/Smooth%20Bezel/datejust-bluedial-champagne-smooth-silverjubilee/close%20up.png",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Datejust/Smooth%20Bezel/datejust-bluedial-champagne-smooth-silverjubilee/clasp.jpg",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Datejust/Smooth%20Bezel/datejust-bluedial-champagne-smooth-silverjubilee/back"
    ],
    description: "The Rolex Datejust 41 with Blue Dial and Smooth Bezel offers a modern interpretation of the classic Datejust design. This model features a stunning blue dial that creates a vibrant, contemporary appearance, complemented by the clean lines of the smooth bezel. The 41mm case provides perfect proportions, while the signature Jubilee bracelet ensures exceptional comfort. The smooth bezel gives this timepiece a more understated, sporty character compared to its fluted bezel counterparts, making it a versatile choice for both casual and formal occasions.",
    isNew: true,
  },
  {
    id: 15,
    name: 'Datejust 41mm Green Dial Smooth Bezel',
    price: 179,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Datejust/Smooth%20Bezel/datejust-greendial-champagne-smooth-silverjubilee/datejust-greendial-champagne-smooth-silverjubilee',
    category: 'Rolex',
    imagesList: [
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Datejust/Smooth%20Bezel/datejust-greendial-champagne-smooth-silverjubilee/angle.png",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Datejust/Smooth%20Bezel/datejust-greendial-champagne-smooth-silverjubilee/back",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Datejust/Smooth%20Bezel/datejust-greendial-champagne-smooth-silverjubilee/clasp.jpg"
    ],
    description: "The Rolex Datejust 41 with Green Dial and Smooth Bezel offers a fresh and modern interpretation of the classic Datejust design. This model features a stunning green dial that creates a vibrant, nature-inspired appearance, complemented by the clean lines of the smooth bezel. The 41mm case provides perfect proportions, while the signature Jubilee bracelet ensures exceptional comfort. The smooth bezel gives this timepiece a more contemporary, sporty character compared to its fluted bezel counterparts, making it a perfect choice for both casual and formal occasions.",
    isNew: true,
  },
  {
    id: 16,
    name: 'Datejust 41mm Gold Diamond Dial Two-Tone Oyster',
    price: 179,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Datejust/Oyster/datejust-golddial-diamond-2tonesilvergoldoyster-fluted/datejust-golddial-diamond-2tonesilvergoldoyster-fluted',
    category: 'Rolex',
    imagesList: [
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Datejust/Oyster/datejust-golddial-diamond-2tonesilvergoldoyster-fluted/clasp.webp",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Datejust/Oyster/datejust-golddial-diamond-2tonesilvergoldoyster-fluted/back",
    ],
    description: "The Rolex Datejust 41 Two-Tone with Gold Diamond Dial and Oyster bracelet represents the perfect blend of luxury and durability. This model features a stunning gold dial adorned with diamond hour markers, creating an exquisite display of opulence. The two-tone case and bracelet combination of stainless steel and 18k gold adds a sophisticated touch, while the robust Oyster bracelet provides exceptional durability and comfort. The fluted bezel completes the classic Datejust aesthetic, making this timepiece a perfect choice for those who appreciate both luxury and practicality.",
    isNew: true,
  },
  {
    id: 17,
    name: 'Datejust 41mm Grey Diamond Dial Oyster',
    price: 179,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Datejust/Oyster/datejust-greydial-diamond-silveroyster-fluted/datejust-greydial-diamond-silveroyster-fluted',
    category: 'Rolex',
    imagesList: [
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Datejust/Oyster/datejust-greydial-diamond-silveroyster-fluted/back.webp",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Datejust/Oyster/datejust-greydial-diamond-silveroyster-fluted/clasp.webp"
    ],
    description: "The Rolex Datejust 41 with Grey Diamond Dial and Oyster bracelet combines elegance with robustness. This model features a sophisticated grey dial adorned with diamond hour markers, creating a perfect balance of luxury and understatement. The 41mm case in 904L steel provides excellent durability, while the sturdy Oyster bracelet offers exceptional comfort and a more sporty aesthetic compared to the Jubilee bracelet. The fluted bezel adds a classic touch of luxury that has become synonymous with the Datejust collection. This timepiece is perfect for those who appreciate refined luxury with a more robust, everyday wearable design.",
    isNew: true,
  },
  {
    id: 18,
    name: 'Datejust 41mm Mother of Pearl Diamond Dial Oyster',
    price: 179,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Datejust/Oyster/datejust-mop-diamond-silveroyster-fluted/datejust-mop-diamond-silveroyster-fluted',
    category: 'Rolex',
    imagesList: [
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Datejust/Oyster/datejust-mop-diamond-silveroyster-fluted/back.webp",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Datejust/Oyster/datejust-mop-diamond-silveroyster-fluted/clasp.webp"
    ],
    description: "The Rolex Datejust 41 with Mother of Pearl Diamond Dial and Oyster bracelet combines exquisite luxury with robust sportiness. This exceptional timepiece features a stunning mother of pearl dial adorned with diamond hour markers, creating a mesmerizing play of light and iridescence. The 41mm case in 904L steel provides perfect proportions, while the sturdy Oyster bracelet offers a more sporty and versatile aesthetic compared to the Jubilee bracelet. The fluted bezel adds a classic touch of luxury that has become synonymous with the Datejust collection. The combination of the natural mother of pearl, diamonds, and the robust Oyster bracelet creates a timepiece that is both elegant and suitable for everyday wear.",
    isNew: true,
  },
  {
    id: 19,
    name: 'Datejust 41mm Wimbledon Dial Two-Tone Oyster',
    price: 179,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Datejust/Oyster/datejust-wimbledon-2tonesilvergold-oyster-fluted-41/datejust-wimbledon-2tonesilvergold-oyster-fluted-41.jpg',
    category: 'Rolex',
    imagesList: [
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Datejust/Oyster/datejust-wimbledon-2tonesilvergold-oyster-fluted-41/back",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Datejust/Oyster/datejust-wimbledon-2tonesilvergold-oyster-fluted-41/clasp-open.webp",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Datejust/Oyster/datejust-wimbledon-2tonesilvergold-oyster-fluted-41/clasp.webp"
    ],
    description: "The Rolex Datejust 41 Two-Tone with Wimbledon dial and Oyster bracelet combines sporty elegance with luxurious sophistication. This model features the iconic Wimbledon dial with its distinctive slate grey face and Roman numerals in 18 ct white gold with a green finish. The two-tone case and bracelet combination of stainless steel and 18k gold creates a perfect balance of durability and luxury. The robust Oyster bracelet provides exceptional durability and comfort, while the fluted bezel adds a classic touch that has become synonymous with the Datejust collection. This timepiece is perfect for those who appreciate both luxury and practicality.",
    isNew: true,
  },
  {
    id: 20,
    name: 'Datejust 41mm Champagne Dial Two-Tone Oyster',
    price: 179,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Datejust/Oyster/datejust-golddial-champagne-2tonesilvergold-oyster-fluted-40/datejust-golddial-champagne-2tonesilvergold-oyster-fluted-40.jpg',
    category: 'Rolex',
    imagesList: [
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Datejust/Oyster/datejust-golddial-champagne-2tonesilvergold-oyster-fluted-40/back",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Datejust/Oyster/datejust-golddial-champagne-2tonesilvergold-oyster-fluted-40/clasp-open.webp",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Datejust/Oyster/datejust-golddial-champagne-2tonesilvergold-oyster-fluted-40/clasp.webp"
    ],
    description: "The Rolex Datejust 41 Two-Tone with Gold Champagne Dial and Oyster bracelet represents timeless elegance combined with robust durability. This model features a stunning champagne-colored dial that perfectly complements the two-tone case and bracelet combination of stainless steel and 18k gold. The sturdy Oyster bracelet offers exceptional comfort and a more sporty aesthetic compared to the Jubilee bracelet. The fluted bezel adds a classic touch of luxury that has become synonymous with the Datejust collection. The warm tones of the dial create a sophisticated and versatile timepiece suitable for any occasion, while the robust construction ensures it's perfect for everyday wear.",
    isNew: true,
  },
  {
    id: 21,
    name: 'Datejust 41mm Blue Dial Oyster',
    price: 179,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Datejust/Oyster/datejust-bluedial-champagne-silveroyster-fluted-40/datejust-bluedial-champagne-silveroyster-fluted-40.png',
    category: 'Rolex',
    imagesList: [
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Datejust/Oyster/datejust-bluedial-champagne-silveroyster-fluted-40/side.webp",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Datejust/Oyster/datejust-bluedial-champagne-silveroyster-fluted-40/back.webp",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Datejust/Oyster/datejust-bluedial-champagne-silveroyster-fluted-40/clasp.webp"
    ],
    description: "The Rolex Datejust 41 with Blue Dial and Oyster bracelet combines elegance with robustness. This model features a stunning blue dial that creates a vibrant, eye-catching appearance, perfectly complemented by the clean lines of the fluted bezel. The 41mm case provides excellent presence on the wrist, while the sturdy Oyster bracelet offers exceptional comfort and a more sporty aesthetic compared to the Jubilee bracelet. The fluted bezel adds a classic touch of luxury that has become synonymous with the Datejust collection. This timepiece is perfect for those who appreciate refined luxury with a more robust, everyday wearable design.",
    isNew: true,
  },
  {
    id: 22,
    name: 'Datejust 41mm Green Dial Oyster',
    price: 179,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Datejust/Oyster/datejust-greendial-champagne-silveroyster-domed-40/datejust-greendial-champagne-silveroyster-domed-40.jpg',
    category: 'Rolex',
    imagesList: [
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Datejust/Oyster/datejust-greendial-champagne-silveroyster-domed-40/back.webp",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Datejust/Oyster/datejust-greendial-champagne-silveroyster-domed-40/clasp.webp",
    ],
    description: "The Rolex Datejust 41 with Green Dial and Oyster bracelet offers a fresh and contemporary take on the classic Datejust design. This model features a stunning green dial that creates a vibrant, nature-inspired appearance, perfectly complemented by the clean lines of the domed bezel. The 41mm case provides excellent presence on the wrist, while the sturdy Oyster bracelet offers exceptional comfort and a more sporty aesthetic compared to the Jubilee bracelet. The domed bezel gives this timepiece a more understated, versatile character compared to its fluted bezel counterparts, making it perfect for both casual and formal occasions. The combination of the green dial with the steel case and bracelet creates a distinctive and eye-catching timepiece.",
    isNew: true,
  }
];

const DatejustPage: React.FC = () => {
  const { setProducts, products } = useCart()

  useEffect(() => {
    // console.log(womensAPWatches);
    // 
    localStorage.setItem('productList', JSON.stringify(datejustWatches))
    localStorage.setItem('category', 'datejust')
    setProducts({productList: datejustWatches, category: 'datejust'})
  }, []);
  console.log(products);
  return (
    <div className="bg-black text-white min-h-screen">
      <Header />
      <main className="pt-20">
        <div className="bg-gradient-to-b from-black to-zinc-900 py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 text-sm text-gray-400 mb-8">
              <Link to="/" className="hover:text-gold-500">Home</Link>
              <ChevronRight className="h-4 w-4" />
              <Link to="/collections" className="hover:text-gold-500">Collections</Link>
              <ChevronRight className="h-4 w-4" />
              <Link to="/rolex" className="hover:text-gold-500">Rolex</Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-gold-500">Datejust</span>
            </div>

            <SectionTitle
              title="Rolex Datejust Collection"
              subtitle="The classic Rolex timepiece that has become a symbol of style and accuracy"
              centered
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {datejustWatches.map((watch) => (
                <ProductCard key={watch.id} product={watch} />
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DatejustPage;