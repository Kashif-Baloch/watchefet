import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import Stripe from "npm:stripe@13.6.0";
const stripe = new Stripe(Deno.env.get('STRIPE_SECRET_KEY') ?? '', {
  apiVersion: '2023-10-16'
});
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS'
};
const products = {
  'daydate-black-gold-super-clone': {
    priceId: 'price_1RRvBpL7hSvB5SHWjrE0RcEI',
    productId: 'prod_SMenCyYPGXIYq5',
    name: 'Rolex Day-Date Black Dial Champagne Gold Fluted - Super Clone',
    description: 'Highest quality replica with Swiss clone movement',
    mode: 'payment'
  },
  'daydate-black-gold-aaaaa': {
    priceId: 'price_1RRvBQL7hSvB5SHW0mHV3UeW',
    productId: 'prod_SMeUkLMDe7fFUu',
    name: 'Rolex Day-Date Black Dial Champagne Gold Fluted - AAAAA Grade',
    description: 'Premium replica with enhanced movement and finishing',
    mode: 'payment'
  },
  'daydate-black-gold-aaa': {
    priceId: 'price_1RRvB7L7hSvB5SHWma6W7iJD',
    productId: 'prod_SMeU0rNT8l2SeN',
    name: 'Rolex Day-Date Black Dial Champagne Gold Fluted - AAA Grade',
    description: 'High-quality replica with standard movement',
    mode: 'payment'
  },
  'daydate-gold-diamond-president-super-clone': {
    priceId: 'price_1RRvSHL7hSvB5SHWXYZnPqLm',
    productId: 'prod_SMeMvQoOMhuCl7',
    name: 'Rolex Day-Date Gold Diamond-Set President - Super Clone',
    description: 'Highest quality replica with Swiss clone movement',
    mode: 'payment'
  },
  'daydate-gold-diamond-president-aaaaa': {
    priceId: 'price_1RRv3hL7hSvB5SHWNeLVGkUh',
    productId: 'prod_SMeMxGjGeGJUeB',
    name: 'Rolex Day-Date Gold Diamond-Set President - AAAAA Grade',
    description: 'Premium replica with enhanced movement and finishing',
    mode: 'payment'
  },
  'daydate-gold-diamond-president-aaa': {
    priceId: 'price_1RRv3BL7hSvB5SHWlnKBOQVf',
    productId: 'prod_SMeLPuNDdeNx6Y',
    name: 'Rolex Day-Date Gold Diamond-Set President - AAA Grade',
    description: 'High-quality replica with standard movement',
    mode: 'payment'
  },
  'daydate-white-roman-gold-super-clone': {
    priceId: 'price_1RRvQUL7hSvB5SHWQIB9wkYk',
    productId: 'prod_SMejCyYPGXIYq5',
    name: 'Rolex Day-Date White Roman Dial Gold Fluted - Super Clone',
    description: 'Highest quality replica with Swiss clone movement',
    mode: 'payment'
  },
  'daydate-white-roman-gold-aaaaa': {
    priceId: 'price_1RRvQ7L7hSvB5SHW2Rnu3kF0',
    productId: 'prod_SMejIYGicyogbF',
    name: 'Rolex Day-Date White Roman Dial Gold Fluted - AAAAA Grade',
    description: 'Premium replica with enhanced movement and finishing',
    mode: 'payment'
  },
  'daydate-white-roman-gold-aaa': {
    priceId: 'price_1RRvPtL7hSvB5SHWG67UU6jZ',
    productId: 'prod_SMejyYwgCDAozt',
    name: 'Rolex Day-Date White Roman Dial Gold Fluted - AAA Grade',
    description: 'High-quality replica with standard movement',
    mode: 'payment'
  },
  'daydate-ice-blue-silver-super-clone': {
    priceId: 'price_1RRvOlL7hSvB5SHWLdU2bbit',
    productId: 'prod_SMeib8WRir2TMq',
    name: 'Rolex Day-Date Ice Blue Champagne Dial Silver Smooth Bezel - Super Clone',
    description: 'Highest quality replica with Swiss clone movement',
    mode: 'payment'
  },
  'daydate-ice-blue-silver-aaaaa': {
    priceId: 'price_1RRvOUL7hSvB5SHWLKIf3reC',
    productId: 'prod_SMehMTeMFYX4Mb',
    name: 'Rolex Day-Date Ice Blue Champagne Dial Silver Smooth Bezel - AAAAA Grade',
    description: 'Premium replica with enhanced movement and finishing',
    mode: 'payment'
  },
  'daydate-ice-blue-silver-aaa': {
    priceId: 'price_1RRvOGL7hSvB5SHWITtIAjja',
    productId: 'prod_SMehgvRlhy2Bj0',
    name: 'Rolex Day-Date Ice Blue Champagne Dial Silver Smooth Bezel - AAA Grade',
    description: 'High-quality replica with standard movement',
    mode: 'payment'
  },
  'daydate-brown-roman-rose-super-clone': {
    priceId: 'price_1RRvMZL7hSvB5SHWFGI19rvY',
    productId: 'prod_SMefxmDB7pdZ50',
    name: 'Rolex Day-Date Brown Dial Roman Rose Gold Fluted - Super Clone',
    description: 'Highest quality replica with Swiss clone movement',
    mode: 'payment'
  },
  'daydate-brown-roman-rose-aaaaa': {
    priceId: 'price_1RRvMDL7hSvB5SHWhfh0mLIn',
    productId: 'prod_SMefxe6ymrXG6B',
    name: 'Rolex Day-Date Brown Dial Roman Rose Gold Fluted - AAAAA Grade',
    description: 'Premium replica with enhanced movement and finishing',
    mode: 'payment'
  },
  'daydate-brown-roman-rose-aaa': {
    priceId: 'price_1RRvLzL7hSvB5SHWX962KPLf',
    productId: 'prod_SMefMmgOqZtkHr',
    name: 'Rolex Day-Date Brown Dial Roman Rose Gold Fluted - AAA Grade',
    description: 'High-quality replica with standard movement',
    mode: 'payment'
  },
  // Datejust Collection - Oyster Models
  'datejust-green-oyster-super-clone': {
    priceId: 'price_1RRuimL7hSvB5SHWst7Y1sQs',
    productId: 'prod_SMe0rYsllOwcLd',
    name: 'Rolex Datejust Green Dial Champagne Silver Oyster Domed - Super Clone',
    description: 'Highest quality replica with Swiss clone movement',
    mode: 'payment'
  },
  'datejust-green-oyster-aaaaa': {
    priceId: 'price_1RRuiVL7hSvB5SHWHu5YjRjJ',
    productId: 'prod_SMe05l1EadDyii',
    name: 'Rolex Datejust Green Dial Champagne Silver Oyster Domed - AAAAA Grade',
    description: 'Premium replica with enhanced movement and finishing',
    mode: 'payment'
  },
  'datejust-green-oyster-aaa': {
    priceId: 'price_1RRuiHL7hSvB5SHWNrJkAh8m',
    productId: 'prod_SMe08xURbZH9O7',
    name: 'Rolex Datejust Green Dial Champagne Silver Oyster Domed - AAA Grade',
    description: 'High-quality replica with standard movement',
    mode: 'payment'
  },
  'datejust-blue-oyster-super-clone': {
    priceId: 'price_1RRuQoL7hSvB5SHWdAkt0bpC',
    productId: 'prod_SMdi49UQKpMst6',
    name: 'Rolex Datejust Blue Dial Champagne Silver Oyster Fluted - Super Clone',
    description: 'Highest quality replica with Swiss clone movement',
    mode: 'payment'
  },
  'datejust-blue-oyster-aaaaa': {
    priceId: 'price_1RRuQYL7hSvB5SHWa0TMgJ1J',
    productId: 'prod_SMdhKFeQeuq6zn',
    name: 'Rolex Datejust Blue Dial Champagne Silver Oyster Fluted - AAAAA Grade',
    description: 'Premium replica with enhanced movement and finishing',
    mode: 'payment'
  },
  'datejust-blue-oyster-aaa': {
    priceId: 'price_1RRuQ2L7hSvB5SHWAJfs9hHj',
    productId: 'prod_SMdh8yS2aMAi6R',
    name: 'Rolex Datejust Blue Dial Champagne Silver Oyster Fluted - AAA Grade',
    description: 'High-quality replica with standard movement',
    mode: 'payment'
  },
  'datejust-gold-oyster-super-clone': {
    priceId: 'price_1RRuOpL7hSvB5SHWS8a4cIpa',
    productId: 'prod_SMdgGkErKnDIT1',
    name: 'Rolex Datejust Gold Dial Champagne Two-Tone Silver Gold Oyster Fluted - Super Clone',
    description: 'Highest quality replica with Swiss clone movement',
    mode: 'payment'
  },
  'datejust-gold-oyster-aaaaa': {
    priceId: 'price_1RRuOZL7hSvB5SHWwqXgdjzi',
    productId: 'prod_SMdfF1KDWZHdDk',
    name: 'Rolex Datejust Gold Dial Champagne Two-Tone Silver Gold Oyster Fluted - AAAAA Grade',
    description: 'Premium replica with enhanced movement and finishing',
    mode: 'payment'
  },
  'datejust-gold-oyster-aaa': {
    priceId: 'price_1RRuOLL7hSvB5SHWCh6nUaa9',
    productId: 'prod_SMdfwgK1wcq1ak',
    name: 'Rolex Datejust Gold Dial Champagne Two-Tone Silver Gold Oyster Fluted - AAA Grade',
    description: 'High-quality replica with standard movement',
    mode: 'payment'
  },
  // Datejust Collection - Standard Models
  'datejust-mop-oyster-super-clone': {
    priceId: 'price_1RReHCL7hSvB5SHWC9pFBSmy',
    productId: 'prod_SMN1atWlDxPHEo',
    name: 'Datejust 41mm Mother of Pearl Diamond Dial Oyster - Super Clone',
    description: 'Highest quality replica with Swiss clone movement',
    mode: 'payment'
  },
  'datejust-mop-oyster-aaaaa': {
    priceId: 'price_1RReGxL7hSvB5SHWAlPpKHwQ',
    productId: 'prod_SMN0jYrYy8hzWs',
    name: 'Datejust 41mm Mother of Pearl Diamond Dial Oyster - AAAAA Grade',
    description: 'Premium replica with enhanced movement and finishing',
    mode: 'payment'
  },
  'datejust-mop-oyster-aaa': {
    priceId: 'price_1RReGAL7hSvB5SHWzOmxnoM6',
    productId: 'prod_SMN0s12oVRhh8H',
    name: 'Datejust 41mm Mother of Pearl Diamond Dial Oyster - AAA Grade',
    description: 'High-quality replica with standard movement',
    mode: 'payment'
  },
  'datejust-grey-oyster-super-clone': {
    priceId: 'price_1RReFGL7hSvB5SHWHeQyDQQN',
    productId: 'prod_SMMzi1PoEDPZkN',
    name: 'Rolex Datejust Grey Dial Diamond Silver Oyster Fluted - Super Clone',
    description: 'Highest quality replica with Swiss clone movement',
    mode: 'payment'
  },
  'datejust-grey-oyster-aaaaa': {
    priceId: 'price_1RReF0L7hSvB5SHW76VGjK0j',
    productId: 'prod_SMMyo5CxTwJv90',
    name: 'Rolex Datejust Grey Dial Diamond Silver Oyster Fluted - AAAAA Grade',
    description: 'Premium replica with enhanced movement and finishing',
    mode: 'payment'
  },
  'datejust-grey-oyster-aaa': {
    priceId: 'price_1RReEBL7hSvB5SHWbCUm7LfN',
    productId: 'prod_SMMy9qOC6QtvnD',
    name: 'Rolex Datejust Grey Dial Diamond Silver Oyster Fluted - AAA Grade',
    description: 'High-quality replica with standard movement',
    mode: 'payment'
  },
  'datejust-gold-diamond-oyster-super-clone': {
    priceId: 'price_1RRddqL7hSvB5SHWFuWLw0Dq',
    productId: 'prod_SMMMdfRerhxBgW',
    name: 'Rolex Datejust Gold Dial Diamond Two-Tone Silver Gold Oyster Fluted - Super Clone',
    description: 'Highest quality replica with Swiss clone movement',
    mode: 'payment'
  },
  'datejust-gold-diamond-oyster-aaaaa': {
    priceId: 'price_1RRddXL7hSvB5SHW9XRu4kT0',
    productId: 'prod_SMMMfjE1BQgRtw',
    name: 'Rolex Datejust Gold Dial Diamond Two-Tone Silver Gold Oyster Fluted - AAAAA Grade',
    description: 'Premium replica with enhanced movement and finishing',
    mode: 'payment'
  },
  'datejust-gold-diamond-oyster-aaa': {
    priceId: 'price_1RRdcQL7hSvB5SHW9Doc5oUY',
    productId: 'prod_SMMLLotRp2PidK',
    name: 'Rolex Datejust Gold Dial Diamond Two-Tone Silver Gold Oyster Fluted - AAA Grade',
    description: 'High-quality replica with standard movement',
    mode: 'payment'
  },
  'datejust-green-smooth-dial-super-clone': {
    priceId: 'price_1RRdbIL7hSvB5SHWWC2GhrAH',
    productId: 'prod_SMMJTvqlU9PiII',
    name: 'Rolex Datejust Greendial Champagne Smooth Silver Jubilee - Super Clone',
    description: 'Highest quality replica with Swiss clone movement',
    mode: 'payment'
  },
  'datejust-green-smooth-dial-aaaaa': {
    priceId: 'price_1RRdb3L7hSvB5SHW9iCCuZBZ',
    productId: 'prod_SMMJjcb26Hmlzi',
    name: 'Rolex Datejust Greendial Champagne Smooth Silver Jubilee - AAAAA Grade',
    description: 'Premium replica with enhanced movement and finishing',
    mode: 'payment'
  },
  'datejust-green-smooth-dial-aaa': {
    priceId: 'price_1RRdaCL7hSvB5SHWrVNNrbBC',
    productId: 'prod_SMMIUxgoKUVF4x',
    name: 'Rolex Datejust Greendial Champagne Smooth Silver Jubilee - AAA Grade',
    description: 'High-quality replica with standard movement',
    mode: 'payment'
  },
  'datejust-blue-smooth-super-clone': {
    priceId: 'price_1RRWDKL7hSvB5SHWTyXOB8ah',
    productId: 'prod_SMEgGF5VOaQbCi',
    name: 'Rolex Datejust Blue Champagne Dial Smooth Bezel Silver Jubilee - Super Clone',
    description: 'Highest quality replica with Swiss clone movement',
    mode: 'payment'
  },
  'datejust-blue-smooth-aaaaa': {
    priceId: 'price_1RRWD2L7hSvB5SHWHMN3yHog',
    productId: 'prod_SMEgfGG7tTqbP5',
    name: 'Rolex Datejust Blue Champagne Dial Smooth Bezel Silver Jubilee - AAAAA Grade',
    description: 'Premium replica with enhanced movement and finishing',
    mode: 'payment'
  },
  'datejust-blue-smooth-aaa': {
    priceId: 'price_1RRWCpL7hSvB5SHWPoZNOj1j',
    productId: 'prod_SMEgUkliNqU6sg',
    name: 'Rolex Datejust Blue Champagne Dial Smooth Bezel Silver Jubilee - AAA Grade',
    description: 'High-quality replica with standard movement',
    mode: 'payment'
  },
  'datejust-mop-diamond-super-clone': {
    priceId: 'price_1RRW9yL7hSvB5SHWgXaWSuhY',
    productId: 'prod_SMEdKxUhSUaHUB',
    name: 'Rolex Datejust MOP Diamond Silver Jubilee Fluted 41 - Super Clone',
    description: 'Highest quality replica with Swiss clone movement',
    mode: 'payment'
  },
  'datejust-mop-diamond-aaaaa': {
    priceId: 'price_1RRW9YL7hSvB5SHWnObDPbS6',
    productId: 'prod_SMEcnZEADVyjnH',
    name: 'Rolex Datejust MOP Diamond Silver Jubilee Fluted 41 - AAAAA Grade',
    description: 'Premium replica with enhanced movement and finishing',
    mode: 'payment'
  },
  'datejust-mop-diamond-aaa': {
    priceId: 'price_1RRW9AL7hSvB5SHW58J6shjH',
    productId: 'prod_SMEcmkB2plWHVN',
    name: 'Rolex Datejust MOP Diamond Silver Jubilee Fluted 41 - AAA Grade',
    description: 'High-quality replica with standard movement',
    mode: 'payment'
  },
  'datejust-white-champagne-super-clone': {
    priceId: 'price_1RRVxLL7hSvB5SHWFMXHABeX',
    productId: 'prod_SMEQjWLFKHDQ4W',
    name: 'Rolex Datejust White Dial Champagne Silver Jubilee Fluted - Super Clone',
    description: 'Highest quality replica with Swiss clone movement',
    mode: 'payment'
  },
  'datejust-white-champagne-aaaaa': {
    priceId: 'price_1RRVwaL7hSvB5SHWtKY9kejh',
    productId: 'prod_SMEPjMOt7aG3FJ',
    name: 'Rolex Datejust White Dial Champagne Silver Jubilee Fluted - AAAAA Grade',
    description: 'Premium replica with enhanced movement and finishing',
    mode: 'payment'
  },
  'datejust-white-champagne-aaa': {
    priceId: 'price_1RRVvoL7hSvB5SHWM5XaOw0y',
    productId: 'prod_SMEONoa2hLkuAc',
    name: 'Rolex Datejust White Dial Champagne Silver Jubilee Fluted - AAA Grade',
    description: 'High-quality replica with standard movement',
    mode: 'payment'
  },
  'datejust-brown-diamond-super-clone': {
    priceId: 'price_1RRVrkL7hSvB5SHWyFJWxuAx',
    productId: 'prod_SMEKTmJLXGCbNA',
    name: 'Rolex Datejust Brown Dial Diamond Two-Tone Silver Rose Jubilee Fluted - Super Clone',
    description: 'Highest quality replica with Swiss clone movement',
    mode: 'payment'
  },
  'datejust-brown-diamond-aaaaa': {
    priceId: 'price_1RRVrML7hSvB5SHWUcVphJzg',
    productId: 'prod_SMEKOIC0KBrnVq',
    name: 'Rolex Datejust Brown Dial Diamond Two-Tone Silver Rose Jubilee Fluted - AAAAA Grade',
    description: 'Premium replica with enhanced movement and finishing',
    mode: 'payment'
  },
  'datejust-brown-diamond-aaa': {
    priceId: 'price_1RRVr7L7hSvB5SHWh1y64aRa',
    productId: 'prod_SMEJNzH4UAG6Qi',
    name: 'Rolex Datejust Brown Dial Diamond Two-Tone Silver Rose Jubilee Fluted - AAA Grade',
    description: 'High-quality replica with standard movement',
    mode: 'payment'
  },
  'datejust-brown-champagne-super-clone': {
    priceId: 'price_1RR9BHL7hSvB5SHWleZkbfYc',
    productId: 'prod_SLqt3gA2j1mS8L',
    name: 'Rolex Datejust Brown Champagne Dial Two-Tone Silver Rose Jubilee Fluted - Super Clone',
    description: 'Highest quality replica with Swiss clone movement',
    mode: 'payment'
  },
  'datejust-brown-champagne-aaaaa': {
    priceId: 'price_1RR9AxL7hSvB5SHWsExiiW9L',
    productId: 'prod_SLqsyvdUPOrzqU',
    name: 'Rolex Datejust Brown Champagne Dial Two-Tone Silver Rose Jubilee Fluted - AAAAA Grade',
    description: 'Premium replica with enhanced movement and finishing',
    mode: 'payment'
  },
  'datejust-brown-champagne-aaa': {
    priceId: 'price_1RR9AfL7hSvB5SHW91tvKWht',
    productId: 'prod_SLqscRxW8YBrEI',
    name: 'Rolex Datejust Brown Champagne Dial Two-Tone Silver Rose Jubilee Fluted - AAA Grade',
    description: 'High-quality replica with standard movement',
    mode: 'payment'
  },
  'datejust-wimbledon-two-tone-super-clone': {
    priceId: 'price_1RR975L7hSvB5SHWXIyZRrCH',
    productId: 'prod_SLqoxnYATqo8tr',
    name: 'Rolex Datejust Wimbledon Two-Tone Silver Gold Jubilee Fluted 41 - Super Clone',
    description: 'Highest quality replica with Swiss clone movement',
    mode: 'payment'
  },
  'datejust-wimbledon-two-tone-aaaaa': {
    priceId: 'price_1RR96pL7hSvB5SHWdSXjsVHG',
    productId: 'prod_SLqod9BzusalcH',
    name: 'Rolex Datejust Wimbledon Two-Tone Silver Gold Jubilee Fluted 41 - AAAAA Grade',
    description: 'Premium replica with enhanced movement and finishing',
    mode: 'payment'
  },
  'datejust-wimbledon-two-tone-aaa': {
    priceId: 'price_1RR96VL7hSvB5SHWMiBGQWHo',
    productId: 'prod_SLqoGweVz6MRoD',
    name: 'Rolex Datejust Wimbledon Two-Tone Silver Gold Jubilee Fluted 41 - AAA Grade',
    description: 'High-quality replica with standard movement',
    mode: 'payment'
  },
  'datejust-gold-champagne-super-clone': {
    priceId: 'price_1RR94sL7hSvB5SHWD48vtFV2',
    productId: 'prod_SLqmKoxwTiq83Z',
    name: 'Rolex Datejust Gold Champagne Dial Two-Tone Silver Gold Jubilee Fluted 41 - Super Clone',
    description: 'Highest quality replica with Swiss clone movement',
    mode: 'payment'
  },
  'datejust-gold-champagne-aaaaa': {
    priceId: 'price_1RR94dL7hSvB5SHWBV02zzSJ',
    productId: 'prod_SLqmwYIRaO65FJ',
    name: 'Rolex Datejust Gold Champagne Dial Two-Tone Silver Gold Jubilee Fluted 41 - AAAAA Grade',
    description: 'Premium replica with enhanced movement and finishing',
    mode: 'payment'
  },
  'datejust-gold-champagne-aaa': {
    priceId: 'price_1RR94HL7hSvB5SHWDAKejvmD',
    productId: 'prod_SLqlMjMF7plvBQ',
    name: 'Rolex Datejust Gold Champagne Dial Two-Tone Silver Gold Jubilee Fluted 41 - AAA Grade',
    description: 'High-quality replica with standard movement',
    mode: 'payment'
  },
  'datejust-gold-diamond-super-clone': {
    priceId: 'price_1RR91yL7hSvB5SHW2zAw2Czl',
    productId: 'prod_SLqj9RFkwjeaWP',
    name: 'Rolex Datejust Gold Diamond Dial Two-Tone Silver Gold Jubilee Fluted 41 - Super Clone',
    description: 'Highest quality replica with Swiss clone movement',
    mode: 'payment'
  },
  'datejust-gold-diamond-aaaaa': {
    priceId: 'price_1RR917L7hSvB5SHWiKkjJmVL',
    productId: 'prod_SLqiKrnJmeA781',
    name: 'Rolex Datejust Gold Diamond Dial Two-Tone Silver Gold Jubilee Fluted 41 - AAAAA Grade',
    description: 'Premium replica with enhanced movement and finishing',
    mode: 'payment'
  },
  'datejust-gold-diamond-aaa': {
    priceId: 'price_1RR90qL7hSvB5SHWEDB8suPE',
    productId: 'prod_SLqiVorwAl1D0T',
    name: 'Rolex Datejust Gold Diamond Dial Two-Tone Silver Gold Jubilee Fluted 41 - AAA Grade',
    description: 'High-quality replica with standard movement',
    mode: 'payment'
  },
  'datejust-roman-super-clone': {
    priceId: 'price_1RR8FOL7hSvB5SHW2cDsCJZb',
    productId: 'prod_SLpvs8ueobZOIC',
    name: 'Rolex Datejust Blue Dial Roman Fluted Jubilee 41 - Super Clone',
    description: 'Highest quality replica with Swiss clone movement',
    mode: 'payment'
  },
  'datejust-roman-aaaaa': {
    priceId: 'price_1RR8F8L7hSvB5SHWbxNmlIMg',
    productId: 'prod_SLpuItg9RcDIGD',
    name: 'Rolex Datejust Blue Dial Roman Fluted Jubilee 41 - AAAAA Grade',
    description: 'Premium replica with enhanced movement and finishing',
    mode: 'payment'
  },
  'datejust-roman-aaa': {
    priceId: 'price_1RR8ErL7hSvB5SHW8p0B5T7i',
    productId: 'prod_SLpujoJmqfT7CI',
    name: 'Rolex Datejust Blue Dial Roman Fluted Jubilee 41 - AAA Grade',
    description: 'High-quality replica with standard movement',
    mode: 'payment'
  },
  'datejust-white-roman-super-clone': {
    priceId: 'price_1RR897L7hSvB5SHWbOzdsQ6X',
    productId: 'prod_SLpoUxrTsBRXOa',
    name: 'Rolex Datejust 41mm White Roman Dial Fluted Jubilee - Super Clone',
    description: 'Highest quality replica with Swiss clone movement',
    mode: 'payment'
  },
  'datejust-white-roman-aaaaa': {
    priceId: 'price_1RR88oL7hSvB5SHWXMknNMSz',
    productId: 'prod_SLpoI9i5LwXp3g',
    name: 'Rolex Datejust 41mm White Roman Dial Fluted Jubilee - AAAAA Grade',
    description: 'Premium replica with enhanced movement and finishing',
    mode: 'payment'
  },
  'datejust-white-roman-aaa': {
    priceId: 'price_1RR88ML7hSvB5SHWPVkX6tGP',
    productId: 'prod_SLpn7X7vKehvkF',
    name: 'Rolex Datejust 41mm White Roman Dial Fluted Jubilee - AAA Grade',
    description: 'High-quality replica with standard movement',
    mode: 'payment'
  },
  'datejust-wimbledon-super-clone': {
    priceId: 'price_1RR7x4L7hSvB5SHWUjrucjJj',
    productId: 'prod_SLpcTenAozCvrp',
    name: 'Rolex Datejust 41mm Wimbledon Dial with Fluted Bezel - Super Clone',
    description: 'Highest quality replica with Swiss clone movement',
    mode: 'payment'
  },
  'datejust-wimbledon-aaaaa': {
    priceId: 'price_1RR7wkL7hSvB5SHWtV7mbxYm',
    productId: 'prod_SLpbRdl4r6tsdD',
    name: 'Rolex Datejust 41mm Wimbledon Dial with Fluted Bezel - AAAAA Grade',
    description: 'Premium replica with enhanced movement and finishing',
    mode: 'payment'
  },
  'datejust-wimbledon-aaa': {
    priceId: 'price_1RR7w9L7hSvB5SHWvWc3Swox',
    productId: 'prod_SLpbAg9Z6VWJxi',
    name: 'Rolex Datejust 41mm Wimbledon Dial with Fluted Bezel - AAA Grade',
    description: 'High-quality replica with standard movement',
    mode: 'payment'
  },
  'datejust-grey-dial-super-clone': {
    priceId: 'price_1RR7OOL7hSvB5SHWY3kIS9cz',
    productId: 'prod_SLp2D8ezDWYfs4',
    name: 'Datejust 41mm Grey Diamond Dial - Super Clone',
    description: 'Highest quality replica with Swiss clone movement',
    mode: 'payment'
  },
  'datejust-grey-dial-aaaaa': {
    priceId: 'price_1RR7O1L7hSvB5SHWE68YUhGe',
    productId: 'prod_SLp2m5ZGwk14a6',
    name: 'Datejust 41mm Grey Diamond Dial - AAAAA Grade',
    description: 'Premium replica with enhanced movement and finishing',
    mode: 'payment'
  },
  'datejust-grey-dial-aaa': {
    priceId: 'price_1RR7NaL7hSvB5SHWAfbtyNel',
    productId: 'prod_SLp1xXQozu15Tg',
    name: 'Datejust 41mm Grey Diamond Dial - AAA Grade',
    description: 'High-quality replica with standard movement',
    mode: 'payment'
  },
  'datejust-blue-dial-super-clone': {
    priceId: 'price_1RR75qL7hSvB5SHWaRHraeQi',
    productId: 'prod_SLoj4MbTFN4XWh',
    name: 'Rolex Datejust Blue Diamond Dial Silver Jubilee Fluted 41 - Super Clone',
    description: 'Highest quality replica with Swiss clone movement',
    mode: 'payment'
  },
  'datejust-blue-dial-aaaaa': {
    priceId: 'price_1RR75PL7hSvB5SHWGu1nec2c',
    productId: 'prod_SLoi4gsAj46qfB',
    name: 'Rolex Datejust Blue Diamond Dial Silver Jubilee Fluted 41 - AAAAA Grade',
    description: 'Premium replica with enhanced movement and finishing',
    mode: 'payment'
  },
  'datejust-blue-dial-aaa': {
    priceId: 'price_1RQu9LL7hSvB5SHWYyVCXTkb',
    productId: 'prod_SLbM5y6rR3LLMg',
    name: 'Rolex Datejust Blue Diamond Dial Silver Jubilee Fluted 41 - AAA Grade',
    description: 'High-quality replica with standard movement',
    mode: 'payment'
  },
  'datejust-black-dial-super-clone': {
    priceId: 'price_1RQuSVL7hSvB5SHWJyRCOiOP',
    productId: 'prod_SLbfgjDMYfQfNy',
    name: 'Rolex Datejust 41mm Black Dial 2025 - Super Clone',
    description: 'Highest quality replica with Swiss clone movement',
    mode: 'payment'
  },
  'datejust-black-dial-aaaaa': {
    priceId: 'price_1RQuEAL7hSvB5SHWkZQQNu0g',
    productId: 'prod_SLbRc61vZu0eul',
    name: 'Rolex Datejust 41mm Black Dial 2025 - AAAAA Grade',
    description: 'Premium replica with enhanced movement and finishing',
    mode: 'payment'
  },
  'datejust-black-dial-aaa': {
    priceId: 'price_1RQszcL7hSvB5SHWTNpUS2i0',
    productId: 'prod_SHn6XKtTpi9FRB',
    name: 'Rolex Datejust 41mm Black Dial 2025 - AAA Grade',
    description: 'High-quality replica with standard movement',
    mode: 'payment'
  },
  'premium-rolex-box': {
    priceId: 'price_1RQsZvL7hSvB5SHWJ0q6S821',
    productId: 'prod_SLZjntPSkcfbSY',
    name: 'Premium Rolex Box with Certificate',
    description: 'Premium presentation box with authentication certificate',
    mode: 'payment'
  },
  'datejust-wimbledon-oyster-super-clone': {
    priceId: 'price_1RRuMBL7hSvB5SHW3X5zADRM',
    productId: 'prod_SMddNsOJblZAAA',
    name: 'Rolex Datejust Wimbledon Two-Tone Silver Gold Oyster Fluted 41 - Super Clone',
    description: 'Highest quality replica with Swiss clone movement',
    mode: 'payment'
  },
  'datejust-wimbledon-oyster-aaaaa': {
    priceId: 'price_1RRuLqL7hSvB5SHW21qCqFrs',
    productId: 'prod_SMddfAgJEfN7xK',
    name: 'Rolex Datejust Wimbledon Two-Tone Silver Gold Oyster Fluted 41 - AAAAA Grade',
    description: 'Premium replica with enhanced movement and finishing',
    mode: 'payment'
  },
  'datejust-wimbledon-oyster-aaa': {
    priceId: 'price_1RRuLbL7hSvB5SHWyXDtn8tq',
    productId: 'prod_SMdcFU1fcMK6VI',
    name: 'Rolex Datejust Wimbledon Two-Tone Silver Gold Oyster Fluted 41 - AAA Grade',
    description: 'High-quality replica with standard movement',
    mode: 'payment'
  }
};
serve(async (req)=>{
  if (req.method === 'OPTIONS') {
    return new Response(null, {
      status: 204,
      headers: corsHeaders
    });
  }
  try {
    const { items } = await req.json();
    if (!Array.isArray(items) || items.length === 0) {
      return new Response(JSON.stringify({
        error: 'Invalid or empty cart items'
      }), {
        status: 400,
        headers: {
          'Content-Type': 'application/json',
          ...corsHeaders
        }
      });
    }
    const lineItems = items.map((item)=>{
      const product = products[item.productId];
      if (!product) {
        throw new Error(`Product not found: ${item.productId}`);
      }
      return {
        price: product.priceId,
        quantity: item.quantity
      };
    });
    const session = await stripe.checkout.sessions.create({
      payment_method_types: [
        'card'
      ],
      line_items: lineItems,
      mode: 'payment',
      shipping_options: [
        {
          shipping_rate: 'shr_1RNF7WL7hSvB5SHWgX4Ss0xs'
        }
      ],
      success_url: `${req.headers.get('origin')}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.get('origin')}/checkout/cancel`,
      metadata: {
        productIds: items.map((item)=>item.productId).join(',')
      }
    });
    return new Response(JSON.stringify({
      sessionId: session.id,
      url: session.url
    }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        ...corsHeaders
      }
    });
  } catch (error) {
    console.error('Stripe checkout error:', error);
    return new Response(JSON.stringify({
      error: error instanceof Error ? error.message : 'An unexpected error occurred'
    }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
        ...corsHeaders
      }
    });
  }
});
