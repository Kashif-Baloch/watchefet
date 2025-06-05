const getProductId = (name: string, quality: string): string | null => {
  try {
    const cleanName = name.split(' - ')[0].trim();
    
    const productMap: Record<string, Record<string, string>> = {
      'Rolex Day-Date Black Dial Champagne Gold Fluted': {
        'AAA Grade': 'daydate-black-gold-aaa',
        'AAAAA Grade': 'daydate-black-gold-aaaaa',
        'Super Clone': 'daydate-black-gold-super-clone'
      },
      'Rolex Datejust Green Dial Champagne Silver Oyster Domed': {
        'AAA Grade': 'datejust-green-oyster-aaa',
        'AAAAA Grade': 'datejust-green-oyster-aaaaa',
        'Super Clone': 'datejust-green-oyster-super-clone'
      },
      'Rolex Datejust Blue Dial Champagne Silver Oyster Fluted': {
        'AAA Grade': 'datejust-blue-oyster-aaa',
        'AAAAA Grade': 'datejust-blue-oyster-aaaaa',
        'Super Clone': 'datejust-blue-oyster-super-clone'
      },
      'Rolex Datejust Gold Champagne Dial Two-Tone Silver Gold Oyster Fluted': {
        'AAA Grade': 'datejust-gold-oyster-aaa',
        'AAAAA Grade': 'datejust-gold-oyster-aaaaa',
        'Super Clone': 'datejust-gold-oyster-super-clone'
      },
      'Datejust 41mm Mother of Pearl Diamond Dial Oyster': {
        'AAA Grade': 'datejust-mop-oyster-aaa',
        'AAAAA Grade': 'datejust-mop-oyster-aaaaa',
        'Super Clone': 'datejust-mop-oyster-super-clone'
      },
      'Rolex Datejust Grey Dial Diamond Silver Oyster Fluted': {
        'AAA Grade': 'datejust-grey-oyster-aaa',
        'AAAAA Grade': 'datejust-grey-oyster-aaaaa',
        'Super Clone': 'datejust-grey-oyster-super-clone'
      },
      'Rolex Datejust Gold Dial Diamond Two-Tone Silver Gold Oyster Fluted': {
        'AAA Grade': 'datejust-gold-diamond-oyster-aaa',
        'AAAAA Grade': 'datejust-gold-diamond-oyster-aaaaa',
        'Super Clone': 'datejust-gold-diamond-oyster-super-clone'
      },
      'Rolex Datejust Wimbledon Two-Tone Silver Gold Oyster Fluted 41': {
        'AAA Grade': 'datejust-wimbledon-oyster-aaa',
        'AAAAA Grade': 'datejust-wimbledon-oyster-aaaaa',
        'Super Clone': 'datejust-wimbledon-oyster-super-clone'
      },
      'Rolex Datejust Greendial Champagne Smooth Silver Jubilee': {
        'AAA Grade': 'datejust-green-smooth-dial-aaa',
        'AAAAA Grade': 'datejust-green-smooth-dial-aaaaa',
        'Super Clone': 'datejust-green-smooth-dial-super-clone'
      },
      'Datejust 41mm Blue Dial Smooth Bezel': {
        'AAA Grade': 'datejust-blue-smooth-aaa',
        'AAAAA Grade': 'datejust-blue-smooth-aaaaa',
        'Super Clone': 'datejust-blue-smooth-super-clone'
      },
      'Datejust 41mm Mother of Pearl Diamond Dial': {
        'AAA Grade': 'datejust-mop-diamond-aaa',
        'AAAAA Grade': 'datejust-mop-diamond-aaaaa',
        'Super Clone': 'datejust-mop-diamond-super-clone'
      },
      'Rolex Datejust White Dial Champagne Silver Jubilee Fluted': {
        'AAA Grade': 'datejust-white-champagne-aaa',
        'AAAAA Grade': 'datejust-white-champagne-aaaaa',
        'Super Clone': 'datejust-white-champagne-super-clone'
      },
      'Rolex Datejust Brown Dial Diamond Two-Tone Silver Rose Jubilee Fluted': {
        'AAA Grade': 'datejust-brown-diamond-aaa',
        'AAAAA Grade': 'datejust-brown-diamond-aaaaa',
        'Super Clone': 'datejust-brown-diamond-super-clone'
      },
      'Rolex Datejust Brown Champagne Dial Two-Tone Silver Rose Jubilee Fluted': {
        'AAA Grade': 'datejust-brown-champagne-aaa',
        'AAAAA Grade': 'datejust-brown-champagne-aaaaa',
        'Super Clone': 'datejust-brown-champagne-super-clone'
      },
      'Rolex Datejust Wimbledon Two-Tone Silver Gold Jubilee Fluted 41': {
        'AAA Grade': 'datejust-wimbledon-two-tone-aaa',
        'AAAAA Grade': 'datejust-wimbledon-two-tone-aaaaa',
        'Super Clone': 'datejust-wimbledon-two-tone-super-clone'
      },
      'Rolex Datejust Gold Champagne Dial Two-Tone Silver Gold Jubilee Fluted 41': {
        'AAA Grade': 'datejust-gold-champagne-aaa',
        'AAAAA Grade': 'datejust-gold-champagne-aaaaa',
        'Super Clone': 'datejust-gold-champagne-super-clone'
      },
      'Rolex Datejust Gold Diamond Dial Two-Tone Silver Gold Jubilee Fluted 41': {
        'AAA Grade': 'datejust-gold-diamond-aaa',
        'AAAAA Grade': 'datejust-gold-diamond-aaaaa',
        'Super Clone': 'datejust-gold-diamond-super-clone'
      },
      'Datejust 41mm Fluted Bezel Roman Numerals': {
        'AAA Grade': 'datejust-roman-aaa',
        'AAAAA Grade': 'datejust-roman-aaaaa',
        'Super Clone': 'datejust-roman-super-clone'
      },
      'Datejust 41mm White Roman Dial': {
        'AAA Grade': 'datejust-white-roman-aaa',
        'AAAAA Grade': 'datejust-white-roman-aaaaa',
        'Super Clone': 'datejust-white-roman-super-clone'
      },
      'Datejust 41mm Wimbledon Dial with Fluted Bezel': {
        'AAA Grade': 'datejust-wimbledon-aaa',
        'AAAAA Grade': 'datejust-wimbledon-aaaaa',
        'Super Clone': 'datejust-wimbledon-super-clone'
      },
      'Datejust 41mm Grey Diamond Dial': {
        'AAA Grade': 'datejust-grey-dial-aaa',
        'AAAAA Grade': 'datejust-grey-dial-aaaaa',
        'Super Clone': 'datejust-grey-dial-super-clone'
      },
      'Datejust 41mm Blue Diamond Dial': {
        'AAA Grade': 'datejust-blue-dial-aaa',
        'AAAAA Grade': 'datejust-blue-dial-aaaaa',
        'Super Clone': 'datejust-blue-dial-super-clone'
      },
      'Datejust 41mm Black Dial 2025': {
        'AAA Grade': 'datejust-black-dial-aaa',
        'AAAAA Grade': 'datejust-black-dial-aaaaa',
        'Super Clone': 'datejust-black-dial-super-clone'
      },
      'Datejust 41mm Blue Dial': {
        'AAA Grade': 'datejust-blue-dial-aaa',
        'AAAAA Grade': 'datejust-blue-dial-aaaaa',
        'Super Clone': 'datejust-blue-dial-super-clone'
      },
      'Rolex Day-Date White Roman Dial Gold Fluted': {
        'AAA Grade': 'daydate-white-roman-gold-aaa',
        'AAAAA Grade': 'daydate-white-roman-gold-aaaaa',
        'Super Clone': 'daydate-white-roman-gold-super-clone'
      },
      'Rolex Day-Date Ice Blue Champagne Dial Silver Smooth Bezel': {
        'AAA Grade': 'daydate-ice-blue-silver-aaa',
        'AAAAA Grade': 'daydate-ice-blue-silver-aaaaa',
        'Super Clone': 'daydate-ice-blue-silver-super-clone'
      },
      'Rolex Day-Date Brown Dial Roman Rose Gold Fluted': {
        'AAA Grade': 'daydate-brown-roman-rose-aaa',
        'AAAAA Grade': 'daydate-brown-roman-rose-aaaaa',
        'Super Clone': 'daydate-brown-roman-rose-super-clone'
      },
      'Rolex Day-Date Gold Diamond-Set President': {
        'AAA Grade': 'daydate-gold-diamond-president-aaa',
        'AAAAA Grade': 'daydate-gold-diamond-president-aaaaa',
        'Super Clone': 'daydate-gold-diamond-president-super-clone'
      },
      'Premium Rolex Box with Certificate': {
        'Premium': 'premium-rolex-box'
      }
    };

    // Log the input values for debugging
    console.log('Looking up product:', { name: cleanName, quality });

    const productQualityMap = productMap[cleanName];
    if (!productQualityMap) {
      console.warn(`Product not found in map: "${cleanName}"`);
      return null;
    }

    const productId = productQualityMap[quality];
    if (!productId) {
      console.warn(`Quality "${quality}" not found for product "${cleanName}"`);
      return null;
    }

    return productId;
  } catch (error) {
    console.error('Error in getProductId:', error);
    return null;
  }
};

export default getProductId;