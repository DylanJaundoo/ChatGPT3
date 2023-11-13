import React from 'react';
import Feature from '../../components/feature/Feature';
import './what.css';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="What is GPT-3" text="Generative Pre-trained Transformer 3 is a large language model released by OpenAI in 2020. Like its predecessor GPT-2, it is a decoder-only transformer model of deep neural network, which uses attention in place of previous recurrence- and convolution-based architectures." />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
      <p>Explore the Library</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Chatbots" text="Chat GPT-3 is an artificial intelligence language model created by OpenAI. It can understand and generate natural language responses with a high degree of accuracy." />
      <Feature title="Knowledgebase" text="A knowledge base is a self-serve online library of information about a product or service." />
      <Feature title="Education" text="Learn with access to information beyond your imagination. Ask a quesiton, get an answer." />
    </div>
  </div>
);

export default WhatGPT3;