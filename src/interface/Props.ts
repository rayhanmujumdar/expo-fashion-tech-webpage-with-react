import { TService } from "./services";

export type TProps = Partial<{
  children: string | JSX.Element | JSX.Element[];
  service: TService;
  className: string;
}>;
