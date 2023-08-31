document.querySelector('.card-number-input').oninput = () =>{
    document.querySelector('.card_number').innerText = document.querySelector('.card-number-input').value;
}

$('#number').on('keyup', function(e){
    // get value of the input field
    var val = $(this).val();
    var newval = '';
    // write regex to remove any space
    val = val.replace(/\s/g, '');
    // iterate through each numver
    for(var i = 0; i < val.length; i++) {
        // add space if modulus of 4 is 0
        if(i%4 == 0 && i > 0) newval = newval.concat(' ');
        // concatenate the new value
        newval = newval.concat(val[i]);
    }
    // update the final value in the html input
    $(this).val(newval);
});
document.querySelector('.card-holder-input').oninput = () =>{
    document.querySelector('.card_holder_name').innerText = document.querySelector('.card-holder-input').value;
}

document.querySelector('.month-input').oninput = () =>{
    document.querySelector('.exp-month').innerText = document.querySelector('.month-input').value;
}

document.querySelector('.year-input').oninput = () =>{
    document.querySelector('.exp-year').innerText = document.querySelector('.year-input').value;
}

document.querySelector('.cvv_input').onmouseenter = () =>{
    document.querySelector('.front_card').style.transform = 'perspective(1000px) rotateY(-180deg)';
    document.querySelector('.back_card').style.transform = 'perspective(1000px) rotateY(0deg)';
}

document.querySelector('.cvv_input').onmouseleave = () =>{
    document.querySelector('.front_card').style.transform = 'perspective(1000px) rotateY(0deg)';
    document.querySelector('.back_card').style.transform = 'perspective(1000px) rotateY(180deg)';
}

document.querySelector('.cvv_input').oninput = () =>{
    document.querySelector('.cvv_box').innerText = document.querySelector('.cvv_input').value;
}