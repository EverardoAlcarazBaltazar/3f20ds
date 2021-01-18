const Sort = regresar => {
  const gaps = [5, 3, 1];
  for ( let g = 0; g < gaps.length; ++g ) {
    for ( let i = gaps[ g ]; i < regresar.length; ++i ) {
      const temp = regresar[ i ];
      let j = i;
      for ( ; j >= gaps[ g ] &&
        regresar[j-gaps[ g ] ] > temp;
           j -= gaps[ g ] ) {
            regresar[ j ] = regresar[ j - gaps[ g ] ];
      }
      regresar[ j ] = temp;
    }
  }
  return regresar;
}
const regresar = ['Everardo',10, 4, 40, 32, 67, 12, 43, 31, 65, 1];

const result = Sort(regresar);

result;