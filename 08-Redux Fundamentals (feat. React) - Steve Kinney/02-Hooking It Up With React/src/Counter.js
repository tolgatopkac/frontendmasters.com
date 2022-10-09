import { useSelector } from 'react-redux';

import { decrement, increment, set } from './actions';
import { SetCounter } from './SetCounter';
import { useActions } from './use-actions';
import { useCounter } from './use-counter';

export const Counter = () => {
  const incident = 'Incident';

  // USE-COUNTER
  const { count, increment, decrement, set } = useCounter();

  // USE-ACTIONS
  // const count = useSelector((state) => state.count);
  // const actions = useActions({ increment, decrement, set });

  // const dispatch = useDispatch();
  // const actions = bindActionCreators({ increment, decrement, set }, dispatch);

  return (
    <main className="Counter">
      <h1>Days Since Last {incident}</h1>
      <p className="count">{count}</p>
      <section className="controls">
        <button onClick={() => increment()}>Increment</button>
        <button onClick={() => set(0)}>Reset</button>
        <button onClick={() => decrement()}>Decrement</button>
      </section>
      <SetCounter />
    </main>
  );
};

export default Counter;
