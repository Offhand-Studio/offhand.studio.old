
function ready(fn) {
  if (document.readyState != 'loading'){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

ready(function(){
  console.log('ready');

  
  // Typing animation if we have something to type…
  
  
  // if ('loading' in HTMLImageElement.prototype) {
  //       const images = document.querySelectorAll("img.lazyload");
  //       images.forEach(img => {
  //           img.src = img.dataset.src;
  //       });
  //   } else {

      // Dynamically import the LazySizes library
      script_lazy = document.createElement("script");
      script_lazy.async = true;

      // lazy loading: https://github.com/aFarkas/lazysizes
      script_lazy.src = "https://cdnjs.cloudflare.com/ajax/libs/lazysizes/4.1.8/lazysizes.min.js";
      document.body.appendChild(script_lazy);
    // }


});
