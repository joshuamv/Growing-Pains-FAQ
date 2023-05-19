

$(document).ready(function(){

	const panels = document.querySelectorAll('.panel');



    panels.forEach(panel => {
      panel.addEventListener('click', () => {
        // Check if the clicked panel has the .show class
        if (panel.classList.contains('show')) {
          // If it does, remove the .show class
          panel.classList.remove('show');
        } else {
          // If it doesn't, remove .show class from all .panel elements
          panels.forEach(p => p.classList.remove('show'));
          // Add .show class to clicked .panel
          panel.classList.add('show');
        }
      });
    });

	});


