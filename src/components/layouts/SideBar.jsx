import Stack from "react-bootstrap/Stack";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    // vertical Stack from react-bootstrap
    <Stack gap={2}>
      <div className="p-2">
        <Link className="nav-link" to="/user/borrow-history">
          Borrow History
        </Link>
      </div>
      <div className="p-2">
        <Link className="nav-link" to="/user/profile">
          Profile
        </Link>
      </div>

      <div className="p-2">
        <Link className="nav-link" to="/user">
          Dashboard
        </Link>
      </div>

      <div className="p-2">
        <Link className="nav-link" to="/user/books">
          Book
        </Link>
      </div>
      <hr />
      {/* Admin Only */}
      <div className="p-2">
        <Link className="nav-link" to="/user/user-list">
          All Users
        </Link>
      </div>

      <div className="p-2">
        <Link className="nav-link" to="/user/manage-books">
          Manage Books
        </Link>
      </div>

      <div className="p-2">
        <Link className="nav-link" to="/user/manage-borrows">
          Manage Borrows
        </Link>
      </div>

      <div className="p-2">
        {" "}
        <Link className="nav-link" to="/user/manage-reviews">
          Manage Reviews
        </Link>
      </div>
    </Stack>
  );
}
