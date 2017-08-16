
var React = require('react');
var {Link} = require('react-router');

var Examples = (props) => {
  return (
    <die>
      <h1 className='text-center page-title'>Examples</h1>
      <p>Here's a few locations to try out:</p>
      <ol>
        <li>
          <Link to='/?location=Kemi'>Kemi, FI</Link>
        </li>
        <li>
          <Link to='/?location=Athens'>Athens, GR</Link>
        </li>
      </ol>
    </die>
  );
};

module.exports = Examples;
