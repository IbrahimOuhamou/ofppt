// بسم الله الرحمن الرحيم
// la ilaha illa Allah Mohammed rassoul Allah

// function 

export default function ResultatList(props) {
  const list = props.list;
  const value = props.value;

  alert('ref is: ' + value.current.value);

  return (<div>
    <h1>composant ResultatList</h1>
    <ul>
      {
        list.filter((item) => {
          return item.type == value.current.value;
        }).map((item) => {
          return <li>{item.nom}</li>
        })
      }
    </ul>
  </div>);
}

