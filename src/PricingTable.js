import React from 'react'
import './PricingTable.css';

function PricingTable() {
    return ( 
    <div className="columns">
          <h3>Feature 2</h3>
        <ul class="price">
            <li class="header">Basic</li>
            <li class="grey">$ 9.99 / year</li>
            <li>10GB Storage</li>
            <li>10 Emails</li>
            <li>10 Domains</li>
            <li>1GB Bandwidth</li>
            <li class="grey"><a href="#" class="button">Sign Up</a></li>
        </ul>
    </div>
    )
}

export default PricingTable
