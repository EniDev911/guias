document.querySelectorAll("img[alt*='img']").forEach(element => {
  element.style.cursor = "zoom-in";
  element.addEventListener('click', () => {
    let params  = 'width='+screen.width;
    params += ', height='+screen.height;
    params += ', top=0, left=0'
    params += ', fullscreen=yes';
    params += ', directories=no';
    params += ', location=no';
    params += ', menubar=no';
    params += ', resizable=no';
    params += ', scrollbars=no';
    params += ', status=no';
    params += ', toolbar=no';
    const popup = window.open(element.src, '_blank', params)
  })
})