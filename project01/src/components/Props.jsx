import React from 'react';

// Grandparent → passes data as props
function Property(props) {
  return (
    <Child data={props} />
  );
}

// Parent → receives `data` and passes it down
function Child({ data }) {
  return (
    <GrandChild data1={data} />
  );
}

// Child → receives `data1` and uses its values
function GrandChild({ data1 }) {
  return (
    <>
      <h1>{data1.name}</h1>
      <h1>{data1.age}</h1>
    </>
  );
}

// Root component
const Props = () => {
  return (
    <div>
      <Property name="man" age="20" />
    </div>
  );
};

export default Props;
