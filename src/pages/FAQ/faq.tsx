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
    question: "What is the UAA - United Arts Arena?",
    answer:
      "The United Arts Arena (UAA) is the worlds first Art Sports League for NFT live art battles. It provides artists from all around the globe with a tangible space in the digital universe to grow within.",
  },
  {
    question: "How does a battle look like?",
    answer:
      "2 Artistteams battle against each other. They have 30 minutes to create their artwork. Afterwards we give out 3 points (1 judge, 1 crowd vote, 1 auction of the artworks) to see who wins the battle.",
  },
  {
    question: "Who chooses the winner?",
    answer:
      "We give out three points to determine the winner. One is given out by a judge and one will be given by the crowd through a poll. After that we auction away the NFTs of the artworks and the artwork that is sold for the highest amount will get the final point.",
  },
  {
    question: "Who gets the money after the NFT was sold?",
    answer:
      "The money will be split between the artists and the UAA. We will use the money to drive the UAA forward and eventually support less privileged artists around the world. The battle artists obviously are free to do with the money what they want.",
  },
  {
    question: "What do I need to participate as an artist?",
    answer:
      "Not much. Just a computer, internet and some type of tablet to draw on (wacom, ipad, ...). Everything else is taken care of by us.",
  },
  {
    question: "How can I participate in the UAA?",
    answer:
      "For now, just send us a message through one of our channels. We will get back to you asap.",
  },
  {
    question: "What is the UAA Cup?",
    answer:
      "The UAA Cup will be our first tournament to kick us off. It will be a classic tournament format. Each team will start in the group phase, funneling them into the KO Rounds and finally take them to the grand finals to become the first ever UAA Cup Champion. All battles will be streamed live!",
  },
];

export const FAQ: React.FC = () => (
  <div className={styles.faqWrapper}>
    <div className={styles.faq}>
      {questions.map((question) => (
        <Accordion key={question.question}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon htmlColor="#fff" />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography align="left">{question.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography align="left">{question.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  </div>
);
