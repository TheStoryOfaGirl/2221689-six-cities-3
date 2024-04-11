import { Convenience } from './convenience.enum.js';
import { HousingType } from './housing-type.enum.js';
import { User } from './user.type.js';

export type Offer = {
   title: string;
   description: string;
   createdDate: Date;
   city: string;
   previewImage: string;
   images: string[];
   isPremium: boolean;
   favorite: boolean;
   rating: number;
   type: HousingType;
   roomsCount: number;
   guestsCount: number;
   price: number;
   conveniences: Convenience[];
   authorOffer: User;
   commentsCount: number;
   coordinats: [number, number]
}