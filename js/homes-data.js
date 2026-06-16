// homes-data.js — Auto-generated from southernmhcenter.com real inventory
// 486 photos downloaded from trove CDN
// Updated: Trove-style upgrade with status, dimensions, designOptions

const DEFAULT_DESIGN_OPTIONS = {
  exterior: {
    sidingColor: [
      { name: "Flint",        color: "#6b6b6b", price: 0 },
      { name: "Wicker",       color: "#c4a882", price: 0 },
      { name: "Praline",      color: "#8b6b4a", price: 0 },
      { name: "Frost",        color: "#e8e8e8", price: 0 },
      { name: "Coastal Blue", color: "#5b7fa6", price: 0 },
      { name: "Sage",         color: "#7a9b7a", price: 0 },
      { name: "Barn Red",     color: "#8b2020", price: 0 },
      { name: "White",        color: "#ffffff", price: 0 },
    ],
    roofColor: [
      { name: "Charcoal",      color: "#3a3a3a", price: 0 },
      { name: "Weathered Wood",color: "#8b7355", price: 0 },
      { name: "Desert Sand",   color: "#c4a882", price: 0 },
    ],
  },
  kitchen: {
    cabinetColor: [
      { name: "Alabaster White", color: "#f5f0e8", price: 0 },
      { name: "Driftwood",       color: "#b8a898", price: 0 },
      { name: "Espresso",        color: "#3c2415", price: 0 },
      { name: "Graphite",        color: "#4a4a4a", price: 0 },
    ],
    countertop: [
      { name: "White Barn",     color: "#f0ece4", price: 0 },
      { name: "Fossil Gray",    color: "#a0a0a0", price: 0 },
      { name: "Midnight Black", color: "#1a1a1a", price: 0 },
      { name: "Sandstone",      color: "#c4aa88", price: 0 },
    ],
    appliances: [
      { name: "Electric Standard", price: 0,   included: true },
      { name: "Gas Range",         price: 400,  included: false },
      { name: "Stainless Upgrade", price: 600,  included: false },
    ],
  },
  flooring: {
    kitchenBath: [
      { name: "Piedmont",       price: 0,   included: true },
      { name: "Heritage Oak",   price: 300, included: false },
      { name: "Coastal Slate",  price: 450, included: false },
    ],
    bedroomLiving: [
      { name: "Carpet",             price: 0,    included: true },
      { name: "Luxury Vinyl Plank", price: 700,  included: false },
      { name: "Hardwood Look",      price: 1200, included: false },
    ],
  },
  interior: {
    wallColor: [
      { name: "First Light",    color: "#f8f4ee", price: 0 },
      { name: "Coastal Breeze", color: "#e8eef4", price: 0 },
      { name: "Warm Sand",      color: "#f4ede0", price: 0 },
      { name: "Slate Gray",     color: "#e0e4e8", price: 0 },
    ],
    trimColor: [
      { name: "Bright White",  color: "#ffffff", price: 0 },
      { name: "Antique Cream", color: "#f5eedd", price: 0 },
    ],
  },
};

// ── Deer Valley Design Options (real manufacturer swatches) ─────────────────
const DEER_VALLEY_DESIGN_OPTIONS = {
  callForCustomization: true, // Too many options — show call CTA instead of option panels
  exterior: {
    sidingColor: [
      { name: "Aspen White",   img: "https://www.deervalleyhb.com/wp-content/uploads/2023/09/Aspen-White-Standard.jpg",    price: 0 },
      { name: "Canyon",        img: "https://www.deervalleyhb.com/wp-content/uploads/2023/09/Canyon-Standard.jpg",         price: 0 },
      { name: "Country Beige", img: "https://www.deervalleyhb.com/wp-content/uploads/2023/09/Country-Beige-Standard.jpg",  price: 0 },
      { name: "Clay",          img: "https://www.deervalleyhb.com/wp-content/uploads/2023/09/Clay-Standard.jpg",           price: 0 },
      { name: "Cypress",       img: "https://www.deervalleyhb.com/wp-content/uploads/2023/09/Cypress-Standard.jpg",        price: 0 },
      { name: "Greystone",     img: "https://www.deervalleyhb.com/wp-content/uploads/2023/09/Greystone-Standard.jpg",      price: 0 },
      { name: "Driftwood",     img: "https://www.deervalleyhb.com/wp-content/uploads/2023/09/Driftwood-Standard.jpg",      price: 0 },
      { name: "Regatta Blue",  img: "https://www.deervalleyhb.com/wp-content/uploads/2021/04/siding-Regatta-Blue-768x509.jpg", price: 0 },
      { name: "Carbon",        img: "https://www.deervalleyhb.com/wp-content/uploads/2023/05/carbon-768x509.jpg",           price: 0 },
    ],
    roofColor: [
      { name: "Weathered Wood",  img: "https://www.deervalleyhb.com/wp-content/uploads/2023/09/Weathered-Wood-Standard.jpg",   price: 0 },
      { name: "Charcoal Black",  img: "https://www.deervalleyhb.com/wp-content/uploads/2023/09/Charcoal-Black-Upgarde.jpg",    price: 0 },
      { name: "Silver Birch",    img: "https://www.deervalleyhb.com/wp-content/uploads/2023/09/Silver-Birch-Upgrade.jpg",       price: 0 },
      { name: "Resawn Shake",    img: "https://www.deervalleyhb.com/wp-content/uploads/2023/09/Resawn-Shake-Upgrade.jpg",       price: 0 },
    ],
  },
  kitchen: {
    cabinetColor: [
      { name: "Shaker Alabaster", img: "https://www.deervalleyhb.com/wp-content/uploads/2023/05/SHAKER-ALABASTER-1.jpg",    price: 0 },
      { name: "Shaker Ash",       img: "https://www.deervalleyhb.com/wp-content/uploads/2023/05/SHAKER-ASH.jpg",            price: 0 },
      { name: "Shaker Storm",     img: "https://www.deervalleyhb.com/wp-content/uploads/2023/05/SHAKER-GRAY-1.jpg",         price: 0 },
      { name: "Shaker Pecan",     img: "https://www.deervalleyhb.com/wp-content/uploads/2023/05/SHAKER-PECAN-1.jpg",        price: 0 },
      { name: "Shaker Ebony",     img: "https://www.deervalleyhb.com/wp-content/uploads/2023/05/SHAKER-EBONY.jpg",          price: 0 },
      { name: "Maple Cognac",     img: "https://www.deervalleyhb.com/wp-content/uploads/2024/08/KITH-Colony-Maple-Cognac-300x300.jpg", price: 0 },
      { name: "Maple Thunder",    img: "https://www.deervalleyhb.com/wp-content/uploads/2024/08/KITH-Colony-Maple-Thunder-295x300.jpg", price: 0 },
    ],
    countertop: [
      { name: "Silver Quartzite",  img: "https://www.deervalleyhb.com/wp-content/uploads/2025/10/SILVER-QUARTZITE-1-768x768.jpg",   price: 0 },
      { name: "Classic Crystal",   img: "https://www.deervalleyhb.com/wp-content/uploads/2025/10/CLASSIC-CRYSTAL-GRANITE-768x768.jpg", price: 0 },
      { name: "Aluma Marble",      img: "https://www.deervalleyhb.com/wp-content/uploads/2025/10/ALUMA-MARBLE-768x768.jpg",         price: 0 },
      { name: "Calcutta Marble",   img: "https://www.deervalleyhb.com/wp-content/uploads/2025/10/CALCUTTA-MARBLE-768x768.jpg",      price: 0 },
      { name: "Antique Limed Pine",img: "https://www.deervalleyhb.com/wp-content/uploads/2025/10/ANTIQUE-LIMED-PINE-768x768.jpg",  price: 0 },
      { name: "Oxidized Beamwood", img: "https://www.deervalleyhb.com/wp-content/uploads/2025/10/OXIDIZED-BEAMWOOD-768x768.jpg",   price: 0 },
    ],
    appliances: [
      { name: "Electric Standard", price: 0,   included: true },
      { name: "Gas Range",         price: 400,  included: false },
      { name: "Stainless Upgrade", price: 600,  included: false },
    ],
  },
  flooring: {
    kitchenBath: [
      { name: "Barnwood Hickory",  img: "https://www.deervalleyhb.com/wp-content/uploads/2024/08/flooring-LVT-Barnwood-Hickory-768x509.jpg", price: 0 },
      { name: "Rustic Timber",     img: "https://www.deervalleyhb.com/wp-content/uploads/2025/10/Rustic-Timber-9x24-1-768x509.jpg",          price: 0 },
      { name: "Milan Essential",   img: "https://www.deervalleyhb.com/wp-content/uploads/2025/10/Milan-Essential-Elements-9x24-1-768x509.jpg", price: 0 },
      { name: "Blooming Orchard",  img: "https://www.deervalleyhb.com/wp-content/uploads/2025/10/Blooming-Orchard-768x509.jpg",              price: 0 },
      { name: "Early Morning",     img: "https://www.deervalleyhb.com/wp-content/uploads/2025/10/Early-Morning-768x509.jpg",                price: 0 },
      { name: "Cabin Wood",        img: "https://www.deervalleyhb.com/wp-content/uploads/2025/10/Cabin-Wood-768x509.jpg",                   price: 0 },
      { name: "Arbor Cove",        img: "https://www.deervalleyhb.com/wp-content/uploads/2025/10/Arbor-Cove-768x509.jpg",                   price: 0 },
    ],
    bedroomLiving: [
      { name: "Carpet — Revive",   img: "https://www.deervalleyhb.com/wp-content/uploads/2025/05/Mohawk-Revive-.jpg",  price: 0 },
      { name: "LVP — Chestnut",    img: "https://www.deervalleyhb.com/wp-content/uploads/2025/12/Chestnut-768x512.jpg", price: 0 },
      { name: "LVP — Siena",       img: "https://www.deervalleyhb.com/wp-content/uploads/2025/12/Siena--768x512.jpg",   price: 0 },
    ],
  },
  interior: {
    wallColor: [
      { name: "Sea Salt",       img: "https://www.deervalleyhb.com/wp-content/uploads/2025/10/SW-6204-Sea-Salt-.jpg",       price: 0 },
      { name: "Pearly White",   img: "https://www.deervalleyhb.com/wp-content/uploads/2025/10/SW-7009-Pearly-White-.jpg",   price: 0 },
      { name: "Agreeable Gray", img: "https://www.deervalleyhb.com/wp-content/uploads/2025/10/SW-7029-Agreeable-Gray.jpg", price: 0 },
      { name: "Moth Wing",      img: "https://www.deervalleyhb.com/wp-content/uploads/2025/10/SW-9174-Moth-Wing-.jpg",     price: 0 },
      { name: "Accessible Beige",img: "https://www.deervalleyhb.com/wp-content/uploads/2025/10/SW-7036-Accessible-Beige-.jpg", price: 0 },
      { name: "Pure White",     img: "https://www.deervalleyhb.com/wp-content/uploads/2025/10/SW-7005-Pure-White.jpg",     price: 0 },
      { name: "Mindful Gray",   img: "https://www.deervalleyhb.com/wp-content/uploads/2025/10/Mindful-Gray.jpg",           price: 0 },
    ],
    trimColor: [
      { name: "Bright White",  color: "#ffffff", price: 0 },
      { name: "Antique Cream", color: "#f5eedd", price: 0 },
    ],
  },
};

// ── Clayton Epic Experience Design Options ───────────────────────────────────
// Source: https://claytonepicexperience.com/decor/?region=2
// Interior is chosen as a complete color package; exterior has 3 siding colors.
const CLAYTON_EPIC_EXPERIENCE_DESIGN_OPTIONS = {
  exterior: {
    sidingColor: [
      { name: "Clay",  color: "#b5997a", price: 0 },
      { name: "Flint", color: "#6b6b6b", price: 0 },
      { name: "White", color: "#f0eeea", price: 0 },
    ],
    roofColor: [
      { name: "Charcoal", color: "#3a3a3a", price: 0 },
    ],
  },
  kitchen: {
    // Each option is a full interior color package — selecting one sets everything below
    cabinetColor: [
      { name: "Cottage Stone",  color: "#e8e0d4", price: 0 },
      { name: "Hearthstone",    color: "#7a6050", price: 0 },
      { name: "Sugi Ban",       color: "#4a3c34", price: 0 },
      { name: "Oakley II",      color: "#b08850", price: 0 },
    ],
    countertop: [
      // Countertop is determined by color package chosen above
      { name: "Coulter Pine",       color: "#c8b090", price: 0 },
      { name: "Calacatta Lincoln",  color: "#e8e4de", price: 0 },
      { name: "Lisola",             color: "#d0c8bc", price: 0 },
    ],
    appliances: [
      { name: "Standard Included", price: 0, included: true },
    ],
  },
  flooring: {
    kitchenBath: [
      { name: "Shaw Driftwood Latte", color: "#c8b898", price: 0 },
    ],
    bedroomLiving: [
      { name: "Shaw Driftwood Latte", color: "#c8b898", price: 0 },
    ],
  },
  interior: {
    wallColor: [
      { name: "Lillian",       color: "#f0ece4", price: 0 },
      { name: "Cottage Stone", color: "#d4c8b8", price: 0 },
      { name: "Charwood",      color: "#6a5c50", price: 0 },
    ],
    trimColor: [
      { name: "Rustic Alder", color: "#c8a878", price: 0 },
      { name: "Oakley",       color: "#b08850", price: 0 },
    ],
  },
};

