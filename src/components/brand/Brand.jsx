import React from 'react';
import { google, slack, atlassian, dropbox, shopify } from './imports';
import './brand.css';

const Brand = () => (
  <div className="gpt3__brand section__padding">
    <div>
      <img src={google} alt="company" />
    </div>
    <div>
      <img src={slack} alt="company" />
    </div>
    <div>
      <img src={atlassian} alt="company" />
    </div>
    <div>
      <img src={dropbox} alt="company" />
    </div>
    <div>
      <img src={shopify} alt="company" />
    </div>
  </div>
);

export default Brand;