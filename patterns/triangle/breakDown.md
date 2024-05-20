<table>
<tr>
<th>1</th> 
<th>2</th>
<th>3</th>
<th>4</th>
<th>5</th>
</tr>
<tr>
<td> </td>
<td> </td>
<td> </td>
<td> </td>
<td>1</td>
</tr>
<tr>
<td> </td>
<td> </td>
<td> </td>
<td> 2</td>
<td>1</td>

</tr>
<tr>
<td> </td>
<td> </td>
<td> 3</td>
<td> 2</td>
<td>1</td>
</tr>
<tr>
<td> </td>
<td> 4</td>
<td> 3</td>
<td> 2</td>
<td>1</td>
</tr>
<tr>
<td> 5</td>
<td> 4</td>
<td> 3</td>
<td> 2</td>
<td>1</td>
</tr>
</table>

```js
     * //----> " "," "," "," "," ",1
    ** //----> " "," "," "," ",2,1
   *** //----> " "," "," ",3,2,1
  **** //----> " "," ",4,3,2,1
 ***** //----> " ",5,4,3,2,1
****** //----> 6,5,4,3,2,1 
```
> Code
```js
     function leftAngleTriangle(row){
          let result = ""; //----> storing the new value
          for(let i=0;i<row;i++){
              for(let j=0;j<row-i;j++){
                    result += " ";
              }
               for(let k=i+1;k>=1;k--){
                    result +=k
               }
              i<row-2 && (result +="\n");
          }

          return result
     }
     console.log(leftAngleTriangle(5));
```

```
     1
    21
   321
  4321
 54321




```
