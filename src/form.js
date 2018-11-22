import React, { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = url => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(async () => {
    const response = await axios.get(url);
    const data = await response;
    console.log(data);
    const items = data[0].name;
    setData(items);
    setLoading(false);
  }, []);

  return { data, loading };
};

function User(user) {
  return <p>{user.name}</p>;
}

export default function App() {
  const { data, loading } = useFetch('/api/users');
  console.log('IN APP', data, loading);

  return (
    <div className="login">
      <h1>Give me some info</h1>
      <form>
        <input type="text" name="name" placeholder="Walter White" />
        <input type="text" name="age" placeholder="54" />
        <input type="text" name="job" placeholder="Chemist" />
        <button className="btn btn-primary btn-block btn-large">Submit</button>
      </form>

      {loading ? <div>...loading</div> : data.map(user => User(user))}
    </div>
  );
}
