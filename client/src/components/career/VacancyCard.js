import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import { useHistory } from "react-router-dom";
import { getAuth } from "firebase/auth";
import { app } from "../../auth/auth";

export default function VacancyCard(props) {
  const history = useHistory();
  const auth = getAuth(app);
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded((pre) => !pre);
    // if (!expanded) {
    // setTimeout(() => {
    //   setExpanded(false);
    // }, 10000);
    // }
  };

  const handleRedirect = (id) => {
    if (auth && auth.currentUser) {
      history.push("/apply/" + id);
    } else {
      history.push(`/reg?redirect=/apply/${id}`);
    }
  };

  return (
    <Card sx={{ maxWidth: 400 }}>
      <CardHeader
        // avatar={
        //   <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
        //     R
        //   </Avatar>
        // }
        // action={
        //   <IconButton aria-label="settings">
        //     <MoreVertIcon />
        //   </IconButton>
        // }
        title={
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            {props.title}
          </Typography>
        }
        // subheader="September 14, 2016"
      />
      <CardMedia component="img" height="194" image={props.icon} />
      {/**
    <CardContent>
        <Typography variant="body2" color="text.secondary">
          Vacancies: {props.number_of_vacancies}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Salary: {props.salary}
        </Typography>
      </CardContent>
    */}
      <CardActions disableSpacing>
        <Button
          color="info"
          variant="contained"
          size="small"
          onClick={handleExpandClick}
        >
          Learn More
        </Button>
        <Button
          sx={{ ml: "auto" }}
          variant="contained"
          color="success"
          onClick={() => handleRedirect(props._id)}
        >
          Apply Now
        </Button>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Description
          </Typography>
          <Typography paragraph>{props.description}</Typography>

          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            No. Of Vacancies
          </Typography>
          <Typography paragraph>{props.number_of_vacancies}</Typography>

          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Educational Qualification
          </Typography>
          <Typography paragraph>{props.qualification}</Typography>

          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Salary
          </Typography>
          <Typography paragraph>{props.salary}/- Rs</Typography>

          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Exam Date
          </Typography>
          <Typography paragraph>{props.exam_date}</Typography>

          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Fee for General/OBC
          </Typography>
          <Typography paragraph>{props.application_fee}/- Rs</Typography>

          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Fee for SC/ST or Physically Challenged
          </Typography>
          <Typography paragraph>{props.application_fee_dis}/- Rs</Typography>

          {props.lastdate && (
            <React.Fragment>
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                Last Date
              </Typography>
              <Typography paragraph>{props.lastdate}</Typography>
            </React.Fragment>
          )}
        </CardContent>
        <CardContent>
          <Button
            variant="text"
            href={props.url1}
            size="small"
            fullWidth
            target={"_blank"}
            endIcon={<i class="fas fa-long-arrow-alt-right"></i>}
          >
            Download Document 1
          </Button>

          <Button
            variant="text"
            href={props.url2}
            fullWidth
            size="small"
            target={"_blank"}
            endIcon={<i class="fas fa-long-arrow-alt-right"></i>}
          >
            Download Document 2
          </Button>

          <Button
            variant="text"
            href="/syllabus"
            fullWidth
            size="small"
            target={"_blank"}
            endIcon={<i class="fas fa-long-arrow-alt-right"></i>}
          >
            Download Syllabus
          </Button>
        </CardContent>
        <CardActions>
          <Button
            sx={{ ml: "auto" }}
            variant="contained"
            color="success"
            fullWidth
            onClick={() => handleRedirect(props._id)}
          >
            Apply Now
          </Button>
        </CardActions>
      </Collapse>
    </Card>
  );
}
