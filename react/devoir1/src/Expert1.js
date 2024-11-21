// بسم الله الرحمن الرحيم
// la ilaha illa Allah Mohammed rassoul Allah

import expertsData from './data.js';
import Expert from './Expert.js';

export default function Experts1() {
  return (<ul>
    { expertsData.map((expert) => <Expert expert={expert}></Expert>) }
  </ul>)
}


