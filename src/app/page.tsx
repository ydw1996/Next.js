import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const Home = () => {
  const name = "David";
  // const link = "https://www.google.com/";
  return (
    <Box className="bg-[#f1f1f1] h-screen w-full p-4">
      <Button variant="contained">{name} World</Button>
    </Box>
  );
};
export default Home;
