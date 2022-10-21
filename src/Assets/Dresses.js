import { nanoid } from 'nanoid';
import MoireMiniDress from './ItemImages/MoireMiniDress.jpg';
import MoireMiniDress02 from './ItemImages/MoireMiniDress02.jpg';
import MoireMiniDress03 from './ItemImages/MoireMiniDress03.jpg';
import MoireMiniDress04 from './ItemImages/MoireMiniDress04.jpg';
import PinstripeGatherDress from './ItemImages/PinstripeGatherDress.jpg';
import PinstripeGatherDress02 from './ItemImages/PinstripeGatherDress02.jpg';
import PinstripeGatherDress03 from './ItemImages/PinstripeGatherDress03.jpg';
import PinstripeGatherDress04 from './ItemImages/PinstripeGatherDress04.jpg';
import PinstripeGatherDress05 from './ItemImages/PinstripeGatherDress05.jpg';
import PlaidButtonMini from './ItemImages/PlaidButtonMini.jpg';
import PlaidButtonMini02 from './ItemImages/PlaidButtonMini02.jpg';
import PlaidButtonMini03 from './ItemImages/PlaidButtonMini03.jpg';
import PlaidButtonMini04 from './ItemImages/PlaidButtonMini04.jpg';
import PlaidButtonMini05 from './ItemImages/PlaidButtonMini05.jpg';

const Dresses = [
  {
    id: nanoid(),
    name: 'MOIRE MINI DRESS',
    description: `BLACK MOIRE A-LINE MINI DRESS. ADJUSTABLE BLACK TIES ON SHOULDERS. BLACK LOGO PRINTED ON THE LENGTH OF THE BLACK TIES. ZIP CLOSURE ON SIDE.
      
    THIS MOIRE FABRIC IS CRAFTED WITH 100% NATURAL FIBERS, USING THE ANTIQUE CALENDERING TECHNIQUE. TO MAINTAIN ITS UNIQUE WATERED LOOK AND LUSTER, PLEASE HANDLE IT WITH CARE.
      
    55% RAYON, 45% COTTON. TRIM 100% POLYESTER.
      
    SAM IS 5'10" AND WEARS SIZE SMALL.`,
    images: [
      MoireMiniDress,
      MoireMiniDress02,
      MoireMiniDress03,
      MoireMiniDress04,
    ],
    type: 'DRESSES',
    sizes: ['S', 'M', 'L'],
    price: 395.0,
    inStock: 5,
  },
  {
    id: nanoid(),
    name: 'PINSTRIPE GATHER DRESS',
    description: `OFF-WHITE PINSTRIPE LOOSE FIT GATHER DRESS. FEATURES ADJUSTABLE BLACK TIES ON SHOULDERS. ADDITIONAL ADJUSTABLE BLACK TIES ON SIDES, ALLOWING THE WEARER TO STYLE THE DRESS IN NUMEROUS WAYS BY CREATING CUSTOM HEIGHT, VOLUME, AND TEXTURE ALONG THE BODY. BLACK LOGO PRINTED ON THE LENGTH OF THE BLACK TIES. ZIP CLOSURE ON CENTER BACK.
      
    65% COTTON, 32% NYLON, %3 ELASTANE. TRIM 100% POLYESTER.
      
    SAM IS 5'10" AND WEARS SIZE SMALL.`,
    type: 'DRESSES',
    sizes: ['S', 'M', 'L'],
    images: [
      PinstripeGatherDress,
      PinstripeGatherDress02,
      PinstripeGatherDress03,
      PinstripeGatherDress04,
      PinstripeGatherDress05,
    ],
    price: 375.0,
    inStock: 5,
  },
  {
    id: nanoid(),
    name: 'PLAID BUTTON-DOWN MINI DRESS',
    description: `FITTED MINI DRESS WITH BUTTON-DOWN CLOSURE FROM NECK TO HEM. BAND COLLAR. FEATURES DIFFERENT PLAID PATTERNS ON THE RIGHT SIDE AND RIGHT SLEEVE OF THE DRESS. ADJUSTABLE TIES ON GATHER SLEEVES, ALLOWING THE WEARER TO ARRANGE THE FIT OF THE SLEEVE AS THEY WISH. BLACK LOGO PRINTED ON THE LENGTH OF THE BLACK TIES.
      
    88% POLYESTER, 12% ELASTANE. TRIM 100% POLYESTER.
      
    SAM IS 5'10" AND WEARS SIZE SMALL.`,
    type: 'DRESSES',
    sizes: ['XS', 'S', 'M', 'L'],
    images: [
      PlaidButtonMini,
      PlaidButtonMini02,
      PlaidButtonMini03,
      PlaidButtonMini04,
      PlaidButtonMini05,
    ],
    price: 355.0,
    inStock: 5,
  },
];

export default Dresses;
