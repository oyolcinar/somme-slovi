import { nanoid } from 'nanoid';
import MoireBraTop from './ItemImages/MoireBraTop.jpg';
import MoireBraTop02 from './ItemImages/MoireBraTop02.jpg';
import MoireBraTop03 from './ItemImages/MoireBraTop03.jpg';
import MoireBraTop04 from './ItemImages/MoireBraTop04.jpg';
import PinstripeArchTop from './ItemImages/PinstripeArchTop.jpg';
import PinstripeArchTop02 from './ItemImages/PinstripeArchTop02.jpg';
import PinstripeArchTop03 from './ItemImages/PinstripeArchTop03.jpg';
import PinstripeArchTop04 from './ItemImages/PinstripeArchTop04.jpg';
import PinstripeArchTop05 from './ItemImages/PinstripeArchTop05.jpg';
import PoplinPant from './ItemImages/PoplinPant.jpg';
import PoplinPant02 from './ItemImages/PoplinPant02.jpg';
import PoplinPant03 from './ItemImages/PoplinPant03.jpg';
import PoplinPant04 from './ItemImages/PoplinPant04.jpg';
import StorkScissorsEmbroideryShirt from './ItemImages/StorkScissorsEmbroideryShirt.jpg';
import StorkScissorsEmbroideryShirt02 from './ItemImages/StorkScissorsEmbroideryShirt02.jpg';
import StorkScissorsEmbroideryShirt03 from './ItemImages/StorkScissorsEmbroideryShirt03.jpg';
import StorkScissorsEmbroideryShirt04 from './ItemImages/StorkScissorsEmbroideryShirt04.jpg';
import StorkScissorsEmbroideryShirt05 from './ItemImages/StorkScissorsEmbroideryShirt05.jpg';
import StorkScissorsSweatshirt from './ItemImages/StorkScissorsSweatshirt.jpg';
import StorkScissorsSweatshirt02 from './ItemImages/StorkScissorsSweatshirt02.jpg';
import StorkScissorsSweatshirt03 from './ItemImages/StorkScissorsSweatshirt03.jpg';
import StorkScissorsSweatshirt04 from './ItemImages/StorkScissorsSweatshirt04.jpg';
import TweedAsymmetricTop from './ItemImages/TweedAsymmetricTop.jpg';
import TweedAsymmetricTop02 from './ItemImages/TweedAsymmetricTop02.jpg';
import TweedAsymmetricTop03 from './ItemImages/TweedAsymmetricTop03.jpg';
import TweedAsymmetricTop04 from './ItemImages/TweedAsymmetricTop04.jpg';

