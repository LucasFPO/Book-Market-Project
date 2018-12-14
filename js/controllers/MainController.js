/* AngularJS File */
// We created a new controller named "MainController". A controller 
// manages the app's data. 
app.controller('MainController', ['$scope', function($scope) { 

    // We used products to store an array containing two objects    
        $scope.products = [ { 
            name: 'Enchantment', 
            price: 19, 
            pubdate: '2011 - Guy Kawasaki', 
            cover: 'img/Enchantment.jpg',
    
            // So far we've made a Static AngularJS. "likes" and "dislikes" will be the dynamic elements 
            // making the App more interactive
            likes: 0,
            dislikes: 0 }, 

            {
            name: 'How to be the perfect dutch', 
            price: 12, 
            pubdate: '2015 - Kathian Brands',    
            // pubdate: new Date('2013', '08', '01'), 
            cover: 'img/how_to_be_the_perfect_dutch.jpg',
            likes: 0,
            dislikes: 0 },
            
            {
            name: 'Game of Thrones' , 
            price: 25, 
            pubdate: '1996 - George R. R. Martin',
            // pubdate: new Date('2013', '08', '01'), 
            cover: 'img/GameOfThrones.jpg',
            likes: 0,
            dislikes: 0 } ,
            
            {
            name: 'The world of abstract art', 
            price: 20,
            pubdate: '2017 - Emily Robbins', 
            // pubdate: new Date('2013', '08', '01'), 
            cover: 'img/world_of_abstract_art.jpg',
            likes: 0,
            dislikes: 0 }  
            ];

    // We could add  as many books we desire in the array. The view will update
    // as the "ng-repeat" in the index.html loops the new elements
    
    
    // The "plusOne()" function gets the index of the product that was clicked,
    // and then adds one to that product's "likes" property
            $scope.plusOne = function(index){
                $scope.products[index].likes +=1;
            }; 
    // The "minusOne" function does the same, but it actually decreases one
    // to that product's "dislikes" property        
            $scope.minusOne = function(index) { 
                $scope.products[index].dislikes += 1; 
              };   
      }]);