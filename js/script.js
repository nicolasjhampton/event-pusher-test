const eSource = new EventSource("http://localhost:8080/v1/channel/dude");

eSource.onopen = function(e) {
  console.log("open", e.data);
  console.log(eSource.readyState);
}

eSource.onmessage = function(e) {
  console.log(e.data);
  console.log(eSource.readyState);
}

eSource.onerror = function(e) {
  console.error("error", e.data);
  console.log(eSource.readyState);
}

