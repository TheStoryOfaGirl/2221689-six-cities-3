import { Good, HousingType, SixCities, UserType } from "../../const";
import CreateCommentDto from "../../dto/comment/create-comment.dto";
import CreateOfferDto from "../../dto/offer/create-offer.dto";
import CreateUserDto from "../../dto/user/create-user.dto";
import { CommentAuth, NewOffer, UserRegister } from "../../types/types";

export const adaptSignupToServer =
    (user: UserRegister): CreateUserDto => ({
        name: user.name,
        email: user.email,
        type: user.isPro ? UserType.Pro : UserType.Regular,
        password: user.password,
    });

export const adaptCreateOfferToServer =
    (offer: NewOffer): CreateOfferDto => ({
        title: offer.title,
        description: offer.description,
        city: offer.city.name as SixCities,
        previewImage: offer.previewImage,
        isPremium: offer.isPremium,
        type: offer.type as HousingType,
        bedrooms: offer.bedrooms,
        maxAdults: offer.maxAdults,
        price: offer.price,
        goods: offer.goods as Good[],
        location: [offer.location.latitude, offer.location.latitude]
    })

export const adaptCreateCommentToServer =
    (comment: CommentAuth): CreateCommentDto => ({
        comment: comment.comment,
        rating: comment.rating,
        offerId: comment.id
    })