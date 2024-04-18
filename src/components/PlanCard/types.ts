import {Plan} from '../../pages/Home/types';

export interface PlanCardProps {
  data: Plan;
  onPress: (data: Plan) => void;
}
