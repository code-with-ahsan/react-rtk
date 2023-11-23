import './App.css'
import { useSelector, useDispatch } from 'react-redux';
import { selectNotificationsCount, selectResetStatus } from './store/notifications/notifications.selectors';
import { increment, resetCountViaApi } from './store/notifications/notifications.slice';
import { AppDispatch } from './store/store';

function App() {

  const count = useSelector(selectNotificationsCount);
  const dispatch = useDispatch<AppDispatch>();
  const resetStatus = useSelector(selectResetStatus);

  const resetButtonText = () => {
    switch (resetStatus) {
      case 'idle':
      case 'error':
        return 'Reset';
      case 'loading':
        return 'Loading...';
    }
  }

  return (
    <>
      <h1>Notifications Count = {count}</h1>
      <div className="card">
        <button onClick={() => {
          dispatch(increment())
        }}>
          Increment
        </button>
        <button onClick={() => {
          dispatch(resetCountViaApi())
        }}>
          { resetButtonText() }
        </button>
      </div>
    </>
  )
}

export default App
