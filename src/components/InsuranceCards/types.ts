export interface InsuranceCardsProps {
  data: Insurance;
  active: boolean;
  onPressActive: (data: Insurance) => void;
}
export interface Insurance {
  id: number;
  icon: JSX.Element;
  title: string;
  description: string;
}
