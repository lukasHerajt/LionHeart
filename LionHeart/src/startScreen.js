// import logo from "./logo.svg";
import { withStyles } from "@mui/styles";
import BusinessTwoToneIcon from "@mui/icons-material/BusinessTwoTone";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Button } from "@mui/material";
import "./startScreen.css";
import logo from "./logo.png";
import { useNavigate } from 'react-router-dom'


const styles = {
  root: {
    "& .MuiButton-contained": {
      padding: "6px 111px",
    },
    "& .MuiButton-containedPrimary": {
      backgroundColor: "#A7B5F9",
      "&:hover": {
        backgroundColor: "#4d68ee",
      },
    },
    "& .MuiButton-containedSecondary": {
      backgroundColor: "#F3B3AB",
      "&:hover": {
        backgroundColor: "#f97768",
      },
    },
    "& .MuiSvgIcon-colorPrimary": {
      fill: "#a7b5f9",
    },
    "& .MuiSvgIcon-colorSecondary": {
      fill: "#f3b3ab",
    },
  },
};

function StartScreen({ classes, userSubmitted }) {
  // TODO: lookup prop destructuring
  const navigate = useNavigate()
  const appSignup = (event) => {
    event.preventDefault(); // TODO: lookupmeaning
    userSubmitted("apprentice");
  };

  return (
    <div className={`${classes.root} Main-screen`}>
      <header className="header">
        <img src={logo} alt="Logo" />
        <h3>Welcome to Lionheart!</h3>
      </header>
      <header className="sub-header">
        <h5>One-click apprenticeships to grow your skills or business</h5>
      </header>
      <div className="box1">
        <div className="text">
          <AccountCircleIcon fontSize="large" color="primary" />
          <div className="title">For Apprentices</div>
          <div className="sub-title">World-class tech apprenticeships</div>
          <Button onClick={appSignup} variant="contained" color="primary">
            Sign up
          </Button>
        </div>
      </div>
      <div className="box2">
        {/* <div>
          <svg item xs={1}>
            <BusinessTwoToneIcon />
          </svg>
        </div> */}
        <div className="text">
          <BusinessTwoToneIcon fontSize="large" color="secondary" />
          <div className="title">For Companies</div>
          <div className="sub-title">Grow your business affordably</div>
          <Button
            onClick={() => {
              navigate(`/onboarding-C`)
            }}
            variant="contained"
            color="secondary">
            Sign up
          </Button>
        </div>
      </div>
      <footer className="f1">
        <div>
          Already have an account?
          <span style={{ fontWeight: "bold" }}> Log In</span>
        </div>
      </footer>
      <footer className="f2">
        <div>Forgot Password?</div>
      </footer>
    </div>
  );
}

export default withStyles(styles)(StartScreen);


// John's startScreen.js
// import { withStyles } from "@mui/styles";
// import BusinessTwoToneIcon from "@mui/icons-material/BusinessTwoTone";
// import AccountCircleIcon from "@mui/icons-material/AccountCircle";
// import { Button } from "@mui/material";
// import "./startScreen.css";
// import logo from "./logo.png";

// const styles = {
//   root: {
//     "& .MuiButton-contained": {
//       padding: "6px 111px",
//     },
//     "& .MuiButton-containedPrimary": {
//       backgroundColor: "#A7B5F9",
//       "&:hover": {
//         backgroundColor: "#4d68ee",
//       },
//     },
//     "& .MuiButton-containedSecondary": {
//       backgroundColor: "#F3B3AB",
//       "&:hover": {
//         backgroundColor: "#f97768",
//       },
//     },
//     "& .MuiSvgIcon-colorPrimary": {
//       fill: "#a7b5f9",
//     },
//     "& .MuiSvgIcon-colorSecondary": {
//       fill: "#f3b3ab",
//     },
//   },
// };

// function StartScreen({ classes, userSubmitted }) {
//   // TODO: lookup prop destructuring
//   const appSignup = (event) => {
//     event.preventDefault(); // TODO: lookupmeaning
//     userSubmitted("apprentice");
//   };

//   return (
//     <div className={`${classes.root} Main-screen`}>
//       <header className="header">
//         <img src={logo} alt="Logo" />
//         <h3>Welcome to Lionheart!</h3>
//       </header>
//       <header className="sub-header">
//         <h5>One-click apprenticeships to grow your skills or business</h5>
//       </header>
//       <div className="box1">
//         <div className="text">
//           <AccountCircleIcon fontSize="large" color="primary" />
//           <div className="title">For Apprentices</div>
//           <div className="sub-title">World-class tech apprenticeships</div>
//           <Button onClick={appSignup} variant="contained" color="primary">
//             Sign up
//           </Button>
//         </div>
//       </div>
//       <div className="box2">
//         {/* <div>
//           <svg item xs={1}>
//             <BusinessTwoToneIcon />
//           </svg>
//         </div> */}
//         <div className="text">
//           <BusinessTwoToneIcon fontSize="large" color="secondary" />
//           <div className="title">For Companies</div>
//           <div className="sub-title">Grow your business affordably</div>
//           <Button variant="contained" color="secondary">
//             Sign up
//           </Button>
//         </div>
//       </div>
//       <footer className="f1">
//         <div>
//           Already have an account?
//           <span style={{ fontWeight: "bold" }}> Log In</span>
//         </div>
//       </footer>
//       <footer className="f2">
//         <div>Forgot Password?</div>
//       </footer>
//     </div>
//   );
// }

// export default withStyles(styles)(StartScreen);
