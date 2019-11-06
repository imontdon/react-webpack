import * as React from 'react';
import * as ReactDOM from 'react-dom';

const Index = () :JSX.Element => {
  return (
    <div className="container">
      <h1>Hello React!</h1>
    </div>
  );
}

ReactDOM.render(<Index />, document.getElementById('root'));

export default Index
