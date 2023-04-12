let select = document.querySelector('.select select');
let textarea = document.querySelector('#text');
let button = document.querySelector('.button');

// To add all the voices in the options list

function selectOptions() {

    var voicelist = responsiveVoice.getVoices();
    voicelist.forEach(element => {
        select.innerHTML += `
    <option value=' ${element.name}' > ${element.name}</option>
    `
    });
}
selectOptions();

// Converting text into speech

button.addEventListener('click', function () {

    let text = textarea.value;
    responsiveVoice.speak(text);
    button.classList.add('active');
    setTimeout(() => {
        button.classList.remove('active')
    }, 2500)
})

// To hear the voice that you have been chose

select.addEventListener('change', function(){

    responsiveVoice.setDefaultVoice(select.value);
})