// بسم الله الرحمن الرحيم
// la ilaha illa Allah Mohammed Rassoul Allah

import { useDispatch } from 'react-redux';

export default function Addnoteform() {
  const dispatch = useDispatch();

  function f1() {
    dispatch(
      {
        type: 'ADD_NOTE',
        titre: document.getElementById('c1id1').value,
        contenu: document.getElementById('c1id2').value,
      }
    )
  }

  return (<div classNme="c1">
    <h1>Ajouter Note</h1>
    <form>
      <label>titre: </label>
      <input type="text" id="c1id1" /> <br />
      <label>contenu: </label>
      <textarea id="c1id2" row={5} cols={40}></textarea>
      <button type="button" onClick={f1}>Ajouter note</button>
    </form>
  </div>);
}

