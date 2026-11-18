// Sample data for the UI preview. Replace with API calls (Node/Express + MongoDB) later.

export const categories = [
  { name: 'Vegetables', si: 'එළවළු', icon: 'vegetables' },
  { name: 'Fruits', si: 'පලතුරු', icon: 'fruits' },
  { name: 'Grains', si: 'ධාන්‍ය', icon: 'grains' },
  { name: 'Wholesale', si: 'තොග', icon: 'wholesale' },
]

export const listings = [
  { id: 1, name: 'Beans', si: 'බෝංචි', farmer: 'Farmer name', district: 'District', price: 320, qty: '120 kg', rating: 4.7, harvest: '14 Nov', tint: 'linear-gradient(135deg, #132a1e, #1a3a29)', ink: '#4ade80' },
  { id: 2, name: 'Cowpea', si: 'කව්පි', farmer: 'Farmer name', district: 'District', price: 450, qty: '80 kg', rating: 4.5, harvest: '15 Nov', tint: 'linear-gradient(135deg, #282111, #382e16)', ink: '#facc15' },
  { id: 3, name: 'Chickpea', si: 'කඩල', farmer: 'Farmer name', district: 'District', price: 520, qty: '200 kg', rating: 4.8, harvest: '16 Nov', tint: 'linear-gradient(135deg, #241e16, #332a1d)', ink: '#fbbf24' },
  { id: 4, name: 'Pumpkin', si: 'වට්ටක්කා', farmer: 'Farmer name', district: 'District', price: 140, qty: '350 kg', rating: 4.4, harvest: '16 Nov', tint: 'linear-gradient(135deg, #2c1c12, #3d2616)', ink: '#fb923c' },
  { id: 5, name: 'Banana', si: 'කෙසෙල්', farmer: 'Farmer name', district: 'District', price: 210, qty: '260 kg', rating: 4.6, harvest: '17 Nov', tint: 'linear-gradient(135deg, #272511, #373415)', ink: '#fde047' },
  { id: 6, name: 'Tomato', si: 'තක්කාලි', farmer: 'Farmer name', district: 'District', price: 260, qty: '150 kg', rating: 4.3, harvest: '18 Nov', tint: 'linear-gradient(135deg, #2d1616, #401d1d)', ink: '#f87171' },
]

export const steps = [
  { n: 1, title: 'Find produce', body: 'Search, browse or just speak. See harvest date and farmer rating.' },
  { n: 2, title: 'Place your order', body: 'Choose a quantity. Wholesale buyers can order in bulk.' },
  { n: 3, title: 'Track delivery', body: 'Follow your order from the farm to your door on the map.' },
]

export const trust = [
  { title: 'Verified farmers', body: 'The admin checks every farmer before they can sell.', icon: 'shield' },
  { title: 'Rated by buyers', body: 'Buyers rate farmers and delivery partners after every order.', icon: 'star' },
  { title: 'Delivery you can follow', body: 'Map-based tracking from the farm to your door.', icon: 'pin' },
]

export const farmerStats = [
  { label: 'Active ads', si: 'දැන්වීම්', value: '3' },
  { label: 'Pending', si: 'පොරොත්තුවේ', value: '2' },
  { label: 'Preparing', si: 'සූදානම් කරමින්', value: '1' },
  { label: 'Rating', si: 'ඇගයීම', value: '4.6' },
]

export const farmerAds = [
  { name: 'Beans', si: 'බෝංචි', qty: '120 kg', harvest: '14 Nov', price: 320, status: 'Active', tint: '#132a1e', ink: '#4ade80' },
  { name: 'Cowpea', si: 'කව්පි', qty: '80 kg', harvest: '15 Nov', price: 450, status: 'Active', tint: '#282111', ink: '#facc15' },
  { name: 'Chickpea', si: 'කඩල', qty: '200 kg', harvest: '16 Nov', price: 520, status: 'Active', tint: '#241e16', ink: '#fbbf24' },
  { name: 'Pumpkin', si: 'වට්ටක්කා', qty: '350 kg', harvest: '20 Nov', price: 140, status: 'Draft', tint: '#2c1c12', ink: '#fb923c' },
]

export const farmerOrders = [
  { id: '#1042', item: 'Beans', qty: '10 kg', buyer: 'Customer', type: 'Retail', status: 'Pending', si: 'පොරොත්තුවේ', canAccept: true },
  { id: '#1041', item: 'Cowpea', qty: '60 kg', buyer: 'Wholesale buyer', type: 'Wholesale', status: 'Assigned', si: 'පවරා ඇත', canAccept: false },
  { id: '#1039', item: 'Chickpea', qty: '25 kg', buyer: 'Customer', type: 'Retail', status: 'Preparing', si: 'සූදානම් කරමින්', canAccept: false },
]

export const reviews = [
  { text: 'Fresh and exactly as described.', who: 'Customer', stars: 5 },
  { text: 'Packed well and ready on time.', who: 'Wholesale buyer', stars: 4 },
]

export const orderSteps = [
  { label: 'Pending', si: 'පොරොත්තුවේ' },
  { label: 'Assigned to a delivery partner', si: 'පවරා ඇත' },
  { label: 'Preparing', si: 'සූදානම් කරමින්' },
  { label: 'On the way', si: 'මාර්ගයේ' },
  { label: 'Delivered', si: 'බෙදා හැරියා' },
]

export const adminMenu = [
  { label: 'Overview', icon: 'overview' },
  { label: 'Farmer verification', icon: 'shield' },
  { label: 'Orders', icon: 'orders' },
  { label: 'Delivery', icon: 'pin' },
  { label: 'Prices', icon: 'price' },
  { label: 'Payments', icon: 'payments' },
  { label: 'Reports', icon: 'reports' },
]

export const adminStats = [
  { label: 'Orders today', value: '14' },
  { label: 'Farmers to verify', value: '3' },
  { label: 'Need a delivery partner', value: '3' },
  { label: 'Payments to review', value: '5' },
]

export const farmersToVerify = [
  { name: 'Farmer name', district: 'District', crops: 'Beans, cowpea' },
  { name: 'Farmer name', district: 'District', crops: 'Banana' },
  { name: 'Farmer name', district: 'District', crops: 'Chickpea, pumpkin' },
]

export const needsDelivery = [
  { id: '#1042', item: 'Beans · 10 kg', route: 'Farm district to customer area' },
  { id: '#1043', item: 'Tomato · 40 kg', route: 'Farm district to customer area' },
  { id: '#1044', item: 'Banana · 100 kg', route: 'Farm district to wholesale buyer' },
]

export const referencePrices = [
  { name: 'Beans', si: 'බෝංචි', price: 320 },
  { name: 'Cowpea', si: 'කව්පි', price: 450 },
  { name: 'Chickpea', si: 'කඩල', price: 520 },
  { name: 'Pumpkin', si: 'වට්ටක්කා', price: 140 },
]

export const ordersPerDay = [
  { day: 'Mon', value: 12 },
  { day: 'Tue', value: 18 },
  { day: 'Wed', value: 15 },
  { day: 'Thu', value: 22 },
  { day: 'Fri', value: 19 },
  { day: 'Sat', value: 26 },
  { day: 'Sun', value: 9 },
]
