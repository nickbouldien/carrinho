import React, { useState } from 'react';

const AuthProvider = (props) => {
  const [user, setUser] = useState(null); // [user, setUser]
  return props.render({user, setUser});
};

export { AuthProvider };
