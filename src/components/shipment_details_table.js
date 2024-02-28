import React from 'react';
import './shipment_details_table.css';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

function ShipmentDetailsTable ({data}) {

    const tableCellSX={width:"20%", padding: "1vh 0px", paddingLeft:"1.5vw", height:"5vh", color:"rgb(70, 70, 70)", fontSize:"calc(0px + 2vmin)", fontWeight: "500", borderBottom:"rgb(243, 243, 243)", borderBottomStyle:"solid", borderBottomWidth:"2px"};
    const tableHeadSX={padding: "1vh 0px", paddingLeft:"1.5vw", height:"5vh", color:"#bbc1c8", fontSize:"calc(1px + 2vmin)", fontWeight: "550", borderBottom:"rgb(243, 243, 243)", borderBottomStyle:"solid", borderBottomWidth:"2px"};
    
    return (
        <div style={{width:"96%", justifyContent:"left", paddingBottom:"5vh"}}>
            <Table sx={{padding:"0", borderCollapse:"initial" }} className='Table'>
                <TableHead className='Table-head' style={{}}>
                    <TableRow>
                        <TableCell sx={tableHeadSX}>Branch</TableCell>
                        <TableCell sx={tableHeadSX}>Date</TableCell>
                        <TableCell sx={tableHeadSX}>Time</TableCell>
                        <TableCell sx={tableHeadSX} style={{width:"40%"}}>Details</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        {Array.from({ length: 4 }).map((_, index) => (
                            <TableCell sx={tableCellSX} key={index}>
                                Table cell {index}
                            </TableCell>
                        ))}
                    </TableRow>
                    <TableRow>
                        {Array.from({ length: 4 }).map((_, index) => (
                            <TableCell sx={tableCellSX} key={index}>
                                Table cell {index}
                            </TableCell>
                        ))}
                    </TableRow>
                    <TableRow>
                        {Array.from({ length: 4 }).map((_, index) => (
                            <TableCell sx={tableCellSX} key={index}>
                                Table cell {index}
                            </TableCell>
                        ))}
                    </TableRow>
                    <TableRow>
                        {Array.from({ length: 4 }).map((_, index) => (
                            <TableCell sx={tableCellSX} key={index}>
                                Table cell {index}
                            </TableCell>
                        ))}
                    </TableRow>
                    <TableRow>
                        {Array.from({ length: 4 }).map((_, index) => (
                            <TableCell sx={tableCellSX} key={index}>
                                Table cell {index}
                            </TableCell>
                        ))}
                    </TableRow>
                    <TableRow>
                        {Array.from({ length: 4 }).map((_, index) => (
                            <TableCell sx={tableCellSX} key={index}>
                                Table cell {index}
                            </TableCell>
                        ))}
                    </TableRow>
                    <TableRow>
                        {Array.from({ length: 4 }).map((_, index) => (
                            <TableCell sx={tableCellSX} key={index}>
                                Table cell {index}
                            </TableCell>
                        ))}
                    </TableRow>
                    <TableRow>
                        {Array.from({ length: 4 }).map((_, index) => (
                            <TableCell sx={tableCellSX} key={index}>
                                Table cell {index}
                            </TableCell>
                        ))}
                    </TableRow>
                </TableBody>
            </Table>
        </div>
    );
};

export default ShipmentDetailsTable;