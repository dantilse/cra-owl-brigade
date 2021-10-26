const users = {
  o9taKQZhzPUL86oWX76bM6kkUR93: {
    displayName: "Land grouse",
    email: "johnnyfive@gmail.com",
    id: "o9taKQZhzPUL86oWX76bM6kkUR93",
    photoURL: "https://google.com",
    // should we have a single role or multiple?
    roles: ["admin", "user"],
    lastActive: "timestamp",
    // would selections work for cities, suggestions, and any future addition?
    selections: [
      // new selection added here and on the guid of the item in type
      {
        id: "guid",
        type: "city | suggestion",
        value: true,
      },
    ],
  },
};

export default users;
