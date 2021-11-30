import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React from "react";

import styles from "./faq.module.scss";

const questions = [
  {
    question: "What is the UAA",
    answer: "It is the United Arts Arena",
  },
  {
    question: "Why is the UAA",
    answer: "Because it needs the United Arts Arena",
  },
];

export const FAQ: React.FC = () => (
  <div className={styles.faqWrapper}>
    <div className={styles.faq}>
      {questions.map((question) => (
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon htmlColor="#fff" />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>{question.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{question.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  </div>
);
