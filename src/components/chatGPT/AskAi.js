import axios from 'axios';
import React, { useState } from 'react'

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";


export default function AskAi() {


    const [prompt, setPrompt] = useState("");
    const [response, setResponse] = useState("");

    const handleSubmit = (e) => {
      e.preventDefault();

      // Send a request to the server with the prompt
      axios
        .post("https://sports-app.herokuapp.com/askai/", { prompt })
        .then((res) => {
          // Update the response state with the server's response
          setResponse(res.data);
        })
        .catch((err) => {
          console.error(err);
        });
    };

    return (
      <div>
        <Container class="d-flex justify-content-center">
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Ask AI</Form.Label>
              <Form.Control
                placeholder="Who will win the super bowl?"
                as="textarea"
                rows={3}
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
              />
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form.Group>
          </Form>
          <p>{response}</p>
        </Container>
      </div>
    );
}
