import { nanoid } from 'nanoid';
import DoublePouchBag from './ItemImages/MoireDoublePouchBag.jpg';
import DoublePouchBag02 from './ItemImages/MoireDoublePouchBag02.jpg';
import DoublePouchBag03 from './ItemImages/MoireDoublePouchBag03.jpg';
import DoublePouchBag04 from './ItemImages/MoireDoublePouchBag04.jpg';
import MoireDoubleToteBag from './ItemImages/MoireDoubleToteBag.jpg';
import MoireDoubleToteBag02 from './ItemImages/MoireDoubleToteBag02.jpg';
import MoireDoubleToteBag03 from './ItemImages/MoireDoubleToteBag03.jpg';
import MoireSleeves from './ItemImages/MoireSleeves.jpg';
import MoireSleeves02 from './ItemImages/MoireSleeves02.jpg';
import MoireSleeves03 from './ItemImages/MoireSleeves03.jpg';
import MoireWaistBag from './ItemImages/MoireWaistBag.jpg';
import MoireWaistBag02 from './ItemImages/MoireWaistBag02.jpg';
import MoireWaistBag03 from './ItemImages/MoireWaistBag03.jpg';
import TweedSleeves from './ItemImages/TweedSleeves.jpg';
import TweedSleeves02 from './ItemImages/TweedSleeves02.jpg';
import TweedSleeves03 from './ItemImages/TweedSleeves03.jpg';
import TweedSleeves04 from './ItemImages/TweedSleeves04.jpg';
import TweedSleeves05 from './ItemImages/TweedSleeves05.jpg';

const Accessories = [
  {
    id: nanoid(),
    name: 'MOIRE DOUBLE POUCH BAG',
    description: `YELLOW MOIRE DOUBLE POUCH BAG. FEATURES TWO DETACHABLE LONG CHAINS THAT ALLOW THE WEARER TO ARRANGE THE STYLE OF THE BAG AS A DOUBLE BAG, SINGLE BAG, SHOULDER BAG, CLUTCH, OR CROSSBODY BAG. FULLY LINED.
      
    THIS MOIRE FABRIC IS CRAFTED WITH 100% NATURAL FIBERS, USING THE ANTIQUE CALENDERING TECHNIQUE. TO MAINTAIN ITS UNIQUE WATERED LOOK AND LUSTER, PLEASE HANDLE IT WITH CARE.
      
    55% RAYON, 45% COTTON. LINING 100% ACETATE.`,
    type: 'ACCESSORIES',
    sizes: ['ONE SIZE'],
    images: [
      DoublePouchBag,
      DoublePouchBag02,
      DoublePouchBag03,
      DoublePouchBag04,
    ],
    price: 250.0,
    inStock: 5,
  },
  {
    id: nanoid(),
    name: 'MOIRE DOUBLE TOTE BAG',
    description: `BLACK MOIRE DOUBLE TOTE BAG, REPURPOSING "THE TOTE BAG" AS A BACKPACK. FULLY LINED.
      
    THIS MOIRE FABRIC IS CRAFTED WITH 100% NATURAL FIBERS, USING THE ANTIQUE CALENDERING TECHNIQUE. TO MAINTAIN ITS UNIQUE WATERED LOOK AND LUSTER, PLEASE HANDLE IT WITH CARE.
      
    55% RAYON, 45% COTTON. LINING 100% ACETATE.`,
    type: 'ACCESSORIES',
    sizes: ['ONE SIZE'],
    images: [MoireDoubleToteBag, MoireDoubleToteBag02, MoireDoubleToteBag03],
    price: 200.0,
    inStock: 5,
  },
  {
    name: 'MOIRE SLEEVES',
    description: `BLACK & CREAM MOIRE SLEEVES. SLIM FIT.

    THIS MOIRE FABRIC IS CRAFTED WITH 100% NATURAL FIBERS, USING THE ANTIQUE CALENDERING TECHNIQUE. TO MAINTAIN ITS UNIQUE WATERED LOOK AND LUSTER, PLEASE HANDLE IT WITH CARE.
      
    55% RAYON, 45% COTTON.
      
    SAM IS 5'10" AND WEARS SIZE S/M.`,
    type: 'ACCESSORIES',
    sizes: ['S/M', 'L/XL'],
    images: [MoireSleeves, MoireSleeves02, MoireSleeves03],
    price: 195.0,
    inStock: 5,
  },
  {
    id: nanoid(),
    name: 'MOIRE WAIST BAG',
    description: `BLACK MOIRE WAIST BAG, REPURPOSING "THE POCKET" AS A WAIST BAG. FEATURES ADJUSTABLE SILVER SNAPS ON BELT, ALLOWING THE WEARER TO ARRANGE THE FIT OF THE BAG AS THEY WISH.
      
    THIS MOIRE FABRIC IS CRAFTED WITH 100% NATURAL FIBERS, USING THE ANTIQUE CALENDERING TECHNIQUE. TO MAINTAIN ITS UNIQUE WATERED LOOK AND LUSTER, PLEASE HANDLE IT WITH CARE.
      
    55% RAYON, 45% COTTON.`,
    type: 'ACCESSORIES',
    sizes: ['ONE SIZE'],
    images: [MoireWaistBag, MoireWaistBag02, MoireWaistBag03],
    price: 185.0,
    inStock: 5,
  },
  {
    name: 'TWEED SLEEVES',
    description: `TWEED SLEEVES WITH ADJUSTABLE BLACK TIES. FEATURES WORK-IN-PROGRESS STITCH DETAILS ON SLEEVES. BLACK LOGO PRINTED ON THE LENGTH OF THE BLACK TIES. FULLY LINED.
      
    29% WOOL, 33% ACRYLIC, 23% POLYESTER, %15 LUREX. LINING 100% ACETATE. TRIM 100% POLYESTER.
      
    SAM IS 5'10" AND WEARS SIZE S/M.`,
    type: 'ACCESSORIES',
    sizes: ['S/M', 'L/XL'],
    images: [
      TweedSleeves,
      TweedSleeves02,
      TweedSleeves03,
      TweedSleeves04,
      TweedSleeves05,
    ],
    price: 285.0,
    inStock: 5,
  },
];

export default Accessories;
