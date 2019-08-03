const TRIVIA_SERVICE = {
    trivia1: function () {
        return $.ajax({
            type: 'get',
            url: 'http://numbersapi.com/random/year?json'
        })
    },
    trivia2: function(){
        return $.ajax({
            type: 'get',
            url: 'http://numbersapi.com/123/year'
        })
    }
}