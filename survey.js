document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("surveyForm").addEventListener("submit", function (event) {
      event.preventDefault();
      var f_name = document.getElementById("f-name").value;
      var m_name = document.getElementById("m-name").value;
      var l_name = document.getElementById("l-name").value;
      var add = document.getElementById("add").value;
      var pin = document.getElementById("pin").value;

        var head = "DETAILS";
        document.getElementById("head").textContent = head;

      document.getElementById("sf-name").textContent = f_name;
      document.getElementById("sm-name").textContent = m_name;
      document.getElementById("sl-name").textContent = l_name;
      document.getElementById("s-add").textContent = add;
      document.getElementById("s-pin").textContent = pin;

      document.getElementById("detailsContainer").style.display = "block";
    });
  });