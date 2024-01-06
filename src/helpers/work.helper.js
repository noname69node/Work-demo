export const timeDiff = (sTime, eTime) => {
  const sDate = new Date(`0001-01-01T${sTime}Z`);
  const eDate = new Date(`0001-01-01T${eTime}Z`);

  const diff = eDate - sDate;

  const mm = Math.floor(diff / 1000 / 60) % 60;
  const hh = Math.floor(diff / 1000 / 60 / 60);

  return `${hh}h, ${mm}min`;
};