// ── Clayton Epic Journey Design Options ──────────────────────────────────────
// Source: https://claytonepicjourney.com/decor/?region=2
const CLAYTON_EPIC_JOURNEY_DESIGN_OPTIONS = {
  exterior: {
    sidingColor: [
      { name: "Clay",  color: "#b5997a", price: 0 },
      { name: "Flint", color: "#6b6b6b", price: 0 },
      { name: "White", color: "#f0eeea", price: 0 },
    ],
    roofColor: [
      { name: "Charcoal", color: "#3a3a3a", price: 0 },
    ],
  },
  kitchen: {
    cabinetColor: [
      { name: "Cottage Stone", color: "#e8e0d4", price: 0 },
      { name: "Hearthstone",   color: "#7a6050", price: 0 },
      { name: "Sugi Ban",      color: "#4a3c34", price: 0 },
      { name: "Oakley II",     color: "#b08850", price: 0 },
    ],
    countertop: [
      { name: "Coulter Pine",      color: "#c8b090", price: 0 },
      { name: "Calacatta Lincoln", color: "#e8e4de", price: 0 },
      { name: "Lisola",            color: "#d0c8bc", price: 0 },
    ],
    appliances: [
      { name: "Standard Included", price: 0, included: true },
    ],
  },
  flooring: {
    kitchenBath: [
      { name: "Shaw Driftwood Latte", color: "#c8b898", price: 0 },
    ],
    bedroomLiving: [
      { name: "Shaw Driftwood Latte", color: "#c8b898", price: 0 },
    ],
  },
  interior: {
    wallColor: [
      { name: "Lillian",       color: "#f0ece4", price: 0 },
      { name: "Cottage Stone", color: "#d4c8b8", price: 0 },
      { name: "Charwood",      color: "#6a5c50", price: 0 },
    ],
    trimColor: [
      { name: "Rustic Alder", color: "#c8a878", price: 0 },
      { name: "Oakley",       color: "#b08850", price: 0 },
    ],
  },
};

// ── Clayton MiYO (Bonham) Design Options ─────────────────────────────────────
// Source: https://claytonbuiltmiyo.com/decor/ — Region: Clayton Bonham
const CLAYTON_MIYO_DESIGN_OPTIONS = {
  exterior: {
    sidingColor: [
      // Vinyl
      { name: "Clay",         color: "#b5997a", price: 0 },
      { name: "Flint",        color: "#6b6b6b", price: 0 },
      { name: "Mist",         color: "#a8a09a", price: 0 },
      { name: "Olive",        color: "#8a9068", price: 0 },
      // Smartpanel
      { name: "MIYO Grey",    color: "#9ba0a0", price: 0 },
      { name: "MIYO Cypress", color: "#6b8060", price: 0 },
      { name: "MIYO Mist",    color: "#b8b0a8", price: 0 },
      { name: "MIYO Oyster",  color: "#b0aa98", price: 0 },
    ],
    roofColor: [
      { name: "Charcoal", color: "#3a3a3a", price: 0 },
    ],
  },
  kitchen: {
    cabinetColor: [
      { name: "Alabaster White", color: "#f5f0e8", price: 0 },
      { name: "Emberwood",       color: "#5a3e28", price: 0 },
    ],
    countertop: [
      { name: "White Barn",   color: "#f0ece4", price: 0 },
      { name: "Forged Steel", color: "#4a4848", price: 0 },
    ],
    appliances: [
      { name: "Standard Included", price: 0, included: true },
    ],
  },
  flooring: {
    kitchenBath: [
      { name: "Piedmont", color: "#b8aa90", price: 0 },
    ],
    bedroomLiving: [
      { name: "Piedmont (Linoleum)", color: "#b8aa90", price: 0 },
      { name: "Canyon Cove (Carpet)", color: "#9a9080", price: 0 },
    ],
  },
  interior: {
    wallColor: [
      { name: "First Light",  color: "#e8e4d8", price: 0 },
    ],
    trimColor: [
      { name: "Castle Rock", color: "#9a9898", price: 0 },
    ],
  },
};

// ── Clayton Horizon Design Options ───────────────────────────────────────────
// Source: https://claytonbuilthorizon.com/decor/?region=2 — Region: South Central
// 4 interior packages; exterior: vinyl siding + shutters + shingles
const CLAYTON_HORIZON_DESIGN_OPTIONS = {
  exterior: {
    sidingColor: [
      { name: "Flint",     color: "#6b6b6b", price: 0 },
      { name: "Clay",      color: "#b5997a", price: 0 },
      { name: "White",     color: "#f0eeea", price: 0 },
      { name: "Olive",     color: "#8a9068", price: 0 },
      { name: "Shadow",    color: "#5a5a58", price: 0 },
      { name: "Bayou Blue",color: "#3a4f62", price: 0 },
    ],
    roofColor: [
      { name: "Weathered Wood", color: "#8b7355", price: 0 },
    ],
  },
  kitchen: {
    // Interior color packages — each sets cabinets, countertops, flooring & wall
    cabinetColor: [
      { name: "Clayton Savannah",                color: "#f5f0e8", price: 0 },
      { name: "Hope with Shadow Accent",         color: "#c8a878", price: 0 },
      { name: "Opportunity",                     color: "#c8a060", price: 0 },
      { name: "Opportunity with Shadow Accent",  color: "#9a7848", price: 0 },
    ],
    countertop: [
      { name: "Burnished Iron", color: "#4a4848", price: 0 },
    ],
    appliances: [
      { name: "Standard Included", price: 0, included: true },
    ],
  },
  flooring: {
    kitchenBath: [
      { name: "Aged European Oak Natural", color: "#b8a880", price: 0 },
    ],
    bedroomLiving: [
      { name: "Aged European Oak Natural", color: "#b8a880", price: 0 },
    ],
  },
  interior: {
    wallColor: [
      { name: "First Light", color: "#e8e4d8", price: 0 },
    ],
    trimColor: [
      { name: "Iron Mountain", color: "#7a6a50", price: 0 },
      { name: "Onyx",          color: "#2a2a28", price: 0 },
    ],
  },
};

const LIVE_OAK_DESIGN_OPTIONS = {
  exterior: {
    sidingColor: [
      { name: "Clay",          color: "#9e8870", price: 0 },
      { name: "Country Beige", color: "#d9cba8", price: 0 },
      { name: "Cypress",       color: "#8a9468", price: 0 },
      { name: "Greystone",     color: "#9a948a", price: 0 },
    ],
    roofColor: [
      { name: "Weathered Wood", color: "#8b7355", price: 0 },
    ],
  },
  kitchen: {
    cabinetColor: [
      { name: "Chatham Grey",  color: "#9a9890", price: 0 },
      { name: "Grizzly Oak",   color: "#b8903a", price: 0 },
      { name: "Burnside Cherry", color: "#8a4030", price: 0 },
      { name: "Pinehurst Oak", color: "#c0a060", price: 0 },
      { name: "Lilly White",   color: "#f0ede6", price: 0 },
    ],
    countertop: [
      { name: "Blackened Legno", color: "#3a3028", price: 0 },
      { name: "Calcutta Marble", color: "#e8e4dc", price: 0 },
      { name: "Dulce Vita",      color: "#c8b890", price: 0 },
    ],
    appliances: [
      { name: "Standard Included", price: 0, included: true },
    ],
  },
  flooring: {
    kitchenBath: [
      { name: "Blackened Legno", color: "#3a3028", price: 0 },
      { name: "Calcutta Marble", color: "#e8e4dc", price: 0 },
    ],
    bedroomLiving: [
      { name: "Century",    color: "#a0a0a0", price: 0 },
      { name: "Harrington", color: "#c0a878", price: 0 },
      { name: "Mirage",     color: "#808080", price: 0 },
      { name: "Platinum",   color: "#b0b0b8", price: 0 },
    ],
  },
  interior: {
    wallColor: [
      { name: "Accessible Beige", color: "#c8b89a", price: 0 },
      { name: "Evergreen Fog",    color: "#7a8870", price: 0 },
      { name: "Functional Gray",  color: "#9a9490", price: 0 },
      { name: "Granite Peak",     color: "#5a6070", price: 0 },
      { name: "Pure White",       color: "#f5f4f0", price: 0 },
      { name: "Repose Gray",      color: "#cac8c0", price: 0 },
      { name: "Software",         color: "#888480", price: 0 },
      { name: "Urbane Bronze",    color: "#504840", price: 0 },
      { name: "Woven Wicker",     color: "#c0a878", price: 0 },
    ],
    trimColor: [
      { name: "White",  color: "#f0ede6", price: 0 },
      { name: "Black",  color: "#2a2828", price: 0 },
    ],
  },
};

