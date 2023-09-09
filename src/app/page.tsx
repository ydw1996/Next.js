import React from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const Home = () => {
  const name = "David";

  return (
    <Router>
      <Box className="bg-black h-screen w-full p-4">
        <Button variant="contained">
          <Link to="/app/list/page">Go to Page</Link>
        </Button>
      </Box>
      <Button>
        <Route path="/app/list/page">
          <ListPage />
        </Route>
      </Button>
    </Router>
  );
};

const ListPage = () => {
  return <div>This is the List Page</div>;
};
export default Home;
