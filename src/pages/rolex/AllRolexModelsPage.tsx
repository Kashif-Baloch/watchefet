import React, { useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Search } from 'lucide-react';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import ProductCard from '../../components/product/ProductCard';
import { useCart } from '../../context/CartContext';

const collections = [
  { name: 'All', value: 'all' },
  { name: 'Datejust', value: 'datejust' },
  { name: 'Day-Date', value: 'daydate' },
  { name: 'Submariner', value: 'submariner' },
  { name: 'GMT-Master II', value: 'gmt' },
  { name: 'Daytona', value: 'daytona' },
  { name: 'Explorer', value: 'explorer' },
  { name: 'Yacht-Master', value: 'yachtmaster' },
];

const allRolexWatches = [
  // Datejust Collection
  {
    id: 1,
    reviews: 12,
    name: 'Datejust 41mm Blue Diamond Dial Fluted Jubilee',
    price: 179,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Datejust/datejust-bluedial-diamond-silverjubilee-fluted-41/datejust-bluedial-diamond-silverjubilee-fluted-41.png',
    category: 'datejust',
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
    reviews: 12,
    name: 'Datejust 41mm Fluted Bezel Champagne Dial',
    price: 179,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Datejust/datejust-blackchampagnedial-silverjubilee-fluted/datejust-blackchampagnedial-silverjubilee-fluted.png',
    category: 'datejust',
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
    reviews: 16,
    name: 'Datejust 41mm Diamond Dial with Fluted Bezel',
    price: 179,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Datejust/datejust-greydial-diamond-silverjubilee-41/datejust-greydial-diamond-silverjubilee-41.jpg',
    category: 'datejust',
    imagesList: [
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Datejust/datejust-greydial-diamond-silverjubilee-41/back",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Datejust/datejust-greydial-diamond-silverjubilee-41/clasp.jpg"
    ],
    description: "The Rolex Datejust 41 is the epitome of classic style and functionality. This model features a stunning grey dial with diamond hour markers housed in a 41mm case, perfectly balanced for both elegance and presence on the wrist. The signature Jubilee bracelet provides exceptional comfort and sophistication, while the fluted bezel adds a distinctive touch of luxury.",
    isNew: true,
  },
  {
    id: 4,
    reviews: 19,
    name: 'Datejust 41mm Wimbledon Dial with Fluted Bezel',
    price: 179,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Datejust/datejust-wimbledon-41/datejust-wimbledon-41.jpg',
    category: 'datejust',
    imagesList: [
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Datejust/datejust-wimbledon-41/clasp.jpg",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Datejust/datejust-wimbledon-41/back"
    ],
    description: "The Rolex Datejust 41 with Wimbledon dial is a masterpiece of style and functionality. This model features the distinctive Wimbledon dial, characterized by its slate grey face with Roman numerals in 18 ct white gold and a green finish. The 41mm case provides perfect balance on the wrist, while the signature Jubilee bracelet offers exceptional comfort. The fluted bezel in 18 ct white gold adds a refined touch to this iconic timepiece.",
    isNew: false,
  },
  {
    id: 5,
    reviews: 13,
    name: 'Datejust 41mm White Roman Dial Fluted Jubilee',
    price: 179,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Datejust/datejust-whitedial-roman-silverjubilee-fluted-41/datejust-whitedial-roman-silverjubilee-fluted-41.jpg',
    category: 'datejust',
    imagesList: [
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Datejust/datejust-whitedial-roman-silverjubilee-fluted-41/back",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Datejust/datejust-whitedial-roman-silverjubilee-fluted-41/clasp.jpg"
    ],
    description: "The Rolex Datejust 41 with White Roman Dial is a testament to timeless elegance. This model features a pristine white dial with Roman numerals in polished finish, creating a sophisticated and classic appearance. The 41mm case is perfectly proportioned, while the signature Jubilee bracelet provides exceptional comfort. The fluted bezel adds a distinctive touch of luxury to this iconic timepiece.",
    isNew: true,
  },
  {
    id: 6,
    reviews: 14,
    name: 'Datejust 41mm Fluted Bezel Roman Numerals',
    price: 179,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Datejust/datejust-bluedial-roman-fluted-jubilee-41/datejust-bluedial-roman-fluted-jubilee-41.webp',
    category: 'datejust',
    imagesList: [
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Datejust/datejust-bluedial-roman-fluted-jubilee-41/back",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Datejust/datejust-bluedial-roman-fluted-jubilee-41/clasp.jpg"
    ],
    description: "The Rolex Datejust 41 with Roman numerals is a perfect blend of classic elegance and modern sophistication. This model features a stunning blue dial with applied Roman numerals, creating a timeless and refined appearance. The 41mm case provides excellent presence on the wrist, while the signature Jubilee bracelet ensures maximum comfort. The fluted bezel adds a distinctive touch of luxury that has become synonymous with the Datejust collection.",
    isNew: false,
  },
  {
    id: 7,
    reviews: 19,
    name: 'Datejust 41mm Gold Diamond Dial Two-Tone',
    price: 179,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Datejust/datejust-golddial-diamond-2tonesilvergoldjubilee-fluted-41/datejust-golddial-diamond-2tonesilvergoldjubilee-fluted-41.jpg',
    category: 'datejust',
    imagesList: [
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Datejust/datejust-golddial-diamond-2tonesilvergoldjubilee-fluted-41/back.webp",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Datejust/datejust-golddial-diamond-2tonesilvergoldjubilee-fluted-41/clasp.webp"
    ],
    description: "The Rolex Datejust 41 Two-Tone with Gold Diamond Dial exemplifies luxury and sophistication. This model features a stunning gold dial with diamond hour markers, housed in a 41mm case combining stainless steel and 18k gold. The signature Jubilee bracelet provides exceptional comfort, while the fluted bezel adds a distinctive touch of elegance. The combination of precious metals and diamonds creates a timepiece that's both luxurious and versatile.",
    isNew: true,
  },
  {
    id: 8,
    reviews: 12,
    name: 'Datejust 41mm Gold Champagne Dial Two-Tone',
    price: 179,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Datejust/datejust-golddial-champagne-2tonesilvergoldjubilee-fluted-41/datejust-golddial-champagne-2tonesilvergoldjubilee-fluted-41.jpg',
    category: 'datejust',
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
    reviews: 16,
    name: 'Datejust 41mm Wimbledon Dial Two-Tone',
    price: 179,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Datejust/datejust-wimbledon-2tonesilvergold-jubilee-fluted-41/datejust-wimbledon-2tonesilvergold-jubilee-fluted-41.jpg',
    category: 'datejust',
    imagesList: [
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Datejust/datejust-wimbledon-2tonesilvergold-jubilee-fluted-41/back.webp",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Datejust/datejust-wimbledon-2tonesilvergold-jubilee-fluted-41/clasp.webp",
    ],
    description: "The Rolex Datejust 41 Two-Tone with Gold Champagne Dial represents timeless elegance. This model features a stunning champagne-colored dial that perfectly complements the two-tone case and bracelet combination of stainless steel and 18k gold. The signature Jubilee bracelet provides exceptional comfort, while the fluted bezel adds a classic touch of luxury. The warm tones of the dial create a sophisticated and versatile timepiece suitable for any occasion.",
    isNew: true,
  },
  // Day-Date Collection
  {
    id: 10,
    reviews: 24,
    name: 'Day-Date 40 Rose Gold Brown Roman Dial',
    price: 139,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Day-Date/daydate-browndial-roman-rosegold-fluted-40/daydate-browndial-roman-rosegold-fluted-40.png',
    category: 'daydate',
    imagesList: [
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Day-Date/daydate-browndial-roman-rosegold-fluted-40/side",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Day-Date/daydate-browndial-roman-rosegold-fluted-40/clasp.webp",
    ],
    description: "The Rolex Day-Date 40 in 18k rose gold with a brown Roman numeral dial is the epitome of luxury and sophistication. This iconic timepiece features a fluted bezel that enhances its distinctive Rolex profile, while the President bracelet provides exceptional comfort and elegance. The warm tones of the rose gold case and bracelet perfectly complement the rich brown dial, creating a harmonious and luxurious aesthetic. The Day-Date was the first wristwatch to display the date and day of the week spelled out in full in a window on the dial, and continues to be the watch par excellence of influential people.",
    isNew: true,
  },
  {
    id: 11,
    reviews: 29,
    name: 'Day-Date 40 Gold Diamond-Set President',
    price: 139,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Day-Date/daydate-golddial-champagne-goldpresident-diamondset-40/daydate-golddial-champagne-goldpresident-diamondset-40',
    category: 'daydate',
    imagesList: [
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Day-Date/daydate-golddial-champagne-goldpresident-diamondset-40/close%20up.png",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Day-Date/daydate-golddial-champagne-goldpresident-diamondset-40/clasp.webp",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Day-Date/daydate-golddial-champagne-goldpresident-diamondset-40/back.webp",
    ],
    description: "The Rolex Day-Date 40 in 18k yellow gold with diamond-set bezel, hour markers, and President bracelet represents the pinnacle of luxury and prestige. This magnificent timepiece features a champagne gold dial that perfectly complements the diamond embellishments, creating an extraordinary display of opulence. The Day-Date was the first wristwatch to display the date and day of the week spelled out in full in a window on the dial. With the President bracelet, originally created specifically for it, the Day-Date continues to be the watch par excellence of influential people, and remains the ultimate status watch. The diamond setting on this model elevates it to an even higher level of exclusivity and luxury.",
    isNew: false,
  },
  {
    id: 12,
    reviews: 22,
    name: 'Day-Date 40 Black Dial Gold',
    price: 139,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Day-Date/daydate-blackdial-champagne-gold-fluted-40/daydate-blackdial-champagne-gold-fluted-40.png',
    category: 'daydate',
    imagesList: [
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Day-Date/daydate-blackdial-champagne-gold-fluted-40/back.webp",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Day-Date/daydate-blackdial-champagne-gold-fluted-40/clasp.webp",
    ],
    description: "The Rolex Day-Date 40 in 18k yellow gold with a black dial is a statement of luxury and prestige. This iconic timepiece features a fluted bezel that enhances its distinctive Rolex profile, while the President bracelet provides exceptional comfort and elegance. The contrast between the rich black dial and the warm yellow gold case creates a bold and sophisticated aesthetic. The Day-Date was the first wristwatch to display the date and day of the week spelled out in full in a window on the dial, and continues to be the watch par excellence of influential people.",
    isNew: true,
  },
  // ll
  {
    id: 13,
    reviews: 19,
    name: 'Day-Date 40 Mother of Pearl Diamond Dial',
    price: 139,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Day-Date/daydate-mop-diamond-silverjubilee-40/daydate-mop-diamond-silverjubilee-40.webp',
    category: 'daydate',
    imagesList: [
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Day-Date/daydate-mop-diamond-silverjubilee-40/back.webp",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Day-Date/daydate-mop-diamond-silverjubilee-40/clasp.webp",
    ],
    description: "The Rolex Day-Date 40 with a mother of pearl diamond dial is a masterpiece of opulence and refinement. Encased in a 40mm case, this timepiece showcases a mesmerizing mother of pearl dial adorned with sparkling diamond hour markers, exuding unparalleled elegance. The iconic President bracelet ensures supreme comfort and a distinguished aesthetic, while the fluted bezel enhances its luxurious allure, making it a statement of timeless sophistication",
    isNew: false,
  },
  {
    id: 14,
    
    reviews: 14,
    name: 'Day-Date 40 White Dial Gold',
    price: 139,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Day-Date/daydate-whitedial-champagne-gold-fluted/daydate-whitedial-champagne-gold-fluted',
    category: 'daydate',
    imagesList: [
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Day-Date/daydate-whitedial-champagne-gold-fluted/close%20up.png",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Day-Date/daydate-whitedial-champagne-gold-fluted/clasp.webp"
    ],
    description: "The Rolex Day-Date 40 in 18k yellow gold with a crisp white dial epitomizes understated luxury and precision. The 40mm case is complemented by a fluted bezel, adding a touch of classic Rolex distinction. Paired with the iconic President bracelet, this watch offers exceptional comfort and elegance, with the radiant white dial providing a clean, sophisticated backdrop for the day and date display, a hallmark of influential style.",
    isNew: true,
  },
  {
    id: 15,
    
    reviews: 18,
    name: 'Day-Date 40 Green Dial Gold',
    price: 139,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Day-Date/daydate-greendial-roman-gold-fluted-40/daydate-greendial-roman-gold-fluted-40.png',
    category: 'daydate',
    imagesList: [
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Day-Date/daydate-greendial-roman-gold-fluted-40/side",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Day-Date/daydate-greendial-roman-gold-fluted-40/clasp.webp"
    ],
    description: "The Rolex Day-Date 40 in 18k rose gold with a striking green dial is a bold yet elegant expression of luxury. Housed in a 40mm case, the vibrant green dial captures attention while maintaining refined sophistication. The fluted bezel and President bracelet elevate its iconic design, offering both comfort and prestige. This timepiece blends modern flair with Rolex’s heritage, perfect for those who command attention.",
    isNew: true,
  },
  {
    id: 16,
    
    reviews: 12,
    name: 'Day-Date 40 Brown Dial Rose Gold',
    price: 139,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Day-Date/daydate-browndial-champagne-rosegold-fluted/daydate-browndial-champagne-rosegold-fluted',
    category: 'daydate',
    imagesList: [
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Day-Date/daydate-browndial-champagne-rosegold-fluted/side",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Day-Date/daydate-browndial-champagne-rosegold-fluted/clasp.webp"
    ],
    description: "The Rolex Day-Date 40 in 18k rose gold with a rich brown dial is the epitome of warmth and sophistication. The 40mm case, paired with a fluted bezel, enhances its distinguished silhouette, while the President bracelet ensures unmatched comfort and elegance. The deep brown dial harmonizes beautifully with the rose gold tones, creating a luxurious and cohesive aesthetic that embodies timeless prestige.",
    isNew: true,
  },
  {
    id: 17,
    
    reviews: 12,
    name: 'Day-Date 40 Ice Blue Dial',
    price: 139,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Day-Date/daydate-icebluedial-champagne-silver-smooth/daydate-icebluedial-champagne-silver-smooth',
    category: 'daydate',
    imagesList: [
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Day-Date/daydate-icebluedial-champagne-silver-smooth/clasp.webp",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Day-Date/daydate-icebluedial-champagne-silver-smooth/back.webp"
    ],
    description: "The Rolex Day-Date 40 with an ice blue dial is a vision of cool elegance and exclusivity. Encased in a 40mm case, the serene ice blue dial offers a distinctive and sophisticated charm, complemented by the iconic fluted bezel. The President bracelet provides exceptional comfort and a refined aesthetic, making this timepiece a perfect blend of innovation and classic Rolex luxury.",
    isNew: true,
  },
  // Submariner Collection
  {
    id: 18,
    
    reviews: 14,
    name: 'Submariner Black Dial Two-Tone',
    price: 139,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Submariner/submariner-blackdial-2tonesilvergold/submariner-blackdial-2tonesilvergold',
    category: 'submariner',
    imagesList: [
      'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Submariner/submariner-blackdial-2tonesilvergold/side.jpg',
      'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Submariner/submariner-blackdial-2tonesilvergold/clasp.webp',
    ],
    description: 'The Rolex Submariner Black Dial Two-Tone is a perfect blend of rugged functionality and refined elegance. Housed in a 41mm case, the sleek black dial exudes timeless sophistication, complemented by a two-tone Oystersteel and 18k yellow gold construction. The Oyster bracelet ensures exceptional comfort and durability, while the unidirectional rotatable bezel adds a sporty yet luxurious touch, ideal for both diving and formal occasions.',
    isNew: true,
  },
  {
    id: 19,
    
    reviews: 12,
    name: 'Submariner Black Dial Blue Bezel',
    price: 139,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Submariner/submariner-blackdial-bluebezel-silver/submariner-blackdial-bluebezel-silver',
    category: 'submariner',
    imagesList: [
      'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Submariner/submariner-blackdial-bluebezel-silver/back.webp',
      'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Submariner/submariner-blackdial-bluebezel-silver/clasp.webp',
    ],
    description: 'The Rolex Submariner Black Dial Blue Bezel combines bold style with unparalleled performance. Its 41mm Oystersteel case frames a striking black dial, paired with a vibrant blue Cerachrom bezel that enhances its adventurous spirit. The Oyster bracelet offers robust comfort, making this timepiece a versatile companion for underwater exploration or sophisticated settings, embodying Rolex’s legacy of precision and elegance.',
    isNew: false,
  },
  {
    id: 20,
    
    reviews: 17,
    name: 'Submariner Black Dial Green Bezel',
    price: 139,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Submariner/submariner-blackdial-greenbezel-silver/submariner-blackdial-greenbezel-silver',
    category: 'submariner',
    imagesList: [
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Submariner/submariner-blackdial-greenbezel-silver/back.webp",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Submariner/submariner-blackdial-greenbezel-silver/clasp.webp"

    ],
    description: 'The Rolex Submariner Black Dial Green Bezel is a striking icon of adventure and style. Encased in a 41mm Oystersteel case, the deep black dial contrasts vividly with the distinctive green Cerachrom bezel, evoking a sense of bold exploration. The Oyster bracelet ensures enduring comfort and durability, making this watch a standout choice for those who embrace both function and flair.',
    isNew: true,
  },
  {
    id: 21,
    
    reviews: 12,
    name: 'Submariner Blue Dial Two-Tone',
    price: 139,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Submariner/submariner-bluedial-bluebezel-2tonesilvergold/submariner-bluedial-bluebezel-2tonesilvergold.png',
    category: 'submariner',
    imagesList: [
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Submariner/submariner-bluedial-bluebezel-2tonesilvergold/side.jpg",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Submariner/submariner-bluedial-bluebezel-2tonesilvergold/clasp.webp"

    ],
    description: 'The Rolex Submariner Blue Dial Two-Tone exudes sophistication with its luxurious 41mm case in Oystersteel and 18k yellow gold. The radiant blue dial, paired with a matching blue Cerachrom bezel, creates a captivating aesthetic that balances elegance and sportiness. The Oyster bracelet provides exceptional comfort, making this timepiece a versatile masterpiece for any occasion, from the deep sea to the boardroom.',
    isNew: false,
  },
  {
    id: 22,
    
    reviews: 18,
    name: 'Submariner Black Dial',
    price: 139,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Submariner/submariner-blackdial-blackbezel-silver/submariner-blackdial-blackbezel-silver.jpg',
    category: 'submariner',
    imagesList: [
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Submariner/submariner-blackdial-blackbezel-silver/clasp.webp",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Submariner/submariner-blackdial-blackbezel-silver/back.webp"
    ],
    description: 'The Rolex Submariner Black Dial is the epitome of timeless design and rugged reliability. Housed in a 41mm Oystersteel case, the sleek black dial offers a clean, versatile look, enhanced by a matching black Cerachrom bezel. The Oyster bracelet ensures comfort and resilience, making this iconic timepiece a perfect companion for adventurers and connoisseurs of classic style alike.',
    isNew: true,
  },
  {
    id: 23,
    
    reviews: 19,
    name: 'Submariner Blue Dial Blue Bezel Gold',
    price: 139,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Submariner/submariner-bluedial-bluebezel-gold/submariner-bluedial-bluebezel-gold.png',
    category: 'submariner',
    imagesList: [
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Submariner/submariner-bluedial-bluebezel-gold/back%20open%20clasp.webp",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Submariner/submariner-bluedial-bluebezel-gold/clasp.webp"
    ],
    description: 'The Rolex Submariner Blue Dial Blue Bezel Gold is a pinnacle of luxury and performance. Crafted in a 41mm 18k yellow gold case, the vibrant blue dial harmonizes with a matching blue Cerachrom bezel, exuding opulence and precision. The Oyster bracelet in gold offers unmatched comfort and elegance, making this watch a bold statement for those who demand the finest in craftsmanship.',
    isNew: true,
  },
  {
    id: 24,
    
    reviews: 29,
    name: 'Submariner Black Dial Black Bezel Gold',
    price: 139,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Submariner/submariner-blackdial-blackbezel-gold/submariner-blackdial-blackbezel-gold',
    category: 'submariner',
    imagesList: [
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Submariner/submariner-blackdial-blackbezel-gold/side.webp",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Submariner/submariner-blackdial-blackbezel-gold/back%20open%20clasp.webp",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Submariner/submariner-blackdial-blackbezel-gold/clasp.webp"
    ],
    description: 'The Rolex Submariner Black Dial Black Bezel Gold radiates prestige and durability. Encased in a 41mm 18k yellow gold case, the sleek black dial is paired with a matching black Cerachrom bezel, creating a sophisticated yet robust aesthetic. The Oyster bracelet in gold ensures luxurious comfort, making this timepiece a timeless choice for those who value elegance and adventure.',
    isNew: true,
  },
  // GMT-Master II Collection
  {
    id: 25,
    
    reviews: 18,
    name: 'GMT-Master II Black Two-Tone Oyster',
    price: 145,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/GMT-Master%20II/gmtmaster-black-2tonesilvergold-oyster/gmtmaster-black-2tonesilvergold-oyster.png',
    category: 'gmt',
    imagesList: [
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/GMT-Master%20II/gmtmaster-black-2tonesilvergold-oyster/clasp.jpg",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/GMT-Master%20II/gmtmaster-black-2tonesilvergold-oyster/back.webp",
    ],
    description: 'The Rolex GMT-Master II Black Two-Tone Oyster is a masterful blend of functionality and elegance. Housed in a 40mm case of Oystersteel and 18k yellow gold, the black dial offers timeless versatility, complemented by a 24-hour rotatable bezel. The Oyster bracelet ensures durability and comfort, making this watch ideal for globetrotters seeking a sophisticated companion.',
    isNew: true,
  },
  {
    id: 26,
    
    reviews: 12,
    name: 'GMT-Master II Batman Jubilee',
    price: 145,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/GMT-Master%20II/gmtmaster-blackbluebezel-jubilee/gmtmaster-blackbluebezel-jubilee.png',
    category: 'gmt',
    imagesList: [
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/GMT-Master%20II/gmtmaster-blackbluebezel-jubilee/clasp",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/GMT-Master%20II/gmtmaster-blackbluebezel-jubilee/back.webp",
    ],
    description: 'The Rolex GMT-Master II Batman Jubilee is an iconic timepiece with a bold, modern edge. Its 40mm Oystersteel case frames a black dial, paired with a striking blue and black Cerachrom bezel, earning its "Batman" nickname. The Jubilee bracelet adds a touch of refined comfort, making this watch a favourite for travellers who value style and precision.',
    isNew: false,
  },
  {
    id: 27,
    
    reviews: 12,
    name: 'GMT-Master II Batman Oyster',
    price: 145,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/GMT-Master%20II/gmtmaster-blackbluebezel-oyster/gmtmaster-blackbluebezel-oyster',
    category: 'gmt',
    imagesList: [
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/GMT-Master%20II/gmtmaster-blackbluebezel-oyster/clasp.webp",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/GMT-Master%20II/gmtmaster-blackbluebezel-oyster/back.webp",
    ],
    description: 'The Rolex GMT-Master II Batman Oyster combines rugged durability with distinctive style. Encased in a 40mm Oystersteel case, the black dial is accentuated by the iconic blue and black Cerachrom bezel. The Oyster bracelet offers robust comfort, making this timepiece a perfect choice for those who navigate multiple time zones with confidence and flair.',
    isNew: true,
  },
  {
    id: 28,
    
    reviews: 14,
    name: 'GMT-Master II Black Grey Oyster',
    price: 145,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/GMT-Master%20II/gmtmaster-blackgrey-silveroyster/gmtmaster-blackgrey-silveroyster.jpg',
    category: 'gmt',
    imagesList: [
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/GMT-Master%20II/gmtmaster-blackgrey-silveroyster/clasp.webp",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/GMT-Master%20II/gmtmaster-blackgrey-silveroyster/back.webp"

    ],
    description: 'The Rolex GMT-Master II Black Grey Oyster exudes understated sophistication. Housed in a 40mm Oystersteel case, the black dial pairs seamlessly with a sleek black and grey Cerachrom bezel, offering a refined aesthetic. The Oyster bracelet ensures lasting comfort and durability, making this watch an ideal companion for the modern traveller.',
    isNew: false,
  },
  {
    id: 29,
    
    reviews: 19,
    name: 'GMT-Master II Pepsi Oyster',
    price: 145,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/GMT-Master%20II/gmtmaster-blueredbezel-oyster/gmtmaster-blueredbezel-oyster.png',
    category: 'gmt',
    imagesList: [
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/GMT-Master%20II/gmtmaster-blueredbezel-oyster/clasp.webp",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/GMT-Master%20II/gmtmaster-blueredbezel-oyster/back.webp"

    ],
    description: 'The Rolex GMT-Master II Pepsi Oyster is a vibrant icon of horological excellence. Its 40mm Oystersteel case houses a black dial, complemented by the iconic red and blue Cerachrom bezel, evoking its "Pepsi" moniker. The Oyster bracelet provides robust comfort, making this timepiece a bold yet practical choice for global adventurers.',
    isNew: true,
  },
  {
    id: 30,
    
    reviews: 15,
    name: 'GMT-Master II Green Black Jubilee',
    price: 145,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/GMT-Master%20II/gmtmaster-greenblackdial-jubilee/gmtmaster-greenblackdial-jubilee.webp',
    category: 'gmt',
    imagesList: [
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/GMT-Master%20II/gmtmaster-greenblackdial-jubilee/clasp",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/GMT-Master%20II/gmtmaster-greenblackdial-jubilee/back.webp"


    ],
    description: 'The Rolex GMT-Master II Green Black Jubilee is a striking blend of bold design and functionality. Encased in a 40mm Oystersteel case, the black dial is paired with a distinctive green and black Cerachrom bezel, exuding modern sophistication. The Jubilee bracelet offers refined comfort, making this watch a standout for those who travel in style.',
    isNew: false,
  },
  {
    id: 31,
    
    reviews: 19,
    name: 'GMT-Master II Green Black Oyster',
    price: 145,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/GMT-Master%20II/gmtmaster-greenblackdial-oyster/gmtmaster-greenblackdial-oyster.webp',
    category: 'gmt',
    imagesList: [
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/GMT-Master%20II/gmtmaster-greenblackdial-oyster/clasp.webp",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/GMT-Master%20II/gmtmaster-greenblackdial-oyster/back.webp"


    ],
    description: 'The Rolex GMT-Master II Green Black Oyster combines rugged reliability with a bold aesthetic. Housed in a 40mm Oystersteel case, the black dial is accentuated by a vibrant green and black Cerachrom bezel. The Oyster bracelet ensures durability and comfort, making this timepiece a versatile choice for adventurers crossing time zones.',
    isNew: true,
  },
  {
    id: 32,
    
    reviews: 16,
    name: 'GMT-Master II Grey Black Jubilee',
    price: 145,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/GMT-Master%20II/gmtmaster-greyblackbezel-silverjubilee/gmtmaster-greyblackbezel-silverjubilee.png',
    category: 'gmt',
    imagesList: [
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/GMT-Master%20II/gmtmaster-greyblackbezel-silverjubilee/clasp",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/GMT-Master%20II/gmtmaster-greyblackbezel-silverjubilee/back.webp"


    ],
    description: 'The Rolex GMT-Master II Grey Black Jubilee radiates subtle elegance and precision. Its 40mm Oystersteel case frames a black dial, paired with a sophisticated grey and black Cerachrom bezel. The Jubilee bracelet adds a touch of refined comfort, making this watch an ideal companion for those who value understated luxury and functionality.',
    isNew: false,
  },
  {
    id: 33,
    
    reviews: 17,
    name: 'GMT-Master II Pepsi Jubilee',
    price: 145,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/GMT-Master%20II/gmtmaster-pepsi-jubilee/gmtmaster-pepsi-jubilee.png',
    category: 'gmt',
    imagesList: [
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/GMT-Master%20II/gmtmaster-pepsi-jubilee/clasp",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/GMT-Master%20II/gmtmaster-pepsi-jubilee/back.webp"


    ],
    description: 'The Rolex GMT-Master II Pepsi Jubilee is a timeless icon with a vibrant edge. Encased in a 40mm Oystersteel case, the black dial is complemented by the iconic red and blue Cerachrom bezel, earning its "Pepsi" nickname. The Jubilee bracelet offers elegant comfort, making this timepiece a favourite for globetrotters with a flair for style.',
    isNew: true,
  },
  {
    id: 34,
    
    reviews: 18,
    name: 'GMT-Master II Root Beer Two-Tone Oyster',
    price: 145,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/GMT-Master%20II/gmtmaster-rootbeer-2tonerosesilver-oyster/gmtmaster-rootbeer-2tonerosesilver-oyster.png',
    category: 'gmt',
    imagesList: [
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/GMT-Master%20II/gmtmaster-rootbeer-2tonerosesilver-oyster/side.webp",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/GMT-Master%20II/gmtmaster-rootbeer-2tonerosesilver-oyster/clasp.webp"

    ],
    description: 'The Rolex GMT-Master II Root Beer Two-Tone Oyster is a luxurious blend of heritage and innovation. Housed in a 40mm case of Oystersteel and 18k rose gold, the black dial pairs beautifully with a brown and black Cerachrom bezel, evoking its "Root Beer" moniker. The Oyster bracelet ensures comfort and durability, perfect for travellers seeking timeless elegance.',
    isNew: false,
  },
  {
    id: 35,
    
    reviews: 18,
    name: 'GMT-Master II Root Beer Rose Gold',
    price: 145,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/GMT-Master%20II/gmtmaster-rootbeer-roseoyster/gmtmaster-rootbeer-roseoyster.jpg',
    category: 'gmt',
    imagesList: [
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/GMT-Master%20II/gmtmaster-rootbeer-roseoyster/clasp.webp",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/GMT-Master%20II/gmtmaster-rootbeer-roseoyster/back.webp"


    ],
    description: 'The Rolex GMT-Master II Root Beer Rose Gold is the epitome of opulence and functionality. Crafted in a 40mm 18k rose gold case, the black dial is enhanced by a rich brown and black Cerachrom bezel, embodying the "Root Beer" aesthetic. The Oyster bracelet in rose gold offers luxurious comfort, making this watch a bold statement for discerning travellers.',
    isNew: true,
  },
  {
    id: 36,
    
    reviews: 29,
    name: 'GMT-Master II Zombie Two-Tone Jubilee',
    price: 145,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/GMT-Master%20II/gmtmaster-zombie-2tonesilvergold-jubilee/gmtmaster-zombie-2tonesilvergold-jubilee.png',
    category: 'gmt',
    imagesList: [
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/GMT-Master%20II/gmtmaster-zombie-2tonesilvergold-jubilee/side.webp",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/GMT-Master%20II/gmtmaster-zombie-2tonesilvergold-jubilee/clasp.webp",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/GMT-Master%20II/gmtmaster-zombie-2tonesilvergold-jubilee/back.webp"

    ],
    description: 'The Rolex GMT-Master II Zombie Two-Tone Jubilee is a captivating blend of modern style and versatility. Housed in a 40mm case of Oystersteel and 18k yellow gold, the black dial is paired with a unique green and black Cerachrom bezel, earning its "Zombie" nickname. The Jubilee bracelet adds refined comfort, making this timepiece a standout for global explorers.',
    isNew: false,
  },
  {
    id: 37,
    
    reviews: 28,
    name: 'GMT-Master II Zombie Gold Jubilee',
    price: 145,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/GMT-Master%20II/gmtmaster-zombie-goldjubilee/gmtmaster-zombie-goldjubilee.webp',
    category: 'gmt',
    imagesList: [
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/GMT-Master%20II/gmtmaster-zombie-goldjubilee/side.webp",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/GMT-Master%20II/gmtmaster-zombie-goldjubilee/clasp.webp",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/GMT-Master%20II/gmtmaster-zombie-goldjubilee/back.webp"

    ],
    description: 'The Rolex GMT-Master II Zombie Gold Jubilee exudes prestige and bold design. Encased in a 40mm 18k yellow gold case, the black dial is complemented by a striking green and black Cerachrom bezel, known as the "Zombie" configuration. The Jubilee bracelet in gold ensures luxurious comfort, making this watch a perfect choice for those who command attention across time zones.',
    isNew: true,
  },
  // Daytona Collection
  {
    id: 38,
    
    reviews: 12,
    name: 'Daytona Panda Dial',
    price: 159,
    image: 'https://www.watchfinder.co.uk/images/high-res/Rolex/Cosmograph%20Daytona/116500LN/169785/2.jpg',
    category: 'daytona',
    imagesList: [],
    description: "",
    isNew: true,
  },
  {
    id: 39, 
    reviews: 22,
    name: 'Daytona Black Dial',
    price: 159,
    image: 'https://www.watchfinder.co.uk/images/high-res/Rolex/Cosmograph%20Daytona/116500LN/169792/2.jpg',
    category: 'daytona',
    imagesList: [],
    description: "",
    isNew: false,
  },
  {
    id: 40,
    
    reviews: 25,
    name: 'Daytona Gold',
    price: 159,
    image: 'https://www.watchfinder.co.uk/images/high-res/Rolex/Cosmograph%20Daytona/116508/169799/2.jpg',
    category: 'daytona',
    imagesList: [],
    description: "",
    isNew: true,
  },
  {
    id: 41,
    
    reviews: 28,
    name: 'Daytona Meteorite Dial',
    price: 159,
    image: 'https://www.watchfinder.co.uk/images/high-res/Rolex/Cosmograph%20Daytona/116519LN/169806/2.jpg',
    category: 'daytona',
    imagesList: [],
    description: "",
    isNew: false,
  },
  // Explorer Collection
  {
    id: 42,
    
    reviews: 25,
    name: 'Explorer II Black Dial',
    price: 135,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Explorer%20II/explorer-blackdial-silveroyster/explorer-blackdial-silveroyster.jpg',
    category: 'Rolex',
    imagesList: [
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Explorer%20II/explorer-blackdial-silveroyster/clasp.jpg",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Explorer%20II/explorer-blackdial-silveroyster/back.jpg",
    ],
    description: "The Rolex Explorer II Black Dial is a rugged yet refined companion for adventurers. Housed in a 42mm Oystersteel case, the bold black dial is paired with a 24-hour bezel, perfect for navigating extreme environments. The Oyster bracelet ensures durability and comfort, making this timepiece a reliable choice for explorers who value precision and style.",
    isNew: true,
  },
  {
    id: 43,
    
    reviews: 29,
    name: 'Explorer II White Dial',
    price: 135,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Explorer%20II/explorer-whitedial-oyster/explorer-whitedial-oyster.png',
    category: 'Rolex',
    imagesList: [
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Explorer%20II/explorer-whitedial-oyster/clasp.jpg",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Explorer%20II/explorer-whitedial-oyster/back.jpg",
    ],
    description: "The Rolex Explorer II White Dial combines functionality with timeless elegance. Encased in a 42mm Oystersteel case, the crisp white dial, paired with a 24-hour bezel, offers clarity and versatility for adventurers. The Oyster bracelet provides robust comfort, making this watch an ideal companion for those who explore with confidence and sophistication.",
    isNew: false,
  },
  {
    id: 44,
    
    reviews: 16,
    name: 'Explorer 36mm',
    price: 135,
    image: 'https://www.watchfinder.co.uk/images/high-res/Rolex/Explorer/124270/169806/2.jpg',
    category: 'explorer',
    imagesList: [],
    description: "",
    isNew: true,
  },
  {
    id: 45,
    
    reviews: 16,
    name: 'Explorer II Polar',
    price: 135,
    image: 'https://www.watchfinder.co.uk/images/high-res/Rolex/Explorer%20II/16570/169813/2.jpg',
    category: 'explorer',
    imagesList: [],
    description: "",
    isNew: false,
  },
  // Yacht-Master Collection
  {
    id: 46,
    
    reviews: 12,
    name: 'Yacht-Master 40 Rhodium',
    price: 142,
    image: 'https://www.watchfinder.co.uk/images/high-res/Rolex/Yacht-Master%2040/126622/169806/2.jpg',
    category: 'yachtmaster',
    imagesList: [],
    description: "",
    isNew: true,
  },
  {
    id: 47,
    
    reviews: 17,
    name: 'Yacht-Master 42 Black',
    price: 142,
    image: 'https://www.watchfinder.co.uk/images/high-res/Rolex/Yacht-Master%2042/226659/169813/2.jpg',
    category: 'yachtmaster',
    imagesList: [],
    description: "",
    isNew: false,
  },
  {
    id: 48,
    
    reviews: 28,
    name: 'Yacht-Master 37 Everose',
    price: 142,
    image: 'https://www.watchfinder.co.uk/images/high-res/Rolex/Yacht-Master%2037/268655/169820/2.jpg',
    category: 'yachtmaster',
    imagesList: [],
    description: "",
    isNew: true,
  },
  {
    id: 49,
    
    reviews: 29,
    name: 'Yacht-Master 40 Two-Tone',
    price: 142,
    image: 'https://www.watchfinder.co.uk/images/high-res/Rolex/Yacht-Master%2040/126621/169827/2.jpg',
    category: 'yachtmaster',
    imagesList: [],
    description: "",
    isNew: false,
  },
];

