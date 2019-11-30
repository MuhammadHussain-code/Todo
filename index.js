// function collecting(e){
//     e.preventDefault();
//     var asd =new FormData(e.target)
//     var daata = {
//         title: asd.get('title'),
//         description: asd.get('des')
//     }

//     document.getElementById('todo').innerHTML += `
//     <div class="row">
//                 <div class="col-md-4 container">
//                     <p class="h2">${daata.title}.</p>
//                     <div class="row ml-2">
//                         <p class="h6 pt-4">${daata.description} </p>

//                         <input type="button" value="delete" class="btn btn-danger py-auto" onclick="dlte(event)" style="padding: -10px 5px -10px 5px!important">
//                     </div>
//                 </div>
//             </div>

//     `
//    e.target.reset();
// }

// function dlte(e){
//     e.target.parentNode.parentNode.parentNode.remove()
// }



var arr = JSON.parse(localStorage.getItem('todos'));

if (arr !== null) {
    arr.map(value => {
        document.getElementById('todo').innerHTML += `
    <div class="row">
                <div class="col-md-4 container">
                    <p class="h2">${value.title}</p>
                    <div class="row ml-2">
                        <p class="h6 pt-4">${value.description} </p>
                        <input type="button" value="delete" class="btn btn-danger py-auto" onclick="dlte(event)" style="padding: -10px 5px -10px 5px!important">
                    </div>
                </div>
            </div>
    
    `
    })


}
else {
    arr = [];
}

function collecting(e) {
    e.preventDefault();
    var asd = new FormData(e.target)
    var daata = {
        title: asd.get('title'),
        description: asd.get('des'),
        time:asd.get('time')
    }
    arr.push(daata);
    document.getElementById('todo').innerHTML += `
        <div class="row">
                    <div class="col-md-4 container">
                        <p class="h2">${daata.title}</p>
                        <div class="row ml-2">
                            <p class="h6 pt-4">${daata.description} </p>
                        
                            <input type="button" value="XXX" class="btn btn-danger " onclick="dlte(event)" style="padding: -100px 5px -100px 5px!important">
                        </div>
                    </div>
                </div>
        
        `
    localStorage.setItem('todos', JSON.stringify(arr));
    e.target.reset();
    
    // emailjs.send("gmail","template_E3pvnun8",daata,"user_1sDcp81XGM3DitGEqDppP")
    //   .then((resp) => {
    //     // successCallback();
    //     console.log('FIRE EMAIL SUCCESS!', resp.status, resp.text);
    //   }, (err) => {
    //     // failureCallback();
    //      console.log('FIRE EMAIL FAILED...', err);
    //   });
}

function dlte(e) {
    // console.log(e.target.parentNode.previousElementSibling.innerText)
    arr.map((value, index) => {
        if (value.title === e.target.parentNode.previousElementSibling.innerText) {
            arr.splice(index, 1);
        }
    });
    localStorage.setItem('todos', JSON.stringify(arr));
    e.target.parentNode.parentNode.parentNode.remove();

}

    // localStorage.removeItem('todos')
