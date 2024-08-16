//1. Declare variables for XMLHttpRequest and JSON file.
var xhr=new XMLHttpRequest();

var url='./health_article.json';

//GET request to the specified URL
xhr.open('GET',url,true);

//'GET': Specifies the HTTP method used for the request (in this case, a GET request).
//URL: Represents the URL from where you will fetch the data.
//True: Indicates if the request is asynchronous (true) or synchronous (false). 
//In this case, it's set to true for asynchronous operation, allowing other scripts to run while the request is processed.

//inform the XMLHttpRequest object that the expected response from the server should be in JSON format.
xhr.responseType='json';

//define what should happen when the data is successfully loaded
xhr.onload=function(){
    var articles=xhr.response.articles;
    var articlesDiv=document.getElementById('articles');

    //you need to iterate health data to fetch on the front page using loops. For this, you need to use the forEach
    articles.forEach(function(article){
        var articleDiv=document.createElement('div');
        articleDiv.classList.add('article');

        var title=document.createElement('h2');
        title.textContent=article.title;

        var description=document.createElement('p');
        description.textContent=article.description;

        var waysHeader=document.createElement('h3');
        waysHeader.textContent='ways to achieve:';

        var waysList=document.createElement('ul');
        article.ways_to_achieve.forEach(function(way){
            var listItem=document.createElement('li');
            listItem.textContent=way;
            waysList.appendChild(listItem);
        });

        var benefitsHeader=document.createElement('h3');
        benefitsHeader.textContent='benefits:';

        var benefitsList=document.createElement('ul');
        article.benefits.forEach(function(benefit){
            var listItem=document.createElement('li');
            listItem.textContent=benefit;
            benefitsList.appendChild(listItem);
        });

        articleDiv.appendChild(title);
        articleDiv.appendChild(description);
        articleDiv.appendChild(waysHeader);
        articleDiv.appendChild(waysList);
        articleDiv.appendChild(benefitsHeader);
        articleDiv.appendChild(benefitsList);

        articlesDiv.appendChild(articleDiv);

    });


}

xhr.send();