const AllRolexModelsPage: React.FC = () => {
  const [selectedCollection, setSelectedCollection] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const { setProducts } = useCart()

  useEffect(() => {
    // console.log(womensAPWatches);
    // 

    localStorage.setItem('productList', JSON.stringify(allRolexWatches))
    localStorage.setItem('category', 'rolex')
    setProducts({ productList: allRolexWatches, category: 'rolex' })
  }, []);
  // Calculate collection counts
  const collectionCounts = useMemo(() => ({
    all: allRolexWatches.length,
    datejust: allRolexWatches.filter(w => w.category === 'datejust').length,
    daydate: allRolexWatches.filter(w => w.category === 'daydate').length,
    submariner: allRolexWatches.filter(w => w.category === 'submariner').length,
    gmt: allRolexWatches.filter(w => w.category === 'gmt').length,
    daytona: allRolexWatches.filter(w => w.category === 'daytona').length,
    explorer: allRolexWatches.filter(w => w.category === 'explorer').length,
    yachtmaster: allRolexWatches.filter(w => w.category === 'yachtmaster').length,
  }), []);

  const collections = [
    { name: 'All', value: 'all', count: collectionCounts.all },
    { name: 'Datejust', value: 'datejust', count: collectionCounts.datejust },
    { name: 'Day-Date', value: 'daydate', count: collectionCounts.daydate },
    { name: 'Submariner', value: 'submariner', count: collectionCounts.submariner },
    { name: 'GMT-Master II', value: 'gmt', count: collectionCounts.gmt },
    { name: 'Daytona', value: 'daytona', count: collectionCounts.daytona },
    { name: 'Explorer', value: 'explorer', count: collectionCounts.explorer },
    { name: 'Yacht-Master', value: 'yachtmaster', count: collectionCounts.yachtmaster },
  ];

  const filteredWatches = allRolexWatches.filter(watch => {
    const matchesCollection = selectedCollection === 'all' || watch.category === selectedCollection;
    const matchesSearch = watch.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCollection && matchesSearch;
  });

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
              <span className="text-gold-500">All Models</span>
            </div>

            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-2">
                All Rolex Models
              </h2>
              <div className="flex items-center justify-center gap-2 mb-4">
                <span className="text-xl font-serif text-gold-500">{collectionCounts.all}</span>
                <span className="text-gray-400">Timepieces Available</span>
              </div>
              <p className="text-gray-400 max-w-3xl mx-auto">
                Explore our comprehensive collection of Rolex watches, featuring iconic models from every collection
              </p>
            </div>

            <div className="mt-12 mb-8">
              {/* Search and Filter */}
              <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
                {/* Collection Filter */}
                <div className="flex flex-wrap gap-2">
                  {collections.map((collection) => (
                    <button
                      key={collection.value}
                      onClick={() => setSelectedCollection(collection.value)}
                      className={`px-4 py-2 rounded-full text-sm transition-all ${selectedCollection === collection.value
                          ? 'bg-gold-500 text-black'
                          : 'bg-zinc-800 text-gray-300 hover:bg-zinc-700'
                        }`}
                    >
                      {collection.name} ({collection.count})
                    </button>
                  ))}
                </div>

                {/* Search Input */}
                <div className="relative w-full md:w-64">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search models..."
                    className="w-full pl-10 pr-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-gold-500"
                  />
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                </div>
              </div>

              {/* Results Count */}
              <div className="mt-6 text-gray-400 text-sm">
                Showing {filteredWatches.length} {filteredWatches.length === 1 ? 'watch' : 'watches'}
                {searchQuery && ` matching "${searchQuery}"`}
                {selectedCollection !== 'all' && ` in ${collections.find(c => c.value === selectedCollection)?.name}`}
              </div>
            </div>

            {filteredWatches.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {filteredWatches.map((watch) => (
                  <ProductCard key={watch.id} product={watch} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-400">No watches found matching your criteria.</p>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AllRolexModelsPage;