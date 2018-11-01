let timeId = 0;

export function exitTime(text){
  return {
    type: 'LAST_TIME',
    id: timeId++,
    text
  }
}

export function beginTime(text){
  return {
    type: 'BEGIN_TIME',
    id: timeId++,
    text
  }
}