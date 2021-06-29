import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import withStyles from "@material-ui/core/styles/withStyles";
import {Paper, TableContainer} from "@material-ui/core";

const useStyles = () => ({
  root: {
    width: '100%',
    overflowX: 'auto',
  },
  table: {
    minWidth: 460,
  },
  profileImg: {
    borderRadius: '50%',
    width: '40%',
  }
});


function LinesTable({classes, header, rows}) {

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table" draggable={true}>
        <TableHead>
          <TableRow>
            {header.map((column) => (
              <TableCell align="center">{column}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => {
            if (row) {
              return (
                <TableRow key={index}>
                  {Object.keys(row).map((col) => {
                      if (col === "image") {
                        return <TableCell align="center"><img className={classes.profileImg} src={row[col]}/></TableCell>
                      } else {
                        return <TableCell align="center">{row[col]}</TableCell>
                      }
                    }
                  )}
                </TableRow>
              )
            }
          })
          }
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default withStyles(useStyles)(LinesTable)
