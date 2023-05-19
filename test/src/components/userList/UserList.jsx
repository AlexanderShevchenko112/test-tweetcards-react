import { useEffect, useState } from "react";
import UserCard from "../userCard/UserCard";
import { getUsers } from "../../helpers/fetch";
import css from "./UserList.module.css";
const UserList = () => {
  const [users, setUsers] = useState([]);
  const [visibleUsers, setVisibleUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 3;
  const totalPages = Math.ceil(users.length / usersPerPage);

  useEffect(() => {
    getUsers()
      .then((data) => {
        setUsers(data);
        setVisibleUsers(data.slice(0, usersPerPage));
      })
      .catch((error) => console.error("Error", error));
  }, []);

  const loadMoreUsers = () => {
    const nextPage = currentPage + 1;
    const startIndex = (nextPage - 1) * usersPerPage;
    const endIndex = startIndex + usersPerPage;
    const newVisibleUsers = users.slice(startIndex, endIndex);
    setVisibleUsers((prevVisibleUsers) => [
      ...prevVisibleUsers,
      ...newVisibleUsers,
    ]);
    setCurrentPage(nextPage);
  };
  return (
    <div>
      <ul className={css.userList}>
        {visibleUsers.map(({ id, user, tweets, followers, avatar }) => (
          <UserCard
            key={id}
            id={id}
            user={user}
            tweets={tweets}
            followers={followers}
            avatar={avatar}
          />
        ))}
      </ul>
      {currentPage < totalPages && (
        <button className={css.loadmoreBtn} onClick={loadMoreUsers}>
          Load More
        </button>
      )}
    </div>
  );
};

export default UserList;
