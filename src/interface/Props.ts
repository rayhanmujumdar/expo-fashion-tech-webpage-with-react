import { TService } from "./home.interface";
import { TOffersItem } from "./price.interface";

export type TProps = Partial<{
  children: string | JSX.Element | JSX.Element[];
  // home page service type props
  service: TService;
  // price page offerItem type props
  offerItem: TOffersItem;
  className: string;
}>;
