import moment from 'moment';

export const myAge = (fechaInicial: any) => {
  const fechaActual = moment();
  const añosPasados = fechaActual.diff(fechaInicial, 'years');
  return añosPasados;
};