const HOMES = [
  {
    slug: "elm",
    name: "Elm",
    type: "Single-Wide",
    beds: 2,
    baths: 1,
    sqft: 737,
    price: 62499,
    manufacturer: "TRU Homes",
    status: "available",
    dimensions: "14' x 56'",
    image: "images/homes/elm-kitchen.jpg",
    floorPlan: "images/homes/31bjsunjlg6.jpeg",
    gallery: ["images/homes/elm-kitchen.jpg", "images/homes/elm-livingroom.jpg", "images/homes/elm-living-room-2.jpg", "images/homes/elm-exterior.jpg", "images/homes/elm-bedroom.jpg", "images/homes/elm-bedroom-2.jpg", "images/homes/elm-bathroom.jpg", "images/homes/elm-floorplan.jpg"],
    designOptions: DEFAULT_DESIGN_OPTIONS,
  },
  {
    slug: "dogwood",
    name: "Dogwood",
    type: "Single-Wide",
    beds: 2,
    baths: 2,
    sqft: 790,
    price: 65499,
    manufacturer: "TRU Homes",
    status: "available",
    dimensions: "14' x 60'",
    image: "images/homes/dogwood-kitchen.jpg",
    floorPlan: "images/homes/hlhud009m4m.jpeg",
    gallery: ["images/homes/dogwood-kitchen.jpg", "images/homes/dogwood-living-room.jpg", "images/homes/dogwood-living-room-2.jpg", "images/homes/dogwood-exterior.jpg", "images/homes/dogwood-bedroom.jpg", "images/homes/dogwood-bedroom-2.jpg", "images/homes/dogwood-bathroom.jpg", "images/homes/dogwood-bathroom-2.jpg", "images/homes/dogwood-utility.jpg", "images/homes/dogwood-floorplan.jpg"],
    designOptions: DEFAULT_DESIGN_OPTIONS,
  },
  {
    slug: "spirit",
    name: "Spirit",
    type: "Single-Wide",
    beds: 2,
    baths: 2,
    sqft: 840,
    price: 78499,
    manufacturer: "Clayton",
    line: "Clayton MiYO",
    status: "available",
    dimensions: "14' x 60'",
    image: "images/homes/ip1910dgjga.jpeg",
    floorPlan: "images/homes/wjv7klr70b8.jpeg",
    gallery: ["images/homes/ip1910dgjga.jpeg", "images/homes/28t29qv75fy.jpeg", "images/homes/qbopwc0133i.jpeg", "images/homes/v3yg5lonkyf.jpeg", "images/homes/4peclnaaw0f.jpeg", "images/homes/6ylaq27zqu7.jpeg", "images/homes/lonkevbhku.jpeg", "images/homes/stu84awn86f.jpeg", "images/homes/xek5yn1iuet.jpeg", "images/homes/pa7fl88i0l.jpeg", "images/homes/b2r833qxwoi.jpeg", "images/homes/szjjte7lna.jpeg", "images/homes/izh2nr96y7b.jpeg", "images/homes/2kh0fvr7qla.jpeg", "images/homes/0787fkbzl6mh.jpeg", "images/homes/36qmver4max.jpeg"],
    designOptions: CLAYTON_MIYO_DESIGN_OPTIONS,
  },
  {
    slug: "ember",
    name: "Ember",
    type: "Single-Wide",
    beds: 2,
    baths: 2,
    sqft: 900,
    price: 0,
    manufacturer: "Clayton",
    line: "Clayton Horizon",
    status: "on-order",
    dimensions: "16' x 56'",
    image: "images/homes/2eu7modlnq.jpeg",
    floorPlan: "images/homes/e343iq6a6hu.jpeg",
    gallery: ["images/homes/2eu7modlnq.jpeg", "images/homes/mky2h1u34k.jpeg", "images/homes/qf2dlwhxype.jpeg", "images/homes/di33tlwdbid.jpeg", "images/homes/zlup5fn928s.jpeg", "images/homes/g5bbpm1stdg.jpeg", "images/homes/wa3eqzz7omm.jpeg", "images/homes/vpij5k7rpp.jpeg"],
    designOptions: CLAYTON_HORIZON_DESIGN_OPTIONS,
  },
  {
    slug: "hickory",
    name: "Hickory",
    type: "Single-Wide",
    beds: 3,
    baths: 2,
    sqft: 869,
    price: 67999,
    manufacturer: "TRU Homes",
    status: "available",
    dimensions: "14' x 62'",
    image: "images/homes/hickory-kitchen.jpg",
    floorPlan: "images/homes/0k7k2698s3yb.jpeg",
    gallery: ["images/homes/hickory-kitchen.jpg", "images/homes/hickory-living-room.jpg", "images/homes/hickory-living-room-2.jpg", "images/homes/hickory-exterior.jpg", "images/homes/hickory-bedroom.jpg", "images/homes/hickory-bedroom-2.jpg", "images/homes/hickory-master-bathroom.jpg", "images/homes/hickory-bathroom.jpg", "images/homes/hickory-bathroom-2.jpg", "images/homes/hickory-utility.jpg", "images/homes/hickory-floorplan.jpg"],
    designOptions: DEFAULT_DESIGN_OPTIONS,
  },
  {
    slug: "lewis",
    name: "Lewis",
    type: "Single-Wide",
    beds: 2,
    baths: 2,
    sqft: 825,
    price: 0,
    manufacturer: "Clayton",
    line: "Clayton Epic",
    status: "available",
    dimensions: "14' x 60'",
    image: "images/homes/ea7khnx0zh.jpeg",
    floorPlan: "images/homes/5tip7x75fg.png",
    gallery: ["images/homes/ea7khnx0zh.jpeg", "images/homes/txww4w3dugc.jpeg", "images/homes/2fp6x28p5h.jpeg", "images/homes/7pho8apnvk9.jpeg", "images/homes/qx1iqeerky.jpeg", "images/homes/ty2w4t34x2b.jpeg", "images/homes/6ic2e02otc.jpeg", "images/homes/h197il1w9c8.jpeg", "images/homes/uz0iygs8eks.jpeg", "images/homes/fv2dpkz4bq.jpeg", "images/homes/121rjuhzrbbg.jpeg"],
    designOptions: CLAYTON_EPIC_JOURNEY_DESIGN_OPTIONS,
  },
  {
    slug: "lumen",
    name: "Lumen",
    type: "Single-Wide",
    beds: 3,
    baths: 2,
    sqft: 1080,
    price: 0,
    manufacturer: "Clayton",
    line: "Clayton Horizon",
    status: "available",
    dimensions: "16' x 68'",
    image: "images/homes/frn17leps6g.jpeg",
    floorPlan: "images/homes/ksmraram8ha.jpeg",
    gallery: ["images/homes/frn17leps6g.jpeg", "images/homes/h6d6je28t3.jpeg", "images/homes/dmv0t5pgotp.jpeg", "images/homes/jlxmnn2mz6.jpeg", "images/homes/3yl155gbknl.jpeg", "images/homes/j2zogo7kji.jpeg", "images/homes/kw3mvt2x7r.jpeg", "images/homes/x5xjbvpbne.jpeg"],
    designOptions: CLAYTON_HORIZON_DESIGN_OPTIONS,
  },
  {
    slug: "magnolia",
    name: "Magnolia",
    type: "Single-Wide",
    beds: 3,
    baths: 2,
    sqft: 1001,
    price: 71499,
    manufacturer: "TRU Homes",
    status: "available",
    dimensions: "16' x 64'",
    image: "images/homes/magnolia-kitchen.jpg",
    floorPlan: "images/homes/kd4uc2t93b.jpeg",
    gallery: ["images/homes/magnolia-kitchen.jpg", "images/homes/magnolia-living-room.jpg", "images/homes/magnolia-living-room-2.jpg", "images/homes/magnolia-exterior.jpg", "images/homes/magnolia-master-bed.jpg", "images/homes/magnolia-master-bath.jpg", "images/homes/magnolia-secondary-bath.jpg", "images/homes/magnolia-utility.jpg", "images/homes/magnolia-floorplan.jpg"],
    designOptions: DEFAULT_DESIGN_OPTIONS,
  },
  {
    slug: "beacon",
    name: "Beacon",
    type: "Single-Wide",
    beds: 3,
    baths: 2,
    sqft: 990,
    price: 0,
    manufacturer: "Clayton",
    line: "Clayton Horizon",
    status: "on-lot",
    dimensions: "16' x 62'",
    image: "images/homes/ru33zdeozoi.jpeg",
    floorPlan: "images/homes/qric0nfwajk.jpeg",
    gallery: ["images/homes/ru33zdeozoi.jpeg", "images/homes/zad8flq9y6.jpeg", "images/homes/banbampu09j.jpeg", "images/homes/97k68h2dldh.jpeg", "images/homes/96ltpwasrjb.jpeg", "images/homes/e8g9jleokc.jpeg", "images/homes/jm0kc8iziwb.jpeg", "images/homes/d93qqflih7.jpeg", "images/homes/54ywd3n77i6.jpeg", "images/homes/tk4csclycvo.jpeg"],
    designOptions: CLAYTON_HORIZON_DESIGN_OPTIONS,
  },
  {
    slug: "intuition",
    name: "Intuition",
    type: "Single-Wide",
    beds: 3,
    baths: 2,
    sqft: 990,
    price: 84999,
    manufacturer: "Clayton",
    line: "Clayton MiYO",
    status: "available",
    dimensions: "16' x 62'",
    image: "images/homes/intuition-intuition1-9.jpg",
    floorPlan: "images/homes/ubrgt7exb8q.jpeg",
    gallery: ["images/homes/intuition-intuition1-9.jpg", "images/homes/intuition-intuition2-10.jpg", "images/homes/intuition-intuition3-11.jpg", "images/homes/intuition-intuition4-12.jpg", "images/homes/intuition-intuition5.jpg", "images/homes/intuition-intuition6-2.jpg", "images/homes/intuition-intuition7-3.jpg", "images/homes/intuition-intuition8-4.jpg", "images/homes/intuition-intuition9-5.jpg", "images/homes/intuition-intuition10-6.jpg", "images/homes/intuition-intuition11-7.jpg", "images/homes/intuition-intuition12-8.jpg"],
    designOptions: CLAYTON_MIYO_DESIGN_OPTIONS,
  },
  {
    slug: "cypress",
    name: "Cypress",
    type: "Single-Wide",
    beds: 4,
    baths: 2,
    sqft: 1064,
    price: 71999,
    manufacturer: "TRU Homes",
    status: "available",
    dimensions: "14' x 76'",
    image: "images/homes/cypress-kitchen.jpg",
    floorPlan: "images/homes/qjd0su5atvo.jpeg",
    gallery: ["images/homes/cypress-kitchen.jpg", "images/homes/cypress-livingroom.jpg", "images/homes/cypress-living-room-2.jpg", "images/homes/cypress-exterior.jpg", "images/homes/cypress-bedroom.jpg", "images/homes/cypress-bathroom.jpg", "images/homes/cypress-bathroom-2.jpg", "images/homes/cypress-secondary-bath.jpg", "images/homes/cypress-utility.jpg", "images/homes/cypress-floorplan.jpg"],
    designOptions: DEFAULT_DESIGN_OPTIONS,
  },
  {
    slug: "tide",
    name: "Tide",
    type: "Single-Wide",
    beds: 2,
    baths: 2,
    sqft: 1020,
    price: 0,
    manufacturer: "Clayton",
    line: "Clayton Epic",
    status: "available",
    dimensions: "16' x 64'",
    image: "images/homes/j86yff55gu.jpeg",
    floorPlan: "images/homes/ghnyldwspuq.jpeg",
    gallery: ["images/homes/bj3vhcbuq1d.jpeg", "images/homes/i9r5712z0hf.jpeg", "images/homes/kcj25q2mgbd.jpeg", "images/homes/8r3mmmx6g7h.jpeg", "images/homes/j86yff55gu.jpeg", "images/homes/87lveotpa2o.jpeg", "images/homes/c1cnf7vh97w.jpeg", "images/homes/450ewje3f7q.jpeg", "images/homes/5s7sfk6iy8k.jpeg", "images/homes/dli9e5e1n05.jpeg", "images/homes/f8to9f5jiyh.jpeg", "images/homes/klkppemwk7c.jpeg", "images/homes/ydqsm720fn.jpeg", "images/homes/evcint33a4r.jpeg", "images/homes/kmdtrxlptuo.jpeg", "images/homes/7b8jc68yb5h.jpeg"],
    designOptions: CLAYTON_EPIC_EXPERIENCE_DESIGN_OPTIONS,
  },
  {
    slug: "northstar",
    name: "Northstar",
    type: "Single-Wide",
    beds: 3,
    baths: 2,
    sqft: 1140,
    price: 0,
    manufacturer: "Clayton",
    line: "Clayton Horizon",
    status: "available",
    dimensions: "16' x 76'",
    image: "images/homes/0wp4ye11jvb.jpeg",
    floorPlan: "images/homes/ovafysop52q.jpeg",
    gallery: ["images/homes/ovafysop52q.jpeg", "images/homes/0wp4ye11jvb.jpeg", "images/homes/j2wsik0jmxl.jpeg", "images/homes/zmts8qfnk6a.jpeg", "images/homes/d3shgmmkpmr.jpeg", "images/homes/bkz1ovpo94l.jpeg", "images/homes/sm7s1rvuen.jpeg"],
    designOptions: CLAYTON_HORIZON_DESIGN_OPTIONS,
  },
  {
    slug: "clark",
    name: "Clark",
    type: "Single-Wide",
    beds: 3,
    baths: 2,
    sqft: 990,
    price: 0,
    manufacturer: "Clayton",
    line: "Clayton Epic",
    status: "available",
    dimensions: "16' x 62'",
    image: "images/homes/53m6xf2cyp9.jpeg",
    floorPlan: "images/homes/0j7p84bwgbps.png",
    gallery: ["images/homes/0j7p84bwgbps.png", "images/homes/53m6xf2cyp9.jpeg", "images/homes/7fimmh41ea.png", "images/homes/9gwzm0lelv4.png", "images/homes/clm65jhblus.png", "images/homes/dj5rd96vpsv.jpeg", "images/homes/ijpzg13b43p.png", "images/homes/sq0sui75vo.png", "images/homes/v5glgg1jkv.png", "images/homes/vs3sqgx3un8.png", "images/homes/w1yy4v4vil.jpeg", "images/homes/xg5r1m0y0n.png"],
    designOptions: CLAYTON_EPIC_JOURNEY_DESIGN_OPTIONS,
  },
  {
    slug: "aspen",
    name: "Aspen",
    type: "Single-Wide",
    beds: 3,
    baths: 2,
    sqft: 1140,
    price: 0,
    manufacturer: "TRU Homes",
    status: "available",
    dimensions: "16' x 72'",
    image: "images/homes/aspen-kitchen.jpg",
    floorPlan: "images/homes/1rzes05fks7i.jpeg",
    gallery: ["images/homes/aspen-kitchen.jpg", "images/homes/aspen-livingroom.jpg", "images/homes/aspen-living-room-2.jpg", "images/homes/aspen-exterior.jpg", "images/homes/aspen-flex.jpg", "images/homes/aspen-bedroom.jpg", "images/homes/aspen-master-bath.jpg", "images/homes/aspen-master-bath-2.jpg", "images/homes/aspen-secondary-bath.jpg", "images/homes/aspen-utility.jpg", "images/homes/aspen-floorplan.jpg"],
    designOptions: DEFAULT_DESIGN_OPTIONS,
  },
  {
    slug: "voyage",
    name: "Voyage",
    type: "Single-Wide",
    beds: 3,
    baths: 2,
    sqft: 1140,
    price: 0,
    manufacturer: "Clayton",
    line: "Clayton Epic",
    status: "available",
    dimensions: "16' x 72'",
    image: "images/homes/voyage-voyage1.jpg",
    floorPlan: "images/homes/iyqluc6fn2.jpeg",
    gallery: ["images/homes/voyage-voyage1.jpg", "images/homes/voyage-voyage2.jpg", "images/homes/voyage-voyage3.jpg", "images/homes/voyage-voyage4.jpg", "images/homes/voyage-voyage5.jpg", "images/homes/voyage-voyage6.jpg", "images/homes/voyage-voyage7.jpg", "images/homes/voyage-voyage8.jpg", "images/homes/voyage-voyage9.jpg"],
    designOptions: CLAYTON_EPIC_EXPERIENCE_DESIGN_OPTIONS,
  },
  {
    slug: "magellan",
    name: "Magellan",
    type: "Single-Wide",
    beds: 3,
    baths: 2,
    sqft: 1080,
    price: 87999,
    manufacturer: "Clayton",
    line: "Clayton Epic",
    status: "on-order",
    dimensions: "16' x 68'",
    image: "images/homes/magellan-magellan8.jpg",
    floorPlan: "images/homes/h6rg0tff01i.png",
    gallery: ["images/homes/magellan-magellan8.jpg", "images/homes/magellan-magellan1.jpg", "images/homes/magellan-magellan2.jpg", "images/homes/magellan-magellan3.jpg", "images/homes/magellan-magellan4.jpg", "images/homes/magellan-magellan5.jpg", "images/homes/magellan-magellan6.jpg", "images/homes/magellan-magellan7.jpg", "images/homes/magellan-magellan9.jpg", "images/homes/magellan-magellan10.jpg", "images/homes/magellan-magellan11.jpg", "images/homes/magellan-magellanfloorplan.jpg", "images/homes/magellan-magellan12.jpg"],
    designOptions: CLAYTON_EPIC_JOURNEY_DESIGN_OPTIONS,
  },
  {
    slug: "mariner",
    name: "Mariner",
    type: "Single-Wide",
    beds: 3,
    baths: 2,
    sqft: 1140,
    price: 89499,
    manufacturer: "Clayton",
    line: "Clayton Epic",
    status: "on-lot",
    dimensions: "16' x 72'",
    image: "images/homes/3px156j2fn5.jpeg",
    floorPlan: "images/homes/ud9ejklkc8.jpeg",
    gallery: ["images/homes/3px156j2fn5.jpeg", "images/homes/omf0njl5og.jpeg", "images/homes/dz3lxwkrls.jpeg", "images/homes/x6lg06uwkwp.jpeg", "images/homes/l7trxjbvrg.jpeg", "images/homes/m1z5ydi4wd.jpeg", "images/homes/ra05drtg5y8.jpeg", "images/homes/g9l3ejjxw2r.jpeg", "images/homes/hiy4mwo6x94.jpeg", "images/homes/w1sfb8g99d.jpeg", "images/homes/g0ez5egg3ul.jpeg"],
    designOptions: CLAYTON_EPIC_EXPERIENCE_DESIGN_OPTIONS,
  },
  {
    slug: "essence",
    name: "Essence",
    type: "Single-Wide",
    beds: 3,
    baths: 2,
    sqft: 1140,
    price: 88499,
    manufacturer: "Clayton",
    line: "Clayton MiYO",
    status: "available",
    dimensions: "16' x 72'",
    image: "images/homes/vo7o89zs0n.jpeg",
    floorPlan: "images/homes/1rgywf0knkk.jpeg",
    gallery: ["images/homes/36wfkngchtf.jpeg", "images/homes/vpi4riyhfxs.jpeg", "images/homes/1rgywf0knkk.jpeg", "images/homes/wyykkspav3.jpeg", "images/homes/vo7o89zs0n.jpeg", "images/homes/farxrhjj3qo.jpeg", "images/homes/6pklyl1ztn.jpeg", "images/homes/pu4xq6neb9.jpeg", "images/homes/x6hlujftfff.jpeg", "images/homes/hl8qjcd5h0b.jpeg", "images/homes/ziuutfh7ipd.jpeg", "images/homes/mdim9risim.jpeg", "images/homes/105q4st5azl.jpeg", "images/homes/dyqj27g68st.jpeg", "images/homes/ctospo8qaj.jpeg", "images/homes/9fln27mvdo8.jpeg", "images/homes/hzq122wp2cp.jpeg", "images/homes/bykfdka2l1w.jpeg", "images/homes/h6zn72aeh2o.jpeg"],
    designOptions: CLAYTON_MIYO_DESIGN_OPTIONS,
  },
  {
    slug: "desire",
    name: "Desire",
    type: "Single-Wide",
    beds: 3,
    baths: 2,
    sqft: 1140,
    price: 88999,
    manufacturer: "Clayton",
    line: "Clayton MiYO",
    status: "available",
    dimensions: "16' x 72'",
    image: "images/homes/lqej26cwxp.jpeg",
    floorPlan: "images/homes/dfxfcuned6.jpeg",
    gallery: ["images/homes/f88gtlri0xe.jpeg", "images/homes/lbzkafxhjoi.jpeg", "images/homes/e348lcvebvn.jpeg", "images/homes/017z6c2edckh.jpeg", "images/homes/lqej26cwxp.jpeg", "images/homes/6eisi4rutm2.jpeg", "images/homes/s213vmminsq.jpeg", "images/homes/3cpu1yvq7jq.jpeg", "images/homes/p56jlum0pvh.jpeg", "images/homes/en1bcef8tye.jpeg", "images/homes/xjj2irobfys.jpeg", "images/homes/ytreqw6gj4e.jpeg", "images/homes/bczrp138v2l.jpeg", "images/homes/ne7mhhofum.jpeg"],
    designOptions: CLAYTON_MIYO_DESIGN_OPTIONS,
  },
  {
    slug: "birch",
    name: "Birch",
    type: "Single-Wide",
    beds: 3,
    baths: 2,
    sqft: 1140,
    price: 77499,
    manufacturer: "TRU Homes",
    status: "available",
    dimensions: "16' x 72'",
    image: "images/homes/birch-kitchen.jpg",
    floorPlan: "images/homes/3mwwjys0th7.jpeg",
    gallery: ["images/homes/birch-kitchen.jpg", "images/homes/birch-kitchen-2.jpg", "images/homes/birch-living-room.jpg", "images/homes/birch-exterior.jpg", "images/homes/birch-bedroom.jpg", "images/homes/birch-bedroom-2.jpg", "images/homes/birch-bedroom-3.jpg", "images/homes/birch-bedroom-4.jpg", "images/homes/birch-master-bath.jpg", "images/homes/birch-master-bath-2.jpg", "images/homes/birch-secondary-bath.jpg", "images/homes/birch-floorplan.jpg"],
    designOptions: DEFAULT_DESIGN_OPTIONS,
  },
  {
    slug: "sensation",
    name: "Sensation",
    type: "Single-Wide",
    beds: 3,
    baths: 2,
    sqft: 1330,
    price: 97499,
    manufacturer: "Clayton",
    line: "Clayton MiYO",
    status: "available",
    dimensions: "16' x 84'",
    image: "images/homes/v10p9q1jnv.jpeg",
    floorPlan: "images/homes/wnmfgsvvc7.jpeg",
    gallery: ["images/homes/xwlf66ml1ut.jpeg", "images/homes/cg8auicbxud.jpeg", "images/homes/xstjqc7iwp.jpeg", "images/homes/v10p9q1jnv.jpeg", "images/homes/p35hor67yk.jpeg", "images/homes/8rnxiykt1xr.jpeg", "images/homes/rqs2bf6ouzm.jpeg", "images/homes/wppdbgvt3n.jpeg", "images/homes/lnkenlsu5a.jpeg", "images/homes/wnmfgsvvc7.jpeg"],
    designOptions: CLAYTON_MIYO_DESIGN_OPTIONS,
  },
  {
    slug: "grand",
    name: "Grand",
    type: "Single-Wide",
    beds: 3,
    baths: 2,
    sqft: 1400,
    price: 0,
    manufacturer: "Clayton",
    line: "Clayton MiYO",
    status: "available",
    dimensions: "16' x 88'",
    image: "images/homes/w7qv1mqo3a.jpeg",
    floorPlan: "images/homes/q6chk5tjql.jpeg",
    gallery: ["images/homes/dkplw3sames.jpeg", "images/homes/tl3bmvv9za.jpeg", "images/homes/04al7s27rnjl.jpeg", "images/homes/x3dlikljda.jpeg", "images/homes/w7qv1mqo3a.jpeg", "images/homes/89hnovz9tnh.jpeg", "images/homes/cs5lxd8a2av.jpeg", "images/homes/4e1w4nhrile.jpeg", "images/homes/rca422c5ynd.jpeg", "images/homes/kz7wdrgu0m.jpeg", "images/homes/78uorvbagcg.jpeg", "images/homes/ljtevsz235.jpeg", "images/homes/49q7um07ix8.jpeg", "images/homes/afr8ex0w0of.jpeg", "images/homes/zvqu44u56wg.jpeg", "images/homes/0txsp82fyrpo.jpeg", "images/homes/vegf1rkq7lo.jpeg", "images/homes/nn49ldh1afb.jpeg"],
    designOptions: CLAYTON_MIYO_DESIGN_OPTIONS,
  },
  {
    slug: "colossal",
    name: "Colossal",
    type: "Single-Wide",
    beds: 3,
    baths: 2,
    sqft: 1400,
    price: 99499,
    manufacturer: "Clayton",
    line: "Clayton MiYO",
    status: "on-order",
    dimensions: "16' x 88'",
    image: "images/homes/colossal-colossal1.jpg",
    floorPlan: "images/homes/vsizi68u0wa.jpeg",
    gallery: ["images/homes/colossal-colossal1.jpg", "images/homes/colossal-colossal2.jpg", "images/homes/colossal-colossal3.jpg", "images/homes/colossal-colossal5.jpg", "images/homes/colossal-colossal6.jpg", "images/homes/colossal-colossal7.jpg", "images/homes/colossal-colossal8.jpg", "images/homes/colossal-colossal9.jpg", "images/homes/colossal-colossal10.jpg", "images/homes/colossal-colossal11.jpg", "images/homes/colossal-colossal4.jpg"],
    designOptions: CLAYTON_MIYO_DESIGN_OPTIONS,
  },
  {
    slug: "the-simon",
    name: "The Simon",
    type: "Single-Wide",
    beds: 2,
    baths: 2,
    sqft: 1056,
    price: 94999,
    manufacturer: "BG Manufacturing",
    status: "available",
    dimensions: "16' x 66'",
    image: "images/homes/54hcganlhos.jpeg",
    floorPlan: "images/homes/amdte2vaw4w.jpeg",
    gallery: ["images/homes/lil5gduwy8.jpeg", "images/homes/quw1td6e6i.jpeg", "images/homes/zf9u9wpmced.jpeg", "images/homes/67ti1mwr0y.jpeg", "images/homes/54hcganlhos.jpeg", "images/homes/vsx85dt39pd.jpeg", "images/homes/yor6z9cxucs.jpeg", "images/homes/17uvqadas9a.jpeg", "images/homes/jps2legi5l8.jpeg", "images/homes/wzur7fnpm6.jpeg", "images/homes/s2abw2n8pa.jpeg", "images/homes/7sny9z0as9l.jpeg", "images/homes/2uf1op47ta6.jpeg", "images/homes/oencuv9begi.jpeg", "images/homes/2sqveaiuvpu.jpeg", "images/homes/ojaryfd1pio.jpeg", "images/homes/rl6rgrwh5wl.jpeg"],
    designOptions: DEFAULT_DESIGN_OPTIONS,
  },
  {
    slug: "the-matthew",
    name: "The Matthew",
    type: "Single-Wide",
    beds: 3,
    baths: 2,
    sqft: 1216,
    price: 95999,
    manufacturer: "BG Manufacturing",
    status: "available",
    dimensions: "16' x 76'",
    image: "images/homes/kd9o3uhpqxk.jpeg",
    floorPlan: "images/homes/o1urefi42m7.jpeg",
    gallery: ["images/homes/kd9o3uhpqxk.jpeg", "images/homes/mf8hu2j2jrc.jpeg", "images/homes/a7fjgrfbq1w.jpeg", "images/homes/a1v4sp3iql.jpeg", "images/homes/o79d1x0s3ho.jpeg", "images/homes/kyl9yofz3ck.png"],
    designOptions: DEFAULT_DESIGN_OPTIONS,
  },
  {
    slug: "the-andrew-80",
    name: "The Andrew 80",
    type: "Single-Wide",
    beds: 4,
    baths: 2,
    sqft: 1200,
    price: 98499,
    manufacturer: "BG Manufacturing",
    status: "available",
    dimensions: "16' x 76'",
    image: "images/homes/84zk2rxh49w.jpeg",
    floorPlan: "images/homes/4luo8xn79lh.jpeg",
    gallery: ["images/homes/kdbs0qevbd.jpeg", "images/homes/laxdjau8cpc.jpeg", "images/homes/nauusmr63f.jpeg", "images/homes/84zk2rxh49w.jpeg", "images/homes/we3lqoyabks.jpeg", "images/homes/59nf35t0xgu.jpeg", "images/homes/wd3a9xkk0bh.jpeg", "images/homes/24ittcujjo6.jpeg"],
    designOptions: DEFAULT_DESIGN_OPTIONS,
  },
  {
    slug: "the-nathaniel",
    name: "The Nathaniel",
    type: "Single-Wide",
    beds: 3,
    baths: 2,
    sqft: 1200,
    price: 102499,
    manufacturer: "BG Manufacturing",
    status: "on-lot",
    dimensions: "16' x 76'",
    image: "images/homes/w9g8i95qu7f.jpeg",
    floorPlan: "images/homes/ilby5hjbxt.jpeg",
    gallery: ["images/homes/d4lrh22x6op.jpeg", "images/homes/zbw9i837tfc.jpeg", "images/homes/3gokln0cd3v.jpeg", "images/homes/3nzg4cf7pxu.jpeg", "images/homes/w9g8i95qu7f.jpeg", "images/homes/chfqaadkbjv.jpeg", "images/homes/ttr8mfmi1y9.jpeg"],
    designOptions: DEFAULT_DESIGN_OPTIONS,
  },
  {
    slug: "the-bartholomew",
    name: "The Bartholomew",
    type: "Single-Wide",
    beds: 3,
    baths: 2,
    sqft: 1200,
    price: 108499,
    manufacturer: "BG Manufacturing",
    status: "available",
    dimensions: "16' x 76'",
    image: "images/homes/bartholomew-kitchen-2.jpg",
    floorPlan: "images/homes/lsz06us5owp.jpeg",
    gallery: ["images/homes/bartholomew-kitchen-2.jpg", "images/homes/bartholomew-kitchen-4.jpg", "images/homes/bartholomew-kitchen-3-2.jpg", "images/homes/bartholomew-kitchen-4-3.jpg", "images/homes/bartholomew-livingroom-7.jpg", "images/homes/bartholomew-livingroom-2-5.jpg", "images/homes/bartholomew-livingroom-3-6.jpg", "images/homes/bartholomew-dining-room-12.jpg", "images/homes/bartholomew-master-bedroom-10.jpg", "images/homes/bartholomew-master-bathroom-9.jpg", "images/homes/bartholomew-master-bathroom-2-8.jpg", "images/homes/bartholomew-secondary-bath-11.jpg", "images/homes/bartholomew-floorplan-13.jpg"],
    designOptions: DEFAULT_DESIGN_OPTIONS,
  },
  // ── DOUBLE-WIDES ──────────────────────────────────────────────────────────
  {
    slug: "hudson",
    name: "Hudson",
    type: "Double-Wide",
    beds: 3,
    baths: 2,
    sqft: 1140,
    price: 94499,
    manufacturer: "Clayton",
    line: "Clayton Epic",
    status: "available",
    dimensions: "28' x 44'",
    image: "images/homes/eaqz2dfmvg.png",
    floorPlan: "images/homes/zeeovn7caa.png",
    gallery: ["images/homes/nzjvsmrmg9l.png", "images/homes/5klsh218re.png", "images/homes/xqxne69mzo.png", "images/homes/eaqz2dfmvg.png", "images/homes/ngg42gn38w.png", "images/homes/keoj63a4cpl.png", "images/homes/hr1jrjjt58a.png", "images/homes/rji79wrx37r.png", "images/homes/u6kdpptgyz.png", "images/homes/yp0jwdao07g.png", "images/homes/zeeovn7caa.png"],
    designOptions: CLAYTON_EPIC_JOURNEY_DESIGN_OPTIONS,
  },
  {
    slug: "vista",
    name: "Vista",
    type: "Double-Wide",
    beds: 3,
    baths: 2,
    sqft: 1264,
    price: 0,
    manufacturer: "Clayton",
    line: "Clayton Horizon",
    status: "available",
    dimensions: "28' x 48'",
    image: "images/homes/bld770v5ylb.jpeg",
    floorPlan: "images/homes/hl5qbu9y21h.jpeg",
    gallery: ["images/homes/bld770v5ylb.jpeg", "images/homes/tnlv5eh7ew.jpeg", "images/homes/d6b32ygab6n.jpeg", "images/homes/mrpm15gufs.jpeg", "images/homes/dy5yyd7qzjd.jpeg", "images/homes/5pf1nc5pax8.jpeg", "images/homes/mk5yckvnxb.jpeg", "images/homes/9kljvb7flvd.jpeg", "images/homes/h8fxfxjwaen.jpeg", "images/homes/orzqyo1x3k.jpeg"],
    designOptions: CLAYTON_HORIZON_DESIGN_OPTIONS,
  },
  {
    slug: "aspire",
    name: "Aspire",
    type: "Double-Wide",
    beds: 3,
    baths: 2,
    sqft: 1475,
    price: 0,
    manufacturer: "Clayton",
    line: "Clayton Horizon",
    status: "available",
    dimensions: "28' x 52'",
    image: "images/homes/pxl0kx4fzp.jpeg",
    floorPlan: "images/homes/m1h9x3crx5f.jpeg",
    gallery: ["images/homes/mmqxumb4cdn.jpeg", "images/homes/z9gprm9ciyi.jpeg", "images/homes/xp3rkkeq9bm.jpeg", "images/homes/pxl0kx4fzp.jpeg", "images/homes/ufaciwasok.jpeg", "images/homes/um16m8mkdvf.jpeg", "images/homes/ejg982hiap5.jpeg"],
    designOptions: CLAYTON_HORIZON_DESIGN_OPTIONS,
  },
  {
    slug: "maple",
    name: "Maple",
    type: "Double-Wide",
    beds: 3,
    baths: 2,
    sqft: 1264,
    price: 104999,
    manufacturer: "TRU Homes",
    status: "available",
    dimensions: "28' x 48'",
    image: "images/homes/maple-kitchen.jpg",
    floorPlan: "images/homes/vo8pvtnc13.jpeg",
    gallery: ["images/homes/maple-kitchen.jpg", "images/homes/maple-living-room.jpg", "images/homes/maple-exterior.jpg", "images/homes/maple-dining-room.jpg", "images/homes/maple-bedroom.jpg", "images/homes/maple-bedroom-2.jpg", "images/homes/maple-bedroom-3.jpg", "images/homes/maple-bathroom.jpg", "images/homes/maple-secondary-bath.jpg", "images/homes/maple-utility.jpg", "images/homes/maple-floorplan.jpg"],
    designOptions: DEFAULT_DESIGN_OPTIONS,
  },
  {
    slug: "desoto",
    name: "Desoto",
    type: "Double-Wide",
    beds: 3,
    baths: 2,
    sqft: 1264,
    price: 117499,
    manufacturer: "Clayton",
    line: "Clayton Epic",
    status: "available",
    dimensions: "28' x 48'",
    image: "images/homes/1zxaao177e6.jpeg",
    floorPlan: "images/homes/cgvh799l7p9.png",
    gallery: ["images/homes/1zxaao177e6.jpeg", "images/homes/3gmnmj48k03.jpeg", "images/homes/56hv9u1n85t.jpeg", "images/homes/arpjhyayr3d.jpeg", "images/homes/c4kp6a185y.jpeg", "images/homes/dj4rermqk6o.jpeg", "images/homes/ergon7wlxfk.jpeg", "images/homes/icssn3cgm3.jpeg", "images/homes/jnb9bprvoid.jpeg", "images/homes/k4fymybet6.jpeg", "images/homes/kh17hcvk0ig.jpeg", "images/homes/lawrldi7q5e.jpeg", "images/homes/txfw5v5bruj.jpeg", "images/homes/udoa11l2xdc.jpeg", "images/homes/vdmhcw50wf.jpeg", "images/homes/x4jrnf9dwp.jpeg", "images/homes/xzqhxd9f0sa.jpeg", "images/homes/y5cu65h2su.jpeg", "images/homes/ybmytyby1h.jpeg", "images/homes/zjf7uj831u.jpeg"],
    designOptions: CLAYTON_EPIC_JOURNEY_DESIGN_OPTIONS,
  },
  {
    slug: "cook",
    name: "Cook",
    type: "Double-Wide",
    beds: 3,
    baths: 2,
    sqft: 1369,
    price: 119999,
    manufacturer: "Clayton",
    line: "Clayton Epic",
    status: "on-order",
    dimensions: "28' x 52'",
    image: "images/homes/cook-cook6.jpg",
    floorPlan: "",
    gallery: ["images/homes/cook-cook6.jpg", "images/homes/cook-cook1.jpg", "images/homes/cook-cook2.jpg", "images/homes/cook-cook4.jpg", "images/homes/cook-cook5.jpg", "images/homes/cook-cook7.jpg", "images/homes/cook-cook8.jpg", "images/homes/cook-cook9.jpg", "images/homes/cook-cook10.jpg", "images/homes/cook-cook11.jpg", "images/homes/cook-cook12.jpg", "images/homes/cook-cook13.jpg", "images/homes/cook-cook14.jpg", "images/homes/cook-cook15.jpg", "images/homes/cook-cook3.jpg"],
    designOptions: CLAYTON_EPIC_JOURNEY_DESIGN_OPTIONS,
  },
  {
    slug: "boone",
    name: "Boone",
    type: "Double-Wide",
    beds: 4,
    baths: 2,
    sqft: 1475,
    price: 121999,
    manufacturer: "Clayton",
    line: "Clayton Epic",
    status: "available",
    dimensions: "28' x 52'",
    image: "images/homes/h22tmo9rzvo.jpeg",
    floorPlan: "images/homes/2o1t4n2nwyo.png",
    gallery: ["images/homes/thzazxim94.jpeg", "images/homes/q2qpqjoedj.jpeg", "images/homes/r5v2ej7cai.jpeg", "images/homes/197hh3f94li.jpeg", "images/homes/h22tmo9rzvo.jpeg", "images/homes/jxaflc2bj7l.jpeg", "images/homes/kh17hcvk0ig.jpeg", "images/homes/i39028o9fd9.jpeg", "images/homes/zxjyis9dbxf.jpeg", "images/homes/5wnvx64mqnd.jpeg", "images/homes/0nl38x33n6l.jpeg", "images/homes/7v139et9sm3.jpeg", "images/homes/9x68k229sh9.jpeg", "images/homes/c07aatzfby.jpeg", "images/homes/q6h4d6e3tal.jpeg", "images/homes/grrv1arhg4u.jpeg", "images/homes/2vzg96n3ws4.jpeg"],
    designOptions: CLAYTON_EPIC_JOURNEY_DESIGN_OPTIONS,
  },
  {
    slug: "explorer",
    name: "Explorer",
    type: "Double-Wide",
    beds: 3,
    baths: 2,
    sqft: 1475,
    price: 0,
    manufacturer: "Clayton",
    line: "Clayton Epic",
    status: "available",
    dimensions: "28' x 52'",
    image: "images/homes/f8f6t9ii46.jpeg",
    floorPlan: "images/homes/q6h4d6e3tal.jpeg",
    gallery: ["images/homes/197hh3f94li.jpeg", "images/homes/plsbebfquz.jpeg", "images/homes/692wx6k4lix.jpeg", "images/homes/lfq0908iri.jpeg", "images/homes/f8f6t9ii46.jpeg", "images/homes/ixvi7epnv7d.jpeg", "images/homes/7jhs0w02t73.jpeg", "images/homes/j9q8adih7h.jpeg", "images/homes/45p7chjfy15.jpeg", "images/homes/tj6nxy7n3u.jpeg", "images/homes/lalw8qand6.jpeg", "images/homes/6836u75l1c4.jpeg", "images/homes/rclppti152p.jpeg", "images/homes/8ay9cp3duxn.jpeg", "images/homes/nln30o5fbka.jpeg", "images/homes/nch670tx5d.jpeg"],
    designOptions: CLAYTON_EPIC_EXPERIENCE_DESIGN_OPTIONS,
  },
  {
    slug: "haven",
    name: "Haven",
    type: "Double-Wide",
    beds: 3,
    baths: 2,
    sqft: 1580,
    price: 0,
    manufacturer: "Clayton",
    line: "Clayton Horizon",
    status: "available",
    dimensions: "28' x 56'",
    image: "images/homes/haven-kitchen.jpg",
    floorPlan: "images/homes/x560x9ri3ja.jpeg",
    gallery: ["images/homes/haven-kitchen.jpg", "images/homes/haven-living-room.jpg", "images/homes/haven-living-room2.jpg", "images/homes/haven-living-room3.jpg", "images/homes/haven-exterior.jpg", "images/homes/haven-dining-room.jpg", "images/homes/haven-den.jpg", "images/homes/haven-primary-bed.jpg", "images/homes/haven-master-bath.jpg", "images/homes/haven-secondary-bed.jpg", "images/homes/haven-secondary-bath.jpg", "images/homes/haven-laundry.jpg"],
    designOptions: CLAYTON_HORIZON_DESIGN_OPTIONS,
  },
  {
    slug: "spruce",
    name: "Spruce",
    type: "Double-Wide",
    beds: 3,
    baths: 2,
    sqft: 1475,
    price: 108499,
    manufacturer: "TRU Homes",
    status: "available",
    dimensions: "28' x 52'",
    image: "images/homes/spruce-kitchen.jpg",
    floorPlan: "images/homes/amc38i2ev8.jpeg",
    gallery: ["images/homes/spruce-kitchen.jpg", "images/homes/spruce-kitchen-2.jpg", "images/homes/spruce-living-room.jpg", "images/homes/spruce-living-room-2.jpg", "images/homes/spruce-dining-room.jpg", "images/homes/spruce-master-bed.jpg", "images/homes/spruce-master-bath.jpg", "images/homes/spruce-secondary-bath.jpg", "images/homes/spruce-utility.jpg", "images/homes/spruce-floorplan.jpg"],
    designOptions: DEFAULT_DESIGN_OPTIONS,
  },
  {
    slug: "cedar",
    name: "Cedar",
    type: "Double-Wide",
    beds: 3,
    baths: 2,
    sqft: 1475,
    price: 108999,
    manufacturer: "TRU Homes",
    status: "available",
    dimensions: "28' x 52'",
    image: "images/homes/cedar-kitchen.jpg",
    floorPlan: "images/homes/yvz4fiuzwgm.jpeg",
    gallery: ["images/homes/cedar-kitchen.jpg", "images/homes/cedar-living-room.jpg", "images/homes/cedar-exterior.jpg", "images/homes/cedar-dining-room.jpg", "images/homes/cedar-den.jpg", "images/homes/cedar-bedroom.jpg", "images/homes/cedar-master-bath.jpg", "images/homes/cedar-secondary-bath.jpg", "images/homes/cedar-utility.jpg", "images/homes/cedar-floorplan.jpg"],
    designOptions: DEFAULT_DESIGN_OPTIONS,
  },
  {
    slug: "oak",
    name: "Oak",
    type: "Double-Wide",
    beds: 4,
    baths: 2,
    sqft: 1475,
    price: 108999,
    manufacturer: "TRU Homes",
    status: "available",
    dimensions: "28' x 52'",
    image: "images/homes/oak-kitchen.jpg",
    floorPlan: "images/homes/ed21y2hdjl.jpeg",
    gallery: ["images/homes/oak-kitchen.jpg", "images/homes/oak-living-room.jpg", "images/homes/oak-exterior.jpg", "images/homes/oak-den.jpg", "images/homes/oak-master-bed.jpg", "images/homes/oak-master-bath.jpg", "images/homes/oak-secondary-bedroom.jpg", "images/homes/oak-secondary-bath.jpg", "images/homes/oak-utility.jpg", "images/homes/oak-floorplan.jpg"],
    designOptions: DEFAULT_DESIGN_OPTIONS,
  },
  {
    slug: "discover",
    name: "Discover",
    type: "Double-Wide",
    beds: 3,
    baths: 2,
    sqft: 1680,
    price: 129999,
    manufacturer: "Clayton",
    line: "Clayton MiYO",
    status: "on-order",
    dimensions: "28' x 60'",
    image: "images/homes/3wohy50qpbi.jpeg",
    floorPlan: "images/homes/ekhsuy01y55.jpeg",
    gallery: ["images/homes/2qm5nfy23wo.jpeg", "images/homes/lvi1etoxv9n.jpeg", "images/homes/21xckcm1up4.jpeg", "images/homes/3wohy50qpbi.jpeg", "images/homes/c0orblfyxcd.jpeg", "images/homes/s70xspw7dt.jpeg", "images/homes/ne9c78blwct.jpeg", "images/homes/yzb6hkagola.jpeg"],
    designOptions: CLAYTON_MIYO_DESIGN_OPTIONS,
  },
  {
    slug: "crockett",
    name: "Crockett",
    type: "Double-Wide",
    beds: 3,
    baths: 2,
    sqft: 1904,
    price: 130999,
    manufacturer: "Clayton",
    line: "Clayton Epic",
    status: "on-lot",
    dimensions: "28' x 68'",
    image: "images/homes/qr13ys8vlp.jpeg",
    floorPlan: "images/homes/97yfj8g9nk6.png",
    gallery: ["images/homes/2na1wuy5y1h.jpeg", "images/homes/3ax77tthb02.jpeg", "images/homes/4ifcz83tnlg.jpeg", "images/homes/59612evi3uy.jpeg", "images/homes/85m5hp290au.jpeg", "images/homes/8si58518rd.jpeg", "images/homes/czyukzslj0h.jpeg", "images/homes/dll3v1fei49.jpeg", "images/homes/elljf75gdi.jpeg", "images/homes/ftn2mtdr81.jpeg", "images/homes/ldelkzlgbxa.jpeg", "images/homes/po17yx8uij.jpeg", "images/homes/qd9zqt5xc3s.jpeg", "images/homes/qr13ys8vlp.jpeg", "images/homes/rjjeo38vmc9.jpeg", "images/homes/t01mtir4a9e.jpeg", "images/homes/yfu3e4gdedc.jpeg"],
    designOptions: CLAYTON_EPIC_JOURNEY_DESIGN_OPTIONS,
  },
  {
    slug: "expedition",
    name: "Expedition",
    type: "Double-Wide",
    beds: 4,
    baths: 2,
    sqft: 1580,
    price: 0,
    manufacturer: "Clayton",
    line: "Clayton Epic",
    status: "available",
    dimensions: "28' x 56'",
    image: "images/homes/4jbi2wrvrlh.jpeg",
    floorPlan: "images/homes/jxaflc2bj7l.jpeg",
    gallery: ["images/homes/r5v2ej7cai.jpeg", "images/homes/iofexmtfo6n.jpeg", "images/homes/ygjegw4fhs.jpeg", "images/homes/3cxn1wxv7xo.jpeg", "images/homes/4jbi2wrvrlh.jpeg", "images/homes/nc7wgm561c.jpeg", "images/homes/1qmqudijdku.jpeg", "images/homes/lq1gdd2dfxm.jpeg", "images/homes/uzmhljmk7o.jpeg", "images/homes/ewvteuzxex.jpeg", "images/homes/igs9krhvbrm.jpeg", "images/homes/l71l29p7qx.jpeg", "images/homes/so0o3reoxuf.jpeg"],
    designOptions: CLAYTON_EPIC_EXPERIENCE_DESIGN_OPTIONS,
  },
  {
    slug: "solace",
    name: "Solace",
    type: "Double-Wide",
    beds: 4,
    baths: 2,
    sqft: 1858,
    price: 0,
    manufacturer: "Clayton",
    line: "Clayton Horizon",
    status: "available",
    dimensions: "28' x 66'",
    image: "images/homes/qcf0oewoh6t.jpeg",
    floorPlan: "images/homes/vte9ftrsl3n.jpeg",
    gallery: ["images/homes/xkju7cunvr.jpeg", "images/homes/abfylqfpp6w.jpeg", "images/homes/2p15diqj80x.jpeg", "images/homes/38cjxhb6i3f.jpeg", "images/homes/2l50k9jc0j6.jpeg", "images/homes/qcf0oewoh6t.jpeg", "images/homes/mdgx0qnmdwo.jpeg", "images/homes/7rvaphegj2l.jpeg", "images/homes/mb0hfhrfcw.jpeg", "images/homes/uktxek4e5sg.jpeg", "images/homes/xi6b16uy4u.jpeg", "images/homes/ystr1io7sar.jpeg"],
    designOptions: CLAYTON_HORIZON_DESIGN_OPTIONS,
  },
  {
    slug: "sycamore",
    name: "Sycamore",
    type: "Double-Wide",
    beds: 4,
    baths: 2,
    sqft: 1791,
    price: 116499,
    manufacturer: "TRU Homes",
    status: "available",
    dimensions: "28' x 64'",
    image: "images/homes/sycamore-kitchen.jpg",
    floorPlan: "images/homes/2oqulwrb23g.jpeg",
    gallery: ["images/homes/sycamore-kitchen.jpg", "images/homes/sycamore-living-room.jpg", "images/homes/sycamore-exterior.jpg", "images/homes/sycamore-dining-room.jpg", "images/homes/sycamore-den.jpg", "images/homes/sycamore-entry.jpg", "images/homes/sycamore-master-bed.jpg", "images/homes/sycamore-master-bath.jpg", "images/homes/sycamore-secondary-bedroom.jpg", "images/homes/sycamore-secondary-bath.jpg", "images/homes/sycamore-floorplan.jpg"],
    designOptions: DEFAULT_DESIGN_OPTIONS,
  },
  {
    slug: "empower",
    name: "Empower",
    type: "Double-Wide",
    beds: 4,
    baths: 2,
    sqft: 2040,
    price: 137499,
    manufacturer: "Clayton",
    line: "Clayton MiYO",
    status: "available",
    dimensions: "32' x 64'",
    image: "images/homes/asz6rcl6q7.jpeg",
    floorPlan: "images/homes/r4xqzvr47a.jpeg",
    gallery: ["images/homes/hh3gnb6aqac.jpeg", "images/homes/06rfxhueqza4.jpeg", "images/homes/9b504qfed4r.jpeg", "images/homes/wnqtcq66j6r.jpeg", "images/homes/asz6rcl6q7.jpeg", "images/homes/nbv9uzkeclq.jpeg", "images/homes/9czgwxvxh0j.jpeg", "images/homes/2ncskpy0qg6.jpeg", "images/homes/hnprvobnv69.jpeg", "images/homes/5kcdpe1o0l4.jpeg", "images/homes/dkxnxp8el86.jpeg", "images/homes/c1q1778d9fe.jpeg", "images/homes/k8qsrsyonwm.jpeg", "images/homes/6pusx37g25t.jpeg", "images/homes/16k1c5mjyrf.jpeg", "images/homes/hxgkk1zf6qb.jpeg", "images/homes/8b3i9b5nd02.jpeg", "images/homes/4np5eq0s1ee.jpeg", "images/homes/d7htgeb04ud.jpeg", "images/homes/a2yb8v0xed.jpeg"],
    designOptions: CLAYTON_MIYO_DESIGN_OPTIONS,
  },
  {
    slug: "redwood",
    name: "Redwood",
    type: "Double-Wide",
    beds: 5,
    baths: 3,
    sqft: 2001,
    price: 121999,
    manufacturer: "TRU Homes",
    status: "available",
    dimensions: "32' x 64'",
    image: "images/homes/redwood-kitchen.jpg",
    floorPlan: "images/homes/vpyrd9merv.jpeg",
    gallery: ["images/homes/redwood-kitchen.jpg", "images/homes/redwood-living-room.jpg", "images/homes/redwood-dining-room.jpg", "images/homes/redwood-den.jpg", "images/homes/redwood-master-bed.jpg", "images/homes/redwood-master-bedroom.jpg", "images/homes/redwood-master-bath.jpg", "images/homes/redwood-second-bed.jpg", "images/homes/redwood-second-bath.jpg", "images/homes/redwood-third-bedroom.jpg", "images/homes/redwood-third-bath.jpg", "images/homes/redwood-utility.jpg", "images/homes/redwood-floorplan.jpg"],
    designOptions: DEFAULT_DESIGN_OPTIONS,
  },
  {
    slug: "snowcap",
    name: "Snowcap",
    type: "Double-Wide",
    beds: 4,
    baths: 3,
    sqft: 2001,
    price: 144499,
    manufacturer: "Clayton",
    line: "Clayton Epic",
    status: "available",
    dimensions: "32' x 64'",
    image: "images/homes/7rqvh7qb48b.jpeg",
    floorPlan: "images/homes/rgqpxbdkbt.jpeg",
    gallery: ["images/homes/7rqvh7qb48b.jpeg", "images/homes/2nlftjabyiv.jpeg", "images/homes/hzt3zo57fjv.jpeg", "images/homes/qthc1c1uvs8.jpeg", "images/homes/cq79ad8jqwh.jpeg", "images/homes/enxg75nhq4l.jpeg", "images/homes/bb72acdkkvd.jpeg", "images/homes/g11gj8dkoua.jpeg", "images/homes/qmr7rhh31m.jpeg", "images/homes/3vi5hh00ew2.jpeg", "images/homes/mz7lyno1mma.jpeg", "images/homes/8ech91n4yyn.jpeg", "images/homes/of9eol69cye.jpeg", "images/homes/qn4a7e4y5os.jpeg", "images/homes/a0qd5sx3c87.jpeg", "images/homes/kkn5p8fa2o.jpeg", "images/homes/lidfl10yo1h.jpeg", "images/homes/w6pii4qoipe.jpeg", "images/homes/bowpago3ttm.jpeg", "images/homes/qmiavxt745.jpeg"],
    designOptions: CLAYTON_EPIC_EXPERIENCE_DESIGN_OPTIONS,
  },
  {
    slug: "summit",
    name: "Summit",
    type: "Double-Wide",
    beds: 4,
    baths: 3,
    sqft: 2280,
    price: 158999,
    manufacturer: "Clayton",
    line: "Clayton Epic",
    status: "available",
    dimensions: "32' x 72'",
    image: "images/homes/summit-summit1.jpg",
    floorPlan: "images/homes/86fok2zcn2p.jpeg",
    gallery: ["images/homes/summit-summit1.jpg", "images/homes/summit-summit2.jpg", "images/homes/summit-summit3.jpg", "images/homes/summit-summit4.jpg", "images/homes/summit-summit5.jpg", "images/homes/summit-summit6.jpg", "images/homes/summit-summit7.jpg", "images/homes/summit-summit8.jpg", "images/homes/summit-summit9.jpg", "images/homes/summit-summit10.jpg", "images/homes/summit-summit11.jpg"],
    designOptions: CLAYTON_EPIC_EXPERIENCE_DESIGN_OPTIONS,
  },
  {
    slug: "the-peter-58",
    name: "The Peter 58",
    type: "Double-Wide",
    beds: 4,
    baths: 2,
    sqft: 1740,
    price: 0,
    manufacturer: "BG Manufacturing",
    status: "available",
    dimensions: "32' x 56'",
    image: "images/homes/ogsghqd5ycl.jpeg",
    floorPlan: "images/homes/ehos01w10em.jpeg",
    gallery: ["images/homes/ehos01w10em.jpeg", "images/homes/sm0x662vl5n.jpeg", "images/homes/3cuqsmarpz8.jpeg", "images/homes/ogsghqd5ycl.jpeg", "images/homes/r31vidyy1of.jpeg", "images/homes/huhgq7h412r.jpeg", "images/homes/haomgeirm07.jpeg"],
    designOptions: DEFAULT_DESIGN_OPTIONS,
  },
  {
    slug: "the-phillip",
    name: "The Phillip",
    type: "Double-Wide",
    beds: 3,
    baths: 2,
    sqft: 1800,
    price: 178499,
    manufacturer: "BG Manufacturing",
    status: "available",
    dimensions: "32' x 56'",
    image: "images/homes/phillip-exterior.jpg",
    floorPlan: "images/homes/haomgeirm07.jpeg",
    gallery: ["images/homes/phillip-exterior.jpg", "images/homes/phillip-kitchen.jpg", "images/homes/phillip-kitchen-2.jpg", "images/homes/phillip-living-room.jpg", "images/homes/phillip-master-bed.jpg", "images/homes/phillip-master-bath.jpg", "images/homes/phillip-secondary-bed.jpg", "images/homes/phillip-secondary-bath.jpg", "images/homes/phillip-utility.jpg", "images/homes/phillip-floorplan.jpg"],
    designOptions: DEFAULT_DESIGN_OPTIONS,
  },
  {
    slug: "the-king-david-64",
    name: "The King David 64",
    type: "Double-Wide",
    beds: 3,
    baths: 3,
    sqft: 1920,
    price: 187499,
    manufacturer: "BG Manufacturing",
    status: "available",
    dimensions: "32' x 64'",
    image: "images/homes/gen5hp5birt.jpeg",
    floorPlan: "images/homes/lc5k6oldfnp.jpeg",
    gallery: ["images/homes/lc5k6oldfnp.jpeg", "images/homes/n6k05xlcmp.jpeg", "images/homes/gzbh8omo62.jpeg", "images/homes/gen5hp5birt.jpeg", "images/homes/sb09nzbz4q.jpeg", "images/homes/5o8a8uqh7ve.jpeg", "images/homes/1tpvnd35d7i.jpeg", "images/homes/m1ibmzdu168.jpeg", "images/homes/arid08z9i1f.jpeg", "images/homes/rzxfqi79i4.jpeg"],
    designOptions: DEFAULT_DESIGN_OPTIONS,
  },
  {
    slug: "the-king-david-76",
    name: "The King David 76",
    type: "Double-Wide",
    beds: 4,
    baths: 2,
    sqft: 2280,
    price: 193999,
    manufacturer: "BG Manufacturing",
    status: "available",
    dimensions: "32' x 76'",
    image: "images/homes/kingdavid76-kitchen.jpg",
    floorPlan: "images/homes/ogsghqd5ycl.jpeg",
    gallery: ["images/homes/kingdavid76-kitchen.jpg", "images/homes/kingdavid76-kitchen-2.jpg", "images/homes/kingdavid76-living-room.jpg", "images/homes/kingdavid76-living-room-2.jpg", "images/homes/kingdavid76-dining-room.jpg", "images/homes/kingdavid76-den.jpg", "images/homes/kingdavid76-den-2.jpg", "images/homes/kingdavid76-master-bed.jpg", "images/homes/kingdavid76-master-bath.jpg", "images/homes/kingdavid76-secondary-room.jpg", "images/homes/kingdavid76-floorplan.jpg"],
    designOptions: DEFAULT_DESIGN_OPTIONS,
  },
  {
    slug: "the-kc",
    name: "The KC",
    type: "Double-Wide",
    beds: 3,
    baths: 2,
    sqft: 1800,
    price: 194999,
    manufacturer: "BG Manufacturing",
    status: "available",
    dimensions: "32' x 56'",
    image: "images/homes/4fw1w97b3a3.jpeg",
    floorPlan: "images/homes/0rljmgc2qlum.jpeg",
    gallery: ["images/homes/4fw1w97b3a3.jpeg", "images/homes/lr2jqj6lib.jpeg", "images/homes/j363215uhvi.jpeg", "images/homes/r8wfs7cuzep.jpeg", "images/homes/w3jjteo0ai8.jpeg", "images/homes/axe2wuhkqfr.jpeg", "images/homes/ci3uit0d3t.jpeg", "images/homes/weejyfcmv0i.jpeg", "images/homes/zpq2151x94.jpeg", "images/homes/525p3yilug3.jpeg", "images/homes/iqe8urlqsim.jpeg", "images/homes/yytmj45m9q.jpeg", "images/homes/t71shkwj0xb.jpeg"],
    designOptions: DEFAULT_DESIGN_OPTIONS,
  },
  {
    slug: "the-king-david-80",
    name: "The King David 80",
    type: "Double-Wide",
    beds: 4,
    baths: 2,
    sqft: 2400,
    price: 213499,
    manufacturer: "BG Manufacturing",
    status: "available",
    dimensions: "32' x 80'",
    image: "images/homes/p9xdgxlebr.jpeg",
    floorPlan: "images/homes/huhgq7h412r.jpeg",
    gallery: ["images/homes/p9xdgxlebr.jpeg", "images/homes/3cuqsmarpz8.jpeg", "images/homes/l2o67krz3ai.jpeg", "images/homes/diwkwdvc4t8.jpeg", "images/homes/zljx38bxkw9.jpeg", "images/homes/smmcr788gtl.jpeg"],
    designOptions: DEFAULT_DESIGN_OPTIONS,
  },

  // ── LIVE OAK HOMES ────────────────────────────────────────────────────────
  {
    slug: "lo-yellowstone",
    name: "Yellowstone",
    type: "Double-Wide",
    beds: 4,
    baths: 2,
    sqft: 1980,
    price: 0,
    manufacturer: "Live Oak Homes",
    status: "available",
    dimensions: "30' x 66'",
    image: "images/homes/yellowstone-kitchen.jpg",
    floorPlan: "",
    gallery: ["images/homes/yellowstone-kitchen.jpg", "images/homes/yellowstone-kitchen2.jpg", "images/homes/yellowstone-living-room.jpg", "images/homes/yellowstone-livingroom2.jpg", "images/homes/yellowstone-exterior.jpg", "images/homes/yellowstone-dining-room.jpg", "images/homes/yellowstone-primarybedroom.jpg", "images/homes/yellowstone-primary-bedroom2.jpg", "images/homes/yellowstone-primary-bathroom.jpg", "images/homes/yellowstone-secondary-bath.jpg", "images/homes/yellowstone-utility.jpg"],
    designOptions: LIVE_OAK_DESIGN_OPTIONS,
  },
  {
    slug: "lo-highlander",
    name: "Highlander",
    type: "Double-Wide",
    beds: 4,
    baths: 3,
    sqft: 2254,
    price: 0,
    manufacturer: "Live Oak Homes",
    status: "available",
    dimensions: "32' x 80'",
    image: "images/homes/highlander-kitchen.jpg",
    floorPlan: "",
    gallery: ["images/homes/highlander-kitchen.jpg", "images/homes/highlander-kitchen2.jpg", "images/homes/highlander-livingroom.jpg", "images/homes/highlander-livingroom2.jpg", "images/homes/highlander-dining-room.jpg", "images/homes/highlander-den.jpg", "images/homes/highlander-den2.jpg", "images/homes/highlander-master-bed.jpg", "images/homes/highlander-masterbed-2.jpg", "images/homes/highlander-master-bath.jpg", "images/homes/highlander-secondary-bed.jpg", "images/homes/highlander-secondary-bath.jpg", "images/homes/highlander-utility.jpg"],
    designOptions: LIVE_OAK_DESIGN_OPTIONS,
  },
  {
    slug: "lo-madison",
    name: "Madison",
    type: "Double-Wide",
    beds: 3,
    baths: 2.5,
    sqft: 1664,
    price: 0,
    manufacturer: "Live Oak Homes",
    status: "available",
    dimensions: "28' x 68'",
    image: "images/homes/madison-kitchen.jpg",
    floorPlan: "",
    gallery: ["images/homes/madison-kitchen.jpg", "images/homes/madison-kiitchen2.jpg", "images/homes/madison-livingroom.jpg", "images/homes/madison-dining-room.jpg", "images/homes/madison-masterbedroom.jpg", "images/homes/madison-master-bath.jpg", "images/homes/madison-secondary-bath.jpg", "images/homes/madison-pantry.jpg", "images/homes/madison-utility.jpg"],
    designOptions: LIVE_OAK_DESIGN_OPTIONS,
  },
  {
    slug: "lo-buck-creek",
    name: "Buck Creek",
    type: "Single-Wide",
    beds: 3,
    baths: 2,
    sqft: 1176,
    price: 0,
    manufacturer: "Live Oak Homes",
    status: "available",
    dimensions: "16' x 76'",
    image: "images/homes/buckcreek-dsc03394.jpg",
    floorPlan: "",
    gallery: ["images/homes/buckcreek-dsc03394.jpg", "images/homes/buckcreek-dsc03369.jpg", "images/homes/buckcreek-dsc03374.jpg", "images/homes/buckcreek-dsc03379.jpg", "images/homes/buckcreek-dsc03384.jpg", "images/homes/buckcreek-dsc03389.jpg", "images/homes/buckcreek-dsc03399.jpg", "images/homes/buckcreek-dsc03404.jpg", "images/homes/buckcreek-dsc03409.jpg", "images/homes/buckcreek-dsc03414.jpg", "images/homes/buckcreek-dsc03419.jpg", "images/homes/buckcreek-dsc03424.jpg", "images/homes/buckcreek-dsc03429.jpg", "images/homes/buckcreek-dsc03434.jpg", "images/homes/buckcreek-dsc03439.jpg", "images/homes/buckcreek-dsc03444.jpg", "images/homes/buckcreek-dsc03449.jpg"],
    designOptions: LIVE_OAK_DESIGN_OPTIONS,
  },
  {
    slug: "lo-denali",
    name: "Denali",
    type: "Double-Wide",
    beds: 3,
    baths: 2,
    sqft: 1568,
    price: 0,
    manufacturer: "Live Oak Homes",
    status: "available",
    dimensions: "28' x 56'",
    image: "images/homes/denali-kitchen.jpg",
    floorPlan: "",
    gallery: ["images/homes/denali-kitchen.jpg", "images/homes/denali-kitchen2.jpg", "images/homes/denali-kitchen3.jpg", "images/homes/denali-livingroom.jpg", "images/homes/denali-livingroom2.jpg", "images/homes/denali-exterior.jpg", "images/homes/denali-dining-room.jpg", "images/homes/denali-master-bedroom.jpg", "images/homes/denali-master-bath.jpg", "images/homes/denali-secondary-bath.jpg", "images/homes/denali-hallway.jpg", "images/homes/denali-utility.jpg"],
    designOptions: LIVE_OAK_DESIGN_OPTIONS,
  },
  {
    slug: "lo-lakeview",
    name: "Lakeview",
    type: "Double-Wide",
    beds: 3,
    baths: 2,
    sqft: 1780,
    price: 0,
    manufacturer: "Live Oak Homes",
    status: "available",
    dimensions: "32' x 64'",
    image: "images/homes/lakeview-kitchen.jpg",
    floorPlan: "",
    gallery: ["images/homes/lakeview-kitchen.jpg", "images/homes/lakeview-kitchen2.jpg", "images/homes/lakeview-livingroom.jpg", "images/homes/lakeview-exterior.jpg", "images/homes/lakeview-dining-room.jpg", "images/homes/lakeview-porch.jpg", "images/homes/lakeview-primary-bedroom.jpg", "images/homes/lakeview-master-bath.jpg", "images/homes/lakeview-secondary-bath.jpg", "images/homes/lakeview-utility.jpg"],
    designOptions: LIVE_OAK_DESIGN_OPTIONS,
  },

  // ── DEER VALLEY HOMEBUILDERS ──────────────────────────────────────────────
  {
    slug: "dv-woodside",
    name: "The Woodside",
    type: "Double-Wide",
    beds: 3,
    baths: 2,
    sqft: 2115,
    price: 0,
    manufacturer: "Deer Valley Homebuilders",
    status: "available",
    dimensions: "47' x 66'",
    image: "images/homes/dv-woodside-interior.jpg",
    floorPlan: "",
    gallery: ["images/homes/dv-woodside-ext.jpg", "images/homes/dv-woodside-interior.jpg"],
    designOptions: DEER_VALLEY_DESIGN_OPTIONS,
  },
  {
    slug: "dv-briarritz",
    name: "Briarritz",
    model: "DVHBSS-7204C",
    series: "Signature Series",
    type: "Triple-Wide",
    beds: 3,
    baths: 2,
    sqft: 2580,
    price: null,
    manufacturer: "Deer Valley Homebuilders",
    status: "available",
    dimensions: "",
    description: "The Briarritz DVHBSS-7204C is a 3-section Ranch style home in Deer Valley's Signature Series, offering 3 bedrooms, 2 bathrooms, and 2,580 square feet of living space. Features include a gourmet kitchen, covered porch, spacious master suite with dual closets and walk-in shower, and a large foyer.",
    image: "images/homes/briarritz-7204c/livingroom.jpg",
    floorPlan: "images/homes/briarritz-7204c/floorplan.jpg",
    gallery: [
      "images/homes/briarritz-7204c/external.jpg",
      "images/homes/briarritz-7204c/external-2.jpg",
      "images/homes/briarritz-7204c/outside.jpg",
      "images/homes/briarritz-7204c/porch.jpg",
      "images/homes/briarritz-7204c/porch-2.jpg",
      "images/homes/briarritz-7204c/foyer.jpg",
      "images/homes/briarritz-7204c/livingroom.jpg",
      "images/homes/briarritz-7204c/living-room-2.jpg",
      "images/homes/briarritz-7204c/livingroom-3.jpg",
      "images/homes/briarritz-7204c/kitchen.jpg",
      "images/homes/briarritz-7204c/kitchen2.jpg",
      "images/homes/briarritz-7204c/kitchen3.jpg",
      "images/homes/briarritz-7204c/kitchen4.jpg",
      "images/homes/briarritz-7204c/kitchen5.jpg",
      "images/homes/briarritz-7204c/kitchen6.jpg",
      "images/homes/briarritz-7204c/diningroom.jpg",
      "images/homes/briarritz-7204c/master-bed.jpg",
      "images/homes/briarritz-7204c/master-bed-2.jpg",
      "images/homes/briarritz-7204c/master-bath.jpg",
      "images/homes/briarritz-7204c/master-shower.jpg",
      "images/homes/briarritz-7204c/master-closet.jpg",
      "images/homes/briarritz-7204c/master-closet-2.jpg",
      "images/homes/briarritz-7204c/bedroom.jpg",
      "images/homes/briarritz-7204c/bath.jpg",
      "images/homes/briarritz-7204c/second-bath.jpg",
      "images/homes/briarritz-7204c/utility-room.jpg",
      "images/homes/briarritz-7204c/utility-room2.jpg"
    ],
    designOptions: DEER_VALLEY_DESIGN_OPTIONS,
  },
  {
    slug: "dv-orchard-house",
    name: "Orchard House",
    model: "DVHBSS-9006",
    series: "Signature Series",
    type: "Double-Wide",
    beds: 4,
    baths: 3,
    sqft: 2580,
    price: null,
    manufacturer: "Deer Valley Homebuilders",
    status: "available",
    dimensions: "",
    description: "The Orchard House is a stunning 4-bedroom, 3-bathroom home in Deer Valley's Signature Series. At 2,580 square feet, this 2-section ranch-style home offers spacious living with premium finishes throughout, including a large kitchen, covered porch, and generously sized bedrooms.",
    image: "images/homes/orchard-house/living-room.jpg",
    floorPlan: "images/homes/orchard-house/floorplan.jpg",
    gallery: [
      "images/homes/orchard-house/exterior.jpg",
      "images/homes/orchard-house/porch.jpg",
      "images/homes/orchard-house/living-room.jpg",
      "images/homes/orchard-house/living-room2.jpg",
      "images/homes/orchard-house/kitchen.jpg",
      "images/homes/orchard-house/kitchen2.jpg",
      "images/homes/orchard-house/kitchen3.jpg",
      "images/homes/orchard-house/kitchen4.jpg",
      "images/homes/orchard-house/dining-room.jpg",
      "images/homes/orchard-house/den.jpg",
      "images/homes/orchard-house/master-bed.jpg",
      "images/homes/orchard-house/master-bath.jpg",
      "images/homes/orchard-house/master-bath2.jpg",
      "images/homes/orchard-house/bedroom.jpg",
      "images/homes/orchard-house/closet.jpg",
      "images/homes/orchard-house/second-bath.jpg",
      "images/homes/orchard-house/third-bath.jpg",
      "images/homes/orchard-house/utility.jpg"
    ],
    designOptions: DEER_VALLEY_DESIGN_OPTIONS,
  },
  {
    slug: "dv-anais-7604",
    name: "The Anais",
    model: "DVHBSS-7604",
    series: "Signature Series",
    type: "Triple-Wide",
    beds: 4,
    baths: 3.5,
    sqft: 3180,
    price: null,
    manufacturer: "Deer Valley Homebuilders",
    status: "available",
    dimensions: "",
    description: "The Anais DVHBSS-7604 is a spacious 3-section Ranch style home in Deer Valley's Signature Series. With 4 bedrooms, 3.5 bathrooms, and 3,180 square feet, this home features an expansive kitchen, large family room, covered porches, a luxurious master suite, and generous closet space throughout.",
    image: "images/homes/anais-7604/livingroom.jpg",
    floorPlan: "images/homes/anais-7604/floorplan.jpg",
    gallery: [
      "images/homes/anais-7604/exterior.jpg",
      "images/homes/anais-7604/porch.jpg",
      "images/homes/anais-7604/porch2.jpg",
      "images/homes/anais-7604/porch3.jpg",
      "images/homes/anais-7604/livingroom.jpg",
      "images/homes/anais-7604/livingroom2.jpg",
      "images/homes/anais-7604/livingroom3.jpg",
      "images/homes/anais-7604/livingroom4.jpg",
      "images/homes/anais-7604/family-room.jpg",
      "images/homes/anais-7604/kitchen.jpg",
      "images/homes/anais-7604/kitchen2.jpg",
      "images/homes/anais-7604/kitchen3.jpg",
      "images/homes/anais-7604/kitchen4.jpg",
      "images/homes/anais-7604/kitchen5.jpg",
      "images/homes/anais-7604/kitchen6.jpg",
      "images/homes/anais-7604/master-bed.jpg",
      "images/homes/anais-7604/master-bath.jpg",
      "images/homes/anais-7604/master-bath2.jpg",
      "images/homes/anais-7604/masterbath-3.jpg",
      "images/homes/anais-7604/shower.jpg",
      "images/homes/anais-7604/closet.jpg",
      "images/homes/anais-7604/closet2.jpg",
      "images/homes/anais-7604/closet3.jpg",
      "images/homes/anais-7604/bed.jpg",
      "images/homes/anais-7604/second-bath.jpg",
      "images/homes/anais-7604/utility.jpg",
      "images/homes/anais-7604/utility2.jpg"
    ],
    designOptions: DEER_VALLEY_DESIGN_OPTIONS,
  },
  {
    slug: "dv-lodge-monl-1633",
    name: "The Lodge",
    model: "DVHBSS-MONL-1633",
    series: "Mossy Oak Nativ Living Series",
    type: "Single-Wide",
    beds: 3,
    baths: 2,
    sqft: 1140,
    price: null,
    manufacturer: "Deer Valley Homebuilders",
    status: "available",
    dimensions: "",
    description: "The Lodge DVHBSS-MONL-1633 is a 1-section Ranch style home in Deer Valley's Mossy Oak Nativ Living Series. This 3-bedroom, 2-bathroom home offers 1,140 square feet of thoughtfully designed living space with a rustic, nature-inspired aesthetic — perfect for those who want a cozy, functional home with outdoor character.",
    image: "images/homes/lodge-monl-1633/livingroom.jpg",
    floorPlan: "images/homes/lodge-monl-1633/floorplan.jpg",
    gallery: [
      "images/homes/lodge-monl-1633/exterior.jpg",
      "images/homes/lodge-monl-1633/livingroom.jpg",
      "images/homes/lodge-monl-1633/livingroom2.jpg",
      "images/homes/lodge-monl-1633/livingroom3.jpg",
      "images/homes/lodge-monl-1633/livingroom4.jpg",
      "images/homes/lodge-monl-1633/ceiling.jpg",
      "images/homes/lodge-monl-1633/kitchen.jpg",
      "images/homes/lodge-monl-1633/kitchen2.jpg",
      "images/homes/lodge-monl-1633/kitchen3.jpg",
      "images/homes/lodge-monl-1633/dining-room.jpg",
      "images/homes/lodge-monl-1633/master-bath.jpg",
      "images/homes/lodge-monl-1633/master-bath2.jpg",
      "images/homes/lodge-monl-1633/shower.jpg",
      "images/homes/lodge-monl-1633/closet.jpg",
      "images/homes/lodge-monl-1633/second-bed.jpg",
      "images/homes/lodge-monl-1633/third-bed.jpg",
      "images/homes/lodge-monl-1633/second-bath.jpg",
      "images/homes/lodge-monl-1633/utility.jpg"
    ],
    designOptions: DEER_VALLEY_DESIGN_OPTIONS,
  },
  {
    slug: "lo-5k",
    name: "5K",
    model: "V-3725B",
    series: "Suwannee Valley Elite",
    type: "Double-Wide",
    beds: 5,
    baths: 3,
    sqft: 2136,
    price: null,
    manufacturer: "Live Oak Manufactured Homes",
    status: "available",
    dimensions: "32 x 76",
    description: "The Live Oak 5K (Model V-3725B) is a spacious 32\u00d776 double-wide home in the Suwannee Valley Elite series. Offering 5 bedrooms, 3 bathrooms, and a family room with approximately 2,136 sq. ft. of living space, this home is built for larger families who need room to grow. The thoughtful layout includes a generous master suite, multiple secondary bedrooms, and a dedicated family room.",
    image: "images/homes/lo-5k/dsc05619_1000.jpg",
    floorPlan: "images/homes/lo-5k/floorplan.pdf",
    gallery: [
      "images/homes/lo-5k/dsc05619_1000.jpg",
      "images/homes/lo-5k/dsc05609_1000.jpg",
      "images/homes/lo-5k/dsc05659_1000.jpg",
      "images/homes/lo-5k/dsc05539_1000.jpg",
      "images/homes/lo-5k/dsc05579_1000.jpg",
      "images/homes/lo-5k/dsc05669_1000.jpg",
      "images/homes/lo-5k/dsc05574_1000.jpg",
      "images/homes/lo-5k/dsc05634_1000.jpg",
      "images/homes/lo-5k/dsc05569_1000.jpg",
      "images/homes/lo-5k/dsc05559_1000.jpg",
      "images/homes/lo-5k/dsc05624_1000.jpg"
    ],
    designOptions: DEER_VALLEY_DESIGN_OPTIONS,
  },
];

