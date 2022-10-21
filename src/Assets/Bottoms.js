import { nanoid } from 'nanoid';
import MoireWideLegGatherPants from './ItemImages/MoireWideLegGatherPants.jpg';
import MoireWideLegGatherPants02 from './ItemImages/MoireWideLegGatherPants02.jpg';
import MoireWideLegGatherPants03 from './ItemImages/MoireWideLegGatherPants03.jpg';
import MoireWideLegGatherPants04 from './ItemImages/MoireWideLegGatherPants04.jpg';
import MoireWideLegGatherPants05 from './ItemImages/MoireWideLegGatherPants05.jpg';
import TweedButtonDownShorts from './ItemImages/TweedButtonDownShorts.jpg';
import TweedButtonDownShorts02 from './ItemImages/TweedButtonDownShorts02.jpg';
import TweedButtonDownShorts03 from './ItemImages/TweedButtonDownShorts03.jpg';
import TweedButtonDownShorts04 from './ItemImages/TweedButtonDownShorts04.jpg';
import TweedButtonDownShorts05 from './ItemImages/TweedButtonDownShorts05.jpg';
import TweedMiniSkirt from './ItemImages/TweedMiniSkirt.jpg';
import TweedMiniSkirt02 from './ItemImages/TweedMiniSkirt02.jpg';
import TweedMiniSkirt03 from './ItemImages/TweedMiniSkirt03.jpg';
import TwoToneTweedWrapSkirt from './ItemImages/TwoToneTweedWrapSkirt.jpg';
import TwoToneTweedWrapSkirt02 from './ItemImages/TwoToneTweedWrapSkirt02.jpg';
import TwoToneTweedWrapSkirt03 from './ItemImages/TwoToneTweedWrapSkirt03.jpg';
import TwoToneTweedWrapSkirt04 from './ItemImages/TwoToneTweedWrapSkirt04.jpg';
import WideLegPants from './ItemImages/WideLegPants.jpg';
import WideLegPants02 from './ItemImages/WideLegPants02.jpg';
import WideLegPants03 from './ItemImages/WideLegPants03.jpg';
import WideLegPants04 from './ItemImages/WideLegPants04.jpg';

const Bottoms = [
  {
    id: nanoid(),
    name: 'MOIRE WIDE-LEG GATHER PANTS',
    description: `CREAM MOIRE WIDE-LEG GATHER PANTS WITH BOX PLEATS ON FRONT. FEATURES ADJUSTABLE BLACK TIES ON HEM, ALLOWING THE WEARER TO ARRANGE THE HEIGHT AND THE SILHOUETTE OF THE PANTS AS THEY WISH. ADJUSTABLE BLACK TIE ON ELASTIC WAISTBAND. BLACK LOGO PRINTED ON THE LENGTH OF THE BLACK TIES. TWO SIDE POCKETS.
      
    THIS MOIRE FABRIC IS CRAFTED WITH 100% NATURAL FIBERS, USING THE ANTIQUE CALENDERING TECHNIQUE. TO MAINTAIN ITS UNIQUE WATERED LOOK AND LUSTER, PLEASE HANDLE IT WITH CARE.
      
    55% RAYON, 45% COTTON. TRIM 100% POLYESTER.
      
    SAM IS 5'10" AND WEARS SIZE SMALL.`,
    type: 'BOTTOMS',
    sizes: ['XS', 'S', 'M', 'L'],
    images: [
      MoireWideLegGatherPants,
      MoireWideLegGatherPants02,
      MoireWideLegGatherPants03,
      MoireWideLegGatherPants04,
      MoireWideLegGatherPants05,
    ],
    price: 450.0,
    inStock: 5,
  },
  {
    id: nanoid(),
    name: 'TWEED BUTTON-DOWN SHORTS',
    description: `BABY BLUE TWEED HIGH-RISE SHORTS. FEATURES FUNCTIONAL BUTTON-DOWN CLOSURE. FULLY LINED.
      
    29% WOOL, 33% ACRYLIC, 23% POLYESTER, %15 LUREX. LINING 100% ACETATE.
      
    SAM IS 5'10" AND WEARS SIZE MEDIUM.`,
    type: 'BOTTOMS',
    sizes: ['S', 'M', 'L'],
    images: [
      TweedButtonDownShorts,
      TweedButtonDownShorts02,
      TweedButtonDownShorts03,
      TweedButtonDownShorts04,
      TweedButtonDownShorts05,
    ],
    price: 225.0,
    inStock: 5,
  },
  {
    id: nanoid(),
    name: 'TWEED MINI SKIRT',
    description: `OFF-WHITE TWEED MINI SKIRT WITH SLIGHTLY CURVED SILHOUETTE. FEATURES WORK-IN-PROGRESS STITCH DETAILS ON CENTER BACK. BLACK TIES ON WAIST. BLACK LOGO PRINTED ON THE LENGTH OF THE BLACK TIES. ZIP CLOSURE ON CENTER BACK. FULLY LINED.
      
    29% WOOL, 33% ACRYLIC, 23% POLYESTER, %15 LUREX. LINING 100% ACETATE. TRIM 100% POLYESTER.
      
    SAM IS 5'10" AND WEARS SIZE MEDIUM.`,
    type: 'BOTTOMS',
    sizes: ['S', 'M', 'L'],
    images: [TweedMiniSkirt, TweedMiniSkirt02, TweedMiniSkirt03],
    price: 295.0,
    inStock: 5,
  },
  {
    id: nanoid(),
    name: 'TWO-TONE TWEED WRAP SKIRT',
    description: `TWO-TONE TWEED WRAP SKIRT WITH ADJUSTABLE BLACK TIES ON WAIST. FEATURES WORK-IN-PROGRESS STITCH DETAILS ON CENTER BACK. BLACK LOGO PRINTED ON THE LENGTH OF THE BLACK TIES. FULLY LINED.
      
    29% WOOL, 33% ACRYLIC, 23% POLYESTER, %15 LUREX. LINING 100% ACETATE. TRIM 100% POLYESTER.
      
    SAM IS 5'10" AND WEARS SIZE SMALL`,
    type: 'BOTTOMS',
    sizes: ['S', 'M', 'L'],
    images: [
      TwoToneTweedWrapSkirt,
      TwoToneTweedWrapSkirt02,
      TwoToneTweedWrapSkirt03,
      TwoToneTweedWrapSkirt04,
    ],
    price: 350.0,
    inStock: 5,
  },
  {
    id: nanoid(),
    name: 'WIDE-LEG PANTS',
    description: `HIGH-RISE STRAIGHT LEG PANTS WITH A SLIGHTLY CURVED SILHOUETTE. FEATURES CLASSIC JEAN DETAILING. BUTTON AND ZIP FLY CLOSURE, SIDE AND BACK POCKETS.
      
    100% POLYESTER.
      
    SAM IS 5'10" AND WEARS SIZE SMALL.`,
    type: 'BOTTOMS',
    sizes: ['XS', 'S', 'M', 'L'],
    images: [WideLegPants, WideLegPants02, WideLegPants03, WideLegPants04],
    price: 290.0,
    inStock: 5,
  },
];

export default Bottoms;
