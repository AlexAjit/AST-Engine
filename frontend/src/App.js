import React from "react";
import Header from "./components/Header";
import MainPage from "./pages/MainPage";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("Error caught by ErrorBoundary:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return <div className="text-red-500 p-4">Something went wrong. Please try again later.</div>;
    }
    return this.props.children;
  }
}

const App = () => (
  <ErrorBoundary>
    <div className="min-h-screen bg-black text-white">
      <Header />
      <MainPage />
    </div>
  </ErrorBoundary>
);

export default App;
