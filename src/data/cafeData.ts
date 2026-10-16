export interface MenuItem {
  id: string;
  name: string;
  category: 'food' | 'beers' | 'coffee' | 'boutique';
  price: string;
  description: string;
  image?: string;
  badge?: string;
  notes?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'food' | 'beers' | 'ambiance' | 'specials';
  image: string;
  aspect: 'square' | 'portrait' | 'landscape';
  description: string;
  caption: string;
}

export const CAFE_INFO = {
  name: 'The Canna Cafe',
  subname: 'Located Inside The Hemp Center',
  tagline: 'Your Next Favourite Spot.',
  headlineDescription: "Illinois' premier destination combining artisanal cafe sandwiches, craft draft beers, gourmet sushi, and curated hemp wellness inside The Hemp Center in Rockford.",
  address: {
    street: '6830 Spring Creek Rd',
    city: 'Rockford',
    state: 'IL',
    zip: '61114',
    full: '6830 Spring Creek Rd, Rockford, IL 61114',
    googleMapsUrl: 'https://maps.google.com/?q=6830+Spring+Creek+Rd,+Rockford,+IL+61114'
  },
  phone: '(815) 977-3364',
  phoneClean: '+18159773364',
  socials: {
    instagram: 'https://www.instagram.com/thecannacafe815/',
    instagramHandle: '@thecannacafe815',
    facebook: 'https://www.facebook.com/815thecannacafe',
    facebookHandle: '815thecannacafe'
  },
  hours: [
    { day: 'Monday', hours: 'Closed', isClosed: true },
    { day: 'Tuesday', hours: '11:00 AM – 6:00 PM', isClosed: false, open: 11, close: 18 },
    { day: 'Wednesday', hours: '11:00 AM – 7:00 PM', isClosed: false, open: 11, close: 19 },
    { day: 'Thursday', hours: '11:00 AM – 7:00 PM', isClosed: false, open: 11, close: 19 },
    { day: 'Friday', hours: '11:00 AM – 7:00 PM', isClosed: false, open: 11, close: 19 },
    { day: 'Saturday', hours: '11:00 AM – 4:00 PM', isClosed: false, open: 11, close: 16 },
    { day: 'Sunday', hours: '11:00 AM – 4:00 PM', isClosed: false, open: 11, close: 16 }
  ],
  verifiedFacts: [
    'First-of-its-kind hybrid establishment in Illinois',
    'Located directly inside The Hemp Center of Northern Illinois',
    'Craft beers, artisanal sandwiches, gourmet paninis and fresh sushi rolls',
    'Full licensed boutique offering verified CBD, topicals, and botanicals',
    'Features comfortable cafe seating, craft bar counter, and video gaming lounge',
    'Weekly community events: Monday Funday, Wine Wednesday, and Sunday Funday'
  ]
};

