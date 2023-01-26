function showDisclaimer(){
  Swal.fire({
    title: 'Are you +16 years old?',
    text: "Please verify your age to be able to purchase our products.",
    icon: 'warning',
    showDenyButton: true,
    confirmButtonText: 'Yes! I am.',
    denyButtonText: `No, I'm not.`,
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire('Wonderful! Now you can purchase any of our products.', '', 'success')
    } else if (result.isDenied) {
      Swal.fire('Sorry! Our products contain high levels of caffeine and are not recommended for customers under the age of 16.', '', 'error')
    }
  })
}

document.getElementById("disclaimer").addEventListener("click", showDisclaimer)