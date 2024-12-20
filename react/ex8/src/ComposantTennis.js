// بسم الله الرحمن الرحيم
// la ilaha illa Allah Mohammed Rassoul Allah

import { useDispatch } from 'react-redux';

export default ComposantTennis() {
  return (<div>
    <input type="button", value="ON/OFF"
    onClick={() => { useDispatch({type: 'playPause' }) }}>
  </div>)
}

