var React = require('react');
var { Link } = require('react-router');

var Examples = props => {
  return (
    <die>
      <h1 className="text-center page-title">Examples</h1>
      <p>Here's a few locations to try out:</p>
      <ol>
        <li>
          <Link to="/?location=Helsinki">Helsinki, FI</Link>
        </li>
        <li>
          <Link to="/?location=Athens">Athens, GR</Link>
        </li>
        <li>
          <Link to="/?location=London">London, UK</Link>
        </li>
        <li>
          <Link to="/?location=New York">New York, US</Link>
        </li>
        <li>
          <Link to="/?location=Paris">Paris, FR</Link>
        </li>
        <li>
          <Link to="/?location=Moscow">Moscow, RU</Link>
        </li>
        <li>
          <Link to="/?location=Sydney">Sydney, AU</Link>
        </li>
        <li>
          <Link to="/?location=Tokyo">Tokyo, JP</Link>
        </li>
        <li>
          <Link to="/?location=Berlin">Berlin, DE</Link>
        </li>
        <li>
          <Link to="/?location=Stockholm">Stockholm, SE</Link>
        </li>
        <li>
          <Link to="/?location=Rio de Janeiro">Rio de Janeiro, BR</Link>
        </li>
      </ol>
    </die>
  );
};

module.exports = Examples;
