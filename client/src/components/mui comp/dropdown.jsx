import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Link } from 'react-router-dom';
export default function PositionedMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="demo-positioned-button"
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        sx={{ color: 'grey' , ":hover":{color:'white'}}}
      >
        Our Services <KeyboardArrowDownIcon/>
      </Button>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        PaperProps={{
          sx: {
            backgroundColor: 'black',
            color:'grey',
            margin:'50px 0 0 0 '
          },
        }}
      >
       <Link to='/Ceramic and Graphene coatings'> <MenuItem onClick={handleClose} sx={{":hover":{color:'white', backgroundColor:'grey'}}}>Ceramic and Graphene coatings</MenuItem></Link>
       <Link to='/Paint protection film'> <MenuItem onClick={handleClose} sx={{":hover":{color:'white', backgroundColor:'grey'}}} >Paint protection films</MenuItem></Link>
       <Link to='/Body-shop (Denting & Painting)'> <MenuItem onClick={handleClose} sx={{":hover":{color:'white', backgroundColor:'grey'}}}>Body-shop (Denting & Painting)</MenuItem></Link>
        <Link to='/Detailing and Interior cleaning' ><MenuItem onClick={handleClose} sx={{":hover":{color:'white', backgroundColor:'grey'}}}>Detailing and Interior cleaning</MenuItem></Link>
        <Link to='/Wrap Jobs' ><MenuItem onClick={handleClose} sx={{":hover":{color:'white', backgroundColor:'grey'}}}>Wrap Jobs</MenuItem></Link>
       <Link to="/Insurance Claim"> <MenuItem onClick={handleClose} sx={{":hover":{color:'white', backgroundColor:'grey'}}}>Insurance Claim</MenuItem></Link>
        <Link to="/Interior Modification"></Link><MenuItem onClick={handleClose} sx={{":hover":{color:'white', backgroundColor:'grey'}}}>Interior Modification</MenuItem>
       <Link to="/Other Services"> <MenuItem onClick={handleClose} sx={{":hover":{color:'white', backgroundColor:'grey'}}}>Other Services</MenuItem> </Link>
      </Menu>
    </div>
  );
}
