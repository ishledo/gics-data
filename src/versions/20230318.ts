import {ClassificationNested} from "../types";


export const classificationNested:ClassificationNested = {
  "10": {
    "name": "Energy",
    "code": "10",
    "children": {
      "1010": {
        "code": "1010",
        "name": "Energy"
      }
    }
  },
  "15": {
    "name": "Materials",
    "code": "15",
    "children": {
      "1510": {
        "code": "1510",
        "name": "Materials"
      }
    }
  },
  "20": {
    "name": "Industrials",
    "code": "20",
    "children": {
      "2010": {
        "code": "2010",
        "name": "Capital Goods"
      },
      "2020": {
        "code": "2020",
        "name": "Commercial & Professional Services"
      },
      "2030": {
        "code": "2030",
        "name": "Transportation"
      }
    }
  },
  "25": {
    "name": "Consumer Discretionary",
    "code": "25",
    "children": {
      "2510": {
        "code": "2510",
        "name": "Automobiles & Components"
      },
      "2520": {
        "code": "2520",
        "name": "Consumer Durables & Apparel"
      },
      "2530": {
        "code": "2530",
        "name": "Consumer Services"
      },
      "2550": {
        "code": "2550",
        "name": "Consumer Discretionary Distribution & Retail"
      }
    }
  },
  "30": {
    "name": "Consumer Staples",
    "code": "30",
    "children": {
      "3010": {
        "code": "3010",
        "name": "Consumer Staples Distribution & Retail"
      },
      "3020": {
        "code": "3020",
        "name": "Food, Beverage & Tobacco"
      },
      "3030": {
        "code": "3030",
        "name": "Personal Care Products"
      }
    }
  },
  "35": {
    "name": "Health Care",
    "code": "35",
    "children": {
      "3510": {
        "code": "3510",
        "name": "Health Care Equipment & Services"
      },
      "3520": {
        "code": "3520",
        "name": "Pharmaceuticals, Biotechnology & Life Sciences"
      }
    }
  },
  "40": {
    "name": "Financials",
    "code": "40",
    "children": {
      "4010": {
        "code": "4010",
        "name": "Banks"
      },
      "4020": {
        "code": "4020",
        "name": "Financial Services"
      },
      "4030": {
        "code": "4030",
        "name": "Insurance"
      }
    }
  },
  "45": {
    "name": "Information Technology",
    "code": "45",
    "children": {
      "4510": {
        "code": "4510",
        "name": "Software & Services"
      },
      "4520": {
        "code": "4520",
        "name": "Technology Hardware & Equipment"
      },
      "4530": {
        "code": "4530",
        "name": "Semiconductors & Semiconductor Equipment"
      }
    }
  },
  "50": {
    "name": "Communication Services",
    "code": "50",
    "children": {
      "5010": {
        "code": "5010",
        "name": "Telecommunication Services"
      },
      "5020": {
        "code": "5020",
        "name": "Media & Entertainment"
      }
    }
  },
  "55": {
    "name": "Utilities",
    "code": "55",
    "children": {
      "5510": {
        "code": "5510",
        "name": "Utilities"
      }
    }
  },
  "60": {
    "name": "Real Estate",
    "code": "60",
    "children": {
      "6010": {
        "code": "6010",
        "name": "Equity Real Estate Investment Trusts (REITs)"
      },
      "6020": {
        "code": "6020",
        "name": "Real Estate Management & Development"
      }
    }
  },
  "1010": {
    "name": "Energy",
    "code": "1010",
    "parent": {
      "name": "Energy",
      "code": "10"
    },
    "children": {
      "101010": {
        "code": "101010",
        "name": "Energy Equipment & Services"
      },
      "101020": {
        "code": "101020",
        "name": "Oil, Gas & Consumable Fuels"
      }
    }
  },
  "1510": {
    "name": "Materials",
    "code": "1510",
    "parent": {
      "name": "Materials",
      "code": "15"
    },
    "children": {
      "151010": {
        "code": "151010",
        "name": "Chemicals"
      },
      "151020": {
        "code": "151020",
        "name": "Construction Materials"
      },
      "151030": {
        "code": "151030",
        "name": "Containers & Packaging"
      },
      "151040": {
        "code": "151040",
        "name": "Metals & Mining"
      },
      "151050": {
        "code": "151050",
        "name": "Paper & Forest Products"
      }
    }
  },
  "2010": {
    "name": "Capital Goods",
    "code": "2010",
    "parent": {
      "name": "Industrials",
      "code": "20"
    },
    "children": {
      "201010": {
        "code": "201010",
        "name": "Aerospace & Defense"
      },
      "201020": {
        "code": "201020",
        "name": "Building Products"
      },
      "201030": {
        "code": "201030",
        "name": "Construction & Engineering"
      },
      "201040": {
        "code": "201040",
        "name": "Electrical Equipment"
      },
      "201050": {
        "code": "201050",
        "name": "Industrial Conglomerates"
      },
      "201060": {
        "code": "201060",
        "name": "Machinery"
      },
      "201070": {
        "code": "201070",
        "name": "Trading Companies & Distributors"
      }
    }
  },
  "2020": {
    "name": "Commercial & Professional Services",
    "code": "2020",
    "parent": {
      "name": "Industrials",
      "code": "20"
    },
    "children": {
      "202010": {
        "code": "202010",
        "name": "Commercial Services & Supplies"
      },
      "202020": {
        "code": "202020",
        "name": "Professional Services"
      }
    }
  },
  "2030": {
    "name": "Transportation",
    "code": "2030",
    "parent": {
      "name": "Industrials",
      "code": "20"
    },
    "children": {
      "203010": {
        "code": "203010",
        "name": "Air Freight & Logistics"
      },
      "203020": {
        "code": "203020",
        "name": "Passenger Airlines"
      },
      "203030": {
        "code": "203030",
        "name": "Marine Transportation"
      },
      "203040": {
        "code": "203040",
        "name": "Ground Transportation"
      },
      "203050": {
        "code": "203050",
        "name": "Transportation Infrastructure"
      }
    }
  },
  "2510": {
    "name": "Automobiles & Components",
    "code": "2510",
    "parent": {
      "name": "Consumer Discretionary",
      "code": "25"
    },
    "children": {
      "251010": {
        "code": "251010",
        "name": "Automobile Components"
      },
      "251020": {
        "code": "251020",
        "name": "Automobiles"
      }
    }
  },
  "2520": {
    "name": "Consumer Durables & Apparel",
    "code": "2520",
    "parent": {
      "name": "Consumer Discretionary",
      "code": "25"
    },
    "children": {
      "252010": {
        "code": "252010",
        "name": "Household Durables"
      },
      "252020": {
        "code": "252020",
        "name": "Leisure Products"
      },
      "252030": {
        "code": "252030",
        "name": "Textiles, Apparel & Luxury Goods"
      }
    }
  },
  "2530": {
    "name": "Consumer Services",
    "code": "2530",
    "parent": {
      "name": "Consumer Discretionary",
      "code": "25"
    },
    "children": {
      "253010": {
        "code": "253010",
        "name": "Hotels, Restaurants & Leisure"
      },
      "253020": {
        "code": "253020",
        "name": "Diversified Consumer Services"
      }
    }
  },
  "2550": {
    "name": "Consumer Discretionary Distribution & Retail",
    "code": "2550",
    "parent": {
      "name": "Consumer Discretionary",
      "code": "25"
    },
    "children": {
      "255010": {
        "code": "255010",
        "name": "Distributors"
      },
      "255030": {
        "code": "255030",
        "name": "Broadline Retail"
      },
      "255040": {
        "code": "255040",
        "name": "Specialty Retail"
      }
    }
  },
  "3010": {
    "name": "Consumer Staples Distribution & Retail",
    "code": "3010",
    "parent": {
      "name": "Consumer Staples",
      "code": "30"
    },
    "children": {
      "301010": {
        "code": "301010",
        "name": "Consumer Staples Distribution & Retail"
      }
    }
  },
  "3020": {
    "name": "Food, Beverage & Tobacco",
    "code": "3020",
    "parent": {
      "name": "Consumer Staples",
      "code": "30"
    },
    "children": {
      "302010": {
        "code": "302010",
        "name": "Beverages"
      },
      "302020": {
        "code": "302020",
        "name": "Food Products"
      },
      "302030": {
        "code": "302030",
        "name": "Tobacco"
      }
    }
  },
  "3030": {
    "name": "Personal Care Products",
    "code": "3030",
    "parent": {
      "name": "Consumer Staples",
      "code": "30"
    },
    "children": {
      "303010": {
        "code": "303010",
        "name": "Household Products"
      },
      "303020": {
        "code": "303020",
        "name": "Personal Care Products"
      }
    }
  },
  "3510": {
    "name": "Health Care Equipment & Services",
    "code": "3510",
    "parent": {
      "name": "Health Care",
      "code": "35"
    },
    "children": {
      "351010": {
        "code": "351010",
        "name": "Health Care Equipment & Supplies"
      },
      "351020": {
        "code": "351020",
        "name": "Health Care Providers & Services"
      },
      "351030": {
        "code": "351030",
        "name": "Health Care Technology"
      }
    }
  },
  "3520": {
    "name": "Pharmaceuticals, Biotechnology & Life Sciences",
    "code": "3520",
    "parent": {
      "name": "Health Care",
      "code": "35"
    },
    "children": {
      "352010": {
        "code": "352010",
        "name": "Biotechnology"
      },
      "352020": {
        "code": "352020",
        "name": "Pharmaceuticals"
      },
      "352030": {
        "code": "352030",
        "name": "Life Sciences Tools & Services"
      }
    }
  },
  "4010": {
    "name": "Banks",
    "code": "4010",
    "parent": {
      "name": "Financials",
      "code": "40"
    },
    "children": {
      "401010": {
        "code": "401010",
        "name": "Banks"
      }
    }
  },
  "4020": {
    "name": "Financial Services",
    "code": "4020",
    "parent": {
      "name": "Financials",
      "code": "40"
    },
    "children": {
      "402010": {
        "code": "402010",
        "name": "Financial Services"
      },
      "402020": {
        "code": "402020",
        "name": "Consumer Finance"
      },
      "402030": {
        "code": "402030",
        "name": "Capital Markets"
      },
      "402040": {
        "code": "402040",
        "name": "Mortgage Real Estate Investment \nTrusts (REITs)"
      }
    }
  },
  "4030": {
    "name": "Insurance",
    "code": "4030",
    "parent": {
      "name": "Financials",
      "code": "40"
    },
    "children": {
      "403010": {
        "code": "403010",
        "name": "Insurance"
      }
    }
  },
  "4510": {
    "name": "Software & Services",
    "code": "4510",
    "parent": {
      "name": "Information Technology",
      "code": "45"
    },
    "children": {
      "451020": {
        "code": "451020",
        "name": "IT Services"
      },
      "451030": {
        "code": "451030",
        "name": "Software"
      }
    }
  },
  "4520": {
    "name": "Technology Hardware & Equipment",
    "code": "4520",
    "parent": {
      "name": "Information Technology",
      "code": "45"
    },
    "children": {
      "452010": {
        "code": "452010",
        "name": "Communications Equipment"
      },
      "452020": {
        "code": "452020",
        "name": "Technology Hardware, Storage & Peripherals"
      },
      "452030": {
        "code": "452030",
        "name": "Electronic Equipment, Instruments & Components"
      }
    }
  },
  "4530": {
    "name": "Semiconductors & Semiconductor Equipment",
    "code": "4530",
    "parent": {
      "name": "Information Technology",
      "code": "45"
    },
    "children": {
      "453010": {
        "code": "453010",
        "name": "Semiconductors & Semiconductor Equipment"
      }
    }
  },
  "5010": {
    "name": "Telecommunication Services",
    "code": "5010",
    "parent": {
      "name": "Communication Services",
      "code": "50"
    },
    "children": {
      "501010": {
        "code": "501010",
        "name": "Diversified Telecommunication Services"
      },
      "501020": {
        "code": "501020",
        "name": "Wireless Telecommunication Services"
      }
    }
  },
  "5020": {
    "name": "Media & Entertainment",
    "code": "5020",
    "parent": {
      "name": "Communication Services",
      "code": "50"
    },
    "children": {
      "502010": {
        "code": "502010",
        "name": "Media"
      },
      "502020": {
        "code": "502020",
        "name": "Entertainment"
      },
      "502030": {
        "code": "502030",
        "name": "Interactive Media & Services"
      }
    }
  },
  "5510": {
    "name": "Utilities",
    "code": "5510",
    "parent": {
      "name": "Utilities",
      "code": "55"
    },
    "children": {
      "551010": {
        "code": "551010",
        "name": "Electric Utilities"
      },
      "551020": {
        "code": "551020",
        "name": "Gas Utilities"
      },
      "551030": {
        "code": "551030",
        "name": "Multi-Utilities"
      },
      "551040": {
        "code": "551040",
        "name": "Water Utilities"
      },
      "551050": {
        "code": "551050",
        "name": "Independent Power and Renewable Electricity Producers"
      }
    }
  },
  "6010": {
    "name": "Equity Real Estate Investment Trusts (REITs)",
    "code": "6010",
    "parent": {
      "name": "Real Estate",
      "code": "60"
    },
    "children": {
      "601010": {
        "code": "601010",
        "name": "Diversified REITs"
      },
      "601025": {
        "code": "601025",
        "name": "Industrial REITs"
      },
      "601030": {
        "code": "601030",
        "name": "Hotel & Resort REITs"
      },
      "601040": {
        "code": "601040",
        "name": "Office REITs"
      },
      "601050": {
        "code": "601050",
        "name": "Health Care REITs"
      },
      "601060": {
        "code": "601060",
        "name": "Residential REITs"
      },
      "601070": {
        "code": "601070",
        "name": "Retail REITs"
      },
      "601080": {
        "code": "601080",
        "name": "Specialized REITs"
      }
    }
  },
  "6020": {
    "name": "Real Estate Management & Development",
    "code": "6020",
    "parent": {
      "name": "Real Estate",
      "code": "60"
    },
    "children": {
      "602010": {
        "code": "602010",
        "name": "Real Estate Management & Development"
      }
    }
  },
  "101010": {
    "name": "Energy Equipment & Services",
    "code": "101010",
    "parent": {
      "name": "Energy",
      "code": "1010"
    },
    "children": {
      "10101010": {
        "code": "10101010",
        "name": "Oil & Gas Drilling",
        "description": "Drilling contractors or owners of drilling rigs that contract their services for drilling wells"
      },
      "10101020": {
        "code": "10101020",
        "name": "Oil & Gas Equipment & Services",
        "description": "Manufacturers of equipment, including drilling rigs and equipment, and providers of supplies and services to companies involved in the drilling, evaluation and completion of oil and gas wells."
      }
    }
  },
  "101020": {
    "name": "Oil, Gas & Consumable Fuels",
    "code": "101020",
    "parent": {
      "name": "Energy",
      "code": "1010"
    },
    "children": {
      "10102010": {
        "code": "10102010",
        "name": "Integrated Oil & Gas",
        "description": "Integrated oil companies engaged in the exploration & production of oil and gas, as well as at least one other significant activity in either refining, marketing and transportation, or chemicals."
      },
      "10102020": {
        "code": "10102020",
        "name": "Oil & Gas Exploration & Production",
        "description": "Companies engaged in the exploration and production of oil and gas not classified elsewhere."
      },
      "10102030": {
        "code": "10102030",
        "name": "Oil & Gas Refining & Marketing",
        "description": "Companies engaged in the refining and marketing of oil, gas and/or refined products not classified in the Integrated Oil & Gas or Independent Power Producers & Energy Traders Sub-Industries."
      },
      "10102040": {
        "code": "10102040",
        "name": "Oil & Gas Storage & Transportation",
        "description": "Companies engaged in the storage and/or transportation of oil, gas and/or refined products. Includes diversified midstream natural gas companies, oil and refined product pipelines, coal slurry pipelines and oil & gas shipping companies."
      },
      "10102050": {
        "code": "10102050",
        "name": "Coal & Consumable Fuels",
        "description": "Companies primarily involved in the production and mining of coal, related products and other consumable fuels related to the generation of energy. Excludes companies primarily producing gases classified in the Industrial Gases sub-industry and companies primarily mining for metallurgical (coking) coal used for steel production."
      }
    }
  },
  "151010": {
    "name": "Chemicals",
    "code": "151010",
    "parent": {
      "name": "Materials",
      "code": "1510"
    },
    "children": {
      "15101010": {
        "code": "15101010",
        "name": "Commodity Chemicals",
        "description": "Companies that primarily produce industrial chemicals and basic chemicals. Including but not limited to plastics, synthetic fibers, films, commodity-based paints & pigments, explosives and petrochemicals. Excludes chemicalcompanies classified in the Diversified Chemicals, Fertilizers & Agricultural Chemicals, Industrial Gases, or Specialty Chemicals Sub-Industries."
      },
      "15101020": {
        "code": "15101020",
        "name": "Diversified Chemicals",
        "description": "Manufacturers of a diversified range of chemical products not classified in the Industrial Gases, Commodity Chemicals, Specialty Chemicals or Fertilizers & Agricultural Chemicals Sub-Industries."
      },
      "15101030": {
        "code": "15101030",
        "name": "Fertilizers & Agricultural Chemicals",
        "description": "Producers of fertilizers, pesticides, potash or other agriculture-related chemicals not classified elsewhere."
      },
      "15101040": {
        "code": "15101040",
        "name": "Industrial Gases",
        "description": "Manufacturers of industrial gases."
      },
      "15101050": {
        "code": "15101050",
        "name": "Specialty Chemicals",
        "description": "Companies that primarily produce high value-added chemicals used in the manufacture of a wide variety of products, including but not limited to fine chemicals, additives, advanced polymers, adhesives, sealants and specialty paints, pigments and coatings."
      }
    }
  },
  "151020": {
    "name": "Construction Materials",
    "code": "151020",
    "parent": {
      "name": "Materials",
      "code": "1510"
    },
    "children": {
      "15102010": {
        "code": "15102010",
        "name": "Construction Materials",
        "description": "Manufacturers of construction materials including sand, clay, gypsum, lime, aggregates, cement, concrete and bricks. Other finished or semi-finished building materials are classified in the Building Products Sub-Industry."
      }
    }
  },
  "151030": {
    "name": "Containers & Packaging",
    "code": "151030",
    "parent": {
      "name": "Materials",
      "code": "1510"
    },
    "children": {
      "15103010": {
        "code": "15103010",
        "name": "Metal, Glass & Plastic Containers ",
        "description": "Manufacturers of metal, glass or plastic containers. Includes corks and caps."
      },
      "15103020": {
        "code": "15103020",
        "name": "Paper & Plastic Packaging Products & Materials",
        "description": "Manufacturers of paper and cardboard containers and packaging."
      }
    }
  },
  "151040": {
    "name": "Metals & Mining",
    "code": "151040",
    "parent": {
      "name": "Materials",
      "code": "1510"
    },
    "children": {
      "15104010": {
        "code": "15104010",
        "name": "Aluminum",
        "description": "Producers of aluminum and related products, including companies that mine or process bauxite and companies that recycle aluminum to produce finished or semi-finished products. Excludes companies that primarily produce aluminum building materials classified in the Building Products Sub-Industry."
      },
      "15104020": {
        "code": "15104020",
        "name": "Diversified Metals & Mining",
        "description": "Companies engaged in the diversified production or extraction of metals and minerals not classified elsewhere. Including, but not limited to, nonferrous metal mining (except bauxite), salt and borate mining, phosphate rock mining, and diversified mining operations. Excludes iron ore mining, classified in the Steel Sub-Industry, bauxite mining, classified in the Aluminum Sub-Industry, and coal mining, classified in either the Steel or Coal & Consumable Fuels Sub-Industries."
      },
      "15104025": {
        "code": "15104025",
        "name": "Copper",
        "description": "Companies involved primarily in copper ore mining. "
      },
      "15104030": {
        "code": "15104030",
        "name": "Gold",
        "description": "Producers of gold and related products, including companies that mine or process gold and the South African finance houses which primarily invest in, but do not operate, gold mines."
      },
      "15104040": {
        "code": "15104040",
        "name": "Precious Metals & Minerals",
        "description": "Companies mining precious metals and minerals not classified in the Gold Sub-Industry. Includes companies primarily mining platinum."
      },
      "15104045": {
        "code": "15104045",
        "name": "Silver",
        "description": "Companies primarily mining silver. Excludes companies classified in the Gold or Precious Metals & Minerals Sub-Industries."
      },
      "15104050": {
        "code": "15104050",
        "name": "Steel",
        "description": "Producers of iron and steel and related products, including metallurgical (coking) coal mining used for steel production."
      }
    }
  },
  "151050": {
    "name": "Paper & Forest Products",
    "code": "151050",
    "parent": {
      "name": "Materials",
      "code": "1510"
    },
    "children": {
      "15105010": {
        "code": "15105010",
        "name": "Forest Products",
        "description": "Manufacturers of timber and related wood products. Includes lumber for the building industry."
      },
      "15105020": {
        "code": "15105020",
        "name": "Paper Products",
        "description": "Manufacturersof all grades of paper. Excludes companies specializing in paper packaging classified in the Paper Packaging Sub-Industry."
      }
    }
  },
  "201010": {
    "name": "Aerospace & Defense",
    "code": "201010",
    "parent": {
      "name": "Capital Goods",
      "code": "2010"
    },
    "children": {
      "20101010": {
        "code": "20101010",
        "name": "Aerospace & Defense",
        "description": "Manufacturers of civil or military aerospace and defense equipment, parts or products. Includes defense electronics and space equipment."
      }
    }
  },
  "201020": {
    "name": "Building Products",
    "code": "201020",
    "parent": {
      "name": "Capital Goods",
      "code": "2010"
    },
    "children": {
      "20102010": {
        "code": "20102010",
        "name": "Building Products",
        "description": "Manufacturers of building components and home improvement products and equipment. Excludes lumber and plywood classified under Forest Products and cement and other materials classified in the Construction Materials Sub-Industry."
      }
    }
  },
  "201030": {
    "name": "Construction & Engineering",
    "code": "201030",
    "parent": {
      "name": "Capital Goods",
      "code": "2010"
    },
    "children": {
      "20103010": {
        "code": "20103010",
        "name": "Construction & Engineering",
        "description": "Companies engaged in primarily non-residential construction. Includes civil engineering companies and large-scale contractors. Excludes companies classified in the Homebuilding Sub-Industry."
      }
    }
  },
  "201040": {
    "name": "Electrical Equipment",
    "code": "201040",
    "parent": {
      "name": "Capital Goods",
      "code": "2010"
    },
    "children": {
      "20104010": {
        "code": "20104010",
        "name": "Electrical Components & Equipment",
        "description": "Companies that produce electric cables and wires, electrical components or equipment not classified in the Heavy Electrical Equipment Sub-Industry."
      },
      "20104020": {
        "code": "20104020",
        "name": "Heavy Electrical Equipment",
        "description": "Manufacturers of power-generating equipment and other heavy electrical equipment, including power turbines, heavy electrical machinery intended for fixed-use and large electrical systems. Excludes cables and wires, classified in the Electrical Components & Equipment Sub-Industry."
      }
    }
  },
  "201050": {
    "name": "Industrial Conglomerates",
    "code": "201050",
    "parent": {
      "name": "Capital Goods",
      "code": "2010"
    },
    "children": {
      "20105010": {
        "code": "20105010",
        "name": "Industrial Conglomerates",
        "description": "Diversified industrial companies with business activities in three or more sectors, none of which contributes a majority of revenues. Stakes held are predominantly of a controlling nature and stake holders maintain an operational interest in the running of the subsidiaries."
      }
    }
  },
  "201060": {
    "name": "Machinery",
    "code": "201060",
    "parent": {
      "name": "Capital Goods",
      "code": "2010"
    },
    "children": {
      "20106010": {
        "code": "20106010",
        "name": "Construction Machinery & Heavy Transportation Equipment",
        "description": "Manufacturers of heavy duty trucks, rolling machinery, earth-moving and construction equipment, and manufacturers of related parts. Includes non-military shipbuilding."
      },
      "20106015": {
        "code": "20106015",
        "name": "Agricultural & Farm Machinery",
        "description": "Companies manufacturing agricultural machinery, farm machinery, and their related parts. Includes machinery used for the production of crops and agricultural livestock, agricultural tractors, planting and fertilizing machinery, fertilizer and chemical application equipment, and grain dryers and blowers."
      },
      "20106020": {
        "code": "20106020",
        "name": "Industrial Machinery & Supplies & Components",
        "description": "Manufacturers of industrial machinery and industrial components. Includes companies that manufacture presses, machine tools, compressors, pollution control equipment, elevators, escalators, insulators, pumps, roller bearings and other metal fabrications."
      }
    }
  },
  "201070": {
    "name": "Trading Companies & Distributors",
    "code": "201070",
    "parent": {
      "name": "Capital Goods",
      "code": "2010"
    },
    "children": {
      "20107010": {
        "code": "20107010",
        "name": "Trading Companies & Distributors",
        "description": "Trading companies and other distributors of industrial equipment and products."
      }
    }
  },
  "202010": {
    "name": "Commercial Services & Supplies",
    "code": "202010",
    "parent": {
      "name": "Commercial & Professional Services",
      "code": "2020"
    },
    "children": {
      "20201010": {
        "code": "20201010",
        "name": "Commercial Printing",
        "description": "Companies providing commercial printing services. Includes printers primarily serving the media industry."
      },
      "20201050": {
        "code": "20201050",
        "name": "Environmental & Facilities Services",
        "description": "Companies providing environmental and facilities maintenance services. Includes waste management, facilities management and pollution control services. Excludes large-scale water treatment systems classified in the Water Utilities Sub-Industry."
      },
      "20201060": {
        "code": "20201060",
        "name": "Office Services & Supplies",
        "description": "Providers of office services and manufacturers of office supplies and equipment not classified elsewhere."
      },
      "20201070": {
        "code": "20201070",
        "name": "Diversified Support Services",
        "description": "Companies primarily providing labor oriented support services to businesses and governments. Includes commercial cleaning services, dining & catering services, equipment repair services, industrial maintenance services, industrial auctioneers, storage & warehousing, transaction services, uniform rental services, and other business support services."
      },
      "20201080": {
        "code": "20201080",
        "name": "Security & Alarm Services",
        "description": "Companies providing security and protection services to business and governments. Includes companies providing services such as correctional facilities, security & alarm services, armored transportation & guarding. Excludes companies providing security software classified under the Systems Software Sub-Industry and home security services classified under the Specialized Consumer Services Sub-Industry. Also excludes companies manufacturing security system equipment classified under the Electronic Equipment & Instruments Sub-Industry. "
      }
    }
  },
  "202020": {
    "name": "Professional Services",
    "code": "202020",
    "parent": {
      "name": "Commercial & Professional Services",
      "code": "2020"
    },
    "children": {
      "20202010": {
        "code": "20202010",
        "name": "Human Resource & Employment Services",
        "description": "Companies providing business support services relating to human capital management. This Sub-Industry includes employment agencies, employee training, payroll processing, benefit & retirement support services, corporate & job seeker recruitment services, and online job portals generating revenue from fees or commissions for offering recruitment services to companies or job seekers."
      },
      "20202020": {
        "code": "20202020",
        "name": "Research & Consulting Services",
        "description": "Companies primarily providing research and consulting services to businesses and governments not classified elsewhere. Includes companies involved in management consulting services, architectural design, business information or scientific research, marketing, and testing & certification services. Excludes companies providing information technology consulting services classified in the IT Consulting & Other Services Sub-Industry."
      },
      "20202030": {
        "code": "20202030",
        "name": "Data Processing & Outsourced Services ",
        "description": "Providers of commercial data processing and/or business process outsourcing services. This Sub-Industry includes companies providing services for customer experience management, back-office automation, call center management, and investor communications."
      }
    }
  },
  "203010": {
    "name": "Air Freight & Logistics",
    "code": "203010",
    "parent": {
      "name": "Transportation",
      "code": "2030"
    },
    "children": {
      "20301010": {
        "code": "20301010",
        "name": "Air Freight & Logistics",
        "description": "Companies providing air freight transportation, courier and logistics services, including package and mail delivery and customs agents. Excludes those companies classified in the Airlines, Marine or Trucking Sub-Industries."
      }
    }
  },
  "203020": {
    "name": "Passenger Airlines",
    "code": "203020",
    "parent": {
      "name": "Transportation",
      "code": "2030"
    },
    "children": {
      "20302010": {
        "code": "20302010",
        "name": "Passenger Airlines",
        "description": "Companies providing primarily passenger air transportation."
      }
    }
  },
  "203030": {
    "name": "Marine Transportation",
    "code": "203030",
    "parent": {
      "name": "Transportation",
      "code": "2030"
    },
    "children": {
      "20303010": {
        "code": "20303010",
        "name": "Marine Transportation",
        "description": "Companies providing goods or passenger maritime transportation. Excludes cruise-ships classified in the Hotels, Resorts & Cruise Lines Sub-Industry."
      }
    }
  },
  "203040": {
    "name": "Ground Transportation",
    "code": "203040",
    "parent": {
      "name": "Transportation",
      "code": "2030"
    },
    "children": {
      "20304010": {
        "code": "20304010",
        "name": "Rail Transportation",
        "description": "Companies providing primarily goods and passenger rail transportation."
      },
      "20304030": {
        "code": "20304030",
        "name": "Cargo Ground Transportation ",
        "description": "Companies providing ground transportation services for goods and freight."
      },
      "20304040": {
        "code": "20304040",
        "name": "Passenger Ground Transportation",
        "description": "Companies providing passenger ground transportation and related services, including bus, taxi, vehicle rental, ride sharing and on-demand ride sharing platforms, and other passenger logistics."
      }
    }
  },
  "203050": {
    "name": "Transportation Infrastructure",
    "code": "203050",
    "parent": {
      "name": "Transportation",
      "code": "2030"
    },
    "children": {
      "20305010": {
        "code": "20305010",
        "name": "Airport Services",
        "description": "Operators of airports and companies providing related services."
      },
      "20305020": {
        "code": "20305020",
        "name": "Highways & Railtracks",
        "description": "Owners and operators of roads, tunnels and railtracks."
      },
      "20305030": {
        "code": "20305030",
        "name": "Marine Ports & Services",
        "description": "Owners and operators of marine ports and related services."
      }
    }
  },
  "251010": {
    "name": "Automobile Components",
    "code": "251010",
    "parent": {
      "name": "Automobiles & Components",
      "code": "2510"
    },
    "children": {
      "25101010": {
        "code": "25101010",
        "name": "Automotive Parts & Equipment ",
        "description": "Manufacturers of parts and accessories for automobiles and motorcycles. Excludes companies classified in the Tires & Rubber Sub-Industry."
      },
      "25101020": {
        "code": "25101020",
        "name": "Tires & Rubber",
        "description": "Manufacturers of tires and rubber."
      }
    }
  },
  "251020": {
    "name": "Automobiles",
    "code": "251020",
    "parent": {
      "name": "Automobiles & Components",
      "code": "2510"
    },
    "children": {
      "25102010": {
        "code": "25102010",
        "name": "Automobile Manufacturers",
        "description": "Companies that produce mainly passenger automobiles and light trucks. Excludes companies producing mainly motorcycles and three-wheelers classified in the Motorcycle Manufacturers Sub-Industry and heavy duty trucks classified in the Construction Machinery & Heavy Trucks Sub-Industry."
      },
      "25102020": {
        "code": "25102020",
        "name": "Motorcycle Manufacturers",
        "description": "Companies that produce motorcycles, scooters or three-wheelers. Excludes bicycles classified in the Leisure Products Sub-Industry. "
      }
    }
  },
  "252010": {
    "name": "Household Durables",
    "code": "252010",
    "parent": {
      "name": "Consumer Durables & Apparel",
      "code": "2520"
    },
    "children": {
      "25201010": {
        "code": "25201010",
        "name": "Consumer Electronics",
        "description": "Manufacturers of consumer electronics products including TVs, home audio equipment, game consoles, digital cameras, and related products. Excludes personal home computer manufacturers classified in the Technology Hardware, Storage & Peripherals Sub-Industry, and electric household appliances classified in the Household Appliances Sub-Industry."
      },
      "25201020": {
        "code": "25201020",
        "name": "Home Furnishings",
        "description": "Manufacturers of soft home furnishings or furniture, including upholstery, carpets and wall-coverings."
      },
      "25201030": {
        "code": "25201030",
        "name": "Homebuilding",
        "description": "Residential construction companies. Includes manufacturers of prefabricated houses and semi-fixed manufactured homes."
      },
      "25201040": {
        "code": "25201040",
        "name": "Household Appliances",
        "description": "Manufacturers of electric household appliances and related products. Includes manufacturers of power and hand tools, including garden improvement tools. Excludes TVs and other audio and video products classified in the Consumer Electronics Sub-Industry and personal computers classified in the Technology Hardware, Storage & Peripherals Sub-Industry."
      },
      "25201050": {
        "code": "25201050",
        "name": "Housewares & Specialties",
        "description": "Manufacturers of durable household products, including cutlery, cookware, glassware, crystal, silverware, utensils, kitchenware and consumer specialties not classified elsewhere."
      }
    }
  },
  "252020": {
    "name": "Leisure Products",
    "code": "252020",
    "parent": {
      "name": "Consumer Durables & Apparel",
      "code": "2520"
    },
    "children": {
      "25202010": {
        "code": "25202010",
        "name": "Leisure Products",
        "description": "Manufacturers of leisure products and equipment includingsports equipment, bicycles and toys."
      }
    }
  },
  "252030": {
    "name": "Textiles, Apparel & Luxury Goods",
    "code": "252030",
    "parent": {
      "name": "Consumer Durables & Apparel",
      "code": "2520"
    },
    "children": {
      "25203010": {
        "code": "25203010",
        "name": "Apparel, Accessories & Luxury Goods",
        "description": "Manufacturers of apparel, accessories & luxury goods. Includes companies primarily producing designer handbags, wallets, luggage, jewelry and watches. Excludes shoes classified in the Footwear Sub-Industry."
      },
      "25203020": {
        "code": "25203020",
        "name": "Footwear",
        "description": "Manufacturers of footwear. Includes sport and leather shoes."
      },
      "25203030": {
        "code": "25203030",
        "name": "Textiles",
        "description": "Manufacturers of textile and related products not classified in the Apparel, Accessories & Luxury Goods, Footwear or Home Furnishings Sub-Industries."
      }
    }
  },
  "253010": {
    "name": "Hotels, Restaurants & Leisure",
    "code": "253010",
    "parent": {
      "name": "Consumer Services",
      "code": "2530"
    },
    "children": {
      "25301010": {
        "code": "25301010",
        "name": "Casinos & Gaming",
        "description": "Owners and operators of casinos and gaming facilities. Includes companies providing lottery and betting services."
      },
      "25301020": {
        "code": "25301020",
        "name": "Hotels, Resorts & Cruise Lines",
        "description": "Owners and operators of hotels, resorts and cruise-ships. Includes travel agencies, tour operators and related services not classified elsewhere . Excludes casino-hotels classified in the Casinos & Gaming Sub-Industry."
      },
      "25301030": {
        "code": "25301030",
        "name": "Leisure Facilities",
        "description": "Owners and operators of leisure facilities, including sport and fitness centers, stadiums, golf courses and amusement parks not classified in the Movies & Entertainment Sub-Industry."
      },
      "25301040": {
        "code": "25301040",
        "name": "Restaurants",
        "description": "Owners and operators of restaurants, bars, pubs, fast-food or take-out facilities. Includes companies that provide food catering services."
      }
    }
  },
  "253020": {
    "name": "Diversified Consumer Services",
    "code": "253020",
    "parent": {
      "name": "Consumer Services",
      "code": "2530"
    },
    "children": {
      "25302010": {
        "code": "25302010",
        "name": "Education Services",
        "description": "Companies providing educational services, either on-line or through conventional teaching methods. Includes, private universities, correspondence teaching, providers of educational seminars, educational materials and technical education. Excludes companies providing employee education programs classified in the Human Resources & Employment Services Sub-Industry"
      },
      "25302020": {
        "code": "25302020",
        "name": "Specialized Consumer Services",
        "description": "Companies providing consumer services not classified elsewhere. Includes residential services, home security, legal services, personal services, renovation & interior design services, consumer auctions and wedding & funeral services."
      }
    }
  },
  "255010": {
    "name": "Distributors",
    "code": "255010",
    "parent": {
      "name": "Consumer Discretionary Distribution & Retail",
      "code": "2550"
    },
    "children": {
      "25501010": {
        "code": "25501010",
        "name": "Distributors",
        "description": "Distributors and wholesalers of general merchandise not classified elsewhere. Includes vehicle distributors."
      }
    }
  },
  "255030": {
    "name": "Broadline Retail",
    "code": "255030",
    "parent": {
      "name": "Consumer Discretionary Distribution & Retail",
      "code": "2550"
    },
    "children": {
      "25503030": {
        "code": "25503030",
        "name": "Broadline Retail",
        "description": "Retailers offering a wide range of consumer discretionary merchandise. This Sub-Industry includes general and discount merchandise retailers, department stores and on-line retailers and marketplaces selling mostly consumer discretionary merchandise."
      }
    }
  },
  "255040": {
    "name": "Specialty Retail",
    "code": "255040",
    "parent": {
      "name": "Consumer Discretionary Distribution & Retail",
      "code": "2550"
    },
    "children": {
      "25504010": {
        "code": "25504010",
        "name": "Apparel Retail",
        "description": "Retailers specialized mainly in apparel and accessories."
      },
      "25504020": {
        "code": "25504020",
        "name": "Computer &Electronics Retail",
        "description": "Owners and operators of consumer electronics, computers, video and related products retail stores."
      },
      "25504030": {
        "code": "25504030",
        "name": "Home Improvement Retail",
        "description": "Owners and operators of home and garden improvement retail stores. Includes stores offering building materials and supplies."
      },
      "25504040": {
        "code": "25504040",
        "name": "Other Specialty Retail",
        "description": "Owners and operators of specialty retail stores not classified elsewhere. Includes jewelry stores, toy stores, office supply stores, health & vision care stores, and book & entertainment stores."
      },
      "25504050": {
        "code": "25504050",
        "name": "Automotive Retail",
        "description": "Ownersand operators of stores specializing in automotive retail. Includes auto dealers, gas stations, and retailers of auto accessories, motorcycles & parts, automotive glass, and automotive equipment & parts."
      },
      "25504060": {
        "code": "25504060",
        "name": "Homefurnishing Retail",
        "description": "Owners and operators of furniture and home furnishings retail stores. Includes residential furniture, homefurnishings, housewares, and interior design. Excludes home and garden improvement stores, classified in the Home Improvement Retail Sub-Industry."
      }
    }
  },
  "301010": {
    "name": "Consumer Staples Distribution & Retail",
    "code": "301010",
    "parent": {
      "name": "Consumer Staples Distribution & Retail",
      "code": "3010"
    },
    "children": {
      "30101010": {
        "code": "30101010",
        "name": "Drug Retail",
        "description": "Owners and operators of primarily drug retail stores and pharmacies."
      },
      "30101020": {
        "code": "30101020",
        "name": "Food Distributors",
        "description": "Distributors of food products to other companies and not directly to the consumer."
      },
      "30101030": {
        "code": "30101030",
        "name": "Food Retail",
        "description": "Owners and operators of primarily food retail stores."
      },
      "30101040": {
        "code": "30101040",
        "name": "Consumer Staples Merchandise Retail ",
        "description": "Retailers offering a wide range of consumer staples merchandise such as food, household, and personal care products. This Sub-Industry includes hypermarkets, super centers and other consumer staples retailers such as discount retail spaces and on-line marketplaces selling mostly consumer staples goods."
      }
    }
  },
  "302010": {
    "name": "Beverages",
    "code": "302010",
    "parent": {
      "name": "Food, Beverage & Tobacco",
      "code": "3020"
    },
    "children": {
      "30201010": {
        "code": "30201010",
        "name": "Brewers",
        "description": "Producers of beer and malt liquors. Includes breweries not classified in the Restaurants Sub-Industry."
      },
      "30201020": {
        "code": "30201020",
        "name": "Distillers & Vintners",
        "description": "Distillers, vintners and producers of alcoholic beverages not classified in the Brewers Sub-Industry."
      },
      "30201030": {
        "code": "30201030",
        "name": "Soft Drinks & Non-alcoholic Beverages",
        "description": "Producers of non-alcoholic beverages including mineral waters. Excludes producers of milk classified in the Packaged Foods Sub-Industry."
      }
    }
  },
  "302020": {
    "name": "Food Products",
    "code": "302020",
    "parent": {
      "name": "Food, Beverage & Tobacco",
      "code": "3020"
    },
    "children": {
      "30202010": {
        "code": "30202010",
        "name": "Agricultural Products & Services",
        "description": "Producers of agricultural products. Includes crop growers, owners of plantations and companies that produce and process foods but do not package and market them. Excludescompanies classified in the Forest Products Sub-Industry and those that package and market the food products classified in the Packaged Foods Sub-Industry."
      },
      "30202030": {
        "code": "30202030",
        "name": "Packaged Foods & Meats",
        "description": "Producers of packaged foods including dairy products, fruit juices, meats, poultry, fish and pet foods."
      }
    }
  },
  "302030": {
    "name": "Tobacco",
    "code": "302030",
    "parent": {
      "name": "Food, Beverage & Tobacco",
      "code": "3020"
    },
    "children": {
      "30203010": {
        "code": "30203010",
        "name": "Tobacco",
        "description": "Manufacturers of cigarettes and other tobacco products."
      }
    }
  },
  "303010": {
    "name": "Household Products",
    "code": "303010",
    "parent": {
      "name": "Personal Care Products",
      "code": "3030"
    },
    "children": {
      "30301010": {
        "code": "30301010",
        "name": "Household Products",
        "description": "Producers of non-durable household products, including detergents, soaps, diapers and other tissue and household paper products not classified in the Paper Products Sub-Industry."
      }
    }
  },
  "303020": {
    "name": "Personal Care Products",
    "code": "303020",
    "parent": {
      "name": "Personal Care Products",
      "code": "3030"
    },
    "children": {
      "30302010": {
        "code": "30302010",
        "name": "Personal Care Products ",
        "description": "Manufacturers of personal and beauty care products, including cosmetics and perfumes."
      }
    }
  },
  "351010": {
    "name": "Health Care Equipment & Supplies",
    "code": "351010",
    "parent": {
      "name": "Health Care Equipment & Services",
      "code": "3510"
    },
    "children": {
      "35101010": {
        "code": "35101010",
        "name": "Health Care Equipment",
        "description": "Manufacturers of health care equipment and devices. Includes medical instruments, drug delivery systems, cardiovascular & orthopedic devices, and diagnostic equipment."
      },
      "35101020": {
        "code": "35101020",
        "name": "Health Care Supplies",
        "description": "Manufacturers of health care supplies and medical products not classified elsewhere. Includes eye care products, hospital supplies, and safety needle & syringe devices."
      }
    }
  },
  "351020": {
    "name": "Health Care Providers & Services",
    "code": "351020",
    "parent": {
      "name": "Health Care Equipment & Services",
      "code": "3510"
    },
    "children": {
      "35102010": {
        "code": "35102010",
        "name": "Health Care Distributors",
        "description": "Distributors and wholesalers of health care products not classified elsewhere. "
      },
      "35102015": {
        "code": "35102015",
        "name": "Health Care Services",
        "description": "Providers of patient health care services not classified elsewhere. Includes dialysis centers, lab testing services, and pharmacy management services. Also includes companies providing business support services to health care providers, such as clerical support services, collection agency services, staffing services and outsourced sales & marketing services"
      },
      "35102020": {
        "code": "35102020",
        "name": "Health Care Facilities",
        "description": "Owners and operatorsof health care facilities, including hospitals, nursing homes, rehabilitation centers and animal hospitals."
      },
      "35102030": {
        "code": "35102030",
        "name": "Managed Health Care",
        "description": "Owners and operators of Health Maintenance Organizations (HMOs) and other managed plans."
      }
    }
  },
  "351030": {
    "name": "Health Care Technology",
    "code": "351030",
    "parent": {
      "name": "Health Care Equipment & Services",
      "code": "3510"
    },
    "children": {
      "35103010": {
        "code": "35103010",
        "name": "Health Care Technology",
        "description": "Companies providing information technology services primarily to health care providers. Includes companies providing application, systems and/or data processing software, internet-based tools, and IT consulting services to doctors, hospitals or businesses operating primarily in the Health Care Sector"
      }
    }
  },
  "352010": {
    "name": "Biotechnology",
    "code": "352010",
    "parent": {
      "name": "Pharmaceuticals, Biotechnology & Life Sciences",
      "code": "3520"
    },
    "children": {
      "35201010": {
        "code": "35201010",
        "name": "Biotechnology",
        "description": "Companies primarily engaged in the research, development, manufacturing and/or marketing of products based on genetic analysis and genetic engineering. Includes companies specializing in protein-based therapeutics to treat human diseases. Excludes companies manufacturing products using biotechnology but without a health care application."
      }
    }
  },
  "352020": {
    "name": "Pharmaceuticals",
    "code": "352020",
    "parent": {
      "name": "Pharmaceuticals, Biotechnology & Life Sciences",
      "code": "3520"
    },
    "children": {
      "35202010": {
        "code": "35202010",
        "name": "Pharmaceuticals",
        "description": "Companies engaged in the research, development or production of pharmaceuticals. Includes veterinary drugs."
      }
    }
  },
  "352030": {
    "name": "Life Sciences Tools & Services",
    "code": "352030",
    "parent": {
      "name": "Pharmaceuticals, Biotechnology & Life Sciences",
      "code": "3520"
    },
    "children": {
      "35203010": {
        "code": "35203010",
        "name": "Life Sciences Tools & Services",
        "description": "Companies enabling the drug discovery, development and production continuum by providing analytical tools, instruments, consumables & supplies, clinical trial services and contract research services. Includes firms primarily servicing the pharmaceutical and biotechnology industries."
      }
    }
  },
  "401010": {
    "name": "Banks",
    "code": "401010",
    "parent": {
      "name": "Banks",
      "code": "4010"
    },
    "children": {
      "40101010": {
        "code": "40101010",
        "name": "Diversified Banks",
        "description": "Large, geographically diverse banks with a national footprint whose revenues are derived primarily from conventional banking operations, have significant business activity in retail banking and small and medium corporate lending, and provide a diverse range of financial services. Excludes banks classified in the Regional Banks and Thrifts & Mortgage Finance Sub-Industries. Also excludes investment banks classified in the Investment Banking & Brokerage Sub-Industry."
      },
      "40101015": {
        "code": "40101015",
        "name": "Regional Banks",
        "description": "Commercial banks, savings banks and thrifts whose business are derived primarily from conventional banking operations such as retail banking, corporate lending and originating various residential and commercial mortgage loans funded mainly through deposits. Regional banks tend to operate in limited geographic regions. Excludes companies classified in the Diversified Banks and Commercial & Residential Mortgage Finance Sub-Industries. Also excludes investment banks classified in the Investment Banking & Brokerage Sub-Industry."
      }
    }
  },
  "402010": {
    "name": "Financial Services",
    "code": "402010",
    "parent": {
      "name": "Financial Services",
      "code": "4020"
    },
    "children": {
      "40201020": {
        "code": "40201020",
        "name": "Diversified Financial Services",
        "description": "Providers of a diverse range of financial services and/or with some interest in a wide range of financial services including banking, insurance and capital markets, but with no dominant business line. Excludes companies classified in the Regional Banks and Diversified Banks Sub-Industries."
      },
      "40201030": {
        "code": "40201030",
        "name": "Multi-Sector Holdings",
        "description": "A company with significantly diversified holdings across three or more sectors, none of which contributes a majority of profit and/or sales. Stakes held are predominantly of a non-controlling nature. Includes diversified financial companies where stakes held are of a controlling nature. Excludes other diversified companies classified in the Industrials Conglomerates Sub-Industry."
      },
      "40201040": {
        "code": "40201040",
        "name": "Specialized Finance",
        "description": "Providers of specialized financial services not classified elsewhere. Companies in this sub-industry derive a majority of revenue from one specialized line of business. \nIncludes, but not limited to, commercial financing companies, central banks, leasing institutions, factoring services, and specialty boutiques. Excludes companies classified in the Financial Exchanges & Data sub-industry."
      },
      "40201050": {
        "code": "40201050",
        "name": "Commercial & Residential Mortgage Finance ",
        "description": "Financial companies providing commercial and residential mortgage financing and related mortgage services. This Sub-Industry includes non-deposit funded mortgage lending institutions, building societies, companies providing real estate financing products, loan servicing, mortgage broker services, and mortgage insurance. "
      },
      "40201060": {
        "code": "40201060",
        "name": "Transaction & Payment Processing Services ",
        "description": "Providers of transaction & payment processing services and related payment services including digital/mobile payment processors, payment service providers & gateways, and digital wallet providers."
      }
    }
  },
  "402020": {
    "name": "Consumer Finance",
    "code": "402020",
    "parent": {
      "name": "Financial Services",
      "code": "4020"
    },
    "children": {
      "40202010": {
        "code": "40202010",
        "name": "Consumer Finance",
        "description": "Providers of consumer finance services, including personal credit, credit cards, lease financing, travel-related money services and pawn shops. Excludes mortgage lenders classified in the Thrifts & Mortgage Finance Sub-Industry."
      }
    }
  },
  "402030": {
    "name": "Capital Markets",
    "code": "402030",
    "parent": {
      "name": "Financial Services",
      "code": "4020"
    },
    "children": {
      "40203010": {
        "code": "40203010",
        "name": "Asset Management & Custody Banks",
        "description": "Financial institutions primarily engaged in investment management and/or related custody and securities fee-based services. Includes companies operating mutual funds, closed-end funds and unit investment trusts. Excludes banks and other financial institutions primarily involved in commercial lending, investment banking, brokerage and other specialized financial activities. "
      },
      "40203020": {
        "code": "40203020",
        "name": "Investment Banking & Brokerage",
        "description": "Financial institutions primarily engaged in investment banking & brokerage services, including equity and debt underwriting, mergers and acquisitions, securities lending and advisory services. Excludes banks and other financial institutions primarily involved in commercial lending, asset management and specialized financial activities. "
      },
      "40203030": {
        "code": "40203030",
        "name": "Diversified Capital Markets",
        "description": "Financial institutions primarily engaged in diversified capital markets activities, including a significant presence in at least two of the following area: large/major corporate lending, investment banking, brokerage and asset management. Excludes less diversified companies classified in the Asset Management& Custody Banks or Investment Banking & Brokerage sub-industries. Also excludes companies classified in the Banks or Insurance industry groups or the Consumer Finance Sub-Industry. "
      },
      "40203040": {
        "code": "40203040",
        "name": "Financial Exchanges & Data",
        "description": "Financial exchanges for securities, commodities, derivatives and other financial instruments, and providers of financial decision support tools and products including ratings agencies"
      }
    }
  },
  "402040": {
    "name": "Mortgage Real Estate Investment \nTrusts (REITs)",
    "code": "402040",
    "parent": {
      "name": "Financial Services",
      "code": "4020"
    },
    "children": {
      "40204010": {
        "code": "40204010",
        "name": "Mortgage REITs",
        "description": "Companies or Trusts that service, originate, purchase and/or securitize residential and/or commercial mortgage loans. Includes trusts that invest in mortgage-backed securities and other mortgage related assets."
      }
    }
  },
  "403010": {
    "name": "Insurance",
    "code": "403010",
    "parent": {
      "name": "Insurance",
      "code": "4030"
    },
    "children": {
      "40301010": {
        "code": "40301010",
        "name": "Insurance Brokers",
        "description": "Insurance and reinsurance brokerage firms."
      },
      "40301020": {
        "code": "40301020",
        "name": "Life & Health Insurance",
        "description": "Companies providing primarily life, disability, indemnity or supplemental health insurance. Excludes managed care companies classified in the Managed Health Care Sub-Industry."
      },
      "40301030": {
        "code": "40301030",
        "name": "Multi-line Insurance",
        "description": "Insurance companies with diversified interests in life, health and property and casualty insurance."
      },
      "40301040": {
        "code": "40301040",
        "name": "Property & Casualty Insurance",
        "description": "Companies providing primarily property and casualty insurance."
      },
      "40301050": {
        "code": "40301050",
        "name": "Reinsurance",
        "description": "Companies providing primarily reinsurance."
      }
    }
  },
  "451020": {
    "name": "IT Services",
    "code": "451020",
    "parent": {
      "name": "Software & Services",
      "code": "4510"
    },
    "children": {
      "45102010": {
        "code": "45102010",
        "name": "IT Consulting & Other Services",
        "description": "Providers of information technology and systems integration services not classified in the Data Processing & Outsourced Services Sub-Industry. Includes information technology consulting and information management services."
      },
      "45102030": {
        "code": "45102030",
        "name": "Internet Services & Infrastructure",
        "description": "Companies providing services and infrastructure for the internet industry including data centers and cloud networking and storage infrastructure. Also includes companies providing web hosting services. Excludes companies classified in the Software Industry."
      }
    }
  },
  "451030": {
    "name": "Software",
    "code": "451030",
    "parent": {
      "name": "Software & Services",
      "code": "4510"
    },
    "children": {
      "45103010": {
        "code": "45103010",
        "name": "Application Software",
        "description": "Companies engaged in developing and producing software designed for specialized applications for the business or consumer market. Includes enterprise and technical software, as well as cloud-based software. Excludes companies classified in the Interactive Home Entertainment Sub-Industry. Also excludes companies producing systems or database management software classified in the Systems Software Sub-Industry."
      },
      "45103020": {
        "code": "45103020",
        "name": "Systems Software",
        "description": "Companies engaged in developing and producing systems and database management software."
      }
    }
  },
  "452010": {
    "name": "Communications Equipment",
    "code": "452010",
    "parent": {
      "name": "Technology Hardware & Equipment",
      "code": "4520"
    },
    "children": {
      "45201020": {
        "code": "45201020",
        "name": "Communications Equipment",
        "description": "Manufacturers of communication equipment and products, including LANs, WANs, routers, telephones, switchboards and exchanges. Excludes cellular phone manufacturers classified in the Technology Hardware,Storage & Peripherals Sub-Industry."
      }
    }
  },
  "452020": {
    "name": "Technology Hardware, Storage & Peripherals",
    "code": "452020",
    "parent": {
      "name": "Technology Hardware & Equipment",
      "code": "4520"
    },
    "children": {
      "45202030": {
        "code": "45202030",
        "name": "Technology Hardware, Storage & Peripherals",
        "description": "Manufacturers of cellular phones, personal computers, servers, electronic computer components and peripherals. Includes data storage components, motherboards, audio and video cards, monitors, keyboards, printers, and other peripherals. Excludes semiconductors classified in the Semiconductors Sub-Industry."
      }
    }
  },
  "452030": {
    "name": "Electronic Equipment, Instruments & Components",
    "code": "452030",
    "parent": {
      "name": "Technology Hardware & Equipment",
      "code": "4520"
    },
    "children": {
      "45203010": {
        "code": "45203010",
        "name": "Electronic Equipment & Instruments ",
        "description": "Manufacturers of electronic equipment and instruments including analytical, electronic test and measurement instruments, scanner/barcode products, lasers, display screens, point-of-sales machines, and security system equipment."
      },
      "45203015": {
        "code": "45203015",
        "name": "Electronic Components",
        "description": "Manufacturers of electronic components. Includes electronic components, connection devices, electron tubes, electronic capacitors and resistors, electronic coil, printed circuit board, transformer and other inductors, signal processing technology/components."
      },
      "45203020": {
        "code": "45203020",
        "name": "Electronic Manufacturing Services",
        "description": "Producers of electronic equipment mainly for the OEM (Original Equipment Manufacturers) markets."
      },
      "45203030": {
        "code": "45203030",
        "name": "Technology Distributors",
        "description": "Distributors of technology hardware and equipment. Includes distributors of communications equipment, computers & peripherals, semiconductors, and electronic equipment and components."
      }
    }
  },
  "453010": {
    "name": "Semiconductors & Semiconductor Equipment",
    "code": "453010",
    "parent": {
      "name": "Semiconductors & Semiconductor Equipment",
      "code": "4530"
    },
    "children": {
      "45301010": {
        "code": "45301010",
        "name": "Semiconductor Materials & Equipment",
        "description": "Manufacturers of semiconductor equipment, including manufacturers of the raw material and equipment used in the solar power industry."
      },
      "45301020": {
        "code": "45301020",
        "name": "Semiconductors",
        "description": "Manufacturers of semiconductors and related products, including manufacturers of solar modules and cells."
      }
    }
  },
  "501010": {
    "name": "Diversified Telecommunication Services",
    "code": "501010",
    "parent": {
      "name": "Telecommunication Services",
      "code": "5010"
    },
    "children": {
      "50101010": {
        "code": "50101010",
        "name": "Alternative Carriers",
        "description": "Providers of communications and high-density data transmission services primarily through a high bandwidth/fiber-optic cable network."
      },
      "50101020": {
        "code": "50101020",
        "name": "Integrated Telecommunication Services",
        "description": "Operators of primarily fixed-line telecommunications networks and companies providing both wireless and fixed-line telecommunicationsservices not classified elsewhere. Also includes internet service providers offering internet access to end users."
      }
    }
  },
  "501020": {
    "name": "Wireless Telecommunication Services",
    "code": "501020",
    "parent": {
      "name": "Telecommunication Services",
      "code": "5010"
    },
    "children": {
      "50102010": {
        "code": "50102010",
        "name": "Wireless Telecommunication Services",
        "description": "Providers of primarily cellular or wireless telecommunication services."
      }
    }
  },
  "502010": {
    "name": "Media",
    "code": "502010",
    "parent": {
      "name": "Media & Entertainment",
      "code": "5020"
    },
    "children": {
      "50201010": {
        "code": "50201010",
        "name": "Advertising",
        "description": "Companies providing advertising, marketing or public relations services."
      },
      "50201020": {
        "code": "50201020",
        "name": "Broadcasting",
        "description": "Owners and operators of television or radio broadcasting systems, including programming. Includes radio and television broadcasting, radio networks, and radio stations."
      },
      "50201030": {
        "code": "50201030",
        "name": "Cable &Satellite",
        "description": "Providers of cable or satellite television services. Includes cable networks and program distribution."
      },
      "50201040": {
        "code": "50201040",
        "name": "Publishing",
        "description": "Publishers of newspapers, magazines and books in print or electronic formats."
      }
    }
  },
  "502020": {
    "name": "Entertainment",
    "code": "502020",
    "parent": {
      "name": "Media & Entertainment",
      "code": "5020"
    },
    "children": {
      "50202010": {
        "code": "50202010",
        "name": "Movies & Entertainment",
        "description": "Companies that engage in producing and selling entertainment products and services, including companies engaged in the production, distribution and screening of movies and television shows, producers and distributors of music, entertainment theaters and sports teams. Also includes companies offering and/or producing entertainment content streamed online."
      },
      "50202020": {
        "code": "50202020",
        "name": "Interactive Home Entertainment",
        "description": "Producers of interactive gaming products, including mobile gaming applications. Also includes educational software used primarily in the home. Excludes online gambling companies classified in the Casinos & Gaming Sub-Industry."
      }
    }
  },
  "502030": {
    "name": "Interactive Media & Services",
    "code": "502030",
    "parent": {
      "name": "Media & Entertainment",
      "code": "5020"
    },
    "children": {
      "50203010": {
        "code": "50203010",
        "name": "Interactive Media & Services",
        "description": "Companies engaging in content and information creation or distribution through proprietary platforms, where revenues are derived primarily through pay-per-click advertisements. Includes search engines, social media and networking platforms, online classifieds, and online review companies. Excludes companies operating online marketplaces classified in Internet & Direct Marketing Retail. "
      }
    }
  },
  "551010": {
    "name": "Electric Utilities",
    "code": "551010",
    "parent": {
      "name": "Utilities",
      "code": "5510"
    },
    "children": {
      "55101010": {
        "code": "55101010",
        "name": "Electric Utilities",
        "description": "Companies that produce or distribute electricity. Includes both nuclear and non-nuclear facilities."
      }
    }
  },
  "551020": {
    "name": "Gas Utilities",
    "code": "551020",
    "parent": {
      "name": "Utilities",
      "code": "5510"
    },
    "children": {
      "55102010": {
        "code": "55102010",
        "name": "Gas Utilities",
        "description": "Companies whose main charter is to distribute and transmit natural and manufactured gas. Excludes companies primarily involved in gas exploration or production classified in the Oil & Gas Exploration & Production Sub-Industry. Also excludes companies engaged in thestorage and/or transportation of oil, gas, and/or refined products classified in the Oil & Gas Storage & Transportation Sub-Industry."
      }
    }
  },
  "551030": {
    "name": "Multi-Utilities",
    "code": "551030",
    "parent": {
      "name": "Utilities",
      "code": "5510"
    },
    "children": {
      "55103010": {
        "code": "55103010",
        "name": "Multi-Utilities",
        "description": "Utility companies with significantly diversified activities in addition to core Electric Utility, Gas Utility and/or Water Utility operations."
      }
    }
  },
  "551040": {
    "name": "Water Utilities",
    "code": "551040",
    "parent": {
      "name": "Utilities",
      "code": "5510"
    },
    "children": {
      "55104010": {
        "code": "55104010",
        "name": "Water Utilities",
        "description": "Companies that purchase and redistribute water to the end-consumer. Includes large-scale water treatment systems."
      }
    }
  },
  "551050": {
    "name": "Independent Power and Renewable Electricity Producers",
    "code": "551050",
    "parent": {
      "name": "Utilities",
      "code": "5510"
    },
    "children": {
      "55105010": {
        "code": "55105010",
        "name": "Independent Power Producers & Energy Traders",
        "description": "Companies that operate as Independent Power Producers (IPPs), Gas & Power Marketing & Trading Specialists and/or Integrated Energy Merchants. Excludes producers of electricity using renewable sources, such as solar power, hydropower, and wind power. Also excludes electric transmission companies and utility distribution companies classified in the Electric Utilities Sub-Industry."
      },
      "55105020": {
        "code": "55105020",
        "name": "Renewable Electricity ",
        "description": "Companies that engage in the generation and distribution of electricity using renewable sources, including, but not limited to, companies that produce electricity using biomass, geothermal energy, solar energy, hydropower, and wind power. Excludes companies manufacturing capital equipment used to generate electricity using renewable sources, such as manufacturers of solar power systems, installers of photovoltaic cells, and companies involved in the provision of technology, components, and services mainly to this market. "
      }
    }
  },
  "601010": {
    "name": "Diversified REITs",
    "code": "601010",
    "parent": {
      "name": "Equity Real Estate Investment Trusts (REITs)",
      "code": "6010"
    },
    "children": {
      "60101010": {
        "code": "60101010",
        "name": "Diversified REITs",
        "description": "A company or Trust with significantly diversified operations across two or more property types."
      }
    }
  },
  "601025": {
    "name": "Industrial REITs",
    "code": "601025",
    "parent": {
      "name": "Equity Real Estate Investment Trusts (REITs)",
      "code": "6010"
    },
    "children": {
      "60102510": {
        "code": "60102510",
        "name": "Industrial REITs",
        "description": "Companies or Trusts engaged in the acquisition, development, ownership, leasing, management and operation of industrial properties. Includes companies operating industrial warehouses and distribution properties."
      }
    }
  },
  "601030": {
    "name": "Hotel & Resort REITs",
    "code": "601030",
    "parent": {
      "name": "Equity Real Estate Investment Trusts (REITs)",
      "code": "6010"
    },
    "children": {
      "60103010": {
        "code": "60103010",
        "name": "Hotel & Resort REITs",
        "description": "Companies or Trusts engaged in the acquisition, development, ownership, leasing, management and operation of hotel and resort properties. "
      }
    }
  },
  "601040": {
    "name": "Office REITs",
    "code": "601040",
    "parent": {
      "name": "Equity Real Estate Investment Trusts (REITs)",
      "code": "6010"
    },
    "children": {
      "60104010": {
        "code": "60104010",
        "name": "Office REITs",
        "description": "Companies or Trusts engaged in the acquisition, development, ownership, leasing, management and operation of office properties."
      }
    }
  },
  "601050": {
    "name": "Health Care REITs",
    "code": "601050",
    "parent": {
      "name": "Equity Real Estate Investment Trusts (REITs)",
      "code": "6010"
    },
    "children": {
      "60105010": {
        "code": "60105010",
        "name": "Health Care REITs",
        "description": "Companies or Trusts engaged in the acquisition, development, ownership, leasing, management and operation of properties serving the health care industry, including hospitals, nursing homes, and assisted living properties."
      }
    }
  },
  "601060": {
    "name": "Residential REITs",
    "code": "601060",
    "parent": {
      "name": "Equity Real Estate Investment Trusts (REITs)",
      "code": "6010"
    },
    "children": {
      "60106010": {
        "code": "60106010",
        "name": "Multi-Family Residential REITs",
        "description": "Companies or Trusts engaged in the acquisition, development, ownership, leasing, management and operation of apartments and other multi-family housing including student housing."
      },
      "60106020": {
        "code": "60106020",
        "name": "Single-Family Residential REITs ",
        "description": "Companies or Trusts engaged in the acquisition, development, ownership, leasing, management and operation of single-family residential housing including manufactured homes."
      }
    }
  },
  "601070": {
    "name": "Retail REITs",
    "code": "601070",
    "parent": {
      "name": "Equity Real Estate Investment Trusts (REITs)",
      "code": "6010"
    },
    "children": {
      "60107010": {
        "code": "60107010",
        "name": "Retail REITs",
        "description": "Companies or Trusts engaged in the acquisition, development, ownership, leasing, management and operation of shopping malls, outlet malls, neighborhood and community shopping centers."
      }
    }
  },
  "601080": {
    "name": "Specialized REITs",
    "code": "601080",
    "parent": {
      "name": "Equity Real Estate Investment Trusts (REITs)",
      "code": "6010"
    },
    "children": {
      "60108010": {
        "code": "60108010",
        "name": "Other Specialized REITs",
        "description": "Companies or Trusts engaged in the acquisition, development, ownership, leasing, management and operation of properties not classified elsewhere. This Sub-Industry includes REITs that manage and own properties such as natural gas and crude oil pipelines, gas stations, fiber optic cables, prisons, automobile parking, and automobile dealerships."
      },
      "60108020": {
        "code": "60108020",
        "name": "Self-Storage REITs",
        "description": "Companies or Trusts engaged in the acquisition, development, ownership, leasing, management and operation of self storage properties."
      },
      "60108030": {
        "code": "60108030",
        "name": "Telecom Tower REITs",
        "description": "Companies or Trusts engaged in the acquisition, development, ownership, leasing, management and operation of telecom towers and related structures that support wireless telecommunications."
      },
      "60108040": {
        "code": "60108040",
        "name": "Timber REITs",
        "description": "Companies or Trusts engaged in the acquisition, development, ownership, leasing, management and operation of timberland and timber-related properties."
      },
      "60108050": {
        "code": "60108050",
        "name": "Data Center REITs",
        "description": "Companies or Trusts engaged in the acquisition, development, ownership, leasing, management and operation of data center properties."
      }
    }
  },
  "602010": {
    "name": "Real Estate Management & Development",
    "code": "602010",
    "parent": {
      "name": "Real Estate Management & Development",
      "code": "6020"
    },
    "children": {
      "60201010": {
        "code": "60201010",
        "name": "Diversified Real Estate Activities",
        "description": "Companies engaged in a diverse spectrum of real estate activities including real estate development & sales, real estate management, or real estate services, but with no dominant business line."
      },
      "60201020": {
        "code": "60201020",
        "name": "Real Estate Operating Companies",
        "description": "Companies engaged in operating real estate properties for the purpose of leasing & management."
      },
      "60201030": {
        "code": "60201030",
        "name": "Real Estate Development",
        "description": "Companies that develop real estate and sell the properties after development. Excludes companies classified in the Homebuilding Sub-Industry."
      },
      "60201040": {
        "code": "60201040",
        "name": "Real Estate Services",
        "description": "Real estate service providers such as real estate agents, brokers & real estate appraisers."
      }
    }
  },
  "10101010": {
    "name": "Oil & Gas Drilling",
    "description": "Drilling contractors or owners of drilling rigs that contract their services for drilling wells",
    "code": "10101010",
    "parent": {
      "name": "Energy Equipment & Services",
      "code": "101010"
    }
  },
  "10101020": {
    "name": "Oil & Gas Equipment & Services",
    "description": "Manufacturers of equipment, including drilling rigs and equipment, and providers of supplies and services to companies involved in the drilling, evaluation and completion of oil and gas wells.",
    "code": "10101020",
    "parent": {
      "name": "Energy Equipment & Services",
      "code": "101010"
    }
  },
  "10102010": {
    "name": "Integrated Oil & Gas",
    "description": "Integrated oil companies engaged in the exploration & production of oil and gas, as well as at least one other significant activity in either refining, marketing and transportation, or chemicals.",
    "code": "10102010",
    "parent": {
      "name": "Oil, Gas & Consumable Fuels",
      "code": "101020"
    }
  },
  "10102020": {
    "name": "Oil & Gas Exploration & Production",
    "description": "Companies engaged in the exploration and production of oil and gas not classified elsewhere.",
    "code": "10102020",
    "parent": {
      "name": "Oil, Gas & Consumable Fuels",
      "code": "101020"
    }
  },
  "10102030": {
    "name": "Oil & Gas Refining & Marketing",
    "description": "Companies engaged in the refining and marketing of oil, gas and/or refined products not classified in the Integrated Oil & Gas or Independent Power Producers & Energy Traders Sub-Industries.",
    "code": "10102030",
    "parent": {
      "name": "Oil, Gas & Consumable Fuels",
      "code": "101020"
    }
  },
  "10102040": {
    "name": "Oil & Gas Storage & Transportation",
    "description": "Companies engaged in the storage and/or transportation of oil, gas and/or refined products. Includes diversified midstream natural gas companies, oil and refined product pipelines, coal slurry pipelines and oil & gas shipping companies.",
    "code": "10102040",
    "parent": {
      "name": "Oil, Gas & Consumable Fuels",
      "code": "101020"
    }
  },
  "10102050": {
    "name": "Coal & Consumable Fuels",
    "description": "Companies primarily involved in the production and mining of coal, related products and other consumable fuels related to the generation of energy. Excludes companies primarily producing gases classified in the Industrial Gases sub-industry and companies primarily mining for metallurgical (coking) coal used for steel production.",
    "code": "10102050",
    "parent": {
      "name": "Oil, Gas & Consumable Fuels",
      "code": "101020"
    }
  },
  "15101010": {
    "name": "Commodity Chemicals",
    "description": "Companies that primarily produce industrial chemicals and basic chemicals. Including but not limited to plastics, synthetic fibers, films, commodity-based paints & pigments, explosives and petrochemicals. Excludes chemicalcompanies classified in the Diversified Chemicals, Fertilizers & Agricultural Chemicals, Industrial Gases, or Specialty Chemicals Sub-Industries.",
    "code": "15101010",
    "parent": {
      "name": "Chemicals",
      "code": "151010"
    }
  },
  "15101020": {
    "name": "Diversified Chemicals",
    "description": "Manufacturers of a diversified range of chemical products not classified in the Industrial Gases, Commodity Chemicals, Specialty Chemicals or Fertilizers & Agricultural Chemicals Sub-Industries.",
    "code": "15101020",
    "parent": {
      "name": "Chemicals",
      "code": "151010"
    }
  },
  "15101030": {
    "name": "Fertilizers & Agricultural Chemicals",
    "description": "Producers of fertilizers, pesticides, potash or other agriculture-related chemicals not classified elsewhere.",
    "code": "15101030",
    "parent": {
      "name": "Chemicals",
      "code": "151010"
    }
  },
  "15101040": {
    "name": "Industrial Gases",
    "description": "Manufacturers of industrial gases.",
    "code": "15101040",
    "parent": {
      "name": "Chemicals",
      "code": "151010"
    }
  },
  "15101050": {
    "name": "Specialty Chemicals",
    "description": "Companies that primarily produce high value-added chemicals used in the manufacture of a wide variety of products, including but not limited to fine chemicals, additives, advanced polymers, adhesives, sealants and specialty paints, pigments and coatings.",
    "code": "15101050",
    "parent": {
      "name": "Chemicals",
      "code": "151010"
    }
  },
  "15102010": {
    "name": "Construction Materials",
    "description": "Manufacturers of construction materials including sand, clay, gypsum, lime, aggregates, cement, concrete and bricks. Other finished or semi-finished building materials are classified in the Building Products Sub-Industry.",
    "code": "15102010",
    "parent": {
      "name": "Construction Materials",
      "code": "151020"
    }
  },
  "15103010": {
    "name": "Metal, Glass & Plastic Containers ",
    "description": "Manufacturers of metal, glass or plastic containers. Includes corks and caps.",
    "code": "15103010",
    "parent": {
      "name": "Containers & Packaging",
      "code": "151030"
    }
  },
  "15103020": {
    "name": "Paper & Plastic Packaging Products & Materials",
    "description": "Manufacturers of paper and cardboard containers and packaging.",
    "code": "15103020",
    "parent": {
      "name": "Containers & Packaging",
      "code": "151030"
    }
  },
  "15104010": {
    "name": "Aluminum",
    "description": "Producers of aluminum and related products, including companies that mine or process bauxite and companies that recycle aluminum to produce finished or semi-finished products. Excludes companies that primarily produce aluminum building materials classified in the Building Products Sub-Industry.",
    "code": "15104010",
    "parent": {
      "name": "Metals & Mining",
      "code": "151040"
    }
  },
  "15104020": {
    "name": "Diversified Metals & Mining",
    "description": "Companies engaged in the diversified production or extraction of metals and minerals not classified elsewhere. Including, but not limited to, nonferrous metal mining (except bauxite), salt and borate mining, phosphate rock mining, and diversified mining operations. Excludes iron ore mining, classified in the Steel Sub-Industry, bauxite mining, classified in the Aluminum Sub-Industry, and coal mining, classified in either the Steel or Coal & Consumable Fuels Sub-Industries.",
    "code": "15104020",
    "parent": {
      "name": "Metals & Mining",
      "code": "151040"
    }
  },
  "15104025": {
    "name": "Copper",
    "description": "Companies involved primarily in copper ore mining. ",
    "code": "15104025",
    "parent": {
      "name": "Metals & Mining",
      "code": "151040"
    }
  },
  "15104030": {
    "name": "Gold",
    "description": "Producers of gold and related products, including companies that mine or process gold and the South African finance houses which primarily invest in, but do not operate, gold mines.",
    "code": "15104030",
    "parent": {
      "name": "Metals & Mining",
      "code": "151040"
    }
  },
  "15104040": {
    "name": "Precious Metals & Minerals",
    "description": "Companies mining precious metals and minerals not classified in the Gold Sub-Industry. Includes companies primarily mining platinum.",
    "code": "15104040",
    "parent": {
      "name": "Metals & Mining",
      "code": "151040"
    }
  },
  "15104045": {
    "name": "Silver",
    "description": "Companies primarily mining silver. Excludes companies classified in the Gold or Precious Metals & Minerals Sub-Industries.",
    "code": "15104045",
    "parent": {
      "name": "Metals & Mining",
      "code": "151040"
    }
  },
  "15104050": {
    "name": "Steel",
    "description": "Producers of iron and steel and related products, including metallurgical (coking) coal mining used for steel production.",
    "code": "15104050",
    "parent": {
      "name": "Metals & Mining",
      "code": "151040"
    }
  },
  "15105010": {
    "name": "Forest Products",
    "description": "Manufacturers of timber and related wood products. Includes lumber for the building industry.",
    "code": "15105010",
    "parent": {
      "name": "Paper & Forest Products",
      "code": "151050"
    }
  },
  "15105020": {
    "name": "Paper Products",
    "description": "Manufacturersof all grades of paper. Excludes companies specializing in paper packaging classified in the Paper Packaging Sub-Industry.",
    "code": "15105020",
    "parent": {
      "name": "Paper & Forest Products",
      "code": "151050"
    }
  },
  "20101010": {
    "name": "Aerospace & Defense",
    "description": "Manufacturers of civil or military aerospace and defense equipment, parts or products. Includes defense electronics and space equipment.",
    "code": "20101010",
    "parent": {
      "name": "Aerospace & Defense",
      "code": "201010"
    }
  },
  "20102010": {
    "name": "Building Products",
    "description": "Manufacturers of building components and home improvement products and equipment. Excludes lumber and plywood classified under Forest Products and cement and other materials classified in the Construction Materials Sub-Industry.",
    "code": "20102010",
    "parent": {
      "name": "Building Products",
      "code": "201020"
    }
  },
  "20103010": {
    "name": "Construction & Engineering",
    "description": "Companies engaged in primarily non-residential construction. Includes civil engineering companies and large-scale contractors. Excludes companies classified in the Homebuilding Sub-Industry.",
    "code": "20103010",
    "parent": {
      "name": "Construction & Engineering",
      "code": "201030"
    }
  },
  "20104010": {
    "name": "Electrical Components & Equipment",
    "description": "Companies that produce electric cables and wires, electrical components or equipment not classified in the Heavy Electrical Equipment Sub-Industry.",
    "code": "20104010",
    "parent": {
      "name": "Electrical Equipment",
      "code": "201040"
    }
  },
  "20104020": {
    "name": "Heavy Electrical Equipment",
    "description": "Manufacturers of power-generating equipment and other heavy electrical equipment, including power turbines, heavy electrical machinery intended for fixed-use and large electrical systems. Excludes cables and wires, classified in the Electrical Components & Equipment Sub-Industry.",
    "code": "20104020",
    "parent": {
      "name": "Electrical Equipment",
      "code": "201040"
    }
  },
  "20105010": {
    "name": "Industrial Conglomerates",
    "description": "Diversified industrial companies with business activities in three or more sectors, none of which contributes a majority of revenues. Stakes held are predominantly of a controlling nature and stake holders maintain an operational interest in the running of the subsidiaries.",
    "code": "20105010",
    "parent": {
      "name": "Industrial Conglomerates",
      "code": "201050"
    }
  },
  "20106010": {
    "name": "Construction Machinery & Heavy Transportation Equipment",
    "description": "Manufacturers of heavy duty trucks, rolling machinery, earth-moving and construction equipment, and manufacturers of related parts. Includes non-military shipbuilding.",
    "code": "20106010",
    "parent": {
      "name": "Machinery",
      "code": "201060"
    }
  },
  "20106015": {
    "name": "Agricultural & Farm Machinery",
    "description": "Companies manufacturing agricultural machinery, farm machinery, and their related parts. Includes machinery used for the production of crops and agricultural livestock, agricultural tractors, planting and fertilizing machinery, fertilizer and chemical application equipment, and grain dryers and blowers.",
    "code": "20106015",
    "parent": {
      "name": "Machinery",
      "code": "201060"
    }
  },
  "20106020": {
    "name": "Industrial Machinery & Supplies & Components",
    "description": "Manufacturers of industrial machinery and industrial components. Includes companies that manufacture presses, machine tools, compressors, pollution control equipment, elevators, escalators, insulators, pumps, roller bearings and other metal fabrications.",
    "code": "20106020",
    "parent": {
      "name": "Machinery",
      "code": "201060"
    }
  },
  "20107010": {
    "name": "Trading Companies & Distributors",
    "description": "Trading companies and other distributors of industrial equipment and products.",
    "code": "20107010",
    "parent": {
      "name": "Trading Companies & Distributors",
      "code": "201070"
    }
  },
  "20201010": {
    "name": "Commercial Printing",
    "description": "Companies providing commercial printing services. Includes printers primarily serving the media industry.",
    "code": "20201010",
    "parent": {
      "name": "Commercial Services & Supplies",
      "code": "202010"
    }
  },
  "20201050": {
    "name": "Environmental & Facilities Services",
    "description": "Companies providing environmental and facilities maintenance services. Includes waste management, facilities management and pollution control services. Excludes large-scale water treatment systems classified in the Water Utilities Sub-Industry.",
    "code": "20201050",
    "parent": {
      "name": "Commercial Services & Supplies",
      "code": "202010"
    }
  },
  "20201060": {
    "name": "Office Services & Supplies",
    "description": "Providers of office services and manufacturers of office supplies and equipment not classified elsewhere.",
    "code": "20201060",
    "parent": {
      "name": "Commercial Services & Supplies",
      "code": "202010"
    }
  },
  "20201070": {
    "name": "Diversified Support Services",
    "description": "Companies primarily providing labor oriented support services to businesses and governments. Includes commercial cleaning services, dining & catering services, equipment repair services, industrial maintenance services, industrial auctioneers, storage & warehousing, transaction services, uniform rental services, and other business support services.",
    "code": "20201070",
    "parent": {
      "name": "Commercial Services & Supplies",
      "code": "202010"
    }
  },
  "20201080": {
    "name": "Security & Alarm Services",
    "description": "Companies providing security and protection services to business and governments. Includes companies providing services such as correctional facilities, security & alarm services, armored transportation & guarding. Excludes companies providing security software classified under the Systems Software Sub-Industry and home security services classified under the Specialized Consumer Services Sub-Industry. Also excludes companies manufacturing security system equipment classified under the Electronic Equipment & Instruments Sub-Industry. ",
    "code": "20201080",
    "parent": {
      "name": "Commercial Services & Supplies",
      "code": "202010"
    }
  },
  "20202010": {
    "name": "Human Resource & Employment Services",
    "description": "Companies providing business support services relating to human capital management. This Sub-Industry includes employment agencies, employee training, payroll processing, benefit & retirement support services, corporate & job seeker recruitment services, and online job portals generating revenue from fees or commissions for offering recruitment services to companies or job seekers.",
    "code": "20202010",
    "parent": {
      "name": "Professional Services",
      "code": "202020"
    }
  },
  "20202020": {
    "name": "Research & Consulting Services",
    "description": "Companies primarily providing research and consulting services to businesses and governments not classified elsewhere. Includes companies involved in management consulting services, architectural design, business information or scientific research, marketing, and testing & certification services. Excludes companies providing information technology consulting services classified in the IT Consulting & Other Services Sub-Industry.",
    "code": "20202020",
    "parent": {
      "name": "Professional Services",
      "code": "202020"
    }
  },
  "20202030": {
    "name": "Data Processing & Outsourced Services ",
    "description": "Providers of commercial data processing and/or business process outsourcing services. This Sub-Industry includes companies providing services for customer experience management, back-office automation, call center management, and investor communications.",
    "code": "20202030",
    "parent": {
      "name": "Professional Services",
      "code": "202020"
    }
  },
  "20301010": {
    "name": "Air Freight & Logistics",
    "description": "Companies providing air freight transportation, courier and logistics services, including package and mail delivery and customs agents. Excludes those companies classified in the Airlines, Marine or Trucking Sub-Industries.",
    "code": "20301010",
    "parent": {
      "name": "Air Freight & Logistics",
      "code": "203010"
    }
  },
  "20302010": {
    "name": "Passenger Airlines",
    "description": "Companies providing primarily passenger air transportation.",
    "code": "20302010",
    "parent": {
      "name": "Passenger Airlines",
      "code": "203020"
    }
  },
  "20303010": {
    "name": "Marine Transportation",
    "description": "Companies providing goods or passenger maritime transportation. Excludes cruise-ships classified in the Hotels, Resorts & Cruise Lines Sub-Industry.",
    "code": "20303010",
    "parent": {
      "name": "Marine Transportation",
      "code": "203030"
    }
  },
  "20304010": {
    "name": "Rail Transportation",
    "description": "Companies providing primarily goods and passenger rail transportation.",
    "code": "20304010",
    "parent": {
      "name": "Ground Transportation",
      "code": "203040"
    }
  },
  "20304030": {
    "name": "Cargo Ground Transportation ",
    "description": "Companies providing ground transportation services for goods and freight.",
    "code": "20304030",
    "parent": {
      "name": "Ground Transportation",
      "code": "203040"
    }
  },
  "20304040": {
    "name": "Passenger Ground Transportation",
    "description": "Companies providing passenger ground transportation and related services, including bus, taxi, vehicle rental, ride sharing and on-demand ride sharing platforms, and other passenger logistics.",
    "code": "20304040",
    "parent": {
      "name": "Ground Transportation",
      "code": "203040"
    }
  },
  "20305010": {
    "name": "Airport Services",
    "description": "Operators of airports and companies providing related services.",
    "code": "20305010",
    "parent": {
      "name": "Transportation Infrastructure",
      "code": "203050"
    }
  },
  "20305020": {
    "name": "Highways & Railtracks",
    "description": "Owners and operators of roads, tunnels and railtracks.",
    "code": "20305020",
    "parent": {
      "name": "Transportation Infrastructure",
      "code": "203050"
    }
  },
  "20305030": {
    "name": "Marine Ports & Services",
    "description": "Owners and operators of marine ports and related services.",
    "code": "20305030",
    "parent": {
      "name": "Transportation Infrastructure",
      "code": "203050"
    }
  },
  "25101010": {
    "name": "Automotive Parts & Equipment ",
    "description": "Manufacturers of parts and accessories for automobiles and motorcycles. Excludes companies classified in the Tires & Rubber Sub-Industry.",
    "code": "25101010",
    "parent": {
      "name": "Automobile Components",
      "code": "251010"
    }
  },
  "25101020": {
    "name": "Tires & Rubber",
    "description": "Manufacturers of tires and rubber.",
    "code": "25101020",
    "parent": {
      "name": "Automobile Components",
      "code": "251010"
    }
  },
  "25102010": {
    "name": "Automobile Manufacturers",
    "description": "Companies that produce mainly passenger automobiles and light trucks. Excludes companies producing mainly motorcycles and three-wheelers classified in the Motorcycle Manufacturers Sub-Industry and heavy duty trucks classified in the Construction Machinery & Heavy Trucks Sub-Industry.",
    "code": "25102010",
    "parent": {
      "name": "Automobiles",
      "code": "251020"
    }
  },
  "25102020": {
    "name": "Motorcycle Manufacturers",
    "description": "Companies that produce motorcycles, scooters or three-wheelers. Excludes bicycles classified in the Leisure Products Sub-Industry. ",
    "code": "25102020",
    "parent": {
      "name": "Automobiles",
      "code": "251020"
    }
  },
  "25201010": {
    "name": "Consumer Electronics",
    "description": "Manufacturers of consumer electronics products including TVs, home audio equipment, game consoles, digital cameras, and related products. Excludes personal home computer manufacturers classified in the Technology Hardware, Storage & Peripherals Sub-Industry, and electric household appliances classified in the Household Appliances Sub-Industry.",
    "code": "25201010",
    "parent": {
      "name": "Household Durables",
      "code": "252010"
    }
  },
  "25201020": {
    "name": "Home Furnishings",
    "description": "Manufacturers of soft home furnishings or furniture, including upholstery, carpets and wall-coverings.",
    "code": "25201020",
    "parent": {
      "name": "Household Durables",
      "code": "252010"
    }
  },
  "25201030": {
    "name": "Homebuilding",
    "description": "Residential construction companies. Includes manufacturers of prefabricated houses and semi-fixed manufactured homes.",
    "code": "25201030",
    "parent": {
      "name": "Household Durables",
      "code": "252010"
    }
  },
  "25201040": {
    "name": "Household Appliances",
    "description": "Manufacturers of electric household appliances and related products. Includes manufacturers of power and hand tools, including garden improvement tools. Excludes TVs and other audio and video products classified in the Consumer Electronics Sub-Industry and personal computers classified in the Technology Hardware, Storage & Peripherals Sub-Industry.",
    "code": "25201040",
    "parent": {
      "name": "Household Durables",
      "code": "252010"
    }
  },
  "25201050": {
    "name": "Housewares & Specialties",
    "description": "Manufacturers of durable household products, including cutlery, cookware, glassware, crystal, silverware, utensils, kitchenware and consumer specialties not classified elsewhere.",
    "code": "25201050",
    "parent": {
      "name": "Household Durables",
      "code": "252010"
    }
  },
  "25202010": {
    "name": "Leisure Products",
    "description": "Manufacturers of leisure products and equipment includingsports equipment, bicycles and toys.",
    "code": "25202010",
    "parent": {
      "name": "Leisure Products",
      "code": "252020"
    }
  },
  "25203010": {
    "name": "Apparel, Accessories & Luxury Goods",
    "description": "Manufacturers of apparel, accessories & luxury goods. Includes companies primarily producing designer handbags, wallets, luggage, jewelry and watches. Excludes shoes classified in the Footwear Sub-Industry.",
    "code": "25203010",
    "parent": {
      "name": "Textiles, Apparel & Luxury Goods",
      "code": "252030"
    }
  },
  "25203020": {
    "name": "Footwear",
    "description": "Manufacturers of footwear. Includes sport and leather shoes.",
    "code": "25203020",
    "parent": {
      "name": "Textiles, Apparel & Luxury Goods",
      "code": "252030"
    }
  },
  "25203030": {
    "name": "Textiles",
    "description": "Manufacturers of textile and related products not classified in the Apparel, Accessories & Luxury Goods, Footwear or Home Furnishings Sub-Industries.",
    "code": "25203030",
    "parent": {
      "name": "Textiles, Apparel & Luxury Goods",
      "code": "252030"
    }
  },
  "25301010": {
    "name": "Casinos & Gaming",
    "description": "Owners and operators of casinos and gaming facilities. Includes companies providing lottery and betting services.",
    "code": "25301010",
    "parent": {
      "name": "Hotels, Restaurants & Leisure",
      "code": "253010"
    }
  },
  "25301020": {
    "name": "Hotels, Resorts & Cruise Lines",
    "description": "Owners and operators of hotels, resorts and cruise-ships. Includes travel agencies, tour operators and related services not classified elsewhere . Excludes casino-hotels classified in the Casinos & Gaming Sub-Industry.",
    "code": "25301020",
    "parent": {
      "name": "Hotels, Restaurants & Leisure",
      "code": "253010"
    }
  },
  "25301030": {
    "name": "Leisure Facilities",
    "description": "Owners and operators of leisure facilities, including sport and fitness centers, stadiums, golf courses and amusement parks not classified in the Movies & Entertainment Sub-Industry.",
    "code": "25301030",
    "parent": {
      "name": "Hotels, Restaurants & Leisure",
      "code": "253010"
    }
  },
  "25301040": {
    "name": "Restaurants",
    "description": "Owners and operators of restaurants, bars, pubs, fast-food or take-out facilities. Includes companies that provide food catering services.",
    "code": "25301040",
    "parent": {
      "name": "Hotels, Restaurants & Leisure",
      "code": "253010"
    }
  },
  "25302010": {
    "name": "Education Services",
    "description": "Companies providing educational services, either on-line or through conventional teaching methods. Includes, private universities, correspondence teaching, providers of educational seminars, educational materials and technical education. Excludes companies providing employee education programs classified in the Human Resources & Employment Services Sub-Industry",
    "code": "25302010",
    "parent": {
      "name": "Diversified Consumer Services",
      "code": "253020"
    }
  },
  "25302020": {
    "name": "Specialized Consumer Services",
    "description": "Companies providing consumer services not classified elsewhere. Includes residential services, home security, legal services, personal services, renovation & interior design services, consumer auctions and wedding & funeral services.",
    "code": "25302020",
    "parent": {
      "name": "Diversified Consumer Services",
      "code": "253020"
    }
  },
  "25501010": {
    "name": "Distributors",
    "description": "Distributors and wholesalers of general merchandise not classified elsewhere. Includes vehicle distributors.",
    "code": "25501010",
    "parent": {
      "name": "Distributors",
      "code": "255010"
    }
  },
  "25503030": {
    "name": "Broadline Retail",
    "description": "Retailers offering a wide range of consumer discretionary merchandise. This Sub-Industry includes general and discount merchandise retailers, department stores and on-line retailers and marketplaces selling mostly consumer discretionary merchandise.",
    "code": "25503030",
    "parent": {
      "name": "Broadline Retail",
      "code": "255030"
    }
  },
  "25504010": {
    "name": "Apparel Retail",
    "description": "Retailers specialized mainly in apparel and accessories.",
    "code": "25504010",
    "parent": {
      "name": "Specialty Retail",
      "code": "255040"
    }
  },
  "25504020": {
    "name": "Computer &Electronics Retail",
    "description": "Owners and operators of consumer electronics, computers, video and related products retail stores.",
    "code": "25504020",
    "parent": {
      "name": "Specialty Retail",
      "code": "255040"
    }
  },
  "25504030": {
    "name": "Home Improvement Retail",
    "description": "Owners and operators of home and garden improvement retail stores. Includes stores offering building materials and supplies.",
    "code": "25504030",
    "parent": {
      "name": "Specialty Retail",
      "code": "255040"
    }
  },
  "25504040": {
    "name": "Other Specialty Retail",
    "description": "Owners and operators of specialty retail stores not classified elsewhere. Includes jewelry stores, toy stores, office supply stores, health & vision care stores, and book & entertainment stores.",
    "code": "25504040",
    "parent": {
      "name": "Specialty Retail",
      "code": "255040"
    }
  },
  "25504050": {
    "name": "Automotive Retail",
    "description": "Ownersand operators of stores specializing in automotive retail. Includes auto dealers, gas stations, and retailers of auto accessories, motorcycles & parts, automotive glass, and automotive equipment & parts.",
    "code": "25504050",
    "parent": {
      "name": "Specialty Retail",
      "code": "255040"
    }
  },
  "25504060": {
    "name": "Homefurnishing Retail",
    "description": "Owners and operators of furniture and home furnishings retail stores. Includes residential furniture, homefurnishings, housewares, and interior design. Excludes home and garden improvement stores, classified in the Home Improvement Retail Sub-Industry.",
    "code": "25504060",
    "parent": {
      "name": "Specialty Retail",
      "code": "255040"
    }
  },
  "30101010": {
    "name": "Drug Retail",
    "description": "Owners and operators of primarily drug retail stores and pharmacies.",
    "code": "30101010",
    "parent": {
      "name": "Consumer Staples Distribution & Retail",
      "code": "301010"
    }
  },
  "30101020": {
    "name": "Food Distributors",
    "description": "Distributors of food products to other companies and not directly to the consumer.",
    "code": "30101020",
    "parent": {
      "name": "Consumer Staples Distribution & Retail",
      "code": "301010"
    }
  },
  "30101030": {
    "name": "Food Retail",
    "description": "Owners and operators of primarily food retail stores.",
    "code": "30101030",
    "parent": {
      "name": "Consumer Staples Distribution & Retail",
      "code": "301010"
    }
  },
  "30101040": {
    "name": "Consumer Staples Merchandise Retail ",
    "description": "Retailers offering a wide range of consumer staples merchandise such as food, household, and personal care products. This Sub-Industry includes hypermarkets, super centers and other consumer staples retailers such as discount retail spaces and on-line marketplaces selling mostly consumer staples goods.",
    "code": "30101040",
    "parent": {
      "name": "Consumer Staples Distribution & Retail",
      "code": "301010"
    }
  },
  "30201010": {
    "name": "Brewers",
    "description": "Producers of beer and malt liquors. Includes breweries not classified in the Restaurants Sub-Industry.",
    "code": "30201010",
    "parent": {
      "name": "Beverages",
      "code": "302010"
    }
  },
  "30201020": {
    "name": "Distillers & Vintners",
    "description": "Distillers, vintners and producers of alcoholic beverages not classified in the Brewers Sub-Industry.",
    "code": "30201020",
    "parent": {
      "name": "Beverages",
      "code": "302010"
    }
  },
  "30201030": {
    "name": "Soft Drinks & Non-alcoholic Beverages",
    "description": "Producers of non-alcoholic beverages including mineral waters. Excludes producers of milk classified in the Packaged Foods Sub-Industry.",
    "code": "30201030",
    "parent": {
      "name": "Beverages",
      "code": "302010"
    }
  },
  "30202010": {
    "name": "Agricultural Products & Services",
    "description": "Producers of agricultural products. Includes crop growers, owners of plantations and companies that produce and process foods but do not package and market them. Excludescompanies classified in the Forest Products Sub-Industry and those that package and market the food products classified in the Packaged Foods Sub-Industry.",
    "code": "30202010",
    "parent": {
      "name": "Food Products",
      "code": "302020"
    }
  },
  "30202030": {
    "name": "Packaged Foods & Meats",
    "description": "Producers of packaged foods including dairy products, fruit juices, meats, poultry, fish and pet foods.",
    "code": "30202030",
    "parent": {
      "name": "Food Products",
      "code": "302020"
    }
  },
  "30203010": {
    "name": "Tobacco",
    "description": "Manufacturers of cigarettes and other tobacco products.",
    "code": "30203010",
    "parent": {
      "name": "Tobacco",
      "code": "302030"
    }
  },
  "30301010": {
    "name": "Household Products",
    "description": "Producers of non-durable household products, including detergents, soaps, diapers and other tissue and household paper products not classified in the Paper Products Sub-Industry.",
    "code": "30301010",
    "parent": {
      "name": "Household Products",
      "code": "303010"
    }
  },
  "30302010": {
    "name": "Personal Care Products ",
    "description": "Manufacturers of personal and beauty care products, including cosmetics and perfumes.",
    "code": "30302010",
    "parent": {
      "name": "Personal Care Products",
      "code": "303020"
    }
  },
  "35101010": {
    "name": "Health Care Equipment",
    "description": "Manufacturers of health care equipment and devices. Includes medical instruments, drug delivery systems, cardiovascular & orthopedic devices, and diagnostic equipment.",
    "code": "35101010",
    "parent": {
      "name": "Health Care Equipment & Supplies",
      "code": "351010"
    }
  },
  "35101020": {
    "name": "Health Care Supplies",
    "description": "Manufacturers of health care supplies and medical products not classified elsewhere. Includes eye care products, hospital supplies, and safety needle & syringe devices.",
    "code": "35101020",
    "parent": {
      "name": "Health Care Equipment & Supplies",
      "code": "351010"
    }
  },
  "35102010": {
    "name": "Health Care Distributors",
    "description": "Distributors and wholesalers of health care products not classified elsewhere. ",
    "code": "35102010",
    "parent": {
      "name": "Health Care Providers & Services",
      "code": "351020"
    }
  },
  "35102015": {
    "name": "Health Care Services",
    "description": "Providers of patient health care services not classified elsewhere. Includes dialysis centers, lab testing services, and pharmacy management services. Also includes companies providing business support services to health care providers, such as clerical support services, collection agency services, staffing services and outsourced sales & marketing services",
    "code": "35102015",
    "parent": {
      "name": "Health Care Providers & Services",
      "code": "351020"
    }
  },
  "35102020": {
    "name": "Health Care Facilities",
    "description": "Owners and operatorsof health care facilities, including hospitals, nursing homes, rehabilitation centers and animal hospitals.",
    "code": "35102020",
    "parent": {
      "name": "Health Care Providers & Services",
      "code": "351020"
    }
  },
  "35102030": {
    "name": "Managed Health Care",
    "description": "Owners and operators of Health Maintenance Organizations (HMOs) and other managed plans.",
    "code": "35102030",
    "parent": {
      "name": "Health Care Providers & Services",
      "code": "351020"
    }
  },
  "35103010": {
    "name": "Health Care Technology",
    "description": "Companies providing information technology services primarily to health care providers. Includes companies providing application, systems and/or data processing software, internet-based tools, and IT consulting services to doctors, hospitals or businesses operating primarily in the Health Care Sector",
    "code": "35103010",
    "parent": {
      "name": "Health Care Technology",
      "code": "351030"
    }
  },
  "35201010": {
    "name": "Biotechnology",
    "description": "Companies primarily engaged in the research, development, manufacturing and/or marketing of products based on genetic analysis and genetic engineering. Includes companies specializing in protein-based therapeutics to treat human diseases. Excludes companies manufacturing products using biotechnology but without a health care application.",
    "code": "35201010",
    "parent": {
      "name": "Biotechnology",
      "code": "352010"
    }
  },
  "35202010": {
    "name": "Pharmaceuticals",
    "description": "Companies engaged in the research, development or production of pharmaceuticals. Includes veterinary drugs.",
    "code": "35202010",
    "parent": {
      "name": "Pharmaceuticals",
      "code": "352020"
    }
  },
  "35203010": {
    "name": "Life Sciences Tools & Services",
    "description": "Companies enabling the drug discovery, development and production continuum by providing analytical tools, instruments, consumables & supplies, clinical trial services and contract research services. Includes firms primarily servicing the pharmaceutical and biotechnology industries.",
    "code": "35203010",
    "parent": {
      "name": "Life Sciences Tools & Services",
      "code": "352030"
    }
  },
  "40101010": {
    "name": "Diversified Banks",
    "description": "Large, geographically diverse banks with a national footprint whose revenues are derived primarily from conventional banking operations, have significant business activity in retail banking and small and medium corporate lending, and provide a diverse range of financial services. Excludes banks classified in the Regional Banks and Thrifts & Mortgage Finance Sub-Industries. Also excludes investment banks classified in the Investment Banking & Brokerage Sub-Industry.",
    "code": "40101010",
    "parent": {
      "name": "Banks",
      "code": "401010"
    }
  },
  "40101015": {
    "name": "Regional Banks",
    "description": "Commercial banks, savings banks and thrifts whose business are derived primarily from conventional banking operations such as retail banking, corporate lending and originating various residential and commercial mortgage loans funded mainly through deposits. Regional banks tend to operate in limited geographic regions. Excludes companies classified in the Diversified Banks and Commercial & Residential Mortgage Finance Sub-Industries. Also excludes investment banks classified in the Investment Banking & Brokerage Sub-Industry.",
    "code": "40101015",
    "parent": {
      "name": "Banks",
      "code": "401010"
    }
  },
  "40201020": {
    "name": "Diversified Financial Services",
    "description": "Providers of a diverse range of financial services and/or with some interest in a wide range of financial services including banking, insurance and capital markets, but with no dominant business line. Excludes companies classified in the Regional Banks and Diversified Banks Sub-Industries.",
    "code": "40201020",
    "parent": {
      "name": "Financial Services",
      "code": "402010"
    }
  },
  "40201030": {
    "name": "Multi-Sector Holdings",
    "description": "A company with significantly diversified holdings across three or more sectors, none of which contributes a majority of profit and/or sales. Stakes held are predominantly of a non-controlling nature. Includes diversified financial companies where stakes held are of a controlling nature. Excludes other diversified companies classified in the Industrials Conglomerates Sub-Industry.",
    "code": "40201030",
    "parent": {
      "name": "Financial Services",
      "code": "402010"
    }
  },
  "40201040": {
    "name": "Specialized Finance",
    "description": "Providers of specialized financial services not classified elsewhere. Companies in this sub-industry derive a majority of revenue from one specialized line of business. \nIncludes, but not limited to, commercial financing companies, central banks, leasing institutions, factoring services, and specialty boutiques. Excludes companies classified in the Financial Exchanges & Data sub-industry.",
    "code": "40201040",
    "parent": {
      "name": "Financial Services",
      "code": "402010"
    }
  },
  "40201050": {
    "name": "Commercial & Residential Mortgage Finance ",
    "description": "Financial companies providing commercial and residential mortgage financing and related mortgage services. This Sub-Industry includes non-deposit funded mortgage lending institutions, building societies, companies providing real estate financing products, loan servicing, mortgage broker services, and mortgage insurance. ",
    "code": "40201050",
    "parent": {
      "name": "Financial Services",
      "code": "402010"
    }
  },
  "40201060": {
    "name": "Transaction & Payment Processing Services ",
    "description": "Providers of transaction & payment processing services and related payment services including digital/mobile payment processors, payment service providers & gateways, and digital wallet providers.",
    "code": "40201060",
    "parent": {
      "name": "Financial Services",
      "code": "402010"
    }
  },
  "40202010": {
    "name": "Consumer Finance",
    "description": "Providers of consumer finance services, including personal credit, credit cards, lease financing, travel-related money services and pawn shops. Excludes mortgage lenders classified in the Thrifts & Mortgage Finance Sub-Industry.",
    "code": "40202010",
    "parent": {
      "name": "Consumer Finance",
      "code": "402020"
    }
  },
  "40203010": {
    "name": "Asset Management & Custody Banks",
    "description": "Financial institutions primarily engaged in investment management and/or related custody and securities fee-based services. Includes companies operating mutual funds, closed-end funds and unit investment trusts. Excludes banks and other financial institutions primarily involved in commercial lending, investment banking, brokerage and other specialized financial activities. ",
    "code": "40203010",
    "parent": {
      "name": "Capital Markets",
      "code": "402030"
    }
  },
  "40203020": {
    "name": "Investment Banking & Brokerage",
    "description": "Financial institutions primarily engaged in investment banking & brokerage services, including equity and debt underwriting, mergers and acquisitions, securities lending and advisory services. Excludes banks and other financial institutions primarily involved in commercial lending, asset management and specialized financial activities. ",
    "code": "40203020",
    "parent": {
      "name": "Capital Markets",
      "code": "402030"
    }
  },
  "40203030": {
    "name": "Diversified Capital Markets",
    "description": "Financial institutions primarily engaged in diversified capital markets activities, including a significant presence in at least two of the following area: large/major corporate lending, investment banking, brokerage and asset management. Excludes less diversified companies classified in the Asset Management& Custody Banks or Investment Banking & Brokerage sub-industries. Also excludes companies classified in the Banks or Insurance industry groups or the Consumer Finance Sub-Industry. ",
    "code": "40203030",
    "parent": {
      "name": "Capital Markets",
      "code": "402030"
    }
  },
  "40203040": {
    "name": "Financial Exchanges & Data",
    "description": "Financial exchanges for securities, commodities, derivatives and other financial instruments, and providers of financial decision support tools and products including ratings agencies",
    "code": "40203040",
    "parent": {
      "name": "Capital Markets",
      "code": "402030"
    }
  },
  "40204010": {
    "name": "Mortgage REITs",
    "description": "Companies or Trusts that service, originate, purchase and/or securitize residential and/or commercial mortgage loans. Includes trusts that invest in mortgage-backed securities and other mortgage related assets.",
    "code": "40204010",
    "parent": {
      "name": "Mortgage Real Estate Investment \nTrusts (REITs)",
      "code": "402040"
    }
  },
  "40301010": {
    "name": "Insurance Brokers",
    "description": "Insurance and reinsurance brokerage firms.",
    "code": "40301010",
    "parent": {
      "name": "Insurance",
      "code": "403010"
    }
  },
  "40301020": {
    "name": "Life & Health Insurance",
    "description": "Companies providing primarily life, disability, indemnity or supplemental health insurance. Excludes managed care companies classified in the Managed Health Care Sub-Industry.",
    "code": "40301020",
    "parent": {
      "name": "Insurance",
      "code": "403010"
    }
  },
  "40301030": {
    "name": "Multi-line Insurance",
    "description": "Insurance companies with diversified interests in life, health and property and casualty insurance.",
    "code": "40301030",
    "parent": {
      "name": "Insurance",
      "code": "403010"
    }
  },
  "40301040": {
    "name": "Property & Casualty Insurance",
    "description": "Companies providing primarily property and casualty insurance.",
    "code": "40301040",
    "parent": {
      "name": "Insurance",
      "code": "403010"
    }
  },
  "40301050": {
    "name": "Reinsurance",
    "description": "Companies providing primarily reinsurance.",
    "code": "40301050",
    "parent": {
      "name": "Insurance",
      "code": "403010"
    }
  },
  "45102010": {
    "name": "IT Consulting & Other Services",
    "description": "Providers of information technology and systems integration services not classified in the Data Processing & Outsourced Services Sub-Industry. Includes information technology consulting and information management services.",
    "code": "45102010",
    "parent": {
      "name": "IT Services",
      "code": "451020"
    }
  },
  "45102030": {
    "name": "Internet Services & Infrastructure",
    "description": "Companies providing services and infrastructure for the internet industry including data centers and cloud networking and storage infrastructure. Also includes companies providing web hosting services. Excludes companies classified in the Software Industry.",
    "code": "45102030",
    "parent": {
      "name": "IT Services",
      "code": "451020"
    }
  },
  "45103010": {
    "name": "Application Software",
    "description": "Companies engaged in developing and producing software designed for specialized applications for the business or consumer market. Includes enterprise and technical software, as well as cloud-based software. Excludes companies classified in the Interactive Home Entertainment Sub-Industry. Also excludes companies producing systems or database management software classified in the Systems Software Sub-Industry.",
    "code": "45103010",
    "parent": {
      "name": "Software",
      "code": "451030"
    }
  },
  "45103020": {
    "name": "Systems Software",
    "description": "Companies engaged in developing and producing systems and database management software.",
    "code": "45103020",
    "parent": {
      "name": "Software",
      "code": "451030"
    }
  },
  "45201020": {
    "name": "Communications Equipment",
    "description": "Manufacturers of communication equipment and products, including LANs, WANs, routers, telephones, switchboards and exchanges. Excludes cellular phone manufacturers classified in the Technology Hardware,Storage & Peripherals Sub-Industry.",
    "code": "45201020",
    "parent": {
      "name": "Communications Equipment",
      "code": "452010"
    }
  },
  "45202030": {
    "name": "Technology Hardware, Storage & Peripherals",
    "description": "Manufacturers of cellular phones, personal computers, servers, electronic computer components and peripherals. Includes data storage components, motherboards, audio and video cards, monitors, keyboards, printers, and other peripherals. Excludes semiconductors classified in the Semiconductors Sub-Industry.",
    "code": "45202030",
    "parent": {
      "name": "Technology Hardware, Storage & Peripherals",
      "code": "452020"
    }
  },
  "45203010": {
    "name": "Electronic Equipment & Instruments ",
    "description": "Manufacturers of electronic equipment and instruments including analytical, electronic test and measurement instruments, scanner/barcode products, lasers, display screens, point-of-sales machines, and security system equipment.",
    "code": "45203010",
    "parent": {
      "name": "Electronic Equipment, Instruments & Components",
      "code": "452030"
    }
  },
  "45203015": {
    "name": "Electronic Components",
    "description": "Manufacturers of electronic components. Includes electronic components, connection devices, electron tubes, electronic capacitors and resistors, electronic coil, printed circuit board, transformer and other inductors, signal processing technology/components.",
    "code": "45203015",
    "parent": {
      "name": "Electronic Equipment, Instruments & Components",
      "code": "452030"
    }
  },
  "45203020": {
    "name": "Electronic Manufacturing Services",
    "description": "Producers of electronic equipment mainly for the OEM (Original Equipment Manufacturers) markets.",
    "code": "45203020",
    "parent": {
      "name": "Electronic Equipment, Instruments & Components",
      "code": "452030"
    }
  },
  "45203030": {
    "name": "Technology Distributors",
    "description": "Distributors of technology hardware and equipment. Includes distributors of communications equipment, computers & peripherals, semiconductors, and electronic equipment and components.",
    "code": "45203030",
    "parent": {
      "name": "Electronic Equipment, Instruments & Components",
      "code": "452030"
    }
  },
  "45301010": {
    "name": "Semiconductor Materials & Equipment",
    "description": "Manufacturers of semiconductor equipment, including manufacturers of the raw material and equipment used in the solar power industry.",
    "code": "45301010",
    "parent": {
      "name": "Semiconductors & Semiconductor Equipment",
      "code": "453010"
    }
  },
  "45301020": {
    "name": "Semiconductors",
    "description": "Manufacturers of semiconductors and related products, including manufacturers of solar modules and cells.",
    "code": "45301020",
    "parent": {
      "name": "Semiconductors & Semiconductor Equipment",
      "code": "453010"
    }
  },
  "50101010": {
    "name": "Alternative Carriers",
    "description": "Providers of communications and high-density data transmission services primarily through a high bandwidth/fiber-optic cable network.",
    "code": "50101010",
    "parent": {
      "name": "Diversified Telecommunication Services",
      "code": "501010"
    }
  },
  "50101020": {
    "name": "Integrated Telecommunication Services",
    "description": "Operators of primarily fixed-line telecommunications networks and companies providing both wireless and fixed-line telecommunicationsservices not classified elsewhere. Also includes internet service providers offering internet access to end users.",
    "code": "50101020",
    "parent": {
      "name": "Diversified Telecommunication Services",
      "code": "501010"
    }
  },
  "50102010": {
    "name": "Wireless Telecommunication Services",
    "description": "Providers of primarily cellular or wireless telecommunication services.",
    "code": "50102010",
    "parent": {
      "name": "Wireless Telecommunication Services",
      "code": "501020"
    }
  },
  "50201010": {
    "name": "Advertising",
    "description": "Companies providing advertising, marketing or public relations services.",
    "code": "50201010",
    "parent": {
      "name": "Media",
      "code": "502010"
    }
  },
  "50201020": {
    "name": "Broadcasting",
    "description": "Owners and operators of television or radio broadcasting systems, including programming. Includes radio and television broadcasting, radio networks, and radio stations.",
    "code": "50201020",
    "parent": {
      "name": "Media",
      "code": "502010"
    }
  },
  "50201030": {
    "name": "Cable &Satellite",
    "description": "Providers of cable or satellite television services. Includes cable networks and program distribution.",
    "code": "50201030",
    "parent": {
      "name": "Media",
      "code": "502010"
    }
  },
  "50201040": {
    "name": "Publishing",
    "description": "Publishers of newspapers, magazines and books in print or electronic formats.",
    "code": "50201040",
    "parent": {
      "name": "Media",
      "code": "502010"
    }
  },
  "50202010": {
    "name": "Movies & Entertainment",
    "description": "Companies that engage in producing and selling entertainment products and services, including companies engaged in the production, distribution and screening of movies and television shows, producers and distributors of music, entertainment theaters and sports teams. Also includes companies offering and/or producing entertainment content streamed online.",
    "code": "50202010",
    "parent": {
      "name": "Entertainment",
      "code": "502020"
    }
  },
  "50202020": {
    "name": "Interactive Home Entertainment",
    "description": "Producers of interactive gaming products, including mobile gaming applications. Also includes educational software used primarily in the home. Excludes online gambling companies classified in the Casinos & Gaming Sub-Industry.",
    "code": "50202020",
    "parent": {
      "name": "Entertainment",
      "code": "502020"
    }
  },
  "50203010": {
    "name": "Interactive Media & Services",
    "description": "Companies engaging in content and information creation or distribution through proprietary platforms, where revenues are derived primarily through pay-per-click advertisements. Includes search engines, social media and networking platforms, online classifieds, and online review companies. Excludes companies operating online marketplaces classified in Internet & Direct Marketing Retail. ",
    "code": "50203010",
    "parent": {
      "name": "Interactive Media & Services",
      "code": "502030"
    }
  },
  "55101010": {
    "name": "Electric Utilities",
    "description": "Companies that produce or distribute electricity. Includes both nuclear and non-nuclear facilities.",
    "code": "55101010",
    "parent": {
      "name": "Electric Utilities",
      "code": "551010"
    }
  },
  "55102010": {
    "name": "Gas Utilities",
    "description": "Companies whose main charter is to distribute and transmit natural and manufactured gas. Excludes companies primarily involved in gas exploration or production classified in the Oil & Gas Exploration & Production Sub-Industry. Also excludes companies engaged in thestorage and/or transportation of oil, gas, and/or refined products classified in the Oil & Gas Storage & Transportation Sub-Industry.",
    "code": "55102010",
    "parent": {
      "name": "Gas Utilities",
      "code": "551020"
    }
  },
  "55103010": {
    "name": "Multi-Utilities",
    "description": "Utility companies with significantly diversified activities in addition to core Electric Utility, Gas Utility and/or Water Utility operations.",
    "code": "55103010",
    "parent": {
      "name": "Multi-Utilities",
      "code": "551030"
    }
  },
  "55104010": {
    "name": "Water Utilities",
    "description": "Companies that purchase and redistribute water to the end-consumer. Includes large-scale water treatment systems.",
    "code": "55104010",
    "parent": {
      "name": "Water Utilities",
      "code": "551040"
    }
  },
  "55105010": {
    "name": "Independent Power Producers & Energy Traders",
    "description": "Companies that operate as Independent Power Producers (IPPs), Gas & Power Marketing & Trading Specialists and/or Integrated Energy Merchants. Excludes producers of electricity using renewable sources, such as solar power, hydropower, and wind power. Also excludes electric transmission companies and utility distribution companies classified in the Electric Utilities Sub-Industry.",
    "code": "55105010",
    "parent": {
      "name": "Independent Power and Renewable Electricity Producers",
      "code": "551050"
    }
  },
  "55105020": {
    "name": "Renewable Electricity ",
    "description": "Companies that engage in the generation and distribution of electricity using renewable sources, including, but not limited to, companies that produce electricity using biomass, geothermal energy, solar energy, hydropower, and wind power. Excludes companies manufacturing capital equipment used to generate electricity using renewable sources, such as manufacturers of solar power systems, installers of photovoltaic cells, and companies involved in the provision of technology, components, and services mainly to this market. ",
    "code": "55105020",
    "parent": {
      "name": "Independent Power and Renewable Electricity Producers",
      "code": "551050"
    }
  },
  "60101010": {
    "name": "Diversified REITs",
    "description": "A company or Trust with significantly diversified operations across two or more property types.",
    "code": "60101010",
    "parent": {
      "name": "Diversified REITs",
      "code": "601010"
    }
  },
  "60102510": {
    "name": "Industrial REITs",
    "description": "Companies or Trusts engaged in the acquisition, development, ownership, leasing, management and operation of industrial properties. Includes companies operating industrial warehouses and distribution properties.",
    "code": "60102510",
    "parent": {
      "name": "Industrial REITs",
      "code": "601025"
    }
  },
  "60103010": {
    "name": "Hotel & Resort REITs",
    "description": "Companies or Trusts engaged in the acquisition, development, ownership, leasing, management and operation of hotel and resort properties. ",
    "code": "60103010",
    "parent": {
      "name": "Hotel & Resort REITs",
      "code": "601030"
    }
  },
  "60104010": {
    "name": "Office REITs",
    "description": "Companies or Trusts engaged in the acquisition, development, ownership, leasing, management and operation of office properties.",
    "code": "60104010",
    "parent": {
      "name": "Office REITs",
      "code": "601040"
    }
  },
  "60105010": {
    "name": "Health Care REITs",
    "description": "Companies or Trusts engaged in the acquisition, development, ownership, leasing, management and operation of properties serving the health care industry, including hospitals, nursing homes, and assisted living properties.",
    "code": "60105010",
    "parent": {
      "name": "Health Care REITs",
      "code": "601050"
    }
  },
  "60106010": {
    "name": "Multi-Family Residential REITs",
    "description": "Companies or Trusts engaged in the acquisition, development, ownership, leasing, management and operation of apartments and other multi-family housing including student housing.",
    "code": "60106010",
    "parent": {
      "name": "Residential REITs",
      "code": "601060"
    }
  },
  "60106020": {
    "name": "Single-Family Residential REITs ",
    "description": "Companies or Trusts engaged in the acquisition, development, ownership, leasing, management and operation of single-family residential housing including manufactured homes.",
    "code": "60106020",
    "parent": {
      "name": "Residential REITs",
      "code": "601060"
    }
  },
  "60107010": {
    "name": "Retail REITs",
    "description": "Companies or Trusts engaged in the acquisition, development, ownership, leasing, management and operation of shopping malls, outlet malls, neighborhood and community shopping centers.",
    "code": "60107010",
    "parent": {
      "name": "Retail REITs",
      "code": "601070"
    }
  },
  "60108010": {
    "name": "Other Specialized REITs",
    "description": "Companies or Trusts engaged in the acquisition, development, ownership, leasing, management and operation of properties not classified elsewhere. This Sub-Industry includes REITs that manage and own properties such as natural gas and crude oil pipelines, gas stations, fiber optic cables, prisons, automobile parking, and automobile dealerships.",
    "code": "60108010",
    "parent": {
      "name": "Specialized REITs",
      "code": "601080"
    }
  },
  "60108020": {
    "name": "Self-Storage REITs",
    "description": "Companies or Trusts engaged in the acquisition, development, ownership, leasing, management and operation of self storage properties.",
    "code": "60108020",
    "parent": {
      "name": "Specialized REITs",
      "code": "601080"
    }
  },
  "60108030": {
    "name": "Telecom Tower REITs",
    "description": "Companies or Trusts engaged in the acquisition, development, ownership, leasing, management and operation of telecom towers and related structures that support wireless telecommunications.",
    "code": "60108030",
    "parent": {
      "name": "Specialized REITs",
      "code": "601080"
    }
  },
  "60108040": {
    "name": "Timber REITs",
    "description": "Companies or Trusts engaged in the acquisition, development, ownership, leasing, management and operation of timberland and timber-related properties.",
    "code": "60108040",
    "parent": {
      "name": "Specialized REITs",
      "code": "601080"
    }
  },
  "60108050": {
    "name": "Data Center REITs",
    "description": "Companies or Trusts engaged in the acquisition, development, ownership, leasing, management and operation of data center properties.",
    "code": "60108050",
    "parent": {
      "name": "Specialized REITs",
      "code": "601080"
    }
  },
  "60201010": {
    "name": "Diversified Real Estate Activities",
    "description": "Companies engaged in a diverse spectrum of real estate activities including real estate development & sales, real estate management, or real estate services, but with no dominant business line.",
    "code": "60201010",
    "parent": {
      "name": "Real Estate Management & Development",
      "code": "602010"
    }
  },
  "60201020": {
    "name": "Real Estate Operating Companies",
    "description": "Companies engaged in operating real estate properties for the purpose of leasing & management.",
    "code": "60201020",
    "parent": {
      "name": "Real Estate Management & Development",
      "code": "602010"
    }
  },
  "60201030": {
    "name": "Real Estate Development",
    "description": "Companies that develop real estate and sell the properties after development. Excludes companies classified in the Homebuilding Sub-Industry.",
    "code": "60201030",
    "parent": {
      "name": "Real Estate Management & Development",
      "code": "602010"
    }
  },
  "60201040": {
    "name": "Real Estate Services",
    "description": "Real estate service providers such as real estate agents, brokers & real estate appraisers.",
    "code": "60201040",
    "parent": {
      "name": "Real Estate Management & Development",
      "code": "602010"
    }
  }
}
