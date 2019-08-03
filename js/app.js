document.getElementById('get-trivia').onclick = btnCLICK;

function btnCLICK(){
    //Do crazy stuffs here ...
    const getSomething = async () => {
        const trivia_1 = await TRIVIA_SERVICE.trivia1();
        const trivia_2 = await TRIVIA_SERVICE.trivia2();
        
        console.log(trivia_1);
        console.log(trivia_2);
    }
    getSomething();
}







// var searchForm = $('#search-form');
//             var catsContainer = $('.cats-details');
//             var catsKeyword = $('#cat-keyword');
//             var result = $('.result');
//             var loading = $('.loading');
//             //These are the variables we need to request from the API
//             var API_URL = 'https://api.thecatapi.com/v1/breeds/search?q=';
//             var API_KEY = 'bd38af4d-fba6-4d1f-bbfd-a98cc4e036d1';
//             //Trigger submit form
//             searchForm.on('submit', function(e){
                
//                 //Prevents the form to reload the page
//                 e.preventDefault();
//                 var catsToFind = catsKeyword.val();
//                 catsContainer.html('');
//                 result.text('');
//                 loading.attr('src', './public/img/cat2.gif');
//                 loading.show();
//                 $.ajax({
//                     method: 'GET',
//                     url: API_URL+catsToFind,
//                     headers:{
//                         'x-api-key' : API_KEY
//                     }
//                 })
//                 .then(function(res){
//                     //console.log(res)
//                     var catsDetails = res;
//                     var catsTemplate = '';
//                     if(catsDetails.length){
//                         result.text(`Search results for "${catsKeyword.val()}"`);
//                         $.each(catsDetails, function(index, cat){
//                             catsTemplate += `<div class="cat-card">
//                                                 <h3 class="cat-name">${cat.name}</h3> 
//                                                 <p class="cat-origin">${cat.origin || ''}</p>   
//                                                 <p class="cat-description">${cat.description || ''}</p>
//                                                 <a class="cat-wiki" target="_blank" href="${cat.wikipedia_url}">Search on Wikipedia</a>
//                                             </div>`;
//                         });
//                         loading.hide();
//                     } else {
//                         result.text(`No search results for "${catsKeyword.val()}"`);
//                         loading.attr('src', './public/img/cat.gif');
//                     }
//                     catsContainer.html(catsTemplate);
//                 })
//                 .catch(function(){
//                     alert('error')
//                 })
//                 .then(function(){
//                     catsKeyword.val('')
//                 })