// ── Utility functions ────────────────────────────────────────────────────────

function formatPrice(p) {
  return '';
}

function estimateMonthly(price) {
  if (!price) return 0;
  // Rough estimate: 30yr @ ~7.5% with 5% down — subject to lender approval
  const loan = price * 0.95;
  const rate = 0.075 / 12;
  const n = 360;
  const mo = loan * (rate * Math.pow(1 + rate, n)) / (Math.pow(1 + rate, n) - 1);
  return Math.round(mo);
}

function statusLabel(status) {
  const map = {
    'on-lot':   'On Lot',
    'on-order': 'On Order',
    'sold':     'Sold',
    'available': 'Available',
  };
  return map[status] || 'Available';
}

function statusBadgeHTML(status) {
  const label = statusLabel(status);
  return `<span class="status-badge ${status || 'available'}">${label}</span>`;
}

/**
 * Merges HOMES array with any admin overrides stored in localStorage.
 * Admin overrides are keyed by slug and stored at "smhcAdminOverrides".
 * Only fields present in the override object are merged.
 */
function getEffectiveHomes() {
  let overrides = {};
  try {
    const raw = localStorage.getItem('smhcAdminOverrides');
    if (raw) overrides = JSON.parse(raw);
  } catch(e) { /* ignore */ }

  return HOMES.map(home => {
    const ov = overrides[home.slug];
    if (!ov) return home;
    return Object.assign({}, home, ov);
  });
}

