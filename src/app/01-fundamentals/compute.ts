export function compute(x: number) {

  let resultado = 0;

  if (x > 0) {
    resultado = 2;
  }

  if (x<0) {
    resultado = 0;
  }

  if (x == 0) {
    resultado = 2;
  }

  return resultado;
};
