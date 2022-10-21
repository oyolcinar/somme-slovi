import { nanoid } from 'nanoid';
import DoubleBreastedNotch from './ItemImages/DoubleBreastedNotch.jpg';
import DoubleBreastedNotch02 from './ItemImages/DoubleBreastedNotch02.jpg';
import DoubleBreastedNotch03 from './ItemImages/DoubleBreastedNotch03.jpg';
import DoubleBreastedNotch04 from './ItemImages/DoubleBreastedNotch04.jpg';
import DoubleBreastedNotch05 from './ItemImages/DoubleBreastedNotch05.jpg';
import TweedBikerJacket from './ItemImages/TweedBikerJacket.jpg';
import TweedBikerJacket02 from './ItemImages/TweedBikerJacket02.jpg';
import TweedBikerJacket03 from './ItemImages/TweedBikerJacket03.jpg';
import TweedBikerJacket04 from './ItemImages/TweedBikerJacket04.jpg';
import TweedCropJacket from './ItemImages/TweedCropJacket.jpg';
import TweedCropJacket02 from './ItemImages/TweedCropJacket02.jpg';
import TweedCropJacket03 from './ItemImages/TweedCropJacket03.jpg';
import TweedCropJacket04 from './ItemImages/TweedCropJacket04.jpg';
import TweedNotchCollarCoat from './ItemImages/TweedNotchCollarCoat.jpg';
import TweedNotchCollarCoat02 from './ItemImages/TweedNotchCollarCoat02.jpg';
import TweedNotchCollarCoat03 from './ItemImages/TweedNotchCollarCoat03.jpg';
import TweedNotchCollarCoat04 from './ItemImages/TweedNotchCollarCoat04.jpg';
import TweedNotchCollarCoat05 from './ItemImages/TweedNotchCollarCoat05.jpg';

const Outwear = [
  {
    id: nanoid(),
    name: 'DOUBLE-BREASTED NOTCH COLLAR COAT',
    description: `DOUBLE-BREASTED NOTCH COLLAR COAT WITH OVERSIZE SILHOUETTE. BLACK MOIRE FABRIC ON LEFT SIDE, PLAID PATTERN ON RIGHT SIDE. FEATURES TWO STRAPS SEWN INTO BOTH INTERNAL SHOULDERS, ALLOWING THE WEARER TO STYLE THE COAT IN NUMEROUS WAYS. TWO SIDE POCKETS. INTERNAL BREAST WELT POCKET. FULLY LINED.
      
    THIS MOIRE FABRIC IS CRAFTED WITH 100% NATURAL FIBERS, USING THE ANTIQUE CALENDERING TECHNIQUE. TO MAINTAIN ITS UNIQUE WATERED LOOK AND LUSTER, PLEASE HANDLE IT WITH CARE.
      
    55% RAYON, 45% COTTON. COMBO 88% POLYESTER, 12% ELASTANE. LINING 100% ACETATE.
      
    SAM IS 5'10" AND WEARS SIZE SMALL.`,
    type: 'OUTWEAR',
    sizes: ['S', 'M', 'L'],
    images: [
      DoubleBreastedNotch,
      DoubleBreastedNotch02,
      DoubleBreastedNotch03,
      DoubleBreastedNotch04,
      DoubleBreastedNotch05,
    ],
    price: 595.0,
    inStock: 5,
  },
  {
    id: nanoid(),
    name: 'TWEED BIKER JACKET',
    description: `CLASSIC MOTORCYCLE-STYLE CROP JACKET. REGULAR FIT WITH SLIGHTLY OVERSIZE SHOULDERS. FEATURES SILVER SNAPS ON LAPELS AND FRONT POCKET. ADJUSTABLE BELT AROUND THE WAIST WITH SILVER BELT BUCKLE. ZIP CLOSURE ON FRONT AND CUFFS. INTERNAL BREAST WELT POCKET. FULLY LINED.

    29% WOOL, 33% ACRYLIC, 23% POLYESTER, %15 LUREX. LINING 100% ACETATE.

    SAM IS 5'10" AND WEARS SIZE SMALL.`,
    type: 'OUTWEAR',
    sizes: ['S', 'M', 'L'],
    images: [
      TweedBikerJacket,
      TweedBikerJacket02,
      TweedBikerJacket03,
      TweedBikerJacket04,
    ],
    price: 675.0,
    inStock: 5,
  },
  {
    id: nanoid(),
    name: 'TWEED CROP JACKET',
    description: `OFF-WHITE TWEED CROP JACKET WITH STORK EMBROIDERY ON SLEEVES. FEATURES WORK-IN-PROGRESS STITCH DETAILS ON FRONT CLOSURE AND CENTER BACK. BUTTON CLOSURE ON FRONT AND CUFFS. INTERNAL BREAST WELT POCKET. SLIM FIT. FULLY LINED.
      
    29% WOOL, 33% ACRYLIC, 23% POLYESTER, %15 LUREX. LINING 100% ACETATE.
      
    SAM IS 5'10" AND WEARS SIZE MEDIUM.`,
    type: 'OUTWEAR',
    sizes: ['S', 'M', 'L'],
    images: [
      TweedCropJacket,
      TweedCropJacket02,
      TweedCropJacket03,
      TweedCropJacket04,
    ],
    price: 425.0,
    inStock: 5,
  },
  {
    id: nanoid(),
    name: 'TWEED NOTCH COLLAR COAT',
    description: `SINGLE-BREASTED BABY BLUE TWEED COAT WITH NOTCH COLLAR. FEATURES WORK-IN-PROGRESS STITCH DETAILS ON FRONT CLOSURE AND CENTER BACK. FLAP POCKETS ON FRONT. INTERNAL BREAST WELT POCKET. BUTTON CLOSURE ON FRONT AND CUFFS. THE BACK IS FINISHED WITH A SINGLE VENT. FULLY LINED.
      
    29% WOOL, 33% ACRYLIC, 23% POLYESTER, %15 LUREX. LINING 100% ACETATE.
      
    SAM IS 5'10" AND WEARS SIZE SMALL.`,
    type: 'OUTWEAR',
    sizes: ['S', 'M', 'L'],
    images: [
      TweedNotchCollarCoat,
      TweedNotchCollarCoat02,
      TweedNotchCollarCoat03,
      TweedNotchCollarCoat04,
      TweedNotchCollarCoat05,
    ],
    price: 525.0,
    inStock: 5,
  },
];

export default Outwear;