/**
 * Trove-style home card HTML (3-col grid card)
 */
function homeTroveCardHTML(home, basePath) {
  basePath = basePath || '';
  const detailHref = basePath === '' ? 'pages/home-detail.html' : 'home-detail.html';
  const designHref = basePath === '' ? 'pages/design.html' : 'design.html';
  const imgSrc = basePath + home.image;
  const placeholder = basePath + 'images/home-placeholder.jpg';
  const dims = home.dimensions || '';
  const specsStr = `${home.beds} Bed | ${home.baths} Bath | ${home.sqft ? home.sqft.toLocaleString() + ' Sq. Ft.' : 'Contact for Sq. Ft.'}${dims ? ' | ' + dims : ''}`;
  const statusBadge = home.status && home.status !== 'available'
    ? `<span class="status-badge card-status-badge ${home.status}">${statusLabel(home.status)}</span>` : '';

  // Track clicks for analytics
  const clickTrack = `onclick="if(window.trackHomeView)trackHomeView('${home.slug}')"`;

  // Determine manufacturer display — show Clayton product line if available
  const mfgDisplay = (home.manufacturer === 'Clayton' && home.line) ? home.line : home.manufacturer;
  // Type badge
  const typeLabel = home.type === 'Double-Wide' ? 'Double-Wide' : home.type === 'Triple-Wide' ? 'Triple-Wide' : 'Single-Wide';
  const typeBadgeClass = home.type === 'Double-Wide' ? 'type-badge-double' : home.type === 'Triple-Wide' ? 'type-badge-triple' : 'type-badge-single';

  return `
    <div class="home-card-trove" data-type="${home.type}" data-beds="${home.beds}" data-price="${home.price}" data-slug="${home.slug}">
      <div class="card-img-wrap">
        <img class="card-img" src="${imgSrc}" alt="${home.name}"
          loading="lazy"
          decoding="async"
          onerror="this.src='${placeholder}';this.classList.add('loaded');"
          onload="this.classList.add('loaded');">
        ${statusBadge}
      </div>
      <div class="card-body">
        <div class="card-name">${home.name}</div>
        <div class="card-mfg">${mfgDisplay}</div>
        <div class="card-type-label"><span class="home-type-badge ${typeBadgeClass}">${typeLabel}</span></div>
        <div class="card-specs">${specsStr}</div>
        <div class="card-actions">
          <a href="${detailHref}?home=${home.slug}" class="btn btn-outline btn-sm">View Details</a>
          <a href="${designHref}?home=${home.slug}" class="btn btn-gold btn-sm">Design Home</a>
        </div>
      </div>
    </div>
  `;
}