const Tops = [
  {
    id: nanoid(),
    name: 'MOIRE BRA TOP',
    description: `CREAM MOIRE TOP, REPURPOSING "THE BRA" AS A TOP. FEATURES A BRA WIRE ON CENTER FRONT. ADJUSTABLE BLACK TIES ON SHOULDERS. BLACK LOGO PRINTED ON THE LENGTH OF THE BLACK TIES. CLIPS ON INSIDE CLOSURE. FULLY LINED.
      
      THIS MOIRE FABRIC IS CRAFTED WITH 100% NATURAL FIBERS, USING THE ANTIQUE CALENDERING TECHNIQUE. TO MAINTAIN ITS UNIQUE WATERED LOOK AND LUSTER, PLEASE HANDLE IT WITH CARE.
      
      55% RAYON, 45% COTTON. LINING 100% ACETATE. TRIM 100% POLYESTER.
      
      SAM IS 5'10" AND WEARS SIZE SMALL.`,
    type: 'TOPS',
    sizes: ['XS', 'S', 'M', 'L'],
    images: [MoireBraTop, MoireBraTop02, MoireBraTop03, MoireBraTop04],
    price: 255.0,
    inStock: 5,
  },
  {
    id: nanoid(),
    name: 'PINSTRIPE ARCH TOP',
    description: `OFF-WHITE PINSTRIPE TOP. THE FRONT BODY FINISHES AS AN ARCH SHAPE WITH BLACK TIES AT THE HEM. BACK ENDS ON THE WAIST. BLACK LOGO PRINTED ON THE LENGTH OF THE BLACK TIES.
      
      65% COTTON, 32% NYLON, %3 ELASTANE. TRIM 100% POLYESTER.
      
      SAM IS 5'10" AND WEARS SIZE SMALL.`,
    type: 'TOPS',
    sizes: ['S', 'M', 'L'],
    images: [
      PinstripeArchTop,
      PinstripeArchTop02,
      PinstripeArchTop03,
      PinstripeArchTop04,
      PinstripeArchTop05,
    ],
    price: 215.0,
    inStock: 5,
  },
  {
    id: nanoid(),
    name: 'RECONSTRUCTED POPLIN PANT TOP',
    description: `CREAM POPLIN TOP, REPURPOSING "THE PANT" AS A TOP. FEATURES LACE DETAILS ON SLEEVE HEMS. BUTTON CLOSURE ON COLLAR.
      
      100% COTTON. COMBO 100% COTTON.
      
      SAM IS 5'10" AND WEARS SIZE S/M.`,
    type: 'TOPS',
    sizes: ['S/M', 'L/XL'],
    images: [PoplinPant, PoplinPant02, PoplinPant03, PoplinPant04],
    price: 315.0,
    inStock: 5,
  },
  {
    id: nanoid(),
    name: 'STORK SCISSORS EMBROIDERY SHIRT',
    description: `ORGANZA BUTTON-DOWN SHIRT WITH STORK SCISSORS EMBROIDERY ON BACK. ADJUSTABLE TIES ON SIDES, ALLOWING THE WEARER TO WEAR IT MULTIPLE WAYS. BLACK LOGO PRINTED ON THE LENGTH OF THE BLACK TIES.
      
      100% POLYESTER. TRIM 100% POLYESTER.`,
    type: 'TOPS',
    sizes: ['ONE SIZE'],
    images: [
      StorkScissorsEmbroideryShirt,
      StorkScissorsEmbroideryShirt02,
      StorkScissorsEmbroideryShirt03,
      StorkScissorsEmbroideryShirt04,
      StorkScissorsEmbroideryShirt05,
    ],
    price: 385.0,
    inStock: 5,
  },
  {
    id: nanoid(),
    name: 'STORK SCISSORS CROP SWEATSHIRT',
    description: `OFF-WHITE CROP SWEATSHIRT. CREWNECK COLLAR. STORK SCISSORS EMBROIDERY ON SLEEVES.
      
      100% COTTON.
      
      SAM IS 5'10" AND WEARS SIZE SMALL.`,
    type: 'TOPS',
    sizes: ['XS', 'S', 'M', 'L'],
    images: [
      StorkScissorsSweatshirt,
      StorkScissorsSweatshirt02,
      StorkScissorsSweatshirt03,
      StorkScissorsSweatshirt04,
    ],
    price: 225.0,
    inStock: 5,
  },
  {
    id: nanoid(),
    name: 'TWEED ASYMMETRIC TOP',
    description: `TWEED FITTED ASYMMETRIC TOP WITH ADJUSTABLE BLACK TIES ON SHOULDERS. BLACK LOGO PRINTED ON THE LENGTH OF THE BLACK TIES.  ZIP CLOSURE ON SIDE. FULLY LINED.
      
      29% WOOL, 33% ACRYLIC, 23% POLYESTER, %15 LUREX. LINING 100% ACETATE. TRIM 100% POLYESTER.
      
      SAM IS 5'10" AND WEARS SIZE SMALL.`,
    type: 'TOPS',
    sizes: ['XS', 'S', 'M', 'L'],
    images: [
      TweedAsymmetricTop,
      TweedAsymmetricTop02,
      TweedAsymmetricTop03,
      TweedAsymmetricTop04,
    ],
    price: 275.0,
    inStock: 5,
  },
];

export default Tops;
