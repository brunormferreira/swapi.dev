/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import ModalReducerEnum from './enum';

const reducer = (state: any, action: any) => {
  const { type } = action;

  switch (type) {
    case ModalReducerEnum.SET_VISIBLE:
      return {
        ...state,
        isVisible: true,
      };

    case ModalReducerEnum.SET_INVISIBLE:
      return {
        ...state,
        isVisible: false,
      };

    default:
      return state;
  }
};

export default reducer;