// Legacy card function — kept for compatibility
function homeCardHTML(home) {
  const badge = home.type === "Double-Wide"
    ? '<span class="badge badge-double">Double-Wide</span>'
    : '<span class="badge badge-single">Single-Wide</span>';
  const detailHref = BASE_PATH === '' ? 'pages/home-detail.html' : 'home-detail.html';
  const imgSrc = BASE_PATH + home.image;
  const placeholder = BASE_PATH + 'images/home-placeholder.jpg';
  return `
    <a href="${detailHref}?home=${home.slug}" class="home-card" data-type="${home.type}" data-beds="${home.beds}" data-price="${home.price}">
      <div class="home-card-img">
        <img src="${imgSrc}" alt="${home.name}" loading="lazy" onerror="this.src='${placeholder}'">
        ${badge}
      </div>
      <div class="home-card-body">
        <div class="home-card-header">
          <h3 class="home-card-name">${home.name}</h3>

        </div>
        <div class="home-card-specs">
          <span>${home.beds} Bed</span>
          <span>${home.baths} Bath</span>
          <span>${home.sqft ? home.sqft.toLocaleString() + ' sq ft' : 'Contact for Sq. Ft.'}</span>
        </div>
        <div class="home-card-mfg">${home.manufacturer}</div>
      </div>
    </a>
  `;
}

