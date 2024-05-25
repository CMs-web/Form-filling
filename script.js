`use strict`

const inputfname = document.getElementById('fname');
const inputlname = document.getElementById('lname');
const inputGmail = document.getElementById('email');
const inputcount = document.getElementById('country');
const img = document.querySelector('.avatar');
const form = document.querySelector('.form').getBoundingClientRect()

////////////////  Box  ////////////////
const section1 = document.getElementById('section1')
const container = document.querySelector('.container')
const box = document.querySelector('.box');
const firstName = document.querySelector('.firstName');
const lastName = document.querySelector('.lastName');
const emailName = document.querySelector('.email');
const countryName = document.querySelector('.country');
const btnSubmit = document.querySelector('.btn');
const inputField = document.querySelectorAll('input[type="text"]');
///////////////////////////////////////////////

inputField.forEach(e=>{
    e.addEventListener('focus',function(){
        this.value = '';
        const alert = document.querySelector('.alert').textContent = '';

    })
})

btnSubmit.addEventListener('click',function(ev){

    ev.preventDefault()
     let inputFirst = inputfname.value;
     let inputLast = inputlname.value;
     let inputEmail = inputGmail.value != 'shivamgoswami.work@gamil.com' ? inputGmail.value : inputGmail.value ='';
     let inputCountry = inputcount.value;
    ev.preventDefault()

     if(inputFirst !== '' && inputLast !== '' && inputEmail != ''){


        let gender = document.querySelector('input[name="gender"]:checked').value;       
        const source = () => {
           if(gender === 'female'){
              return 'female'
            }
            if(gender === 'other'){
               return 'Other'
            }else{
               return 'male'
            }
        }
        let fnc = source();

        let html = `
                <div class="box">
                    <div class="profile">
                    <img src="${fnc}.png" alt="avatar" class="avatar">
                    <div class="form-info">
                        <div class="fname-lname">
                            <h4 class="firstName">${inputFirst}</h4>
                            <h4 class="lastName"> ${inputLast}</h4>
                        </div>
                        <div class="email-country">
                            <p class="email">${inputEmail}</p>
                            <h4 class="country">${inputCountry}</h4>
                        </div>
                    </div>
                    </div>
                    <div class="close">
                            <h4>&#10060</h4>
                    </div>
                </div> `
         
        container.insertAdjacentHTML('afterbegin', html)

        const close = document.querySelector('.close');
        close.addEventListener('click',(e)=>{
            e.preventDefault()
            let remove = close.parentElement ;
            remove.remove();
        })

        let scroll =  window.scrollTo(0,document.body.scrollHeight);

     
}else{
    const alert = document.querySelector('.alert').textContent = '* Please fill Your details currectly';
}
});


