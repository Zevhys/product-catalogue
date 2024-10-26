const tableAlign = "dt-head-center dt-body-center";

// eslint-disable-next-line
$(document).ready(function () {
  // eslint-disable-next-line
  $("table").DataTable({
    rowReorder: true,
    responsive: true,
    columnDefs: [
      { orderable: true, className: `${tableAlign} reorder`, targets: 1 },
      { orderable: true, className: `${tableAlign} reorder`, targets: 2 },
      { orderable: true, className: `${tableAlign} reorder`, targets: 3 },
      { orderable: false, className: tableAlign, targets: "_all" },
    ],
  });
});

const rupiah = Intl.NumberFormat("id-ID", {
  style: "currency",
  currency: "IDR",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});

// eslint-disable-next-line
$(".currencyIDR").each((n, el) => {
  let value = el.textContent;
  el.textContent = rupiah.format(parseInt(value));
});

document.addEventListener("click", function (event) {
  const navbarCollapse = document.querySelector("#my-nav");

  const isNavbarVisible = navbarCollapse.classList.contains("show");

  if (isNavbarVisible && !navbarCollapse.contains(event.target)) {
    new bootstrap.Collapse(navbarCollapse).toggle(); // eslint-disable-line
  }
});

document
  .getElementById("add-form")
  .addEventListener("submit", function (event) {
    const fileInput = document.getElementById("image");
    const file = fileInput.files[0];

    if (file) {
      const allowedExtensions = /(\.jpg|\.png)$/i;
      if (!allowedExtensions.exec(file.name)) {
        alert("Only .jpg and .png files are allowed.");
        fileInput.value = "";
        event.preventDefault();
      }

      if (file.size > 1000000) {
        alert("File size exceeds 1MB limit.");
        fileInput.value = "";
        event.preventDefault();
      }
    }
  });