// BASE_PATH is set by each page before calling homeCardHTML
// Root pages (index.html): BASE_PATH = ''
// Sub-pages (pages/*.html): BASE_PATH = '../'
if (typeof BASE_PATH === 'undefined') { var BASE_PATH = ''; }

// ── Live CRM Inventory Loader ─────────────────────────────────────────────
// Fetches live price + status from CRM at page load.
// Non-breaking: if the API is down, static data is the fallback.
(function() {
  var CRM_API = 'https://southern-mhc-crm-production.up.railway.app/api/public/inventory';

  function applyLiveData(liveList) {
    if (!Array.isArray(liveList) || liveList.length === 0) return;

    // Build a map: slug → { websitePrice, websiteStatus, showOnWebsite }
    var liveMap = {};
    liveList.forEach(function(item) {
      if (item.slug) liveMap[item.slug] = item;
    });

    // Patch every home in the HOMES array
    if (typeof HOMES !== 'undefined') {
      HOMES.forEach(function(home) {
        var live = liveMap[home.slug];
        if (!live) return;
        // Update price (null or 0 → shows "Call for Price" via formatPrice)
        if (live.websitePrice !== undefined) {
          home.price = live.websitePrice || 0;
        }
        // Update on-lot badge
        if (live.websiteStatus) {
          home.status = live.websiteStatus; // 'available', 'on-lot', 'on-order', 'sold'
          home.onLot = (live.websiteStatus === 'on-lot');
        }
        // Mark hidden homes
        if (live.showOnWebsite === 0) {
          home._hiddenOnWebsite = true;
        }
      });
    }

    // Dispatch event so any already-rendered grids can refresh
    document.dispatchEvent(new CustomEvent('crmInventoryLoaded', { detail: liveMap }));
  }

  // Fetch silently in background — no blocking
  fetch(CRM_API, { method: 'GET', headers: { 'Accept': 'application/json' } })
    .then(function(r) { return r.ok ? r.json() : null; })
    .then(function(data) { if (data) applyLiveData(data); })
    .catch(function() { /* silently fail — static data remains */ });

  // Also expose as a global for pages that render cards after load
  window.SMHC_CRM_URL = 'https://southern-mhc-crm-production.up.railway.app';
})();
