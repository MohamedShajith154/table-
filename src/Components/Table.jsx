export default function Table({ data, headers }){
  return (
<table>
<thead>
    <tr>
 {headers.map((header, i) => (
  <th key={i}>{header}</th>
 ))}
    </tr>
</thead>

 <tbody>                          
    {data.map((row, i) =>(
 <tr key={i}>
       {headers.map((header, j) =>(
 <td key={j}>{row[header]??'-'}</td>
 ))}
 </tr>
))}
</tbody>
</table>
 );
}