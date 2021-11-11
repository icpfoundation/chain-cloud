Date.prototype.Format = function (fmt) {
  var o = {
    "M+": this.getMonth() + 1,
    "d+": this.getDate(),
    "h+": this.getHours(),
    "m+": this.getMinutes(),
    "s+": this.getSeconds(),
  };
  if (/(y+)/.test(fmt))
    fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
  for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt))
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
  return fmt;
}
const formatDate = (time, format) => {
  let date = new Date(new Number(time))
  return date.Format(format)
}

const past = (time) => {
  let date = new Number(time)
  let now = new Date().getTime()
  if (now < date) {
    throw new Error("invalid time")
  }
  let process = (now - date) / 1000
  if (process < 60) {
    return `${Math.floor(process)} s ago`
  }
  if (process > 60 && process < 3600) {
    return `${Math.floor(process / 60 ) } min ago`
  }
  if (process > 3600 && process < 86400) {
    return `${Math.floor(process / 3600 )} h ago`
  }

  if (process > 86400) {
    return `${Math.floor(process / 86400 )} day ago`
  }
}



export { formatDate, past }