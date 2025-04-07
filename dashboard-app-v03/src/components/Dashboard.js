import {Link} from "react-router-dom"
     


function Dashboard() {

    return (
      <>
        <nav>
          <span>[logo]</span> {" "}
          <span>User Name</span> {" "}
          <Link to="/login">Logout</Link>
        </nav>

        <table>
          <tr>
            <td>
              <p>Category 1</p>
              <p>Category 2</p>
              <p>Category 3</p>
              <p>Category 4</p>
              <p>Category 5</p>
              <p>Category 6</p>
            </td>
            <td>
              <p>Category 1</p>
              <p>Category 2</p>
            </td>
            <td>
              [about]
            </td>
          </tr>
        </table>
      </>
    );
  }
  
  export default Dashboard;
 