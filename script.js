

$(document).ready(function(){
  
	const panels = document.querySelectorAll('.panel');

	panels.forEach(panel => {
	  panel.addEventListener('click', () => {
		// Remove .show class from all .panel elements
		panels.forEach(p => p.classList.remove('show'));
		
		// Toggle .show class on clicked .panel
		panel.classList.toggle('show');
	  });
	});
	

});