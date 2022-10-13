import React from "react";
import "./blog.css";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import logo from "../../asstes/logo/favicon.png";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "350px",
  height: "150px",
  bgcolor: "background.paper",
  color: "blue",
  boxShadow: 24,
  boderRadius: "10px",
  p: 4,
};

function Learnmore() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <div class="comment-box">
        <h3>leave a Comment</h3>
        <form class="comment-form">
          <input type="text" placeholder="Enter Your Name" />
          <input type="email" placeholder="Enter Your E-mail" />
          <textarea rows="5" placeholder="Your Comment"></textarea>
          <div>
            <Button onClick={handleOpen}>POST COMMENT</Button>

            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <img
                  src={logo}
                  alt="image"
                  style={{ width: "50px", marginTop: "-7%", marginLeft: "35%" }}
                />
                <Typography
                  id="modal-modal-title"
                  variant="h6"
                  component="h2"
                ></Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  THANKS FOR YOUR FEEDBACK <br /> your comment is posted
                </Typography>
              </Box>
            </Modal>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Learnmore;
