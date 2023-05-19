document.addEventListener('DOMContentLoaded', function(){
	const toggleButton = document.getElementById('toggle_button');

	toggleButton.addEventListener('click', function(){
		const guide = document.getElementById('user_guide');
		const icon = document.querySelector('#toggle_button i');

		if(guide.classList.contains('hide')){
			guide.classList.remove('hide');
			toggleButton.classList.add('active');
			icon.style.transform = 'rotate(180deg)';
		} else{
			guide.classList.add('hide');
			toggleButton.classList.remove('active');
			icon.style.transform = 'rotate(0deg)';
		}
	});
});