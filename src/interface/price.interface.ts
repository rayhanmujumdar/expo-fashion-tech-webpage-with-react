export type TBenefit = {
  name: string;
};
export type TOffersItem = {
  id: number | string;
  name: string;
  price: number;
  className?: string;
  benefits: TBenefit[];
};
