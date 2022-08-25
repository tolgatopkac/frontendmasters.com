import { Component } from "react";
import { Link, Navigate } from "react-router-dom";

class ErrorBoundary extends Component {
  state = { hassError: false, redirect: false };

  static getDerivedStateFromError() {
    return { hassError: true };
  }

  componentDidCatch(error, info) {
    console.error(error, info);
  }

  componentDidUpdate() {
    if (this.state.hassError) {
      setTimeout(() => this.setState({ redirect: true }), 5000);
    }
  }

  render() {
    if (this.state.redirect) {
      return <Navigate to="/" />;
    }
    if (this.state.hassError) {
      return (
        <h2>
          There was an error.
          <Link to="/">Click Here</Link> to go back to the homepage.
        </h2>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
