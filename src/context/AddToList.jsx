import React, { createContext, useEffect, useState } from "react";

export const addPlace = createContext();

function AddToListContext({ children }) {
  const [users, setUsers] = useState(null);
  const [id, setId] = useState(null);
  const [data, setData] = useState(null);

  async function fetchUser() {
    try {
      let response = await fetch(
        'https://moviedatabase-7ddef-default-rtdb.asia-southeast1.firebasedatabase.app/usertravelhistory.json'
      );
      let obj = await response.json();

      let arr = [];
      for (let key in obj) {
        arr.push({ id: key, ...obj[key] });
      }

      setUsers(arr);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  }

  // Identify logged-in user
  useEffect(() => {
    if (users) {
      let email = JSON.parse(localStorage.getItem("user"));
      if (!email) return;

      let currentUser = users.find((ele) => ele.email === email);
      if (currentUser) {
        setId(currentUser.id);
      }
    }
  }, [users]);

  // Fetch data after ID is set
  useEffect(() => {
    if (id) {
      fetchUserbyID();
    }
  }, [id]);

  async function postUserData(obj) {
    if (!id) {
      console.warn("User ID not set, cannot post data.");
      return;
    }

    try {
      await fetch(
        `https://moviedatabase-7ddef-default-rtdb.asia-southeast1.firebasedatabase.app/usertravelhistory/${id}.json`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(obj),
        }
      );

      // Refresh data after post
      fetchUserbyID();
    } catch (error) {
      console.error("Failed to post user data:", error);
    }
  }

  async function fetchUserbyID() {
    try {
      let response = await fetch(
        `https://moviedatabase-7ddef-default-rtdb.asia-southeast1.firebasedatabase.app/usertravelhistory/${id}.json`
      );
      let obj = await response.json();

      let arr = [];
      for (let key in obj) {
        arr.push({ id: key, ...obj[key] });
      }
// console.log(arr)
      setData(arr); // ✅ Save parsed data
    } catch (error) {
      console.error("Error fetching user-specific data:", error);
    }
  }

  return (
    <addPlace.Provider value={{ fetchUser, postUserData, data }}>
      {children}
    </addPlace.Provider>
  );
}

export default AddToListContext;
