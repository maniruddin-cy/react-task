import { useState } from "react";
import "./App.css";
import Data from "./Data.json";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "./assets/Components/Form";
function App() {
  const [currentPage, setCureentPage] = useState(1);
  const recordPerPage = 3;
  const lastIndex = currentPage * recordPerPage;
  const firstIndex = lastIndex - recordPerPage;
  const records = Data.slice(firstIndex, lastIndex);
  const npage = Math.ceil(Data.length / recordPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);
  return (
    <>
      <div>
        <table className="table">
          <thead>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
          </thead>
          <tbody>
            {records.map((d, i) => (
              <tr key={i}>
                <td>{d.ID}</td>
                <td>{d.Name}</td>
                <td>{d.Email}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <nav>
          <ul className="pagination">
            <li className="page-item">
              <a href="#" className="page-link" onClick={prePage}>
                Prev
              </a>
            </li>
            {numbers.map((n, i) => (
              <li
                className={`page-item ${currentPage === n ? "active" : ""}`}
                key={i}
              >
                <a
                  href="#"
                  className="page-link"
                  onClick={() => changeCPage(n)}
                >
                  {n}
                </a>
              </li>
            ))}
            <li className="page-item">
              <a href="#" className="page-link" onClick={nextPage}>
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <Form />
    </>
  );
  function prePage() {
    if (currentPage !== 1) {
      setCureentPage(currentPage - 1);
    }
  }
  function changeCPage(id) {
    setCureentPage(id);
  }
  function nextPage() {
    if (currentPage !== npage) {
      setCureentPage(currentPage + 1);
    }
  }
}

export default App;
