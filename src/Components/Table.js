import React from 'react'
import {Link} from 'react-router-dom';
import './Table.css';

const Table = () => {
  return (
    <div style={{display:"flex",justifyContent:"center",backgroundColor:"#ffffff",width:"80%",marginLeft:"9em",marginTop:"3em"}}>
        <table style={{width:"100%",marginTop:"0em"}}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Course</th>
            <th>Batch</th>
            <th>Change</th>
          </tr>
        </thead>
        <tbody >
          <tr>
            <td>Akram</td>
            <td>21</td>
            <td>Male</td>
            <td>React</td>
            <td><Link>link</Link></td>
          </tr>
          <tr>
            <td>john</td>
            <td>21</td>
            <td>Male</td>
            <td>Node js</td>
            <td><Link>link</Link></td>
          </tr>
          <tr>
            <td>wick</td>
            <td>21</td>
            <td>Male</td>
            <td>Mongo</td>
            <td><Link>link</Link></td>
          </tr>
          <tr>
            <td>baba</td>
            <td>21</td>
            <td>Male</td>
            <td>React</td>
            <td><Link>link</Link></td>
          </tr>
          <tr>
            <td>yaga</td>
            <td>21</td>
            <td>Male</td>
            <td>Express</td>
            <td><Link>link</Link></td>
          </tr>
          <tr>
            <td>yaga</td>
            <td>21</td>
            <td>Male</td>
            <td>Express</td>
            <td><Link>link</Link></td>
          </tr>
          <tr>
            <td>yaga</td>
            <td>21</td>
            <td>Male</td>
            <td>Express</td>
            <td><Link>link</Link></td>
          </tr>
          <tr>
            <td>yaga</td>
            <td>21</td>
            <td>Male</td>
            <td>Express</td>
            <td><Link>link</Link></td>
          </tr>
          <tr>
            <td>yaga</td>
            <td>21</td>
            <td>Male</td>
            <td>Express</td>
            <td><Link>link</Link></td>
          </tr>
          <tr>
            <td>yaga</td>
            <td>21</td>
            <td>Male</td>
            <td>Express</td>
            <td><Link>link</Link></td>
          </tr>
          <tr>
            <td>yaga</td>
            <td>21</td>
            <td>Male</td>
            <td>Express</td>
            <td><Link>link</Link></td>
          </tr>
          </tbody>
          </table>
    </div>
  )
}

export default Table