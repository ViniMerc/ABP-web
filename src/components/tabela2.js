<TableContainer component={Paper}>       
            <Table sx={{ minWidth: 150 }} size="small" aria-label="a dense table">
              <TableHead>
                 <TableRow>
                   <TableCell>Nome</TableCell>
                   <TableCell align="left">Entrada</TableCell>
                   <TableCell>Deletar</TableCell>
                 </TableRow>
              </TableHead>
              <TableBody>
                  {rows.map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell align="left">{row.entrada}</TableCell>
                      <TableCell align="left">{row.deletar}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
          </TableContainer>