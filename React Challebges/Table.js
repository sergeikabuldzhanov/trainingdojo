/* 
Your task is to implement a React component that renders a table with pagination.
The table has class name 'table' and contains three columns: ID, First Name and Last Name. It is populated with data that can be fetched from the mocked https://example.com/api/users endpoint. The endpoint accepts one query parameter: page (with zero based numbering). This is an example of a response formatted using JSON:
{
"count": 13,
"results": [
	{"id": 1, "firstName": "David", "lastName": "Wallace"},
	{"id": 2, "firstName": "Sonia", "lastName": "Ross"},
	{"id": 3, "firstName": "Anthony", "lastName": "Thomson"}
	]
}
Count's value points to the total number of results, whereas results contains items from the given page. The page size equals 10. The last  page of data might be smaller. If a request is sent with the array param page larger than the total number of pages, then results will be empty.
2. Initially, the table tbody should be populated with the first page of data.
3. The pagination section has class name pagination and consists of four buttons which are stacked horizontally.
Clicking the first button navigates to the first page of the data, whereas clicking the second button navigates to the previous page of data. The buttons become disabled either when the current page is the first page or when a page of data is currently being loaded. The buttons have (respectively) first-page-btn and previous-page-btn class names.
Similarly, clicking the third button navigates to the next page of data, whereas clicking the last button navigates to the last page of data. The buttons become disabled either when the current page is the last page or when a page of data is currently being loaded. The buttons have (respectively) next-page-btn and last-page-btn class names.
The content of the buttons should be respectively first, previous, next and last.
4. While data is being loaded, all buttons should be disabled.
5. The component should be the default export and can be either a function or class.
6. Use Fetch API for making requests.
7. Please remember to use body when rendering data.
ASSUPMTIONS
https://example.com is a mocked service - it can be accessed only in the Codility UI.
Assume that a request to the mocked https://example.com/api/users API never fails.
The preview tab will display your component. You can use it for testing purposes.
Design/styling is not accessed and will not affect the score. You should focus only on implementing the requirements.
You can use console.log and console.error for debugging purposes via your browser's dev tools.
Only one import is allowed: react (v16.9.0) It is at the top of the starting code.
Example 1.
As mentioned in the requirements, the first page of data should be displayed initially. That means that while the component is mounting, a request to https://example.com/api/users?page=0 should be made.
Example 2.
Lets assume the third page of data is currently displayed. Clicking the next button (assuming it is not disabled) triggers a request to https://example.com/api/users?page=3, whereas clicking the previous button results in a request being sent to https://example.com/api/users?page=1.
Example 3.
Lets assume the count value from the http://example.com/api/users?page=0 response equals 41. Clicking the last button navigates to the fifth page of data and a request to https://example.com/api/users?page=4 should be made. */
import React, { useState, useEffect } from "react";
export default function Table() {
  // fetch the data
  const [page, setPage] = useState(0);
  const [users, setUsers] = useState([]);
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch(`https://api.github.com/users?since=${page}&per_page=10`)
      .then((res) => res.json())
      .then((res) => {
        res.count = 99;
        setCount(res.count);
        setUsers(res);
      })
      .finally(() => setLoading(false));
  }, [page]);
  // display the first page
  // wire up the pagination
  const NumberOfPages = Math.floor(count / 10);
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Login</th>
            <th>URL</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr>
              <td>{user.id}</td>
              <td>{user.login}</td>
              <td>{user.url}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <section className="pagination">
        <button
          className="first-page-btn"
          disabled={page === 0 || loading}
          onClick={() => setPage(0)}
        >
          first
        </button>
        <button
          className="previous-page-btn"
          disabled={page === 0 || loading}
          onClick={() => {
            setPage((prevPage) => Math.max(0, prevPage - 1));
          }}
        >
          previous
        </button>
        <button
          className="next-page-btn"
          disabled={page === NumberOfPages || loading}
          onClick={() =>
            setPage((prevPage) => Math.min(NumberOfPages, prevPage + 1))
          }
        >
          next
        </button>
        <button
          className="last-page-btn"
          disabled={page === NumberOfPages || loading}
          onClick={() => {
            setPage(NumberOfPages);
          }}
        >
          last
        </button>
      </section>
      <strong>Page {page}</strong>
    </div>
  );
}
