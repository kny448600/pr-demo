import { Container, Table, TableRow, TableCell, TableHead, TableBody } from "@mui/material"
import Link from "next/link";
import Button from "@mui/material/Button";

//객체 배열 생성에 사용하는 함수
function createData(name,github,link){
  return {name,github,link};
}
const rows = [
  //데모의 이름, 깃허브
  createData('duduge','https://github.com/kny448600/javascript_Lecture-main/tree/main/%EA%B2%8C%EC%9E%84%EB%93%A4/%EB%91%90%EB%8D%94%EC%A7%80%20%EC%9E%A1%EA%B8%B0','/duduge'),
  createData('snake','https://github.com/kny448600/javascript_Lecture-main/tree/main/%EA%B2%8C%EC%9E%84%EB%93%A4/%EC%8A%A4%EB%84%A4%EC%9D%B4%ED%81%AC%20%EA%B2%8C%EC%9E%84','/snake'),
  createData('memory','https://github.com/kny448600/javascript_Lecture-main/tree/main/%EA%B2%8C%EC%9E%84%EB%93%A4/%EC%8A%A4%ED%8E%98%EC%9D%B4%EC%8A%A4%20%EC%9D%B8%EB%B2%A0%EC%9D%B4%EB%8D%94','/memory'),
]

export default function Home() {
 
  return (
    <>
      <Container fixed>
          <h1>하이</h1>
          <Table sx={{minWidth : 650}} aria-Label="demo-list">
            <TableHead>
            <TableRow>
              <TableCell>Demo-List</TableCell>
              <TableCell>Github</TableCell>
              <TableCell>Link</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (    
                <TableRow
                key={row.name}
                sx={{'&:last-child td, &:last-child th': {border:0}}}
                >
                  <TableCell component="th" scope="row">{row.name}</TableCell>
                  <TableCell><Link href={row.github}>깃허브 바로가기</Link></TableCell>
                  <TableCell><Button variant="outlined" size="small" href={row.link}>Link</Button></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Container>   
    </>
  )
}