

export function sendResponse(res,contentType,statusCode,end){
  res.setHeader("Content-Type",contentType)
  res.statusCode = statusCode
  res.end(JSON.stringify(end))
}

