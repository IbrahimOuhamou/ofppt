// بسم الله الرحمن الرحيم
// la ilaha illa Allah Mohammed rassoul Allah

// import products_data from './Data.js';
const products_data = [
  { id: 1, title: 'PC Portable Gamer HP VICTUS', price: '7490 DH', thumbnail : 'HP16D0195NF.jpg' },
  { id: 2, title: 'PC Portable Gamer HP VICTUS', price: '2190 DH', thumbnail : 'HP14424U3EA.jpg' },
  { id: 3, title: 'Pc Portable Chromebook Acer', price: '3640 DH', thumbnail: 'NXATHEF002.jpg' },
  { id: 4, title: 'PC Portable - HUAWEI', price: '1270 DH', thumbnail: 'HUA6901443442959.jpg' },
];

function Product(props) {

  return (<div className="d1">
    <img src={props.p.thumbnail} alt="img"/>
    <h3>{props.p.title}</h3>
    <span>price: {props.p.price}</span>
    <button>bismi Allah</button>
  </div>)
}

export default function Products() {
  // for (let i = 0; i <= 4; i++) {
  //   alert(Object.keys(products_data[i]));
  //   products[i] = <Product p={ products_data[i] }></Product>
  // }

  return (<div className="products-list">
    {products_data.map(product => ( <Product p={product}></Product> ))}
  </div>);
}

