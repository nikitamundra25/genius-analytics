export const nFormatter = (num:any) => {
    if (Math.abs(num) >= 1000000000) {
       return (num / 1000000000).toFixed(1).replace(/\.0$/, '') + 'G';
    }
    if (Math.abs(num) >= 1000000) {
       return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
    }
    if (Math.abs(num) > 999) {
      return  Math.sign(num)*(Math.round(Math.abs(num)/100)/10) + 'k'
    }
    return num;
}

export const nFormatter1 = (num:any) => {
    return Math.abs(num) > 999 ? Math.sign(num)*(Math.round(Math.abs(num)/100)/10) + 'k' : Math.sign(num)*Math.abs(num)
}