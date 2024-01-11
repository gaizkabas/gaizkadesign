document.addEventListener('DOMContentLoaded', function() {
    var btnDropdown = document.getElementById('btnDropdown');
    var dropdownContent = document.getElementById('dropdownContent');
  
    btnDropdown.addEventListener('click', function() {
      dropdownContent.style.display = (dropdownContent.style.display === 'block') ? 'none' : 'block';
    });
  
    document.addEventListener('click', function(event) {
      if (!btnDropdown.contains(event.target) && !dropdownContent.contains(event.target)) {
        dropdownContent.style.display = 'none';
      }
    });
  });

  document.addEventListener('DOMContentLoaded', function() {
    var miAltavoz = document.getElementById('miAltavoz');
    var miSonido = document.getElementById('miSonido');
  
    miAltavoz.addEventListener('click', function() {
      miSonido.play();
    });
  });

  document.addEventListener('DOMContentLoaded', function() {
    var buclefondo = new Audio('./resources/loop.mp3');
    buclefondo.loop = true;
    buclefondo.volume = 0.9;
    var sonidoClick = new Audio('./resources/click.mp3');
    sonidoClick.volume = 0.62;
    
    document.addEventListener('click', function() {
     buclefondo.play();
     sonidoClick.currentTime = 0;
     sonidoClick.play();
  });
});

document.addEventListener('DOMContentLoaded', function() {
  var recuadro = document.querySelector('.recuadro');

  window.addEventListener('scroll', function() {
      var scrollPosition = window.scrollY;
      var maxScroll = 300; // Ajusta este valor según tus necesidades

      // Calcula la opacidad basada en la posición de desplazamiento
      var opacity = 1 - (scrollPosition / maxScroll);

      // Ajusta la opacidad del recuadro
      recuadro.style.opacity = opacity.toFixed(2); // Limita el número de decimales

      // Puedes ajustar la lógica según tus necesidades para obtener el efecto deseado
  });
});

document.addEventListener('DOMContentLoaded', function() {
  var btnDropdown = document.getElementById('btnDropdown');
  var dropdownContent = document.getElementById('dropdownContent');
  var originalPosition = btnDropdown.getBoundingClientRect(); // Obtén la posición original del botón
  
  window.addEventListener('scroll', function() {
      var scrollPosition = window.scrollY;
      var scrollThreshold = 0;
      
      if (scrollPosition > scrollThreshold) {
          // Aplica la posición fixed al botón y al contenedor del menú
          btnDropdown.style.position = 'fixed';
          btnDropdown.style.top = originalPosition.top + 'px';
          btnDropdown.style.left = originalPosition.left + 'px';
          
          dropdownContent.style.position = 'fixed';
          dropdownContent.style.top = originalPosition.bottom + 'px';
          dropdownContent.style.left = originalPosition.left + 'px';
          
          // También puedes ajustar otros estilos según tus necesidades
      } else {
          // Vuelve a la posición original si el scroll está por debajo del umbral
          btnDropdown.style.position = 'static';
          dropdownContent.style.position = 'static';
      }
  });
});

document.addEventListener('DOMContentLoaded', function() {
  var btnDropdown = document.getElementById('btnDropdown');
  var dropdownContent = document.getElementById('dropdownContent');
  var originalPosition = btnDropdown.getBoundingClientRect(); // Obtén la posición original del botón

  // Agrega un evento de clic al elemento "inicio" del menú dropdown
  var inicioLink = document.querySelector('#dropdownContent li:first-child a');
  inicioLink.addEventListener('click', function(event) {
      // Previene el comportamiento predeterminado del enlace
      event.preventDefault();

      // Establece la posición de desplazamiento a 0
      window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth' // Puedes ajustar esto según tus preferencias
      });

      // Cierra el menú dropdown después de hacer clic en "inicio"
      dropdownContent.style.display = 'none';
  });

});

document.addEventListener('DOMContentLoaded', function() {
  var recuadro = document.querySelector('.recuadro');
  var cuadricula = document.querySelector('.cuadricula'); // Ajusta el selector según tu estructura HTML

  window.addEventListener('scroll', function() {
      var scrollPosition = window.scrollY;
      var maxScrollRecuadro = 300; // Ajusta este valor según tus necesidades para el recuadro
      var maxScrollCuadricula = 1200; // Ajusta este valor según tus necesidades para la cuadricula

      // Calcula la opacidad basada en la posición de desplazamiento
      var opacityRecuadro = 1 - (scrollPosition / maxScrollRecuadro);
      var opacityCuadricula = (scrollPosition - maxScrollRecuadro) / (maxScrollCuadricula - maxScrollRecuadro);

      // Ajusta la opacidad del recuadro
      recuadro.style.opacity = opacityRecuadro.toFixed(2); // Limita el número de decimales

      // Ajusta la opacidad de la cuadricula cuando el recuadro llega a opacidad 0
      if (opacityRecuadro <= 0) {
          cuadricula.style.opacity = opacityCuadricula.toFixed(2); // Limita el número de decimales
      } else {
          cuadricula.style.opacity = '0';
      }

      // Puedes ajustar la lógica según tus necesidades para obtener el efecto deseado
  });
});

document.addEventListener('DOMContentLoaded', function() {

  // Agrega un evento de clic al elemento "proyectos" del menú dropdown
  var proyectosLink = document.querySelector('#dropdownContent li:nth-child(2) a'); // Ajusta el selector según tu estructura HTML
  proyectosLink.addEventListener('click', function(event) {
      // Previene el comportamiento predeterminado del enlace
      event.preventDefault();

      // Obtiene la posición de la cuadrícula
      var cuadriculaPosition = document.querySelector('.cuadricula').getBoundingClientRect().top;

      // Ajusta la posición para que sea un poco más arriba
      var scrollToPosition = cuadriculaPosition - 300; // Ajusta según tus necesidades

      // Hace scroll hacia la posición ajustada con una animación suave
      window.scrollTo({
          top: scrollToPosition,
          behavior: 'smooth'
      });

      // Cierra el menú dropdown después de hacer clic en "proyectos"
      dropdownContent.style.display = 'none';
  });


});

document.addEventListener('DOMContentLoaded', function() {


  // Agrega un evento de clic al elemento "contacto" del menú dropdown
  var contactoLink = document.querySelector('#dropdownContent li:nth-child(3) a'); // Ajusta el selector según tu estructura HTML
  contactoLink.addEventListener('click', function(event) {
      // Previene el comportamiento predeterminado del enlace
      event.preventDefault();

      // Abre el modal
      document.getElementById('modalContacto').style.display = 'block';
  });


});

// Función para cerrar el modal
function cerrarModalContacto() {
  document.getElementById('modalContacto').style.display = 'none';
}

document.addEventListener('DOMContentLoaded', function() {


  // Agrega un evento de clic a cada imagen
  var imagenes = document.querySelectorAll('.cuadricula img'); // Ajusta el selector según tu estructura HTML
  imagenes.forEach(function(imagen, index) {
      imagen.addEventListener('click', function() {
          var modalId = 'modalFoto' + (index + 1); // Asigna un identificador único al modal
          document.getElementById(modalId).style.display = 'block';
      });
  });

 
});


function cerrarModal(idModal) {
  document.getElementById(idModal).style.display = 'none';
}