export const MENU_ITEMS: MenuItem[] = [
  // Signature Kitchen Fare & Paninis (Authentic from user uploads)
  {
    id: 'food-1',
    name: 'The Cuban Sammy (House Special)',
    category: 'food',
    price: '$13.50',
    description: 'Slow-roasted pulled pork, smoked ham, melted Swiss cheese, tangy dill pickles, and stone-ground yellow mustard pressed on artisanal crusty bread. Served in a basket with Lay’s potato chips and whole pepperoncini.',
    badge: 'Guest Favorite',
    image: '/images/cuban_sammy.jpg',
    notes: 'Served with chips & pepperoncini'
  },
  {
    id: 'food-2',
    name: 'Artisanal Veggie Sushi Roll',
    category: 'food',
    price: '$11.00',
    description: 'Freshly rolled maki filled with ripe Hass avocado, crisp garden cucumber, julienned carrots, and toasted sesame, drizzled with house spicy sauce, served with pink pickled ginger and soy sauce.',
    badge: 'Fresh Daily',
    image: '/images/veggie_sushi.jpg',
    notes: 'Vegetarian · Prepared fresh daily'
  },
  {
    id: 'food-3',
    name: 'Sunday Funday Roast Beef Panini',
    category: 'food',
    price: '$14.00',
    description: 'Tender sliced roast beef, melted aged provolone, caramelized onions, and house horseradish cream pressed golden, served with rich hot au jus for dipping.',
    badge: 'Weekend Special',
    notes: 'Includes side of au jus & chips'
  },
  {
    id: 'food-4',
    name: 'Tuscan Mozzarella Panini',
    category: 'food',
    price: '$12.50',
    description: 'Fresh whole milk mozzarella, vine-ripened tomatoes, sweet basil pesto, and aged balsamic glaze pressed on rustic focaccia.',
    notes: 'Vegetarian'
  },
  {
    id: 'food-5',
    name: 'Warm Gourmet Bavarian Pretzel Bites',
    category: 'food',
    price: '$9.50',
    description: 'Freshly baked soft salted pretzel nuggets served with hot craft beer cheese and stone-ground brown mustard.',
    notes: 'Shareable lounge favorite'
  },

  // Craft Beers & Drafts (Authentic cans & taps from user photos)
  {
    id: 'beer-1',
    name: 'Zoned New England-Style IPA',
    category: 'beers',
    price: '$7.50',
    description: 'Hazy, tropical, juicy IPA brewed by Pollyanna Brewing / Mikerphone Brewing. Loaded with Citra and Mosaic hops. 6.5% ABV.',
    badge: 'Rotating Tap',
    image: '/images/craft_beer.jpg',
    notes: '21+ Only · 16 oz Can / Draft'
  },
  {
    id: 'beer-2',
    name: 'Irie IPA (Tighthead Brewing Company)',
    category: 'beers',
    price: '$7.50',
    description: 'Illinois craft IPA bursting with piney citrus hop aromas, balanced malt backbone, and crisp clean finish.',
    badge: 'Local Favorite',
    notes: '21+ Only · 16 oz Can'
  },
  {
    id: 'beer-3',
    name: 'Vera Pistachio Cream Ale (Around The Bend)',
    category: 'beers',
    price: '$8.00',
    description: 'Smooth, subtle, decadent cream ale brewed with real pistachios for a nutty, velvety character. 16 fl oz.',
    badge: 'Unique Pour',
    notes: '21+ Only · Around The Bend Beer Co.'
  },
  {
    id: 'beer-4',
    name: 'Son of Juice India Pale Ale',
    category: 'beers',
    price: '$7.50',
    description: 'Maplewood Brewing’s flagship hazy IPA packed with notes of orange, mango, and ripe peach with low bitterness.',
    badge: 'Popular',
    notes: '21+ Only · 16 oz Can'
  },
  {
    id: 'beer-5',
    name: 'Wavey Blonde Ale (Prairie Brewing Co.)',
    category: 'beers',
    price: '$6.50',
    description: 'Light, crisp, refreshing golden blonde ale with a clean malt profile and mild floral hop notes.',
    notes: '21+ Only · Easy drinking'
  },
  {
    id: 'beer-6',
    name: 'Rebel City Amber American Ale',
    category: 'beers',
    price: '$6.50',
    description: 'Rich amber ale with toasted caramel malt sweetness and balanced noble hop aroma. 12 fl oz.',
    notes: '21+ Only · Chicago craft'
  },
  {
    id: 'beer-7',
    name: 'Curated Wine Selection',
    category: 'beers',
    price: '$9.00 / glass',
    description: 'Dry California Cabernet Sauvignon, chilled Pinot Grigio, and sparkling Prosecco. Celebrated during our Wine Wednesday!',
    notes: '21+ Only · Wine Wednesday Special'
  },

  // Artisanal Coffee, Matcha & Teas
  {
    id: 'coffee-1',
    name: 'Honeycomb Oat Milk Latte',
    category: 'coffee',
    price: '$6.50',
    description: 'Double shot of locally roasted espresso, steamed organic oat milk, and local Northern Illinois raw honey.',
    badge: 'Barista Choice'
  },
  {
    id: 'coffee-2',
    name: 'Ceremonial Matcha Latte',
    category: 'coffee',
    price: '$6.75',
    description: 'First-harvest Japanese ceremonial green tea whisked with Madagascar vanilla and silky coconut milk.'
  },
  {
    id: 'coffee-3',
    name: 'Nitro Cold Brew on Tap',
    category: 'coffee',
    price: '$5.50',
    description: 'Single-origin micro-roasted cold brew poured on nitrogen tap for an ultra-creamy head.'
  },
  {
    id: 'coffee-4',
    name: 'Artisan Herbal Loose-Leaf Tea',
    category: 'coffee',
    price: '$4.75',
    description: 'Steeped loose-leaf infusions including peppermint lavender, chamomile blossom, and Earl Grey supreme.'
  },

  // The Hemp Center Boutique
  {
    id: 'boutique-1',
    name: 'The Hemp Center Full-Spectrum Tinctures',
    category: 'boutique',
    price: 'From $45.00',
    description: 'Pure lab-certified full-spectrum and broad-spectrum formulas for daily calm and recovery.',
    badge: 'Lab Certified'
  },
  {
    id: 'boutique-2',
    name: 'Botanical Relief Salves & Balms',
    category: 'boutique',
    price: 'From $35.00',
    description: 'Soothing arnica, menthol, and premium hemp botanical balms for muscles and joints.',
    badge: 'In-Store Exclusive'
  },
  {
    id: 'boutique-3',
    name: 'Artisanal Vegan Fruit Gems',
    category: 'boutique',
    price: 'From $25.00',
    description: 'Pectin-based natural fruit gummies formulated with natural terpenes in elderberry and blackberry flavors.',
    badge: 'Popular'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'The Cuban Sammy Panini',
    category: 'food',
    image: '/images/cuban_sammy.jpg',
    aspect: 'landscape',
    description: 'Our signature slow-roasted pork and ham panini pressed crisp with Swiss cheese and dill pickles, served with potato chips.',
    caption: 'The Canna Cafe Kitchen Special'
  },
  {
    id: 'gal-2',
    title: 'The Canna Cafe Bar & Lounge',
    category: 'ambiance',
    image: '/images/hero_atmosphere.jpg',
    aspect: 'landscape',
    description: 'The vibrant social atmosphere inside The Hemp Center on Spring Creek Rd featuring our colorful psychedelic mural and craft bar counter.',
    caption: 'Rockford, IL · 6830 Spring Creek Rd'
  },
  {
    id: 'gal-3',
    title: 'Fresh Veggie Sushi Roll Plate',
    category: 'food',
    image: '/images/veggie_sushi.jpg',
    aspect: 'portrait',
    description: 'Handcrafted avocado, cucumber, and carrot veggie sushi rolls with spicy mayo drizzle and pickled ginger.',
    caption: 'Fresh daily culinary feature'
  },
  {
    id: 'gal-4',
    title: 'Craft Beer Spotlight & Drafts',
    category: 'beers',
    image: '/images/craft_beer.jpg',
    aspect: 'portrait',
    description: 'Rotating Illinois craft cans and draft taps including Zoned NEIPA, Irie IPA, Vera Pistachio Cream Ale, and Son of Juice.',
    caption: 'Chilled craft brewery selections'
  },
  {
    id: 'gal-5',
    title: 'Autumn Evenings at The Canna Cafe',
    category: 'ambiance',
    image: '/images/canna_pumpkin.jpg',
    aspect: 'landscape',
    description: 'Cozy autumn lounge atmosphere featuring our custom hand-carved glowing botanical pumpkin and warm cafe lighting.',
    caption: 'Warm autumn lounge vibes'
  }
];

export const WEEKLY_SPECIALS = [
  {
    day: 'Monday',
    title: 'Monday Funday',
    description: 'Kick off your week with specials on shareables, savory paninis, and gaming in our comfortable lounge.',
    tag: 'Weekly Feature'
  },
  {
    day: 'Wednesday',
    title: 'Wine Wednesday',
    description: 'Come join us for great wine selections, artisan boards, and freshly pressed Cuban Sammys.',
    tag: 'Wine & Dine'
  },
  {
    day: 'Sunday',
    title: 'Sunday Funday',
    description: 'Game day vibes on the screens, cold craft beers, hot roast beef sandwiches, and relaxed cafe seating.',
    tag: 'Game Day Vibes'
  }
];
