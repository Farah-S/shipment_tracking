import React from 'react';
import {Col, Row} from 'react-bootstrap';
// import Table from 'react-bootstrap/Table';
import './shipment_details_table.css';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

function ShipmentDetailsTable ({data}) {
    //status values: DELIVERED_TO_SENDER, DELIVERED, CANCELLED

    const tableCellSX={padding: "5px 0px", paddingLeft:"12px", height:"5vh", color:"rgb(111, 111, 111)", fontSize:"calc(0px + 2vmin)", fontWeight: "500", borderBottom:"rgb(243, 243, 243)", borderBottomStyle:"solid", borderBottomWidth:"2px"};
    const tableHeadSX={padding: "5px 0px", paddingLeft:"12px", height:"5vh", color:"#aab2c1", fontSize:"calc(1px + 2vmin)", fontWeight: "500", borderBottom:"rgb(243, 243, 243)", borderBottomStyle:"solid", borderBottomWidth:"2px"};
    
    return (
        <div style={{width:"96%", justifyContent:"left", paddingBottom:"5vh"}}>
        <Table sx={{padding:"0", borderCollapse:"initial" }} className='Table'>
        {/* <Table responsive borderless className='Table'> */}
      {/* <thead style={{width:"100%",backgroundColor:"#f7f7f7"}}> */}
        <TableHead className='Table-head' style={{}}>
        <TableRow>
        {/* <tr> */}
         <TableCell sx={tableHeadSX} className='Table-head-cell'>Branch</TableCell>
         <TableCell sx={tableHeadSX} className='Table-head-cell'>Date</TableCell>
         <TableCell sx={tableHeadSX} className='Table-head-cell'>Time</TableCell>
         <TableCell sx={tableHeadSX} className='Table-head-cell' style={{width:"40%"}}>Details</TableCell>
          {/* <th></th>
          <th>Date</th>
          <th>Time</th>
          <th style={{width:"40%"}}>Details</th> */}
          </TableRow>
        {/* </tr> */}
      {/* </thead> */}
      </TableHead>
      {/* <tbody> */}
        <TableBody>
          <TableRow>
          {Array.from({ length: 4 }).map((_, index) => (
            <TableCell sx={tableCellSX} className='Table-cell' key={index}>Table cell {index}</TableCell>
          ))}
          </TableRow>
          <TableRow>
          {Array.from({ length: 4 }).map((_, index) => (
            <TableCell sx={tableCellSX} className='Table-cell' key={index}>Table cell {index}</TableCell>
          ))}
          </TableRow>
          <TableRow>
          {Array.from({ length: 4 }).map((_, index) => (
            <TableCell sx={tableCellSX} className='Table-cell' key={index}>Table cell {index}</TableCell>
          ))}
          </TableRow>
          <TableRow>
          {Array.from({ length: 4 }).map((_, index) => (
            <TableCell sx={tableCellSX} className='Table-cell' key={index}>Table cell {index}</TableCell>
          ))}
          </TableRow>
          <TableRow>
          {Array.from({ length: 4 }).map((_, index) => (
            <TableCell sx={tableCellSX} className='Table-cell' key={index}>Table cell {index}</TableCell>
          ))}
          </TableRow>
          <TableRow>
          {Array.from({ length: 4 }).map((_, index) => (
            <TableCell sx={tableCellSX} className='Table-cell' key={index}>Table cell {index}</TableCell>
          ))}
          </TableRow>
          <TableRow>
          {Array.from({ length: 4 }).map((_, index) => (
            <TableCell sx={tableCellSX} className='Table-cell' key={index}>Table cell {index}</TableCell>
          ))}
          </TableRow>
          <TableRow>
          {Array.from({ length: 4 }).map((_, index) => (
            <TableCell sx={tableCellSX} className='Table-cell' key={index}>Table cell {index}</TableCell>
          ))}
          </TableRow>

        {/* <tr> */}
        
        {/* </tr> */}
        {/* <tr>
       
          {Array.from({ length: 4 }).map((_, index) => (
            <td key={index}>Table cell {index}</td>
          ))}
        </tr>
        <tr>
     
          {Array.from({ length: 4 }).map((_, index) => (
            <td key={index}>Table cell {index}</td>
          ))}
        </tr> */}
        </TableBody>
      {/* </tbody> */}
    </Table>
        </div>
        
    );
};

export default ShipmentDetailsTable;