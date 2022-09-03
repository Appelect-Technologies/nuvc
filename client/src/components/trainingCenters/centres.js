import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(No, state,district,tpname,tcname,sector,job,spocname,spocemail,spocnum,address) {
    return { No, state,district,tpname,tcname,sector,job,spocname,spocemail,spocnum,address };
  }
  
  const rows = [
    createData(1,'DELHI','EAST','ACCEDE TRADING PRIVATE LIMITED','Accede_Ashok Nagar_Delhi','Apparels','Export Assistant',	'Meenakshi Beniwal',	'atplashoknagar01@gmail.com',	'9891594881',	'D-294 Lower Ground Floor Ground Floor & First Floor New Ashok Nagar Benis Public School Delhi-110096'),
    createData(2,	'DELHI',	'EAST',	'ACCEDE TRADING PRIVATE LIMITED'	,'Accede_Ashok Nagar_Delhi'	,'Electronics & Hardware',	'Field Technician Computing And Peripherals'	,'Meenakshi Beniwal',	'atplashoknagar01@gmail.com',	'9891594881',	'D-294 Lower Ground Floor Ground Floor & First Floor New Ashok Nagar Benis Public School Delhi-110096'),
    createData("3",	"DELHI",	"NORTH WEST",	"ACCEDE TRADING PRIVATE LIMITED",	"Accede_Sawada Ghevra_Delhi",	"Apparels",	"Export Assistant",	"Arun Kumar",	"accedesawadaghevra01@gmail.com",	"8448630596",	"Khasra No-24/7 Near J.J Colony Sawda Ghewra Village Ghewra New Delhi-110081 (Entire Ground Floor measuring Play Ground 1000 sq ft and Parking 700 sq ft)"
    ),
    createData("4",	"DELHI",	"NORTH WEST",	"ACCEDE TRADING PRIVATE LIMITED",	"Accede_Sawada Ghevra_Delhi",	"Electronics & Hardware	Field", "Technician Computing And Peripherals",	"Arun Kumar"	,"accedesawadaghevra01@gmail.com",	"8448630596",	"Khasra No-24/7 Near J.J Colony Sawda Ghewra Village Ghewra New Delhi-110081 (Entire Ground Floor measuring Play Ground 1000 sq ft and Parkin"
    ),
    createData("5",	"DELHI",	"SOUTH",	"Nayi Disha Organization",	"Nayi Disha Organization",	"	Apparels",	"	Fashion Designer",	"	yash pal",	"	info.sipsedu@gmail.com",	"	7503386502",	"	Plot No.-16 Lane No.-4 Anupam Enclave Saidulajab"
    ),
    createData("6",	"DELHI",	"SOUTH",	"NISHULK SHIKSHA SAMITI",	"JEEWAN VIDYAPEETH	Beauty & Wellness	Pedicurist and Manicurist	UPASNA	",	"info.nss.khadar@gmail.com	",	"8076307988",	"	H NO-4-B GROUND FLOOR FRONT SIDE MADANPUR KHADAR"
    ),
    createData("7",	"DELHI",	"NEW DELHI",	"Society Towards Operation Pollution",	"Society Towards Operation Pollution (STOP)",	"	Apparels",	"	Self Employed Tailor",	"	Jyoti Payal",	"	kamalkentura@gmail.com",	"	8800163217",	"	H. No RZ B 10 KH. No-79/16/2 Nihal Vihar Nangloi New Delhi"
    ),
    createData("8",	"DELHI",	"NEW DELHI",	"Society Towards Operation Pollution",	"Society Towards Operation Pollution (STOP)",	"	Beauty & Wellness",	"	Hair Stylist	",	"Jyoti Payal",	"	kamalkentura@gmail.com",	"	8800163217	",	"H. No RZ B 10 KH. No-79/16/2 Nihal Vihar Nangloi New Delhi"
    ),
    createData("9",	"DELHI",	"NEW DELHI",	"Society Towards Operation Pollution",	"Society Towards Operation Pollution (STOP)	",	"Retail",	"	Retail Sales Associate	",	"Jyoti Payal",	"	kamalkentura@gmail.com	",	"8800163217",	"	H. No RZ B 10 KH. No-79/16/2 Nihal Vihar Nangloi New Delhi"
    ),
    
  ];

export default function Center() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Sr.No.</TableCell>
            <TableCell align="right">State</TableCell>
            <TableCell align="right">District</TableCell>
            <TableCell align="right">TP Name</TableCell>
            <TableCell align="right">TC Name</TableCell>
            <TableCell align="right">Sector</TableCell>
            <TableCell align="right">Job Role</TableCell>
            <TableCell align="right">TC SPOC Name</TableCell>
            <TableCell align="right">TC SPOC Email ID</TableCell>
            <TableCell align="right">TC Spoc Mobile</TableCell>
            <TableCell align="right">TC Address</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.No}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.No}
              </TableCell>
              <TableCell align="right">{row.state}</TableCell>
              <TableCell align="right">{row.district}</TableCell>
              <TableCell align="right">{row.tpname}</TableCell>
              <TableCell align="right">{row.tcname}</TableCell>
              <TableCell align="right">{row.sector}</TableCell>
              <TableCell align="right">{row.job}</TableCell>
              <TableCell align="right">{row.spocname}</TableCell>
              <TableCell align="right">{row.spocemail}</TableCell>
              <TableCell align="right">{row.spocnum}</TableCell>
              <TableCell align="right">{row.address}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
