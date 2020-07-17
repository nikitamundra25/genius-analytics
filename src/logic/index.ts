import { Logic, createLogic } from 'redux-logic';
import { push } from 'react-router-redux';
import { DashBoardLogics } from "./Dashboard";
import { PickupLogics } from './Pickup';

export const redirectToLogic = createLogic({
  type: 'REDIRET_TO',
  async process(data, dispatch: any, done) {
    const action: any = data.action;
    dispatch(push(action.payload.path));
    done();
  },
});

export const AllLogics: Logic[]|any = [
...DashBoardLogics,
...PickupLogics,
  redirectToLogic,
];
