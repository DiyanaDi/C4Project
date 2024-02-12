const products =
    [{name:"Racquet Begginer", category:"Racquets", price:10, image:'/C4Project-main/C4_project/images/tennis_2.png', color: "red", description: 'for starters', rating: 3},
    {name:"Racquet Intermediate", category:"Racquets", price:12, image:'/C4Project-main/C4_project/images/tennis_2.png', color: "red", description: 'medium', rating: 4},
    {name:"Racquet Pro", category:"Racquets", price:7, image:'/C4Project-main/C4_project/images/tennis_2.png', color: "red", description: 'expert choice', rating: 3},
    {name:"Racquet Special", category:"Racquets", price:19, image:'/C4Project-main/C4_project/images/tennis_2.png', color: "red", description: '2 in 1', rating: 5},
    {name:"Racquet Kids", category:"Racquets", price:53, image:'/C4Project-main/C4_project/images/tennis_2.png', color: "pink", description: 'smaller size', rating: 5},
    {name:"Racquet Mini", category:"Racquets", price:11, image:'/C4Project-main/C4_project/images/tennis_2.png', color: "pink", description: 'mini edition', rating: 5},
    {name:"Racquet Team", category:"Racquets", price:55, image:'/C4Project-main/C4_project/images/tennis_2.png', color: "yellow", description: 'team edition', rating: 4},
    {name:"Racquet Sport", category:"Racquets", price:57, image:'/C4Project-main/C4_project/images/tennis_2.png', color: "yellow", description: 'best choice', rating: 3}, /*da dobawq descr i rating*/
    {name:"Racquet Advanced", category:"Racquets", price:22, image:'/C4Project-main/C4_project/images/tennis_2.png', color: "yellow", description: 'not for amateurs', rating: 3},
    {name:"Dress Standard", category:"Dresses", price:22, image:'/C4Project-main/C4_project/images/tennis_dress.jpg', color: "yellow", description: 'mini edition', rating: 4},
    {name:"Dress Mini", category:"Dresses", price:92, image:'/C4Project-main/C4_project/images/tennis_dress_2.jpg', color: "yellow", description: 'casual', rating: 3},
    {name:"Dress Pro", category:"Dresses", price:78, image:'/C4Project-main/C4_project/images/tennis_dress.jpg', color: "pink", description: 'everyday choice', rating: 5},
    {name:"Dress Pro", category:"Dresses", price:82, image:'/C4Project-main/C4_project/images/tennis_dress_2.jpg', color: "pink", description: 'mini edition', rating: 3},
    {name:"Dress Standard", category:"Dresses", price:36, image:'/C4Project-main/C4_project/images/tennis_dress.jpg', color: "red", description: 'casual', rating: 3},
    {name:"Dress Mini", category:"Dresses", price:55, image:'/C4Project-main/C4_project/images/tennis_dress_2.jpg', color: "red", description: 'everyday choice', rating: 4},
    {name:"Trainers Pro", category:"Shoes", price:54, image:'/C4Project-main/C4_project/images/shoes_1.jpg', color: "yellow", description: 'everyday choice', rating: 3},
    {name:"Trainers Challenger", category:"Shoes", price:101, image:'/C4Project-main/C4_project/images/shoes_2.jpg', color: "yellow", description: 'casual', rating: 3},
    {name:"Trainers Sport", category:"Shoes", price:64, image:'/C4Project-main/C4_project/images/shoes_3.jpg', color: "pink", description: 'perfect for running from problems', rating: 4},
    {name:"Trainers Team", category:"Shoes", price:38, image:'/C4Project-main/C4_project/images/shoes_1.jpg', color: "pink", description: 'nitro on', rating: 3},
    {name:"Trainers Kids", category:"Shoes", price:23, image:'/C4Project-main/C4_project/images/shoes_2.jpg', color: "red", description: 'turbo mode', rating: 5},
    {name:"Trainers Mini", category:"Shoes", price:42, image:'/C4Project-main/C4_project/images/shoes_3.jpg', color: "red", description: 'faster than a comet', rating: 3}]

    function changeCategory(){

        clearForm(); //removes the sort and filter values
        let prods=changeCategoryProd();
        render(prods);

        $(".loadMore").show();
    }

    function changeCategoryProd(){
        let chosenCategory=$('#selectCategory option:selected').text();
        if(chosenCategory=="Choose category"){
            chosenCategory="Racquets";
        }
        let prods=products.filter(x=>x.category==chosenCategory);
        return prods;
    }
    
    function clearForm(){
       // $('input[type="radio"]:checked').attr("checked",false); -->how to uncheck radio button??
        $('#priceFrom').val("");
        $('#priceTo').val("");
        
        $("#sort option").prop("selected", function () {
            return this.defaultSelected;
        });
        }

    function sliceProducts(){
        $(".col-md-4:hidden").slice(0, 3).show(); //show 3 products of the grid
    }

    $(window).on('resize', function() {
    var win = $(this);
    if (win.width() > 767) {

        $('#filter-page').addClass('sticky-2');
        $('#filter-page').addClass('ms-5');
        $('#selectCategory').removeClass('ms-3');
        $('#products').removeClass('ms-3');
        $('#sort').removeClass('ms-3');

    } else {
        $('#filter-page').removeClass('sticky-2'); //to make the filter non-sticky for lower resolution
        $('#filter-page').removeClass('ms-5');
        $('#selectCategory').addClass('ms-3');
        $('#products').addClass('ms-3');
        $('#sort').addClass('ms-3');
    }
    });

    function render(products){
        let html='<div class="row mt-3 g-4">'; //s media da opr margins
            html+=`<div class="d-flex justify-content-between">`;
            html+=`<h2>${products[0].category}</h2>`;
            html+=`<span class="mb-4">${products.length} products</span>`;
            html+=`</div>`;    
            for(let i=0;i<products.length;i++){
                html+=`<div class="col-6 col-md-4">`;
                html+=`<div class="p-4" style="background-color:#f6f6f6">`;
                html+=`<i class="fa-solid fa-plus fs-5" style="cursor: pointer" onclick="add()"></i>`;
                html+=`<img src="${products[i].image}" class="img-fluid"/>`;
                html+=`<h5>${products[i].name}<h5/>`;
                html+=`<h6>${products[i].description}<h6/>`;
                html+=`<h6><span style="color: black">${products[i].price}</span> euro <h6/>`;
                html+=`</div>`;
                html+=`</div>`;
            }

            html+='</div>';
            $('#products').html(html);
            sliceProducts();
    }

     //showing 3 div

    $(".loadMore").on("click",function(){
    $(".col-md-4:hidden").slice(0, 3).show();//showing 3 hidden div on click
    
    if($(".col-md-4:hidden").length ==0)
    {
        $(".loadMore").fadeOut(); //this will hide
        //button when length is 0
    }
})

    
    $( ".fa-arrow-up" ).click(function() {
        var x = $(window).scrollTop();  
        $(window).scrollTop(x-1400);
        }); //for moving to the top of the page

    function add(){
        alert("Product added to cart!"); //activates when pressing the 'plus' sign
    }

    function sort(){
        prods=changeCategoryProd();
        prods=filterProds(prods);
        prods=sortProds(prods);
        if(prods.length>3){
            $(".loadMore").show();
        }
        render(prods);
    }

    function filter(){
        prods=changeCategoryProd();
        prods=sort(prods);
        prods=filterProds(prods);
        render(prods);
    }

    function sortProds(prods){
        let chosenSort=$('#sort option:selected').text();
        switch(chosenSort){
            case 'Name ascending':
                prods.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
                break;
            case 'Name descending':
                prods.sort((a,b) => (b.name > a.name) ? 1 : ((a.name > b.name) ? -1 : 0));
                break;
            case 'Price ascending':
                prods.sort((a,b) => (a.price > b.price) ? 1 : ((b.price > a.price) ? -1 : 0));
                break;
            case 'Price descending':
                prods.sort((a,b) => (b.price > a.price) ? 1 : ((a.price > b.price) ? -1 : 0));
                break;
            default:
                prods.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
                break;
        }
        return prods;
    }

    function filterProds(prods){
        let color=$('input[type="radio"]:checked').val();
        let priceFrom=$('#priceFrom').val();
        let priceTo=$('#priceTo').val();
        if(color!=undefined){
        prods=prods.filter(x=>x.color==color);
        }

        if(priceFrom!=''){
        prods=prods.filter(x=>x.price>=priceFrom);
        }

        if(priceTo!=''){
        prods=prods.filter(x=>x.price<=priceTo);
        }

        if(prods.length>3){
            $(".loadMore").show();
        }

        return prods;
    }

    function init(){
        let prods=products.filter(x=>x.category=="Racquets"); //the first category is loaded by default
        render(prods);
    }

    $(function(){
        init();
    });
