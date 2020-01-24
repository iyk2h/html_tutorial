function nds(self) {
    var tadBody = document.querySelector('body');
    if(self.value === 'night') {
        tadBody.style.backgroundColor='black';
        tadBody.style.color='white';
        
        self.value = 'day';
    } else {
        tadBody.style.backgroundColor='white';
        tadBody.style.color='black';

        self.value = 'night';
    }
}
